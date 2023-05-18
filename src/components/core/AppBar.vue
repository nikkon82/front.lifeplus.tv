<template>
    <v-app-bar
        id="app-bar"
        absolute
        app
        color="transparent"
        flat
        height="75"
    >
        <v-btn
            class="mr-3"
            elevation="1"
            fab
            small
            @click="setDrawer(!drawer)"
        >
            <v-icon v-if="!drawer">
                mdi-forwardburger
            </v-icon>

            <v-icon v-else>
                mdi-backburger
            </v-icon>
        </v-btn>

        <v-toolbar-title
            class="hidden-sm-and-down font-weight-light"
            v-text="$route.name"
        />

        <v-spacer />

        <div class="mx-3" />

        <v-menu
            v-if="$store.state.user.profile.role === 'admin'"
            offset-y
            min-width="200"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="ml-2"
                    min-width="0"
                    text
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-key</v-icon>
                </v-btn>
            </template>
            <v-list class="top-bar">
                <v-list-item :to="{name: 'Users'}">
                    <v-list-item-icon>
                        <v-icon color="green">mdi-account-supervisor</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            Users
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{name: 'Prospects'}">
                    <v-list-item-icon>
                        <v-icon color="green">mdi-account-question-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            Prospects
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-switch
            v-model="$vuetify.theme.dark"
            class="mx-2 pa-0"
            color="secondary"
            hide-details
        >
            <template v-slot:label>
                <v-icon>mdi-theme-light-dark</v-icon>
            </template>
        </v-switch>

        <v-btn
            class="ml-2"
            min-width="0"
            text
            :to="{name: 'Dashboard'}"
        >
            <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>

        <v-menu
            offset-y
            min-width="200"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="ml-2"
                    min-width="0"
                    text
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </template>
            <v-list class="top-bar">
                <v-list-item
                    :to="{name: 'Profile'}"
                >
                    <v-list-item-icon>
                        <v-icon color="green">mdi-face-man</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            Моя страница
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider/>
                <v-list-item @click="logout">
                    <v-list-item-icon>
                        <v-icon>mdi-location-exit</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            Выйти
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: "AppBar",
    props: {
        value: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapState(['drawer']),
    },
    methods: {
        ...mapMutations({
            setDrawer: 'SET_DRAWER',
        }),
        ...mapActions({
            logoutUser: 'user/logoutUser',
            addNotification: 'application/addNotification',
        }),
        logout() {
            this.logoutUser()
                .then(() => {
                    return this.addNotification({
                        text: 'Вы вышли из системы',
                        show: true,
                        color: 'success'
                    })
                })
                .then(() => {
                    this.$router.push('/login')
                })
        },
    }
}
</script>

<style lang="sass">
.top-bar
    .v-list-item__icon
        margin-right: 10px !important
        margin-top: 14px
</style>
