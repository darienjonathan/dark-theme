<script setup lang="ts">
import Header from "@/components/organisms/Header/index.vue";
</script>
<template>
  <v-container class="container" fluid>
    <v-row><Header/></v-row>
    <v-row>
      <v-col class="v-col-2"> Sidebar </v-col>
      <v-col class="v-col-auto"> Content </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.container {
  min-height: 100vh;
}
</style>
