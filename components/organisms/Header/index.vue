<script setup lang="ts">
import { useThemeStore } from "~/store/theme";

const store = useThemeStore();
const handletoggleCurrentTheme = () => {
  // storeを使わない場合
  toggleCurrentTheme();

  // storeを使う場合
  // store.toggleCurrentTheme();
}
</script>
<template>
  <v-container fluid class="header">
    <v-row class="align-center justify-space-between" no-gutters>
      <v-col class="v-col-auto header__logo">My Application</v-col>
      <v-col class="v-col-auto header__icon">
        <v-btn
          class="icon icon--dark"
          icon="mdi-weather-sunny"
          size="large"
          @click="handletoggleCurrentTheme"
        ></v-btn>
        <v-btn
          class="icon icon--light"
          icon="mdi-weather-night"
          size="large"
          @click="handletoggleCurrentTheme"
        ></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.header {
  color: var(--on-surface-color);
  background-color: var(--surface-color);
  width: 100%;
}

.header__logo {
  font-weight: bold;
}

.header__icon {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.icon {
  background-color: var(--primary-color);
  color: var(--on-primary-color);
  display: none;
}

html:is(.theme-dark) .icon {
  --display-dark: block;
  --display-light: none;
}

html:is(.theme-light) .icon {
  --display-dark: none;
  --display-light: block;
}

.icon.icon--dark {
  display: var(--display-dark);
}

.icon.icon--light {
  display: var(--display-light);
}
</style>
