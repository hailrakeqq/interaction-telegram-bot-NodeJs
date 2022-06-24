const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
module.exports = stare = async (ctx) => {
    let message = ctx.message.text.split(' ')
    let targetUser = message[1];
    const requestType = "stare";
    const url = `https://api.otakugifs.xyz/gif?reaction=${requestType}&format=gif`
    const response = await fetch(url)
        .then(async response => {
            if (targetUser == ' ') ctx.reply('Ошибка, нужно тегнуть с кем вы хотите взаимодействовать')
            else {
                const result = await response.json()
                const gif = await result["url"].toString()
                const text = `${ctx.message.from.first_name} глазеет`
                ctx.replyWithAnimation(
                    gif,
                    { caption: text })
            }
        })
}