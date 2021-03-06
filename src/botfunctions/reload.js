const { join } = require('path');

module.exports = (bot) => {
    bot.reload = () => {
        const begin = new Date();

        require(join(process.cwd(),'handlers','botloader'))(bot);

        const end = new Date();
        const time = end - begin;

        return {time}
    }
}
