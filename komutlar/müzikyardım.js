const Discord = require('discord.js');




exports.run = (client, message, params) => {
  const müzik = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x8e44ad)
  .addField(`Müzik`, '.müzik çal: İstediğin şarkıyı çalar.\n.müzik durdur: Müziği durdurur.\n.müzik devam: Müziği devam ettirir.\n.müzik kuyruk: Kuyruğu söyler\n.müzik geç: Geçerli çalınan müziği geçer\n.müzik ses: Belirlediğiniz değerde sesi açar.')
  .setFooter(`Night WİSH - Tüm hakları saklıdır.`, client.user.avatarURL)
  console.log("Oralet Bildirme: .müzik komutu " + message.author.username + " kanalında kullanıldı.")
  return message.channel.sendEmbed(müzik);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['müzik'],
    permLevel: 0
  };

  exports.help = {
    name: 'müzikyardım',
    description: 'müzikyardım',
    usage: 'müzikyardım'
  };
