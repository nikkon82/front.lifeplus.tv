<template>
    <v-container
        id="biz-instrum"
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
                            Бизнес-презентация
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
                                        Российская версия
                                    </p>
                                    <p>
                                        <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                        <router-link
                                            color="success"
                                            :to="{name: 'BizPreza', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Бизнес-презентация (РУС)
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Реферальная ссылка на Бизнес-презентацию (РУС)</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/bprez/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkBiz"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkBiz"
                                        class="mb-5"
                                    >
                                        Скопировать ссылку
                                    </v-btn>
                                    <p class="mt-10" style="color: #8c0000">
                                        Украинская версия
                                    </p>
                                    <p>
                                        <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                        <router-link
                                            color="success"
                                            :to="{name: 'BizPrezaUA', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Бизнес-презентация (УКР)
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Реферальная ссылка на Бизнес-презентацию (УКР)</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/bprez-ua/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkBizUA"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkBizUA"
                                        class="mb-5"
                                    >
                                        Скопировать ссылку
                                    </v-btn>
                                    <p class="mt-10" style="color: #8c0000">
                                        Казахстанская версия
                                    </p>
                                    <p>
                                        <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                        <router-link
                                            color="success"
                                            :to="{name: 'BizPrezaKZ', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Бизнес-презентация (Казахстан)
                                        </router-link>
                                    </p>
                                    <p
                                        class="mb-n2"
                                    >
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Реферальная ссылка на Бизнес-презентацию (Казахстан)</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/bprez-kz/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkBizKZ"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkBizKZ"
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
                                        Настройка
                                    </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        Бизнес-презентация имеет настраиваемый блок, в котором вы можете рассказать о себе и своих достижениях в ЛР.
                                    </p>
                                    <p class="mt-5">
                                        Посмотрите видео по настройке бизнес-презентации:
                                    </p>
                                    <div class="thumb-wrap">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/7npE6MgIU20"
                                            title="Настройки бизнес-презентации"
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
                                        Добавили возможность вставки видео. Смотрите видео ниже.
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                    </p>
                                    <v-divider class="mt-7 mt-7"></v-divider>
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
                                        Пример:
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
                                    <p>
                                        Также вы можете добавлять/менять свой чек и фото с автомобилем от ЛР.
                                    </p>
                                    <v-divider></v-divider>
                                    <p class="mt-5">
                                        1. Добавить мини историю:
                                    </p>
                                    <vue-editor
                                        v-model="profileData.about_me_biz"
                                        :editor-toolbar="customToolbar1"
                                    />
                                    <div class="invalid-feedback" v-if="errors.about_me_biz">{{ errors.about_me_biz[0] }}</div>

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
                                    <v-divider class="mt-7"/>
                                    <p class="mt-5">
                                        2. Если у вас есть чек от LR вы можете показать его вашим кандидатам.
                                    </p>
                                    <p>
                                        Для этого необходимо в
                                        <router-link color="success" :to="{name: 'Profile'}">Профиле</router-link>
                                        добавить фото чека.
                                    </p>
                                    <v-divider class="mt-5"/>
                                    <p class="mt-5">
                                        3. Если у вас есть авто от LR вы можете показать его вашим кандидатам.
                                    </p>
                                    <p>
                                        Для этого необходимо в
                                        <router-link color="success" :to="{name: 'Profile'}">Профиле</router-link>
                                        добавить фото авто.
                                    </p>
                                    <v-divider class="mt-5"/>
                                    <p class="mt-5">
                                        4. Вы можете добавить видео (например, получения авто, признания вас на сцене, получение годового чека и т.п.):
                                    </p>
                                    <p class="mt-5">
                                        Как правильно вставить ссылку на видео:
                                    </p>
                                    <div class="thumb-wrap">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/20KpDen8yU4"
                                            title="Как правильно вставить ссылку на видео"
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

                                    <v-divider class="mt-7 mb-7"></v-divider>
                                    <v-text-field
                                        label="Заголовок к видео"
                                        prepend-icon="mdi-lead-pencil"
                                        type="text"
                                        v-model.trim="profileData.biz_video_title"
                                        :error-messages="bizVideoTitleErrors"
                                        @input="$v.profileData.biz_video_title.$touch()"
                                        @blur="$v.profileData.biz_video_title.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.biz_video_title">{{ errors.biz_video_title[0] }}</div>

                                    <v-text-field
                                        label="Ссылка на видео"
                                        prepend-icon="mdi-lead-pencil"
                                        type="text"
                                        v-model.trim="profileData.biz_video_link"
                                        :error-messages="bizVideoLinkErrors"
                                        @input="$v.profileData.biz_video_link.$touch()"
                                        @blur="$v.profileData.biz_video_link.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.biz_video_link">{{ errors.biz_video_link[0] }}</div>

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
import * as userService from '../../../services/user_service'
import { mapActions, mapGetters } from 'vuex'

import { validationMixin } from 'vuelidate'
import {maxLength} from 'vuelidate/lib/validators'

export default {
    name: "BizInstrum",
    mixins: [validationMixin],
    data: () => ({
        dialog: true,
        errors: {},
        loading: false,
        customToolbar1: [
            ["bold", "italic", "underline"],
            [{ align: "" }, { align: "center" }, { align: "right" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            ["link"]
        ],
    }),
    computed: {
        ...mapGetters({
            packageData: 'user/getProfileAccess',
            profile: 'user/profile',
        }),
        profileData() {
            return this.profile
        },
        bizVideoTitleErrors() {
            const errors = []
            if (!this.$v.profileData.biz_video_title.$dirty) return errors
            !this.$v.profileData.biz_video_title.maxLength && errors.push('Максимум 191 символ')
            return errors
        },
        bizVideoLinkErrors() {
            const errors = []
            if (!this.$v.profileData.biz_video_link.$dirty) return errors
            !this.$v.profileData.biz_video_link.maxLength && errors.push('Максимум 191 символ')
            return errors
        },
    },
    methods: {
        ...mapActions({
            loadProfileAccess: 'user/loadProfileAccess',
            addNotification: 'application/addNotification',
            updateProfile: 'user/updateProfile',
        }),
        copyRefLinkBiz () {
            let referLinkBiz = document.getElementById('referLinkBiz')

            referLinkBiz.select()

            document.execCommand('copy')
        },
        copyRefLinkBizUA () {
            let referLinkBizUA = document.getElementById('referLinkBizUA')

            referLinkBizUA.select()

            document.execCommand('copy')
        },
        copyRefLinkBizKZ () {
            let referLinkBizKZ = document.getElementById('referLinkBizKZ')

            referLinkBizKZ.select()

            document.execCommand('copy')
        },
        copyRefLinkLeedBook () {
            let referLinkLeedBook = document.getElementById('referLinkLeedBook')

            referLinkLeedBook.select()

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
            biz_video_title: {
                maxLength: maxLength(191),
            },
            biz_video_link: {
                maxLength: maxLength(191),
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

@media(max-width: 600px)
    .block-media-lk
        padding: 0

    .card-media-lk
        padding: 0

</style>
