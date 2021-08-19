/**
 * Crea una función que reciba una lista de personas y muestre
 * por consolas sus nombres.
 */

const nombreDePersonas = (personas) => {
  personas.map((persona) => console.log(persona.nombre));
};

export default nombreDePersonas;
