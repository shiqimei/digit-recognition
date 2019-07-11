"""
Evaluate handwritten digits recognition model
"""

import torch
import os
import torchvision
import torchvision.transforms as transforms
from Config import *

# Use GPU if cuda is available
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

def evaluate(config):

    # Load model
    net = torch.load(os.path.join(config.model_save_path, config.net))
    net = net.to(device) # Move the model to GPU for calculation

    # evaluation mode
    net.eval()

    # Load MNIST training dataset
    test_dataset = torchvision.datasets.MNIST(root=config.dataset_root, 
                                            train=False, 
                                            transform=transforms.ToTensor())
                                            
    test_loader = torch.utils.data.DataLoader(dataset=test_dataset, 
                                            batch_size=config.batch_size, 
                                            shuffle=False)
    
    # Evaluating
    with torch.no_grad():
        correct = 0
        total = 0
        for images, labels in test_loader:
            images = images.reshape(-1, 28*28).to(device)
            labels = labels.to(device)
            outputs = net(images)
            _, predicted = torch.max(outputs.data, 1)
            total += labels.size(0)
            correct += (predicted == labels).sum().item()

    print('Accuracy of the network on the 10000 test images: {} %'.format(100 * correct / total))

if __name__ == "__main__":

    config = Config()

    # evaluating handwritten digits recognition model performance
    evaluate(config)