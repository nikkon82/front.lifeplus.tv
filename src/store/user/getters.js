export default {
    loggedIn(state) {
        return state.isLoggedIn
    },
    profile(state) {
        return state.profile
    },
    getUsers(state) {
        return state.users
    },
    getUser(state) {
        return state.user
    },
    getUserAccess(state) {
        return state.userAccess
    },
    getProfileAccess(state) {
        return state.profileAccess
    },
    getPartnerAccess(state) {
        return state.partnerAccess
    },
    getProspects(state) {
        return state.prospects
    },
    getProspectsBasket(state) {
        return state.prospectsBasket
    },
    getProspect(state) {
        return state.prospect
    },
    getNewProspects(state) {
        return state.newProspects
    },
    getCountProspects(state) {
        return state.countProspects
    },
}
