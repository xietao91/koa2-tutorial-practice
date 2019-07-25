const path = require('path');
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');
const ip = require('ip');
const miSend = require('./mi-send');
const miLog = require('./mi-log');

module.exports = (app) => {
    app.use(miLog());
    app.use(miSend({env: app.env,  // koa 提供的环境变量
        projectName: 'koa2-tutorial',
        appLogLevel: 'debug',
        dir: 'logs',
        serverIp: ip.address()}));
    // 指定public为静态资源目录,用于存放js,css,image等文件
    app.use(staticFiles(path.resolve(__dirname, '../public')));
    app.use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, '../views'),// 指定视图目录
        nunjucksConfig: {
            trimBlocks: true // 开启转义 防Xss
        }
    }));
    app.use(bodyParser());
};