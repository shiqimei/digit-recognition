"""
Train handwritten digits recognition model
"""
import torch
import os
import torch.nn as nn
import torchvision
import torchvision.transforms as transforms
from Config import *

def train():

    # initialize training configuration
    config = Config()

    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

    # Load MNIST dataset
    train_dataset = torchvision.datasets.MNIST(root=config.dataset_root, 
                                            train=True, 
                                            transform=transforms.ToTensor(),  
                                            download=True)
    
    test_dataset = torchvision.datasets.MNIST(root=config.dataset_root, 
                                            train=False, 
                                            transform=transforms.ToTensor())
    
    train_loader = torch.utils.data.DataLoader(dataset=train_dataset, 
                                            batch_size=config.batch_size, 
                                            shuffle=True)
    
    test_loader = torch.utils.data.DataLoader(dataset=test_dataset, 
                                            batch_size=config.batch_size, 
                                            shuffle=False)
    
    # Fully Connected Neural Network with one hidden layer
    class NeuralNet(nn.Module):
        def __init__(self, input_size, hidden_size, num_classes):
            super(NeuralNet, self).__init__()
            self.fc1 = nn.Linear(config.input_size, hidden_size) 
            self.relu = nn.ReLU()
            self.fc2 = nn.Linear(config.hidden_size, num_classes)  
        
        def forward(self, x):
            out = self.fc1(x)
            out = self.relu(out)
            out = self.fc2(out)
            return out
    
    model = NeuralNet(config.input_size,
                    config.hidden_size,
                    config.num_classes).to(device)
    
    # Loss and Optimizer
    criterion = nn.CrossEntropyLoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=config.learning_rate)  
    
    # Training model
    total_step = len(train_loader)
    for epoch in range(config.num_epochs):
        for i, (images, labels) in enumerate(train_loader):  
            # move tensors into GPU for calculation
            images = images.reshape(-1, 28*28).to(device)
            labels = labels.to(device)
            
            # Forward propagation
            outputs = model(images)
            loss = criterion(outputs, labels)
            
            # Back propagation and Optimization
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            
            if (i+1) % 100 == 0:
                print ('Epoch [{}/{}], Step [{}/{}], Loss: {:.4f}' 
                    .format(epoch+1, config.num_epochs, i+1, total_step, loss.item())) 
    # Save model
    if not os.path.exists(config.model_save_path):
        os.mkdir(config.model_save_path)
    torch.save(model.state_dict(), os.path.join(config.model_save_path, 'model.ckpt'))

if __name__ == "__main__":

    # training handwritten digits recognition model, using GPU if it is available
    train()
