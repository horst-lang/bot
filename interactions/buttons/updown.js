const { MessageEmbed } = require('discord.js');
const fs = require('fs');
module.exports = {
    ids: ['upBtn','downBtn','surQuestBtn'],
    execute(message) {
        const dt = new Date
        const sugs = require('../../suggestions.json');
            sugs.forEach(elem => {
                if (message.customId === 'upBtn' || message.customId === 'downBtn') {
                    if (elem.id === message.message.id && elem.voters.includes(message.user.id)) {
                        message.reply({content: `You can't vote twice!`, ephemeral: true});
                        return;
                    }else if (elem.id === message.message.id && !elem.voters.includes(message.user.id)) {
                        elem.voters.push(message.user.id);
                        if(message.customId === 'upBtn') {
                            elem.votes++;
                            write(sugs,message);
                        }else if(message.customId === 'downBtn') {
                            elem.votes--;
                            write(sugs,message);
                        }
                    }
                }else if (message.customId === 'surQuestBtn' && elem.id === message.message.id) {
                    const voteEmb = new MessageEmbed()
                        .setColor('#1300FF')
                        .setTitle('Vote count')
                        .setDescription(`This survey has ${elem.votes} votes.`)
                        .setTimestamp(dt)
        
                    message.reply({embeds: [voteEmb], ephemeral: true});
                }
            })
        function write(sugs,message) {
            fs.writeFileSync(`${__dirname}/../../suggestions.json`, JSON.stringify(sugs));
            message.reply({content: `Thanks for your feedback!`, ephemeral: true});
        }
    }
}