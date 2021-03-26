const discord = require("discord.js");
const botConfig = require("./botConfig.json");

const client =new discord.Client();
client.login(botConfig.token);

client.on("ready", async() =>{

    console.log(`${client.user.username} is online`);
    client.user.setActivity("yt",{type: "Playing"});

});

var swearWords = ["fuck", "kut", "kanker", "hoer", "kk", "homo", "bitch", "lul", "klootzak", "trut", "godverdomme", "flikker", "mongool", "idioot"];

client.on("massage", async message => {

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;


    var msg = message.content.toLowerCase();

    for (let i = 0; i < swearWords.length; i++) {
 
        if(msg.includes(swearWords[i])) {

            message.delete();
 
            return message.reply("niet schelden a.u.b").then(msg => msg.delete({ timeout: 3000 }));

        }
    
    }

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(command === `${prefix}hallo`){
        return message.channel.send("HALLO ALLEMAAL");
    }

});

bot.login(process.env.token);