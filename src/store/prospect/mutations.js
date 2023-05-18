export default {
    SET_ADMIN_PROSPECTS(state, payload) {
        state.adminProspects = payload
    },
    SET_ADMIN_PROSPECT(state, payload) {
        state.adminProspect = payload
    },
    UPDATE_PROSPECT(state, prospect) {
        state.adminProspects.forEach(p => {
            if(p.id === prospect.id) {
                p = prospect
            }
        })
    },
    DELETE_PROSPECT(state, prospect) {
        state.adminProspects.map(p => {
            if (p.id === prospect.id) {
                for (let key in prospect) {
                    p[key] = prospect[key]
                }
            }
        })
    },
    DELETE_USER_PROSPECT(state, prospect) {
        state.adminProspects.map(p => {
            if (p.id === prospect.id) {
                for (let key in prospect) {
                    p[key] = prospect[key]
                }
            }
        })
    },
    RESTORE_PROSPECT(state, prospect) {
        state.adminProspects.map(p => {
            if (p.id === prospect.id) {
                for (let key in prospect) {
                    p[key] = prospect[key]
                }
            }
        })
    },
    RESTORE_USER_PROSPECT(state, prospect) {
        state.adminProspects.map(p => {
            if (p.id === prospect.id) {
                for (let key in prospect) {
                    p[key] = prospect[key]
                }
            }
        })
    },
}
