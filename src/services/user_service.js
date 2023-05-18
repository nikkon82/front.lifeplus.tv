import {http, httpFile} from "./http_service"

export function showProspectPage(id) {
    return http().get(`/profile/prospect-page/${id}`)
}

export function updateProfile(id, data) {
    return http().post(`/profile/update/${id}`, data)
}

export function updateProfileAvatar(id, data) {
    return httpFile().post(`/profile/update/${id}/avatar`, data)
}

export function updateProfileAuto(id, data) {
    return httpFile().post(`/profile/update/${id}/photo_auto`, data)
}

export function updateProfileMoney(id, data) {
    return httpFile().post(`/profile/update/${id}/photo_money`, data)
}

export function updateProspect(id, data) {
    return http().post(`/profile/update/prospect/${id}`, data)
}

export function deleteUserProspect(id) {
    return http().delete(`/profile/prospect-delete/${id}`)
}

export function restoreUserProspect(id) {
    return http().post(`/profile/prospect-restore/${id}`)
}

export function changeProfilePassword(id, data) {
    return http().post(`/profile/update/${id}/password`, data)
}

export function loadProspects() {
    return http().get('/profile/prospects')
}

export function loadProspectsBasket() {
    return http().get('/profile/prospects-basket')
}

export function loadProspectsToday() {
    return http().get('/profile/prospects/today')
}

export function loadProfileAccess() {
    return http().get('/profile/access')
}

export function showPartnerAccess(user) {
    return http().get(`/partner-access/${user}`)
}

export function loadProspectsCount() {
    return http().get('/profile/prospects/count')
}