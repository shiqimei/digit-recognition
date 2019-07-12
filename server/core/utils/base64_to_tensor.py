"""
Convert base64 to tensor
"""

import base64
import numpy as np
import cv2
import re
import torch

def base64_to_tensor():
    image_base64 = input()
    missing_padding = 4 - len(image_base64) % 4

    if missing_padding:
        image_base64 += (b'='* missing_padding).decode()

    image_base64_decoded = base64.b64decode(image_base64)
    image_np_array = np.fromstring(image_base64_decoded, np.uint8)

    return torch.from_numpy(image_np_array).view(-1, 28, 28)