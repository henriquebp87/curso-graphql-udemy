const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return "Olá mundo"
    },
    horaAtual() {
        return new Date()
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Ana da Web',
            email: 'anadaweb@email.com',
            idade: 23,
            salario_real: 1234.56,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: "Produto 1",
            preco: 5689.39,
            desconto: 0.5
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        var array = Array(6).fill(0)
            .map(() => parseInt(Math.random() * 60 + 1))
            .sort(crescente)

        for (i = 0; i < array.length - 1; i++) {
            var n = array[i];
            var li = array.lastIndexOf(n);
            if (li == i) continue;
            var r = 0;
            do {
                r = parseInt(Math.random() * 60 + 1)
            } while (array.indexOf(r) != -1)
            array[li] = r;
        }

        return array.sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const filtrados = usuarios
            .filter(u => u.id === id)

        return filtrados ? filtrados[0] : null;
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        return perfis.find(p => p.id === id)
    }
}