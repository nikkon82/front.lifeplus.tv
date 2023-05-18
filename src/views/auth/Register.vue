<template>
    <v-main>
        <section id="hero">
            <v-row no-gutters>
                <v-img
                    :min-height="'calc(100vh)'"
                    src="/img/registration.jpg"
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
                                                Система lifeplus
                                            </div>
                                        </v-sheet>
                                        <v-card-text>
                                            <v-form>
                                                <v-col
                                                    cols="12"
                                                    class="field-relative no-padding"
                                                >
                                                    <v-text-field
                                                        label="Имя"
                                                        prepend-icon="mdi-face-man"
                                                        type="text"
                                                        v-model.trim="newUser.name"
                                                        :error-messages="nameErrors"
                                                        @input="$v.newUser.name.$touch()"
                                                        @blur="$v.newUser.name.$touch()"
                                                    />
                                                    <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    class="field-relative no-padding"
                                                >
                                                    <v-text-field
                                                        label="Email"
                                                        prepend-icon="mdi-email"
                                                        type="email"
                                                        v-model.trim="newUser.email"
                                                        :error-messages="emailErrors"
                                                        @input="$v.newUser.email.$touch()"
                                                        @blur="$v.newUser.email.$touch()"
                                                    />
                                                    <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    class="field-relative no-padding"
                                                >
                                                    <v-text-field
                                                        label="LR number"
                                                        prepend-icon="mdi-numeric"
                                                        type="text"
                                                        v-model.trim="newUser.lr_number"
                                                        :error-messages="lrNumberErrors"
                                                        @input="$v.newUser.lr_number.$touch()"
                                                        @blur="$v.newUser.lr_number.$touch()"
                                                        hint="RU00000000"
                                                        persistent-hint
                                                    />
                                                    <div class="invalid-feedback" v-if="errors.lr_number">{{ errors.lr_number[0] }}</div>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    class="field-relative no-padding"
                                                >
                                                    <v-text-field
                                                        label="Придумай пароль"
                                                        :type="showPassword ? 'text' : 'password'"
                                                        prepend-icon="mdi-lock-outline"
                                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                        @click:append="showPassword = !showPassword"
                                                        v-model.trim="newUser.password"
                                                        :error-messages="passwordErrors"
                                                        @input="$v.newUser.password.$touch()"
                                                        @blur="$v.newUser.password.$touch()"
                                                    />
                                                    <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
                                                </v-col>

                                                <v-col
                                                    cols="12"
                                                    class="field-relative no-padding"
                                                >
                                                    <v-text-field
                                                        label="Повтор пароля"
                                                        :type="showPassword ? 'text' : 'password'"
                                                        prepend-icon="mdi-lock-outline"
                                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                        @click:append="showPassword = !showPassword"
                                                        v-model.trim="newUser.password_confirmation"
                                                        :error-messages="passwordConfirmationErrors"
                                                        @input="$v.newUser.password_confirmation.$touch()"
                                                        @blur="$v.newUser.password_confirmation.$touch()"
                                                    />
                                                    <div class="invalid-feedback" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</div>
                                                </v-col>
                                            </v-form>
                                        </v-card-text>
                                        <v-divider/>
                                        <v-card-actions class="footer-auth-form">
                                            <v-btn text rounded color="blue" :to="{name: 'login'}">Войти</v-btn>
                                            <v-spacer/>
                                            <v-btn rounded color="success" @click="registerUser">Зарегистрироваться</v-btn>
                                        </v-card-actions>
                                        <v-divider/>
                                        <v-card-text class="privacy-text">
                                            Создавая учётную запись в lifeplus вы даете свое
                                            <router-link :to="{name: 'Personal'}" target="_blank">Согласие на обработку персональных данных</router-link>
                                            и принимаете
                                            <router-link :to="{name: 'Policy'}" target="_blank">Политику конфидециальности</router-link>.
                                        </v-card-text>
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
import {required, minLength, maxLength, sameAs, email, alphaNum} from 'vuelidate/lib/validators'

export default {
    name: "Register",
    mixins: [validationMixin],
    data: () => ({
        showPassword: false,
        newUser: {
            email: '',
            name: '',
            lr_number: '',
            password: '',
            password_confirmation: '',
            partner: ''
        },
        loading: false,
        errors: {}
    }),
    computed: {
        nameErrors () {
            const errors = []
            if (!this.$v.newUser.name.$dirty) return errors
            !this.$v.newUser.name.minLength && errors.push('Минимум 2 буквы')
            !this.$v.newUser.name.maxLength && errors.push('Максимум 30 букв')
            !this.$v.newUser.name.required && errors.push('Обязательно для заполнения')
            return errors
        },
        emailErrors () {
            const errors = []
            if (!this.$v.newUser.email.$dirty) return errors
            !this.$v.newUser.email.email && errors.push('Введите корректный email')
            !this.$v.newUser.email.required && errors.push('Обязательно для заполнения')
            !this.$v.newUser.email.maxLength && errors.push('Максимум 50 символов')
            return errors
        },
        lrNumberErrors () {
            const errors = []
            if (!this.$v.newUser.lr_number.$dirty) return errors
            !this.$v.newUser.lr_number.minLength && errors.push('Минимум 2 символа')
            !this.$v.newUser.lr_number.maxLength && errors.push('Максимум 30 символов')
            !this.$v.newUser.lr_number.alphaNum && errors.push('Только буквы и цифры')
            !this.$v.newUser.lr_number.required && errors.push('Обязательно для заполнения')
            return errors
        },
        passwordErrors () {
            const errors = []
            if (!this.$v.newUser.password.$dirty) return errors
            !this.$v.newUser.password.minLength && errors.push('Минимум 8 символов')
            !this.$v.newUser.password.required && errors.push('Обязательно для заполнения')
            return errors
        },
        passwordConfirmationErrors () {
            const errors = []
            if (!this.$v.newUser.password_confirmation.$dirty) return errors
            !this.$v.newUser.password_confirmation.sameAsPassword && errors.push('Пароли должны совпадать')
            return errors
        }
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            register: 'user/registerUser'
        }),
        registerUser() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.loading = true
                this.register(this.newUser)
                    .then((response) => {
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loading = false
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            }).then(() => {
                                this.$router.push ({name: 'verifyEmail', query: { email: this.newUser.email }})
                            })
                        }
                    })
                    .catch((error) => {
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
                                    text: 'Ошибка регистрации, попробуйте снова',
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
        newUser: {
            name: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(30),
            },
            email: {
                required,
                maxLength: maxLength(50),
                email
            },
            lr_number: {
                required,
                alphaNum,
                minLength: minLength(2),
                maxLength: maxLength(30)
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
