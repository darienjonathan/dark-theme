<script setup lang="ts"></script>
<template>
  <div class="header">
    <v-container fluid>
      <v-row>
        <v-col class="v-col-auto"> Header </v-col>
        <v-col class="v-col-2">
          <v-icon
            color="green-darken-2"
            icon="mdi-domain"
            size="large"
          ></v-icon>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.header {
  color: var(--on-surface-color);
  background-color: var(--surface-color);
  padding: 20px;
  width: 100%;
}
</style>
