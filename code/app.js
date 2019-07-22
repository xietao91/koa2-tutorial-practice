const path = require('path');
const Koa = require("koa");
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const router = require('./router');
const app = new Koa();

app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),// 指定视图目录
    nunjucksConfig: {
        trimBlocks: true // 开启转义 防Xss
    }
}));

app.use(bodyParser());
router(app);

app.listen(3000, () => {
    console.log("服务器运行在 localhost://3000");
});
