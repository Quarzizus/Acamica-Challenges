const persona = {
  nombre: "Eva",
  edad: 20,
  colorFavorito: "#6fffe9",
  moradoFavorito: "#160c28",
  gatos: 2,
  esMayordeEdad: function () {
    this.edad >= 18
      ? console.log(`${this.nombre} es mayor de edad`)
      : console.log(`${this.nombre} no es mayor de edad`);
  },
};

persona.esMayordeEdad();

// ? Segunda Parte del Challenge

let producto = {
  id: "AAFC29",
  nombre: "producto",
  cantidad: 20,
  disponible: function () {
    this.cantidad === 0
      ? console.log(`No está disponible ${this.nombre}`)
      : console.log(`Está disponible ${this.nombre}`);
  },
};

// 2. Invoca la función aquí
producto.disponible();
// 3. Modifica la propiedad "cantidad" a 0
producto.cantidad[0];
// 4. Vuelve a invocar la función "disponible"
producto.disponible();

// ? Tercera parte del ejercicio

const taskineitor = [
  {
    nombre: "Arreglar casita",
    tiempo: 30,
    estado: true,
  },
  {
    nombre: "Clases de U",
    tiempo: 240,
    estado: true,
  },
  {
    nombre: "Clase Acamica",
    tiempo: 240,
    estado: true,
  },
];
