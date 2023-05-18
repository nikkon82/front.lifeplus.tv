import * as adminService from '../../services/admin_service'
import * as userService from '../../services/user_service'

export default {
    loadAdminProspects({commit}) {
        return new Promise((resolve, reject) => {
            adminService.loadAdminProspects()
                .then((response) => {
                    commit('SET_ADMIN_PROSPECTS', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject (error)
                })
        })
    },
    addProspect(ctx, payload) {
        return new Promise((resolve, reject) => {
            adminService.addProspect(payload)
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
    showProspect({commit}, prospectId) {
        return new Promise((resolve, reject) => {
            adminService.loadOneProspect(prospectId)
                .then((response) => {
                    commit('SET_ADMIN_PROSPECT', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    updateProspect({commit}, prospect) {
        return new Promise(() => {
            commit('UPDATE_PROSPECT', prospect)
        })
    },
    deleteProspect({commit}, prospect) {
        return new Promise((resolve, reject) => {
            adminService.deleteProspect(prospect.id)
                .then((response) => {
                    commit('DELETE_PROSPECT', response.data.prospect)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    deleteUserProspect({commit}, prospect) {
        return new Promise((resolve, reject) => {
            userService.deleteUserProspect(prospect.id)
                .then((response) => {
                    commit('DELETE_USER_PROSPECT', response.data.prospect)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    restoreProspect({commit}, prospect) {
        return new Promise((resolve, reject) => {
            adminService.restoreProspect(prospect.id)
                .then((response) => {
                    commit('RESTORE_PROSPECT', response.data.prospect)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    restoreUserProspect({commit}, prospect) {
        return new Promise((resolve, reject) => {
            userService.restoreUserProspect(prospect.id)
                .then((response) => {
                    commit('RESTORE_USER_PROSPECT', response.data.prospect)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
}
