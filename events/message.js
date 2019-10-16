const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix

module.exports = async message => {
  let client = message.client
    let prefix = require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  

  }
   
  
  if (cmd) {

        if (cmd.conf.enabled === false) {

      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {

        const embed = new Discord.RichEmbed()
        .addField("*Komut Yapım Aşamasında !*",` \n __**${cmd.help.name}**__ Komutu Şuanda Sunucularda Kullanıma Kapalıdır! `)
                    .setColor("#ff0000")
                    .setThumbnail('https://i.ibb.co/s2qGRFx/kod.png')
                    .setTimestamp()
                    .setFooter(message.author.username , message.author.avatarURL)

                message.channel.send({embed})
                return
                 
      }
    }
    
    if (perms < cmd.conf.permLevel) return;
    cmd.run (client, message, params, perms);
  }
 
};