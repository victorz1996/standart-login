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
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$get('users', (res) => {
        console.log(res, 'response')
      })
    },
    login() {
      console.log('This is data login')
    }
  },
}
