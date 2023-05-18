<template>
    <v-main>
        <section id="hero">
            <v-row no-gutters>
                <v-img
                    :min-height="'calc(100vh)'"
                    src="/img/register.jpg"
                    gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                    aspect-ratio="2"
                >
                    <v-theme-provider>
                        <v-container fill-height>
                            <v-row
                                align="center"
                                class="white--text mx-auto"
                                justify="center"
                            >
                                <v-col
                                    class="white--text text-center"
                                    cols="12"
                                >
                                    <v-card width="400" class="v-card--material pa-3 mx-auto mt-10">
                                        <v-card-title class="display-2">
                                            Сброс пароля
                                        </v-card-title>
                                        <v-card-text>
                                            <v-form>
                                                <v-col
                                                    cols="12"
                                                    class="field-relative no-padding"
                                                >
                                                    <v-text-field
                                                        label="Email"
                                                        prepend-icon="mdi-email"
                                                        type="email"
                                                        v-model.trim="user.email"
                                                        :error-messages="emailErrors"
                                                        @input="$v.user.email.$touch()"
                                                        @blur="$v.user.email.$touch()"
                                                    />
                                                    <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                                </v-col>
                                            </v-form>
                                        </v-card-text>
                                        <v-divider/>
                                        <v-card-actions class="footer-auth-form">
                                            <v-btn color="blue" :to="{name: 'login'}">Войти</v-btn>
                                            <v-spacer/>
                                            <v-btn color="success" @click="sendForgotPassword">Сбросить пароль</v-btn>
                                        </v-card-actions>
                                        <v-progress-linear
                                            :active="loading"
                                            :indeterminate="loading"
                                            absolute
                                            bottom
                                            color="success accent-4"
                                        ></v-progress-linear>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-theme-provider>
                </v-img>
            </v-row>
        </section>
    </v-main>
</template>

<script>
import { mapActions } from 'vuex'

import { validationMixin } from 'vuelidate'
import {required, email} from 'vuelidate/lib/validators'

export default {
    name: "ForgotPassword",
    mixins: [validationMixin],
    data: () => ({
        user: {
            email: ''
        },
        loading: false,
        errors: {}
    }),
    computed: {
        emailErrors () {
            const errors = []
            if (!this.$v.user.email.$dirty) return errors
            !this.$v.user.email.email && errors.push('Введите корректный email')
            !this.$v.user.email.required && errors.push('Обязательно для заполнения')
            return errors
        }
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            forgotPassword: 'user/forgotPassword',
        }),
        sendForgotPassword() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.loading = true
                this.forgotPassword({email: this.user.email})
                    .then((response) => {
                        this.errors = {}
                        this.loading = false
                        this.addNotification({
                            show: true,
                            text: response.data.message,
                            color: 'success'
                        }).then(() => {
                            this.$router.push ({name: 'forgotPasswordSuccess'})
                        })
                    }).catch((error) => {
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
                                text: 'Ошибка отправки email, попробуйте снова',
                                color: 'error'
                            })
                            this.errors = error.response.data.errors
                            break
                    }
                })
            }
        }
    },
    validations: {
        user: {
            email: {
                required,
                email
            }
        }
    }
}
</script>

<style lang="sass">
.v-application a.forgot
    color: #1867c0 !important

.v-btn
    margin-right: 0 !important

.footer-auth-form
    padding-right: 20px
    padding-left: 20px
</style>
