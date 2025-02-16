import type { RouteLocationRaw } from "#vue-router";

import { COCKTAILS_LIST } from "~/constants/cocktails-list.constants";
import { getCocktailPath } from "~/utils/getCocktailPath";

const redirectToHome = () => {
  let redirectPath: RouteLocationRaw = {
    path: "/error",
  };

  if (COCKTAILS_LIST.length > 0) {
    redirectPath = getCocktailPath(COCKTAILS_LIST[0]);
  }

  return navigateTo(redirectPath);
};

export { redirectToHome };
