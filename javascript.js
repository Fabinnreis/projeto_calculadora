//Cria o objeto calculadora
let calculadora = {
    display: "",
    operador: "",
    acumulador: 0,
    condicao: function(){ if(exibe.innerText[exibe.innerText.length-1]!="+"&&exibe.innerText[exibe.innerText.length-1]!="-"&&exibe.innerText[exibe.innerText.length-1]!="*"&&exibe.innerText[exibe.innerText.length-1]!="/"){return true;}else{return false}},
    soma: function(){
        calculadora.operador = "+";
        exibe.innerText += calculadora.operador;
    },
    subtrai: function(){
        calculadora.operador = "-";
        exibe.innerText += calculadora.operador;
    },
    multiplica: function(){
        calculadora.operador = "*";
        exibe.innerText += calculadora.operador;
    },
    divide: function(){
        calculadora.operador = "/";
        exibe.innerText += calculadora.operador;
    }
}
//cria a variavel exibe que escreve o conteudo no display
var exibe = document.getElementById('display');
exibe.innerText = calculadora.display;

//botao de soma
var btnSoma = document.getElementById('soma');
btnSoma.onclick = function(){
    if(calculadora.condicao()){
        calculadora.soma();
    }
}
//botao de subtração
var btnMenos = document.getElementById('subtracao');
btnMenos.onclick = function(){
    if(calculadora.condicao()){
        calculadora.subtrai();
    }
}
//botao de multiplicacao
var btnVezes = document.getElementById('multiplicacao');
btnVezes.onclick = function(){
    if(calculadora.condicao()){
        calculadora.multiplica();
    }
}
//botao de divisao
var btnDividido = document.getElementById('divisao');
btnDividido.onclick = function(){
    if(calculadora.condicao()){
        calculadora.divide();
    }
}
//botao de ponto
var btnPonto = document.getElementById('ponto');
btnPonto.onclick = function(){
    //if (!exibe.innerText.includes('.')){
        exibe.innerText += "."; 
    //}
}

//limpa tudo
var btnC = document.getElementById('limpa');
btnC.onclick = function(){
    exibe.innerText = ""; 
}
//limpa ultimo elemento
var btnCE = document.getElementById('limpaOperacao');
btnCE.onclick = function(){
    exibe.innerText = exibe.innerText.slice(0,-1); 
}

//botao resultado
var btnResultado = document.getElementById('igual');
btnResultado.onclick = function(){
    exibe.innerText = eval(exibe.innerText); 
}
//botoes numericos
var btn1 = document.getElementById('numero1');
btn1.onclick = function(){exibe.innerText += 1;}
var btn2 = document.getElementById('numero2');
btn2.onclick = function(){exibe.innerText += 2;}
var btn3 = document.getElementById('numero3');
btn3.onclick = function(){exibe.innerText += 3;}
var btn4 = document.getElementById('numero4');
btn4.onclick = function(){exibe.innerText += 4;}
var btn5 = document.getElementById('numero5');
btn5.onclick = function(){exibe.innerText += 5;}
var btn6 = document.getElementById('numero6');
btn6.onclick = function(){exibe.innerText += 6;}
var btn7 = document.getElementById('numero7');
btn7.onclick = function(){exibe.innerText += 7;}
var btn8 = document.getElementById('numero8');
btn8.onclick = function(){exibe.innerText += 8;}
var btn9 = document.getElementById('numero9');
btn9.onclick = function(){exibe.innerText += 9;}
var btn0 = document.getElementById('numero0');
btn0.onclick = function(){exibe.innerText += 0;}
//limitador de caracteres
if(exibe.innerText.length==1){
    alert('Máximo de 50 caracteres');
}
