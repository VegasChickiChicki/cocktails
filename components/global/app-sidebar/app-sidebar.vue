<template>
  <aside class="sidebar" :class="sidebarClasses">
    <ul class="sidebar__list">
      <li
        v-for="(cocktail, cocktailKey) in COCKTAILS_LIST"
        :key="`cocktail-${cocktailKey}`"
        class="sidebar__list-item"
      >
        <nuxt-link class="sidebar__list-link" :to="getCocktailPath(cocktail)">
          {{ cocktail }}
        </nuxt-link>
      </li>
    </ul>
  </aside>

  <teleport to="body">
    <button
      class="sidebar-activator"
      :class="sidebarActivatorClasses"
      type="button"
      @click="toggleSidebar"
    >
      <span class="sidebar-activator__line" />
      <span class="sidebar-activator__line" />
      <span class="sidebar-activator__line" />
    </button>
  </teleport>
</template>

<script setup lang="ts">
import { COCKTAILS_LIST } from "~/constants/cocktails-list.constants";
import { getCocktailPath } from "~/utils/getCocktailPath";

const route = useRoute();

const visibleState = ref<boolean>(false);

const sidebarClasses = computed<Record<string, boolean>>(() => {
  return {
    "sidebar--visible": visibleState.value,
  };
});

const sidebarActivatorClasses = computed<Record<string, boolean>>(() => {
  return {
    "sidebar-activator--active": visibleState.value,
  };
});

const toggleSidebar = () => {
  visibleState.value = !visibleState.value;
};
const hideSidebar = () => {
  visibleState.value = false;
};

watch(() => route.fullPath, hideSidebar);
</script>

<style lang="scss">
.sidebar {
  $this: &;

  width: 250px;
  height: auto;

  padding: 50px 0;

  border-left: 1px solid var(--dark);
  border-right: 1px solid var(--dark);
  background-color: #ffffff;

  @include media-mobile {
    width: 100%;

    padding: 0;

    border-top: 1px solid var(--dark);
    border-left: none;
    border-right: none;

    visibility: hidden;
    transform: translateX(-100%);
    transition:
      transform 0.2s,
      visibility ease 0.2s 0.2s;

    position: fixed;
    z-index: 2;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &--visible {
    visibility: visible;
    transform: translateX(0);
    transition:
      transform 0.2s,
      visibility ease 0.2s;
  }

  &__list {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    list-style: none;
  }

  &__list-item {
    width: 100%;
    height: auto;
  }

  &__list-link {
    width: 100%;
    height: auto;

    padding: 8px;

    display: inline-block;

    color: var(--dark);
    font-size: 20px;
    text-decoration: none;

    &.router-link-active {
      cursor: default;
      background-color: var(--dark);

      color: var(--light);
    }

    &:hover:not(.router-link-active) {
      background-color: var(--dark);

      color: var(--light);
    }
  }
}
</style>

<style lang="scss">
.sidebar-activator {
  $this: &;

  width: 30px;
  height: 30px;

  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 4px;

  background-color: var(--dark);
  position: fixed;
  z-index: 3;

  bottom: 15px;
  right: 15px;

  &--active {
    #{$this}__line:nth-child(1) {
      transform: translateY(6px) rotate(45deg);
    }

    #{$this}__line:nth-child(2) {
      opacity: 0;
    }

    #{$this}__line:nth-child(3) {
      transform: translateY(-6px) rotate(-45deg);
    }
  }

  @include media-mobile {
    display: flex;
  }

  &__line {
    width: 20px;
    height: 2px;

    display: block;

    background-color: var(--light);
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }
}
</style>
