const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
let handler = m => m
handler.before = async function(m, {
	isAdmin,
	isBotAdmin
}) {
	if (m.isBaileys && m.fromMe)
		return !0
	if (!m.isGroup) return !1
	let chat = global.db.data.chats[m.chat]
	let bot = global.db.data.settings[this.user.jid] || {}
	const isGroupLink = linkRegex.exec(m.text)

	if (chat.antiLink && isGroupLink && !isAdmin) {
		if (isBotAdmin) {
			const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
			if (m.text.includes(linkThisGroup)) throw !0
		}
		conn.sendButton(m.chat, `*Group link detect!*${isBotAdmin ? '' : '\n\n_Bot not admin_  t_t'}`, author, ['off antilink', '/disable antilink'], m)
		if (isBotAdmin && bot.restrict) {
			await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
		} else if (!bot.restrict) return m.reply('Owner disable auto kick!')
	}
	return !0
}

module.exports = handler