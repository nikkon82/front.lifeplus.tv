import * as auth from '../../services/auth_service'
import * as adminService from '../../services/admin_service'
import * as userService from '../../services/user_service'
import jwt from 'jsonwebtoken'

export default {
    registerUser(ctx, payload) {
        return new Promise((resolve, reject) => {
            auth.register(payload)
                .then((response) => {
                    if (response.data) {
                        resolve(response)
                    } else {
                        reject(response)
                    }
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    loginUser({commit, dispatch}, payload) {
        return new Promise((resolve, reject) => {
            auth.login(payload)
                .then((response) => {
                    if (response.status === 200) {
                        const token = jwt.sign({ user: response.data }, 'larazxmnlsevuekpwefiskdvnvnvnenvlifepluslgnlginteam2022auihv');
                        localStorage.setItem('lifeplus-token', token)
                        commit('SET_LOGGED_IN', true)
                        dispatch('setProfile')
                            .then(() => resolve(response))
                    } else {
                        reject(response)
                    }
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    logoutUser({commit}) {
        return new Promise((resolve) => {
            auth.logout()
            commit('SET_LOGGED_IN', false)
            resolve(true)
        })
    },
    setLoggedInState({commit}) {
        return new Promise((resolve) => {
            if (auth.isLoggedIn()) {
                commit('SET_LOGGED_IN', true)
                resolve(true)
            } else {
                commit('SET_LOGGED_IN', false)
                resolve(false)
            }
        })
    },
    forgotPassword(ctx, payload) {
        return new Promise((resolve, reject) => {
            auth.forgotPassword(payload)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    resetPassword(ctx, payload) {
        return new Promise((resolve, reject) => {
            auth.resetPassword(payload)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    verifyEmail(ctx, payload) {
        return new Promise((resolve, reject) => {
            auth.emailVerification(payload)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },
    resendVerifyEmail(ctx, payload) {
        return new Promise((resolve, reject) => {
            auth.resendEmailVerification(payload)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },
    setProfile({commit}) {
        return new Promise((resolve, reject) => {
            auth.getProfile()
                .then((response) => {
                    commit('SET_PROFILE', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    addClient(ctx, payload) {
        return new Promise((resolve, reject) => {
            auth.addClient(payload)
                .then((response) => {
                    if (response.data) {
                        resolve(response)
                    } else {
                        reject(response)
                    }
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    loadUsers({commit}) {
        return new Promise((resolve, reject) => {
            adminService.loadUsers()
                .then((response) => {
                    commit('SET_USERS', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    loadProspects({commit}) {
        return new Promise((resolve, reject) => {
            userService.loadProspects()
                .then((response) => {
                    commit('SET_PROSPECTS', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    loadProspectsBasket({commit}) {
        return new Promise((resolve, reject) => {
            userService.loadProspectsBasket()
                .then((response) => {
                    commit('SET_PROSPECTS_BASKET', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    loadNewProspects({commit}) {
        return new Promise((resolve, reject) => {
            userService.loadProspectsToday()
                .then((response) => {
                    commit('SET_PROSPECTS_TODAY', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    loadProfileAccess({commit}) {
        return new Promise((resolve, reject) => {
            userService.loadProfileAccess()
                .then((response) => {
                    commit('SET_PROFILE_ACCESS', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    showPartnerAccess({commit}, user) {
        return new Promise((resolve, reject) => {
            userService.showPartnerAccess(user)
                .then((response) => {
                    commit('SET_PARTNER_ACCESS', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    loadCountProspects({commit}) {
        return new Promise((resolve, reject) => {
            userService.loadProspectsCount()
                .then((response) => {
                    commit('SET_PROSPECTS_COUNT', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    addUser(ctx, payload) {
        return new Promise((resolve, reject) => {
            adminService.addUser(payload)
                .then((response) => {
                    if (response.data) {
                        resolve(response)
                    } else {
                        reject(response)
                    }
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    loadOneUser({commit}, userId) {
        return new Promise((resolve, reject) => {
            adminService.loadOneUser(userId)
                .then((response) => {
                    commit('SET_USER', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    loadUserPackage({commit}, userId) {
        return new Promise((resolve, reject) => {
            adminService.loadUserPackage(userId)
                .then((response) => {
                    commit('SET_USER_PACKAGE', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    loadUserAccess({commit}, userId) {
        return new Promise((resolve, reject) => {
            adminService.loadUserAccess(userId)
                .then((response) => {
                    commit('SET_USER_ACCESS', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    showProspectPage({commit}, prospectId) {
        return new Promise((resolve, reject) => {
            userService.showProspectPage(prospectId)
                .then((response) => {
                    commit('SET_PROSPECT', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    updateUser({commit}, user) {
        return new Promise(() => {
            commit('UPDATE_USER', user)
        })
    },
    updateProfile({commit}, user) {
        return new Promise(() => {
            commit('UPDATE_USER', user)
            commit('SET_PROFILE', user.user)
        })
    },
    deleteUser({commit}, user) {
        return new Promise((resolve, reject) => {
            adminService.deleteUser(user.id)
                .then((response) => {
                    commit('DELETE_USER', response.data.user)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    restoreUser({commit}, user) {
        return new Promise((resolve, reject) => {
            adminService.restoreUser(user.id)
                .then((response) => {
                    commit('RESTORE_USER', response.data.user)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
}
