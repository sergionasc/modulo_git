const form = document.getElementById('formulario');
const numA = document.getElementById('numeroA');
const numB = document.getElementById('numeroB');
const enviar = document.getElementById('enviar');
let formValido = false;
let formValido2 = false;


function validaCampoA(value) {
    if (value.length > 0){
        return true;
    }
    return false;
}
function validaCampoB(value) {
    if (value.length > 0){
        return true;
    }
    return false;
}



form.addEventListener('submit', function(e){
    e.preventDefault();

        
    const mensagemInvalido = `Formuário inválido pois o <b>${numA.value}</b> é maior que o <b>${numB.value}</b>`;
    const mensagemValido = `Formulário válido, pois o <b>${numB.value}</b> é maior que o <b>${numA.value}</b>`;
    const mensagemIguais = `Os valores <b>${numA.value}</b> e <b>${numB.value}</b> são iguais!`;

    const mensagemSucesso = document.querySelector('.success-message');


    if (numB.value > numA.value){

       // const mensagemSucesso = document.querySelector('.success-message');
        mensagemSucesso.innerHTML = mensagemValido;
        mensagemSucesso.style.backgroundColor = 'green';


    } else if (numA.value > numB.value){
      //  const mensagemSucesso = document.querySelector('.unsuccess-message');
        mensagemSucesso.innerHTML = mensagemInvalido;
        mensagemSucesso.style.backgroundColor = 'red';


    } else if (numA.value == numB.value){
      //  const mensagemSucesso = document.querySelector('.same-message');
        mensagemSucesso.innerHTML = mensagemIguais;
        mensagemSucesso.style.backgroundColor = 'rgba(146, 85, 5, 0.829)';

    }

    mensagemSucesso.style.display = 'block';
    numA.value='';
    numB.value='';


})

numA.addEventListener('focusout', function(e) {
    console.log(e.target.value);
    formValido = validaCampoA(e.target.value);

    if(!formValido){
        numA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }

    

});

numB.addEventListener('focusout', function(e) {
    console.log(e.target.value);
    formValido2 = validaCampoB(e.target.value);

    if(!formValido2){
        numB.classList.add('error');
        document.querySelector('.error-message2').style.display = 'block';
    } else {
        numB.classList.remove('error');
        document.querySelector('.error-message2').style.display = 'none';
    }
})



