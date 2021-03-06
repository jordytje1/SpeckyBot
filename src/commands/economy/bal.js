module.exports = {
    name: "balance",
    aliases: ["bal", "bank", "money"],
    category: "economy",
    description: "Gets your current bot balance [Experimental]",
}

module.exports.run = async (bot, msg) => {
    const { economy } = bot;
    let { author } = msg;

    const otheruser = msg.mentions.users.first();
    if(otheruser){
        bot.economySummon(otheruser);
        author = otheruser;
    }

    const embed = bot.embed()
    .setTitle('Bank')
    .setAuthor(author.tag,author.avatarURL)
    .setThumbnail(author.avatarURL)
    .addField("Balance", economy[author.id].money + "₪", true)
    msg.channel.send(embed);
};
