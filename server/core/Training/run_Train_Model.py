"""
Train handwritten digits recognition model
"""

import torch
import os
import torch.nn as nn
import torchvision
import torchvision.transforms as transforms
from Config import *
from FCNet import *

# Use GPU if cuda is available
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

def train(config):

    # Load MNIST training dataset
    train_dataset = torchvision.datasets.MNIST(root=config.dataset_root, 
                                            train=True, 
                                            transform=transforms.ToTensor(),  
                                            download=True)

    train_loader = torch.utils.data.DataLoader(dataset=train_dataset, 
                                            batch_size=config.batch_size, 
                                            shuffle=True)

    # Create Fully Connected Network (see details in FCNet.py)
    net = FCNet().to(device)
    
    # Loss and Optimizer
    criterion = nn.CrossEntropyLoss()
    optimizer = torch.optim.Adam(net.parameters(), lr=config.learning_rate)  
    
    # Training model
    total_step = len(train_loader)
    for epoch in range(config.num_epochs):
        for i, (images, labels) in enumerate(train_loader):  
            # Move tensors into GPU for calculation
            images = images.reshape(-1, 28*28).to(device)
            labels = labels.to(device)
            
            # Forward propagation
            outputs = net(images)
            loss = criterion(outputs, labels)
            
            # Back propagation and Optimization
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            
            if (i+1) % 100 == 0:
                print ('Epoch [{}/{}], Step [{}/{}], Loss: {:.4f}' 
                    .format(epoch+1, config.num_epochs, i+1, total_step, loss.item())) 
    # Saving model
    if not os.path.exists(config.model_save_path):
        os.makedirs(config.model_save_path)
    torch.save(net, os.path.join(config.model_save_path, 'FCNet_model.ckpt'))

if __name__ == "__main__":

    # Initialize configurations
    config = Config()

    # training handwritten digits recognition model, using GPU if it is available
    train(config)
