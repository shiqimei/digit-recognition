"""
Recognize handwritten digits with trained model
"""

import torch
import os, sys
import torchvision
import torchvision.transforms as transforms
from Config import *
os.chdir(os.path.dirname(__file__))
sys.path.insert(0, os.path.abspath('..'))
from utils.base64_to_tensor import base64_to_tensor

# Use GPU if cuda is available
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

def recognize(config):

    # Load model
    net = torch.load(os.path.join(config.model_save_path, config.net))
    net = net.to(device) # Move the model to GPU for calculation

    # evaluation mode
    net.eval()

    while 1:
        # Load image tensor from base64 string
        image_tensor = base64_to_tensor(input())

        # Reshape
        image_tensor = image_tensor.view(-1, 28*28).to(device, dtype=torch.float)

        torch.set_printoptions(linewidth=150)
        
        # Normalize
        image_tensor = image_tensor.type(torch.float) / 255

        [ output ] = net(image_tensor)

        _, predicted = torch.max(output.data, -1)

        # Predicted value
        result = predicted.item()

        # Output value
        print(result)

if __name__ == "__main__":

    config = Config()

    # recognizing handwritten digit with trained model
    recognize(config)