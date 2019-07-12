"""
Print image tensor from MNIST dataset
"""

import os, sys
import torch
sys.path.insert(0, os.path.abspath('..'))
from utils.load_mnist import load_mnist
from torchvision.utils import save_image

# Use GPU if cuda is available
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Set max print width
torch.set_printoptions(linewidth=150)

def transform(images_save_root):
    # Load images and labels
    images, labels = load_mnist('../dataset/MNIST/raw/')

    # Print image
    for index, image in enumerate(images):
        if index == 322:
            image_tensor = torch.from_numpy(image)
            
            # Reshape the tensor
            image_tensor = image_tensor.view(1, 28, 28).to(device)
            
            # Print
            print(image_tensor)
        
if __name__ == "__main__":

    images_save_root = "../dataset/MNIST_images/"

    # extract images from MNIST dataset
    transform(images_save_root)