let handler = async (m, { conn, text, usedPrefix, command }) => {
var [a, b, c] = text.split(/[&|,]/i)
b = b.replace(" ", "")
c = c.replace(" ", "")
a = a.replace(" ", "")
conn.reply(m.chat, a+" @"+ b + " " + c, null, {mentions: [b+"@s.whatsapp.net"], isCommand: true})
}
handler.help = ['tag [command]|[nomer]|[time]']
handler.tags = ['owner']
handler.owner = true
handler.command = /^tag$/i
module.exports = handler