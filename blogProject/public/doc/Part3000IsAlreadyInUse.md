我们在使用webstorm的时候会经常遇到这样的情况，出现这种情况的原因：
**①当我们同时在一个端口运行一个项目，再同时在这个端口运行其他项目时**
**②同一个项目未停止直接关闭webstorm窗口，再次打开项目运行时**

这时有一个万能的办法，那就是**重启电脑**，哈哈！**~~**

开玩笑了，当然，这个端口上的进程是可以停掉的。
打开cmd
键入

```
netstat -o -n -a | findstr :3000
```

3000为端口号，可以改为其他的。

之后可以看到3000端口的进程：![这里写图片描述](http://img.blog.csdn.net/20180221151309633?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTDE1NTgxOTg3Mjc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

之后键入

```
taskkill /F /PID 1776
```
则可以停掉对应序号的进程。之后再运行工程就不会有这种情况了。
