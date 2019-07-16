const Koa = require("koa");
// 注意require('koa-router') 返回的是个函数
const router = require('koa-router')();
const app = new Koa();

// 添加路由
router.get('/', async (ctx, next) => {
    ctx.body = '<h1>index page</h1>';
});

router.get('/home', async (ctx, next) => {
    ctx.body = '<h1>home page</h1>';
});

router.get('/404', async (ctx, next) => {
    ctx.body = '<h1>404 Not Found</h1>';
});

// 调用路由中间件
app.use(router.routes());


app.listen(3000, () => {
    console.log("服务器运行在 localhost://3000");
});
