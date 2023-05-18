<template>
    <v-container
        id="users"
        fluid
        tag="section"
    >
        <v-row>
            <v-col
                cols="12"
            >
                <v-data-table
                    :headers="headers"
                    :items="users"
                    :search="search"
                    sort-by="id"
                    class="elevation-1"
                    :loading="loading"
                    loading-text="Загружается... Пожалуйста ждите"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>All users</v-toolbar-title>
                            <v-divider
                                class="mx-4"
                                inset
                                vertical
                            ></v-divider>
                            <v-spacer/>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                            <v-spacer/>
                            <v-btn
                                color="primary"
                                dark
                                class="mb-2"
                                :to="{ name: 'addUser' }"
                            >
                                <v-icon>mdi-account-plus-outline</v-icon>
                            </v-btn>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.id="{ item }">
                        {{ item.id }}
                    </template>
                    <template v-slot:item.name="{ item }">
                        <b class="font-weight-bold" style="color: #0288D1">{{ item.name }}</b>
                        <b class="font-weight-bold" v-if="item.last_name">, {{ item.last_name }}</b>
                    </template>
                    <template v-slot:item.lr_number="{ item }">
                        {{ item.lr_number }}
                    </template>
                    <template v-slot:item.role="{ item }">
                        <v-chip
                            :color="getColorRole(item.role)"
                            dark
                            outlined
                            small
                            v-if="item.role === 'guest'"
                        >Гость</v-chip>
                        <v-chip
                            :color="getColorRole(item.role)"
                            dark
                            outlined
                            small
                            v-if="item.role === 'partner'"
                        >Партнер</v-chip>
                        <v-chip
                            :color="getColorRole(item.role)"
                            dark
                            outlined
                            small
                            v-if="item.role === 'admin'"
                        >Администратор</v-chip>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            small
                            class="mr-3"
                            @click="showUser(item.id)"
                        >
                            mdi-account-circle
                        </v-icon>
                        <v-icon
                            small
                            class="mr-2"
                            @click="editUser(item.id)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            v-if="item.deleted_at"
                            small
                            @click="restoreUser(item)"
                        >
                            mdi-account-reactivate
                        </v-icon>
                        <v-icon
                            v-else
                            small
                            class="mr-2"
                            @click="deleteUser(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Users",
    data: () => ({
        search: '',
        headers: [
            { text: 'ID', align: 'start', value: 'id' },
            { text: 'Name', align: 'start', value: 'name' },
            { text: 'LR number', align: 'start', value: 'lr_number' },
            { text: 'Role', value: 'role' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        loading: true
    }),
    computed: {
        ...mapGetters({
            users: 'user/getUsers',
        })
    },
    created () {
        this.initialize()
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            loadUsers: 'user/loadUsers',
            deletingUser: 'user/deleteUser',
            restoringUser: 'user/restoreUser',
        }),
        initialize () {
            this.loadUsers()
                .then(() => {
                    this.loading = false
                })
        },
        getColorRole (role) {
            if (role === 'admin') return 'red'
            else if (role === 'guest') return 'orange'
            else return 'green'
        },
        showUser (userId) {
            this.$router.push({ name: 'showUser', params: { id: userId } })
        },
        editUser (userId) {
            this.$router.push({ name: 'editUser', params: { id: userId } })
        },
        deleteUser(user) {
            this.loading = true
            this.deletingUser(user)
                .then((response) => {
                    if (response.data && response.data.success) {
                        this.errors = {}
                        this.loading = false
                        this.addNotification({
                            show: true,
                            text: response.data.message,
                            color: 'success'
                        })
                    }
                })
                .catch((error) => {
                    switch (error.response.status) {
                        case 500:
                            this.loading = false
                            this.addNotification({
                                show: true,
                                text: error.response.data.message,
                                color: 'error'
                            })
                            break
                        default:
                            this.loading = false
                            this.addNotification({
                                show: true,
                                text: error.response.data.message,
                                color: 'error'
                            })
                            break
                    }
                })
        },
        restoreUser(user) {
            this.loading = true
            this.restoringUser(user)
                .then((response) => {
                    if (response.data && response.data.success) {
                        this.errors = {}
                        this.loading = false
                        this.addNotification({
                            show: true,
                            text: response.data.message,
                            color: 'success'
                        })
                    }
                })
                .catch((error) => {
                    switch (error.response.status) {
                        case 500:
                            this.loading = false
                            this.addNotification({
                                show: true,
                                text: error.response.data.message,
                                color: 'error'
                            })
                            break
                        default:
                            this.loading = false
                            this.addNotification({
                                show: true,
                                text: error.response.data.message,
                                color: 'error'
                            })
                            break
                    }
                })
        },
    },
    mounted () {
        this.loadUsers()
    }
}
</script>

<style lang="sass">
.v-chip.v-size--small
    height: 26px

.v-chip__content
    font-size: 13px
</style>
