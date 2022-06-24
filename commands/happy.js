const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
module.exports = happy = async (ctx) => {
    let message = ctx.message.text.split(' ')
    const requestType = "happy";
    const url = `https://api.otakugifs.xyz/gif?reaction=${requestType}&format=gif`
    const response = await fetch(url)
        .then(async response => {
            const result = await response.json()
            const gif = await result["url"].toString()
            const text = `${ctx.message.from.first_name} радуется!! ヽ(*・ω・)ﾉ`
            ctx.replyWithAnimation(
                gif,
                { caption: text })
        })
}
