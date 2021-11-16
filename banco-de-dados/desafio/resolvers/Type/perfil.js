const db = require('../../config/db')

module.exports = {
    async usuarios(perfil) {
        if (!perfil) return null;

        return await db('usuarios')
            .innerJoin('usuarios_perfis', { 'usuarios.id': 'usuarios_perfis.usuario_id' })
            .where({ perfil_id: perfil.id })
    }
}