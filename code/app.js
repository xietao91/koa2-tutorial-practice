const Koa = require("koa");
const router = require('./router');
const middleware = require('./middleware');
const app = new Koa();

// 添加中间件
middleware(app);
// 添加路由
router(app);

app.listen(3000, () => {
    console.log("服务器运行在 localhost://3000");
});
