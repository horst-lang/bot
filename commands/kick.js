const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'kick',
    description: 'Removes a member from a server',
    execute(message,args) {
        if(message.member.permissions.has('KICK_MEMBERS')) {
            let kickUser = message.mentions.users.first();
            const kickEmb = new MessageEmbed()
                .setColor('#0400FF')
                .setTitle('You were kicked from the Horst server.')
                .setDescription(`Heres [another invite](https://horstlang.org/discord). Feel like this was a mistake? Rejoin and create a ticket!`)

            const kickMember = message.guild.members.resolve(kickUser);
            kickMember.kick;
            kickUser.send({embeds: [kickEmb]});
            message.reply('Kicked!');
        }else{
            message.reply('You need some more permissions to do that...');
        }
    }
}