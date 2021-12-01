const db = require('./db')
const { getUsuarioLogado } = require('../resolvers/comum/usuario')

const sql = `
    select u.*
    from usuarios u
        join usuarios_perfis up on u.id = up.usuario_id
        join perfis p on p.id = up.perfil_id
    where
        u.ativo = 1 and
        p.nome = :nomePerfil
    limit 1
`

const getUsuario = async nomePerfil => {
    const res = await db.raw(sql, { nomePerfil })
    return res ? res[0][0] : null
}

module.exports = async req => {
    const usuario = await getUsuario('admin')
    if (usuario) {
        const { token } = await getUsuarioLogado(usuario)
        req.headers = {
            authorization: `Bearer ${token}`
        }
    }
}