const { perfis } = require('../../data/db')

module.exports = {    
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const sels = perfis
            .filter(p => p.id === id)
        return sels ? sels[0] : null
    }
}