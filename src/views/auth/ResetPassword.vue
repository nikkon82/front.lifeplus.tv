<template>
    <v-main>
        <section id="hero">
            <v-row no-gutters>
                <v-img
                    :min-height="'calc(100vh)'"
                    src="/img/lock.jpg"
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
                                            Новый пароль
                                        </v-card-title>
                                        <v-card-text>
                                            <v-form>
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
                                                <v-text-field
                                                    label="Новый пароль"
                                                    :type="showPassword ? 'text' : 'password'"
                                                    prepend-icon="mdi-lock-outline"
                                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                    @click:append="showPassword = !showPassword"
                                                    v-model.trim="user.password"
                                                    :error-messages="passwordErrors"
                                                    @input="$v.user.password.$touch()"
                                                    @blur="$v.user.password.$touch()"
                                                />
                                                <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
                                                <v-text-field
                                                    label="Повтор пароля"
                                                    :type="showPassword ? 'text' : 'password'"
                                                    prepend-icon="mdi-lock-outline"
                                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                    @click:append="showPassword = !showPassword"
                                                    v-model.trim="user.password_confirmation"
                                                    :error-messages="passwordConfirmationErrors"
                                                    @input="$v.user.password_confirmation.$touch()"
                                                    @blur="$v.user.password_confirmation.$touch()"
                                                />
                                                <div class="invalid-feedback" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</div>
                                            </v-form>
                                        </v-card-text>
                                        <v-divider/>
                                        <v-card-actions class="footer-auth-form">
                                            <v-spacer/>
                                            <v-btn color="success" @click="sendResetPassword">Сохранить</v-btn>
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
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'

export default {
    name: "ResetPassword",
    mixins: [validationMixin],
    data: () => ({
        showPassword: false,
        user: {
            email: '',
            password: '',
            password_confirmation: ''
        },
        loading: false,
        errors: {}
    }),
    computed: {
        emailErrors() {
            const errors = []
            if (!this.$v.user.email.$dirty) return errors
            !this.$v.user.email.email && errors.push('Введите корректный email')
            !this.$v.user.email.required && errors.push('Обязательно для заполнения')
            return errors
        },
        passwordErrors() {
            const errors = []
            if (!this.$v.user.password.$dirty) return errors
            !this.$v.user.password.minLength && errors.push('Минимум 8 символов')
            !this.$v.user.password.required && errors.push('Обязательно для заполнения')
            return errors
        },
        passwordConfirmationErrors() {
            const errors = []
            if (!this.$v.user.password_confirmation.$dirty) return errors
            !this.$v.user.password_confirmation.sameAsPassword && errors.push('Пароли должны совпадать')
            return errors
        }
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            resetPassword: 'user/resetPassword',
        }),
        sendResetPassword() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.loading = true
                const token = this.$route.query.token
                this.resetPassword({...this.user, token})
                    .then((response) => {
                        this.errors = {}
                        this.loading = false
                        this.addNotification({
                            show: true,
                            text: response.data.message,
                            color: 'success'
                        }).then(() => {
                            this.$router.push ({name: 'login'})
                        })
                    }).catch((error) => {
                        this.loading = false
                        switch (error.response.status) {
                            case 422:
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            case 500:
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            default:
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
        },
    },
    validations: {
        user: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8),
            },
            password_confirmation: {
                sameAsPassword: sameAs('password')
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
