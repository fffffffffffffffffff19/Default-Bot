const { ActivityType, Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(bot) {
        // await bot.user.setUsername('DeverasBot'); // Aqui poderá mudar o nome do bot toda vez que ele inicia.
        // await bot.user.setAvatar('https://i.pinimg.com/564x/a1/8c/1c/a18c1c47a060c0b5bb2a40de743ebcbe.jpg'); // Aqui você muda o avatar dele (Porém caso ative isso e ligar o bot várias vezes seguidas, poderá tomar um ban temporário da api, fazendo com que ele não lige, caso aconteça, só comentar essa linha de código e rodar o bot normalmente.)
        await bot.user.setActivity('Pinto', { type: ActivityType.Streaming, url: 'https://www.twitch.tv/schiaaavon' }); // Aqui você troca a atividade do bot.
        // await bot.user.setStatus('idle'); // Aqui você troca o status.
        console.log(`login successfully on ${bot.user.username}#${bot.user.discriminator}`); // Mensagem que aparece no console para dizer que o bot iniciou normalmente.
    }
};
