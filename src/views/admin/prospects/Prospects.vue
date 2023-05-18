<template>
    <v-container
        id="prospects"
        fluid
        tag="section"
    >
        <v-row>
            <v-col
                cols="12"
            >
                <v-data-table
                    :headers="headers"
                    :items="prospects"
                    :search="search"
                    class="elevation-1"
                    :loading="loading"
                    loading-text="Загружается... Пожалуйста ждите"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>All prospects</v-toolbar-title>
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
                                :to="{ name: 'addProspect' }"
                            >
                                <v-icon>mdi-account-plus-outline</v-icon>
                            </v-btn>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.id="{ item }">
                        {{ item.id }}
                    </template>
                    <template v-slot:item.name="{ item }">
                        {{ item.name }}
                    </template>
                    <template v-slot:item.user_id="{ item }">
                        {{ item.user_id }}
                    </template>
                    <template v-slot:item.phone="{ item }">
                        {{ item.phone }}
                    </template>
                    <template v-slot:item.phone_whatsapp="{ item }">
                        {{ item.phone_whatsapp }}
                    </template>
                    <template v-slot:item.phone_viber="{ item }">
                        {{ item.phone_viber }}
                    </template>
<!--                    <template v-slot:item.telegram="{ item }">-->
<!--                        {{ item.telegram }}-->
<!--                    </template>-->
                    <template v-slot:item.instrument="{ item }">
                        {{ item.instrument }}
                    </template>
                    <template v-slot:item.action_bot="{ item }">
                        <v-chip
                            :color="getColorActionBot(item.action_bot)"
                            dark
                            outlined
                            small
                        >
                            {{ item.action_bot }}
                        </v-chip>
                    </template>
                    <template v-slot:item.step="{ item }">
                        <v-chip
                            :color="getColorStep(item.step)"
                            dark
                            outlined
                            small
                        >
                            {{ item.step }}
                        </v-chip>
                    </template>
                    <template v-slot:item.result="{ item }">
                        <v-chip
                            :color="getColorResult(item.result)"
                            dark
                            outlined
                            small
                            v-if="item.result"
                        >
                            {{ item.result }}
                        </v-chip>
                    </template>
                    <template v-slot:item.created_at="{ item }">
                        {{ item.created_at }}
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            small
                            class="mr-3"
                            @click="showProspect(item.id)"
                        >
                            mdi-account-circle
                        </v-icon>
                        <v-icon
                            small
                            class="mr-2"
                            @click="editProspect(item.id)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            v-if="item.deleted_at"
                            small
                            @click="restoreProspect(item)"
                        >
                            mdi-account-reactivate
                        </v-icon>
                        <v-icon
                            v-else
                            small
                            class="mr-2"
                            @click="deleteProspect(item)"
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
    name: "Prospects",
    data: () => ({
        search: '',
        headers: [
            { text: 'ID', align: 'start', value: 'id' },
            { text: 'Имя', align: 'start', value: 'name' },
            { text: 'Телефон', align: 'start', value: 'phone' },
            { text: 'Whatsapp', align: 'start', value: 'phone_whatsapp' },
            { text: 'Viber', align: 'start', value: 'phone_viber' },
            // { text: 'Telegram', align: 'start', value: 'telegram' },
            { text: 'User ID', align: 'start', value: 'user_id' },
            { text: 'Instrument', value: 'instrument' },
            { text: 'Действие в боте', value: 'action_bot' },
            { text: 'Контакт', value: 'step' },
            { text: 'Интерес', value: 'result' },
            { text: 'Date', value: 'created_at' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        loading: true
    }),
    computed: {
        ...mapGetters({
            prospects: 'prospect/getAdminProspects',
        })
    },
    created () {
        this.initialize()
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            loadProspects: 'prospect/loadAdminProspects',
            deletingProspect: 'prospect/deleteProspect',
            restoringProspect: 'prospect/restoreProspect',
        }),
        initialize () {
            this.loadProspects()
                .then(() => {
                    this.loading = false
                })
        },
        getColorStep (step) {
            if (step === 'Новый') return 'red'
            if (step === 'Первичный') return 'orange'
            else return 'green'
        },
        getColorResult (result) {
            if (result === 'Интересно') return 'blue'
            else return 'orange'
        },
        getColorActionBot (action_bot) {
            if (action_bot) return 'red'
        },
        showProspect (prospectId) {
            this.$router.push({ name: 'showProspect', params: { id: prospectId } })
        },
        editProspect (prospectId) {
            this.$router.push({ name: 'editProspect', params: { id: prospectId } })
        },
        deleteProspect(prospect) {
            this.loading = true
            this.deletingProspect(prospect)
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
        restoreProspect(prospect) {
            this.loading = true
            this.restoringProspect(prospect)
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
        this.loadProspects()
    }
}
</script>

<style lang="sass">
.v-chip.v-size--small
    height: 26px

.v-chip__content
    font-size: 13px
</style>
