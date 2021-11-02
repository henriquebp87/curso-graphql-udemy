const { usuarios } = require('../../data/db')

function indiceUsuario(filtro) {
    if (!filtro) return -1;

    const { id, email } = filtro

    if (id) {
        return usuarios.findIndex(u => u.id === id)
    }
    else if (email) {
        return usuarios.findIndex(u => u.email === email)
    }

    return -1
}

module.exports = {
    usuarios() {
        return usuarios
    },
    // usuario(_, { id }) {
    usuario(_, { filtro }) {
        // const sels = usuarios
        //     .filter(u => u.id === id)
        const i = indiceUsuario(filtro)
        if(i < 0) return null
        return usuarios[i]
    }
}