export default {
    data() {
        return {
            user: this.$auth.user,
        }
    },
    methods: {
        async logout() {
            await this.$auth.logout()
        },
    },
}