module.exports = {
	name: 'guildMemberAdd',
	once: false,
	execute(member) {
        member.guild.channels.cache.get('893955871837671487').send(`Have fun Horsting, <@${member.id}>`);
        member.roles.add(member.guild.roles.cache.find(r => r.id === "894185545612271636"));
	},
};