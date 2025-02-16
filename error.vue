<template>
  <v-error :error-code="errorCode" />
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

import VError from "~/components/kit/v-error/v-error.vue";

const props = defineProps<{
  error: NuxtError;
}>();

const errorCode = computed<string>(() => {
  return String(props.error.statusCode);
});
</script>
