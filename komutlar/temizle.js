const Discord = require('discord.js');
const db = require('quick.db')

exports.run = function(client, message, args) {
console.log('Temizle kodundan ping aldık muarrem ustaa!')  

let sayi = args[0]

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu komudu kullanmak için /`MESAJLARI_YÖNET/` yetkisine sahip olmalısın!");
if(!sayi) return message.channel.send("`Lütfen 1 ile 300 arasında bir sayı giriniz!`");
if(sayi < 1) return message.channel.send('`Lütfen 1 ile 300 arasında bir sayı giriniz!`')

/*
KOD d0ru#7212 ye aittir izinsiz paylaşana hakkım haram olsun.
*/

//0 100 arası //////////////////////////////
if(sayi > 1 && sayi < 101)  {
 message.channel.bulkDelete(`${sayi}`)
};

message.channel.send(`${sayi} mesaj **silindi**!`)
message.channel.send(`Silen kullanıcı: <@${message.author.id}>`)
////////////////////////////////////////


//100 200 arası /////////////////////
if(sayi > 100 && sayi < 201)  {
let yukisayi = sayi - 100
 message.channel.bulkDelete(`${yukisayi}`)
 message.channel.bulkDelete('100')

message.channel.send(`${sayi} mesaj **silindi**!`)
message.channel.send(`Silen kullanıcı: <@${message.author.id}>`)
}
///////////////////////////////////////

//100 200 arası ///////////////////////
if(sayi > 200 && sayi < 301)  {
let yukissayi = sayi - 200
 message.channel.bulkDelete(`${yukissayi}`)
 message.channel.bulkDelete('100')
 message.channel.bulkDelete('100')

message.channel.send(`${sayi} mesaj **silindi**!`)
message.channel.send(`Silen kullanıcı: <@${message.author.id}>`)
}
////////////////////////////////////////////


}




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','temizlik'],
  permLevel: 1,
  category: 'temizlik' 
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};