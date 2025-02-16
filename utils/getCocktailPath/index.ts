import type { RouteLocationRaw } from "#vue-router";

const getCocktailPath = (cocktail: string): RouteLocationRaw => {
  return {
    name: "cocktail",
    params: {
      cocktail,
    },
  };
};

export { getCocktailPath };
