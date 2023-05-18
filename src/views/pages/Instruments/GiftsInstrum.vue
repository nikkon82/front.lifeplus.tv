<template>
    <v-container
        id="gifts-instrum"
        tag="section"
    >
        <v-row
            justify="center"
            v-if="packageData.instrument === 'yes'"
        >
            <v-col
                cols="12"
                lg="9"
                xl="7"
                class="block-media-lk"
            >
                <base-material-card
                    color="warning"
                    class="px-sm-8 px-md-16 px-2 py-3"
                >
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Подарки (лэндинг)
                        </div>

                        <div class="subtitle-1 font-weight-light">
                            Рефссылка, инструкции
                        </div>
                    </template>

                    <v-card-text
                        class="mt-10 mb-10 card-media-lk"
                    >
                        <v-expansion-panels
                            popout
                            focusable
                            class="exp-panel-title"
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                        <span>
                                            <v-icon class="mr-2" color="green">mdi-numeric-1-box-multiple</v-icon>
                                            Твоя реферальная ссылка
                                        </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                        <router-link
                                            color="success"
                                            :to="{name: 'Gifts', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Лендинг Подарки
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Твоя реферальная ссылка на лендинг Подарки</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/gift/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkGifts"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkGifts"
                                        class="mb-5"
                                    >
                                        Скопировать ссылку
                                    </v-btn>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <span>
                                        <v-icon class="mr-2" color="purple">mdi-numeric-2-box-multiple</v-icon>
                                        Рекомендации
                                    </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        <strong>Как эффективно использовать лендинг "Подарки"</strong>
                                    </p>
                                    <p>
                                        При грамотной работе с клиентской базой у вас должны быть отмечены не только дни рождения ваших клиентов, но и
                                        дни рождения и важные даты их близкого окружения. Например, день рождения мужа/жены, детей, родителей, братьев/сестер
                                        и лучших друзей, день свадьбы и т.п.
                                    </p>
                                    <p>
                                        Наконуне важной даты необходимо предложить подобрать подарок. При этом самым эффективным будет если вы, например,
                                        предложите подобрать подарок для вашей подруги ее мужу:
                                    </p>
                                    <p style="font-style: italic">
                                        "Алексей, через неделю у Марины день рождения и я могу помочь тебе подобрать подарок для нее. Сейчас я скину тебе
                                        сайт - ознакомься с примерными наборами. Ассортимент в компании большой, поэтому мы обязательно подберем что-то вместе -
                                        я помогу тебе."
                                    </p>
                                    <p>
                                        Необходимо работать с клиентами, общаться и постепенно узнавать все больше важных дат как для самого клиента,
                                        так и его ближайшего окружения. Тем самым у вас всегда будет повод помочь вашим клиентам сделать хороший подарок
                                        и этот подарок они закажут именно у вас.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>

                </base-material-card>
            </v-col>
        </v-row>
        <v-row
            justify="center"
            v-else
        >
            <v-col
                cols="12"
                lg="9"
                xl="7"
            >
                <base-material-card
                    color="red"
                    class="px-md-16 px-5 py-3"
                >
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Ошибка доступа
                        </div>

                        <div class="subtitle-1 font-weight-light">

                        </div>
                    </template>

                    <v-card-text
                        class="mt-10"
                    >
                        <p>
                            <v-icon
                                color="red"
                                class="mr-2"
                            >
                                mdi-alert-circle-outline
                            </v-icon>
                            У вас нет доступа к просмотру данной страницы.</p>
                        <p>
                            <v-icon
                                class="mr-2"
                                color="blue"
                            >
                                mdi-arrow-right-bold-outline
                            </v-icon>
                            Для получения доступа к инструменту обратитесь к администратору:
                            <router-link
                                color="success"
                                :to="{name: 'Support'}"
                            >
                                Техподдержка
                            </router-link>
                        </p>
                    </v-card-text>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "GiftsInstrum",
    data: () => ({
        dialog: true,
    }),
    computed: {
        ...mapGetters({
            packageData: 'user/getProfileAccess',
        }),
    },
    methods: {
        ...mapActions({
            loadProfileAccess: 'user/loadProfileAccess',
        }),
        copyRefLinkGifts () {
            let referLinkGifts = document.getElementById('referLinkGifts')

            referLinkGifts.select()

            document.execCommand('copy')
        },
    },
    mounted() {
        this.loadProfileAccess()
    }
}
</script>

<style lang="sass">
.exp-panel-title .v-expansion-panel-header
    font-size: 14px

.exp-panel-title .v-expansion-panel--active
    border: 1px solid #69db69

@media(max-width: 600px)
    .block-media-lk
        padding: 0

    .card-media-lk
        padding: 0

</style>
