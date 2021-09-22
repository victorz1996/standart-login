<template>
  <v-text-field
    v-model="model"
    :type="type == 'password' && show ? 'text' : 'password' ? type : type"
    :placeholder="placeholder"
    :label="label"
    :outlined="outlined"
    :prepend-icon="prependIcon"
    :append-icon="appendIconC"
    :required="required"
    @click:append="type == 'password' ? (show = !show) : () => {}"
  />
</template>
<script src="./text-field.js"></script>
