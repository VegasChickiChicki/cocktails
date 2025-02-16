<template>
  <div class="cocktail-ingredients">
    <h3 class="cocktail-ingredients__title">Cocktail Ingredients</h3>

    <ul class="cocktail-ingredients__list">
      <li
        v-for="(
          cocktailIngredient, cocktailIngredientIndex
        ) in props.ingredients"
        :key="`cocktail-ingredient-${cocktailIngredientIndex}`"
        class="cocktail-ingredients__list-item"
      >
        <v-cocktail-ingredient :ingredient="cocktailIngredient" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { TProps } from "./v-cocktail-ingredients.types";
import VCocktailIngredient from "~/components/pages/cocktail/v-cocktail-ingredient/v-cocktail-ingredient.vue";

const props = defineProps<TProps>();
</script>

<style scoped lang="scss">
.cocktail-ingredients {
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &__list {
    width: 100%;
    height: auto;

    margin-top: 15px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    row-gap: 10px;
  }

  &__list-item {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
