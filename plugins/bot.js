import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./mp3/Bot.opus') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.customPrefix = /^(bot|robot|p|hallo|hello|tes|Menu|bg|bang|woy)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler
