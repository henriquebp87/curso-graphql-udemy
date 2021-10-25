const perfis = [
    { id: 1, nome: 'Comum' },
    { id: 2, nome: 'Administrador' }
]

const usuarios = [{
    id: 1,
    nome: 'João Silva',
    email: 'jsilva@email.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
},
{
    id: 2,
    nome: 'Rafael Jr.',
    email: 'rafajun@email.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
},
{
    id: 3,
    nome: 'Henrique Pereira',
    email: 'hpereira@hotmail.com',
    idade: 34,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis }