module.exports = {
    register: async (name, password) => {
        if (name === 'ikcamp' && password === '123456') {
            return `<h3>hello ,${name}</h3>`
        }
        return '账号出现错误'
    }
}