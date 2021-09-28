<template>
  <div>
    <h2>Bienvenido {{ user.firstName }} ({{ user.login }})</h2>
    <v-btn color="error" depressed @click="logout()">Salir</v-btn>
    <v-container class="mt-5">
      <v-data-table
        :headers="headers"
        :items="zonas"
        :items-per-page="10"
        class="elevation-3"
      >
        <template #[`item.actions`]="{ item }">
          <v-icon @click="seeItem(item)"> mdi-eye </v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>
<script src="./home.js" />
<style src="./home.css"></style>
