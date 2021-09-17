export default {
  name: 'TextField',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    prependIcon: {
      type: String,
      default: '',
    },
    appendIcon: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      model: null,
      show: false,
      rulesA: {
        required: [val => (val || '').length > 0 || 'This field is required'],
        // required: (value) => !!value || 'Required.',
        email: (value) => !value.includes('@') || 'Invalid Email',
      }
    }
  },
  computed: {
    appendIconC() {
      let icon = ''
      if (this.type === 'password' && this.show) {
        icon = 'mdi-eye'
      } else if (this.type === 'password' && !this.show) {
        icon = 'mdi-eye-off'
      } else {
        icon = this.appendIcon
      }
      return icon
    },
    rulesC() {
      let rules = []
      switch (this.rules) {
        case 'required':
          rules = this.rulesA.required
          break;
        case 'email':
          rules = this.rulesA.email
          break;
        default:
          break;
      }
      return rules
    }
  },
  watch: {
    model(val) {
      this.emitedModel(val)
    },
  },
  methods: {
    emitedModel(val) {
      // console.log(val)
      this.$emit('model', val)
    },
  },
}
