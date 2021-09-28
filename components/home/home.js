import axios from '@/mixins/axios'
export default {
    mixins: [axios],
    data() {
        return {
            zonas: [],
            user: this.$auth.user,
            headers: [
                { text: 'Id', value: 'id' },
                { text: 'Descripcion', value: 'descripcion' },
                { text: 'Actions', value: 'actions', sortable: false },
            ]
        }
    },
    mounted() {
        this.getZonasSitec()
    },
    methods: {
        async logout() {
            await this.$auth.logout()
        },
        getZonasSitec() {
            this.$list('../services/facturacion/api/zona-sitecs', (res, success) => {
                if (success) {
                    this.zonas = res.data
                }
            })
        },
        seeItem(item) {
            this.$store.commit('setInfoSitec', item)
            this.$router.push(`/zona-info-detalle`)

        }
    },
}