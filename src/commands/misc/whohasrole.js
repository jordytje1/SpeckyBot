module.exports = {
    name: "whohasrole",
    description: "Returns all users that has this role!",
    usage: "[roleID]",
    category: "misc",
    aliases: ["whr"]
}

const { RichEmbed } = require('discord.js')

module.exports.run = async (bot, msg) => {
    const role = msg.guild.roles.get(msg.Args[0])

    if(role){
        const membs = [];
        role.members.forEach(member => {
            membs.push(member.toString())
        })
        const embed = new RichEmbed()
        .setTitle(role.name)
        .setDescription(membs.join("\n"))
        .setColor(role.hexColor);

        msg.channel.send(embed)
    }else{
        return bot.cmdError("ID is not a valid snowflake")
    }
}
