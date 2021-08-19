let personas = [
  {
    nombre: "Jhony",
    asistente: null,
    seccion: "gold",
    rol: "speaker",
  },
  {
    nombre: "Manuel",
    asistente: true,
    seccion: "vip",
    rol: "viewer",
  },
  {
    nombre: "Fran",
    asistente: true,
    seccion: "vip",
    rol: "viewer",
  },
  {
    nombre: "Cintia",
    seccion: "platino",
    rol: "viewer",
  },
  {
    nombre: "Marcos",
    asistente: null,
    seccion: "gold",
    rol: "viewer",
  },
  {
    nombre: "Victoria",
    asistente: true,
    seccion: "platino",
    rol: "speaker",
  },
];

// 1ero
function asistentes(listaPersonas) {
  let asistentes = 0;
  listaPersonas.forEach((persona) => {
    persona.asistente ? asistentes++ : null;
  });
  return asistentes;
}
let totalAsistentes = asistentes(personas);
console.log(totalAsistentes);

// 2do
const personasAsistentes = personas.filter((persona) => persona.asistente);
console.log(personasAsistentes);

//3ero
const personasVipPlatino = personas.filter(
  (persona) => persona.seccion === "platino"
);
console.log(personasVipPlatino);

//4to
const filtradorDePersonas = (llave, valor) => {
  return personas.filter((persona) => persona[llave] == valor);
};
console.log(filtradorDePersonas("rol", "speaker"));
