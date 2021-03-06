let handler = async (m, { conn, args }) => {
  if (conn.user.jid === global.conn.user.jid) {
    let users = [...new Set(conns.map(v => v.user).filter(v => v).map(v => v.jid))]
    for (let id of users) conn.sendMessage(id, args.join` `, m.mtype, m.msg.contextInfo ? {
      contextInfo: m.msg.contextInfo
    } : {})
    conn.reply(m.chat, `_Berhasil mengirim broadcast ke ${user.length} nomor yang jadi bot_`, m)
  } else conn.reply(m.chat, 'This feature is for bot hosts only',  m)
}
handler.command = /^(broadcast|bc)(jadi)?bot$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

