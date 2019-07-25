module.exports = () => {
    function render(json) {
        this.set('Content-Type', 'application/json');
        this.body = JSON.stringify(json);
    }

    return async (ctx, next) => {
        ctx.send = render.bind(ctx);
        // 调用ctx上下文的log对象的error方法
        ctx.log.info('ikcamp');
        await next();
    }
};