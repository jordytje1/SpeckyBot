module.exports = {
    name: 'channels'
}

module.exports.run = async (bot, data) => {
    if(!data.args[0]){
        console.table(
            bot.guilds.map(g=>g.channels.sort().map(c => `{${g.id}}\t${g.name}\t[${c.id}]\t${c.name}\t(${c.type})`).join('\n')).join('\n').info
        )
    }else{
        const guild = bot.guilds.get(data.args[0]);

        if(guild){
            console.log(
                guild.channels.sort().map(c => `{${c.guild.id}}\t${c.guild.name}\t[${c.id}]\t(${c.type.toUpperCase()})\t${c.name}`).join('\n').info
            )
        }else{
            console.log("Guild not found".error)
        }
    }
}
