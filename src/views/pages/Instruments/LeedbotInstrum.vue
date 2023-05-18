<template>
    <v-container
        id="leedbot-instrum"
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
                            Лидбот по бизнесу
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
                                            :to="{name: 'Leedbot', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Leedbot по Бизнесу (РУС)
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Реферальная ссылка на Leedbot по Бизнесу (РУС)</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/lbot/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkLeed"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkLeed"
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
                                            :to="{name: 'LeedbotUA', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Leedbot по Бизнесу (УКР)
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Реферальная ссылка на Leedbot по Бизнесу (УКР)</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/lbot-ua/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkLeedUA"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkLeedUA"
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
                                            :to="{name: 'LeedbotKZ', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Leedbot по Бизнесу (Казахстан)
                                        </router-link>
                                    </p>
                                    <p
                                        class="mb-n2"
                                    >
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Реферальная ссылка на Leedbot по Бизнесу (Казахстан)</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/lbot-kz/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkLeedKZ"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkLeedKZ"
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
                                        Посмотрите видео по настройке лидбота по бизнесу:
                                    </p>
                                    <div class="thumb-wrap">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/_skXgxVU-A4"
                                            title="Настройки лидбота по бизнесу"
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
                                        1. Самое первое сообщение в лидботе универсальное и имеет следующий вид:
                                    </p>
                                    <p style="width: 100%; max-width: 600px; height: auto">
                                        <img style="width: 100%" src="/img/leedbot/imgFirstMes.png" alt=""/>
                                    </p>
                                    <p>
                                        Вы можете указать свое сообщение:
                                    </p>
                                    <vue-editor
                                        v-model="profileData.about_me"
                                        :editor-toolbar="customToolbar1"
                                    />
                                    <div class="invalid-feedback" v-if="errors.about_me">{{ errors.about_me[0] }}</div>

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

                                    <p class="mt-5">
                                        <v-icon class="mr-2 mt-n1" color="red">mdi-alert-circle</v-icon> Обратите внимание на то, чтобы ваше сообщение
                                        соответствовало контексту.
                                    </p>
                                    <v-divider class="mt-5"/>
                                    <p class="mt-5">
                                        2. Если у вас есть клиентский чат и вы хотите, чтобы кандидаты оставляли заявку на вступление в этот чат,
                                        то заполните описание к своему клиентскому чату:
                                    </p>
                                    <vue-editor
                                        v-model="profileData.about_chat"
                                        :editor-toolbar="customToolbar2"
                                    />
                                    <div class="invalid-feedback" v-if="errors.about_chat">{{ errors.about_chat[0] }}</div>

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

                                    <p class="mt-5">
                                        Это сообщение будет показано кандидату после предложения оставить заявку на клиентский чат:
                                    </p>
                                    <p style="width: 100%; max-width: 600px; height: auto">
                                        <img style="width: 100%" src="/img/leedbot/imgClientChat.jpg" alt=""/>
                                    </p>
                                    <p>
                                        <v-icon class="mr-2 mt-n1" color="red">mdi-alert-circle</v-icon> Обратите внимание на то, чтобы ваше сообщение
                                        соответствовало контексту.
                                    </p>
                                    <p>
                                        <v-icon class="mr-2 mt-n1" color="red">mdi-alert-circle</v-icon> ВАЖНО! Если поле "О клиентском чате"
                                        в Профиле будет пустым, то кандидат не сможет оставить свою заявку на вступление в ваш чат.
                                    </p>

                                    <v-divider/>
<!--                                    <p class="mt-5">-->
<!--                                        3. Если у вас подключен онлайн-тест по здоровью, то вы можете изменить стандартный промо-текст теста:-->
<!--                                    </p>-->
<!--                                    <vue-editor-->
<!--                                        v-model="profileData.promo_test"-->
<!--                                        :editor-toolbar="customToolbar4"-->
<!--                                    />-->
<!--                                    <div class="invalid-feedback" v-if="errors.promo_test">{{ errors.promo_test[0] }}</div>-->

