const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
module.exports = sad = async (ctx) => {
    let message = ctx.message.text.split(' ')
    const requestType = "sad";
    const url = `https://api.otakugifs.xyz/gif?reaction=${requestType}&format=gif`
    const response = await fetch(url)
        .then(async response => {
            const result = await response.json()
            const gif = await result["url"].toString()
            const text = `${ctx.message.from.first_name} грустит, поддержите солнышко:3`
            ctx.replyWithAnimation(
                gif,
                { caption: text })
        })
}
