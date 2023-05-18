<template>
    <v-container
        id="cell-instrum"
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
                            Суперфуды (сайт)
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
                                    <p class="mt-10" style="color: #8c0000">
                                        Для России (с Каму-каму)
                                    </p>
                                    <p>
                                        <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                        <router-link
                                            color="success"
                                            :to="{name: 'CellRU', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Лендинг Cell Essence для России (с Каму-каму)
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Реферальная ссылка на лендинг Cell Essence для России (с Каму-каму)</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/ce-ru/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkCellRu"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkCellRu"
                                        class="mb-5"
                                    >
                                        Скопировать ссылку
                                    </v-btn>
                                    <p class="mt-10" style="color: #8c0000">
                                        Для других стран (с Морингой)
                                    </p>
                                    <p>
                                        <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                        <router-link
                                            color="success"
                                            :to="{name: 'Cell', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Лендинг Cell Essence для других стран (с Морингой)
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Реферальная ссылка на лендинг Cell Essence для других стран (с Морингой)</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/ce/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkCell"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkCell"
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
                                        Целевая аудитория Cell Essence - это люди, которые уже следять за своим питанием, здоровьем, занимаются спортом
                                        или минимум месяц употребляют гели Алое Вера от ЛР и Пробаланс.
                                    </p>
                                    <p class="mt-10">
                                        Т.к. Cell Essence - это продукт восстановительный, то рекомендуем "неподготовленному" клиенту сперва пройти этап "Очищения" организма
                                        (минимум месяц гели Алое Вера Персик + ПроБаланс). <br>
                                        Объясняем это тем, что на загрязненный организм усвояемость Суперфудов будет меньше и эффект от него может наступить позже,
                                        в зависимости от "загрязнения".
                                    </p>
                                    <p>А на очищенный организм эффект от Cell Essence будет заметен гораздо раньше, а результат от Суперфудов будет в разы эффективнее.</p>
                                    <p style="font-weight: bold">
                                        <v-icon class="mr-2" color="red">mdi-alert-circle</v-icon>
                                        Рекомендуемые дозировки для начала употребления Cell Essence
                                    </p>
                                    <p>
                                        <v-icon class="mr-2" color="blue">mdi-numeric-1-box-multiple</v-icon>
                                        "Неподготовленный" клиент (не употребляет БАДы, не следит за питанием и здоровьем)
                                    </p>
                                    <p>Рекомендуется начинать с 1/8 мерной ложки в течении 2-3 дней, постепенно увеличивая дозировку в течении 1-2 недель,
                                        доведя ее до рекомендуемой компанией ЛР</p>
                                    <p>
                                        <v-icon class="mr-2" color="green">mdi-numeric-2-box-multiple</v-icon>
                                        "Подготовленный" клиент (употребляет БАДы, следит за питанием и здоровьем)
                                    </p>
                                    <p>Рекомендуется начинать с 1/4 мерной ложки в течении 2-3 дней, постепенно увеличивая дозировку в течении 1-2 недель,
                                        доведя ее до рекомендуемой компанией ЛР</p>
                                    <p>
                                        <v-icon class="mr-2" color="red">mdi-alarm-light-outline</v-icon>
                                        <span style="font-weight: bold">ВАЖНО!</span> Если у клиента есть хронические заболевания,
                                        то рекомендуется начать с 1/8 мерной ложки в течении 4-5 дней, постепенно увеличивая дозировку в течении 3-4 недель
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                        <span>
                                            <v-icon class="mr-2" color="blue">mdi-numeric-3-box-multiple</v-icon>
                                            Обратите внимание!
                                        </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        <span style="font-weight: bold">Если у вас активен доступ к онлайн-тесту по здоровью</span>,
                                        то заявка от потенциального клиента будет приходить на прохождение онлайн-теста.
                                    </p>
                                    <p>По нашему опыту работы с лендингом Cell Essence потенциальные клиенты, прошедшие сначала онлайн-тест, чаще делают заказ. И вести
                                        диалог о здоровье, клеточном питании, важности употребления БАДов с ними проще.</p>
                                    <p>Задача партнера в этом случае: сначала отправить потенциальному клиенту свою реферальную ссылку на онлайн-тест по здоровью,
                                        а уже после прохождения теста, провести ему консультацию по продукту, ставя акценты на том, что часть систем
                                        его организма уже находится в "зоне риска" или даже в "красной зоне" и их необходимо восстанавливать.</p>
                                    <v-divider></v-divider>
                                    <p class="mt-10">
                                        <span style="font-weight: bold">Если у вас не подключен инструмент онлайн-тест по здоровью,</span>
                                        то заявка от потенциального клиента будет приходить на консультацию по продукту.
                                    </p>
                                    <p>Задача партнера в этом случае: связаться с потенциальным клиентом и провести консультацию по продукту.</p>
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
    name: "CellInstrum",
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
        copyRefLinkCell () {
            let referLinkCell = document.getElementById('referLinkCell')

            referLinkCell.select()

            document.execCommand('copy')
        },
        copyRefLinkCellRu () {
            let referLinkCellRu = document.getElementById('referLinkCellRu')

            referLinkCellRu.select()

            document.execCommand('copy')
        }
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
