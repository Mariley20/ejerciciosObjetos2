function ejercicio3(array){
  var texto = {}
  for(var i = 0; i<array.length; i++){
    texto["propiedad"+(i+1)] = array[i];
  }

  var result = '';
  for(var i in texto){
    result += i+" --> "+texto[i]+"; "
  }
  result = result.slice(0, -2)
  return result;
}

//console.log(ejercicio3([2,4,5,7,8]))
var assert = require('assert');

describe ('Prueba', function () {
  it ('ejercicio3 -1 ', function () {
    var res = ejercicio3 ([6,5,4,3,2,1]);
    assert.deepEqual('propiedad1 --> 6; propiedad2 --> 5; propiedad3 --> 4; propiedad4 --> 3; propiedad5 --> 2; propiedad6 --> 1', res);
  });
  it ('ejercicio3-2', function () {
    var res2 = ejercicio3 ([2,4,5,7,8]);
    assert.deepEqual('propiedad1 --> 2; propiedad2 --> 4; propiedad3 --> 5; propiedad4 --> 7; propiedad5 --> 8', res2);
  });
});
