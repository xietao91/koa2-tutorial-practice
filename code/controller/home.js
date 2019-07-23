const homeService = require('../service/home');
module.exports = {
    index: async (ctx, next) => {
        await ctx.render('home/index', {title: 'ikcamp欢迎你'});
    },
    home: async (ctx, next) => {
        console.log(ctx.request.query);
        console.log(ctx.request.querystring);
        ctx.body = '<h1>home page</h1>';
    },
    homeParam: async (ctx, next) => {
        console.log(ctx.params);
        ctx.body = '<h1>home page /:id/:name</h1>';
    },
    login: async (ctx, next) => {
        await ctx.render('home/login', {
            btnName: 'gogogo'
        });
    },
    register: async (ctx, next) => {
        const { name, password } = ctx.request.body;
        const res = await homeService.register(name, password);
        if(res.status === -1){
            await ctx.render('home/login',res.data);
        } else {
            ctx.state.title = "个人中心"
            await ctx.render('home/success', res.data);
        }
    },
    404: async (ctx, next) => {
        ctx.body = '<h1>404 Not Found</h1>';
    }
};