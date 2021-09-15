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
            this.$get('https://jsonplaceholder.typicode.com/users', (res) => {
                console.log(res, 'response')
            })
        }
    }
}