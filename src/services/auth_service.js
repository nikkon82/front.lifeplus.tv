import { http } from './http_service'
import jwt from 'jsonwebtoken'

export function register(user) {
    return http().post('/auth/register', user)
}

export function addClient(user) {
    return http().post('/auth/add-client', user)
}

export function updateProspect(id, data) {
    return http().post(`/auth/update-prospect/${id}`, data)
}

export function login(user) {
    return http().post('/auth/login', user)
}

export function isLoggedIn() {
    const token = localStorage.getItem('lifeplus-token')
    return token != null
}

export function logout() {
    http().get('/auth/logout')
    localStorage.removeItem('lifeplus-token')
}

export function getAccessToken() {
    const token = localStorage.getItem('lifeplus-token')
    if (!token) {
        return null
    }

    const tokenData = jwt.decode(token)
    return tokenData.user.access_token
}

export function getUserRole() {
    const token = localStorage.getItem('lifeplus-token')
    if (!token) {
        return null
    }

    const tokenData = jwt.decode(token)
    return tokenData.user.user.role
}

export function getProfile() {
    return http().get('/auth/profile')
}

export function forgotPassword(data) {
    return http().post('/auth/forgot-password', data)
}

export function resetPassword(data) {
    return http().post('/auth/reset-password', data)
}

export function emailVerification(data) {
    return http().post('/auth/email-verification', data)
}

export function resendEmailVerification(data) {
    return http().post('/auth/email-verification-resend', data)
}

