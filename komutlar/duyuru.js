const Discord = require('discord.js');

exports.run = (client, message, args) => {

  if (message.author.id !== "391669533389094934") return message.channel.send('Bu komut sahibime özel')

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Hey Sen Napıyorsun', 'Ben Sunucu Botuyum Lütfen Beni Sunucunda Dene.')
    return message.author.sendEmbed(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');

  message.delete();


      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyuru'],
  permLevel: 0
};

exports.help = {
  description: 'Mesajınızı botun bulunduğu sunucudaki insanlara duyurur.',
  name: 'duyur',
  usage: 'duyur [mesajınız]'
};