import { mapGetters } from 'vuex'
import GenericButton from '../common/generic-button/generic-button.vue'

export default {
    components: { GenericButton },
    computed: {
        ...mapGetters(['getInfoSitec'])
    },
    methods: {
        volver() {
            this.$router.push('/')
        },
    }

}