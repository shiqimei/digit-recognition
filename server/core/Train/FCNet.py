"""
Fully Connected Neural Network with one hidden layer
Created by lolimay <lolimay@lolimay.cn>
"""

import torch
import torch.nn as nn
from Config import *

class FCNet(nn.Module):

    def __init__(self):
        super(FCNet, self).__init__()
        self.config = Config() # load configrations
        self.fc1 = nn.Linear(self.config.input_size, self.config.hidden_size) 
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(self.config.hidden_size, self.config.num_classes)  

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out