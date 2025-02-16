<template>
  <section v-if="cocktail && status !== 'pending'" class="cocktail-page">
    <v-cocktails-list :cocktail="cocktail" />
  </section>

  <section v-if="!cocktail && status === 'pending'" class="cocktail-page">
    Content loading...
  </section>

  <v-error
    v-if="!cocktail && status !== 'pending'"
    error-code="Cocktails could not be found."
  />
</template>

<script setup lang="ts">
import type { TCocktailType } from "~/stores/cocktails/cocktails.types";

import { useCocktailsStore } from "~/stores/cocktails/cocktails";
import VCocktailsList from "~/components/pages/cocktail/v-cocktails-list/v-cocktails-list.vue";
import VError from "~/components/kit/v-error/v-error.vue";

const route = useRoute();
const cocktailKey: TCocktailType = route.params.cocktail as TCocktailType;

const cocktailsStore = useCocktailsStore();
const cocktail = cocktailsStore.getCocktail(cocktailKey);

const { status } = await useLazyAsyncData(
  "cocktail",
  async () => await cocktailsStore.fetchCocktail(cocktailKey).then(() => true),
  {
    immediate: !cocktail.value,
  },
);
</script>

<style lang="scss">
.cocktail-page {
  width: 100%;
  height: auto;

  padding: 50px 100px;

  @include media-mobile {
    padding: 20px;
  }
}
</style>
