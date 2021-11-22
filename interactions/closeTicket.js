const { MessageEmbed, MessageActionRow, MessageButton, Interaction } = require("discord.js");
module.exports = {
	name: 'closeTicket',
	description: 'Close the current ticket',
	execute(message) {
		if(message.member.roles.cache.has('900122479211720754')) {
			let dt = new Date;
			const closeEmb = new MessageEmbed()
				.setColor('#3F00E6')
				.setTitle('Are you sure that you want to close the ticket?')
				.setDescription('Press the buttons below to either close the ticket or cancel the closing')
				.setTimestamp(dt)

			const closeBtns = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setLabel('No, cancel')
						.setEmoji('🔓')
						.setCustomId('cancelClose')
						.setStyle('SUCCESS'),
					new MessageButton()
						.setLabel('Yes, close')
						.setEmoji('🔒')
						.setCustomId('confirmClose')
						.setStyle('DANGER')
				)

			message.reply({embeds: [closeEmb], components: [closeBtns], ephemeral: true})
		}else{
			message.reply({content: 'Tickets can only be closed by team members.', ephemeral: true})
		}
        message.channel
	},
};