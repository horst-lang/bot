const { MessageEmbed, MessageActionRow, MessageButton, Interaction, MessageSelectMenu } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Displays all commands',
	execute(message, args) {
		let dt = new Date
		const helpEmb = new MessageEmbed()
			.setColor('#B452FF')
			.setTitle('Help menu')
			.setDescription(`Welcome to **Horst**, the easy and open-source programming language!\n \n**Command list:**\n \n`)
			.setThumbnail('https://i.ibb.co/NtvQ0KW/Frame-4horst.png')
			.setTimestamp(dt)
			.addFields(
				{ name: '⚒️Utilities', value: '`h!help` - Shows Horst commands/infos\n`h!feedback <feedback>` - Sends feedback to the Horst developers.'}
			)
			.setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL()}`)
		
		const links = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Website')
					.setStyle('LINK')
					.setURL('https://horstlang.org')
					.setDisabled('false'),
				new MessageButton()
					.setLabel('Docs')
					.setStyle('LINK')
					.setURL('https://docs.horstlang.org')
					.setDisabled('false')
			);
		const select = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
				.setCustomId('supportSelect')
				.setPlaceholder('Nothing selected')
				.addOptions([
					{
						label: 'Open a ticket',
						description: 'Opens a support ticket in which you can directly communicate with Horst support',
						value: 'ticket',
						emoji: '🎫'
					},
					{
						label: 'Mod command list',
						description: 'Shows the moderator/developer-only command list.',
						value: 'modList',
						emoji: '👮'
					}
				])
			)		
	message.reply({embeds: [helpEmb], components: [links,select]});
	},
};