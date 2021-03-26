const discord = require('discord.js');
const client = new discord.Client;

client.on('message', message => {

prefix = 'dsc'
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();


    if (command == 'spam') {
        function repeat(func, times) {
            func();
            times && --times && repeat(func, times);
        }

        repeat(function () { message.channel.send(`${args[0]}`); }, `${args[1]}`);
    }
});

client.login('TOKEN_HERE');
