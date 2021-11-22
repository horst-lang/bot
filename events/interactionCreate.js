module.exports = {
	name: 'interactionCreate',
	once: false,
	execute(interaction) {
        if (interaction.isSelectMenu()) {
            if (interaction.customId === 'supportSelect') {
                if (interaction.values[0] === 'ticket') {
                    const cmd = require('../interactions/ticket');
                    cmd.execute(interaction);
                }else if (interaction.values[0] === 'mod') {
                    const cmd = require('../interactions/applymod');
                    cmd.execute(interaction)
                }
            }
        }else if (interaction.isButton()) {
            if (interaction.customId === 'closeTick') {
                const cmd = require('../interactions/closeTicket');
                cmd.execute(interaction);
            }else if (interaction.customId === 'cancelClose' || interaction.customId === 'confirmClose') {
                const cmd = require('../interactions/ccclose');
                cmd.execute(interaction);
            }else if (interaction.customId === 'openTicket') {
                const cmd = require('../interactions/ticket');
                cmd.execute(interaction);
            }else if (interaction.customId === 'favBtn' || interaction.customId === 'pubBtn') {
                const cmd = require('../interactions/fpt');
                cmd.execute(interaction);
            }else if (interaction.customId === 'delBtn') {
                const cmd = require('../interactions/delete');
                cmd.execute(interaction);
            }else if (interaction.customId === 'upBtn' || interaction.customId === 'downBtn' || interaction.customId === 'surQuestBtn') {
                const cmd = require('../interactions/updown');
                cmd.execute(interaction);
            }
        }
	},
};