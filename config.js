const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["233267990454@s.whatsapp.net"]
global.nomerOwner = "233267990454"
global.nomorOwner = ['233267990454']
global.namaDeveloper = "𝐃𝐄𝐕 𝐂𝐇𝐀𝐑𝐈𝐒𝐌𝐀" //jangn diubh bng
global.namaOwner = "𝐃𝐄𝐕 𝐂𝐇𝐀𝐑𝐈𝐒𝐌𝐀"
global.namaBot = "RIMKUS"
global.versionBot = "3.5.0"
global.packname = "𝐃𝐄𝐕 𝐂𝐇𝐀𝐑𝐈𝐒𝐌𝐀"
global.author = "𝐃𝐄𝐕 𝐂𝐇𝐀𝐑𝐈𝐒𝐌𝐀"
global.thumb = fs.readFileSync("./charismatche.jpg")
global.ThM = 'https://i.ibb.co/v4bhkf7Z/mrfrankofc.jpg'

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})