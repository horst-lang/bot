module.exports = {
	name: 'interactionCreate',
	once: false,
	execute(interaction) {
        if (interaction.isSelectMenu()) {
            if (interaction.customId === 'supportSelect') {
                if (interaction.values[0] === 'ticket') {
                    const cmd = require('../addFiles/ticket')
                    cmd.execute(interaction);
                }
            }
        }else if (interaction.isButton()) {
            if (interaction.customId === 'closeTick') {
                const cmd = require('../addFiles/closeTicket')
                cmd.execute(interaction)
            }else if (interaction.customId === 'cancelClose' || interaction.customId === 'confirmClose') {
                const cmd = require('../addFiles/ccclose')
                cmd.execute(interaction)
            }else if(interaction.customId === 'openTicket') {
                const cmd = require('../addFiles/ticket')
                cmd.execute(interaction)
            }
        }
	},
};