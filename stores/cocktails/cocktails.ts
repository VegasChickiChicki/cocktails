import type { AxiosResponse } from "axios";
import type {
  TCocktailType,
  TCocktailResponse,
  TCocktail,
} from "./cocktails.types";

import { defineStore } from "pinia";
import axios from "axios";

import { modifyCocktailItem } from "./cocktails.utils";

export const useCocktailsStore = defineStore("cocktailsStore", () => {
  const cocktails = ref<Partial<Record<TCocktailType, TCocktail>>>({});

  const fetchCocktail = async (cocktailType: TCocktailType): Promise<void> => {
    await axios
      .get<TCocktailResponse>(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailType}`,
      )
      .then((response: AxiosResponse<TCocktailResponse>) => {
        cocktails.value[cocktailType] = modifyCocktailItem(response.data);
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
