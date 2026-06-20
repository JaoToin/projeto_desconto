// 1.CRIAR UM ARRAY DE OBJETO PESSOA 

const pessoas = []

// 2.PEGANDO ELEMENTOS DO DOM

const formPessoa = document.querySelector('#form-pessoa')
const divPessoa = document.querySelector('#div-lista-pessoas')

// 3.CAPTURANDO O EVENTO DO SUBMIT DO FORMULARIO

formPessoa.addEventListener('submit', (evt)=>{

    //4.interrompendo o efeito padrão do formulario

    evt.preventDefault()

    //5.criando e preenchendo o objeto literal pessoa 

    const dadosForm = new FormData(formPessoa)

    const pessoa = {
        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        renda: dadosForm.get('renda')
    }

    //6.chamando a função addPessoa e passando o objeto literl
    addPessoa(pessoa)

    //7.limpando o formulario
    formPessoa.reset()

})

//8.FUNÇÕES PARA CRUD
//9.FUNÇÃO PARA ADICIONAR pessoa

const addPessoa = (objPessoa)=>{

    //10.adicionando o objeto no array pessoa, vindo do parâmetro da função
    pessoas.push(objPessoa)

    listPessoa()
}

//função listar pessoas 
const listPessoa = () => {

    //limpando a div 
    divPessoa.innerHTML = ''

    //percorrendo o array com a estrutura de repetição foreach

    pessoas.forEach((elem, i)=>{
        divPessoa.innerHTML += `<div class='item-pessoa'> ${i + 1} - ${elem.nome}  ${elem.idade}  R$ ${parseFloat(elem.renda).toFixed(2).replace('.',',')} </div> <br>`
    })
}