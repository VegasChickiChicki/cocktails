<template>
  <main class="page">
    <div class="page__content">
      <app-sidebar />

      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppSidebar from "~/components/global/app-sidebar/app-sidebar.vue";
</script>

<style lang="scss">
.page {
  width: 100%;
  height: auto;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: stretch;

  &__content {
    width: 100%;
    max-width: $desktop;
    height: auto;

    display: flex;
    justify-content: flex-start;
    align-items: stretch;
  }
}
</style>
