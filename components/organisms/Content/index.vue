<script setup lang="ts">
import { useThemeStore } from "~/store/theme";

const store = useThemeStore();
const items = Array.from({ length: 15 }, (_, v) => ({
  title: "Item " + (v + 1),
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
}));
</script>
<template>
  <div class="content">
    <div class="content__theme">
      <span>Current Theme</span>
      <v-chip
        :prepend-icon="
          store.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        >{{ store.theme }}</v-chip
      >
    </div>
    <div class="content__grid grid">
      <template v-for="item in items">
        <v-card class="grid__item">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </template>
    </div>
  </div>
  <v-fab
    class="fab"
    icon="mdi-plus"
    :color="store.theme === 'light' ? 'secondary' : 'error'"
  />
</template>
<style scoped>
.content {
  width: 100%;
  height: 100%;
}

.content__theme {
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
}

.grid__item {
  background-color: var(--primary-color);
  color: var(--on-primary-color);
  font-weight: bold !important;
}

.fab {
  position: absolute;
  bottom: 48px;
  right: 80px;
  background-color: var(--secondary-color) !important;
  color: var(--on-secondary-color) !important;
}
</style>
