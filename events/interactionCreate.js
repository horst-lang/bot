const fs = require('fs');
const btnInteractionFiles = fs.readdirSync(`${__dirname}/../interactions/buttons`).filter(file => file.endsWith('.js'));
const selectInteractionFiles = fs.readdirSync(`${__dirname}/../interactions/selects`).filter(file => file.endsWith('.js'));
module.exports = {
	name: 'interactionCreate',
	once: false,
	execute(interaction) {
        
        if(interaction.isButton()) {
            for (const file of btnInteractionFiles) {
                const interact = require(`../interactions/buttons/${file}`);
                if(interact.ids.includes(interaction.customId)){
                    interact.execute(interaction);
                }
            }
        }else if(interaction.isSelectMenu()) {
            for (const file of selectInteractionFiles) {
                const interact = require(`../interactions/selects/${file}`);
                if(interact.ids.includes(interaction.customId) && interaction.values.includes(interact.value)){
                    interact.execute(interaction);
                }
            }
        }
	},
};