现在我们知道如何创建一个简单的Next.js应用程序并运行它。 我们简单的应用程序只有一个页面，但是我们可以添加尽可能多的页面。 例如，我们可以通过将以下内容添加到pages / about.js来创建“关于”页面：

```
export default () => (
  <div>
    <p>This is the about page</p>
  </div>
)
```

 然后我们可以访问该页面 http://localhost:3000/about.

之后，我们需要连接这些页面。 我们可以使用HTML“a”标签。 但是，它不会执行客户端导航; 它通过服务器导航到页面，这不是我们想要的。

为了支持客户端导航，我们需要使用Next.js的Link API，它通过 `next/link` 导出。

我们来看看如何使用它。