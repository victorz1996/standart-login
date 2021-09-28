export const state = () => ({
    infoSitec: {}
})

export const mutations = {
    setInfoSitec(states, value) {
        states.infoSitec = value
    }
}
export const getters = {
    getInfoSitec: (states) => {
        return states.infoSitec
    }
}