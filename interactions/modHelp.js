const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'modHelp',
    description: 'Shows the moderator/developer-only command list.',
    execute(message) {
        const dt = new Date
        const modHelpEmb = new MessageEmbed()
            .setColor('#B452FF')
            .setTitle('Mod help menu')
            .setDescription('Here are all commands that can only be executed by server members with certain permissions.')
            .setTimestamp(dt)
            .addFields(
                {name: '`h!kick <@member>` - Removes a member from the guild', value: 'Requires: `KICK_MEMBERS` permission', inline: true},
                {name: '`h!nuke` - Deletes all messages in a channel', value: 'Requires: `MANAGE_CHANNELS` permission', inline: true},
                {name: "`h!tweet <Text>` - Sends a Tweet to Horst's official Twitter account", value: 'Requires: <@&894184444699762688> role', inline: true},
            )
        message.update({embeds: [modHelpEmb]})
    }
}