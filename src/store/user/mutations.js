export default {
    SET_LOGGED_IN(state, payload) {
        state.isLoggedIn = payload
    },
    SET_PROFILE(state, payload) {
        state.profile = payload
    },
    SET_USERS(state, payload) {
        state.users = payload
    },
    SET_PROSPECTS(state, payload) {
        state.prospects = payload
    },
    SET_PROSPECTS_BASKET(state, payload) {
        state.prospectsBasket = payload
    },
    SET_PROSPECTS_TODAY(state, payload) {
        state.newProspects = payload
    },
    SET_PROFILE_ACCESS(state, payload) {
        state.profileAccess = payload
    },
    SET_PARTNER_ACCESS(state, payload) {
        state.partnerAccess = payload
    },
    SET_PROSPECTS_COUNT(state, payload) {
        state.countProspects = payload
    },
    SET_USER(state, payload) {
        state.user = payload
    },
    SET_USER_PACKAGE(state, payload) {
        state.userPackage = payload
    },
    SET_USER_ACCESS(state, payload) {
        state.userAccess = payload
    },
    SET_PROSPECT(state, payload) {
        state.prospect = payload
    },
    UPDATE_USER(state, user) {
        state.users.forEach(u => {
            if(u.id === user.id) {
                u = user
            }
        })
    },
    UPDATE_PROSPECT(state, user) {
        state.users.forEach(u => {
            if(u.id === user.id) {
                u = user
            }
        })
    },
    DELETE_USER(state, user) {
        state.users.map(u => {
            if (u.id === user.id) {
                for (let key in user) {
                    u[key] = user[key]
                }
            }
        })
    },
    RESTORE_USER(state, user) {
        state.users.map(u => {
            if (u.id === user.id) {
                for (let key in user) {
                    u[key] = user[key]
                }
            }
        })
    },
}
