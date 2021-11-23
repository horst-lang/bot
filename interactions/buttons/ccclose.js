const { MessageEmbed, MessageActionRow, MessageButton, Interaction } = require("discord.js");
module.exports = {
    ids: ['cancelClose','confirmClose'],
    execute(message) {
        if(message.customId === 'cancelClose') {
            message.reply({content: 'Ok, cancelled!', ephemeral: true})
        }else if(message.customId === 'confirmClose') {
            let dt = new Date;
            let tickInfos = {
                name: message.channel.name,
                closedby: message.user,
                closedat: dt
            }
            message.channel.delete();
            const tickLogEmb = new MessageEmbed()
                .setColor('#D600D6')
                .setTitle('📩 Ticket closed')
                .addFields(
                    {name: 'Ticket name:', value: `${tickInfos.name}`},
                    {name: 'Closed by:', value: `${tickInfos.closedby.tag}`},
                    {name: 'Time:', value: `${tickInfos.closedat}`},
                )
            
            let chn = message.guild.channels.cache.get('911655324883226656');
            chn.send({embeds: [tickLogEmb]})
        }
    }
}