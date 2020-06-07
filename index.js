const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./WendyConfiguration.json");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Wendy') {
    msg.reply('Hello I Am Wendy!');
  }
});

client.login('token');
