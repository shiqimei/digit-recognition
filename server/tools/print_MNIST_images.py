"""
Print the MNIST dataset images
"""

import os, sys
sys.path.insert(0, os.path.abspath('..'))
from utils.load_mnist import load_mnist
import numpy as np

# set max print width
np.set_printoptions(linewidth=150)

# Load images
images, _ = load_mnist('../dataset/MNIST/raw/')

# Print images in terminal
for i in range(len(images)):
    img = images[i].reshape(28, 28)
    print(img, "\n")