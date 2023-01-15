const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

require('./src/handlers/events_Handler')(client);
require('./src/handlers/commands_Handler')(client);

client.login(token);