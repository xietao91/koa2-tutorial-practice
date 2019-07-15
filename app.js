// console.log('hello world');
const Koa = require("koa");
const app = new Koa();

// 记录执行世间
app.use(async (ctx, next) => {
  let stime = new Date().getTime();
  await next();
  let etime = new Date().getTime();
  ctx.response.type = "text/html";
  ctx.response.body = "<h1>Hello World</h1>";
  console.log(`请求地址${ctx.path}, 响应时间: ${etime - stime}ms`);
});

app.use(async (ctx, next) => {
  console.log("中间件1 开始");
  await next();
  console.log("中间件1 结束");
});

app.use(async (ctx, next) => {
  console.log("中间件2 开始");
  await next();
  console.log("中间件2 结束");
});

app.use(async (ctx, next) => {
  console.log("中间件3 开始");
  await next();
  console.log("中间件3 结束");
});

app.listen(3000, () => {
  console.log("服务器运行在 localhost://3000");
});
