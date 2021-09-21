import sweetalert2 from '~/mixins/sweetAlert'
import GenericButton from '~/components/common/GenericButton/GenericButton.vue'
import TextField from '~/components/common/TextField/TextField.vue'

export default {
  name: 'LoginComponent',
  layout: 'login',
  mixins: [sweetalert2],
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
      } catch (e) {
        this.$errorAlert('Error al iniciar sesion', 'Ha ocurrido un error verifique sus credenciales')
      }
    },
  },
}
