<template>
  <div>
    <h3>Detalle zonaSitec</h3>
    <div v-if="getInfoSitec" class="mt-5">
      <v-row>
        <v-col sm="6">
          <v-text-field
            label="Id"
            :value="getInfoSitec.id"
            readonly
          ></v-text-field>
        </v-col>
        <v-col sm="6">
          <v-text-field
            label="Descripcion"
            :value="getInfoSitec.descripcion"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6">
          <v-text-field
            label="Estado"
            :value="getInfoSitec.estado"
            readonly
          ></v-text-field>
        </v-col>
        <v-col sm="6">
          <v-text-field
            label="Usuarios"
            :value="getInfoSitec.usuariosAsignado"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <generic-button color="error" class="ml-auto" @click="volver()"
          >Volver</generic-button
        >
      </v-row>
    </div>
  </div>
</template>
<script src="./info-zona.js" />
<style src="./info-zona.css" />
