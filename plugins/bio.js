const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "team",
    react: "™️",
    alias: ["wasimd"],
    desc: "Get Cyber-X Dev Team Bio Details",
    category: "extra",
    use: '.team',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`⚖️ *wasimd dev team* ⚖️

👨‍✈️ *Below are the commands to get the details of the developer team of CYBER-X BOT.*

⭕ *Use the command you want and get the details you need*

┌──────────────────┐
│👨‍✈️ *WASI 𝚇 𝚃𝙴𝙰𝙼* 👨‍✈️ │
└──────────────────┘ 

📌  *.wasi*   -  _Get the bio details of founder and owner and main develpoer._

📌  *.taifur*     -  _Get the bio details of CO-OWNER and CO-CODER_

📌  *.aki*      -  _Get the bio details of CO-OWNER and CO-CODER_
/**
📌  *.naduwa*    -  _Get the the bio details of BETA TESTER AND BUG TESTER_

📌  *.tharuwa*   -  _Get the the bio details of BETA TESTER AND BUG TESTER_

📌  *.akash*     -  _Get the the bio details of BETA TESTER AND BUG TESTER_
**/
*WASI-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ WASI-TYECH-TEAM ᴏꜰᴄ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "wasi",
    react: "🎩",
    alias: ["wasiiii","waso","Itxxwsi","wasii"],
    desc: "Get Cyber-X Dev Team Bio Details",
    category: "",
    use: '.wasi',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`⚖️ *ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ ʙɪᴏ ᴅᴇᴛᴀɪʟꜱ* ⚖️

┌────────────────┐
│ 👨‍✈️ *𝙼𝚁. wasi* 👨‍✈️  │
└────────────────┘                                        

📌   *MR WASI MAIN DEVELOPER OF THIS BOT. 👨‍💻*

📌   *FOLLOW GITHUB. 👨‍💻👨‍💻*

▬▬▬▬▬▬▬▬▬▬▬

⭕ *PERSONAL GITHUB* - https://github.com/Itxxwasi/

📳 *CONTACT MR. DARKALPHA* - http://wa.me/923192173398

▬▬▬▬▬▬▬▬▬▬▬

*wasi_x_ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ wasi-tech-team *`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "taifur",
    react: "⚖️",
    alias: ["රොෂාන්","චමියා","tafoo","tafi","taifurr"],
    desc: "Get Cyber-X Dev Team Bio Details",
    category: "",
    use: '.chami',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`⚖️ *wasi-x ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ ʙɪᴏ ᴅᴇᴛᴀɪʟꜱ* ⚖️

┌─────────────┐
│👨‍✈️ *𝙼𝚁 taifur* 👨‍✈️ │
└─────────────┘                                        

📌   *MAIN OWNER IDEA OWNER CODE OWNER OF X BOT. 👨‍💻*

📌   *A member of the WASI-TECH-TEAM and he is the CO-OWNER and CO-CODER of the WASI-X BOT. 👨‍💻*

▬▬▬▬▬▬▬▬▬▬▬

⭕ *PERSONAL GITHUB* - https://github.com/https://github.com/Itxtaifur

📳 *CONTACT MR.CHAMIYA* - http://wa.me/923440470092

▬▬▬▬▬▬▬▬▬▬▬

