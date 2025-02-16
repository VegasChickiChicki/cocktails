import type {
  TCocktailType,
  TCocktailResponse,
  TCocktail,
} from "./cocktails.types";

import { defineStore } from "pinia";

import { modifyCocktailItem } from "./cocktails.utils";

export const useCocktailsStore = defineStore("cocktailsStore", () => {
  const cocktails = ref<Partial<Record<TCocktailType, TCocktail>>>({});

  const fetchCocktail = async (cocktailType: TCocktailType): Promise<void> => {
    await $fetch<TCocktailResponse>(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailType}`, {
          method: 'GET'
      })
      .then((response: TCocktailResponse) => {
        cocktails.value[cocktailType] = modifyCocktailItem(response);
      })
      .catch((error) => {
        console.log("Cocktails loading error", error);
      });
  };

  const getCocktail = (
    cocktailType: TCocktailType,
  ): ComputedRef<TCocktail | null> => {
    return computed(() => cocktails.value[cocktailType] || null);
  };

  return {
    cocktails,
    fetchCocktail,
    getCocktail,
  };
});
