const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'nuke',
    description: 'Deletes alll messages from a text channel',
    execute(message,args) {
        if(message.member.permissions.has('MANAGE_CHANNELS')) {
            const pos = message.channel.position;
            message.channel.clone().then((channel) => {
                message.channel.delete();
                channel.setPosition(pos)
                const nukeEmb = new MessageEmbed()
                    .setColor('#BD00FF')
                    .setTitle('Channel was nuked')
                    .setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestanimations.com%2FMilitary%2FExplosions%2Fatomic-mushroom-cloud-explosion-2-2.gif&f=1&nofb=1')
                channel.send({embeds: [nukeEmb]});
            })
        }else{
            message.reply('You need some more permissions to do that...');
        }
    }
}