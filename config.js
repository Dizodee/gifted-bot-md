const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="admin@giftedtechnexus.co.ke"
global.location="Eldoret,Kenya."
global.mongodb= process.env.MONGODB_URI || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Giftedmaurice/gifted-bot-md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/54efddccf41281ad7ec51.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254795048213" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "admin";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254795048213";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728782591,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://qr-scan.giftedtechnexus.co.ke/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©²⁰²⁴ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o"),
 
  author : process.env.PACK_AUTHER|| "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "dee",
  ownername:process.env.OWNER_NAME|| "It's Dee",

  sessionName:process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBJa203Q05MbE91em82ckYrdkIxN1VaTWl4aTRia0UrZlZhQUZhV0RsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVZBM1hFdXllVTdOY3Vwd1Y4TG5uYUladW1TRFV6SEMxQ2xacldYbStTST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SUVoMDV2aEs2d2xSSVJuZ2tSQlpVZ2cvTFRUT2pVaXROYU1laGtvWFdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6cFRBSjBDTEUrVGFFdFpRbERMd0QyMmVvU2dxVUxXRmxSNTZqYjBreW44PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdKUEl3Vzh5dFFrd09IRkVVY0FkYXFCYWFTeVhuUjlUMDQvcWFWVnFqa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdpbmJZaWJ5V2tNVzk4WlBkRkVoN3V1blNNc0o2eWluTkZjeWMrOHE3WEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZvei9aMlJONTBqRUpwa0F5ZXZNaGY3K0pZRkFtZ0E3Vm9MVEg1YktVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNitOMzZoQkppdTlnVmY2SHRIV2JsWnpsVFBOWThkeTE4WXZiY0RnUnUwZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg3VVR5OXlDS0tCMTlmak1vS2p6ZXpNT1hmaitkRnM2UVNSNWhFZGFlZnlTNzQxNG9iZEFmTTBnY3ozWmJ6M204eVpMYnJLM3J2bG42dTh0NjFlK0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiJTTFFrQ0p6VFUzWTJxUUtzVUVXUGQvZDF1THpWLytaWnYrWjN1YnI3ZjNzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5NTA0ODIxM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4REY1M0RGRjA5OEM0NTVFNEExM0E3QUJCNDAxREUzNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA5OTc4Mzk1fV0sIm5leHRQcmVLZXlJZCI6MTQxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MTQxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InIycFBiY2xGVHU2TmNvbDVEbWZKSlEiLCJwaG9uZUlkIjoiMTE1MjFmMGEtMjhhMy00MjZjLTk1ZDgtOTU3NDM3MjJiMmM4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtVTDdvOURGQUU5cDRsVEttTTB1TnpuMGNWWT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2xaMlYzQzdEaGV5UG5PUUlPNjJ3L210NzkwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2I5b3hJUTFPV3dyd1lZQ3lBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoidlk0WS9HYjkvOEwrV1MwZ0xxZUpVR2tWbzJ2allkc3BydXpyemZObkNFVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidWpZb01DbEkxMWFCdEJ1MkQ1TnZyRlJzU0xZZnRvYW5nSGZLSHJZeDNWSmhMb0pYa1pjYk1VMDM0U0wxazFMS2d1QTBKelgrMlEzRVlxaXpxeHdRQXc9PSIsImRldmljZVNpZ25hdHVyZSI6Imp1Mko1QzNBOTFBbGJ6L2xxNlFwNVphTU1obm9ZTUZvcGpmeEdFSzFZMTFhT2U4bDlBTk9RemF4bWVMNmN5dHQxbVJlNXNvbUVSZm9vSlF6OE1oNUFBPT0ifSwibWUiOnsiaWQiOiIyNTQ3OTUwNDgyMTM6NjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGVlIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NTA0ODIxMzo2MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiMk9HUHhtL2YvQy9sa3RJQzZuaVZCcEZhTnI0MkhiS2E3czY4M3pad2hGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA5OTc4NDU2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUg4biJ9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "GIFTED",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
