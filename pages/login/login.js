import axios from '@/mixins/axios'
export default {
    name: 'Login',
    layout: 'login',
    mixins: [axios],
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            this.$get('users', (res) => {
                console.log(res, 'response')
            })
        }
    }
}