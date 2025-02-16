<template>
  <p class="cocktail-ingredient">
    {{ ingredientDescription }}
  </p>
</template>

<script setup lang="ts">
import type { TProps } from "./v-cocktail-ingredient.types";

const props = defineProps<TProps>();

const ingredientDescription = computed<string>(() => {
  let result = props.ingredient.ingredient;

  if (props.ingredient.measure !== null) {
    result += ` - ${props.ingredient.measure}`;
  }

  return result;
});
</script>

<style scoped lang="scss">
.cocktail-ingredient {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
