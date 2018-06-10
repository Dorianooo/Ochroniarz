const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDU1MTg2ODA0MDM2MDc1NTMw.Df4VVw.8WvbDSupOy7pgrR0UG6zO_w3ZA0);
