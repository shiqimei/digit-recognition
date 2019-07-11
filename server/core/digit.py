"""
手写数字识别
"""
import torch
import torch.nn as nn
import torchvision
import torchvision.transforms as transforms
 
# 设备配置（如有GPU，则使用GPU进行加速）
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
 
# 定义超参数 Hyper-parameters 
input_size = 784
hidden_size = 500
num_classes = 10
num_epochs = 50
batch_size = 100
learning_rate = 0.001
 
# 加载MNIST数据集 
train_dataset = torchvision.datasets.MNIST(root='dataset', 
                                           train=True, 
                                           transform=transforms.ToTensor(),  
                                           download=True)
 
test_dataset = torchvision.datasets.MNIST(root='dataset', 
                                          train=False, 
                                          transform=transforms.ToTensor())
 
train_loader = torch.utils.data.DataLoader(dataset=train_dataset, 
                                           batch_size=batch_size, 
                                           shuffle=True)
 
test_loader = torch.utils.data.DataLoader(dataset=test_dataset, 
                                          batch_size=batch_size, 
                                          shuffle=False)
 
# 全连接神经网络使用一个隐层
class NeuralNet(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(NeuralNet, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size) 
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, num_classes)  
    
    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out
 
model = NeuralNet(input_size, hidden_size, num_classes).to(device)
 
# 定义损失函数和优化器
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)  
 
# 训练模型
total_step = len(train_loader)
for epoch in range(num_epochs):
    for i, (images, labels) in enumerate(train_loader):  
        # 移动 tensors 至 GPU 中进行计算
        images = images.reshape(-1, 28*28).to(device)
        labels = labels.to(device)
        
        # 前向传递
        outputs = model(images)
        loss = criterion(outputs, labels)
        
        # 后向传播和优化
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
        if (i+1) % 100 == 0:
            print ('Epoch [{}/{}], Step [{}/{}], Loss: {:.4f}' 
                   .format(epoch+1, num_epochs, i+1, total_step, loss.item()))
 
# 测试模型
with torch.no_grad():
    correct = 0
    total = 0
    for images, labels in test_loader:
        # 移动 tensors 至 GPU 中进行计算
        images = images.reshape(-1, 28*28).to(device)
        labels = labels.to(device)
        outputs = model(images)
        _, predicted = torch.max(outputs.data, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()
 
    print('Accuracy of the network on the 10000 test images: {} %'.format(100 * correct / total))
 
# 保存模型
torch.save(model.state_dict(), 'model.ckpt')
