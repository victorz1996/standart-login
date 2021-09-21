export default {
    data() {
        return {
            user: this.$auth.user,
        }
    },
    mounted() {
        this.getZonasSitec()
    },
    methods: {
        async logout() {
            await this.$auth.logout()
        },
        async getZonasSitec() {
        }
    },
}