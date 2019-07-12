"""
Convert base64 to tensor
"""

import base64
import numpy as np
from io import BytesIO
from PIL import Image
from torchvision import transforms
import cv2
import re
import torch

# "cuda"
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# set max-width and threshold
torch.set_printoptions(linewidth=150, threshold=np.inf)

def base64_to_tensor(base64_string):
    base64_decoded = base64.b64decode(base64_string)
    image = Image.open(BytesIO(base64_decoded))
    image = image.convert('L') # convert image to grey
    image_np_array = np.array(image)
    tensor = torch.from_numpy(image_np_array)
    return tensor