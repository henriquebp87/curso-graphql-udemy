const { usuarios, proximoId } = require('../../data/db')

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
    // novoUsuario(_, { nome, email, idade }){
    // novoUsuario(_, args) {
    novoUsuario(_, { dados }) {
        const emailExistente =
            usuarios.some(u => u.email === dados.email)

        if (emailExistente) {
            throw new Error("E-mail já cadastrado!")
        }

        const novo = {
            id: proximoId(),
            // nome,
            // email,
            // idade,
            // ...args,
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
    },

    // excluirUsuario(_, { id }) {
    excluirUsuario(_, { filtro }) {
        // const i = usuarios.findIndex(u => u.id === id)
        const i = indiceUsuario(filtro)

        if (i < 0) return null

        const excluidos = usuarios.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },

    alterarUsuario(_, { filtro, dados }) {
        const i = indiceUsuario(filtro)
        
        if (i < 0) return null
        if(!dados) return null

        const usuario = {
            ...usuarios[i],
            ...dados
        }

        usuarios.splice(i, 1, usuario)
        return usuario
    }
}