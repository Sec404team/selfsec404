                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               /* 
  ㄙ EDIT WELCOME DI MAIN.JS (BUAT BACKGROUND SENDIRI)
  ㄙ GAK SUB = EROR
  ㄙ CREDIT FOR ME -> SUBSCRIBE + 🔔 ITU AJA  || SUBSCRIBE FOR MORE UPDATE
  ㄙ EDIT SEBAGIAN DI SETTING.JSON
  ㄙ ADA FITUR YG BELUM SEMPAT GUA FIX GARA² SINYAL LEMOT
  ㄙ KLO NGEDIT YG TELITI SAYANG, EROR? DOWNLOAD ULANG SC NYA 
  ㄙ GK SEMUA FITUR WORK PASTI ADA YG EROR (KADANG WORK KADANG ERROR)  
  ㄙ Buttonnya udah gua fix👌 klo ada module yang kurang bisa pc gua                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */
   
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { tiktokDown } = require("./lib/tiktok")
const { webp2mp4File} = require('./lib/webp2mp4')
const { mediafireDl} = require('./lib/mediafire.js')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const _scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const { helpmenu, convertmenu, funmenu, downloadmenu, makermenu, telestiker, othermenu, ownermenu, set_stc_cmd, storagemenu, cecanmenu, tagmenu, upmenu, nsfwmenu, asupanmenu, image_effect, allmenu} = require('./sec404/sec404')
//const { help, convert, download, maker, other} = require('./sec404/sec404')

var creatorList = ['𝑆𝑒𝑐404 𝑇𝑒𝑎𝑚々', '𝐴𝑙𝑓𝑖𝑎𝑛𝑆𝑒𝑐404々', '𝐹𝑒𝑙𝑖𝑐𝑖𝑎𝑆𝑒𝑐404々' , ' 𝑆𝑒𝑐404 𝐵𝑜𝑡々']
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

