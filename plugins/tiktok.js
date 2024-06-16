const config = require('../config')
const fg = require('api-dylux')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
     pattern: "tiktok",
     alias: ["tt", "ttdl"],
     desc: "Downloads Tiktok Videos Via Url.",
     category: "downloader",
     filename: __filename,
     use: "<add tiktok url.>",
   },
   async (message, url) => {
     try {
       const fileType = url.toLowerCase().includes("doc")
         ? "document"
         : url.toLowerCase().includes("mp3")
         ? "audio"
         : "video";
 
       if (!url) {
         return await message.reply(
           `*Uhh Please, Provide me tiktok Video Url*\n*_Ex ${prefix}tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*`
         );
       }
 
       const tiktokUrl = url ? url.split(" ")[0] : "";
 
       if (!/tiktok/.test(tiktokUrl)) {
         return await message.reply(
           "*Uhh Please, Give me Valid Tiktok Video Url!*"
         );
       }
 
       const apiUrl = "https://aemt.me/download/tiktokdl?url=";
       const response = await fetch(`${apiUrl}?url=${tiktokUrl}`);
       const data = await response.json();
 
       if (data && data.video && data.video.noWatermark) {
         return await message.send(
           data.video.noWatermark,
           { caption: Config.caption },
           fileType,
           message
         );
       } else {
         return await message.reply("Error While Downloading Your Video");
       }
     } catch (error) {
       return message.error(`${error}\n\ncommand: tiktok`, error);
     }
   }
 );
