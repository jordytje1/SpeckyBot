module.exports = {
    name: "solo",
    description: "Gives you a solo girl!",
    category: "nsfw",
    aliases: ["sologirl","alone"]
}

module.exports.run = async (bot, msg) => {
    require('.\\functions\\img')(["girlSolo","girlSoloGif"],msg);
}
