## Introduction
### [utils.load_mnist.py ▸ load_minst(path)](./utils/load_mnist.py)

`load_mnist(path)` 函数返回两个数组，第一个是一个 n x m 维的 NumPy array(images)，这里的 n 是样本数(行数)，m 是特征数(列数)。MNIST 训练数据集包含 60000 个样本, 测试数据集包含 10000 个样本。数据集中的每张图片由 28 x 28 个像素点构成，每个像素点用一个灰度值表示。在这里, 我们将 28 x 28 的像素展开为一个一维的行向量，这些行向量就是图片数组里的行（每行 784 个值, 或者说每行就是代表了一张图片）。 `load_mnist(path)` 函数返回的第二个数组(labels) 包含了相应的目标变量，也就是手写数字的类标签(整数 0-9)。

## References
1. [THE MNIST DATABASE of handwritten digits](http://yann.lecun.com/exdb/mnist/)
2. [详解 MNIST 数据集](https://blog.csdn.net/simple_the_best/article/details/75267863)
3. [Pytorch 保存模型与加载模型](https://zhuanlan.zhihu.com/p/38056115)
4. [pytorch中torch.max函数用法](http://www.manongjc.com/article/35673.html)
5. [Pytorch中Tensor与各种图像格式的相互转化](https://oldpan.me/archives/pytorch-tensor-image-transform)
6. [python base64 编解码，转换成Opencv，PIL.Image图片格式](https://blog.csdn.net/dcrmg/article/details/80542665)
7. [【pytorch】图像基本操作](https://zhuanlan.zhihu.com/p/27382990)