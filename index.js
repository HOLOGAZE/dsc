const discord = require('discord.js');
const client = new discord.Client;

client.on('message', message => {

prefix = 'j!'
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();


    if (command == 'triggered') {
        message.channel.send(`Don't pull a Goose...`)
    } else if(command == 'guilded') {
        message.channel.send(`https://www.guilded.gg/i/aEA97wwE`)
    } else if(command == 'discord') {
        message.channel.send(`https://discord.gg/7JtNvTtfuJ`)
    } else if(command == 'noham') {
        message.channel.send(`Shh.. That never happened.`)
    } else if(command == 'juice') {
        message.channel.send(`hey`)
    } else if(command == 'kiss') {
        message.channel.send(`back off...`)
    } else if(command == 'say') {
        const say = args.join(" ");
        message.channel.send(say)
        message.delete()
    }
});

client.login('');
