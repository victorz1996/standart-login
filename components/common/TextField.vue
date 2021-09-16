<template>
  <v-text-field
    v-model="model"
    :type="type"
    placeholder="Username"
    label="Username"
    outlined
  />
</template>
<script>
export default {
  name: 'TextField',
  props: {
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      model: '',
    }
  },
}
</script>
