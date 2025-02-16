<template>
  <ul class="cocktails-list">
    <li
      v-for="(drink, drinkKey) in props.cocktail"
      :key="`drink-${drinkKey}`"
      class="cocktails-list__item"
    >
      <v-cocktail :cocktail="drink" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TProps } from "./v-cocktails-list.types";

import VCocktail from "~/components/pages/cocktail/v-cocktail/v-cocktail.vue";

const props = defineProps<TProps>();
</script>

<style lang="scss">
.cocktails-list {
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  row-gap: 20px;

  list-style: none;

  &__item {
    width: 100%;
    height: auto;
  }
}
</style>
