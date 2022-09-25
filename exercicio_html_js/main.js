const form = document.getElementById('formulario');
const numA = document.getElementById('numeroA');
const numB = document.getElementById('numeroB');
let formValido = false;

// function validaCampoA() {
//     const validaCampo = numA.value;
//     if (validaCampo == ""){
//         validaCampo.value;
//     } 
// }



form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemInvalido = `Formuário inválido pois o <b>${numA.value}</b> é maior que o <b>${numB.value}</b>`;
    const mensagemValido = `Formulário válido, pois o <b>${numB.value}</b> é maior que o <b>${numA.value}</b>`;
    const mensagemIguais = `Os valores <b>${numA.value}</b> e <b>${numB.value}</b> são iguais!`;


    if (numB.value > numA.value){
        const mensagemSucesso = document.querySelector('.success-message');
        mensagemSucesso.innerHTML = mensagemValido;
        mensagemSucesso.style.display = 'block';
        numA.value = '';
        numB.value = '';

    } else if (numA.value > numB.value){
        const mensagemSucesso = document.querySelector('.unsuccess-message');
        mensagemSucesso.innerHTML = mensagemInvalido;
        mensagemSucesso.style.display = 'block';
        numA.value = '';
        numB.value = '';        

    } else if (numA.value == numB.value){
        const mensagemSucesso = document.querySelector('.same-message');
        mensagemSucesso.innerHTML = mensagemIguais;
        mensagemSucesso.style.display = 'block';
        numA.value = '';
        numB.value = '';
    }


})


// numA.addEventListener('focusout', function(e) {
//     console.log(e.target.value);
//     formValido = validaCampoA(e.target.value);

//     if(!formValido){
//         numA.classList.add('error');
//         document.querySelector('.error-message').style.display = 'block';
//     } else {
//         numA.classList.remove('error');
//         document.querySelector('.error-message').style.display = 'none';
//     }

    

// });



