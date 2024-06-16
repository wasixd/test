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
/**
 smd(
   {
     pattern: "tiktok2",
     desc: "Downloads Tiktok Videos Via Url.",
     category: "downloader",
     filename: __filename,
     use: "<add tiktok url.>",
   },
   async (message, url) => {
     try {
       if (!url) {
         return await message.reply(
           `*Uhh Please, Provide me tiktok Video Url*\n*_Ex ${prefix}tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*`
         );
       }
 
       const tiktokUrl = url.split(" ")[0];
       if (!/tiktok/.test(tiktokUrl)) {
         return await message.reply(
           "*Uhh Please, Give me Valid Tiktok Video Url!*"
         );
       }
 
       const apiUrl = `https://aemt.me/download/tiktokdl?url=${encodeURIComponent(
         tiktokUrl
       )}`;
       const response = await fetchJson(apiUrl);
 
       if (response.status !== 200) {
         return await message.reply(`*Error: ${response.result}*`);
       }
 
       const videoUrl = response.result;
       const fileType = videoUrl.toLowerCase().includes("mp4")
         ? "video"
         : "document";
 
       await message.send(
         videoUrl,
         { caption: Config.caption },
         fileType,
         message
       );
     } catch (error) {
       console.error(error);
       return message.error(`${error}\n\ncommand: tiktok`, error);
     }
   }
 );




    
/***

cmd({
    pattern: "tiktok",
    react: "💃",
    alias: ["tik","tk"],
    desc: "Tiktok Video Downloader",
    category: "download",
    use: '.tiktok < Tiktok Url >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const data = await fg.tiktok(q)
const msgg =`
*CYBER-X TIKTOK DOWNLOADER* 📥

🖇️ *_Link -: ${q}_*

🧑‍🔧 User Name  -: ${data.unique_id}

⏲️ Duration -: ${data.duration}

📚 Description -: ${data.description}

──────────────────────
*ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ꜰᴏʀ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜ ɴᴇᴇᴅ ᴛʏᴘᴇ*

│ 🎥 *1 - Without Watermark*
│ 🎬 *2 - With Watermark*
│ 🎶 *3 - Audio Only*

*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*`

await conn.sendMessage(from, { image: { url : "https://telegra.ph/file/ad3f8fdd9a74e791c3c3f.jpg" } , caption: msgg }, { quoted: mek })

} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})
