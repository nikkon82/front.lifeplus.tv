import mutations from './mutations'
import state from './state'
import getters from './getters'
import actions from './actions'

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}