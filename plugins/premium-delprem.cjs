let handler = async (m, {
	conn,
	text,
	usedPrefix,
	command
}) => {
	let who
	if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
	else who = m.chat
	let user = global.db.data.users[who]
	if (!who) return m.reply(`Tag/Mention!\n\nContoh:\n${usedPrefix + command} @0`)
	if (!user.premium) return m.reply("dia bukan member premium")
	user.expired = 0
	user.premium = false
	m.reply(`Berhasil menghapus user dari member premium`)
}
handler.help = ['delprem [@user]']
handler.tags = ['owner', 'premium']
handler.command = /^delprem$/i

handler.owner = true

module.exports = handler