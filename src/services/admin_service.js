import {http, httpFile} from "./http_service"

export function loadUsers() {
    return http().get('/admin/users')
}

export function addUser(data) {
    return http().post('/admin/users', data)
}

export function loadOneUser(id) {
    return http().get(`/admin/users/${id}`)
}

export function loadUserPackage(id) {
    return http().get(`/admin/user-package/${id}`)
}

export function loadUserAccess(id) {
    return http().get(`/admin/user-access/${id}`)
}

export function updateUser(id, data) {
    return http().put(`/admin/users/${id}`, data)
}

export function updateUserAccess(id, data) {
    return http().post(`/admin/users/${id}/user-access`, data)
}

export function updateAvatar(id, data) {
    return httpFile().post(`/admin/users/${id}/avatar`, data)
}

export function updateUserAuto(id, data) {
    return httpFile().post(`/admin/users/${id}/photo_auto`, data)
}

export function updateUserMoney(id, data) {
    return httpFile().post(`/admin/users/${id}/photo_money`, data)
}

export function changePassword(id, data) {
    return http().post(`/admin/users/${id}/password`, data)
}

export function deleteUser(id) {
    return http().delete(`/admin/users/${id}`)
}

export function restoreUser(id) {
    return http().post(`/admin/users/restore/${id}`)
}

export function loadAdminProspects() {
    return http().get('/admin/prospects')
}

export function addProspect(data) {
    return http().post('/admin/prospects', data)
}

export function loadOneProspect(id) {
    return http().get(`/admin/prospects/${id}`)
}

export function updateProspect(id, data) {
    return http().put(`/admin/prospects/${id}`, data)
}

export function deleteProspect(id) {
    return http().delete(`/admin/prospects/${id}`)
}

export function restoreProspect(id) {
    return http().post(`/admin/prospects/restore/${id}`)
}