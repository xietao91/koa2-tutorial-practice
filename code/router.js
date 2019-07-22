// 注意require('koa-router') 返回的是个函数
const router = require('koa-router')();
const homeController = require('./controller/home');
module.exports = (app) => {
    // 添加路由
    router.get('/', homeController.index);

    router.get('/home', homeController.home);

    // 参数在URL中
    router.get('/home/:id/:name', homeController.homeParam);

    // 增加返回表单页面的路由
    router.get('/user', homeController.login);

    // 增加提交表单后响应的路由
    router.post('/user/register', homeController.register)

    router.get('/404', homeController['404']);

    // 调用路由中间件
    app.use(router.routes())
        .use(router.allowedMethods());
};