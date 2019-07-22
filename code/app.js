const Koa = require("koa");
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const app = new Koa();

app.use(bodyParser());
router(app);

app.listen(3000, () => {
    console.log("服务器运行在 localhost://3000");
});
