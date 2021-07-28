const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'; //inicio

client.once('ready', () => {
    console.log('djanho online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if (command === 'djanho') {
        message.channel.send('é os guri!');
    } else if (command === 'guri') {
        message.channel.send('bah os guri tão por nada');
    }
});


client.login('ODY5NzUwNjA1MjM1NzQ4OTA4.YQCwXw.kcBthGST549SSXbntu9vETjekWE');