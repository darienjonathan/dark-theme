<script setup lang="ts"></script>
<template>
  <div class="sidebar__container">
    <v-navigation-drawer class="sidebar__drawer" absolute permanent>
      <v-list class="sidebar__list list">
        <v-list-item link title="List Item 1"></v-list-item>
        <v-list-item link title="List Item 2"></v-list-item>
        <v-list-item link title="List Item 3"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<style scoped>
.sidebar__container {
  width: 100%;
  height: 100%;
  position: relative;
}

.sidebar__drawer {
  width: 100% !important;
  background-color: var(--surface-color);
  color: var(--on-surface-color);
}
</style>
