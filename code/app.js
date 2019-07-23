const path = require('path');
const Koa = require("koa");
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
// 引入 koa-static
const staticFiles = require('koa-static');
const router = require('./router');
const app = new Koa();

// 指定public为静态资源目录,用于存放js,css,image等文件
app.use(staticFiles(path.resolve(__dirname,'./public/')));

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
