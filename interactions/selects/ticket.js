const { MessageEmbed, MessageActionRow, MessageButton, Interaction } = require("discord.js");
module.exports = {
  ids: ['supportSelect'],
  value: 'ticket',
	execute(message) {
    
    message.guild.channels.create(`ticket-${message.user.username.toLowerCase()}`, {
      type: "text",
      parent: "911576735731044372",
      permissionOverwrites: [
        {
          id: message.guild.roles.everyone,
          deny: ['VIEW_CHANNEL']
        },
        {
          id: message.user,
          allow: ['VIEW_CHANNEL','SEND_MESSAGES']
        },
        {
          id: message.guild.roles.cache.get('900122479211720754'),
          allow: ['VIEW_CHANNEL','SEND_MESSAGES']
        }
      ],
    }).then((channel) => {
      let newTick = channel;
      let dt = new Date;
      const ticketNotiEmb = new MessageEmbed()
        .setColor('#A454DE')
        .setTitle('New ticket created')
        .setDescription(`I've created a new support ticket for you! Check out <#${newTick.id}>`)
        .setTimestamp(dt)

      message.reply({embeds: [ticketNotiEmb], ephemeral: true});

      const tickEmb = new MessageEmbed()
        .setColor('#004695')
        .setTitle('New ticket')
        .setDescription('Please describe your problem. A member of the Horst team will help you as soon as possible.')
        .setAuthor(`Ticket created by ${message.user.tag}`, `${message.user.avatarURL()}`)
        .setTimestamp(dt)

      const tickActs = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setLabel('Close ticket')
            .setEmoji('🔒')
            .setStyle('DANGER')
            .setCustomId('closeTick')
        )
      

        newTick.send({content: '<@&900122479211720754>', embeds: [tickEmb], components: [tickActs]})
    })
	}
};