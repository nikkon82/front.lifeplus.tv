<template>
    <v-container
        id="vizitka-instrum"
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
                            Страница-визитка
                        </div>

                        <div class="subtitle-1 font-weight-light">
                            Рефссылка, настройки
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
                                            :to="{name: 'Viz', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Страница-визитка
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Твоя реферальная ссылка на страницу-визитку</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/viz/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkVizitka"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkVizitka"
                                        class="mb-5"
                                    >
                                        Скопировать ссылку
                                    </v-btn>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <span>
                                        <v-icon class="mr-2" color="blue">mdi-numeric-2-box-multiple</v-icon>
                                        Настройка
                                    </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        Страница-визитка имеет 6 блоков:
                                    </p>
                                    <ul class="ul-price">
                                        <li>
                                            <v-icon class="mr-2" color="red">mdi-numeric-1-box-multiple</v-icon>
                                            Ваши аватар, имя и фамилия. Указываются в Профиле.
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="blue">mdi-numeric-2-box-multiple</v-icon>
                                            Блок вашей мини истории.
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-numeric-3-box-multiple</v-icon>
                                            Блок, в котором вы можете разместить фото вашего чека от ЛР.
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="orange">mdi-numeric-4-box-multiple</v-icon>
                                            Блок, в котором вы можете разместить фото вашего авто от ЛР.
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="pink">mdi-numeric-5-box-multiple</v-icon>
                                            Блок дополнительной информации и призыва к действию.
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="purple">mdi-numeric-6-box-multiple</v-icon>
                                            Блок с контактами, по которым кандидат может с вами связаться. Указываются в Профиле.
                                        </li>
                                    </ul>
                                    <p class="mt-5">
                                        Посмотрите видео по настройке страницы-визитки:
                                    </p>
                                    <div class="thumb-wrap">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/KmdP-vv2Eh0"
                                            title="Настройки страницы-визитки"
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

                                    <v-divider class="mt-7"></v-divider>
                                    <p class="mt-5">
                                        <v-icon class="mr-2" color="blue">mdi-numeric-2-box-multiple</v-icon>
                                        В блоке мини истории мы рекомендуем написать немного о себе и своих достижениях в ЛР.
                                    </p>
                                    <p>
                                        <strong>Как написать мини историю</strong>
                                    </p>
                                    <p>
                                        Примерный план:
                                    </p>
                                    <ul class="ul-price">
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-check-all</v-icon>
                                            Чем занимались до ЛР. Если предприниматель, то чем именно.
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-check-all</v-icon>
                                            Что не устраивало.
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-check-all</v-icon>
                                            Доход через пол года или через год или когда вышли на максимальный чек.
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-check-all</v-icon>
                                            Через какое время получили первый авто.
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-check-all</v-icon>
                                            Также можно указать какую-то мечту, которую удалось осуществить благодаря LR: купили квартиру, побывали в какой-то стране, поправили здоровье и т.п.
                                        </li>
                                    </ul>
                                    <p class="mt-5">
                                        Очень краткий пример:
                                        <br>
                                        <span style="font-style: italic">
                                            "Алексей, предприниматель, был свой магазин одежды. В ЛР пришел, потому что устал быть в бизнесе 24 на 7.
                                            Через пол года доход от ЛР составил 40 000 руб. Через год получил авто от компании."
                                        </span>
                                    </p>
                                    <p>
                                        <strong>Новичкам</strong>, у которых пока нет чека и автомобиля от ЛР, мы рекомендуем написать:
                                        почему вы пришли в ЛР, чем занимаетесь или занимались до прихода в ЛР, какие цели планируете реализовать с помощью ЛР.
                                    </p>
                                    <p>
                                        Рекомендуем со временем корректировать свою мини-историю: добавлять новые достижения в ЛР и какие новые цели вы смогли
                                        реализовать благодаря ЛР.
                                    </p>
                                    <v-divider></v-divider>
                                    <p class="mt-5">
                                        Добавить мини историю:
                                    </p>
                                    <vue-editor
                                        v-model="profileData.about_me_viz"
                                        :editor-toolbar="customToolbar1"
                                    />
                                    <div class="invalid-feedback" v-if="errors.about_me_viz">{{ errors.about_me_viz[0] }}</div>

                                    <v-btn
                                        color="success"
                                        class="mr-0 mt-5"
                                        @click="editProfileData"
                                    >
                                        Сохранить данные
                                    </v-btn>
                                    <v-progress-linear
                                        :active="loading"
                                        :indeterminate="loading"
                                        absolute
                                        bottom
                                        color="success accent-4"
                                    ></v-progress-linear>

                                    <v-divider class="mt-7"></v-divider>

                                    <p class="mt-7">
                                        <v-icon class="mr-2" color="green">mdi-numeric-3-box-multiple</v-icon>
                                        Если у вас есть чек от LR вы можете показать его вашим кандидатам.
                                    </p>
                                    <p>
                                        Для этого необходимо в
                                        <router-link color="success" :to="{name: 'Profile'}">Профиле</router-link>
                                        добавить фото чека.
                                    </p>
                                    <v-divider class="mt-7"/>
                                    <p class="mt-7">
                                        <v-icon class="mr-2" color="orange">mdi-numeric-4-box-multiple</v-icon>
                                        Если у вас есть авто от LR вы можете показать его вашим кандидатам.
                                    </p>
                                    <p>
                                        Для этого необходимо в
                                        <router-link color="success" :to="{name: 'Profile'}">Профиле</router-link>
                                        добавить фото авто.
                                    </p>

                                    <v-divider class="mt-7"></v-divider>

                                    <p class="mt-7">
                                        <v-icon class="mr-2" color="pink">mdi-numeric-5-box-multiple</v-icon>
                                        Блок дополнительной информации и призыва к действию
                                    </p>
                                    <p>
                                        В этом блоке мы рекомендуем указать, например:
                                    </p>
                                    <ul class="ul-price">
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-check-all</v-icon>
                                            Какую-либо дополнительную информацию о том, что вы предлагает вашему кандидату
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-check-all</v-icon>
                                            Ссылку на ваш клиентский чат и описание к нему (см. видео по настройке страницы-визитки)
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-check-all</v-icon>
                                            Ссылку на какой-либо бонус или подарок для вашего кандидата
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-check-all</v-icon>
                                            Ссылку на прохождение онлайн-теста и описание к ней
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-check-all</v-icon>
                                            Ссылку на бизнес-презентацию и описание к ней
                                        </li>
                                        <li>
                                            <v-icon class="mr-2" color="green">mdi-check-all</v-icon>
                                            Призыв к действию
                                        </li>
                                    </ul>
                                    <v-divider class="mt-7"></v-divider>
                                    <p class="mt-5">Дополнительная информация и призыв к действию:</p>
                                    <vue-editor
                                        v-model="profileData.dop_viz"
                                        :editor-toolbar="customToolbar2"
                                    />
                                    <div class="invalid-feedback" v-if="errors.dop_viz">{{ errors.dop_viz[0] }}</div>

                                    <v-btn
                                        color="success"
                                        class="mr-0 mt-5"
                                        @click="editProfileData"
                                    >
                                        Сохранить данные
                                    </v-btn>
                                    <v-progress-linear
                                        :active="loading"
                                        :indeterminate="loading"
                                        absolute
                                        bottom
                                        color="success accent-4"
                                    ></v-progress-linear>

                                    <v-divider class="mt-7"></v-divider>
                                    <p class="mt-7 mb-7">
                                        <v-icon class="mr-2" color="red">mdi-palette-swatch</v-icon>
                                        Выбрать дизайн страницы-визитки
                                    </p>
                                    <v-select
                                        prepend-icon="mdi-palette"
                                        :items="vizDesignItems"
                                        label="Дизайн для страницы-визитки"
                                        v-model.trim="profileData.viz_design"
                                        :error-messages="vizDesignErrors"
                                        @change="$v.profileData.viz_design.$touch()"
                                        @blur="$v.profileData.viz_design.$touch()"
                                    ></v-select>
                                    <div class="invalid-feedback" v-if="errors.viz_design">{{ errors.viz_design[0] }}</div>

                                    <div
                                        v-if="profileData.viz_design === 'default'"
                                        class="viz-disign-div"
                                    >
                                        <p>Стандартная тема</p>
                                        <p style="width: 100%; max-width: 450px; height: auto">
                                            <v-img
                                                class="align-center"
                                                max-width="200px"
                                                src="/img/vizitka/default_viz_mini.png"
                                                @click.stop="dialogDefault = true"
                                            >
                                                <v-row justify="center">
                                                    <v-icon color="grey" large>mdi-magnify-plus-outline</v-icon>
                                                </v-row>
                                            </v-img>
                                        </p>
                                    </div>
                                    <div
                                        v-if="profileData.viz_design === 'dark'"
                                        class="viz-disign-div"
                                    >
                                        <p>Темная тема</p>
                                        <p style="width: 100%; max-width: 450px; height: auto">
                                            <v-img
                                                class="align-center"
                                                max-width="200px"
                                                src="/img/vizitka/dark_viz_mini.png"
                                                @click.stop="dialogDark = true"
                                            >
                                                <v-row justify="center">
                                                    <v-icon color="grey" large>mdi-magnify-plus-outline</v-icon>
                                                </v-row>
                                            </v-img>
                                        </p>
                                    </div>
                                    <div
                                        v-if="profileData.viz_design === 'brown'"
                                        class="viz-disign-div"
                                    >
                                        <p>Коричневая тема</p>
                                        <p style="width: 100%; max-width: 450px; height: auto">
                                            <v-img
                                                class="align-center"
                                                max-width="200px"
                                                src="/img/vizitka/brown_viz_mini.png"
                                                @click.stop="dialogBrown = true"
                                            >
                                                <v-row justify="center">
                                                    <v-icon color="grey" large>mdi-magnify-plus-outline</v-icon>
                                                </v-row>
                                            </v-img>
                                        </p>
                                    </div>

                                    <v-btn
                                        color="success"
                                        class="mr-0 mt-5 mb-5"
                                        @click="editProfileData"
                                    >
                                        Сохранить данные
                                    </v-btn>
                                    <v-progress-linear
                                        :active="loading"
                                        :indeterminate="loading"
                                        absolute
                                        bottom
                                        color="success accent-4"
                                    ></v-progress-linear>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <v-dialog
                            v-model="dialogDefault"
                            max-width="300"
                        >
                            <v-img
                                src="/img/vizitka/default_viz.png"
                            ></v-img>
                        </v-dialog>
                        <v-dialog
                            v-model="dialogDark"
                            max-width="300"
                        >
                            <v-img
                                src="/img/vizitka/dark_viz.png"
                            ></v-img>
                        </v-dialog>
                        <v-dialog
                            v-model="dialogBrown"
                            max-width="300"
                        >
                            <v-img
                                src="/img/vizitka/brown_viz.png"
                            ></v-img>
                        </v-dialog>
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

