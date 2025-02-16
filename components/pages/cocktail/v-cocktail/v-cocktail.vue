<template>
  <article class="cocktail">
    <div class="cocktail__content">
      <div class="cocktail__wrapper">
        <h2 class="cocktail__title">
          {{ props.cocktail.strDrink }}
        </h2>

        <ul class="cocktail__description">
          <li>Category: {{ props.cocktail.strCategory }}</li>

          <li>Alcoholic: {{ props.cocktail.strAlcoholic }}</li>

          <li>Glass: {{ props.cocktail.strGlass }}</li>
        </ul>
      </div>

      <nuxt-img
        class="cocktail__image"
        :src="props.cocktail.strDrinkThumb"
        loading="lazy"
      />
    </div>

    <div class="cocktail__wrapper">
      <h3>Instructions:</h3>

      <p>
        {{ props.cocktail.strInstructions }}
      </p>
    </div>

    <v-cocktail-ingredients :ingredients="props.cocktail.ingredients" />
  </article>
</template>

<script setup lang="ts">
import type { TProps } from "./v-cocktail.types";
import VCocktailIngredients from "~/components/pages/cocktail/v-cocktail-ingredients/v-cocktail-ingredients.vue";

const props = defineProps<TProps>();
</script>

<style lang="scss">
.cocktail {
  width: 100%;
  height: auto;

  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  row-gap: 20px;

  border: 1px solid var(--dark);

  &__content {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    column-gap: 25px;

    @include media-mobile {
      flex-direction: column-reverse;

      row-gap: 20px;
    }
  }

  &__wrapper {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    row-gap: 15px;
  }

  &__image {
    width: 150px;
    height: 150px;

    object-fit: contain;

    @include media-mobile {
      width: 100%;
      max-width: 375px;
      height: auto;

      object-fit: contain;
    }
  }

  &__description {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    row-gap: 10px;

    list-style: none;
  }
}
</style>
