const { MessageEmbed } = require("discord.js");
module.exports = {
	name: 'feedback',
	description: 'Give feedback on Horst',
	execute(message, args) {
		let feedback = args.toString().replaceAll(',', ' ');
		const feedbackEmb = new MessageEmbed()
			.setColor('#B452FF')
			.setTitle('New feedback')
			.setAuthor(`Sent by ${message.author.tag}`, `${message.author.avatarURL()}`)
			.setDescription('Feedback: `' + feedback + '`')
		
		let chan = message.guild.channels.cache.get('905849971671179295');
		chan.send({content: '<@&900122479211720754>', embeds: [feedbackEmb]});
		message.reply('Thanks for your feedback. A staff member will review it as soon as possible.')
	},
};