const buscarElPrimero = (lista, propiedad, valor) => {
  return lista.find((persona) => persona[propiedad] === valor);
};

export default buscarElPrimero;
