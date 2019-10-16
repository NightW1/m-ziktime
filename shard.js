const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./app.js', {// Ana dosyanızın adını yazınız.
    totalShards: 'auto',
    token: "NjA0MzYwMjkxOTQxMzUxNDQ5.XTtEcg.iHZwncOteJCfTBDYFmcYGHd929A"// Buraya tokeninizi yazınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);