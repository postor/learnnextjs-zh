# 构建和启动

首先，我们需要构建我们的Next.js应用程序进行生产。 它将生成一组优化的生产代码。

为此，只需添加以下npm脚本：

```
"scripts": {
  "build": "next build"
}
```

那么你需要在一个端口上启动你的Next.js应用程序。 这将做侧面渲染和服务页面（使用上述命令构建）。

为此，添加以下npm脚本：

```
"scripts": {
  "start": "next start"
}
```

这将启动我们的应用程序在3000端口。

因此，您可以运行以下命令在生产中运行我们的应用程序：

```
npm run build
npm run start
```