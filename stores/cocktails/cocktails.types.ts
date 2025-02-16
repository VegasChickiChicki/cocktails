type TCocktailType = "margarita" | "mojito" | "a1" | "kir";

type TIngredients = {
  [key in `strIngredient${number}`]?: string | null;
};

type TMeasures = {
  [key in `strMeasure${number}`]?: string | null;
};

type TDrinkResponse = {
  dateModified: string;
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strDrinkThumb: string;
  strGlass: string;
  strIBA: string;
  strImageAttribution: string;
  strImageSource: string;
  strInstructions: string;
  strInstructionsDE?: string;
  strInstructionsES?: string;
  strInstructionsFR?: string;
  strInstructionsIT?: string;
  strInstructionsZH_HANS?: string | null;
  strInstructionsZH_HANT?: string | null;
  strTags?: string;
  strVideo?: string | null;
} & TIngredients &
  TMeasures;

type TIngredient = {
  ingredient: string;
  measure: string | null;
};

type TDrink = Omit<TDrinkResponse, keyof TIngredients | keyof TMeasures> & {
  ingredients: TIngredient[];
};

type TCocktailResponse = {
  drinks: TDrinkResponse[];
};

type TCocktail = TDrink[];

export type {
  TCocktailType,
  TDrinkResponse,
  TDrink,
  TIngredient,
  TCocktailResponse,
  TCocktail,
};
