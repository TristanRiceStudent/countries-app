export const beautifyCountryPopulation = (population: number) => {
  return new Intl.NumberFormat().format(population);
};
