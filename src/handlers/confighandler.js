const { writeFileSync, appendFileSync, existsSync } = require('fs');
const { join } = require('path');

module.exports = async () => {
    const template =
    {
        token: "TOKEN_HERE",
        prefix: "!",
        owner: ["376384142599782410", "376384142599782410"]
    }

    let config;

    try{
        config = require(join(process.cwd(),'..','config.json'));
    }catch(err){
        console.log("Wasn't able to load config.json a new file got created: template.config.json".error);

        if (!existsSync(join(process.cwd(),'..','template.config.json'))) {
            appendFileSync(join(process.cwd(),'..','template.config.json'), JSON.stringify(template,null,4));
        }

        return new Promise((resolve, reject) => reject("config.json is invalid".error))
    }


    const nConfig = config;

    const items = ["token","prefix","color"]
    const bools = ["extra_apikeys","reply_unexisting_command","load_nsfw"]
    const apikeys = ["youtube"]
    const arrays = ["owner","bannedUsers"]

    items.forEach(conf => {
        if(typeof config[conf] == "undefined"){
            nConfig[conf] = conf.toUpperCase()
        }
    });

    bools.forEach(conf => {
        if(typeof config[conf] != "boolean"){
            nConfig[conf] = false;
        }
    })

    if(typeof config.apikeys != "object"){
        nConfig.apikeys = {}
    }

    if(config.extra_apikeys == true){
        apikeys.forEach(conf => {
            if(typeof config.apikeys[conf] == "undefined"){
                nConfig.apikeys[conf] = conf.toUpperCase()
            }
        })
    }

    arrays.forEach(conf => {
        if(typeof config[conf] == "undefined"){
            nConfig[conf] = []
        }
    });

    if(Object.is(config, nConfig)){
        const conf = JSON.stringify(nConfig, null, 4)

        writeFileSync(join(process.cwd(),'..','config.json'), conf, {})
    }
}
