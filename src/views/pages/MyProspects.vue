<template>
    <v-container
        id="prospects-page"
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
                            <v-toolbar-title>Мои заявки</v-toolbar-title>
                            <v-divider
                                class="mx-4"
                                inset
                                vertical
                            ></v-divider>
                            <v-spacer/>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Поиск"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.name="{ item }">
                      <b class="font-weight-bold">{{ item.name }}</b>
                    </template>
                    <template v-slot:item.phone="{ item }">
                        <b class="font-weight-bold">{{ item.phone }}</b>
                    </template>
                    <template v-slot:item.phone_whatsapp="{ item }">
                        <b class="font-weight-bold">{{ item.phone_whatsapp }}</b>
                    </template>
                    <template v-slot:item.phone_viber="{ item }">
                        <b class="font-weight-bold">{{ item.phone_viber }}</b>
                    </template>
<!--                    <template v-slot:item.telegram="{ item }">-->
<!--                        <b class="font-weight-bold">{{ item.telegram }}</b>-->
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
                    <template v-slot:item.open="{ item }">
                        <v-icon
                            small
                            class="mr-3"
                            @click="showProspect(item.id)"
                        >
                            mdi-account-circle
                        </v-icon>
                    </template>
                    <template v-slot:item.delete="{ item }">
                        <v-icon
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
        <div>
            <v-icon
                class="mr-2"
                color="red"
            >
                mdi-delete
            </v-icon>
            <router-link :to="{name: 'myProspectsBasket'}">Корзина</router-link>
        </div>
    </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "MyProspects",
    data: () => ({
        search: '',
        headers: [
            { text: 'Имя', value: 'name' },
            { text: 'Телефон', value: 'phone' },
            { text: 'Whatsapp', value: 'phone_whatsapp' },
            { text: 'Viber', value: 'phone_viber' },
            // { text: 'Telegram', value: 'telegram' },
            { text: 'Инструмент', value: 'instrument' },
            { text: 'Контакт', value: 'step' },
            { text: 'Интерес', value: 'result' },
            { text: 'Дата создания', value: 'created_at' },
            { text: 'Открыть', value: 'open' },
            { text: 'Удалить', value: 'delete' },
        ],
        loading: true,
        dialog: true,
    }),
    computed: {
        ...mapGetters({
            prospects: 'user/getProspects',
        })
    },
    created () {
        this.initialize()
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            loadProspects: 'user/loadProspects',
            deletingProspect: 'prospect/deleteUserProspect',
        }),
        getColorStep (step) {
            if (step === 'Новый') return 'red'
            if (step === 'Первичный') return 'orange'
            else return 'green'
        },
        getColorActionBot (action_bot) {
            if (action_bot) return 'red'
        },
        getColorResult (result) {
            if (result === 'Интересен продукт') return 'green'
            if (result === 'Интересен бизнес') return 'red'
            if (result === 'Думает') return 'blue'
            else return 'orange'
        },
        initialize () {
            this.loadProspects()
                .then(() => {
                    this.loading = false
                })
        },
        showProspect (prospectId) {
            this.$router.push({ name: 'prospectPage', params: { id: prospectId } })
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
                        .then(() => {
                            this.initialize()
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
