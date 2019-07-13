<p align="center"><img src="./docs/images/logo.png"></p>

## Introduction

Let's try to recognize the handwritten digits online with our single hidden layer Fully Connected Neural Network (aka. [FCNet](./server/Training/FCNet.py)), which is powered by the [MNIST](http://yann.lecun.com/exdb/mnist/) dataset 😄.

![](./docs/images/preview.gif)

## Playground

It will be nice if you can play with the project. Below are some basic guidelines for you to have a good start!

### Training & Evaluating
You can run [run_Train_Model.py](./server/Training/run_Train_Model.py) and [run_Evaluate_Model.py](./server/Evaluating/run_Evaluate_Model.py) to train and evaluate the model respectively.

### The Network architecture
Currently, we use a single hidden layer Fully Connected Network and make it be trained with MNIST dataset. Feel free to rdesign your own network architecture and replace the file [FCNet.py](./server/Training/FCNet.py) in the **server/Training** folder.

### Play with the utilities
We prepared some helpful tools for you in the [server/toos](./server/tools). You can do some work for the MNIST dataset with the help of these tools.

## License
This project is open source under the [MIT](./LICENSE) license.