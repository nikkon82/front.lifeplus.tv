<template>
    <v-container
        id="be-instrum"
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
                            Бьюти Эликсир
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
                                            :to="{name: 'BE', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Лендинг Бьюти Эликсир 5 в 1
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Твоя реферальная ссылка на лендинг Бьюти Эликсир 5 в 1</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/be/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkBe"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkBe"
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
                                        Т.к. Бьюти Эликсир 5 в 1 - это продукт восстановительный, то рекомендуем клиенту сперва пройти этап "Очищения" организма.
                                        Объясняем это тем, что на загрязненный организм усвояемость Бьюти Эликсира будет меньше и эффект от него может наступить позже,
                                        в зависимости от "загрязнения".
                                    </p>
                                    <p>А на очищенный организм эффект от Бьюти Эликсира будет заметен гораздо раньше и восстановление будет проходит интенсивнее.</p>
                                    <p>
                                        <v-icon class="mr-2" color="green">mdi-numeric-1-box-multiple</v-icon>
                                        Шаг 1 - "Очищение" (1-й месяц)
                                    </p>

                                    <p>
                                        <v-icon color="purple" class="mr-2">mdi-basket</v-icon>
                                        <strong style="text-decoration: underline">1-й месяц - "Очищение"</strong>
                                    </p>
                                    <p>
                                        В первый месяц мы предлагаем базовый набор продуктов:
                                    </p>
                                    <p>
                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                        Гель Алое Вера Персик
                                        <br>
                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                        ProBalance
                                        <br>
                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                        Mind Master (желательно и только через 2 недели после начала приема геля и пробаланса)
                                    </p>
                                    <p class="mt-5">
                                        <strong>Почему в первый месяц мы не рекомендуем принимать Файбер Буст (клетчатку)?</strong>
                                    </p>
                                    <p>
                                        Загрязнение организма у вашего клиента длилось годами. И теперь организму необходимо время на то, чтобы очиститься и восстановиться.
                                        Важно не торопиться впихнуть в клиента, все что только возможно из продуктов LR.
                                        На зашлакованную толстую кишку добавлять клетчатку (Файбер Буст) очень рискованно.
                                        Клиент ещё не научился правильно питаться и пить воду в достаточном количестве.
                                        Поэтому в первый месяц идет подготовительная, щадящая очистка.
                                    </p>

                                    <p>
                                        <v-icon color="purple" class="mr-2">mdi-basket</v-icon>
                                        <strong style="text-decoration: underline">2-й месяц - "Восстановление"</strong>
                                    </p>
                                    <p>
                                        Начиная со второго месяца добавляем Бьюти Эликсир 5 в 1, а также можно предложить другие продукты LR.
                                        Например, Файбер Буст для усиления процесса очищения, запущенного в первый месяц и пробиотик Pro12 (спустя 2 недели после начала приема Файбер Буст)
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
    name: "BeInstrum",
    data: () => ({
        dialog: true,
    }),
    computed: {
        ...mapGetters({
            packageData: 'user/getProfileAccess',
        })
    },
    methods: {
        ...mapActions({
            loadProfileAccess: 'user/loadProfileAccess',
        }),
        copyRefLinkBe () {
            let referLinkBe = document.getElementById('referLinkBe')

            referLinkBe.select()

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
