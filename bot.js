require('dotenv').config()
//const express = require('express');
//const app = express();

//const port = process.env.PORT || 3000;

const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_WEBHOOKS"]});

client.on('ready', () => {
    client.user.setActivity("Spider-Man: Miles Morales");
    console.log("Tom Holland Bot online and ready!");
});

client.on('channelCreate', channel => {
    if (channel.parent.name.includes("Spoiler")) {
        channel.send("Creating spoiler thread...").then(newMsg => {
            newMsg.startThread({
                name: channel.name + " SPOILERS",
                autoArchiveDuration: 1440,
                reason: 'Here there be spoilers!'
            }).then(newThread => {
                newThread.send("Thread created.  SPOIL AWAY!");
                channel.send("Spoiler thread created. \n\nENTER AT YOUR OWN RISK. \n\nHere there be spoilers.");
            })
        })

    }
})
client.login(process.env.BOT_TOKEN);

//app.listen(port, () => console.log('Tom Holland is listening on port %s!' % port));