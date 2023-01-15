const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cheirinho')
        .setDescription('*SNIFF SNIFF*'),
    async execute(interaction) {
        await interaction.reply({ content: 'Cheirosa. * SNIFF *', ephemeral: true });
    }
}