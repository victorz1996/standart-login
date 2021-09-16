import axios from '@/mixins/axios'
import GenericButton from '@/components/common/GenericButton.vue'
import TextField from '@/components/common/TextField.vue'

export default {
  name: 'LoginComponent',
  layout: 'login',
  mixins: [axios],
  components: {
    GenericButton,
    TextField,
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        const login = {
          typeDevice: 'WEB',
          username: this.username,
          password: this.password
        }
        await this.$auth.loginWith('local', { data: login })
      } catch (error) {
      }
    },
  },
}
