//Ejercicio 2: Te dice You're awesome si eres mujer mayor de 18 y una Web Developer o Estudiante Laboratoria
function ejercicio2 (nombre, edad, ocupacion, genero){
  this.nombre = nombre;
  this.edad = edad;
  this.ocupacion = ocupacion;
  this.genero = genero;
  this.mensaje = function () {
    if(this.genero.toLowerCase() == 'femenino' && this.edad >= 18 && (this.ocupacion.toLowerCase() == 'web developer' || this.ocupacion.toLowerCase() == 'estudiante laboratoria')){

//convertimos de mayusculas a minusculas
      return "You're awesome";
    } else {
      return 'Upsii';
    }
  }
}

describe ('Ejercicio 2', function () {
  it ('Test ejercicio2("Tamara", 22, "Estudiante Laboratoria", "Femenino") ', function () {
    assert.equal("You're awesome", new ejercicio2("Tamara", 22, "Estudiante Laboratoria", "Femenino").mensaje());
  });
  it ('Test ejercicio2("Jorge", 22, "Estudiante Laboratoria", "Masculino") ', function () {
    assert.equal('Upsii', new ejercicio2("Jorge", 22, "Estudiante Laboratoria", "Maculino").mensaje());
  });
  it ('Test ejercicio2("Maria", 17, "Estudiante Laboratoria", "Femenino") ', function () {
    assert.equal('Upsii', new ejercicio2("Maria", 17, "Estudiante Laboratoria", "Femenino").mensaje());
  });
  it ('Test ejercicio2("Rosa", 30, "web Developer", "femenino") ', function () {
    assert.equal("You're awesome", new ejercicio2("Rosa", 30, "web Developer", "femenino").mensaje());
  });
  it ('Test ejercicio2("Rosangela", 25, "asistente", "femenino") ', function () {
    assert.equal('Upsii', new ejercicio2("Rosangela", 25, "asistente", "femenino").mensaje());
  });
});