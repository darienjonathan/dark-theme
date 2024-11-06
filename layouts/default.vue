<template>
  <div class="default">
    <slot />
  </div>
</template>
<style scoped>
.default {
  min-height: 100vh;
  color: var(--on-background-color);
  background-color: var(--background-color);
}
</style>
