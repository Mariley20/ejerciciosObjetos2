//Ejercicio 3: crea un string donde esta concatenado las propiedades de un objeto texto creado a partir de un array
function ejercicio3 (array){
  var texto = array.reduce(function(a, b, indice) { //creamos el objeto texto mediante reduce
    a['propiedad' + (indice + 1)] = b;
    return a;
  }, {}); // obtenemos un objeto texto tipo {propiedad1: 6}
  var respuesta = ''; //concatenamos las propiedades de texto
  Object.getOwnPropertyNames(texto).forEach(
    //el metodo object.getOwnPropertyNames nos proporciona el nombre de cada propiedad y sus valores
    function (val) {
      respuesta += val + ' --> ' + texto[val] + '; ';
    }
  );
  return respuesta.slice(0, -2);
}


describe ('Ejercicio 3', function () {
  it ('Test ejercicio3 ([6,5,4,3,2,1]) ', function () {
    assert.deepEqual('propiedad1 --> 6; propiedad2 --> 5; propiedad3 --> 4; propiedad4 --> 3; propiedad5 --> 2; propiedad6 --> 1', ejercicio3 ([6,5,4,3,2,1]));
  });
  it ('Test ejercicio3 ([10,5,3,0,23]) ', function () {
    assert.deepEqual('propiedad1 --> 10; propiedad2 --> 5; propiedad3 --> 3; propiedad4 --> 0; propiedad5 --> 23', ejercicio3 ([10,5,3,0,23]));
  });
});