import * as userService from '../../../services/user_service'
import { mapActions, mapGetters } from 'vuex'

import { validationMixin } from 'vuelidate'
import {required, minLength, maxLength} from 'vuelidate/lib/validators'

export default {
    name: "VizitkaInstrum",
    mixins: [validationMixin],
    data: () => ({
        customToolbar1: [
            ["bold", "italic", "underline"],
            [{ align: "" }, { align: "center" }, { align: "right" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            ["link"]
        ],
        customToolbar2: [
            ["bold", "italic", "underline"],
            ["link"]
        ],
        vizDesignItems: [
            'default',
            'dark',
            'brown'
        ],
        errors: {},
        loading: false,
        dialogDefault: false,
        dialogDark: false,
        dialogBrown: false,
    }),
    computed: {
        ...mapGetters({
            profile: 'user/profile',
            packageData: 'user/getProfileAccess'
        }),
        profileData() {
            return this.profile
        },
        aboutMeVizErrors() {
            const errors = []
            if (!this.$v.profileData.about_me_viz.$dirty) return errors
            !this.$v.profileData.about_me_viz.minLength && errors.push('Минимум 10 символов')
            !this.$v.profileData.about_me_viz.maxLength && errors.push('Максимум 3000 символов')
            return errors
        },
        dopVizErrors() {
            const errors = []
            if (!this.$v.profileData.dop_viz.$dirty) return errors
            !this.$v.profileData.dop_viz.minLength && errors.push('Минимум 10 символов')
            !this.$v.profileData.dop_viz.maxLength && errors.push('Максимум 3000 символов')
            return errors
        },
        vizDesignErrors() {
            const errors = []
            if (!this.$v.profileData.viz_design.$dirty) return errors
            !this.$v.profileData.viz_design.required && errors.push('Обязательно для заполнения')
            return errors
        },
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            updateProfile: 'user/updateProfile',
            loadProfileAccess: 'user/loadProfileAccess'
        }),
        copyRefLinkVizitka () {
            let referLinkVizitka = document.getElementById('referLinkVizitka')

            referLinkVizitka.select()

            document.execCommand('copy')
        },
        editProfileData() {
            this.$v.profileData.$touch()
            if (!this.$v.profileData.$invalid) {
                this.loading = true
                userService.updateProfile(this.profileData.id, this.profileData)
                    .then((response) => {
                        this.updateProfile(response.data)
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
                            case 422:
                                this.loading = false
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            case 500:
                                this.loading = false
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            default:
                                this.loading = false
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                        }
                    })
            } else {
                this.addNotification({
                    show: true,
                    text: 'Ошибка валидации',
                })
            }
        }
    },
    mounted() {
        this.loadProfileAccess()
    },
    validations: {
        profileData: {
            about_me_viz: {
                minLength: minLength(10),
                maxLength: maxLength(3000)
            },
            dop_viz: {
                minLength: minLength(10),
                maxLength: maxLength(3000)
            },
            viz_design: {
                required
            },
        },
    }
}
</script>

<style lang="sass">
.exp-panel-title .v-expansion-panel-header
    font-size: 14px

.exp-panel-title .v-expansion-panel--active
    border: 1px solid #69db69

.ul-price
    list-style-type: none

.ul-price li
    padding-bottom: 10px
    line-height: 26px !important

.viz-disign-div
    margin-top: 20px

@media(max-width: 600px)
    .block-media-lk
        padding: 0

    .card-media-lk
        padding: 0
</style>
