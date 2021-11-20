const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'applymod',
    description: 'Apply as a server moderator',
    execute(message) {
        message.reply({content: `This doesn't exist yet!`, ephemeral: true})
    }
}