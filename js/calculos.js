/*  
<h3>SÃO ISENTO AS PESSOAS MENORES DE IDADE E COM RENDA ATÉ R$ 1700,00</P> <br> 

        <h3>1. DE 1701,00 ATÉ R$ 5000,00  -> 5%</h3> 

        <h3>2. DE R$ 5001,00 ATÉ R$ 8000,00 -> 8%</h3> 

        <h3>3. DE R$ 8001,00 ATÉ R$ 10000,00 -> 10%</h3>

        <h3>4. DE R$ 10001,00 EM DIANTE -> 3%</h3> <br> <br> <br>

*/




const calculoDesconto = (objPessoa) => {

    var resposta = ''

    if((objPessoa.idade < 18) || (objPessoa.renda <= 1700)){
        resposta = 'Isento de Desconto'

    }else if(objPessoa.renda <= 5000){
        resposta = objPessoa.renda * 0.05

    }else if(objPessoa.renda <= 8000){
        resposta = objPessoa.renda * 0.08

    }else if(objPessoa.renda <=10000){
        resposta = objPessoa.renda * 0.10

    }else{
        resposta = objPessoa.renda * 0.03

    }

    return resposta
}

export{calculoDesconto}
