
//Ejercicio 4: crea una ficha con tu nombre, apellido, edad y pais
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
describe ('Ejercicio 4', function () {
  it ('Test ejercicio4 (Blanca, Perez, 19, Femenino, Santiago, Chile) ', function () {
    assert.equal('Nombre: Blanca Perez\nEdad: 19\nPais: Chile', new ejercicio4('Blanca', 'Perez', 19, 'Femenino', 'Santiago', 'Chile').ficha());
  });
});