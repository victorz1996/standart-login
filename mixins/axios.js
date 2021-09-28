const axios = {
    methods: {
        async $list(endpoint, callback) {
            let success
            try {
                const res = await this.$axios.get(endpoint)
                success = true
                callback(res, success)
            } catch (error) {
                success = false
                callback(error.response, success)
            }
        },
        async $listOne(endpoint, id, callback) {
            try {
                const res = await this.$axios.get(`${endpoint}/${id}`)
                callback(res)
            } catch (error) {
                callback(error.response)
            }
        },
        async $create(endpoint, object, callback) {
            try {
                const res = await this.$axios.post(endpoint, object)
                callback(res)
            } catch (error) {
                callback(error.response)
            }
        },
        async $update(endpoint, id, object, callback) {
            try {
                const res = await this.$axios.put(`${endpoint}/${id}`, object)
                callback(res)
            } catch (error) {
                callback(error.response)
            }
        },
        async $remove(endpoint, id, callback) {
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
