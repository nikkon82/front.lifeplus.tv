export default {
    addNotification(ctx, payload) {
        return new Promise((resolve) => {
            ctx.commit('ADD_NOTIFICATIONS', payload)
            resolve(true)
        })
    },
    removeNotification(ctx, payload) {
        return new Promise((resolve) => {
            ctx.commit('REMOVE_NOTIFICATIONS', payload)
            resolve(true)
        })
    }
}
