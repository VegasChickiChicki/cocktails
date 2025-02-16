import type {
  TCocktailResponse,
  TDrinkResponse,
  TDrink,
  TIngredient,
  TCocktail,
} from "~/stores/cocktails/cocktails.types";

import { INGREDIENT_KEY, MEASURE_KEY } from "./cocktails.constants";

/**
 * Функция для извлечения ключей ингредиентов и их
 * кол-ва из объекта ответа сервера TDrinkResponse
 */
const getCocktailIngredients = (cocktail: TDrinkResponse): TIngredient[] => {
  return Object.entries(cocktail).reduce<TIngredient[]>(
    (ingredients, [key, value]) => {
      const index: string = key.replace(INGREDIENT_KEY, "");
      const measureKey: keyof TDrinkResponse =
        `${MEASURE_KEY}${index}` as keyof TDrinkResponse;
      const measure: string | null = cocktail[measureKey] ?? null;

      if (key.includes(INGREDIENT_KEY) && value) {
        ingredients.push({
          ingredient: value,
          measure: typeof measure === "string" ? measure : null,
        });
      }

      return ingredients;
    },
    [],
  );
};

/**
 * Функция для создания объекта с информацией о коктейле
 * без полей ингредиентов и их кол-ва. Каждый коктейль имеет разновидности - TDrink,
 * именно у каждой разновидности и убираются лишние поля ингредиентов и их кол-ва.
 */
const modifyCocktailItem = (cocktail: TCocktailResponse): TCocktail => {
  return cocktail.drinks.map((drink: TDrinkResponse) => {
    const ingredients: TIngredient[] = getCocktailIngredients(drink);
    const filteredData: Partial<TDrink> = Object.entries(drink)
      .filter(([key]) => {
        return !key.includes(INGREDIENT_KEY) && !key.includes(MEASURE_KEY);
      })
      .reduce((acc, [key, value]) => {
        return { ...acc, [key]: value };
      }, {});

    return {
      ...filteredData,
      ingredients,
    } as TDrink;
  });
};

export { modifyCocktailItem };
