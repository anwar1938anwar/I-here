const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("620623749586092045")
setInterval(function() {
channel.send(`I ANWAR YOU TUBE GG - DONT BAN - HAAAAAAAHHHAAAAAAAAAAAAAAAAAAAAA`);
}, 30)
})

client.login(process.env.BOT_TOKEN);