const db = require('../../config/db')

module.exports = {
    async usuarios() {
        return await db('usuarios')
    },
    async usuario(_, { filtro }) {
        if (!filtro) return null;

        const { id, email } = filtro

        if (id) {
            return await db('usuarios')
                .where({ id })
                .first()
        } else if (email) {
            return await db('usuarios')
                .where({ email })
                .first()
        } else return null
    },
}