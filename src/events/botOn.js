const { ActivityType, Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(bot) {
        // await bot.user.setUsername('Algum nome ai'); // Aqui poderá mudar o nome do bot toda vez que ele inicia.
        // await bot.user.setAvatar('https://i.imgur.com/algumafotoai'); // Aqui você muda o avatar dele (Porém caso ative isso e ligar o bot várias vezes seguidas, poderá tomar um ban temporário da api, fazendo com que ele não lige, caso aconteça, só comentar essa linha de código e rodar o bot normalmente.)
        await bot.user.setActivity('Vill é uma cheirosa. UwU', { type: ActivityType.Playing }); // Aqui você troca a atividade do bot.
        await bot.user.setStatus('idle'); // Aqui você troca o status.
        console.log(`login successfully on ${bot.user.username}#${bot.user.discriminator}`); // Mensagem que aparece no console para dizer que o bot iniciou normalmente.
    }
}