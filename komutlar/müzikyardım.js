const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('13FF00')
        .setDescription(`═══════════════════════════════════════\n\n<a:ayar:592390265705201699> \`.yetkili\` ➠ Yetkili komutlarını listeler.\n\n<a:partybitmiyor:592388736218693633> \`.eğlence\` ➠ Eğlence komutlarını listeler.\n\n:busts_in_silhouette: \`.kullanıcı\` ➠ Kullanıcı komutlarını listeler.\n\n<a:music:592392390031966223> \`.müzik\` ➠ Müzik komutlarını listeler.\n\n:underage: \`.nsfw\` ➠ NSFW komutlarını listeler.\n\n═══════════════════════════════════════\n\n:star: \`Botu sunucuna davet et!\` ➠ [TIKLA!](https://discordapp.com/oauth2/authorize?client_id=589817736369012767&scope=bot&permissions=2146958847)\n\n📩 \`Bota oy ver!\` ➠ [TIKLA!](https://discordbots.org/bot/589817736369012767)\n\n📥 \`Destek sunucusuna katıl!\` ➠ [TIKLA!](https://discord.gg/c4DcqYn)\n\n═══════════════════════════════════════`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`© 2019 SruexBot`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'SruexBot Yardım Menüsünü Gönderir',
  usage: 'yardım'
};
