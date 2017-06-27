
function ejercicio1 (numInicial, numFinal){
  var objeto = { //se crea un objeto literal que contiene los parametros
    numInicio: numInicial,
    numFin: numFinal
  };
  var result = 0;
  if(objeto.numInicio == "" || objeto.numFin == ""){
    result = "falta valores";

  }else if(objeto.numInicio < objeto.numFin){
    for(var i = objeto.numInicio; i <= objeto.numFin; i++){ //sumatoria desde el numInicial al numFinal
      result += i;

    }
  } else {
    for(var i = objeto.numFin; i <= objeto.numInicio; i++){ //sumatoria desde el numInicial al numFinal
      result += i;
    }
  }
  return result;
}


//Testear
var assert = require('assert');

describe ('prueba 1', function () {
  it ('ejercicio1(1,10) ', function () {
    var rangoMulti = ejercicio1(1, 10)
    assert.equal(55, rangoMulti);
  });
  it ('ejercicio1(10,1) ', function () {
    var rangoMulti2 = ejercicio1(10, 1)
    assert.equal(55, rangoMulti2 );
  });
  it ('ejercicio1(VACIO) ', function () {
    var rangoMulti3 = ejercicio1("","")
    assert.equal('falta valores', rangoMulti3);
  });
});
