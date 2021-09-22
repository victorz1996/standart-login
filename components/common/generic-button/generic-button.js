
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
      type: String,
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
          break
        case 'standard':
          elevation = 10
          break
        case 'high':
          elevation = 20
          break

        default:
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