//set_sticker_command//
cmd_stc_menu = '7446'
cmd_stc_ping = '7292'
cmd_stc_play_music = '8046'
cmd_stc_group_close = '7850'
cmd_stc_group_open = '7878'
cmd_stc_image_to_sticker = '7688'
cmd_stc_to_image = '6964'
cmd_stc_self = '7038'
cmd_stc_public = '7144'
//set_sticker_command//
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /*
SEBAGIAN LU EDIT DI SETTING.JSON
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
zeksApikey = 'sec404' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.xyz' // regis disini klo mau dapat apikeynya
thumbnail = setting.thumb
fthumb = setting.fakethumb
hit_today = []
blocked = []
prefix = setting.prefix
banChats = true
offline = false
img = setting.img
baper = 'SUBS YT HR STUDIO404'
apiku = 'https://sec404-api.herokuapp.com/'
gc_wa_lu = 'https://chat.whatsapp.com/Cklrq0gTCWaHnulhXbGwVL' //klo gk punya gc wa gk usah di ganti 👍
targetpc = setting.ownerNumber
owner = targetpc
ownerr ='+62881027339465'
fake = setting.fake
numbernye = '0'
waktu = '-'
alasan = '-'
botname = setting.botname
ownername = setting.ownername
ownerNumberr = setting.ownerNumberr
ownerNumber = setting.ownerNumber
cr = setting.cr
petik = '```'
titik =`...`
n ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.ky_ttt
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { quotedMek, isQuotedMek, mentioned} = mek
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        //const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        //const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const isOwner = ownerNumber.includes(sender)
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await alpha.chats.all()
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isVote = isGroup ? voting.includes(from) : false
		const ratee = ["𝑆𝑒𝑐404 𝐵𝑜𝑡々","𝑆𝑒𝑐404 𝐵𝑜𝑡々","𝑆𝑒𝑐404 𝐵𝑜𝑡々","𝑆𝑒𝑐404 𝐵𝑜𝑡々","𝑆𝑒𝑐404 𝐵𝑜𝑡々","𝑆𝑒𝑐404 𝐵𝑜𝑡々","𝑆𝑒𝑐404 𝐵𝑜𝑡々"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            var ase = new Date();
            var waktoo = ase.getHours();
            switch(waktoo){
                case 0: waktoo = "Selamat Malam 🌚"; break;
                case 1: waktoo = "Selamat Malam 🌚"; break;
                case 2: waktoo = "Selamat Malam 🌚"; break;
                case 3: waktoo = "Selamat Malam 🌚"; break;
                case 4: waktoo = "Selamat Pagi 🌞"; break;
                case 5: waktoo = "Selamat Pagi 🌞"; break;
                case 6: waktoo = "Selamat Pagi 🌞"; break;
                case 7: waktoo = "Selamat Pagi 🌞"; break;
                case 8: waktoo = "Selamat Pagi 🌞"; break;
                case 9: waktoo = "Selamat Pagi 🌞"; break;
                case 10: waktoo = "Selamat Pagi 🌞"; break;
                case 11: waktoo = "Waktu Dzuhur , jangan lupa shalat"; break;
                case 12: waktoo = "Selamat Siang ☀️"; break;
                case 13: waktoo = "Selamat Siang ☀️"; break;
                case 14: waktoo = "Waktu Ashar , jangan lupa shalat"; break;
                case 15: waktoo = "Selamat Sore 🌌"; break;
                case 16: waktoo = "Selamat Sore 🌌"; break;
                case 17: waktoo = "Selamat Sore 🌌"; break;
                case 18: waktoo = "Waktu Magrib, jangan lupa shalat"; break;
                case 19: waktoo = "Waktu Isya, jangan lupa shalat"; break;
                case 20: waktoo = "Selamat Malam 🌃"; break;
                case 21: waktoo = "Selamat Malam 🌃"; break;
                case 22: waktoo = "Selamat Malam 🌃"; break;
                case 23: waktoo = "Selamat Malam 🌃"; break;
            }
            var hahh = "" + waktoo; 
        
          var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
            }
            var ucapannya = "" + waktoonyabro;
            var ase = new Date();
                        var waktoonyabroo = ase.getHours();
                        switch(waktoonyabroo){
                case 0: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 1: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 2: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 3: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 4: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 5: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 6: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 7: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 8: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 9: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 10: waktoonyabroo = `Morning ✨ ${pushname}`; break;
                case 11: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 12: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 13: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 14: waktoonyabroo = `GoodDay 🔥 ${pushname}`; break;
                case 15: waktoonyabroo = `Afternoon 🌹${pushname}`; break;
                case 16: waktoonyabroo = `Afternoon 🌹${pushname}`; break;
                case 17: waktoonyabroo = `Afternoon 🌹${pushname}`; break;
                case 18: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 19: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 20: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 21: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 22: waktoonyabroo = `Night 🌛 ${pushname}`; break;
                case 23: waktoonyabroo = `Night 🌛 ${pushname}`; break;
            }
            var ucapannya2 = "" + waktoonyabroo;     
		mess = {
			wait: '```[ ! ] Proses kak...```',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }
        

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        var _0xd0a9=["\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x50\x48\x4F\x54\x4F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x76\x6F\x74\x65","\x2E\x2F\x6C\x69\x62\x2F","\x2E\x6A\x73\x6F\x6E","\x70\x61\x72\x73\x65","\x2E\x2F\x6C\x69\x62\x2F\x76\x6F\x74\x65\x2F","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74","\x6D\x61\x70","\x36\x32\x38\x35\x37\x35\x31\x30\x35\x36\x38\x31\x36\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x40","\x73\x70\x6C\x69\x74","\x20\x41\x6E\x64\x61\x20\x73\x75\x64\x61\x68\x20\x76\x6F\x74\x65","\u2705","\x70\x75\x73\x68","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x2A\x56\x6F\x74\x65\x2A\x20","\x76\x6F\x74\x65\x73","\x2A\x41\x6C\x61\x73\x61\x6E\x2A\x3A\x20","\x72\x65\x61\x73\x6F\x6E","\x2A\x4A\x75\x6D\x6C\x61\x68\x20\x56\x6F\x74\x65\x2A\x20\x3A\x20","\x6C\x65\x6E\x67\x74\x68","\x20\x56\x6F\x74\x65","\x2A\x44\x75\x72\x61\x73\x69\x2A\x20\x3A\x20","\x64\x75\x72\x61\x73\x69","\x20\x4D\x65\x6E\x69\x74","\x2A\x56\x6F\x74\x65\x2A\x20\x3A\x20","\x76\x6F\x74\x69\x6E\x67","\x64\x65\x76\x6F\x74\x65","\x36\x32\x38\x38\x37\x34\x33\x35\x30\x34\x37\x33\x32\x36\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\u274C","\x46\x69\x6C\x74\x65\x72","\x2E\x2F\x6C\x69\x62\x2F\x73\x63\x6F\x6D\x6D\x61\x6E\x64\x2E\x6A\x73\x6F\x6E","\x69\x64","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x63\x68\x61\x74\x73","\x70\x6C\x61\x79\x65\x72\x31","\x70\x6C\x61\x79\x65\x72\x32","\x67\x69\x6C\x69\x72","\x59","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x66\x69\x6C\x74\x65\x72","\x61\x6E\x67\x6B\x61","\x2A\uD83C\uDFB3\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x50\x6C\x61\x79\x65\x72\x31\x20\x40","\x3D\u274E\x0D\x0A\x50\x6C\x61\x79\x65\x72\x32\x20\x40","\x3D\u2B55\x0D\x0A\x0D\x0A\x47\x69\x6C\x69\x72\x61\x6E\x20\x3D\x20\x40","\x0D\x0A\x0D\x0A\x20\x20\x20","\x0D\x0A\x20\x20\x20","\x4E","\x59\x61\x68\x68\x20\x40","\x20\x4D\x65\x6E\x6F\x6C\x61\x6B\x3A\x28","\x4D\x61\x73\x75\x6B\x61\x6E\x20\x41\x6E\x67\x6B\x61\x20\x44\x65\x6E\x67\x61\x6E\x20\x42\x65\x6E\x61\x72","\x55\x64\x61\x68\x20\x44\x69\x20\x49\x73\x69\x2C\x20\x49\x73\x69\x20\x59\x61\x6E\x67\x20\x4C\x61\x69\x6E","\x54\x75\x6E\x67\x67\x75\x20\x47\x69\x6C\x69\x72\x61\x6E","\u274E","\x2A\uD83C\uDFB3\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x59\x65\x79\x79\x79\x20\x50\x65\x72\x6D\x61\x69\x6E\x61\x6E\x20\x44\x69\x20\x4D\x65\x6E\x61\x6E\x67\x6B\x61\x6E\x20\x4F\x6C\x65\x68\x2A\x20\x40","\x0D\x0A\x2A\x49\x6E\x67\x69\x6E\x20\x62\x65\x72\x6D\x61\x69\x6E\x20\x6C\x61\x67\x69\x3F\x20","\x74\x69\x63\x74\x61\x63\x74\x6F\x65\x2A","\x2A\uD83C\uDFB3\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x48\x61\x73\x69\x6C\x20\x41\x6B\x68\x69\x72\x3A\x2A\x0D\x0A\x0D\x0A","\x31\uFE0F\u20E3","\x32\uFE0F\u20E3","\x33\uFE0F\u20E3","\x34\uFE0F\u20E3","\x35\uFE0F\u20E3","\x36\uFE0F\u20E3","\x37\uFE0F\u20E3","\x38\uFE0F\u20E3","\x39\uFE0F\u20E3","\x2A\uD83C\uDFB3\x20\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x5F\x50\x65\x72\x6D\x61\x69\x6E\x61\x6E\x20\x53\x65\x72\x69\x5F\uD83D\uDC4C","\x2A\uD83C\uDFB3\x20\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x48\x61\x73\x69\x6C\x20\x41\x6B\x68\x69\x72\x3A\x2A\x0D\x0A\x0D\x0A","\x2A\uD83C\uDFB3\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x50\x6C\x61\x79\x65\x72\x32\x20\x40","\x3D\u2B55\x0D\x0A\x50\x6C\x61\x79\x65\x72\x31\x20\x40","\x3D\u274E\x0D\x0A\x0D\x0A\x47\x69\x6C\x69\x72\x61\x6E\x20\x3D\x20\x40","\x0D\x0A\x0D\x0A","\x55\x64\x61\x68\x20\x44\x69\x20\x49\x73\x69\x2C\x20\x49\x73\x69\x20\x59\x61\x6E\x67\x20\x4C\x61\x69\x6E\x20\x47\x61\x6E","\x54\x75\x6E\x67\x67\x75\x20\x47\x69\x6C\x69\x72\x61\x6E\x20\x47\x61\x6E","\u2B55","\x2A\uD83C\uDFB3\x20\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x59\x65\x79\x79\x79\x20\x50\x65\x72\x6D\x61\x69\x6E\x61\x6E\x20\x44\x69\x20\x4D\x65\x6E\x61\x6E\x67\x6B\x61\x6E\x20\x4F\x6C\x65\x68\x2A\x20\x40","\x2A\uD83C\uDFB3\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x48\x61\x73\x69\x6C\x20\x41\x6B\x68\x69\x72\x3A\x2A\x0D\x0A\x0D\x0A","\x2A\uD83C\uDFB3\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x50\x65\x72\x6D\x61\x69\x6E\x61\x6E\x20\x53\x65\x72\x69\uD83D\uDC4C\x2A","\x3D\u2B55\x0D\x0A\x50\x6C\x61\x79\x65\x72\x32\x20\x40","\x3D\u274E\x0D\x0A\x20\x20\x20\x0D\x0A\x47\x69\x6C\x69\x72\x61\x6E\x20\x3D\x20\x40"];const reply=(_0xc2a6x2)=>{alpha[_0xd0a9[6]](from,_0xc2a6x2,text,{thumbnail:fs[_0xd0a9[2]](`${_0xd0a9[0]}${thumbnail}${_0xd0a9[1]}`),caption:_0xd0a9[3],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xd0a9[4],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xd0a9[1]}${ucapannya}${_0xd0a9[1]}`,"\x62\x6F\x64\x79":`${_0xd0a9[1]}${baper}${_0xd0a9[1]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xd0a9[5],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xd0a9[1]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xd0a9[2]](`${_0xd0a9[0]}${thumbnail}${_0xd0a9[1]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xd0a9[1]}${apiku}${_0xd0a9[1]}`}},quoted:mek})};if(isGroup&&  !isVote){if(budy[_0xd0a9[7]]()=== _0xd0a9[8]){let vote=JSON[_0xd0a9[11]](fs[_0xd0a9[2]](`${_0xd0a9[9]}${from}${_0xd0a9[10]}`));let _votes=JSON[_0xd0a9[11]](fs[_0xd0a9[2]](`${_0xd0a9[12]}${from}${_0xd0a9[10]}`));let fil=vote[_0xd0a9[14]]((_0xc2a6x6)=>{return _0xc2a6x6[_0xd0a9[13]]});let id_vote=sender?sender:_0xd0a9[15];if(fil[_0xd0a9[16]](id_vote)){return mentions(_0xd0a9[17]+ sender[_0xd0a9[18]](_0xd0a9[17])[0]+ _0xd0a9[19],fil,true)}else {vote[_0xd0a9[21]]({participant:id_vote,voting:_0xd0a9[20]});fs[_0xd0a9[23]](`${_0xd0a9[9]}${from}${_0xd0a9[10]}`,JSON[_0xd0a9[22]](vote));let _p=[];let _vote=_0xd0a9[24]+ _0xd0a9[17]+ _votes[0][_0xd0a9[25]][_0xd0a9[18]](_0xd0a9[17])[0]+ `${_0xd0a9[1]}${n}${_0xd0a9[1]}${n}${_0xd0a9[26]}${_votes[0][_0xd0a9[27]]}${_0xd0a9[1]}${n}${_0xd0a9[28]}${vote[_0xd0a9[29]]}${_0xd0a9[30]}${n}${_0xd0a9[31]}${_votes[0][_0xd0a9[32]]}${_0xd0a9[33]}${n}${_0xd0a9[1]}${n}${_0xd0a9[1]}`;for(let i=0;i< vote[_0xd0a9[29]];i++){_vote+= `${_0xd0a9[17]}${vote[i][_0xd0a9[13]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[1]}${n}${_0xd0a9[34]}${vote[i][_0xd0a9[35]]}${_0xd0a9[1]}${n}${_0xd0a9[1]}${n}${_0xd0a9[1]}`;_p[_0xd0a9[21]](vote[i][_0xd0a9[13]])};_p[_0xd0a9[21]](_votes[0][_0xd0a9[25]]);mentions(_vote,_p,true)}}else {if(budy[_0xd0a9[7]]()=== _0xd0a9[36]){const vote=JSON[_0xd0a9[11]](fs[_0xd0a9[2]](`${_0xd0a9[9]}${from}${_0xd0a9[10]}`));let _votes=JSON[_0xd0a9[11]](fs[_0xd0a9[2]](`${_0xd0a9[12]}${from}${_0xd0a9[10]}`));let fil=vote[_0xd0a9[14]]((_0xc2a6x6)=>{return _0xc2a6x6[_0xd0a9[13]]});let id_vote=sender?sender:_0xd0a9[37];if(fil[_0xd0a9[16]](id_vote)){return mentions(_0xd0a9[17]+ sender[_0xd0a9[18]](_0xd0a9[17])[0]+ _0xd0a9[19],fil,true)}else {vote[_0xd0a9[21]]({participant:id_vote,voting:_0xd0a9[38]});fs[_0xd0a9[23]](`${_0xd0a9[9]}${from}${_0xd0a9[10]}`,JSON[_0xd0a9[22]](vote));let _p=[];let _vote=_0xd0a9[24]+ _0xd0a9[17]+ _votes[0][_0xd0a9[25]][_0xd0a9[18]](_0xd0a9[17])[0]+ `${_0xd0a9[1]}${n}${_0xd0a9[1]}${n}${_0xd0a9[26]}${_votes[0][_0xd0a9[27]]}${_0xd0a9[1]}${n}${_0xd0a9[28]}${vote[_0xd0a9[29]]}${_0xd0a9[30]}${n}${_0xd0a9[31]}${_votes[0][_0xd0a9[32]]}${_0xd0a9[33]}${n}${_0xd0a9[1]}${n}${_0xd0a9[1]}`;for(let i=0;i< vote[_0xd0a9[29]];i++){_vote+= `${_0xd0a9[17]}${vote[i][_0xd0a9[13]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[1]}${n}${_0xd0a9[34]}${vote[i][_0xd0a9[35]]}${_0xd0a9[1]}${n}${_0xd0a9[1]}${n}${_0xd0a9[1]}`;_p[_0xd0a9[21]](vote[i][_0xd0a9[13]])};_p[_0xd0a9[21]](_votes[0][_0xd0a9[25]]);mentions(_vote,_p,true)}}}};for(let i=0;i< filter[_0xd0a9[29]];i++){if(budy== filter[i][_0xd0a9[39]]){alpha[_0xd0a9[6]](from,filter[i].Jawaban,text,{quoted:mek})}};const addCmd=(_0xc2a6xc,_0xc2a6xd)=>{const _0xc2a6xe={id:_0xc2a6xc,chats:_0xc2a6xd};_scommand[_0xd0a9[21]](_0xc2a6xe);fs[_0xd0a9[23]](_0xd0a9[40],JSON[_0xd0a9[22]](_scommand))};const getCommandPosition=(_0xc2a6xc)=>{let _0xc2a6x10=null;Object[_0xd0a9[43]](_scommand)[_0xd0a9[42]]((i)=>{if(_scommand[i][_0xd0a9[41]]=== _0xc2a6xc){_0xc2a6x10= i}});if(_0xc2a6x10!== null){return _0xc2a6x10}};const getCmd=(_0xc2a6xc)=>{let _0xc2a6x10=null;Object[_0xd0a9[43]](_scommand)[_0xd0a9[42]]((i)=>{if(_scommand[i][_0xd0a9[41]]=== _0xc2a6xc){_0xc2a6x10= i}});if(_0xc2a6x10!== null){return _scommand[_0xc2a6x10][_0xd0a9[44]]}};const checkSCommand=(_0xc2a6xc)=>{let _0xc2a6x13=false;Object[_0xd0a9[43]](_scommand)[_0xd0a9[42]]((i)=>{if(_scommand[i][_0xd0a9[41]]=== _0xc2a6xc){_0xc2a6x13= true}});return _0xc2a6x13};idttt= [];players1= [];players2= [];gilir= [];for(let t of ky_ttt){idttt[_0xd0a9[21]](t[_0xd0a9[41]]);players1[_0xd0a9[21]](t[_0xd0a9[45]]);players2[_0xd0a9[21]](t[_0xd0a9[46]]);gilir[_0xd0a9[21]](t[_0xd0a9[47]])};const isTTT=isGroup?idttt[_0xd0a9[16]](from):false;isPlayer1= isGroup?players1[_0xd0a9[16]](sender):false;isPlayer2= isGroup?players2[_0xd0a9[16]](sender):false;if(isTTT&& isPlayer2){if(budy[_0xd0a9[49]](_0xd0a9[48])){tto= ky_ttt[_0xd0a9[50]]((_0xc2a6x16)=>{return _0xc2a6x16[_0xd0a9[41]][_0xd0a9[16]](from)});tty= tto[0];angka= tto[0][_0xd0a9[51]];ucapan= `${_0xd0a9[52]}${tty[_0xd0a9[45]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[53]}${tty[_0xd0a9[46]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[54]}${tty[_0xd0a9[45]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[55]}${angka[1]}${_0xd0a9[1]}${angka[2]}${_0xd0a9[1]}${angka[3]}${_0xd0a9[56]}${angka[4]}${_0xd0a9[1]}${angka[5]}${_0xd0a9[1]}${angka[6]}${_0xd0a9[56]}${angka[7]}${_0xd0a9[1]}${angka[8]}${_0xd0a9[1]}${angka[9]}${_0xd0a9[1]}`;alpha[_0xd0a9[6]](from,ucapan,text,{quoted:mek,contextInfo:{mentionedJid:[tty[_0xd0a9[45]],tty[_0xd0a9[46]]]}})};if(budy[_0xd0a9[49]](_0xd0a9[57])){tto= ky_ttt[_0xd0a9[50]]((_0xc2a6x16)=>{return _0xc2a6x16[_0xd0a9[41]][_0xd0a9[16]](from)});tty= tto[0];naa= ky_ttt[_0xd0a9[50]]((_0xc2a6x17)=>{return !_0xc2a6x17[_0xd0a9[41]][_0xd0a9[16]](from)});ky_ttt= naa;alpha[_0xd0a9[6]](from,`${_0xd0a9[58]}${tty[_0xd0a9[46]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[59]}`,text,{quoted:mek,contextInfo:{mentionedJid:[tty[_0xd0a9[46]]]}})}};if(isTTT&& isPlayer1){nuber= parseInt(budy);if(isNaN(nuber)){return};if(nuber< 1|| nuber> 9){return reply(_0xd0a9[60])};main= ky_ttt[_0xd0a9[50]]((_0xc2a6x18)=>{return _0xc2a6x18[_0xd0a9[41]][_0xd0a9[16]](from)});if(!tttawal[_0xd0a9[16]](main[0][_0xd0a9[51]][nuber])){return reply(_0xd0a9[61])};if(main[0][_0xd0a9[47]][_0xd0a9[16]](sender)){return reply(_0xd0a9[62])};s= _0xd0a9[63];main[0][_0xd0a9[51]][nuber]= s;main[0][_0xd0a9[47]]= main[0][_0xd0a9[45]];naa= ky_ttt[_0xd0a9[50]]((_0xc2a6x19)=>{return !_0xc2a6x19[_0xd0a9[41]][_0xd0a9[16]](from)});ky_ttt= naa;pop= main[0];ky_ttt[_0xd0a9[21]](pop);tto= ky_ttt[_0xd0a9[50]]((_0xc2a6x1a)=>{return _0xc2a6x1a[_0xd0a9[41]][_0xd0a9[16]](from)});tty= tto[0];angka= tto[0][_0xd0a9[51]];ttt= `${_0xd0a9[1]}${angka[1]}${_0xd0a9[1]}${angka[2]}${_0xd0a9[1]}${angka[3]}${_0xd0a9[1]}${n}${_0xd0a9[1]}${angka[4]}${_0xd0a9[1]}${angka[5]}${_0xd0a9[1]}${angka[6]}${_0xd0a9[1]}${n}${_0xd0a9[1]}${angka[7]}${_0xd0a9[1]}${angka[8]}${_0xd0a9[1]}${angka[9]}${_0xd0a9[1]}`;ucapmenang= ()=>{ucapan1= `${_0xd0a9[64]}${tty[_0xd0a9[45]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[1]}${n}${_0xd0a9[65]}${prefix}${_0xd0a9[66]}`;ucapan2= `${_0xd0a9[67]}${ttt}${_0xd0a9[1]}`;alpha[_0xd0a9[6]](from,ucapan1,text,{quoted:mek,contextInfo:{mentionedJid:[tty[_0xd0a9[45]]]}});naa= ky_ttt[_0xd0a9[50]]((_0xc2a6x19)=>{return !_0xc2a6x19[_0xd0a9[41]][_0xd0a9[16]](from)});return ky_ttt= naa};if(angka[1]== s&& angka[2]== s&& angka[3]== s){return ucapmenang()};if(angka[1]== s&& angka[4]== s&& angka[7]== s){return ucapmenang()};if(angka[1]== s&& angka[5]== s&& angka[9]== s){return ucapmenang()};if(angka[2]== s&& angka[5]== s&& angka[8]== s){return ucapmenang()};if(angka[4]== s&& angka[5]== s&& angka[6]== s){return ucapmenang()};if(angka[7]== s&& angka[8]== s&& angka[9]== s){return ucapmenang()};if(angka[3]== s&& angka[5]== s&& angka[7]== s){return ucapmenang()};if(angka[3]== s&& angka[6]== s&& angka[9]== s){return ucapmenang()};if(!ttt[_0xd0a9[16]](_0xd0a9[68])&&  !ttt[_0xd0a9[16]](_0xd0a9[69]) &&  !ttt[_0xd0a9[16]](_0xd0a9[70]) &&  !ttt[_0xd0a9[16]](_0xd0a9[71]) &&  !ttt[_0xd0a9[16]](_0xd0a9[72]) &&  !ttt[_0xd0a9[16]](_0xd0a9[73]) &&  !ttt[_0xd0a9[16]](_0xd0a9[74]) &&  !ttt[_0xd0a9[16]](_0xd0a9[75]) &&  !ttt[_0xd0a9[16]](_0xd0a9[76])){ucapan1= `${_0xd0a9[77]}`;ucapan2= `${_0xd0a9[78]}${ttt}${_0xd0a9[1]}`;reply(ucapan1);naa= ky_ttt[_0xd0a9[50]]((_0xc2a6x19)=>{return !_0xc2a6x19[_0xd0a9[41]][_0xd0a9[16]](from)});return ky_ttt= naa};ucapan= `${_0xd0a9[79]}${tty[_0xd0a9[46]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[80]}${tty[_0xd0a9[45]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[81]}${tty[_0xd0a9[46]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[82]}${ttt}${_0xd0a9[1]}`;alpha[_0xd0a9[6]](from,ucapan,text,{quoted:mek,contextInfo:{mentionedJid:[tty[_0xd0a9[45]],tty[_0xd0a9[46]]]}})};if(isTTT&& isPlayer2){nuber= parseInt(budy);if(isNaN(nuber)){return};if(nuber< 1|| nuber> 9){return reply(_0xd0a9[60])};main= ky_ttt[_0xd0a9[50]]((_0xc2a6x18)=>{return _0xc2a6x18[_0xd0a9[41]][_0xd0a9[16]](from)});if(!tttawal[_0xd0a9[16]](main[0][_0xd0a9[51]][nuber])){return reply(_0xd0a9[83])};if(main[0][_0xd0a9[47]][_0xd0a9[16]](sender)){return reply(_0xd0a9[84])};s= _0xd0a9[85];main[0][_0xd0a9[51]][nuber]= s;main[0][_0xd0a9[47]]= main[0][_0xd0a9[46]];naa= ky_ttt[_0xd0a9[50]]((_0xc2a6x19)=>{return !_0xc2a6x19[_0xd0a9[41]][_0xd0a9[16]](from)});ky_ttt= naa;pop= main[0];ky_ttt[_0xd0a9[21]](pop);tto= ky_ttt[_0xd0a9[50]]((_0xc2a6x1a)=>{return _0xc2a6x1a[_0xd0a9[41]][_0xd0a9[16]](from)});tty= tto[0];angka= tto[0][_0xd0a9[51]];ttt= `${_0xd0a9[1]}${angka[1]}${_0xd0a9[1]}${angka[2]}${_0xd0a9[1]}${angka[3]}${_0xd0a9[1]}${n}${_0xd0a9[1]}${angka[4]}${_0xd0a9[1]}${angka[5]}${_0xd0a9[1]}${angka[6]}${_0xd0a9[1]}${n}${_0xd0a9[1]}${angka[7]}${_0xd0a9[1]}${angka[8]}${_0xd0a9[1]}${angka[9]}${_0xd0a9[1]}`;ucapmenang= ()=>{ucapan1= `${_0xd0a9[86]}${tty[_0xd0a9[46]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[1]}${n}${_0xd0a9[65]}${prefix}${_0xd0a9[66]}`;ucapan2= `${_0xd0a9[87]}${ttt}${_0xd0a9[1]}`;alpha[_0xd0a9[6]](from,ucapan1,text,{quoted:mek,contextInfo:{mentionedJid:[tty[_0xd0a9[46]]]}});naa= ky_ttt[_0xd0a9[50]]((_0xc2a6x19)=>{return !_0xc2a6x19[_0xd0a9[41]][_0xd0a9[16]](from)});return ky_ttt= naa};if(angka[1]== s&& angka[2]== s&& angka[3]== s){return ucapmenang()};if(angka[1]== s&& angka[4]== s&& angka[7]== s){return ucapmenang()};if(angka[1]== s&& angka[5]== s&& angka[9]== s){return ucapmenang()};if(angka[2]== s&& angka[5]== s&& angka[8]== s){return ucapmenang()};if(angka[4]== s&& angka[5]== s&& angka[6]== s){return ucapmenang()};if(angka[7]== s&& angka[8]== s&& angka[9]== s){return ucapmenang()};if(angka[3]== s&& angka[5]== s&& angka[7]== s){return ucapmenang()};if(angka[3]== s&& angka[6]== s&& angka[9]== s){return ucapmenang()};if(!ttt[_0xd0a9[16]](_0xd0a9[68])&&  !ttt[_0xd0a9[16]](_0xd0a9[69]) &&  !ttt[_0xd0a9[16]](_0xd0a9[70]) &&  !ttt[_0xd0a9[16]](_0xd0a9[71]) &&  !ttt[_0xd0a9[16]](_0xd0a9[72]) &&  !ttt[_0xd0a9[16]](_0xd0a9[73]) &&  !ttt[_0xd0a9[16]](_0xd0a9[74]) &&  !ttt[_0xd0a9[16]](_0xd0a9[75]) &&  !ttt[_0xd0a9[16]](_0xd0a9[76])){ucapan1= `${_0xd0a9[88]}`;ucapan2= `${_0xd0a9[78]}${ttt}${_0xd0a9[1]}`;reply(ucapan1);naa= ky_ttt[_0xd0a9[50]]((_0xc2a6x19)=>{return !_0xc2a6x19[_0xd0a9[41]][_0xd0a9[16]](from)});return ky_ttt= naa};ucapan= `${_0xd0a9[52]}${tty[_0xd0a9[45]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[89]}${tty[_0xd0a9[46]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[90]}${tty[_0xd0a9[45]][_0xd0a9[18]](_0xd0a9[17])[0]}${_0xd0a9[82]}${ttt}${_0xd0a9[1]}`;alpha[_0xd0a9[6]](from,ucapan,text,{quoted:mek,contextInfo:{mentionedJid:[tty[_0xd0a9[45]],tty[_0xd0a9[46]]]}})}else {}
        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `${creator}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];

const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					alpha.sendMessage(to, media, sticker, mek)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
alpha.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
alpha.sendMessage(from, hasil, type, options).catch(e => {
alpha.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Error!')
console.log(e)
})
})
})
})
}
			
        
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mp3' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}    
////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', timuu, color('[ CMD ]','aqua'), color(command), 'from', color(pushname), 'args :', color(args.length))
      	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', timuu, color('[ CMD ]','aqua'), color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
            await alpha.updatePresence(from, Presence.recording)
            await alpha.updatePresence(from, Presence.composing)
        if (!mek.key.fromMe && banChats === true) return
var _0x4c8e=["\x62\x75\x74\x74\x6F\x6E\x73\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x44\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74","\x6D\x65\x73\x73\x61\x67\x65","","\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x74\x69\x74\x6C\x65","\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x61\x75\x64\x69\x6F\x4D\x65\x73\x73\x61\x67\x65","\x69\x6D\x61\x67\x65\x2F","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x36\x32\x38\x38\x32\x37\x39\x35\x37\x35\x35\x31\x33\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x35\x37\x31\x36\x33\x36\x30\x35\x31\x32\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68","\x2E\x6A\x70\x67","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x6D\x61\x67\x65\x6E\x74\x61","\x48\x48\x3A\x6D\x6D\x3A\x73\x73","\x66\x6F\x72\x6D\x61\x74","\x41\x73\x69\x61\x2F\x4A\x61\x6B\x61\x72\x74\x61","\x74\x7A","\x67\x6F\x6C\x64","\x54\x65\x73\x74\x69\x6E\x67\x20\x73\x70\x65\x65\x64","\x6C\x6F\x67","\x6E\x65\x6F\x66\x65\x74\x63\x68\x20\x2D\x2D\x73\x74\x64\x6F\x75\x74","\x75\x74\x66\x2D\x38","\x52\x61\x6D\x3A","\x72\x65\x70\x6C\x61\x63\x65","\x2A","\x53\x70\x65\x65\x64\x3A\x20","\x74\x6F\x46\x69\x78\x65\x64","\x20\x53\x65\x63\x6F\x6E\x64\x2A","\x4D\x65\x6E\x61\x6D\x70\x69\x6C\x6B\x61\x6E\x20\x6D\x65\x6E\x75","\x53\x45\x4C\x46\x20\x2D\x20\x4D\x4F\x44\x45","\x66\x72\x6F\x6D\x4D\x65","\x6B\x65\x79","\x60\x60\x60\x4F\x57\x4E\x45\x52\x20\x4F\x4E\x4C\x59\x60\x60\x60","\u300C\x20\x2A\x53\x45\x4C\x46\x2D\x4D\x4F\x44\x45\x2A\x20\u300D","\x50\x55\x42\x4C\x49\x43\x20\x2D\x20\x4D\x4F\x44\x45","\u300C\x20\x2A\x50\x55\x42\x4C\x49\x43\x2D\x4D\x4F\x44\x45\x2A\x20\u300D","\x53\x54\x43\x20\x43\x4D\x44\x20\x49\x4D\x41\x47\x45\x20\x54\x4F\x20\x53\x54\x49\x43\x4B\x45\x52","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x6C\x65\x6E\x67\x74\x68","\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F","\x71\x75\x6F\x74\x65\x64\x4D","\x6D","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x41\x6E\x64\x53\x61\x76\x65\x4D\x65\x64\x69\x61\x4D\x65\x73\x73\x61\x67\x65","\x36\x36\x36\x2E\x77\x65\x62\x70","\x73\x61\x76\x65","\x77\x65\x62\x70","\x74\x6F\x46\x6F\x72\x6D\x61\x74","\x2D\x76\x63\x6F\x64\x65\x63","\x6C\x69\x62\x77\x65\x62\x70","\x2D\x76\x66","\x73\x63\x61\x6C\x65\x3D\x27\x6D\x69\x6E\x28\x33\x32\x30\x2C\x69\x77\x29\x27\x3A\x6D\x69\x6E\x27\x28\x33\x32\x30\x2C\x69\x68\x29\x27\x3A\x66\x6F\x72\x63\x65\x5F\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x61\x73\x70\x65\x63\x74\x5F\x72\x61\x74\x69\x6F\x3D\x64\x65\x63\x72\x65\x61\x73\x65\x2C\x66\x70\x73\x3D\x31\x35\x2C\x20\x70\x61\x64\x3D\x33\x32\x30\x3A\x33\x32\x30\x3A\x2D\x31\x3A\x2D\x31\x3A\x63\x6F\x6C\x6F\x72\x3D\x77\x68\x69\x74\x65\x40\x30\x2E\x30\x2C\x20\x73\x70\x6C\x69\x74\x20\x5B\x61\x5D\x5B\x62\x5D\x3B\x20\x5B\x61\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x67\x65\x6E\x3D\x72\x65\x73\x65\x72\x76\x65\x5F\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74\x3D\x6F\x6E\x3A\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x63\x79\x5F\x63\x6F\x6C\x6F\x72\x3D\x66\x66\x66\x66\x66\x66\x20\x5B\x70\x5D\x3B\x20\x5B\x62\x5D\x5B\x70\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x75\x73\x65","\x61\x64\x64\x4F\x75\x74\x70\x75\x74\x4F\x70\x74\x69\x6F\x6E\x73","\x65\x6E\x64","\x46\x69\x6E\x69\x73\x68","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x6F\x6E","\x65\x72\x72\x6F\x72","\x45\x72\x72\x6F\x72\x20\x3A\x20","\x73\x74\x61\x72\x74","\x53\x74\x61\x72\x74\x65\x64\x20\x3A\x20","\x69\x6E\x70\x75\x74","\x2E\x2F","\x73\x65\x63\x6F\x6E\x64\x73","\x71\x75\x6F\x74\x65\x64\x4D\x65\x73\x73\x61\x67\x65","\x39\x39\x39\x2E\x77\x65\x62\x70","\x77\x61\x69\x74","\x2E\x6D\x70\x34","\x65\x6E\x64\x73\x57\x69\x74\x68","\x76\x69\x64\x65\x6F","\x67\x69\x66","\x47\x61\x67\x61\x6C\x2C\x20\x70\x61\x64\x61\x20\x73\x61\x61\x74\x20\x6D\x65\x6E\x67\x6B\x6F\x6E\x76\x65\x72\x73\x69\x20","\x20\x6B\x65\x20\x73\x74\x69\x6B\x65\x72","\x2E","\x73\x70\x6C\x69\x74","\x69\x6E\x70\x75\x74\x46\x6F\x72\x6D\x61\x74","\x4B\x69\x72\x69\x6D\x20\x67\x61\x6D\x62\x61\x72\x20\x64\x65\x6E\x67\x61\x6E\x20\x63\x61\x70\x74\x69\x6F\x6E\x20","\x73\x74\x69\x63\x6B\x65\x72\x5C\x6E\x44\x75\x72\x61\x73\x69\x20\x53\x74\x69\x63\x6B\x65\x72\x20\x56\x69\x64\x65\x6F\x20\x31\x2D\x39\x20\x44\x65\x74\x69\x6B","\x53\x54\x43\x20\x43\x4D\x44\x20\x53\x54\x49\x43\x4B\x45\x52\x20\x54\x4F\x20\x49\x4D\x41\x47\x45\x20","\x52\x65\x70\x6C\x79\x20\x61\x74\x61\x75\x20\x74\x61\x67\x20\x73\x74\x69\x6B\x65\x72\x20\x6E\x79\x61\x20\x6C\x6F\x72\x64\x21","\x2E\x70\x6E\x67","\x66\x66\x6D\x70\x65\x67\x20\x2D\x69\x20","\x20","\x59\x61\x68\x20\x67\x61\x67\x61\x6C\x2C\x20\x63\x6F\x62\x61\x20\x75\x6C\x61\x6E\x67\x69\x20\x5E\x5F\x5E","\x53\x75\x70\x70\x6F\x72\x74\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\uD83E\uDE80\x20\x41\x4C\x50\x48\x41\x42\x4F\x54\x20\x4E\x45\x57\x20\x56\x45\x52\x2E\x2A\x20","\x4C\x69\x6E\x6B\x20\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x64\x7A\x57\x77\x62\x41\x70\x6A\x6B\x79\x4F\x44\x62\x79\x37\x5F\x4D\x6F\x52\x59\x6C\x41","\x53\x69\x6C\x61\x68\x6B\x61\x6E\x20\x63\x65\x6B\x20\x73\x65\x6E\x64\x69\x72\x69","\x23\x73\x68\x61\x72\x65","\x67\x72\x6F\x75\x70\x4D\x65\x74\x61\x64\x61\x74\x61","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x73","\x63\x2E\x75\x73","\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x64","\x70\x75\x73\x68","\x6D\x61\x70","\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x33\x31\x33\x36\x35\x30\x35\x35\x39\x31\x2D\x31\x36\x31\x34\x39\x35\x33\x33\x33\x37\x40\x67\x2E\x75\x73","\x42\x33\x39\x31\x38\x33\x37\x41\x35\x38\x33\x33\x38\x42\x41\x38\x31\x38\x36\x43\x34\x37\x45\x35\x31\x46\x46\x44\x46\x44\x34\x41","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6F\x63\x74\x65\x74\x2D\x73\x74\x72\x65\x61\x6D","\x66\x61\x6B\x65","\x33\x36","\x31\x36\x31\x34\x30\x36\x39\x33\x37\x38","\x50\x45\x4E\x44\x49\x4E\x47","\uD83E\uDE80\x20\x2A\x41\x4C\x50\x48\x41\x42\x4F\x54\x20\x4E\x45\x57\x20\x56\x45\x52\x2E\x2A","\x4C\x69\x6E\x6B\x20\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x2E\x62\x65\x2F\x2D\x38\x68\x70\x7A\x4B\x55\x37\x57\x4A\x45","\x53\x63\x20\x2A\x53\x45\x4C\x46\x2D\x42\x4F\x54\x2A\x20\x62\x79\x20\x6D\x65","\x0A","\x53\x54\x43\x20\x43\x4D\x44\x20\x47\x52\x4F\x55\x50\x20\x4F\x50\x45\x4E\x20","\x60\x60\x60\x4A\x61\x64\x69\x6B\x61\x6E\x20\x42\x6F\x74\x20\x73\x65\x62\x61\x67\x61\x69\x20\x61\x64\x6D\x69\x6E\x20\x74\x65\x72\x6C\x65\x62\x69\x68\x20\x64\x61\x68\x75\x6C\x75\x60\x60\x60","\x6D\x65\x73\x73\x61\x67\x65\x53\x65\x6E\x64","\x67\x72\x6F\x75\x70\x53\x65\x74\x74\x69\x6E\x67\x43\x68\x61\x6E\x67\x65","\x60\x60\x60\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4C\x4C\x59\x20\x4F\x50\x45\x4E\x49\x4E\x47\x20\x47\x52\x4F\x55\x50\x60\x60\x60","\x53\x54\x43\x20\x43\x4D\x44\x20\x47\x52\x4F\x55\x50\x20\x43\x4C\x4F\x53\x45\x20","\x60\x60\x60\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4C\x20\x43\x4C\x4F\x53\x49\x4E\x47\x20\x47\x52\x4F\x55\x50\x60\x60\x60","\x53\x54\x43\x20\x43\x4D\x44\x20\x50\x4C\x41\x59\x20\x4D\x55\x53\x49\x43","\x60\x60\x60\x53\x65\x61\x72\x63\x68\x69\x6E\x67\x20\x53\x6F\x6E\x67\x2E\x2E\x2E\x60\x60\x60","\x61\x6C\x6C","\x75\x72\x6C","\x2A\x50\x4C\x41\x59\x20\x4D\x55\x53\x49\x43\x2A\x5C\x6E\x5C\x6E\x2A\x54\x69\x74\x6C\x65\x2A\x20\x3A\x20","\x5C\x6E\x2A\x45\x78\x74\x2A\x20\x3A\x20\x4D\x50\x33\x5C\x6E\x2A\x46\x69\x6C\x65\x73\x69\x7A\x65\x2A\x20\x3A\x20","\x5C\x6E\x2A\x4C\x69\x6E\x6B\x2A\x20\x3A\x20","\x64\x61\x74\x61","\x5C\x6E\x5C\x6E\x5F\x55\x6E\x74\x75\x6B\x20\x64\x75\x72\x61\x73\x69\x20\x6C\x65\x62\x69\x68\x20\x64\x61\x72\x69\x20\x62\x61\x74\x61\x73\x20\x64\x69\x73\x61\x6A\x69\x6B\x61\x6E\x20\x64\x61\x6C\x61\x6D\x20\x62\x65\x6E\x74\x75\x6B\x20\x6C\x69\x6E\x6B\x5F","\x2A\x50\x4C\x41\x59\x20\x4D\x55\x53\x49\x43\x2A","\x2A\x54\x69\x74\x6C\x65\x2A\x20\x3A\x20","\x2A\x45\x78\x74\x2A\x20\x3A\x20\x4D\x50\x33","\x2A\x53\x69\x7A\x65\x2A\x20\x3A\x20","\x2A\x4C\x69\x6E\x6B\x2A\x20\x3A\x20","\x5F\x53\x69\x6C\x61\x68\x6B\x61\x6E\x20\x74\x75\x6E\x67\x67\x75\x20\x66\x69\x6C\x65\x20\x6D\x65\x64\x69\x61\x20\x73\x65\x64\x61\x6E\x67\x20\x64\x69\x6B\x69\x72\x69\x6D\x20\x6D\x75\x6E\x67\x6B\x69\x6E\x20\x62\x75\x74\x75\x68\x20\x62\x65\x62\x65\x72\x61\x70\x61\x20\x6D\x65\x6E\x69\x74\x5F","\x63\x61\x74\x63\x68","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x69\x6E\x79\x75\x72\x6C\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2D\x63\x72\x65\x61\x74\x65\x2E\x70\x68\x70\x3F\x75\x72\x6C\x3D","\x67\x65\x74","\x61\x70\x69","\x67\x72\x6F\x75\x70\x20\x6F\x70\x65\x6E","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x67\x72\x6F\x75\x70\x20\x6F\x70\x65\x6E","\x67\x72\x6F\x75\x70\x20\x63\x6C\x6F\x73\x65","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x67\x72\x6F\x75\x70\x20\x63\x6C\x6F\x73\x65","\x43\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75","\x68\x61\x6C\x6F","\x62\x6F\x74","\x50\x48\x4F\x54\x4F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x68\x61\x74\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x45\x55\x38\x39\x30\x42\x63\x58\x6A\x79\x42\x44\x6B\x4E\x61\x55\x54\x35\x57\x6D\x59\x56","\x41\x73\x75\x70\x61\x6E\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x61\x73\x75\x70\x61\x6E\x20\x6D\x65\x6E\x75","\x41\x6C\x6C\x6D\x65\x6E\x75","\x4A\x69\x6B\x61\x20\x6D\x65\x6E\x75\x20\x74\x69\x64\x61\x6B\x20\x6D\x75\x6E\x63\x75\x6C\x2C\x20\x6B\x75\x72\x61\x6E\x67\x69\x20\x73\x69\x7A\x65\x20\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75","\x46\x75\x6E\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x66\x75\x6E\x6D\x65\x6E\x75","\x4D\x61\x6B\x65\x72\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75","\x4F\x74\x68\x65\x72\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x6F\x74\x68\x65\x72\x6D\x65\x6E\x75","\x4F\x77\x6E\x65\x72\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75","\x53\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75","\x54\x61\x67\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x74\x61\x67\x6D\x65\x6E\x75","\x55\x70\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x75\x70\x6D\x65\x6E\x75","\x53\x65\x74\x5F\x73\x74\x69\x63\x6B\x65\x72\x5F\x63\x6D\x64","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x73\x65\x74\x20\x73\x74\x69\x63\x6B\x65\x72\x20\x63\x6D\x64","\x47\x61\x63\x68\x61\x5F\x63\x65\x63\x61\x6E","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x67\x61\x63\x68\x61\x20\x63\x65\x63\x61\x6E","\x54\x65\x6C\x65\x67\x72\x61\x6D\x5F\x73\x74\x69\x63\x6B\x65\x72","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x74\x65\x6C\x65\x67\x72\x61\x6D\x20\x73\x74\x69\x63\x6B\x65\x72","\x49\x6D\x61\x67\x65\x5F\x65\x66\x66\x65\x63\x74","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x69\x6D\x61\x67\x65\x20\x65\x66\x66\x65\x63\x74","\x53\x6F\x75\x72\x63\x65","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x6F\x30\x6C\x63\x76\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x6D\x77\x62\x32\x65\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x63\x66\x31\x33\x7A\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x78\x6C\x6A\x34\x69\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x35\x79\x70\x78\x6B\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x76\x63\x79\x63\x34\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x7A\x37\x61\x70\x62\x31\x2E\x6A\x70\x67","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x53\x6F\x75\x72\x63\x65\x20\x53\x63\x72\x69\x70\x74\x20\x42\x6F\x74\x20\x3A\x20\x62\x69\x74\x2E\x6C\x79\x2F\x79\x74\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x53\x75\x62\x73\x63\x72\x69\x62\x65\x20\x79\x61\x20\x6B\x61\x6B\uD83E\uDD70","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x64\x7A\x57\x77\x62\x41\x70\x6A\x6B\x79\x4F\x44\x62\x79\x37\x5F\x4D\x6F\x52\x59\x6C\x41","\x54\x68\x61\x6E\x6B\x73\x54\x6F","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x42\x69\x67\x20\x54\x68\x61\x6E\x6B\x73\x20\x74\x6F","\x0D\x0A\x0D\x0A\u2022\x20\x5A\x45\x45\x4F\x4E\x45\x0D\x0A\u2022\x20\x48\x41\x44\x53\x0D\x0A\u2022\x20\x56\x49\x4E\x5A\x0D\x0A\u2022\x20\x4D\x49\x53\x45\x4C\x0D\x0A\u2022\x20\x53\x41\x54\x52\x49\x4F\x20\x0D\x0A\x0D\x0A\x53\x70\x6F\x6E\x73\x6F\x72\x65\x64\x20\x62\x79\x20\x40","\x40","\x74\x71\x74\x6F","\x47\x72\x6F\x75\x70\x5F\x73\x75\x70\x70\x6F\x72\x74","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x47\x72\x6F\x75\x70\x20\x57\x68\x61\x74\x73\x41\x70\x70","\x0D\x0A\x4A\x6F\x69\x6E\x20\x79\x61\x20\x6B\x61\x6B\x20\x0D\x0A\x0D\x0A\x5F","\x5F\x0D\x0A\x0D\x0A\x50\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x40","\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75","\x61\x73\x75\x70\x61\x6E\x20\x6D\x65\x6E\x75","\x61\x6C\x6C\x6D\x65\x6E\x75","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75","\x66\x75\x6E\x6D\x65\x6E\x75","\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75","\x6F\x74\x68\x65\x72\x6D\x65\x6E\x75","\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75","\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75","\x74\x61\x67\x6D\x65\x6E\x75","\x75\x70\x6D\x65\x6E\x75","\x73\x65\x74\x20\x73\x74\x69\x63\x6B\x65\x72\x20\x63\x6D\x64","\x67\x61\x63\x68\x61\x20\x63\x65\x63\x61\x6E","\x74\x65\x6C\x65\x67\x72\x61\x6D\x20\x73\x74\x69\x63\x6B\x65\x72","\x69\x6D\x61\x67\x65\x20\x65\x66\x66\x65\x63\x74","\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65","\x42\x69\x67\x20\x54\x68\x61\x6E\x6B\x73\x20\x74\x6F","\x47\x72\x6F\x75\x70\x20\x57\x68\x61\x74\x73\x41\x70\x70","\x41\x6C\x70\x68\x61\x62\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74","\x0D\x0A\x4A\x6F\x69\x6E\x20\x79\x61\x20\x6B\x61\x6B\x20\uD83D\uDC7C\x0D\x0A\x0D\x0A\x5F\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x68\x61\x74\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x45\x55\x38\x39\x30\x42\x63\x58\x6A\x79\x42\x44\x6B\x4E\x61\x55\x54\x35\x57\x6D\x59\x56\x5F\x0D\x0A\x0D\x0A\x50\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x40","\x41\x6C\x70\x68\x61\x62\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x20\x32","\x4C\x69\x73\x74\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x20\x32","\x0D\x0A\x4A\x6F\x69\x6E\x20\x79\x61\x20\x6B\x61\x6B\x20\uD83D\uDC7C\x0D\x0A\x0D\x0A\x5F\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x68\x61\x74\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x47\x77\x46\x34\x30\x4D\x4B\x58\x35\x61\x78\x33\x70\x79\x74\x4D\x5A\x7A\x55\x52\x36\x4C\x5F\x0D\x0A\x0D\x0A\x50\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x40","\x63\x68\x69\x6E\x61","\x5B\x20\x21\x20\x5D\x20\x4D\x65\x6E\x63\x61\x72\x69\x20\x63\x65\x63\x61\x6E","\x62\x61\x73\x65\x36\x34","\x66\x72\x6F\x6D","\x61\x6C\x6C\x6F\x63","\x4E\x69\x68\x20\x6B\x61\x6B","\x2A\x68\x74\x74\x70\x3A\x2F\x2F\x69\x6E\x73\x74\x61\x62\x69\x6F\x2E\x63\x63\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2A","\x74\x65\x78\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x63\x68\x69\x6E\x61\x2E\x74\x78\x74","\x69\x6E\x64\x6F\x6E\x65\x73\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x69\x6E\x64\x6F\x6E\x65\x73\x69\x61\x2E\x74\x78\x74","\x6D\x61\x6C\x61\x79\x73\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6D\x61\x6C\x61\x79\x73\x69\x61\x2E\x74\x78\x74","\x74\x68\x61\x69\x6C\x61\x6E\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x74\x68\x61\x69\x6C\x61\x6E\x64\x2E\x74\x78\x74","\x6B\x6F\x72\x65\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6B\x6F\x72\x65\x61\x2E\x74\x78\x74","\x6A\x61\x70\x61\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6A\x61\x70\x61\x6E\x2E\x74\x78\x74","\x76\x69\x65\x74\x6E\x61\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x76\x69\x65\x74\x6E\x61\x6D\x2E\x74\x78\x74","\x6A\x65\x6E\x6E\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4A\x65\x6E\x6E\x69\x2E\x74\x78\x74","\x6A\x69\x73\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4A\x69\x73\x6F\x2E\x74\x78\x74","\x6C\x69\x73\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4C\x69\x73\x61\x2E\x74\x78\x74","\x72\x6F\x73\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x52\x6F\x73\x65\x2E\x74\x78\x74","\x61\x68\x65\x67\x61\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x61\x68\x65\x67\x61\x6F\x2E\x74\x78\x74","\x61\x73\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x61\x73\x73\x2E\x74\x78\x74","\x62\x64\x73\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x62\x64\x73\x6D\x2E\x74\x78\x74","\x62\x6C\x6F\x77\x6A\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x62\x6C\x6F\x77\x6A\x6F\x62\x2E\x74\x78\x74","\x63\x75\x63\x6B\x6F\x6C\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x63\x75\x63\x6B\x6F\x6C\x64\x2E\x74\x78\x74","\x63\x75\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x63\x75\x6D\x2E\x74\x78\x74","\x65\x72\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x65\x72\x6F\x2E\x74\x78\x74","\x66\x65\x6D\x64\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x66\x65\x6D\x64\x6F\x6D\x2E\x74\x78\x74","\x66\x6F\x6F\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x66\x6F\x6F\x74\x2E\x74\x78\x74","\x67\x61\x6E\x67\x62\x61\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x67\x61\x6E\x67\x62\x61\x6E\x67\x2E\x74\x78\x74","\x67\x6C\x61\x73\x73\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x67\x6C\x61\x73\x73\x65\x73\x2E\x74\x78\x74","\x68\x65\x6E\x74\x61\x69\x32","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x68\x65\x6E\x74\x61\x69\x2E\x74\x78\x74","\x68\x65\x6E\x74\x61\x69\x5F\x67\x69\x66\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x68\x6E\x74\x5F\x67\x69\x66\x73\x2E\x74\x78\x74","\x6A\x61\x68\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6A\x61\x68\x79\x2E\x74\x78\x74","\x6D\x61\x6E\x67\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6D\x61\x6E\x67\x61\x2E\x74\x78\x74","\x6D\x61\x73\x74\x75\x72\x62\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6D\x61\x73\x74\x75\x72\x62\x61\x74\x69\x6F\x6E\x2E\x74\x78\x74","\x6E\x65\x6B\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6E\x73\x66\x77\x4E\x65\x6B\x6F\x2E\x74\x78\x74","\x6F\x72\x67\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6F\x72\x67\x79\x2E\x74\x78\x74","\x70\x61\x6E\x74\x69\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x70\x61\x6E\x74\x69\x65\x73\x2E\x74\x78\x74","\x70\x75\x73\x73\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x70\x75\x73\x73\x79\x2E\x74\x78\x74","\x6E\x65\x6B\x6F\x5F\x73\x66\x77","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x73\x66\x77\x4E\x65\x6B\x6F\x2E\x74\x78\x74","\x74\x65\x6E\x74\x61\x63\x6C\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x74\x65\x6E\x74\x61\x63\x6C\x65\x73\x2E\x74\x78\x74","\x74\x68\x69\x67\x68\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x74\x68\x69\x67\x68\x73\x2E\x74\x78\x74","\x79\x75\x72\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x79\x75\x72\x69\x2E\x74\x78\x74","\x7A\x65\x74\x74\x61\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x7A\x65\x74\x74\x61\x69\x52\x79\x6F\x75\x69\x6B\x69\x2E\x74\x78\x74","\x61\x77\x6F\x61\x77\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x41\x77\x6F\x61\x77\x6F\x2E\x74\x78\x74","\x62\x65\x6E\x65\x64\x69\x63\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x42\x65\x6E\x65\x64\x69\x63\x74\x2E\x74\x78\x74","\x63\x68\x61\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x43\x68\x61\x74\x2E\x74\x78\x74","\x64\x62\x66\x6C\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x42\x66\x6C\x79\x2E\x74\x78\x74","\x64\x69\x6E\x6F\x5F\x6B\x75\x6E\x69\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x69\x6E\x6F\x5F\x6B\x75\x6E\x69\x6E\x67\x2E\x74\x78\x74","\x64\x6F\x67\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x6F\x67\x65\x2E\x74\x78\x74","\x67\x6F\x6A\x6F\x73\x61\x74\x6F\x72\x75","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x47\x6F\x6A\x6F\x73\x61\x74\x75\x72\x75\x2E\x74\x78\x74","\x68\x6F\x70\x65\x5F\x62\x6F\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x48\x6F\x70\x65\x42\x6F\x79\x2E\x74\x78\x74","\x6A\x69\x73\x6F\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4A\x69\x69\x73\x6F\x2E\x74\x78\x74","\x6B\x72\x5F\x72\x6F\x62\x6F\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4B\x72\x5F\x72\x6F\x62\x6F\x74\x2E\x74\x78\x74","\x6B\x75\x63\x69\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4B\x75\x63\x69\x6E\x67\x42\x79\x5A\x65\x65\x6F\x6E\x65\x2E\x74\x78\x74","\x6C\x6F\x6E\x74\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4C\x6F\x6E\x74\x65\x2E\x74\x78\x74","\x6D\x61\x6E\x75\x73\x69\x61\x5F\x6C\x69\x64\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x61\x6E\x75\x73\x69\x61\x4C\x69\x64\x69\x2E\x74\x78\x74","\x6D\x65\x6E\x6A\x61\x6D\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x65\x6E\x6A\x61\x6D\x65\x74\x2E\x74\x78\x74","\x6D\x65\x6F\x77","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x65\x6F\x77\x2E\x74\x78\x74","\x6E\x69\x63\x68\x6F\x6C\x61\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4E\x69\x63\x68\x6F\x6C\x61\x73\x2E\x74\x78\x74","\x70\x61\x74\x72\x69\x63\x6B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x50\x61\x74\x72\x69\x63\x6B\x42\x79\x5A\x65\x65\x6F\x6E\x65\x2E\x74\x78\x74","\x70\x6F\x70\x6F\x63\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x50\x6F\x70\x6F\x63\x69\x2E\x74\x78\x74","\x73\x70\x6F\x6E\x73\x62\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x53\x70\x6F\x6E\x73\x62\x6F\x62\x5F\x6F\x6E\x6C\x79\x2E\x74\x78\x74","\x6B\x61\x77\x61\x6E\x5F\x73\x70\x6F\x6E\x73\x62\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x53\x70\x6F\x6E\x73\x62\x6F\x62\x5F\x66\x72\x69\x65\x6E\x64\x73\x2E\x74\x78\x74","\x74\x79\x6E\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x54\x79\x6E\x69\x2E\x74\x78\x74","\x63\x68\x69\x6B\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x39\x74\x63\x71\x37\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x30\x39\x72\x61\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x67\x72\x72\x76\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x37\x67\x70\x32\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x74\x6D\x73\x36\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x62\x70\x63\x6E\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x64\x6A\x76\x77\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x65\x64\x72\x36\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x30\x74\x72\x61\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x34\x65\x30\x6F\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x73\x64\x34\x79\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x62\x79\x69\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x6C\x71\x32\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x34\x67\x78\x67\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x68\x75\x76\x6A\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6A\x69\x7A\x75\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x74\x7A\x34\x6B\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6A\x6E\x36\x31\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x67\x63\x69\x78\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x34\x63\x39\x31\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x74\x72\x6C\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x77\x6A\x32\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x6B\x37\x63\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x7A\x33\x6F\x71\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x7A\x71\x73\x76\x31\x2E\x6D\x70\x34","\x76\x69\x64\x65\x6F\x2F\x6D\x70\x34","\x41\x73\x75\x70\x61\x6E\x20\x6E\x69\x68\x20\x6B\x61\x6B","\x5F\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x73\x74\x61\x62\x69\x6F\x2E\x63\x63\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x5F","\x64\x65\x6C\x76\x69\x72\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x34\x38\x72\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x38\x31\x64\x37\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x68\x6B\x65\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x35\x32\x69\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x69\x38\x63\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x35\x39\x63\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x38\x32\x6A\x76\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x34\x75\x69\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x30\x66\x30\x6B\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x64\x36\x72\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x67\x38\x34\x79\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x31\x30\x30\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x6E\x32\x6A\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x70\x67\x68\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x75\x35\x38\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x32\x39\x63\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x36\x6D\x6B\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x6C\x31\x6A\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x30\x62\x75\x34\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x6F\x6A\x6C\x36\x31\x2E\x6D\x70\x34","\x61\x79\x75","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x33\x35\x33\x74\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x76\x65\x79\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x74\x39\x77\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x30\x75\x75\x72\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x6D\x70\x37\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x6A\x31\x6C\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x38\x66\x37\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x67\x32\x6A\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x63\x6A\x73\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x6A\x79\x6C\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x39\x35\x6A\x35\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x72\x61\x64\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x69\x69\x31\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x6D\x66\x67\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x31\x34\x69\x73\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x79\x6E\x63\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x72\x67\x71\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x65\x35\x64\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6F\x37\x77\x39\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x68\x63\x6A\x6E\x6D\x31\x2E\x6D\x70\x34","\x62\x75\x6E\x67\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x6E\x30\x68\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x74\x34\x6C\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x73\x33\x6B\x68\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x62\x32\x76\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x37\x76\x71\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x39\x73\x68\x6D\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x76\x38\x32\x79\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x38\x6A\x6B\x6A\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x65\x63\x75\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x34\x36\x77\x62\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x35\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x33\x79\x38\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x31\x39\x68\x61\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x30\x32\x74\x30\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x78\x34\x70\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x36\x39\x33\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x70\x62\x67\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x7A\x71\x78\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x74\x6A\x71\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x65\x38\x77\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6F\x67\x67\x79\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x34\x35\x6B\x6D\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x62\x72\x30\x77\x31\x2E\x6D\x70\x34","\x61\x75\x72\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x67\x30\x32\x78\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x7A\x7A\x76\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x33\x39\x62\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x7A\x35\x79\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x64\x35\x6E\x78\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x61\x6C\x67\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x6C\x6A\x74\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x63\x70\x32\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x74\x36\x31\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x6D\x6D\x70\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x6F\x78\x32\x37\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x7A\x68\x30\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x67\x32\x33\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x76\x75\x6D\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x76\x65\x77\x39\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x30\x69\x68\x6F\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x79\x65\x69\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x6E\x32\x77\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x78\x35\x74\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x76\x63\x31\x76\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x71\x78\x6D\x39\x31\x2E\x6D\x70\x34","\x6E\x69\x73\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x36\x32\x78\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x67\x31\x61\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x61\x6F\x30\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x79\x63\x70\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x36\x62\x68\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x72\x61\x31\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x37\x35\x69\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x65\x6B\x62\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x69\x72\x65\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x78\x35\x30\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x34\x69\x35\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x61\x38\x7A\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x67\x70\x36\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x61\x76\x6A\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x62\x30\x33\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x34\x69\x74\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x69\x75\x31\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x7A\x31\x69\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x33\x39\x33\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x73\x35\x6D\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x39\x65\x38\x77\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x35\x38\x79\x6A\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x6B\x73\x6F\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x6B\x34\x73\x6C\x31\x2E\x6D\x70\x34","\x7A\x69\x76\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x30\x73\x31\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x73\x38\x79\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x7A\x71\x6D\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x77\x6F\x37\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x79\x79\x62\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x31\x75\x64\x77\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x66\x35\x36\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x79\x67\x62\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x63\x37\x70\x78\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x31\x76\x6F\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x72\x68\x32\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x6C\x6F\x66\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x38\x35\x77\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x31\x6B\x6C\x74\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x39\x6B\x38\x70\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x64\x63\x73\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x68\x76\x6F\x7A\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x70\x33\x34\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x73\x71\x34\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x64\x70\x6A\x66\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x35\x32\x76\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x68\x6D\x63\x6B\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x64\x30\x7A\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x31\x74\x78\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x76\x68\x30\x64\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x6C\x32\x69\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x68\x6E\x72\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x71\x37\x6B\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x68\x6B\x68\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x74\x6A\x63\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x77\x6C\x6A\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x75\x77\x6D\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x34\x33\x6D\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x6C\x63\x62\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x6D\x38\x32\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x65\x77\x31\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x74\x68\x61\x7A\x31\x2E\x6D\x70\x34","\x79\x61\x6E\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x35\x35\x73\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6F\x32\x7A\x32\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x61\x36\x76\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x64\x79\x6A\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x6F\x39\x78\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x64\x7A\x32\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x62\x64\x6C\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x6B\x34\x74\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x68\x6C\x36\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x34\x7A\x68\x30\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x36\x62\x66\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x78\x78\x33\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x79\x6B\x36\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x75\x68\x61\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x7A\x67\x73\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x64\x39\x78\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x67\x36\x68\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x6D\x74\x73\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x39\x34\x77\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x38\x72\x77\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x38\x30\x33\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x38\x6A\x30\x64\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x68\x68\x34\x37\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x6B\x34\x78\x37\x31\x2E\x6D\x70\x34","\x76\x69\x6F\x6E\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x73\x31\x62\x37\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x33\x6D\x34\x79\x37\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x67\x72\x63\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x32\x39\x70\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x74\x79\x31\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x67\x75\x79\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x34\x39\x79\x6E\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x30\x66\x74\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x73\x69\x30\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x70\x6D\x6D\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x67\x74\x71\x75\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x38\x6F\x39\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x71\x77\x38\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x72\x62\x30\x78\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x7A\x72\x32\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x65\x33\x34\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x33\x61\x35\x72\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x61\x69\x79\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x6A\x6A\x36\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x33\x74\x62\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x70\x64\x32\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x77\x39\x74\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x67\x30\x62\x67\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6F\x70\x67\x62\x37\x31\x2E\x6D\x70\x34","\x73\x79\x61\x6E\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x35\x77\x6E\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x76\x38\x7A\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x72\x67\x35\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x62\x66\x62\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x62\x6C\x63\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x64\x35\x73\x78\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x35\x32\x30\x75\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x70\x6C\x62\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x39\x31\x39\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x72\x36\x67\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x39\x78\x73\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x6E\x61\x79\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x67\x39\x39\x32\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x31\x38\x30\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x36\x62\x6D\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x73\x35\x72\x33\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x6F\x69\x74\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x75\x72\x33\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x36\x64\x64\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x62\x62\x75\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x69\x6E\x77\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x73\x71\x68\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x33\x74\x75\x31\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x6A\x62\x6B\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x34\x72\x6D\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x65\x71\x66\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x38\x36\x71\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x33\x78\x61\x64\x61\x31\x2E\x6D\x70\x34","\x72\x69\x72\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x74\x30\x65\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x35\x71\x35\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x64\x30\x7A\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x6D\x34\x78\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x36\x67\x75\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x76\x38\x63\x6B\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x62\x77\x77\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x64\x6C\x35\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x76\x36\x74\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x33\x67\x72\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x6C\x69\x32\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x31\x75\x32\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x64\x76\x32\x66\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x38\x71\x7A\x68\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x39\x76\x71\x37\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x62\x33\x61\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x35\x7A\x33\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x36\x6E\x72\x62\x31\x2E\x6D\x70\x34","\x73\x79\x69\x66\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x62\x62\x79\x68\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x78\x61\x33\x6E\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x36\x67\x67\x78\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x72\x76\x63\x74\x66\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6B\x64\x67\x66\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x33\x32\x78\x77\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x36\x76\x6C\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x62\x7A\x32\x6E\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x30\x76\x7A\x67\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x36\x71\x75\x67\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x78\x72\x69\x73\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x39\x69\x71\x74\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x68\x36\x34\x77\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x6D\x79\x74\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x67\x34\x75\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x31\x79\x6B\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x76\x70\x7A\x79\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x7A\x30\x78\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x71\x6A\x61\x73\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x69\x72\x76\x6B\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x6D\x77\x35\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6A\x65\x77\x62\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x6F\x39\x73\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x66\x71\x32\x6E\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x75\x64\x77\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x66\x72\x67\x61\x31\x2E\x6D\x70\x34","\x6D\x61\x6D\x61\x5F\x67\x69\x6E\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6D\x6F\x71\x6F\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6B\x66\x75\x30\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x64\x34\x71\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x68\x64\x33\x68\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x77\x33\x6F\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x69\x75\x38\x32\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x62\x34\x6F\x72\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6E\x6F\x38\x64\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x78\x61\x67\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x7A\x32\x77\x34\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x63\x78\x70\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6E\x76\x75\x61\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x30\x67\x30\x6F\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x76\x32\x69\x6D\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x61\x77\x77\x78\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x68\x74\x33\x76\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x62\x77\x32\x64\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x7A\x75\x7A\x6A\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x63\x6F\x67\x77\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6A\x61\x73\x6E\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x37\x33\x65\x65\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x77\x6B\x70\x70\x31\x2E\x6D\x70\x34","\x61\x6C\x63\x61\x6B\x65\x6E\x79\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x65\x68\x74\x77\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x68\x37\x74\x70\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x33\x37\x7A\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x65\x39\x70\x71\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6F\x62\x65\x38\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x64\x68\x37\x75\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6F\x33\x6F\x68\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x7A\x6D\x39\x30\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x76\x37\x6D\x6F\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x36\x65\x72\x39\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6F\x38\x75\x39\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x32\x31\x73\x6E\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6B\x68\x79\x64\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x76\x67\x61\x31\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6D\x70\x37\x38\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6D\x33\x68\x38\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x65\x6B\x33\x76\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x33\x72\x39\x61\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x67\x31\x39\x6F\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x30\x74\x69\x73\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x79\x69\x6D\x6E\x72\x31\x2E\x6D\x70\x34","\x6D\x61\x6E\x67\x61\x79\x75\x74\x72\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x6D\x31\x6B\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6B\x30\x70\x73\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x79\x33\x39\x34\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6D\x7A\x73\x74\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x74\x71\x36\x6F\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x7A\x36\x31\x74\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x74\x33\x64\x6E\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x33\x69\x38\x62\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x69\x30\x61\x6F\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x64\x76\x79\x65\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x64\x35\x67\x65\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x38\x34\x65\x73\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x65\x7A\x37\x79\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x71\x6B\x62\x35\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x77\x64\x66\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x66\x7A\x6D\x77\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x34\x72\x70\x72\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x36\x39\x31\x39\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x75\x6E\x72\x70\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x31\x78\x6B\x74\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x34\x74\x35\x64\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x34\x6A\x33\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x62\x37\x70\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x69\x35\x72\x6B\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x73\x35\x38\x69\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x64\x61\x79\x69\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x39\x32\x74\x38\x6E\x31\x2E\x6D\x70\x34","\x72\x69\x6B\x61\x67\x75\x73\x72\x69\x61\x6E\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x74\x68\x78\x77\x39\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x70\x65\x7A\x68\x70\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x63\x6A\x67\x62\x78\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x76\x36\x76\x68\x67\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x75\x68\x37\x75\x64\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x63\x39\x63\x70\x62\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x38\x61\x6D\x6B\x66\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x6A\x61\x71\x36\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6E\x32\x75\x6D\x34\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x65\x31\x34\x70\x69\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x36\x6C\x77\x66\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x37\x61\x75\x74\x6C\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x69\x36\x74\x66\x63\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x71\x6D\x72\x37\x75\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x69\x74\x62\x74\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x7A\x65\x34\x6F\x71\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6B\x6B\x71\x79\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x7A\x65\x76\x6C\x7A\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x71\x30\x61\x70\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x74\x72\x66\x73\x76\x32\x2E\x6D\x70\x34","\x61\x73\x75\x70\x61\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x34\x31\x36\x32\x30\x37\x5F\x36\x37\x34\x36\x36\x31\x32\x38\x39\x38\x34\x30\x39\x37\x35\x5F\x37\x32\x33\x38\x35\x33\x38\x34\x36\x30\x36\x37\x36\x36\x34\x35\x32\x34\x39\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x34\x34\x33\x30\x31\x37\x5F\x32\x32\x35\x37\x33\x38\x38\x34\x32\x33\x30\x37\x30\x31\x30\x5F\x31\x35\x30\x37\x36\x31\x34\x30\x31\x38\x35\x33\x38\x38\x37\x31\x36\x36\x38\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x30\x36\x37\x31\x30\x5F\x31\x32\x39\x37\x33\x30\x38\x39\x35\x35\x31\x36\x36\x35\x39\x5F\x39\x30\x39\x30\x31\x30\x32\x38\x39\x30\x32\x33\x35\x31\x31\x33\x39\x32\x32\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x31\x38\x31\x31\x35\x5F\x33\x33\x38\x32\x31\x35\x36\x39\x33\x38\x34\x39\x37\x31\x33\x31\x5F\x32\x37\x30\x32\x35\x33\x39\x31\x35\x34\x34\x33\x32\x32\x33\x31\x39\x33\x38\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x33\x33\x34\x35\x30\x5F\x39\x38\x38\x39\x36\x30\x32\x36\x38\x32\x33\x38\x34\x38\x32\x5F\x34\x39\x30\x38\x33\x30\x30\x31\x37\x35\x39\x36\x30\x33\x39\x36\x32\x36\x35\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x35\x34\x39\x39\x33\x5F\x39\x31\x33\x35\x38\x32\x35\x33\x35\x38\x33\x35\x33\x35\x33\x5F\x37\x39\x33\x37\x31\x35\x35\x37\x33\x30\x30\x30\x31\x32\x31\x39\x39\x34\x35\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x36\x35\x37\x34\x35\x5F\x32\x35\x38\x34\x38\x33\x32\x30\x32\x30\x39\x39\x30\x32\x38\x5F\x31\x38\x33\x31\x35\x33\x34\x37\x33\x34\x31\x32\x36\x34\x30\x38\x34\x39\x37\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x30\x31\x36\x36\x5F\x32\x37\x31\x36\x32\x34\x32\x36\x30\x38\x36\x34\x34\x35\x37\x31\x5F\x35\x35\x36\x32\x34\x35\x32\x33\x33\x35\x36\x31\x31\x30\x35\x30\x34\x33\x30\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x31\x33\x35\x38\x5F\x33\x37\x34\x33\x38\x37\x39\x33\x34\x32\x33\x32\x32\x38\x36\x38\x5F\x34\x37\x33\x31\x31\x35\x32\x33\x34\x37\x30\x38\x34\x36\x31\x34\x33\x36\x38\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x31\x39\x33\x38\x5F\x31\x39\x38\x32\x37\x35\x31\x37\x31\x38\x30\x35\x38\x32\x32\x5F\x38\x35\x30\x36\x32\x34\x31\x35\x33\x33\x39\x36\x39\x35\x30\x39\x30\x30\x34\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x33\x30\x33\x34\x5F\x31\x32\x38\x36\x35\x34\x37\x32\x31\x39\x36\x37\x33\x38\x39\x5F\x31\x38\x33\x37\x31\x34\x34\x33\x34\x30\x35\x37\x30\x30\x31\x37\x38\x33\x30\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x34\x32\x31\x37\x5F\x32\x37\x30\x37\x33\x31\x39\x37\x39\x32\x38\x36\x36\x31\x36\x35\x5F\x33\x36\x38\x32\x33\x32\x38\x33\x39\x32\x38\x34\x30\x30\x31\x30\x32\x36\x31\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x35\x39\x38\x36\x5F\x31\x35\x31\x38\x31\x36\x34\x33\x33\x32\x36\x33\x30\x39\x32\x5F\x36\x36\x30\x30\x32\x36\x32\x39\x36\x36\x35\x32\x30\x33\x39\x38\x32\x37\x31\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x38\x32\x34\x30\x30\x5F\x33\x33\x39\x39\x32\x36\x33\x34\x34\x30\x39\x31\x34\x33\x33\x5F\x32\x35\x38\x31\x32\x34\x38\x35\x38\x31\x31\x35\x36\x36\x39\x33\x36\x30\x33\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x38\x33\x37\x33\x39\x5F\x31\x30\x36\x30\x31\x39\x30\x39\x32\x31\x30\x37\x39\x32\x31\x32\x5F\x33\x38\x39\x38\x35\x32\x30\x32\x35\x34\x36\x36\x34\x35\x30\x37\x33\x32\x38\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x38\x37\x34\x31\x35\x5F\x36\x33\x38\x37\x37\x36\x35\x34\x36\x39\x39\x38\x33\x30\x37\x5F\x33\x30\x39\x31\x30\x39\x33\x38\x38\x32\x32\x36\x37\x38\x31\x38\x36\x30\x37\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x38\x39\x37\x37\x31\x5F\x37\x35\x32\x36\x37\x30\x38\x35\x35\x33\x32\x39\x32\x36\x36\x5F\x35\x30\x36\x34\x35\x37\x33\x36\x30\x37\x34\x36\x35\x35\x31\x39\x34\x36\x33\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x31\x33\x38\x36\x30\x5F\x33\x33\x39\x33\x31\x31\x30\x31\x37\x37\x34\x34\x34\x33\x35\x32\x5F\x34\x32\x38\x37\x31\x36\x35\x38\x33\x38\x33\x35\x39\x32\x36\x34\x31\x32\x34\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x31\x34\x38\x35\x39\x5F\x37\x36\x38\x36\x33\x32\x37\x32\x33\x37\x30\x31\x37\x37\x33\x5F\x35\x36\x36\x32\x35\x32\x31\x36\x32\x30\x37\x33\x34\x33\x31\x36\x37\x37\x34\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x31\x35\x30\x31\x39\x5F\x31\x34\x39\x33\x39\x32\x39\x37\x33\x33\x35\x37\x30\x33\x31\x5F\x36\x32\x35\x34\x39\x36\x33\x33\x33\x33\x37\x37\x39\x37\x37\x39\x37\x30\x38\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x36\x34\x34\x35\x37\x5F\x33\x33\x38\x36\x32\x39\x37\x31\x30\x35\x36\x33\x31\x31\x39\x5F\x36\x36\x31\x35\x32\x32\x36\x38\x34\x39\x32\x38\x30\x33\x36\x39\x34\x35\x33\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x37\x30\x37\x36\x32\x5F\x31\x39\x31\x30\x33\x33\x33\x32\x35\x38\x37\x34\x36\x37\x31\x5F\x38\x31\x36\x38\x32\x34\x36\x30\x39\x34\x32\x30\x30\x31\x36\x37\x36\x30\x39\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x37\x38\x31\x31\x32\x5F\x39\x37\x31\x36\x39\x33\x32\x39\x39\x39\x37\x32\x38\x38\x33\x5F\x31\x36\x34\x38\x38\x32\x36\x32\x32\x31\x35\x30\x34\x37\x34\x32\x32\x32\x30\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x38\x32\x33\x36\x33\x5F\x31\x31\x38\x31\x38\x36\x36\x36\x38\x38\x38\x35\x34\x36\x39\x34\x5F\x34\x32\x33\x33\x34\x36\x36\x33\x35\x34\x38\x39\x32\x37\x32\x31\x35\x39\x35\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x39\x38\x38\x35\x38\x5F\x31\x33\x30\x32\x34\x37\x30\x35\x36\x36\x37\x35\x31\x36\x30\x39\x5F\x33\x37\x33\x36\x39\x39\x39\x37\x37\x33\x34\x35\x32\x32\x32\x35\x37\x32\x39\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x37\x30\x37\x30\x34\x39\x5F\x33\x33\x37\x39\x38\x31\x37\x37\x37\x33\x30\x34\x32\x33\x31\x5F\x33\x31\x35\x32\x36\x35\x30\x37\x34\x31\x31\x36\x39\x38\x35\x31\x36\x36\x39\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x37\x31\x34\x34\x31\x32\x5F\x36\x38\x30\x36\x38\x30\x37\x30\x32\x38\x30\x36\x39\x35\x39\x5F\x32\x31\x34\x39\x34\x39\x39\x33\x36\x36\x35\x36\x32\x37\x32\x39\x38\x31\x34\x5F\x6E\x2E\x6D\x70\x34","\x62\x6F\x63\x69\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x79\x78\x6F\x64\x67\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x36\x31\x70\x33\x38\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x69\x34\x67\x33\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x74\x6A\x6C\x69\x6F\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x7A\x32\x6D\x63\x34\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x75\x79\x6F\x66\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x35\x68\x72\x6C\x65\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x78\x75\x6C\x35\x61\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6F\x39\x32\x6E\x72\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6A\x31\x72\x68\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x69\x61\x71\x70\x67\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x73\x35\x7A\x6C\x6A\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x78\x30\x67\x35\x61\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6F\x6A\x37\x36\x6E\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x39\x67\x6C\x33\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x75\x35\x32\x63\x71\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6D\x76\x67\x6A\x37\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x75\x30\x37\x6F\x7A\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x68\x31\x66\x6F\x36\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6D\x72\x6F\x33\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6B\x78\x30\x61\x63\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x67\x39\x65\x7A\x71\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x70\x6C\x69\x6E\x31\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x61\x78\x72\x69\x35\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x69\x6A\x7A\x7A\x6E\x36\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x75\x67\x79\x63\x64\x37\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6C\x31\x34\x6E\x6B\x38\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x63\x72\x67\x71\x74\x39\x2E\x6D\x70\x34","\x67\x65\x61\x79\x75\x62\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x75\x66\x72\x75\x6C\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6A\x62\x64\x70\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x6A\x39\x6E\x6D\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x63\x6E\x73\x61\x6C\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x64\x34\x6B\x63\x37\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x62\x69\x68\x38\x71\x35\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x78\x78\x37\x61\x61\x36\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x67\x33\x7A\x73\x71\x37\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6D\x37\x34\x77\x64\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x70\x38\x74\x66\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x6A\x38\x69\x76\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x73\x7A\x67\x75\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6C\x37\x33\x72\x79\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x79\x68\x7A\x6E\x6A\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6B\x6D\x74\x70\x33\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x73\x6E\x68\x64\x67\x35\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x79\x31\x6A\x7A\x36\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x78\x37\x30\x6D\x6B\x37\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x39\x6D\x76\x76\x66\x38\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x69\x63\x6D\x7A\x64\x39\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x36\x6F\x6F\x30\x73\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x63\x76\x76\x70\x74\x31\x2E\x6D\x70\x34","\x73\x61\x6E\x74\x75\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x65\x73\x70\x79\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x33\x7A\x66\x69\x32\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x74\x30\x30\x6B\x78\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6B\x78\x37\x68\x69\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x37\x67\x36\x6B\x64\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x36\x79\x6B\x34\x63\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x79\x31\x75\x37\x38\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x69\x6C\x73\x79\x79\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x31\x39\x34\x38\x62\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x7A\x67\x38\x34\x36\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x31\x79\x6F\x7A\x6C\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x71\x6A\x72\x32\x71\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x78\x31\x77\x70\x35\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x7A\x72\x31\x30\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x73\x32\x39\x68\x71\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6B\x62\x6F\x30\x79\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x78\x65\x6B\x39\x7A\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x73\x37\x67\x62\x38\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x30\x64\x62\x75\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x78\x75\x34\x6B\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x7A\x77\x32\x6E\x62\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x65\x79\x62\x6A\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x66\x6D\x78\x33\x33\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x67\x6E\x6C\x61\x6D\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x74\x77\x77\x75\x35\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x71\x6B\x65\x68\x37\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x65\x66\x6D\x32\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x69\x64\x7A\x64\x35\x31\x2E\x6D\x70\x34","\x75\x6B\x68\x74\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6E\x73\x32\x7A\x6F\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6A\x39\x69\x38\x31\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x74\x6A\x35\x38\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x61\x32\x69\x73\x76\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x62\x67\x63\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x75\x72\x62\x6A\x30\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x63\x65\x69\x71\x76\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x30\x7A\x36\x6F\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x39\x30\x62\x35\x30\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x64\x63\x69\x78\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x37\x67\x70\x6A\x70\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x63\x63\x32\x32\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x78\x6E\x36\x34\x31\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x73\x69\x6C\x78\x7A\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x73\x34\x6D\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x70\x39\x6A\x35\x76\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6D\x67\x65\x75\x79\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6C\x77\x39\x33\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x76\x6D\x30\x64\x6B\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x66\x69\x76\x38\x78\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6A\x6D\x33\x64\x74\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x69\x37\x79\x61\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x64\x72\x35\x79\x61\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x37\x32\x6B\x70\x67\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6A\x33\x62\x32\x32\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x37\x79\x6B\x74\x32\x35\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6F\x30\x76\x68\x31\x36\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x73\x73\x66\x62\x6E\x37\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x38\x74\x37\x34\x35\x38\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x76\x68\x75\x37\x35\x39\x2E\x6D\x70\x34","\x73\x65\x6C\x65\x63\x74\x65\x64\x42\x75\x74\x74\x6F\x6E\x49\x64","\x6D\x65\x6E\x75","\x42\x75\x74\x74\x6F\x6E\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x6D\x65\x6E\x75\x20\x62\x6F\x74\x20\x61\x64\x61\x20\x64\x69\x73\x69\x6E\x69\x20\x6B\x61\x6B\x20\x73\x69\x6C\x61\x68\x6B\x61\x6E\x20\x64\x69\x20\x70\x69\x6C\x69\x68","\x53\x45\x4C\x45\x43\x54\x20\x48\x45\x52\x45","\x53\x49\x4E\x47\x4C\x45\x5F\x53\x45\x4C\x45\x43\x54","\u25C9\x20\x41\x6C\x6C\x20\x6D\x65\x6E\x75\x20\x62\x6F\x74","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x61\x6C\x6C\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\x30","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x32","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x33","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x66\x75\x6E\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x34","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x35","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6F\x74\x68\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x36","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x37","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x38","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x74\x61\x67\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x39","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x75\x70\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x30","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x73\x65\x74\x20\x73\x74\x63\x20\x63\x6D\x64\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x31","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x67\x61\x63\x68\x61\x63\x65\x63\x61\x6E\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x32","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x74\x65\x6C\x65\x73\x74\x63\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x33","\x6E\x73\x66\x77\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6E\x73\x66\x77\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x34","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x61\x73\x75\x70\x61\x6E\x20\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x35","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x69\x6D\x61\x67\x65\x20\x65\x66\x66\x65\x63\x74\x20\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x53\x6F\x75\x72\x63\x65\x20\x73\x63\x72\x69\x70\x74\x20\x62\x6F\x74","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x6B\x6E\x6F\x77\x20\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65\x20\x74\x68\x69\x73\x20\x62\x6F\x74\x5F","\u25C9\x20\x43\x6F\x6E\x74\x72\x69\x62\x75\x74\x69\x6F\x6E","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x6B\x6E\x6F\x77\x20\x61\x6E\x79\x6F\x6E\x65\x20\x77\x68\x6F\x20\x63\x6F\x6E\x74\x72\x69\x62\x75\x74\x65\x64\x20\x74\x6F\x20\x74\x68\x69\x73\x20\x73\x63\x72\x69\x70\x74\x5F","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65","\x67\x72\x75\x70\x20\x62\x6F\x74","\x42\x75\x74\x74\x6F\x6E\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x67\x72\x75\x70\x20\x73\x75\x70\x70\x6F\x72\x74","\x4C\x69\x73\x74\x20\x6D\x65\x6E\x75\x20\x67\x72\x6F\x75\x70\x20\x73\x75\x70\x70\x6F\x72\x74\x20\x61\x64\x61\x20\x64\x69\x73\x69\x6E\x69\x20\x6B\x61\x6B\x20\x73\x69\x6C\x61\x68\x6B\x61\x6E\x20\x64\x69\x20\x70\x69\x6C\x69\x68\x2E\x20\x49\x6E\x67\x61\x74\x74\x74\x20\x64\x6F\x6E\x27\x74\x20\x73\x70\x61\x6D\x21\x21\x21","\u25C9\x20\x47\x72\x6F\x75\x70\x20\x77\x68\x61\x74\x73\x61\x70\x70\x20\x62\x6F\x74","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x6A\x6F\x69\x6E\x20\x74\x68\x65\x20\x67\x72\x6F\x75\x70\x5F","\u25C9\x20\x47\x72\x6F\x75\x70\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x20","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x6A\x6F\x69\x6E\x20\x74\x68\x65\x20\x67\x72\x6F\x75\x70\x20\x61\x6C\x70\x68\x61\x62\x6F\x74\x5F","\u25C9\x20\x47\x72\x6F\x75\x70\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x20\x32","\x50\x55\x42\x4C\x49\x43\x20\x4D\x4F\x44\x45","\x70\x75\x62\x6C\x69\x63"];const isBtMsg=(type== _0x4c8e[0])?mek[_0x4c8e[2]][_0x4c8e[0]][_0x4c8e[1]]:_0x4c8e[3];const isStMsg=(type== _0x4c8e[4])?mek[_0x4c8e[2]][_0x4c8e[4]][_0x4c8e[5]]:_0x4c8e[3];const stc=mek[_0x4c8e[2]][_0x4c8e[6]];const msc=mek[_0x4c8e[2]][_0x4c8e[7]];wew= fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`);alfa2= _0x4c8e[10];alfa3= _0x4c8e[11];if(msc){if(msc[_0x4c8e[12]]== 57212){alpha[_0x4c8e[14]](from,wew,image,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${tee}${_0x4c8e[13]}`),quoted:ftroli,caption:help(prefix,hahh,pushname,ownername,status),contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[alfa],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})}};if(stc){if(stc[_0x4c8e[12]]== `${_0x4c8e[3]}${cmd_stc_ping}${_0x4c8e[3]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(moment[_0x4c8e[19]](_0x4c8e[18])[_0x4c8e[17]](_0x4c8e[16]),_0x4c8e[20]),color(_0x4c8e[21]));const timestamp=speed();const latensi=speed()- timestamp;exec(`${_0x4c8e[23]}`,(_0x57a6x7,_0x57a6x8,_0x57a6x9)=>{const _0x57a6xa=_0x57a6x8.toString(_0x4c8e[24]);const _0x57a6xb=_0x57a6xa[_0x4c8e[26]](/Memory:/,_0x4c8e[25]);const _0x57a6xc=`${_0x4c8e[27]}${_0x57a6xb}${_0x4c8e[28]}${latensi[_0x4c8e[29]](4)}${_0x4c8e[30]}`;fakegroup(_0x57a6xc)})}};if(stc){if(stc[_0x4c8e[12]]== `${_0x4c8e[3]}${cmd_stc_menu}${_0x4c8e[3]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(moment[_0x4c8e[19]](_0x4c8e[18])[_0x4c8e[17]](_0x4c8e[16]),_0x4c8e[20]),color(_0x4c8e[31]));ini_thumbb= fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`);alpha[_0x4c8e[14]](from,ini_thumbb,image,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:helpmenu(prefix,wita,wit,ucapannya,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:helpmenu(prefix,wita,wit,ucapannya,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true},quoted:ftoko})}};if(stc){if(stc[_0x4c8e[12]]== `${_0x4c8e[3]}${cmd_stc_self}${_0x4c8e[3]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(moment[_0x4c8e[19]](_0x4c8e[18])[_0x4c8e[17]](_0x4c8e[16]),_0x4c8e[20]),color(_0x4c8e[32]));if(!mek[_0x4c8e[34]][_0x4c8e[33]]){return fakestatus(_0x4c8e[35])};if(banChats=== true){return};banChats= true;fakeitem(`${_0x4c8e[36]}`)}};if(stc){if(stc[_0x4c8e[12]]== `${_0x4c8e[3]}${cmd_stc_public}${_0x4c8e[3]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(moment[_0x4c8e[19]](_0x4c8e[18])[_0x4c8e[17]](_0x4c8e[16]),_0x4c8e[20]),color(_0x4c8e[37]));if(!mek[_0x4c8e[34]][_0x4c8e[33]]){return fakestatus(_0x4c8e[35])};if(banChats=== false){return};banChats= false;fakeitem(`${_0x4c8e[38]}`)}};if(stc){if(stc[_0x4c8e[12]]== `${_0x4c8e[3]}${cmd_stc_image_to_sticker}${_0x4c8e[3]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(moment[_0x4c8e[19]](_0x4c8e[18])[_0x4c8e[17]](_0x4c8e[16]),_0x4c8e[20]),color(_0x4c8e[39]));const isPoto=(type=== _0x4c8e[40]|| type=== _0x4c8e[41]);const isVideo=type=== _0x4c8e[6]&& content[_0x4c8e[42]](_0x4c8e[41]);const isFoto=type=== _0x4c8e[6]&& content[_0x4c8e[42]](_0x4c8e[40]);if((isPoto&&  !mek[_0x4c8e[2]][_0x4c8e[41]]|| isFoto)&& args[_0x4c8e[43]]== 0){const encmedia=isFoto?JSON[_0x4c8e[48]](JSON[_0x4c8e[47]](mek)[_0x4c8e[26]](_0x4c8e[45],_0x4c8e[46]))[_0x4c8e[2]][_0x4c8e[6]][_0x4c8e[44]]:mek;const media= await alpha[_0x4c8e[49]](encmedia);ran= _0x4c8e[50]; await ffmpeg(`${_0x4c8e[68]}${media}${_0x4c8e[3]}`)[_0x4c8e[67]](media)[_0x4c8e[62]](_0x4c8e[65],function(_0x57a6x13){console[_0x4c8e[22]](`${_0x4c8e[66]}${_0x57a6x13}${_0x4c8e[3]}`)})[_0x4c8e[62]](_0x4c8e[63],function(_0x57a6x12){console[_0x4c8e[22]](`${_0x4c8e[64]}${_0x57a6x12}${_0x4c8e[3]}`);fs[_0x4c8e[61]](media);reply(_0x4c8e[63])})[_0x4c8e[62]](_0x4c8e[59],function(){console[_0x4c8e[22]](_0x4c8e[60]);alpha[_0x4c8e[14]](from,fs[_0x4c8e[9]](ran),sticker,{quoted:mek});fs[_0x4c8e[61]](media);fs[_0x4c8e[61]](ran)})[_0x4c8e[58]]([`${_0x4c8e[54]}`,`${_0x4c8e[55]}`,`${_0x4c8e[56]}`,`${_0x4c8e[57]}`])[_0x4c8e[53]](_0x4c8e[52])[_0x4c8e[51]](ran)}else {if((isPoto&& mek[_0x4c8e[2]][_0x4c8e[41]][_0x4c8e[69]]< 11|| isVideo&& mek[_0x4c8e[2]][_0x4c8e[6]][_0x4c8e[44]][_0x4c8e[70]][_0x4c8e[41]][_0x4c8e[69]]< 11)&& args[_0x4c8e[43]]== 0){const encmedia=isVideo?JSON[_0x4c8e[48]](JSON[_0x4c8e[47]](mek)[_0x4c8e[26]](_0x4c8e[45],_0x4c8e[46]))[_0x4c8e[2]][_0x4c8e[6]][_0x4c8e[44]]:mek;const media= await alpha[_0x4c8e[49]](encmedia);ran= _0x4c8e[71];reply(mess[_0x4c8e[72]]); await ffmpeg(`${_0x4c8e[68]}${media}${_0x4c8e[3]}`)[_0x4c8e[81]](media[_0x4c8e[80]](_0x4c8e[79])[1])[_0x4c8e[62]](_0x4c8e[65],function(_0x57a6x13){console[_0x4c8e[22]](`${_0x4c8e[66]}${_0x57a6x13}${_0x4c8e[3]}`)})[_0x4c8e[62]](_0x4c8e[63],function(_0x57a6x12){console[_0x4c8e[22]](`${_0x4c8e[64]}${_0x57a6x12}${_0x4c8e[3]}`);fs[_0x4c8e[61]](media);tipe= media[_0x4c8e[74]](_0x4c8e[73])?_0x4c8e[75]:_0x4c8e[76];reply(`${_0x4c8e[77]}${tipe}${_0x4c8e[78]}`)})[_0x4c8e[62]](_0x4c8e[59],function(){console[_0x4c8e[22]](_0x4c8e[60]);alpha[_0x4c8e[14]](from,fs[_0x4c8e[9]](ran),sticker,{quoted:mek});fs[_0x4c8e[61]](media);fs[_0x4c8e[61]](ran)})[_0x4c8e[58]]([`${_0x4c8e[54]}`,`${_0x4c8e[55]}`,`${_0x4c8e[56]}`,`${_0x4c8e[57]}`])[_0x4c8e[53]](_0x4c8e[52])[_0x4c8e[51]](ran)}else {fakegroup(`${_0x4c8e[82]}${prefix}${_0x4c8e[83]}`)}}}};if(stc){if(stc[_0x4c8e[12]]== `${_0x4c8e[3]}${cmd_stc_to_image}${_0x4c8e[3]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(moment[_0x4c8e[19]](_0x4c8e[18])[_0x4c8e[17]](_0x4c8e[16]),_0x4c8e[20]),color(_0x4c8e[84]));const isStikerl=type=== _0x4c8e[6]&& content[_0x4c8e[42]](_0x4c8e[6]);if(!isStikerl){return fakeitem(_0x4c8e[85])};reply(mess[_0x4c8e[72]]);encmedia= JSON[_0x4c8e[48]](JSON[_0x4c8e[47]](mek)[_0x4c8e[26]](_0x4c8e[45],_0x4c8e[46]))[_0x4c8e[2]][_0x4c8e[6]][_0x4c8e[44]];media=  await alpha[_0x4c8e[49]](encmedia);ran= getRandom(_0x4c8e[86]);exec(`${_0x4c8e[87]}${media}${_0x4c8e[88]}${ran}${_0x4c8e[3]}`,(_0x57a6x12)=>{fs[_0x4c8e[61]](media);if(_0x57a6x12){return reply(_0x4c8e[89])};buffer= fs[_0x4c8e[9]](ran);fakethumb(buffer,_0x4c8e[90]);fs[_0x4c8e[61]](ran)})}};if(stc){if(stc[_0x4c8e[12]]== 7552){var value=`${_0x4c8e[91]}${n}${_0x4c8e[3]}${n}${_0x4c8e[88]}`;value+= `${_0x4c8e[3]}${n}${_0x4c8e[92]}${n}${_0x4c8e[3]}${n}${_0x4c8e[3]}`;value+= `${_0x4c8e[3]}${n}${_0x4c8e[93]}${n}${_0x4c8e[3]}${n}${_0x4c8e[3]}`;value+= `${_0x4c8e[3]}${n}${_0x4c8e[94]}`;var group= await alpha[_0x4c8e[95]](from);var member=group[_0x4c8e[96]];var mem=[];member[_0x4c8e[101]](async (_0x57a6x19)=>{mem[_0x4c8e[100]](_0x57a6x19[_0x4c8e[99]][_0x4c8e[26]](_0x4c8e[97],_0x4c8e[98]))});var optionshidetag={text:value,contextInfo:{mentionedJid:mem},quoted:mek};alpha[_0x4c8e[14]](from,optionshidetag,text,{quoted:{key:{participant:`${_0x4c8e[102]}`,"\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64":_0x4c8e[103],"\x66\x72\x6F\x6D\x4D\x65":false,"\x69\x64":_0x4c8e[104]},"\x6D\x65\x73\x73\x61\x67\x65":{"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x6D\x69\x6D\x65\x74\x79\x70\x65":_0x4c8e[105],"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${setting[_0x4c8e[106]]}${_0x4c8e[3]}`,"\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68":_0x4c8e[107],"\x70\x61\x67\x65\x43\x6F\x75\x6E\x74":0,"\x66\x69\x6C\x65\x4E\x61\x6D\x65":`${_0x4c8e[3]}${setting[_0x4c8e[106]]}${_0x4c8e[88]}`}},"\x6D\x65\x73\x73\x61\x67\x65\x54\x69\x6D\x65\x73\x74\x61\x6D\x70":_0x4c8e[108],"\x73\x74\x61\x74\x75\x73":_0x4c8e[109]},contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}})}};if(stc){if(stc[_0x4c8e[12]]== 33178){var value=`${_0x4c8e[110]}${n}${_0x4c8e[3]}${n}${_0x4c8e[3]}`;value+= `${_0x4c8e[111]}${n}${_0x4c8e[3]}${n}${_0x4c8e[3]}`;value+= `${_0x4c8e[112]}${n}${_0x4c8e[3]}`;value+= _0x4c8e[113];var group= await alpha[_0x4c8e[95]](from);var member=group[_0x4c8e[96]];var mem=[];member[_0x4c8e[101]](async (_0x57a6x19)=>{mem[_0x4c8e[100]](_0x57a6x19[_0x4c8e[99]][_0x4c8e[26]](_0x4c8e[97],_0x4c8e[98]))});var optionshidetag={text:value,contextInfo:{mentionedJid:mem},quoted:mek};alpha[_0x4c8e[14]](from,optionshidetag,text,{quoted:{key:{participant:`${_0x4c8e[102]}`,"\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64":_0x4c8e[103],"\x66\x72\x6F\x6D\x4D\x65":false,"\x69\x64":_0x4c8e[104]},"\x6D\x65\x73\x73\x61\x67\x65":{"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x6D\x69\x6D\x65\x74\x79\x70\x65":_0x4c8e[105],"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${setting[_0x4c8e[106]]}${_0x4c8e[3]}`,"\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68":_0x4c8e[107],"\x70\x61\x67\x65\x43\x6F\x75\x6E\x74":0,"\x66\x69\x6C\x65\x4E\x61\x6D\x65":`${_0x4c8e[3]}${setting[_0x4c8e[106]]}${_0x4c8e[88]}`}},"\x6D\x65\x73\x73\x61\x67\x65\x54\x69\x6D\x65\x73\x74\x61\x6D\x70":_0x4c8e[108],"\x73\x74\x61\x74\x75\x73":_0x4c8e[109]},contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}})}};if(stc){if(stc[_0x4c8e[12]]== `${_0x4c8e[3]}${cmd_stc_group_open}${_0x4c8e[3]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(moment[_0x4c8e[19]](_0x4c8e[18])[_0x4c8e[17]](_0x4c8e[16]),_0x4c8e[20]),color(_0x4c8e[114]));if(!isBotGroupAdmins){return reply(_0x4c8e[115])};alpha[_0x4c8e[117]](from,GroupSettingChange[_0x4c8e[116]],false);fakegroup(_0x4c8e[118])}else {if(stc[_0x4c8e[12]]== `${_0x4c8e[3]}${cmd_stc_group_close}${_0x4c8e[3]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(moment[_0x4c8e[19]](_0x4c8e[18])[_0x4c8e[17]](_0x4c8e[16]),_0x4c8e[20]),color(_0x4c8e[119]));alpha[_0x4c8e[117]](from,GroupSettingChange[_0x4c8e[116]],true);fakegroup(_0x4c8e[120])}}};if(stc){if(stc[_0x4c8e[12]]== `${_0x4c8e[3]}${cmd_stc_play_music}${_0x4c8e[3]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(moment[_0x4c8e[19]](_0x4c8e[18])[_0x4c8e[17]](_0x4c8e[16]),_0x4c8e[20]),color(_0x4c8e[121]));fakegroup(_0x4c8e[122]);aramas=  await yts(srchh);aramat= aramas[_0x4c8e[123]];var mulaikah=aramat[0][_0x4c8e[124]];try{yta(mulaikah)[_0x4c8e[137]]((_0x57a6x1c)=>{const {dl_link,thumb,title,filesizeF,filesize}=_0x57a6x1c;axios[_0x4c8e[139]](`${_0x4c8e[138]}${dl_link}${_0x4c8e[3]}`)[_0x4c8e[137]](async (_0x57a6x1d)=>{if(Number(filesize)>= 100000){return sendMediaURL(from,thumb,`${_0x4c8e[125]}${title}${_0x4c8e[126]}${filesizeF}${_0x4c8e[127]}${_0x57a6x1d[_0x4c8e[128]]}${_0x4c8e[129]}`)};const _0x57a6x1e=`${_0x4c8e[130]}${n}${_0x4c8e[3]}${n}${_0x4c8e[131]}${title}${_0x4c8e[3]}${n}${_0x4c8e[132]}${n}${_0x4c8e[133]}${filesizeF}${_0x4c8e[3]}${n}${_0x4c8e[134]}${_0x57a6x1d[_0x4c8e[128]]}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[135]}`;sendMediaURL(from,thumb,_0x57a6x1e); await sendMediaURL(from,dl_link)[_0x4c8e[136]](()=>{return reply(_0x4c8e[63])})})})}catch(err){reply(mess[_0x4c8e[63]][_0x4c8e[140]])}}};sub_yt_zeeone_ofc= (type== _0x4c8e[4])?mek[_0x4c8e[2]][_0x4c8e[4]][_0x4c8e[5]]:_0x4c8e[3];if(sub_yt_zeeone_ofc== _0x4c8e[141]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[142]));if(!isBotGroupAdmins){return reply(_0x4c8e[115])};alpha[_0x4c8e[117]](from,GroupSettingChange[_0x4c8e[116]],false);fakegroup(_0x4c8e[118])};if(sub_yt_zeeone_ofc== _0x4c8e[143]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[144]));if(!isBotGroupAdmins){return reply(_0x4c8e[115])};alpha[_0x4c8e[117]](from,GroupSettingChange[_0x4c8e[116]],true);fakegroup(_0x4c8e[120])};if(budy=== `${_0x4c8e[145]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[146]));alpha[_0x4c8e[14]](from,convertmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[151]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[152]));alpha[_0x4c8e[14]](from,asupanmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[153]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[154]));ini_thumb= fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`);alpha[_0x4c8e[14]](from,ini_thumb,image,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:allmenu(prefix,wita,wit,ucapannya,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:allmenu(prefix,wita,wit,ucapannya,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true},quoted:ftoko})};if(budy=== `${_0x4c8e[155]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[156]));alpha[_0x4c8e[14]](from,downloadmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[157]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[158]));alpha[_0x4c8e[14]](from,funmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[159]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[160]));alpha[_0x4c8e[14]](from,makermenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[161]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[162]));alpha[_0x4c8e[14]](from,othermenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[163]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[164]));alpha[_0x4c8e[14]](from,ownermenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[165]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[166]));alpha[_0x4c8e[14]](from,storagemenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[167]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[168]));alpha[_0x4c8e[14]](from,tagmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[169]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[170]));alpha[_0x4c8e[14]](from,upmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[171]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[172]));alpha[_0x4c8e[14]](from,set_stc_cmd(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[173]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[174]));alpha[_0x4c8e[14]](from,cecanmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[175]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[176]));alpha[_0x4c8e[14]](from,telestiker(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[177]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[178]));alpha[_0x4c8e[14]](from,image_effect(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[179]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[180]));var imgList=[_0x4c8e[181],_0x4c8e[182],_0x4c8e[183],_0x4c8e[184],_0x4c8e[185],_0x4c8e[186],_0x4c8e[187]];var imgUrl=imgList[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* imgList[_0x4c8e[43]])];alpha[_0x4c8e[14]](from,_0x4c8e[190],text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[191],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[192],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[193]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x4c8e[3]}${imgUrl}${_0x4c8e[3]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x4c8e[3],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[194]}`}},quoted:ftoko})};if(budy=== `${_0x4c8e[195]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[196]));var imgList=[_0x4c8e[181],_0x4c8e[182],_0x4c8e[183],_0x4c8e[184],_0x4c8e[185],_0x4c8e[186],_0x4c8e[187]];var imgUrl=imgList[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* imgList[_0x4c8e[43]])];ini_mark= `${_0x4c8e[102]}`;tqto= `${_0x4c8e[197]}${ini_mark[_0x4c8e[80]](_0x4c8e[198])[0]}${_0x4c8e[3]}`;alpha[_0x4c8e[14]](from,tqto,text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[199],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[199],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[193]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x4c8e[3]}${imgUrl}${_0x4c8e[3]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x4c8e[3],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[194]}`}},quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[ini_mark]}})};if(budy=== `${_0x4c8e[200]}`){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[201]));ini_mark= `${_0x4c8e[102]}`;tqto= `${_0x4c8e[202]}${gc_wa_lu}${_0x4c8e[203]}${ini_mark[_0x4c8e[80]](_0x4c8e[198])[0]}${_0x4c8e[3]}`;alpha[_0x4c8e[14]](from,tqto,text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[199],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[199],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[3]}${baper}${_0x4c8e[3]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x4c8e[3]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[194]}`}},quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[ini_mark]}})};if(sub_yt_zeeone_ofc== _0x4c8e[204]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[146]));alpha[_0x4c8e[14]](from,convertmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[205]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[152]));alpha[_0x4c8e[14]](from,asupanmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[206]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[154]));ini_thumb= fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`);alpha[_0x4c8e[14]](from,ini_thumb,image,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:allmenu(prefix,wita,wit,ucapannya,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:allmenu(prefix,wita,wit,ucapannya,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[207]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[156]));alpha[_0x4c8e[14]](from,downloadmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[208]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[158]));alpha[_0x4c8e[14]](from,funmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[209]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[160]));alpha[_0x4c8e[14]](from,makermenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[210]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[162]));alpha[_0x4c8e[14]](from,othermenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[211]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[164]));alpha[_0x4c8e[14]](from,ownermenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[212]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[166]));alpha[_0x4c8e[14]](from,storagemenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[213]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[168]));alpha[_0x4c8e[14]](from,tagmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[214]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[170]));alpha[_0x4c8e[14]](from,upmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[215]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[172]));alpha[_0x4c8e[14]](from,set_stc_cmd(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[216]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[174]));alpha[_0x4c8e[14]](from,cecanmenu(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[217]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[176]));alpha[_0x4c8e[14]](from,telestiker(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[218]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[178]));alpha[_0x4c8e[14]](from,image_effect(prefix),text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[147],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[148],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya2}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[148]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[150]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[219]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[180]));var imgList=[_0x4c8e[181],_0x4c8e[182],_0x4c8e[183],_0x4c8e[184],_0x4c8e[185],_0x4c8e[186],_0x4c8e[187]];var imgUrl=imgList[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* imgList[_0x4c8e[43]])];alpha[_0x4c8e[14]](from,_0x4c8e[190],text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[191],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[192],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[193]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x4c8e[3]}${imgUrl}${_0x4c8e[3]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x4c8e[3],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[194]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0x4c8e[220]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[196]));var imgList=[_0x4c8e[181],_0x4c8e[182],_0x4c8e[183],_0x4c8e[184],_0x4c8e[185],_0x4c8e[186],_0x4c8e[187]];var imgUrl=imgList[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* imgList[_0x4c8e[43]])];ini_mark= `${_0x4c8e[102]}`;tqto= `${_0x4c8e[197]}${ini_mark[_0x4c8e[80]](_0x4c8e[198])[0]}${_0x4c8e[3]}`;alpha[_0x4c8e[14]](from,tqto,text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[199],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[199],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[193]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x4c8e[3]}${imgUrl}${_0x4c8e[3]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x4c8e[3],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[194]}`}},quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[ini_mark]}})};if(sub_yt_zeeone_ofc== _0x4c8e[221]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[201]));ini_mark= `${_0x4c8e[102]}`;tqto= `${_0x4c8e[202]}${gc_wa_lu}${_0x4c8e[203]}${ini_mark[_0x4c8e[80]](_0x4c8e[198])[0]}${_0x4c8e[3]}`;alpha[_0x4c8e[14]](from,tqto,text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[199],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[199],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[3]}${baper}${_0x4c8e[3]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x4c8e[3]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[194]}`}},quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[ini_mark]}})};if(sub_yt_zeeone_ofc== _0x4c8e[222]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[223]));ini_mark= `${_0x4c8e[102]}`;tqto= `${_0x4c8e[224]}${ini_mark[_0x4c8e[80]](_0x4c8e[198])[0]}${_0x4c8e[3]}`;alpha[_0x4c8e[14]](from,tqto,text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[199],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[199],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[3]}${baper}${_0x4c8e[3]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x4c8e[3]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[194]}`}},quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[ini_mark]}})};if(sub_yt_zeeone_ofc== _0x4c8e[225]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[226]));ini_mark= `${_0x4c8e[102]}`;tqto= `${_0x4c8e[227]}${ini_mark[_0x4c8e[80]](_0x4c8e[198])[0]}${_0x4c8e[3]}`;alpha[_0x4c8e[14]](from,tqto,text,{thumbnail:fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),caption:_0x4c8e[199],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x4c8e[199],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya}${_0x4c8e[3]}`,"\x62\x6F\x64\x79":`${_0x4c8e[3]}${baper}${_0x4c8e[3]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x4c8e[149],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x4c8e[3]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4c8e[194]}`}},quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[ini_mark]}})};if(budy=== `${_0x4c8e[228]}`){reply(`${_0x4c8e[3]}${petik}${_0x4c8e[229]}${titik}${_0x4c8e[3]}${petik}${_0x4c8e[3]}`);fetch(`${_0x4c8e[236]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[237]}`){reply(`${_0x4c8e[3]}${petik}${_0x4c8e[229]}${titik}${_0x4c8e[3]}${petik}${_0x4c8e[3]}`);fetch(`${_0x4c8e[238]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[239]}`){reply(`${_0x4c8e[3]}${petik}${_0x4c8e[229]}${titik}${_0x4c8e[3]}${petik}${_0x4c8e[3]}`);fetch(`${_0x4c8e[240]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[241]}`){reply(`${_0x4c8e[3]}${petik}${_0x4c8e[229]}${titik}${_0x4c8e[3]}${petik}${_0x4c8e[3]}`);fetch(`${_0x4c8e[242]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[243]}`){reply(`${_0x4c8e[3]}${petik}${_0x4c8e[229]}${titik}${_0x4c8e[3]}${petik}${_0x4c8e[3]}`);fetch(`${_0x4c8e[244]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[245]}`){reply(`${_0x4c8e[3]}${petik}${_0x4c8e[229]}${titik}${_0x4c8e[3]}${petik}${_0x4c8e[3]}`);fetch(`${_0x4c8e[246]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[247]}`){reply(`${_0x4c8e[3]}${petik}${_0x4c8e[229]}${titik}${_0x4c8e[3]}${petik}${_0x4c8e[3]}`);fetch(`${_0x4c8e[248]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[249]}`){reply(`${_0x4c8e[3]}${petik}${_0x4c8e[229]}${titik}${_0x4c8e[3]}${petik}${_0x4c8e[3]}`);fetch(`${_0x4c8e[250]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[251]}`){reply(`${_0x4c8e[3]}${petik}${_0x4c8e[229]}${titik}${_0x4c8e[3]}${petik}${_0x4c8e[3]}`);fetch(`${_0x4c8e[252]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[253]}`){reply(`${_0x4c8e[3]}${petik}${_0x4c8e[229]}${titik}${_0x4c8e[3]}${petik}${_0x4c8e[3]}`);fetch(`${_0x4c8e[254]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[255]}`){reply(`${_0x4c8e[3]}${petik}${_0x4c8e[229]}${titik}${_0x4c8e[3]}${petik}${_0x4c8e[3]}`);fetch(`${_0x4c8e[256]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[257]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[258]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[259]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[260]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[261]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[262]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[263]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[264]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[265]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[266]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[267]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[268]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[269]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[270]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[271]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[272]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[273]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[274]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[275]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[276]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[277]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[278]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[279]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[280]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[281]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[282]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[283]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[284]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[285]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[286]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[287]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[288]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[289]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[290]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[291]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[292]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[293]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[294]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[295]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[296]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[297]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[298]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[299]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[300]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[301]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[302]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[303]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[304]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[305]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[306]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,image,{thumbnail:Buffer[_0x4c8e[232]](0),quoted:ftoko,caption:`${_0x4c8e[3]}${petik}${_0x4c8e[233]}${petik}${_0x4c8e[3]}${n}${_0x4c8e[3]}${n}${_0x4c8e[234]}`})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[307]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[308]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[309]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[310]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[311]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[312]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[313]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[314]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[315]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[316]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[317]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[318]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[319]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[320]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[321]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[322]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[323]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[324]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[325]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[326]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[327]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[328]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[329]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[330]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[331]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[332]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[333]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[334]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[335]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[336]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[337]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[338]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[339]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[340]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[341]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[342]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[343]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[344]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[345]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[346]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[347]}`){reply(mess[_0x4c8e[72]]);fetch(`${_0x4c8e[348]}`)[_0x4c8e[137]]((_0x57a6x1c)=>{return _0x57a6x1c[_0x4c8e[235]]()})[_0x4c8e[137]]((_0x57a6x21)=>{let _0x57a6x22=_0x57a6x21[_0x4c8e[80]](_0x4c8e[113]);let _0x57a6x23=_0x57a6x22[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* _0x57a6x22[_0x4c8e[43]])];imageToBase64(_0x57a6x23)[_0x4c8e[137]]((_0x57a6x24)=>{media= Buffer[_0x4c8e[231]](_0x57a6x24,_0x4c8e[230]);alpha[_0x4c8e[14]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0x4c8e[136]]((_0x57a6x7)=>{console[_0x4c8e[22]](_0x57a6x7)})})};if(budy=== `${_0x4c8e[349]}`){reply(mess[_0x4c8e[72]]);var ini_chika=[_0x4c8e[350],_0x4c8e[351],_0x4c8e[352],_0x4c8e[353],_0x4c8e[354],_0x4c8e[355],_0x4c8e[356],_0x4c8e[357],_0x4c8e[358],_0x4c8e[359],_0x4c8e[360],_0x4c8e[361],_0x4c8e[362],_0x4c8e[363],_0x4c8e[364],_0x4c8e[365],_0x4c8e[366],_0x4c8e[367],_0x4c8e[368],_0x4c8e[369],_0x4c8e[370],_0x4c8e[371],_0x4c8e[372],_0x4c8e[373],_0x4c8e[374]];var random_chika=ini_chika[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (ini_chika[_0x4c8e[43]]))];let buff= await getBuffer(random_chika);alpha[_0x4c8e[14]](from,buff,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[378]}`){reply(mess[_0x4c8e[72]]);var delvira=[_0x4c8e[379],_0x4c8e[380],_0x4c8e[381],_0x4c8e[382],_0x4c8e[383],_0x4c8e[384],_0x4c8e[385],_0x4c8e[386],_0x4c8e[387],_0x4c8e[388],_0x4c8e[389],_0x4c8e[390],_0x4c8e[391],_0x4c8e[392],_0x4c8e[393],_0x4c8e[394],_0x4c8e[395],_0x4c8e[396],_0x4c8e[397],_0x4c8e[398]];var random_delvira=delvira[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (delvira[_0x4c8e[43]]))];let ini_delvira= await getBuffer(random_delvira);alpha[_0x4c8e[14]](from,ini_delvira,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[399]}`){reply(mess[_0x4c8e[72]]);var ayu=[_0x4c8e[400],_0x4c8e[401],_0x4c8e[402],_0x4c8e[403],_0x4c8e[404],_0x4c8e[405],_0x4c8e[406],_0x4c8e[407],_0x4c8e[408],_0x4c8e[409],_0x4c8e[410],_0x4c8e[411],_0x4c8e[412],_0x4c8e[413],_0x4c8e[414],_0x4c8e[415],_0x4c8e[416],_0x4c8e[417],_0x4c8e[418],_0x4c8e[419]];var random_ayu=ayu[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (ayu[_0x4c8e[43]]))];let ini= await getBuffer(random_ayu);alpha[_0x4c8e[14]](from,ini_ayu,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[420]}`){reply(mess[_0x4c8e[72]]);var bunga=[_0x4c8e[421],_0x4c8e[422],_0x4c8e[423],_0x4c8e[424],_0x4c8e[425],_0x4c8e[426],_0x4c8e[427],_0x4c8e[428],_0x4c8e[429],_0x4c8e[430],_0x4c8e[431],_0x4c8e[432],_0x4c8e[433],_0x4c8e[434],_0x4c8e[435],_0x4c8e[436],_0x4c8e[437],_0x4c8e[438],_0x4c8e[439],_0x4c8e[440],_0x4c8e[441],_0x4c8e[442],_0x4c8e[443]];var random_bunga=bunga[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (bunga[_0x4c8e[43]]))];let ini_bunga= await getBuffer(random_bunga);alpha[_0x4c8e[14]](from,ini_bunga,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[444]}`){reply(mess[_0x4c8e[72]]);var aura=[_0x4c8e[445],_0x4c8e[446],_0x4c8e[447],_0x4c8e[448],_0x4c8e[449],_0x4c8e[450],_0x4c8e[451],_0x4c8e[452],_0x4c8e[453],_0x4c8e[454],_0x4c8e[455],_0x4c8e[456],_0x4c8e[457],_0x4c8e[458],_0x4c8e[459],_0x4c8e[460],_0x4c8e[461],_0x4c8e[462],_0x4c8e[463],_0x4c8e[464],_0x4c8e[465]];var random_aura=aura[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (aura[_0x4c8e[43]]))];let ini_aura= await getBuffer(random_aura);alpha[_0x4c8e[14]](from,ini_aura,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[466]}`){reply(mess[_0x4c8e[72]]);var nisa=[_0x4c8e[467],_0x4c8e[468],_0x4c8e[469],_0x4c8e[470],_0x4c8e[471],_0x4c8e[472],_0x4c8e[473],_0x4c8e[474],_0x4c8e[475],_0x4c8e[476],_0x4c8e[477],_0x4c8e[478],_0x4c8e[479],_0x4c8e[480],_0x4c8e[481],_0x4c8e[482],_0x4c8e[483],_0x4c8e[484],_0x4c8e[485],_0x4c8e[486],_0x4c8e[487],_0x4c8e[488],_0x4c8e[489],_0x4c8e[490]];var random_nisa=nisa[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (nisa[_0x4c8e[43]]))];let ini_nisa= await getBuffer(random_nisa);alpha[_0x4c8e[14]](from,ini_nisa,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[491]}`){reply(mess[_0x4c8e[72]]);var ziva=[_0x4c8e[492],_0x4c8e[493],_0x4c8e[494],_0x4c8e[495],_0x4c8e[496],_0x4c8e[497],_0x4c8e[498],_0x4c8e[499],_0x4c8e[500],_0x4c8e[501],_0x4c8e[502],_0x4c8e[503],_0x4c8e[504],_0x4c8e[505],_0x4c8e[506],_0x4c8e[507],_0x4c8e[508],_0x4c8e[509],_0x4c8e[510],_0x4c8e[511],_0x4c8e[512],_0x4c8e[513],_0x4c8e[514],_0x4c8e[515],_0x4c8e[516],_0x4c8e[517],_0x4c8e[518],_0x4c8e[519],_0x4c8e[520],_0x4c8e[521],_0x4c8e[522],_0x4c8e[523],_0x4c8e[524],_0x4c8e[525],_0x4c8e[526],_0x4c8e[527],_0x4c8e[528]];var random_ziva=ziva[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (ziva[_0x4c8e[43]]))];let ini_ziva= await getBuffer(random_ziva);alpha[_0x4c8e[14]](from,ini_ziva,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[529]}`){reply(mess[_0x4c8e[72]]);var yana=[_0x4c8e[530],_0x4c8e[531],_0x4c8e[532],_0x4c8e[533],_0x4c8e[534],_0x4c8e[535],_0x4c8e[536],_0x4c8e[537],_0x4c8e[538],_0x4c8e[539],_0x4c8e[540],_0x4c8e[541],_0x4c8e[542],_0x4c8e[543],_0x4c8e[544],_0x4c8e[545],_0x4c8e[546],_0x4c8e[547],_0x4c8e[548],_0x4c8e[549],_0x4c8e[550],_0x4c8e[551],_0x4c8e[552],_0x4c8e[553]];var random_yana=yana[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (yana[_0x4c8e[43]]))];let ini_yana= await getBuffer(random_yana);alpha[_0x4c8e[14]](from,ini_yana,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[554]}`){reply(mess[_0x4c8e[72]]);var viona=[_0x4c8e[555],_0x4c8e[556],_0x4c8e[557],_0x4c8e[558],_0x4c8e[559],_0x4c8e[560],_0x4c8e[561],_0x4c8e[562],_0x4c8e[563],_0x4c8e[564],_0x4c8e[565],_0x4c8e[566],_0x4c8e[567],_0x4c8e[568],_0x4c8e[569],_0x4c8e[570],_0x4c8e[571],_0x4c8e[572],_0x4c8e[573],_0x4c8e[574],_0x4c8e[575],_0x4c8e[576],_0x4c8e[577],_0x4c8e[578]];var random_viona=viona[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (viona[_0x4c8e[43]]))];let ini_viona= await getBuffer(random_viona);alpha[_0x4c8e[14]](from,ini_viona,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[579]}`){reply(mess[_0x4c8e[72]]);var syania=[_0x4c8e[580],_0x4c8e[581],_0x4c8e[582],_0x4c8e[583],_0x4c8e[584],_0x4c8e[585],_0x4c8e[586],_0x4c8e[587],_0x4c8e[588],_0x4c8e[589],_0x4c8e[590],_0x4c8e[591],_0x4c8e[592],_0x4c8e[593],_0x4c8e[594],_0x4c8e[595],_0x4c8e[596],_0x4c8e[597],_0x4c8e[598],_0x4c8e[599],_0x4c8e[600],_0x4c8e[601],_0x4c8e[602],_0x4c8e[603],_0x4c8e[604],_0x4c8e[605],_0x4c8e[606],_0x4c8e[607]];var random_syania=syania[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (syania[_0x4c8e[43]]))];let ini_syania= await getBuffer(random_syania);alpha[_0x4c8e[14]](from,ini_syania,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[608]}`){reply(mess[_0x4c8e[72]]);var riri=[_0x4c8e[609],_0x4c8e[610],_0x4c8e[611],_0x4c8e[612],_0x4c8e[613],_0x4c8e[614],_0x4c8e[615],_0x4c8e[616],_0x4c8e[617],_0x4c8e[618],_0x4c8e[619],_0x4c8e[620],_0x4c8e[621],_0x4c8e[622],_0x4c8e[623],_0x4c8e[624],_0x4c8e[625],_0x4c8e[626]];var random_riri=riri[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (riri[_0x4c8e[43]]))];let ini_riri= await getBuffer(random_riri);alpha[_0x4c8e[14]](from,ini_riri,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[627]}`){reply(mess[_0x4c8e[72]]);var syifa=[_0x4c8e[628],_0x4c8e[629],_0x4c8e[630],_0x4c8e[631],_0x4c8e[632],_0x4c8e[633],_0x4c8e[634],_0x4c8e[635],_0x4c8e[636],_0x4c8e[637],_0x4c8e[638],_0x4c8e[639],_0x4c8e[640],_0x4c8e[641],_0x4c8e[642],_0x4c8e[643],_0x4c8e[644],_0x4c8e[645],_0x4c8e[646],_0x4c8e[647],_0x4c8e[648],_0x4c8e[649],_0x4c8e[650],_0x4c8e[651],_0x4c8e[652],_0x4c8e[653]];var random_syifa=syifa[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (syifa[_0x4c8e[43]]))];let ini_syifa= await getBuffer(random_syifa);alpha[_0x4c8e[14]](from,ini_syifa,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[654]}`){reply(mess[_0x4c8e[72]]);var mama_gina=[_0x4c8e[655],_0x4c8e[656],_0x4c8e[657],_0x4c8e[658],_0x4c8e[659],_0x4c8e[660],_0x4c8e[661],_0x4c8e[662],_0x4c8e[663],_0x4c8e[664],_0x4c8e[665],_0x4c8e[666],_0x4c8e[667],_0x4c8e[668],_0x4c8e[669],_0x4c8e[670],_0x4c8e[671],_0x4c8e[672],_0x4c8e[673],_0x4c8e[674],_0x4c8e[675],_0x4c8e[676]];var random_mama_gina=mama_gina[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (mama_gina[_0x4c8e[43]]))];let ini_mama_gina= await getBuffer(random_mama_gina);alpha[_0x4c8e[14]](from,ini_mama_gina,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[677]}`){reply(mess[_0x4c8e[72]]);var alcakenya=[_0x4c8e[678],_0x4c8e[679],_0x4c8e[680],_0x4c8e[681],_0x4c8e[682],_0x4c8e[683],_0x4c8e[684],_0x4c8e[685],_0x4c8e[686],_0x4c8e[687],_0x4c8e[688],_0x4c8e[689],_0x4c8e[690],_0x4c8e[691],_0x4c8e[692],_0x4c8e[693],_0x4c8e[694],_0x4c8e[695],_0x4c8e[696],_0x4c8e[697],_0x4c8e[698]];var random_alcakenya=alcakenya[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (alcakenya[_0x4c8e[43]]))];let ini_alcakenya= await getBuffer(random_alcakenya);alpha[_0x4c8e[14]](from,ini_alcakenya,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[699]}`){reply(mess[_0x4c8e[72]]);var mangayutri=[_0x4c8e[700],_0x4c8e[701],_0x4c8e[702],_0x4c8e[703],_0x4c8e[704],_0x4c8e[705],_0x4c8e[706],_0x4c8e[707],_0x4c8e[708],_0x4c8e[709],_0x4c8e[710],_0x4c8e[711],_0x4c8e[712],_0x4c8e[713],_0x4c8e[714],_0x4c8e[715],_0x4c8e[716],_0x4c8e[717],_0x4c8e[718],_0x4c8e[719],_0x4c8e[720],_0x4c8e[721],_0x4c8e[722],_0x4c8e[723],_0x4c8e[724],_0x4c8e[725],_0x4c8e[726]];var random_mangayutri=mangayutri[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (mangayutri[_0x4c8e[43]]))];let ini_mangayutri= await getBuffer(random_mangayutri);alpha[_0x4c8e[14]](from,ini_mangayutri,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[727]}`){reply(mess[_0x4c8e[72]]);var rikagusriani=[_0x4c8e[728],_0x4c8e[729],_0x4c8e[730],_0x4c8e[731],_0x4c8e[732],_0x4c8e[733],_0x4c8e[734],_0x4c8e[735],_0x4c8e[736],_0x4c8e[737],_0x4c8e[738],_0x4c8e[739],_0x4c8e[740],_0x4c8e[741],_0x4c8e[742],_0x4c8e[743],_0x4c8e[744],_0x4c8e[745],_0x4c8e[746],_0x4c8e[747]];var random_rikagusriani=rikagusriani[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (rikagusriani[_0x4c8e[43]]))];let ini_rikagusriani= await getBuffer(random_rikagusriani);alpha[_0x4c8e[14]](from,ini_rikagusriani,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[748]}`){reply(mess[_0x4c8e[72]]);var asupannih=[_0x4c8e[749],_0x4c8e[750],_0x4c8e[751],_0x4c8e[752],_0x4c8e[753],_0x4c8e[754],_0x4c8e[755],_0x4c8e[756],_0x4c8e[757],_0x4c8e[758],_0x4c8e[759],_0x4c8e[760],_0x4c8e[761],_0x4c8e[762],_0x4c8e[763],_0x4c8e[764],_0x4c8e[765],_0x4c8e[766],_0x4c8e[767],_0x4c8e[768],_0x4c8e[769],_0x4c8e[770],_0x4c8e[771],_0x4c8e[772],_0x4c8e[773],_0x4c8e[774],_0x4c8e[775],_0x4c8e[771],_0x4c8e[772],_0x4c8e[773]];var random_asupannih=asupannih[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (asupannih[_0x4c8e[43]]))];let ini_asupannih= await getBuffer(random_asupannih);alpha[_0x4c8e[14]](from,ini_asupannih,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[776]}`){reply(mess[_0x4c8e[72]]);var bocil=[_0x4c8e[777],_0x4c8e[778],_0x4c8e[779],_0x4c8e[780],_0x4c8e[781],_0x4c8e[782],_0x4c8e[783],_0x4c8e[784],_0x4c8e[785],_0x4c8e[786],_0x4c8e[787],_0x4c8e[788],_0x4c8e[789],_0x4c8e[790],_0x4c8e[791],_0x4c8e[792],_0x4c8e[793],_0x4c8e[794],_0x4c8e[795],_0x4c8e[796],_0x4c8e[797],_0x4c8e[798],_0x4c8e[799],_0x4c8e[800],_0x4c8e[801],_0x4c8e[802],_0x4c8e[803],_0x4c8e[804]];var random_bocil=bocil[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (bocil[_0x4c8e[43]]))];let ini_bocil= await getBuffer(random_bocil);alpha[_0x4c8e[14]](from,ini_bocil,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[805]}`){reply(mess[_0x4c8e[72]]);var geayubi=[_0x4c8e[806],_0x4c8e[807],_0x4c8e[808],_0x4c8e[809],_0x4c8e[810],_0x4c8e[811],_0x4c8e[812],_0x4c8e[813],_0x4c8e[814],_0x4c8e[815],_0x4c8e[816],_0x4c8e[817],_0x4c8e[818],_0x4c8e[819],_0x4c8e[820],_0x4c8e[821],_0x4c8e[822],_0x4c8e[823],_0x4c8e[824],_0x4c8e[825],_0x4c8e[826],_0x4c8e[827]];var random_geayubi=geayubi[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (geayubi[_0x4c8e[43]]))];let ini_geayubi= await getBuffer(random_geayubi);alpha[_0x4c8e[14]](from,ini_geayubi,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[828]}`){reply(mess[_0x4c8e[72]]);var santuy=[_0x4c8e[829],_0x4c8e[830],_0x4c8e[831],_0x4c8e[832],_0x4c8e[833],_0x4c8e[834],_0x4c8e[835],_0x4c8e[836],_0x4c8e[837],_0x4c8e[838],_0x4c8e[839],_0x4c8e[840],_0x4c8e[841],_0x4c8e[842],_0x4c8e[843],_0x4c8e[844],_0x4c8e[845],_0x4c8e[846],_0x4c8e[847],_0x4c8e[848],_0x4c8e[849],_0x4c8e[850],_0x4c8e[851],_0x4c8e[852],_0x4c8e[853],_0x4c8e[854],_0x4c8e[855],_0x4c8e[856]];var random_santuy=santuy[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (santuy[_0x4c8e[43]]))];let ini_santuy= await getBuffer(random_santuy);alpha[_0x4c8e[14]](from,ini_santuy,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};if(budy=== `${_0x4c8e[857]}`){reply(mess[_0x4c8e[72]]);var ukhty=[_0x4c8e[858],_0x4c8e[859],_0x4c8e[860],_0x4c8e[861],_0x4c8e[862],_0x4c8e[863],_0x4c8e[864],_0x4c8e[865],_0x4c8e[866],_0x4c8e[867],_0x4c8e[868],_0x4c8e[869],_0x4c8e[870],_0x4c8e[871],_0x4c8e[872],_0x4c8e[873],_0x4c8e[874],_0x4c8e[875],_0x4c8e[876],_0x4c8e[877],_0x4c8e[878],_0x4c8e[879],_0x4c8e[880],_0x4c8e[881],_0x4c8e[882],_0x4c8e[883],_0x4c8e[884],_0x4c8e[885],_0x4c8e[886],_0x4c8e[887]];var random_ukhty=ukhty[Math[_0x4c8e[189]](Math[_0x4c8e[188]]()* (ukhty[_0x4c8e[43]]))];let ini_ukhty= await getBuffer(random_ukhty);alpha[_0x4c8e[14]](from,ini_ukhty,video,{mimetype:_0x4c8e[375],quoted:mek,caption:`${_0x4c8e[376]}${n}${_0x4c8e[3]}${n}${_0x4c8e[377]}`})};subscribezeeoneofc= (type== _0x4c8e[0])?mek[_0x4c8e[2]][_0x4c8e[0]][_0x4c8e[888]]:_0x4c8e[3];let R=fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`);let Y=fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`);let N=fs[_0x4c8e[9]](`${_0x4c8e[8]}${thumbnail}${_0x4c8e[3]}`);if(subscribezeeoneofc== _0x4c8e[889]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[890]));let pip=alpha[_0x4c8e[932]](from,{"\x6C\x69\x73\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${hahh}${_0x4c8e[88]}${pushname}${_0x4c8e[3]}`,"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":`${_0x4c8e[891]}`,"\x62\x75\x74\x74\x6F\x6E\x54\x65\x78\x74":_0x4c8e[892],"\x66\x6F\x6F\x74\x65\x72\x54\x65\x78\x74":`${_0x4c8e[3]}${creator}${_0x4c8e[3]}`,"\x6C\x69\x73\x74\x54\x79\x70\x65":_0x4c8e[893],"\x73\x65\x63\x74\x69\x6F\x6E\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[894],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[206],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[895],"\x72\x6F\x77\x49\x64":_0x4c8e[206]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[896],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[207],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[897],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[899],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[204],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[900],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[901],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[208],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[902],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[903],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[209],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[904],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[905],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[210],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[906],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[907],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[211],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[908],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[909],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[212],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[910],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[911],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[213],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[912],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[913],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[214],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[914],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[915],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[215],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[916],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[917],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[216],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[918],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[919],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[217],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[920],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[921],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[922],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[923],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[924],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[205],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[925],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[926],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[218],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[927],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[928],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[219],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[929],"\x72\x6F\x77\x49\x64":_0x4c8e[219]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[930],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[220],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[931],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]}]}},{});alpha[_0x4c8e[933]](pip,{waitForAck:true})};if(subscribezeeoneofc== _0x4c8e[934]){console[_0x4c8e[22]](color(time,_0x4c8e[15]),color(_0x4c8e[935]));let pipi=alpha[_0x4c8e[932]](from,{"\x6C\x69\x73\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":`${_0x4c8e[3]}${ucapannya}${_0x4c8e[3]}`,"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":`${_0x4c8e[936]}`,"\x62\x75\x74\x74\x6F\x6E\x54\x65\x78\x74":_0x4c8e[892],"\x66\x6F\x6F\x74\x65\x72\x54\x65\x78\x74":`${_0x4c8e[3]}${creator}${_0x4c8e[3]}`,"\x6C\x69\x73\x74\x54\x79\x70\x65":_0x4c8e[893],"\x73\x65\x63\x74\x69\x6F\x6E\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[937],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[221],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[938],"\x72\x6F\x77\x49\x64":_0x4c8e[206]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[939],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[222],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[940],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]},{"\x74\x69\x74\x6C\x65":_0x4c8e[941],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x4c8e[225],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x4c8e[940],"\x72\x6F\x77\x49\x64":_0x4c8e[898]}]}]}},{});alpha[_0x4c8e[933]](pipi,{waitForAck:true})};switch(isBtMsg){case _0x4c8e[943]:reply(_0x4c8e[942]);break}
switch (command) {
	case prefix+'menucadangan': // jika hp lu gk kuat sama button tinggal ganti ke menu ini menjadi case menu 👌
ini_thumb = fs.readFileSync(`image/${thumbnail}`) //hilangin aja thumbnail nya klo berat
	alpha.sendMessage(from,ini_thumb, image,{
        thumbnail: fs.readFileSync(`image/${thumbnail}`),
        caption: helpmenu(prefix, wita, wit, ucapannya, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat),
        "contextInfo": {
            text: helpmenu(prefix, wita, wit, ucapannya, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat),
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true
            },
			quoted: ftoko
			})
			case prefix+'menu':
	let content = fs.readFileSync(`image/${thumbnail}`)
const media = await alpha.prepareMessage(from, content, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let bacotlu = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media

const buttons = [
  {buttonId: 'menu', buttonText: {displayText: '⚤︎MENU⚤︎'}, type: 1},
  {buttonId: 'ownerku', buttonText: {displayText: '♕︎OWNER♕︎'}, type: 1},
  {buttonId: 'grup bot', buttonText: {displayText: '✌︎GROUP SUPPORT✌︎'}, type: 1}
]

const btn = {
    contentText: `Halo kak @${sender.split('@')[0]} saya adalah bot whatsapp yang siap membantu kamu. Ingat don't spam!!!`,
    footerText: `${creator}`,
    buttons: buttons,
    headerType: 4,
    imageMessage: bacotlu.message.imageMessage
}

alpha.sendMessage(from,  btn, MessageType.buttonsMessage,{
        caption: '𝐵𝑜𝑡𝑤𝑎 ©𝑆𝑒𝑐404 𝑇𝑒𝑎𝑚',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender],
            },
			quoted: fkontak,sendEphemeral: true 
			})
break
   case prefix+'menu2': 
                let pi = alpha.prepareMessageFromContent(from, {
           "listMessage": {
						"title":  `${ucapannya}`,
						"description": `𝐿𝑖𝑠𝑡 𝑀𝑒𝑛𝑢 𝑆𝑒𝑐404 𝐵𝑜𝑡 𝐴𝑑𝑎 𝐷𝑖𝑠𝑖𝑛𝑖. 𝑆𝑖𝑙𝑎ℎ𝑘𝑎𝑛 𝑃𝑖𝑙𝑖ℎ`,
						"buttonText": "𝑆𝐸𝐿𝐸𝐶𝑇 𝐻𝐸𝑅𝐸",
						"footerText": `${creator}`,
						"listType": "SINGLE_SELECT",
						"sections": [
						{
								"title": "◉ 𝐴𝑙𝑙 𝑀𝑒𝑛𝑢 𝐵𝑦 𝑆𝑒𝑐404 𝑇𝑒𝑎𝑚々",
								"rows": [
									{
										"title": "𝑨𝒍𝒍 𝑴𝒆𝒏𝒖",
										"description": "\n\n_choose this if you want to use the allmenu command_",
										"rowId": "allmenu"
									}]},
							{
								"title": "◉ Menu ke-1",
								"rows": [
									{
										"title": "downloadmenu",
										"description": "\n\n_choose this if you want to use the downloadmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-2",
								"rows": [
									{
										"title": "convertmenu",
										"description": "\n\n_choose this if you want to use the convertmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-3",
								"rows": [
									{
										"title": "funmenu",
										"description": "\n\n_choose this if you want to use the funmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-4",
								"rows": [
									{
										"title": "makermenu",
										"description": "\n\n_choose this if you want to use the makermenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-5",
								"rows": [
									{
										"title": "othermenu",
										"description": "\n\n_choose this if you want to use the othermenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-6",
								"rows": [
									{
										"title": "ownermenu",
										"description": "\n\n_choose this if you want to use the ownermenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-7",
								"rows": [
									{
										"title": "storagemenu",
										"description": "\n\n_choose this if you want to use the storagemenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-8",
								"rows": [
									{
										"title": "tagmenu",
										"description": "\n\n_choose this if you want to use the tagmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-9",
								"rows": [
									{
										"title": "upmenu",
										"description": "\n\n_choose this if you want to use the upmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-10",
								"rows": [
									{
										"title": "set sticker cmd",
										"description": "\n\n_choose this if you want to use the set stc cmd command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-11",
								"rows": [
									{
										"title": "gacha cecan",
										"description": "\n\n_choose this if you want to use the gachacecan command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-12",
								"rows": [
									{
										"title": "telegram sticker",
										"description": "\n\n_choose this if you want to use the telestc command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-13",
								"rows": [
									{
										"title": "nsfw menu",
										"description": "\n\n_choose this if you want to use the nsfwmenu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-14",
								"rows": [
									{
										"title": "asupan menu",
										"description": "\n\n_choose this if you want to use the asupan menu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Menu ke-15",
								"rows": [
									{
										"title": "image effect",
										"description": "\n\n_choose this if you want to use the image effect menu command_",
										"rowId": "0"
									}]},
							{
								"title": "◉ Source script bot",
								"rows": [
									{
										"title": "source code",
										"description": "\n\n_choose this if you want to know source code this bot_",
										"rowId": "source code"
									}]},
							{
								"title": "◉ Contribution",
								"rows": [
									{
										"title": "Big Thanks to",
										"description": "\n\n_choose this if you want to know anyone who contributed to this script_",
										"rowId": "0"
									}]}
						]
					}}, {})
 alpha.relayWAMessage(pi, {waitForAck: true})
                break
        case prefix+ 'trigger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case prefix+  'gay':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case prefix+  'glass':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case prefix+  'passed':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case prefix+  'jail':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case prefix+  'comrade':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case prefix+ 'hijau':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
		case prefix+ 'biru':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					 break 
		case prefix+ 'greyscale':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case prefix+ 'invert':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case prefix+ 'invert_greyscale':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case prefix+ 'red':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
         case prefix+ 'blurple':
         
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case prefix+ 'blurple2':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case prefix+ 'wasted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case prefix+'pelangi':
		case prefix+'rainbow':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case prefix+'sepia':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
   case prefix+'group': 
   case prefix+'gc': 
                let po = alpha.prepareMessageFromContent(from, {
					"listMessage":{
                  "title": `Hi ${pushname}`,
                  "description": "Pilih open/close",
                  "buttonText": "SELECT",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "group open",
                              "rowId": `group open`
                           },
						   {
                              "title": "group close",
                              "rowId": `group close`
                           }
                        ]
                     }]}}, {}) 
            alpha.relayWAMessage(po, {waitForAck: true})
break

            case prefix+'mystat': 
			case prefix+'mystatus':
				
                anu = process.uptime()
                teskny = `∆ *MY STATS*
*├❒ V. Whatsapp :* ${wa_version}
*├❒ RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*├❒ MCC :* ${mcc}
*├❒ MNC :* ${mnc}
*├❒ Versi OS :* ${os_version}
*├❒ Merk HP :* ${device_manufacturer}
*├❒ Versi HP :* ${device_model}
*├❒ Group Chat :* ${giid.length}
*├❒ Personal Chat :* ${totalchat.length - giid.length}
*├❒ Total Chat :* ${totalchat.length}
*├❒ Speed :* ${latensii.toFixed(4)} Second
*└❒ Runtime :* ${kyun(anu)}`
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case prefix+ 'getbio':
				if (!isGroup) return reply('```ONLY GROUP```')
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentionedd}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply('```ONLY GROUP```')
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		case prefix+'sc':
		case prefix+ 'source':
		case prefix+ 'sourcecode':
			        source =`Source Script Bot : https://github.com/Sec404team/selfsec404`
					alpha.sendMessage(from, source, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
					break
		
		    case prefix+'caripesan':
		    case prefix+'searchmessage':
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(mess.wait)
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await alpha.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
		                break
case prefix+'setname':
					if (!isGroup) return reply('```ONLY GROUP```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup', text, { quoted: fdoc })
					break 
case prefix+'setdesc':
					if (!isGroup) return reply('```ONLY GROUP```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
					break   
case prefix+'spam':
if (!isGroup) return reply('```ONLY GROUP```')
				if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = args.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				break 
case prefix+'readall':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					await alpha.sendMessage(from, rdl, MessageType.text, {quoted: fvideo})
					console.log(chats.length)
					break
case prefix+'listpc':
					  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Nama : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case prefix+'listgroup':
				  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
				  ingfoo = await getGroup(totalchat)
				  teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
				   for (let i = 0; i < ingfoo.length; i++){
				   teks1 += `• Nama grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
				   }
				   reply(teks1)
				   break 
case prefix+'bcsticker':
case prefix+'bcstik':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case prefix+'bcvideo':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
	case prefix+'bcaudio':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
case prefix+'bcgif':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
         case prefix+ 'owner':
         case prefix+'creator':  
         members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
			         ini_ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner 𝑆𝑒𝑐404 𝐵𝑜𝑡々',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
					alpha.sendMessage(from,'Nih Kak Owner Ku',text,{quoted: hehe})
					break
                case prefix+'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
			
                
             case 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${thumbnail}`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)
                 
		    break
		    case prefix+ 'on':
		            if (!mek.key.fromMe) return 
		            offline = false
		            fakeitem(' ```ANDA TELAH ONLINE``` ')
		            break       
		    case prefix+ 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case prefix+ 'off':
		            if (!mek.key.fromMe) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(' ```ANDA TELAH OFFLINE``` ')
		            break   
		    case prefix+ 'get':
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
		    case prefix+ 'kontag':
		
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            break
		    case prefix+ 'sticktag':
		            if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            break
		    case prefix+ 'totag':
		            if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'fitnah':
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case prefix+ 'settarget':
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case prefix+ 'fitnahpc':
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teksny`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var splitt = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: splitt[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${splitt[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case prefix+ 'tomp3':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'fast':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'slow':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'reverse':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'anime':
		            fakegroup('```BENTAR```')
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : ZEEONE OFC'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            break
		    case prefix+ 'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break    
		    case prefix+ 'take':
		    case prefix+ 'colong':
		    		if (!isQuotedSticker) return reply('```Reply stc nya```')
		            encmedia_ = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media_ = await alpha.downloadAndSaveMediaMessage(encmedia_)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `SUBSCRIBE`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media_ , alpha, mek, from)
					break
			case prefix+ 'stikerwm':
			case prefix+ 'stickerwm':
		    case prefix+ 'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
		    case prefix+ 'upswteks':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case prefix+ 'upswimage':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case prefix+ 'upswvideo':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case prefix+ 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
		    case prefix+ 'public':
		              if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === false) return
		          	banChats = false
		          	fakeitem(`「 *PUBLIC-MODE* 」`)
		          	break
			case prefix+ 'self':
			          if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === true) return
		          	banChats = true
		          	fakeitem(`「 *SELF-MODE* 」`)
		          	break
		 	case prefix+ 'hidetag':
		     case prefix+ '_`':
		     case prefix+ '.':
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} }  } })
					break
			case prefix+ 'play':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
		        case prefix+ 'video':
		            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
		            var srch = args.join('')
		            aramas = await yts(srch);
		            aramat = aramas.all 
		            var mulaikah = aramat[0].url                            
		                  try {
		                    ytv(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break      
		   /*case prefix+ 'sticker': 
		    case prefix+ 'stiker':
		    case prefix+ 'sg':
		    case prefix+ 's':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            const encmedia__ = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            const media__ = await alpha.downloadAndSaveMediaMessage(encmedia__)
		                ran = '666.webp'
		                await ffmpeg(`./${media__}`)
		                .input(media)
		                .on('start', function (cmd) {
		                     console.log(`Started : ${cmd}`)
		                })
		                .on('error', function (err) {
		                 console.log(`Error : ${err}`)
		                fs.unlinkSync(media__)
		                reply('error')
		                })
		                .on('end', function () {
		                console.log('Finish')
		                alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
		                 fs.unlinkSync(media__)
		                fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		                const encmedia__ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		                const media__ = await alpha.downloadAndSaveMediaMessage(encmedia__)
		            ran = '999.webp'
		            reply(mess.wait)
		            await ffmpeg(`./${media__}`)
		            .inputFormat(media__.split('.')[1])
		            .on('start', function (cmd) {
		            console.log(`Started : ${cmd}`)
		            })
		            .on('error', function (err) {
		            console.log(`Error : ${err}`)
		            fs.unlinkSync(media__)
		            tipe = media__.endsWith('.mp4') ? 'video' : 'gif'
		            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
		            })
		            .on('end', function () {
		            console.log('Finish')
		            alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
		            fs.unlinkSync(media__)
		            fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		            } else {
		                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
		            }
		            break*/
                    case prefix+ 's':
		            var a = `SUBSCRIBE`
		            var b = `ZEEONE OFC`
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            var a = `SUBSCRIBE`
		            var b = `HR STUDIO404`
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
break       
		    case prefix+ 'toimg':
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(mess.wait)
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await alpha.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```Nih kak, jgn lupa sub YT : ZEEONE OFC```')
					fs.unlinkSync(ran)
					})
					break
			case prefix+ 'ytsearch':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Title: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
		            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break
			case prefix+ 'setreply':
			case prefix+ 'setfake':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case prefix+ 'setprefix':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					prefix = q
					fakeitem(`Succes Mengganti Prefix : ${q}`)
					break
			case prefix+ 'set_stc_menu':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_menu = q
					fakeitem(`Succes Mengganti stc cmd *MENU* : ${q}`)
					break
			case prefix+ 'set_stc_ping':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_ping = q
					fakeitem(`Succes Mengganti stc cmd *PING* : ${q}`)
					break
			case prefix+ 'set_stc_music':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_play_music = q
					fakeitem(`Succes Mengganti stc cmd *PlAY MUSIC* : ${q}`)
					break
			case prefix+ 'set_stc_gclose':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_close = q
					fakeitem(`Succes Mengganti stc cmd *GROUP CLOSE* : ${q}`)
					break
			case prefix+ 'set_stc_gopen':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_open = q
					fakeitem(`Succes Mengganti stc cmd *GROUP OPEN* : ${q}`)
					break
			case prefix+ 'set_stc_itos':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_image_to_sticker = q
					fakeitem(`Succes Mengganti stc cmd *IMAGE TO. STICKER* : ${q}`)
					break
			case prefix+ 'set_stc_to_image':
			case prefix+ 'set_stc_toimg':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_to_image = q
					fakeitem(`Succes Mengganti stc cmd *STICKER TO IMAGE* : ${q}`)
					break
			case prefix+ 'set_stc_self':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_self = q
					fakeitem(`Succes Mengganti stc cmd *SELF* : ${q}`)
					break
			case prefix+ 'set_stc_public':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_public = q
					fakeitem(`Succes Mengganti stc cmd *PUBLIC* : ${q}`)
					break
			case prefix+ 'setfakeimg':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case prefix+ 'setthumb':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case prefix+ 'ytmp4':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks2) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						ytv(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
						if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})		
						})
						} catch (err) {
					    reply(mess.error.api)
						}
						break
			case prefix+'playmp4':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
                try {
                    reply(mess.wait)
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000) return sendFileFromUrl(from, thumb, `*Data Berhasil Didapatkan!*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Filesize : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`Link : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, mek)
                        const captionisu = `*DATA BERHASIL DIDAPATKAN*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Size : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionisu, mek)
                            sendFileFromUrl(from, dl_link, '', mek)
                           })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                   console.log(color('Emror', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
			case prefix+ 'emoji':
					if (!q) return fakegroup('emojinya?')
					qes = args.join(' ')
					emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
		    		sendStickerFromUrl(from,`${teks}`)	
		    		console.log(teks)
		   			})
		    		break
			case prefix+ 'ytmp3':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
					let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						yta(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
					    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply(mess.error.api)
						}
						break
		    case prefix+ 'image':
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            reply(mess.wait)
		            gis(gimg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
		    case prefix+ 'tiktokaudio':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		ini_url = args[0]
		 		reply(mess.wait)
		            ini_urlnya = `https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${ini_url}&apikey=hardianto`
                    get_result = await fetchJson(ini_urlnya)
                    ini_txt = `*DATA BERHASIL DI TEMUKAN*\n\nAuthor : ${get_result.author}\n`
                    ini_txt += `Caption : ${get_result.caption}\n`
                    ini_txt += `Views : ${get_result.views}`
                    ini_img = await getBuffer(get_result.thumbnail)
                    await alpha.sendMessage(from, ini_img , image, { quoted: mek, caption: ini_txt })
                    ini_buffer = await getBuffer(get_result.audio)
                    alpha.sendMessage(from, ini_buffer, audio, {mimetype: 'audio/mp4', filename: `${get_result.caption}.mp3`, quoted: mek })
            		break
            case prefix+'tiktoknowm':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		alpha.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
		break
		case prefix+'tiktokwm':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${wm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		alpha.sendMessage(from,{url:`${wm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
		    case prefix+ 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
		case prefix+ 'ig':
		case prefix+ 'igdl':
		try{
		        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
		        if (!q) return fakegroup('Linknya?')
		        reply(mess.wait)
			igdl(args[0])
			.then((result) => {
		    for (Y of result.url_list )
		    sendMediaURL(from,Y,'Nih')
			})
			break
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break
	case prefix+'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    alpha.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    alpha.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
	case prefix+ 'pinterest2':
		            if (args.length < 1) return fakegroup('Masukan query!')
		            const gimgg = args.join('');
		            reply(mess.wait)
		            gis(gimgg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
	case prefix+'pinterest':
            if(!q) return reply('Masukkan query')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await alpha.sendMessage(from,di,image,{quoted: mek})
            break
    case prefix+'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
		    case prefix+ 'igstalk':
		            if (!q) return fakegroup('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })      
		            break    
		    case prefix+'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*LINK VIDEO* : ${G.Normal_video}`)
            })
            break    
case prefix+'linkwa':
case prefix+'grupwa':
case prefix+'groupwa':
case prefix+'gcwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
case prefix+'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case prefix+'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            alpha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case prefix+'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
			case prefix+ 'term':
			
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`𝑆𝑒𝑐404 𝐵𝑜𝑡々:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case prefix+ 'join':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case prefix+'twitter':
		            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
		            if (!q) return fakegroup('Linknya?')
		            ten = args[0]
		            var res = await twitterGetUrl(`${ten}`)
		            .then(g => {
		            ren = `${g.download[2].url}`
		            sendMediaURL(from,ren,'DONE')
		            })
		            break
		    case prefix+ 'runtime':
		    case prefix+ 'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case prefix+ 'speed':
			case prefix+ 'ping':
					const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
					fakegroup(pingnya)
					})
					break
               
		    case prefix+ 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owgi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break
		    case prefix+ 'tourl':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
		            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadMediaMessage(boij)
		            res = await upload(owgi)
		            reply(res)
		            } else {
		            fakegroup('kirim/reply gambar/video')
		            }
		            break
/*
]=====> NSFW MENU<=====[
*/

			case prefix+ 'awoo':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'blowjob':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'hentai': 
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'megumin':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'neko':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'trapnime':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break

/*
]=====> GROUP MENU<=====[
*/
  
			case prefix+'add':
                if (!isGroup) return reply('```Only group```')
                if (!isBotGroupAdmins) return reply('```Jadikan bot sebagai admin```')
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
                addnya = mek.message.extendedTextMessage.contextInfo.participant
		    await alpha.groupAdd(from, [addnya])
		    reply('welcome')
                break
            case prefix+'add2':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner & !dev.key.fromMe & !isGroupAdmins) return reply('Bot bukan admin')
					if (!isBotGroupAdmins) return reply(mess.badmin)
					if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						alpha.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
			case prefix+'kick':
                if (!isGroup) return reply('```Only group```')
                if (!isGroupAdmins)return reply('```Only grup admins```')
                if (!isBotGroupAdmins) return reply('```Jadikan bot sebagai admin```')
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!') 
                kicknya = mek.message.extendedTextMessage.contextInfo.participant
		    alpha.groupRemove(from, [kicknya])
		    reply('Sayonara')
			break
			case prefix+ 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih on atau off`)
              if (args[0].toLowerCase() === 'on'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Gua Kick!')
              } else if (args[0].toLowerCase() === 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih on atau off`)
				}
				break
			case prefix+'kick2':
				var mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentionedd.length > 1) {
					teks = ''
					for (let _ of mentionedd) {
					teks += `byeee🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentionedd, true)
					alpha.groupRemove(from, mentionedd)
					} else {
					reply('Tag orang yang mau di kick')
					}
                break
			case prefix+ 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case prefix+'tagall':
			        if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case prefix+'clearall':
			        if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(25)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					fakegroup('```SUKSES```')
					break
            case prefix+'leave':
                    if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```AKU PAMIT```')
					}, 0)
					break       
           case prefix+'getpp':
				if (mek.message.extendedTextMessage != undefined){
					let mentioneddd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioneddd[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seeer = `Nama : *${pushname}`
					thumbb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, thumbb ,image, anuu)
				}
				break
	case prefix+'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply('Link error')
		             }
		             break
			case prefix+ 'return':
			case prefix+ 'cek':
			case prefix+ 'me':
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: ftroli})
					break
			case prefix+'bc':
			case prefix+'broadcast':
			case prefix+'bcimage':
					if (!mek.key.fromMe) return fakegroup('```OWNER ONLY')
					if (args.length < 1) return reply('```TEXT?```')
					arg = args.join(' ');
					members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					alpha.sendMessage(_.jid, bc, image, {quoted:fkontak ,caption: `「  *BROADCAST * 」\n\n${body.slice(4)}`})
					}
					fakegroup('```SUKSESS BROADCAST```')
					} else {
					for (let _ of anu) {
						alpha.sendMessage(_.jid, `*BROADCAST* \n\n${arg}`, text, { contextInfo: { "forwardingScore":999,"isForwarded":true},sendEphemeral: true})
					 //sendMess(_.jid, `*「 𝑆𝑒𝑐404 𝐵𝑜𝑡々 Broadcast  」*\n\n${body.slice(4)}`)
					}
					fakegroup('```SUKSESS BROADCAST```')
					}
					break
			case prefix+'buggc':
			if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case prefix+'infogc':
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			case prefix+'ghstalk': 
            case prefix+'githubstalk': 
            case prefix+'ghuser':
               {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(mess.wait)
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
▷ Username : ${login}
▷ Name : ${name}
▷ Followers : ${followers}
▷ Following : ${following}
▷ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Public Gists : ${public_gists}
▷ Public Repos : ${public_repos}
▷ Twitter : ${twitter_username}
▷ Email : ${email}
▷ Location : ${location}
▷ Blog : ${blog}
▷ Link : ${html_url}
▷ Bio :\n${bio}`
                    sendFileFromUrl(from, avatar_url, txt, mek)
                      })
                .catch((err) => {
                    sendMess(owner, 'Error : ' + err)
                    console.log(color('[ EXEC ]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
              case prefix+ 'smeme': 
					reply(mess.wait) 
					arg = args.join(' ');
					top = arg.split('|')[0]
					bottom = arg.split('|')[1]
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
					ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
					sendStickerUrl(from, `${anu1}`)
					} else {
					reply('Gunakan foto/stiker!')
					}
					break
			case prefix+'demoteall':
			if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
			                alpha.groupDemoteAdmin(from, members_id)
			                break
			case prefix+'promoteall':
			if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                alpha.groupMakeAdmin(from, members_id)
                break
                
                /*
                ]----------------------------------------------------------------> API ZEKS <----------------------------------------------------------------[
                */
                
       case prefix+'tahta':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/hartatahta?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break
       case prefix+'neon2':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break                    
       case prefix+'wall':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/breakwall?apikey=${zeksApikey}&text=${F}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break   
       case prefix+'wolf':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=zeeoneofc&text2=${F}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break 
       case prefix+'tfire':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/tfire?text=${F}&apikey=${zeksApikey}`)                   
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break                
       case prefix+'ytgold':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone*`)
                   F = body.slice(8)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break
       case prefix+'ytsilver':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone*`)
                   F = body.slice(10)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break
       case prefix+'t3d':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone*`)
                   F = body.slice(5)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break
       case prefix+'logoa':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone&ofc*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break
       case prefix+'pornhub':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone&ofc*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break
       case prefix+'marvel':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone&ofc*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break
       case prefix+'leavest':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break                    
       case prefix+'phcoment':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone&ofc*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phub?apikey=${zeksApikey}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break
       case prefix+'nulis':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} zeeone*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/nulis?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nPlease Subscribe ZEEONE OFC`, quoted: mek})
                   break
        case prefix+'ttp':  
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${F}`)
                    alpha.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
         case prefix+'attp':  
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${F}`)
                    alpha.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
        
                /*
                ]----------------------------------------------------------------> API ZEKS <----------------------------------------------------------------[
                */
		case prefix+'mediafire':
				if (args.length < 1) return reply('Link Nya Mana? ')
				if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
				reply(mess.wait)
				teks = args.join(' ')
				res = await mediafireDl(teks)
				result = `*DATA DITEMUKAN*
				
				${petik}ㄙJudul :${petik} ${res[0].nama}
				${petik}ㄙ Link :${petik} ${res[0].link}
				${petik}ㄙ Size :${petik} ${res[0].size}
				
				_Mengupload file..._`
				reply(result)
				sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
				break
				
             /*
              ]----------------------------------------------------------------> STORAGE <----------------------------------------------------------------[
              */
	        case prefix+'addstik':
					if (!isQuotedSticker) return fakestatus('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case prefix+'liststik':
	      case prefix+'liststiker':
	      case prefix+'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case prefix+'addimg':
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case prefix+'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case prefix+'addvid':
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case prefix+'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case prefix+'addvn':
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case prefix+'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
			case prefix+ 'addrespon':
					if(!q) return reply(`ketik perintah addfilter filter|jawab!`)
					fltr = q.split('|')[0]
					jwb = q.split('|')[1]
					if(!jwb) return reply('Format salah!')
					for(let i of filter){
					  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
					}
					const chat = {
					Filter : fltr,
					Jawaban : jwb
					}
					filter.push(chat)
					fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listchatrespon`)
					break
					
			case prefix+'delrespon':
					for(let i=0; i<filter.length; i++){
					if(q.includes(filter[i].Filter)){
					   obj = {
					      txt: filter[i].text,
					      balesan: filter[i].balesan
					   }
					   let del = filter.indexOf(filter[i])
					   filter.splice(del, 1)
					   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					   reply(`Sukses Menghapus Respon ${q}`)
					}
					}
					break
case prefix+ 'listrespon':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `ㄙ Filter : ${i.Filter}\nㄙ Jawab : ${i.Jawaban}\n---------------------------\n`
   }
   teks += `Total : ${filter.length}`
   alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
   break
		case prefix+ 'caripesan2':
            if(!q)return reply('Masukkan pesan yg mau di cari')
            let v = await alpha.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await alpha.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
     case prefix+'searchmsg':  
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 20) return reply('Maks 20!')
             reply(mess.wait)
             cok = await nino.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             alpha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
			}
			}
             } catch (e) {
             return reply(String(e))}
             } else {
             reply(`Format salah, format yang benar : ${command} halo|10`)}
             break
    case prefix+'hash':
                try {
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await alpha.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
                reply (hash)
                } catch {
                	reply(`reply stiker dengan command ${prefix}hash`)
	}
            break
    case prefix+'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case prefix+'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
		case prefix+'jadibot':
			    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
			    jadibot(reply,alpha,from)
			    break
		case prefix+'stopjadibot':
			    if(!mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
			    stopjadibot(reply)
			    break
		case prefix+'listbot':
			    let tekss = '「 *LIST JADIBOT* 」\n'
			    for(let i of listjadibot) {
			    tekss += `*Nomor* : ${i.jid.split('@')[0]}
			*Nama* : ${i.name}
			*Device* : ${i.phone.device_manufacturer}
			*Model* : ${i.phone.device_model}\n\n`
			    }
			    reply(tekss)
		case prefix+'addcmd': 
       case prefix+'setcmd':
              if (!mek.key.fromMe) return reply('```Owner Only```')
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('Reply stickenya')
}
              break
       case prefix+'delcmd':
              if (!mek.key.fromMe) return reply('```Owner Only```')
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./lib/scommand.json', JSON.stringify(_scommand))
              reply("Done!")
              break
       case prefix+'listcmd':
              let teksnyee = `「 *LIST STICKER CMD* 」`
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\nㄙ *ID :* ${i.id}\nㄙ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
      case prefix+'delttt':
case prefix+'delttc':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case prefix+'tictactoe':
        case prefix+'ttt':
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              alpha.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

@${player1.split('@')[0]} Menantang anda untuk menjadi lawan Game🔥

@${player2.split('@')[0]} Ketik Y/N untuk menerima atau menolak permainan

NOTE : Ketik ${prefix}delttt , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {quoted:mek, contextInfo: {mentionedJid: [player2, player1]}})
              break
          case prefix+'ayuzawa':    
              reply(mess.wait)
		            fetch(`https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Ayuzawa_misaki.txt`)
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
mediaa = alpha.prepareMessage(from, media, image,{ thumbnail: Buffer.alloc(0)})
buttons = [{buttonId : 'tes', buttonText:{displayText:'bang'},type:1},{buttonId:'bang',buttonText:{displayText:'tes'},type:1}]
		           button = 
{footerText:'p',imageMessage: mediaa.message.imageMessage, contentText:'q',buttons,headerType:4}
prep = alpha.prepareMessageFromContent(from, {button},{})
alpha.relayWAMessage(prep)
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
      break
				default:
				if (budy.includes("Ownerbot",'ownerbot')){
					console.log(color('[ CMD ]', 'aqua'), 'Ownerbot', color(pushname))
 members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
			         ini_ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner 𝑆𝑒𝑐404 𝐵𝑜𝑡々',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
					alpha.sendMessage(from,'Nih Kak Owner Ku',text,{quoted: hehe})
} 
if (subscribezeeoneofc == "ownerku"){
					console.log(color('[ CMD ]', 'aqua'), 'Ownerbot', color(pushname))
 members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
			         ini_ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner 𝑆𝑒𝑐404 𝐵𝑜𝑡々',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
					alpha.sendMessage(from,'Nih Kak Owner Ku',text,{quoted: hehe})
} 
				if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./stik/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("gay",'Gay','ngewe','Ngewe')){
					alpha.updatePresence(from, Presence.composing)
					const daieeee = fs.readFileSync('./stik/13.webp');
					alpha.sendMessage(from, daieeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Yg diatas gua guy`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
		if (budy.includes("chat.whatsapp.com")){
			if(mek.key.fromMe) return reply('...')
		if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            reply(`「 *GROUP LINK DETECTOR* 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
        }}
if (budy.startsWith('x')){
try {
if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`𝑆𝑒𝑐404 𝐵𝑜𝑡々 :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[ PRIVATE ]', 'aqua'), 'SELF-MODE', color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    

