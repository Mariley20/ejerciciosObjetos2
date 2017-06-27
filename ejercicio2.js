
var assert = require('assert');

function ejercicio2 (nombre, edad, ocupacion, genero){
  this.nombre = nombre;
  this.edad = edad;
  this.ocupacion = ocupacion.toLowerCase();
  this.genero = genero.toLowerCase();
  this.superCode = function () {
    var result;
    if(this.genero == 'femenino' && this.edad >= 18 && (this.ocupacion == 'web developer' || this.ocupacion == 'estudiante laboratoria')){
      //convertimos de mayusculas a minusculas
      result = "You're awesome";
    } else {
      result = 'Upsii';
    }
    return result;
  }
}

describe ('Prueba 1', function () {
  it ('ejercicio2-1 ', function () {
    var res = new ejercicio2("Tamara", 22, "Estudiante Laboratoria", "Femenino");
    assert.equal("You're awesome",res.superCode() );
  });
  it ('ejercicio2-2 ', function () {
    var res1 = new ejercicio2("Pedro Luis", 22, "Estudiante Laboratoria", "Masculino")
    assert.equal('Upsii', res1.superCode());
  });
  it ('ejercicio2-3', function () {
    var res2 = new ejercicio2("Maria", 17, "web Developer", "Femenino");
    assert.equal('Upsii', res2.superCode());
  });
  it ('ejercicio2-4', function () {
    var res3 = new ejercicio2("Rosa", 30, "web Developer", "femenino");
    assert.equal("You're awesome", res3.superCode());
  });
});