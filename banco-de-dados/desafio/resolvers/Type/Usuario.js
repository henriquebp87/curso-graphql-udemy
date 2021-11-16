const db = require('../../config/db')

module.exports = {
    async perfis(usuario) {
        if (!usuario) return null;

        return await db.select('perfis.id', 'perfis.nome', 'perfis.rotulo')
            .from('perfis')
            .innerJoin('usuarios_perfis', { 'perfis.id': 'usuarios_perfis.perfil_id' })
            .where({ usuario_id: usuario.id })
    }
}