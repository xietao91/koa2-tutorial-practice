const homeService = require('../service/home');
module.exports = {
    index: async (ctx, next) => {
        ctx.body = '<h1>index page</h1>';
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
        const data = await homeService.register(name, password);
        ctx.response.body = data;
    },
    404: async (ctx, next) => {
        ctx.body = '<h1>404 Not Found</h1>';
    }
};