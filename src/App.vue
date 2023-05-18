<template>
    <router-view />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import * as auth from './services/auth_service'

export default {
    name: 'App',
    data: () => ({
        //
    }),
    created() {
        this.checkUserState()
            .then(() => {
                if (this.isLoggedIn) {
                    this.setProfile()
                }
            })
            .catch (() => {
                auth.logout()
            })
    },
    computed: {
        ...mapGetters({
            isLoggedIn: 'user/loggedIn',
            profile: 'user/profile',
        })
    },
    methods: {
        ...mapActions({
            checkUserState: 'user/setLoggedInState',
            setProfile: 'user/setProfile'
        })
    }
};
</script>
