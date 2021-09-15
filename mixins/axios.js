const axios = {
    methods: {
        async $get(endpoint, callback) {
            try {
                const res = await this.$axios.get(endpoint)
                callback(res)
            } catch (error) {
                callback(error.response)
            }
        }
    }
}

export default axios