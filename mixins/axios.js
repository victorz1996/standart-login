const axios = {
    methods: {
        async $get(endpoint, callback) {
            try {
                const res = await this.$axios.get(endpoint)
                callback(res)
            } catch (error) {
                callback(error.response)
            }
        },
        async $getOne(endpoint, id, callback) {
            try {
                const res = await this.$axios.get(`${endpoint}/${id}`)
                callback(res)
            } catch (error) {
                callback(error.response)
            }
        },
        async $post(endpoint, object, callback) {
            try {
                const res = await this.$axios.post(endpoint, object)
                callback(res)
            } catch (error) {
                callback(error.response)
            }
        },
        async $put(endpoint, id, object, callback) {
            try {
                const res = await this.$axios.put(`${endpoint}/${id}`, object)
                callback(res)
            } catch (error) {
                callback(error.response)
            }
        },
        async $delete(endpoint, id, callback) {
            try {
                const res = await this.$axios.delete(`${endpoint}/${id}`)
                callback(res)
            } catch (error) {
                callback(error.response)
            }
        },
        async $patch(endpoint, id, object, callback) {
            try {
                const res = await this.$axios.patch(`${endpoint}/${id}`, object)
                callback(res)
            } catch (error) {
                callback(error.response)
            }
        }
    }
}

export default axios