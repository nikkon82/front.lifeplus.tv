<template>
    <v-main>
        <section id="hero">
            <v-row no-gutters>
                <v-img
                    :min-height="'calc(100vh)'"
                    src="/img/login.jpg"
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
                                        <v-sheet
                                            color="success"
                                            min-height="120"
                                            width="100%"
                                            elevation="6"
                                            class="text-start v-card--material__heading mb-n6 pa-7"
                                            dark
                                        >
                                            <div class="display-2 font-weight-bold text-center">
                                                Авторизация
                                            </div>
                                        </v-sheet>
                                        <v-card-text>
                                            <v-form>
                                                <v-col
                                                    cols="12"
                                                    class="field-relative no-padding"
                                                >
                                                    <v-text-field
                                                        label="Email"
                                                        prepend-icon="mdi-face-man"
                                                        type="email"
                                                        v-model.trim="user.email"
                                                        :error-messages="emailErrors"
                                                        @input="$v.user.email.$touch()"
                                                        @blur="$v.user.email.$touch()"
                                                    />
                                                    <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    class="field-relative no-padding"
                                                >
                                                    <v-text-field
                                                        label="Пароль"
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
                                                </v-col>

                                                <router-link class="forgot text-right"
                                                             :to="{name: 'forgotPassword', query: { partner: this.$route.query.partner }}"
                                                >
                                                    Забыли пароль?
                                                </router-link>
                                                <v-checkbox
                                                    label="Запомнить меня"
                                                    v-model="user.remember_me"
                                                ></v-checkbox>
                                            </v-form>
                                        </v-card-text>
                                        <v-divider/>
                                        <v-card-actions class="footer-auth-form">
                                            <v-btn text rounded color="blue"
                                                   :to="{name: 'register'}"
                                            >
                                                Регистрация
                                            </v-btn>
                                            <v-spacer/>
                                            <v-btn rounded color="success" @click="loginUser">Войти</v-btn>
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
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: "Login",
    mixins: [validationMixin],
    data: () => ({
        showPassword: false,
        user: {
            email: '',
            password: '',
            remember_me: false
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
        },
        passwordErrors () {
            const errors = []
            if (!this.$v.user.password.$dirty) return errors
            !this.$v.user.password.minLength && errors.push('Минимум 8 символов')
            !this.$v.user.password.required && errors.push('Обязательно для заполнения')
            return errors
        }
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            login: 'user/loginUser',
        }),
        loginUser() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.loading = true
                this.login(this.user)
                    .then(() => {
                        this.errors = {}
                        this.loading = false
                        this.addNotification ({
                            show: true,
                            text: 'Добро пожаловать!',
                            color: 'success'
                        }).then(() => {
                            this.$router.push({name: 'Dashboard'})
                        })
                    })
                    .catch((error) => {
                        this.loading = false
                        switch (error.response.status) {
                            case 422:
                                this.errors = error.response.data.errors
                                this.addNotification ({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                break
                            case 401:
                                this.addNotification ({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            case 500:
                                this.addNotification ({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            default:
                                this.addNotification ({
                                    show: true,
                                    text: 'Не удалось войти в систему, попробуйте снова',
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
    validations: {
        user: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8),
            }
        }
    }
}
</script>

<style lang="sass">
.v-application a.forgot
    color: #1867c0 !important
    font-size: small
    display: block

.v-btn
    margin-right: 0 !important

.footer-auth-form
    padding-right: 20px
    padding-left: 20px
</style>
