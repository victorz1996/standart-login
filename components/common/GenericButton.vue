<template>
  <v-btn
    :color="color"
    :icon="icon"
    :text="text"
    :outlined="outlined"
    :disabled="disabled"
    :rounded="rounded"
    :loading="loading"
    :elevation="elevationC"
    :fab="fab"
    :dark="dark"
    @click="click"
    @dblclick="dblclick"
  >
    <slot></slot>
  </v-btn>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SimpleButton',
  props: {
    color: {
      type: String,
      default: '',
    },
    elevation: {
      type: String,
      default: 'none',
    },
    icon: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    fab: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click(event) {
      this.$emit('click', event)
    },
    dblclick(event) {
      this.$emit('dblclick', event)
    },
  },
  computed: {
    elevationC() {
      let elevation = 0
      switch (this.elevation) {
        case 'none':
          elevation = 0
          break
        case 'standard':
          elevation = 10
          break
        case 'high':
          elevation = 20
          break

        default:
          elevation = 0
          break
      }
      return elevation
    },
  },
})
</script>
