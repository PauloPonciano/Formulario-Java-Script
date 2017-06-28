var titulo = document.querySelector(".titulo");
		titulo.textContent = "Nutrição ";


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0;i<pacientes.length;i++){

var paciente = pacientes[i]; 

var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var tdgordura = paciente.querySelector(".info-gordura");
var gordura = tdgordura.textContent;

var tdimc = paciente.querySelector(".info-imc");

var pesoValido = validaPeso(peso);
var alturaValida = validaAtura(altura);

if(!validaPeso){
    console.log("Peso Invalido!");
    pesoValido = false;
    tdpeso.textContent = "Peso invalido !";
    paciente.classList.add("paciente-invalido");
}

if(!alturaValida){
    console.log("Altura Invalida !");
    alturaValida = false;
    tdaltura.textContent = "Altura Invalida!"
    tdimc.textContent = "----";
    paciente.classList.add("paciente-invalido")
}

if(pesoValido && alturaValida){
    var imc = calculaImc(peso,altura);
    tdimc.textContent = imc;
}  
}
    function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2) ;

}
    function validaPeso(peso){
    if (peso <= 0 && peso > 1000){
        return true;
    }else 
    return false;
}
function validaAtura(altura){
    if(altura >= 0 && altura <=3.0){
        return true;
    }else
    return false;
}

 







        