<template>
    <v-container
        id="dashboard"
        fluid
        tag="section"
    >
        <v-row
            v-if="profileData.role === 'partner' || profileData.role === 'admin'"
            justify="center"
        >
            <v-col
                cols="12"
                lg="9"
                xl="7"
                class="block-media-lk"
            >
                <v-expansion-panels
                    popout
                    focusable
                    class="exp-panel-title mt-10"
                >
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <span>
                                <v-icon class="mr-2" color="red">mdi-numeric-1-box-multiple</v-icon>
                                С чего начать?
                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <p class="mt-7">
                                1. Обязательно добавься в телеграмм-канал "Поддержка LifePlus", чтобы быть в курсе обновлений и новостей по системе:
                                <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                            </p>
                            <p>
                                <a href="https://t.me/+9O_WxyLzFqJhZjIy" target="_blank">Телеграмм-канал "Поддержка LifePlus"</a>
                            </p>
                            <p class="mt-5">
                                2. Посмотри видео "Обзор платформы lifeplus.tv"
                                <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                            </p>
                            <div class="thumb-wrap">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/7Uj5rtUi-q8"
                                    title="Обзор платформы lifeplus"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                >
                                </iframe>
                            </div>

                            <v-expansion-panels
                                popout
                                focusable
                                class="exp-panel-title mt-10"
                            >
                                <v-expansion-panel>
                                    <v-expansion-panel-header>
                                        <span>
                                            <v-icon class="mr-2" color="red">mdi-alert-circle</v-icon>
                                            Если видео не грузится
                                        </span>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <p class="mt-10">
                                            Если на вашем устройстве не загружается видео с youtube, то вы можете скачать и посмотреть
                                            видео-инструкцию с гугл-диска:
                                            <a href="https://drive.google.com/drive/folders/1xNr_szC3_LhYkknkP6V5jSRGk2Vk7Kdu?usp=sharing">Видео-инструкции</a>
                                        </p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>

                            <p class="mt-10">
                                <v-icon class="mr-2" color="red">mdi-alert-outline</v-icon>
                                Добавили новую вкладку "Лайфхаки". В ней будут полезные рекомендации.
                                <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                            </p>
                            <p style="width: 100%; max-width: 600px; height: auto">
                                <img style="width: 100%" src="/img/imgLifehack.png" alt=""/>
                            </p>

                            <p class="mt-10">
                                <v-icon class="mr-2" color="red">mdi-alert-outline</v-icon>
                                Если вы планируете размещать реферальные ссылки в VK, то обязательно посмотрите видео
                                "Рекомендация по размещению ссылок на инструменты lifeplus в VK", которое находится во вкладке "Лайфхаки".
                            </p>
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <span>
                                <v-icon class="mr-2" color="orange">mdi-numeric-2-box-multiple</v-icon>
                                Настройка профиля
                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <p class="mt-7">
                                <v-icon class="mr-2 mt-n1" color="red">mdi-alert-circle</v-icon>
                                Прежде чем приступить к работе с инструментами, правильно заполни свой "Профиль". Для этого посмотри видео "Настройка профиля"
                                <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                            </p>
                            <div class="thumb-wrap">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/5cI5LzhMITA"
                                    title="Основные настройки профиля партнера"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                >
                                </iframe>
                            </div>

                            <v-expansion-panels
                                popout
                                focusable
                                class="exp-panel-title mt-10"
                            >
                                <v-expansion-panel>
                                    <v-expansion-panel-header>
                                        <span>
                                            <v-icon class="mr-2" color="red">mdi-alert-circle</v-icon>
                                            Если видео не грузится
                                        </span>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <p class="mt-10">
                                            Если на вашем устройстве не загружается видео с youtube, то вы можете скачать и посмотреть
                                            видео-инструкцию с гугл-диска:
                                            <a href="https://drive.google.com/drive/folders/1xNr_szC3_LhYkknkP6V5jSRGk2Vk7Kdu?usp=sharing">Видео-инструкции</a>
                                        </p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-expansion-panel-content>
                    </v-expansion-panel>

