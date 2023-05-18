export default {
    ADD_NOTIFICATIONS(state, payload) {
        state.notifications.push(payload)
    },
    REMOVE_NOTIFICATIONS(state, payload) {
        state.notifications.splice(payload, 1)
    }
}
