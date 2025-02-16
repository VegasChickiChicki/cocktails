import { redirectToHome } from "~/utils/redirectToHome";

export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/") {
    return redirectToHome();
  }
});
