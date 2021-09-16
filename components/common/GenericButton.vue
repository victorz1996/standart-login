<template>
  <v-btn
    :color="color"
    :icon="icon"
    :text="text"
    :type="type"
    :outlined="outlined"
    :disabled="disabled"
    :rounded="rounded"
    :loading="loading"
    :elevation="elevationC"
    :fab="fab"
    :dark="dark"
    :large="large"
    :small="small"
    :x-large="xLarge"
    :x-small="xSmall"
    :block="block"
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
    type: {
      type: String  ,
      default: 'button',
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
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    xLarge: {
      type: Boolean,
      default: false,
    },
    xSmall: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    }
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
  methods: {
    click(event) {
      this.$emit('click', event)
    },
    dblclick(event) {
      this.$emit('dblclick', event)
    },
  },
})
</script>
