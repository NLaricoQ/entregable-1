// Genera numeros entre 0 y 1,sin tomar el 1
export const getRandomNumber = (number) => {
  const random = Math.random(); // Math.random() genera un valor aleatorio entre 0 y 1
  const roundedRandom = Math.round(random * number);
  //Math.round() aproxima el valor a un numero entero
  return roundedRandom;
};
