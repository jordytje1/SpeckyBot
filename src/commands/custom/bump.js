module.exports = {
    name: "bump",
	description: "Bumps the server!",
    usage: ``,
    category: `custom`,
	accessableby: "Members",
    aliases: [],
    servers: ['265505748413448193']
}

const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, msg) => {
    var random;
    if(bot.checkOwner(msg.author.id)){
        random = Math.floor(Math.random()*10000+1);
    }else{
        random = Math.floor(Math.random()*666+1);
    }
    let cEmbed = new RichEmbed()
    .setColor('#24B8B8')
    .setURL('https://disboard.org/server/265505748413448193')
    .setTitle(`**DISBOARD: The Public Server List**`)
    .setDescription(`<@${msg.author.id}>,\nBump succeeded :thumbsup:\nYou are now bump level ${random}!`)
    .setImage('https://cdn.discordapp.com/attachments/555484681135587338/599982089089187870/bot-command-image-bump.png')

    msg.channel.send(cEmbed);
}
