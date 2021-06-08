const utils = require('../utils/utils')
const Link = require('../models/link')
require('dotenv').config()

module.exports = {
    show: (req, res, next) => {
        res.render('index', { title: 'Encurtador'})
    },
    encurta: async (req, res, next) => {
        const url = req.body.url
        const code = utils.generateCode()

        // inserindo no banco de dados 'links' o url e o código gerado
        const resultado = await Link.create({
            url,
            code
        })

        res.render('stats', resultado.dataValues)
    },
    caminho: async (req, res, next) => {
        const code = req.params.code

        const final = await Link.findOne({ where: { code } })
        if(!final) {
            return res.sendStatus(404)
        }

        final.hits++
        
        // salva na coluna hits do banco
        await final.save()

        const mudaUrl = utils.confereHTTP(final.url)

        console.log(mudaUrl)

        // caminho da url do link encurtado
        return res.status(301).redirect(mudaUrl)
    },
    status: async (req, res, next) => {
        const code = req.params.code
        const resultado = await Link.findOne({ where: { code } })

        if (!resultado) {
            return res.sendStatus(404)
        }

        res.render('stats', resultado.dataValues)
    }
}