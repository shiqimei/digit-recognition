"""
Configuration for handwritten digits recognition model and evaluation
Created by lolimay <lolimay@lolimay.cn>
"""

class Config:
    def __init__(self):
        # Hyper-parameters
        self.input_size = 784
        self.hidden_size = 500
        self.num_classes = 10
        self.num_epochs = 1
        self.batch_size = 100
        self.learning_rate = 0.001

        # MNIST dataset root path
        self.dataset_root="../dataset/"

        # path for loading your trained model
        self.model_save_path="../model/"

        # which model to use
        self.net = "FCNet_model.ckpt"