<template>
  <section class="error-stub">
    <h1>
      {{ props.errorCode }}
    </h1>

    <button @click="redirectToHome">Go back home</button>
  </section>
</template>

<script setup lang="ts">
import type { TProps } from "./v-error.types";

import { redirectToHome } from "~/utils/redirectToHome";

const props = defineProps<TProps>();
</script>

<style lang="scss">
.error-stub {
  width: auto;
  height: auto;

  margin: auto;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 25px;

  text-align: center;
}
</style>
