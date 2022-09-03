// 引入koa2和Router
import Koa2 from 'koa2';
// 路由模块化设计
import router from './router/index.js';
// 统一异常处理函数模块
import errorHandler from './utils/errorHandler.js';
// 创建koa2实例
const app = new Koa2();

// 路由中间价安装
// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
app.use(async (ctx, next) => {
  await next();
  if (parseInt(ctx.status) === 404) {
      ctx.response.redirect("/404")
  }
})
app.use(router.routes(), router.allowedMethods());
// 调用异常处理函数
errorHandler(app);

// 路由重定向
router.redirect('/', '/home');

app.listen(4000, ()=>{
  console.log('server port 4000 is running ')
})