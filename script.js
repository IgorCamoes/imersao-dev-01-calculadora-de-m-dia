const botaoNotas = document.querySelector('.button-notas');
const inputNotas = document.querySelectorAll('.nota-input input');
const msg = document.querySelector('span.msg');


let somaNotas = 0;
let notaFinal = 0;
let validado = [];

console.log(inputNotas)

const validarNotas = () =>{
  somaNotas = 0;
  notaFinal = 0;
  validado = [];



  inputNotas.forEach(function(e, i){
    if(parseFloat(inputNotas[i].value) > 0 && parseFloat(inputNotas[i].value) <= 10 ){
      somaNotas = somaNotas + parseFloat(inputNotas[i].value);
      validado.push(true);
    } else{
      validado.push(false);
    }
  }
)

notaFinal = somaNotas / 4;
notaFinal = notaFinal.toFixed(1);

const notaFalsa = (e) => {
  return e === false;
}

if(validado.some(notaFalsa)){
  msg.innerHTML = 'Insira notas válidas por favor (de 0 à 10).';
}else {
  msg.innerHTML = `Sua média é <span class="nota-final">${notaFinal}</span>!`
}
}

botaoNotas.onclick = validarNotas;