<!--                                    <v-btn-->
<!--                                        color="success"-->
<!--                                        class="mr-0"-->
<!--                                        @click="editProfileData"-->
<!--                                    >-->
<!--                                        Сохранить данные-->
<!--                                    </v-btn>-->
<!--                                    <v-progress-linear-->
<!--                                        :active="loading"-->
<!--                                        :indeterminate="loading"-->
<!--                                        absolute-->
<!--                                        bottom-->
<!--                                        color="success accent-4"-->
<!--                                    ></v-progress-linear>-->

<!--                                    <p>-->
<!--                                        Это сообщение будет показано кандидату после предложения оставить заявку на прохождение теста:-->
<!--                                    </p>-->
<!--                                    <p style="width: 100%; max-width: 600px; height: auto">-->
<!--                                        <img style="width: 100%" src="/img/leedbot/imgClientTest.png" alt=""/>-->
<!--                                    </p>-->
<!--                                    <p>-->
<!--                                        <v-icon class="mr-2 mt-n1" color="red">mdi-alert-circle</v-icon> Обратите внимание на то, чтобы ваше сообщение-->
<!--                                        соответствовало контексту.-->
<!--                                    </p>-->

<!--                                    <v-divider/>-->
                                    <p class="mt-5">
                                        3. Изменить стандартное сообщение для описания бонуса после регистрации (или если вы хотите предложить свой бонус):
                                    </p>
                                    <vue-editor
                                        v-model="profileData.leedbonus"
                                        :editor-toolbar="customToolbar3"
                                    />
                                    <div class="invalid-feedback" v-if="errors.leedbonus">{{ errors.leedbonus[0] }}</div>

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

                                    <v-divider class="mt-5"/>
                                    <p class="mt-5">
                                        4. Чтобы аудиосообщения для кандидата звучали женским голосом, необходимо в
                                        <router-link color="success" :to="{name: 'Profile'}">Профиле</router-link>
                                        в поле "Пол" выбрать "ж".
                                    </p>
                                    <p>
                                        По умолчанию озвучка аудиосообщений мужским голосом.
                                    </p>


                                    <!--                                    <v-divider/>-->
                                    <!--                                    <p class="mt-10">-->
                                    <!--                                        5. Чтобы изменить сообщение и видео получения автомобиля от компании, необходимо в-->
                                    <!--                                        <router-link color="success" :to="{name: 'Profile'}">Профиле</router-link>-->
                                    <!--                                        заполнить поле "Сообщение для видео с авто".-->
                                    <!--                                    </p>-->
                                    <!--                                    <p>Для вставки своего видео, необходимо в поле "Ссылка на видео с авто" вставить ссылку на ваше видео с youtube</p>-->
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                        <span>
                                            <v-icon class="mr-2" color="blue">mdi-numeric-3-box-multiple</v-icon>
                                            Рекомендации
                                        </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        1. Лидбот по бизнесу - это ваш виртуальный помощник! И это может служить как преимущество в глазах кандидата:
                                    </p>
                                    <p>
                                        <!-- audio element -->
                                        <vue-player
                                            audio
                                            :sources="audioSources1"
                                        />
                                    </p>
                                    <p>
                                        2. Где размещать свою реферальную ссылку и как ее передать кандидату при разговоре:
                                    </p>
                                    <p>
                                        <!-- audio element -->
                                        <vue-player
                                            audio
                                            :sources="audioSources2"
                                        />
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                        <span>
                                            <v-icon class="mr-2" color="blue darken-4">mdi-numeric-4-box-multiple</v-icon>
                                            Реферальная ссылка на страницу с бонусом
                                        </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                        <router-link
                                            color="success"
                                            :to="{name: 'LeedBook', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Страница с бонусом
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Твоя реферальная ссылка на страницу с бонусом</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/lbook/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkLeedBook"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkLeedBook"
                                        class="mb-5"
                                    >
                                        Скопировать ссылку
                                    </v-btn>
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
import { minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    name: "LeedbotInstrum",
    mixins: [validationMixin],
    data: () => ({
        dialog: true,
        customToolbar1: [
            ["bold", "italic", "underline"],
            [{ align: "" }, { align: "center" }, { align: "right" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            ["link"]
        ],
        customToolbar2: [
            ["bold", "italic", "underline"],
            [{ align: "" }, { align: "center" }, { align: "right" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            ["link"]
        ],
        customToolbar3: [
            ["bold", "italic", "underline"],
            [{ align: "" }, { align: "center" }, { align: "right" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            ["link"]
        ],
        customToolbar4: [
            ["bold", "italic", "underline"],
            [{ align: "" }, { align: "center" }, { align: "right" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            ["link"]
        ],
        audioSources1: {
            'audio/mp3': '/audio/instructions/leedbot/audio_leedbot_instr1.mp3'
        },
        audioSources2: {
            'audio/mp3': '/audio/instructions/leedbot/audio_leedbot_instr2.mp3'
        },
        errors: {},
        loading: false,
    }),
    computed: {
        ...mapGetters({
            packageData: 'user/getProfileAccess',
            profile: 'user/profile',
        }),
        profileData() {
            return this.profile
        },
        aboutMeErrors() {
            const errors = []
            if (!this.$v.profileData.about_me.$dirty) return errors
            !this.$v.profileData.about_me.minLength && errors.push('Минимум 10 символов')
            !this.$v.profileData.about_me.maxLength && errors.push('Максимум 1000 символов')
            return errors
        },
        promoTestErrors() {
            const errors = []
            if (!this.$v.profileData.promo_test.$dirty) return errors
            !this.$v.profileData.promo_test.minLength && errors.push('Минимум 10 символов')
            !this.$v.profileData.promo_test.maxLength && errors.push('Максимум 2000 символов')
            return errors
        },
        aboutChatErrors() {
            const errors = []
            if (!this.$v.profileData.about_chat.$dirty) return errors
            !this.$v.profileData.about_chat.minLength && errors.push('Минимум 10 символов')
            !this.$v.profileData.about_chat.maxLength && errors.push('Максимум 1000 символов')
            return errors
        },
        leedbonusErrors() {
            const errors = []
            if (!this.$v.profileData.leedbonus.$dirty) return errors
            !this.$v.profileData.leedbonus.minLength && errors.push('Минимум 10 символов')
            !this.$v.profileData.leedbonus.maxLength && errors.push('Максимум 1000 символов')
            return errors
        },
    },
    methods: {
        ...mapActions({
            loadProfileAccess: 'user/loadProfileAccess',
            addNotification: 'application/addNotification',
            updateProfile: 'user/updateProfile',
        }),
        copyRefLinkLeed () {
            let referLinkLeed = document.getElementById('referLinkLeed')

            referLinkLeed.select()

            document.execCommand('copy')
        },
        copyRefLinkLeedUA () {
            let referLinkLeedUA = document.getElementById('referLinkLeedUA')

            referLinkLeedUA.select()

            document.execCommand('copy')
        },
        copyRefLinkLeedKZ () {
            let referLinkLeedKZ = document.getElementById('referLinkLeedKZ')

            referLinkLeedKZ.select()

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
            about_me: {
                minLength: minLength(10),
                maxLength: maxLength(1000)
            },
            promo_test: {
                minLength: minLength(10),
                maxLength: maxLength(1000)
            },
            about_chat: {
                minLength: minLength(10),
                maxLength: maxLength(1000)
            },
            leedbonus: {
                minLength: minLength(10),
                maxLength: maxLength(1000)
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

@media(max-width: 600px)
    .block-media-lk
        padding: 0

    .card-media-lk
        padding: 0

</style>
