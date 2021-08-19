/**
 * Crea una función que reciba una lista de personas,
 * una propiedad y un valor, para retornar un nuevo array
 * de personas filtradas por esa propiedad y el valor
 */

const filtradoPersonas = (lista, propiedad, valor) => {
  return lista.filter((personas) => personas[propiedad] === valor);
};

export default filtradoPersonas;
