const config = require('../config.json');
const {TwitterApi} = require('twitter-api-v2');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'tweet',
    description: 'Tweet something!',
    execute(message,args) {
        if(message.member.roles.cache.has('894184444699762688')) {
            const client = new TwitterApi({
                appKey: config.twitter.appKey,
                appSecret: config.twitter.appSecret,
                accessToken: config.twitter.accessToken,
                accessSecret: config.twitter.accessSecret
            });
        
        let tweetText = args.join(" ")
        client.v1.tweet(tweetText).then((val) => {
            const tweetEmb = new MessageEmbed()
                .setColor('#1DA1F2')
                .setTitle('Tweeted!')
                .setDescription('`' + tweetText + '` was tweeted.\n' + `\n[View tweet](https://twitter.com/${val.user.screen_name}/status/${val.id_str})`)
            message.reply({embeds: [tweetEmb]})
        }).catch((err) => {
            message.reply(err)
        });
        }else{
            message.reply(`You can't do that!`)
        }
    }
}