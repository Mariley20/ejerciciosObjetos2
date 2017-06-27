

function ejercicio4 (nombre, apellido, edad, genero, ciudad, pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
  this.ficha = function () {
    return 'Nombre: ' + this.nombre + ' ' + this.apellido + '\n' + 'Edad: ' + edad + '\n' + 'Pais: ' + this.pais;
  }
}
var assert = require('assert');
describe ('Prueba 1', function () {
  it ('ejercicio4 1', function () {
    var res = new ejercicio4('Blanca', 'Perez', 19, 'Femenino', 'Santiago', 'Chile')
    assert.equal('Nombre: Blanca Perez\nEdad: 19\nPais: Chile', res.ficha());
  });
  it ('ejercicio4 2', function () {
    var res1 = new ejercicio4('Mariley', 'Condori', 19, 'Femenino', 'Arequipa', 'Peru')
    assert.equal('Nombre: Mariley Condori\nEdad: 19\nPais: Peru', res1.ficha());
  });
});