const Koa = require("koa");
const bodyParser = require('koa-bodyparser');
// 注意require('koa-router') 返回的是个函数
const router = require('koa-router')();
const app = new Koa();

app.use(bodyParser());

// 添加路由
router.get('/:id/:name', async (ctx, next) => {
    console.log(ctx.params);
    ctx.body = '<h1>index page</h1>';
});

router.get('/home', async (ctx, next) => {
    console.log(ctx.query);
    console.log(ctx.querystring);
    ctx.body = '<h1>home page</h1>';
});

// 增加返回表单页面的路由
router.get('/user', async (ctx, next) => {
    ctx.body =
        `
      <form action="/user/register" method="post">
        <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
        <br/>
        <input name="password" type="text" placeholder="请输入密码：123456"/>
        <br/> 
        <button>GoGoGo</button>
      </form>
    `
});

// 增加提交表单后响应的路由
router.post('/user/register', async (ctx, next) => {
    const { name, password } = ctx.request.body;
    if (name === 'ikcamp' && password === '123456') {
        ctx.response.body = `<h3>Hello ,${name}</h3>`;
    } else {
        ctx.response.body = '账号信息错误';
    }
})

router.get('/404', async (ctx, next) => {
    ctx.body = '<h1>404 Not Found</h1>';
});

// 调用路由中间件
app.use(router.routes());


app.listen(3000, () => {
    console.log("服务器运行在 localhost://3000");
});
