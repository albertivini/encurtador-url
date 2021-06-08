function generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text
}

function confereHTTP (site) {

    const HTTP = /^[http]/

    const substring = site.substring(0,8)

    if (HTTP.test(substring)) {
        return site
    } else {
        const agregado = "https://" + site

        return agregado
    }
}

 
module.exports = { generateCode, confereHTTP }