<!--                    <v-expansion-panel>-->
<!--                        <v-expansion-panel-header>-->
<!--                            <span>-->
<!--                                <v-icon class="mr-2" color="pink">mdi-numeric-3-box-multiple</v-icon>-->
<!--                                Пройди базовое обучение-->
<!--                            </span>-->
<!--                        </v-expansion-panel-header>-->
<!--                        <v-expansion-panel-content>-->
<!--                            <h3 class="mt-5 mb-5">-->
<!--                                Перейди по ссылке и пройди базовое обучение-->
<!--                            </h3>-->
<!--                            <p>-->
<!--                                <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>-->
<!--                                <router-link-->
<!--                                    color="success"-->
<!--                                    :to="{name: 'School'}"-->
<!--                                >Обучение</router-link>-->
<!--                            </p>-->
<!--                        </v-expansion-panel-content>-->
<!--                    </v-expansion-panel>-->

                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <span>
                                <v-icon class="mr-2" color="purple">mdi-numeric-3-box-multiple</v-icon>
                                Как обрабатывать заявки?
                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <p class="mt-7">
                                Посмотри видео "Как обрабатывать заявки"
                                <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                            </p>
                            <div class="thumb-wrap">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/qdXyP9J6O6E"
                                    title="Как работать с заявками"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                >
                                </iframe>
                            </div>

                            <v-expansion-panels
                                popout
                                focusable
                                class="exp-panel-title mt-10"
                            >
                                <v-expansion-panel>
                                    <v-expansion-panel-header>
                                        <span>
                                            <v-icon class="mr-2" color="red">mdi-alert-circle</v-icon>
                                            Если видео не грузится
                                        </span>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <p class="mt-10">
                                            Если на вашем устройстве не загружается видео с youtube, то вы можете скачать и посмотреть
                                            видео-инструкцию с гугл-диска:
                                            <a href="https://drive.google.com/drive/folders/1xNr_szC3_LhYkknkP6V5jSRGk2Vk7Kdu?usp=sharing">Видео-инструкции</a>
                                        </p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <span>
                                <v-icon class="mr-2" color="blue">mdi-numeric-4-box-multiple</v-icon>
                                Новые заявки (за сутки)
                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <p class="mt-10">
                                <v-data-table
                                    :headers="headersProspects"
                                    :items="newProspects"
                                    sort-by="name"
                                    class="elevation-1"
                                    :loading="loadingProspects"
                                    loading-text="Загружается... Пожалуйста ждите"
                                >
                                    <template
                                        v-slot:body="{ items }"
                                    >
                                        <tbody>
                                        <tr
                                            v-for="item in items"
                                            :key="item.name"
                                        >
                                            <td>
                                                <b class="font-weight-bold">{{ item.name }}</b>
                                            </td>
                                            <td>
                                                {{ item.instrument }}
                                            </td>
                                            <td>
                                                <v-icon
                                                    small
                                                    class="mr-3"
                                                    @click="showProspect(item.id)"
                                                >
                                                    mdi-account-circle
                                                </v-icon>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </template>
                                </v-data-table>
                            </p>
                            <p class="mt-10">
                                <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                <router-link
                                    color="success"
                                    :to="{name: 'myProspects'}"
                                >
                                    Все заявки
                                </router-link>
                            </p>
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <span>
                                <v-icon class="mr-2" color="indigo">mdi-numeric-5-box-multiple</v-icon>
                                ВАЖНО! Лайфхаки и рекомендации
                            </span>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <h2 class="mt-16 mb-10">
                                Рекомендация по размещению ссылок на инструменты lifeplus в VK
                            </h2>
                            <div class="thumb-wrap">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/Vwj45WkgR1U"
                                    title="Рекомендация по размещению ссылок на инструменты lifeplus в VK"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                >
                                </iframe>
                            </div>

                            <v-expansion-panels
                                popout
                                focusable
                                class="exp-panel-title mt-10"
                            >
                                <v-expansion-panel>
                                    <v-expansion-panel-header>
                                        <span>
                                            <v-icon class="mr-2" color="red">mdi-alert-circle</v-icon>
                                            Если видео не грузится
                                        </span>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <p class="mt-10">
                                            Если на вашем устройстве не загружается видео с youtube, то вы можете скачать и посмотреть
                                            видео-инструкцию с гугл-диска:
                                            <a href="https://drive.google.com/drive/folders/1xNr_szC3_LhYkknkP6V5jSRGk2Vk7Kdu?usp=sharing">Видео-инструкции</a>
                                        </p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>

                            <p class="mt-10">
                                Сервис по укорачиванию ссылок <a href="https://clck.ru/" target="_blank">Кликер</a>
                            </p>
                            <v-divider class="mt-7 mb-7"/>

                            <h2 class="mt-16 mb-10">
                                Как написать в whatsapp без добавления номера в контакты
                            </h2>
                            <div class="thumb-wrap">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/tyXunG-UKFI"
                                    title="Как написать в whatsapp без добавления номера в контакты"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                >
                                </iframe>
                            </div>

                            <v-expansion-panels
                                popout
                                focusable
                                class="exp-panel-title mt-10"
                            >
                                <v-expansion-panel>
                                    <v-expansion-panel-header>
                                        <span>
                                            <v-icon class="mr-2" color="red">mdi-alert-circle</v-icon>
                                            Если видео не грузится
                                        </span>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <p class="mt-10">
                                            Если на вашем устройстве не загружается видео с youtube, то вы можете скачать и посмотреть
                                            видео-инструкцию с гугл-диска:
                                            <a href="https://drive.google.com/drive/folders/1xNr_szC3_LhYkknkP6V5jSRGk2Vk7Kdu?usp=sharing">Видео-инструкции</a>
                                        </p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>

                            <v-divider class="mt-7 mb-7"/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
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
                            Для получения доступа к платформе обратитесь к администратору:
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
    name: "Dashboard",
    data: () => ({
        headersProspects: [
            { text: 'Имя', align: 'start', value: 'name' },
            { text: 'Откуда', value: 'instrument' },
            { text: 'Действие', value: 'actions', sortable: false },
        ],
        loadingProspects: true,
        loadingPackage: true
    }),
    computed: {
        ...mapGetters({
            newProspects: 'user/getNewProspects',
            countProspects: 'user/getCountProspects',
            profile: 'user/profile',
        }),
        profileData() {
            return this.profile
        },
    },
    created () {
        this.initializeNewProspects()
        this.initializeCountProspects()
    },
    methods: {
        ...mapActions({
            loadNewProspects: 'user/loadNewProspects',
            loadCountProspects: 'user/loadCountProspects',
        }),
        initializeNewProspects() {
            this.loadNewProspects()
                .then(() => {
                    this.loadingProspects = false
                })
        },
        initializeCountProspects() {
            this.loadCountProspects()
        },
        showProspect (prospectId) {
            this.$router.push({ name: 'prospectPage', params: { id: prospectId } })
        },
    },
    mounted () {
        this.loadNewProspects()
        this.loadCountProspects()
    }
}
</script>

<style lang="sass">
p
    line-height: 26px !important

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