*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})
/**
cmd({
    pattern: "akash",
    react: "⚡",
    alias: ["Akash","ආකාෂ්"],
    desc: "Get Cyber-X Dev Team Bio Details",
    category: "",
    use: '.akash',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`⚖️ *ᴄʏʙᴇʀ-x ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ ʙɪᴏ ᴅᴇᴛᴀɪʟꜱ* ⚖️

┌─────────────┐
│ 👨‍✈️ *𝙼𝚁. 𝙰𝙺𝙰𝚂𝙷* 👨‍✈️    │
└─────────────┘                                        

📌   *DARKALPHAXTEAM හි සාමාජිකයෙකු වන මොහු, CYBER-X BOT හි BUG TESTER සහ BETA TESTER වේ. 👨‍💻*

📌   *A member of the DARKALPHAXTEAM and he is the BETA TESTER and BUG TESTER of the CYBER-X BOT. 👨‍💻*

▬▬▬▬▬▬▬▬▬▬▬

⭕ PERSONAL GITHUB - https://github.com/Niranjana45

📳 CONTACT MR. AKASH - http://wa.me/94787820101

▬▬▬▬▬▬▬▬▬▬▬

*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "naduwa",
    react: "💫",
    alias: ["නදුන්","nadu","නදුවා","Nadu","Naduwa"],
    desc: "Get Cyber-X Dev Team Bio Details",
    category: "",
    use: '.naduwa',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`⚖️ *ᴄʏʙᴇʀ-x ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ ʙɪᴏ ᴅᴇᴛᴀɪʟꜱ* ⚖️

┌─────────────┐
│👨‍✈️ *𝙼𝚁. 𝙽𝙰𝙳𝚄𝚆𝙰*  👨‍✈️ │
└─────────────┘                                        

📌   *DARKALPHAXTEAM හි සාමාජිකයෙකු වන මොහු, CYBER-X BOT හි BUG TESTER සහ BETA TESTER වේ. 👨‍💻*

📌   *A member of the DARKALPHAXTEAM and he is the BETA TESTER and BUG TESTER of the CYBER-X BOT. 👨‍💻*

▬▬▬▬▬▬▬▬▬▬▬

⭕ *PERSONAL GITHUB* - https://github.com/nandundilhara

📳 *CONTACT MR. NADUWA* - http://wa.me/94715346004

▬▬▬▬▬▬▬▬▬▬▬

*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "nima",
    react: "🌙",
    alias: ["නිමේෂ්","නිමා","Nima","nimesh","Nimesh"],
    desc: "Get Cyber-X Dev Team Bio Details",
    category: "",
    use: '.nima',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`⚖️ *ᴄʏʙᴇʀ-x ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ ʙɪᴏ ᴅᴇᴛᴀɪʟꜱ* ⚖️

┌───────────┐
│👨‍✈️ *𝙼𝚁. 𝙽𝙸𝙼𝙰* 👨‍✈️ │
└───────────┘                                        

📌   *DARKALPHAXTEAM හි සාමාජිකයෙකු වන මොහු, CYBER-X BOT හි CO-OWNER සහ CO-CODER වේ. 👨‍💻*

📌   *A member of the DARKALPHAXTEAM and he is the CO-OWNER and CO-CODER of the CYBER-X BOT. 👨‍💻*

▬▬▬▬▬▬▬▬▬▬▬

⭕ *PERSONAL GITHUB* - https://github.com/DarkMakerofc

📳 *CONTACT MR. NIMA* - http://wa.me/+94715166712

▬▬▬▬▬▬▬▬▬▬▬

*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "tharuwa",
    react: "⭐",
    alias: ["tharu","Tharu","තරුවා","තරුෂ"],
    desc: "Get Cyber-X Dev Team Bio Details",
    category: "",
    use: '.tharuwa',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const maru =`⚖️ *ᴄʏʙᴇʀ-x ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ ʙɪᴏ ᴅᴇᴛᴀɪʟꜱ* ⚖️

┌──────────────┐
│ 👨‍✈️ *𝙼𝚁. 𝚃𝙷𝙰𝚁𝚄𝚆𝙰* 👨‍✈️  │
└──────────────┘                                        

📌   *DARKALPHAXTEAM හි සාමාජිකයෙකු වන මොහු, CYBER-X BOT හි BUG TESTER සහ BETA TESTER වේ. 👨‍💻*

📌   *A member of the DARKALPHAXTEAM and he is the BETA TESTER and BUG TESTER of the CYBER-X BOT. 👨‍💻*

▬▬▬▬▬▬▬▬▬▬▬

⭕ *PERSONAL GITHUB* - https://github.com/Tharushaa2004

📳 *CONTACT MR. THARUWA* - http://wa.me/94762862143

▬▬▬▬▬▬▬▬▬▬▬

*ᴄʏʙᴇʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} 
**/
catch (e) {
reply('*Error !!*')
l(e)
}
})
