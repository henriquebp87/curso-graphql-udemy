const perfil = require('./perfil')
const usuario = require('./usuario')

module.exports = {
    ...perfil,
    ...usuario
}