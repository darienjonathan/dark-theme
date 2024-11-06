<script setup lang="ts">
import HeaderComponent from "~/components/organisms/Header/index.vue";
import Sidebar from "~/components/organisms/Sidebar/index.vue";
import Content from "~/components/organisms/Content/index.vue";
</script>
<template>
  <div class="container">
    <v-row no-gutters class="container__header" tag="header"
      ><HeaderComponent
    /></v-row>
    <v-row no-gutters>
      <v-col class="v-col-2" tag="aside"><Sidebar /></v-col>
      <v-col class="v-col-10 container__content" tag="main"
        ><Content
      /></v-col>
    </v-row>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.container__header {
  flex-grow: 0;
  border-bottom: 1px solid var(--outline-variant-color);
}
</style>
