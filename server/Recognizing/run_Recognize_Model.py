"""
Recognize handwritten digits with trained model
"""

import torch
import os, sys
import torchvision
import torchvision.transforms as transforms
from Config import *
import json
sys.path.insert(0, os.path.abspath('..'))
from utils.base64_to_tensor import base64_to_tensor
from flask import Flask, request

# Use GPU if cuda is available
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Load configrations
config = Config()

# Load model
net = torch.load(os.path.join(config.model_save_path, config.net))
net = net.to(device) # Move the model to GPU for calculation
net.eval()

def recognize(base64_string):
    while 1:
        # Load image tensor from base64 string
        image_tensor = base64_to_tensor(base64_string)

        # Reshape
        image_tensor = image_tensor.view(-1, 28*28).to(device, dtype=torch.float)
        
        # Normalize
        image_tensor = image_tensor.type(torch.float) / 255

        [ output ] = net(image_tensor)

        _, predicted = torch.max(output.data, -1)

        # Predicted value
        result = predicted.item()

        # return the value
        return result

def flaskServer(PORT=4000):
    app = Flask(__name__)

    @app.route('/', methods=['POST'])
    def hello():
        base64 = request.data

        # Recognize
        if base64 != None:
            return json.dumps(recognize(base64))

    app.run(host='0.0.0.0', port=PORT)

if __name__ == "__main__":

    # HTTP server port
    PORT = 30330

    # Start flask
    flaskServer(PORT)