const { MessageActionRow, MessageButton } = require("discord.js");
const fs = require('fs');
module.exports = {
    name: 'favPubTtodo',
    description: 'Favourite, publicize, todo',
    execute(message) {
        if(message.customId ===  'favBtn') {
            const delBtn = new MessageActionRow()
                .setComponents(
                    new MessageButton()
                        .setEmoji('🗑️')
                        .setCustomId('delBtn')
                        .setStyle('DANGER')
                )

            let favChan = message.guild.channels.cache.get('912053281671495743');
            favChan.send({embeds: [message.message.embeds[0]], components: [delBtn]});
        }else if(message.customId === 'pubBtn') {
            const upDownBtn = new MessageActionRow()
                .setComponents(
                    new MessageButton()
                        .setEmoji('912056879881019392')
                        .setCustomId('upBtn')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setEmoji('912056858372620349')
                        .setCustomId('downBtn')
                        .setStyle('SECONDARY'),
                    new MessageButton()
                        .setEmoji('❓')
                        .setCustomId('surQuestBtn')
                        .setStyle('SECONDARY')
                )
            
            let surveyChan = message.guild.channels.cache.get('909195143536574534');
            surveyChan.send({embeds: [message.message.embeds[0]], components: [upDownBtn]}).then((msg) => {
                let sugs = require('../suggestions.json');
                for (let i = 0; i < sugs.length; i++) {
                    if (sugs[i].feedId === message.message.id) {
                        message.reply({content: `You've already published that!`, ephemeral: true});
                        msg.delete();
                        return;
                    }
                }
                let obj = {"id":`${msg.id}`,"votes":0,"voters":[],"feedId":`${message.message.id}`}
                sugs.push(obj)
                fs.writeFileSync(`${__dirname}/../suggestions.json`, JSON.stringify(sugs));
                
                message.reply({content: 'Published!', ephemeral: true});
            })
        }
    }
}