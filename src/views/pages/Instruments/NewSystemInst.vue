<template>
    <v-container
        id="new-syst"
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
                            Новая презентация
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
                                            :to="{name: 'NewSys', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Новая презентация
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Твоя реферальная ссылка на страницу-визитку</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/newpreza/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkNewPreza"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkNewPreza"
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
                                    <p>

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

// import * as userService from '../../../services/user_service'
import { mapActions, mapGetters } from 'vuex'

import { validationMixin } from 'vuelidate'
// import {required, minLength, maxLength} from 'vuelidate/lib/validators'

export default {
    name: "NewSystemInst",
    mixins: [validationMixin],
    data: () => ({
        errors: {},
        loading: false,
    }),
    computed: {
        ...mapGetters({
            // profile: 'user/profile',
            packageData: 'user/getProfileAccess'
        }),
        profileData() {
            return this.profile
        },

    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            // updateProfile: 'user/updateProfile',
            loadProfileAccess: 'user/loadProfileAccess'
        }),
        copyRefLinkNewPreza () {
            let referLinkNewPreza = document.getElementById('referLinkNewPreza')

            referLinkNewPreza.select()

            document.execCommand('copy')
        },
        // editProfileData() {
        //     this.$v.profileData.$touch()
        //     if (!this.$v.profileData.$invalid) {
        //         this.loading = true
        //         userService.updateProfile(this.profileData.id, this.profileData)
        //             .then((response) => {
        //                 this.updateProfile(response.data)
        //                 if (response.data && response.data.success) {
        //                     this.errors = {}
        //                     this.loading = false
        //                     this.addNotification({
        //                         show: true,
        //                         text: response.data.message,
        //                         color: 'success'
        //                     })
        //                 }
        //             })
        //             .catch((error) => {
        //                 switch (error.response.status) {
        //                     case 422:
        //                         this.loading = false
        //                         this.addNotification({
        //                             show: true,
        //                             text: error.response.data.message,
        //                             color: 'error'
        //                         })
        //                         this.errors = error.response.data.errors
        //                         break
        //                     case 500:
        //                         this.loading = false
        //                         this.addNotification({
        //                             show: true,
        //                             text: error.response.data.message,
        //                             color: 'error'
        //                         })
        //                         this.errors = error.response.data.errors
        //                         break
        //                     default:
        //                         this.loading = false
        //                         this.addNotification({
        //                             show: true,
        //                             text: error.response.data.message,
        //                             color: 'error'
        //                         })
        //                         this.errors = error.response.data.errors
        //                         break
        //                 }
        //             })
        //     } else {
        //         this.addNotification({
        //             show: true,
        //             text: 'Ошибка валидации',
        //         })
        //     }
        // }
    },
    mounted() {
        this.loadProfileAccess()
    },
    // validations: {
    //     profileData: {
    //
    //     },
    // }
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
