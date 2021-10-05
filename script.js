function calcularIMC(){
    var name = document.getElementById('name').value;
    var alturaCentimetros = parseInt(document.getElementById('altura').value);
    var alturaMetros = alturaCentimetros / 100;
    var pesokilos = parseInt(document.getElementById('peso').value); 

    var imc = pesokilos / (Math.pow(alturaMetros,2));

    if ( imc < 18.5){
        resultado = 'estás muy delgado';
    }else if (imc < 25){
        resultado = 'estás con peso normal';
    }else {
        resultado = 'estás con sobrepeso';
    }

    var respuesta = 'hola '+ name + ' tu IMC es: ' + imc + ' y tu ' + resultado;

    alert(respuesta);
}