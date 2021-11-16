const db = require('../config/db')

// const novoPerfil = {
//     nome: 'visitante',
//     rotulo: 'Visitante'
// }

// db('perfis')
//     .insert(novoPerfil)
//     .then(res => console.log(res))
//     .catch(err => console.log(err.sqlMessage))
//     .finally(() => db.destroy()) // usar apenas para teste, nunca em produção. Devemos manter nosso pool de conexões aberto

const perfilSU = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}

// outra forma de chamar o insert
db.insert(perfilSU)
    .into('perfis')
    .then(res => res[0])
    .then(id => `O código gerado foi ${id}`)
    .then(str => console.log(str))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy()) // usar apenas para teste, nunca em produção. Devemos manter nosso pool de conexões aberto
