<template>
    <v-app>
        <router-view></router-view>
        <v-snackbar
            @input="updateNotification($event, index)"
            v-for="(snackbar, index) in allNotifications"
            :key="index"
            :value="snackbar.show"
            :color="snackbar.color"
        >
            {{ snackbar.text }}
            <template v-slot:action="{ attrs }">
                <v-btn
                    dark
                    text
                    v-bind="attrs"
                    @click="removeNotification(index)"
                >
                    <v-icon>mdi-close-circle-outline</v-icon>
                </v-btn>
            </template>
        </v-snackbar>
    </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "AuthLayout",
    computed: {
        ...mapGetters({
            loggedIn: 'user/loggedIn',
            allNotifications: 'application/getNotifications'
        })
    },
    methods: {
        ...mapActions({
            removeNotification: 'application/removeNotification',
        }),
        updateNotification(show, index) {
            if (!show) {
                this.removeNotification(index)
            }
        }
    }
}
</script>
