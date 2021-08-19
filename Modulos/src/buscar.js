/**
 * Crea una función que reciba una lista de personas y un id (número)
 * como argumento, y que retorne el objeto de la persona que corresponda
 * con el id especificado
 */

const buscarPorId = (lista, id) => {
  return lista[id + 1];
};

export default buscarPorId;
