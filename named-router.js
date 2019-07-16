const Koa = require("koa");
// 注意require('koa-router') 返回的是个函数
const router = require('koa-router')();
const app = new Koa();

// 添加路由
router.get('user','users/:id', async (ctx, next) => {
    ctx.body = '<h1>user page</h1>';
});

const userUrl = router.url('user', 3);
console.log( 'userUrl:' + userUrl);

const userUrl2 = router.url('user', 4);
console.log('userUrl2:' +userUrl2);


// 调用路由中间件
app.use(router.routes());


app.listen(3000, () => {
    console.log("服务器运行在 localhost://3000");
});
