const crypto = require('crypto');
const bcrypt = require('bcrypt');
const connection = require('../database/connection');

module.exports = {
    async teste(req, res) {
        return res.json({
            message: 'Funciona!'
        })
    },

    async create(req, res) {
        const {email, password} = req.body;
        const id = crypto.randomBytes(5).toString('hex');

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt);

        await connection('users_flairs').insert({
            id,
            email,
            password: hash,
        })

        return res.json({
            id,
            status: 200
        })

    },

    async login(req, res) {
        const {email, password} = req.body;

        

        const senha = connection('users_flairs')
        .where('email', email)
        .select('password')
        .first()

        console.log(senha)
        console.log(password)

        const valid = bcrypt.compareSync(password, senha)

        if (valid === true) {
            return res.json({Login: true})
        }

        res.json({Failed: "email ou senha invalidos"})
    }
}