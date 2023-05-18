<template>
    <v-container
        id="add-prospect"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <v-col
                cols="12"
                md="8"
            >
                <base-material-card>
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Add prospect
                        </div>
                    </template>

                    <v-form>
                        <v-container class="py-0">
                            <v-row>
                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Имя"
                                        prepend-icon="mdi-face-man"
                                        type="text"
                                        v-model.trim="newProspect.name"
                                        :error-messages="nameErrors"
                                        @input="$v.newProspect.name.$touch()"
                                        @blur="$v.newProspect.name.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Город"
                                        prepend-icon="mdi-home-city-outline"
                                        type="text"
                                        v-model.trim="newProspect.city"
                                        :error-messages="cityErrors"
                                        @input="$v.newProspect.city.$touch()"
                                        @blur="$v.newProspect.city.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.city">{{ errors.city[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Email"
                                        prepend-icon="mdi-email"
                                        type="email"
                                        v-model.trim="newProspect.email"
                                        :error-messages="emailErrors"
                                        @input="$v.newProspect.email.$touch()"
                                        @blur="$v.newProspect.email.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Phone"
                                        prepend-icon="mdi-phone"
                                        type="text"
                                        v-model.trim="newProspect.phone"
                                        :error-messages="phoneErrors"
                                        @input="$v.newProspect.phone.$touch()"
                                        @blur="$v.newProspect.phone.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.phone">{{ errors.phone[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Whatsapp"
                                        prepend-icon="mdi-whatsapp"
                                        type="text"
                                        v-model.trim="newProspect.phone_whatsapp"
                                        :error-messages="phoneWhatsappErrors"
                                        @input="$v.newProspect.phone_whatsapp.$touch()"
                                        @blur="$v.newProspect.phone_whatsapp.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.phone_whatsapp">{{ errors.phone_whatsapp[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Viber"
                                        prepend-icon="fab fa-viber"
                                        type="text"
                                        v-model.trim="newProspect.phone_viber"
                                        :error-messages="phoneViberErrors"
                                        @input="$v.newProspect.phone_viber.$touch()"
                                        @blur="$v.newProspect.phone_viber.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.phone_viber">{{ errors.phone_viber[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Telegram"
                                        prepend-icon="fab fa-telegram-plane"
                                        type="text"
                                        v-model.trim="newProspect.telegram"
                                    />
                                    <div class="invalid-feedback" v-if="errors.telegram">{{ errors.telegram[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="User ID"
                                        prepend-icon="mdi-account-outline"
                                        type="text"
                                        v-model.trim="newProspect.user_id"
                                        :error-messages="userIdErrors"
                                        @input="$v.newProspect.user_id.$touch()"
                                        @blur="$v.newProspect.user_id.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.user_id">{{ errors.user_id[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Инструмент"
                                        prepend-icon="mdi-hammer-screwdriver"
                                        type="text"
                                        v-model.trim="newProspect.instrument"
                                        :error-messages="instrumentErrors"
                                        @input="$v.newProspect.instrument.$touch()"
                                        @blur="$v.newProspect.instrument.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.instrument">{{ errors.instrument[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Действие в боте"
                                        prepend-icon="mdi-robot-outline"
                                        type="text"
                                        v-model.trim="newProspect.action_bot"
                                        :error-messages="actionBotErrors"
                                        @input="$v.newProspect.action_bot.$touch()"
                                        @blur="$v.newProspect.action_bot.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.action_bot">{{ errors.action_bot[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Результат теста"
                                        prepend-icon="mdi-chart-line"
                                        type="text"
                                        v-model.trim="newProspect.test_results"
                                        :error-messages="testResultsErrors"
                                        @input="$v.newProspect.test_results.$touch()"
                                        @blur="$v.newProspect.test_results.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.test_results">{{ errors.test_results[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-select
                                        prepend-icon="mdi-tooltip-plus-outline"
                                        :items="stepItems"
                                        label="Контакт (взаимодействие)"
                                        v-model.trim="newProspect.step"
                                        :error-messages="stepErrors"
                                        @change="$v.newProspect.step.$touch()"
                                        @blur="$v.newProspect.step.$touch()"
                                    ></v-select>
                                    <div class="invalid-feedback" v-if="errors.step">{{ errors.step[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-select
                                        prepend-icon="mdi-tooltip-check-outline"
                                        :items="resultItems"
                                        label="Результат"
                                        v-model.trim="newProspect.result"
                                    ></v-select>
                                    <div class="invalid-feedback" v-if="errors.result">{{ errors.result[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-textarea
                                        outlined
                                        label="Комментарий"
                                        v-model.trim="newProspect.comment"
                                        :error-messages="commentErrors"
                                        @change="$v.newProspect.comment.$touch()"
                                        @blur="$v.newProspect.comment.$touch()"
                                    ></v-textarea>
                                    <div class="invalid-feedback" v-if="errors.comment">{{ errors.comment[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    class="text-right"
                                >
                                    <v-btn
                                        color="success"
                                        class="mr-0"
                                        @click="addProspect"
                                    >
                                        Save Prospect
                                    </v-btn>
                                </v-col>
                                <v-progress-linear
                                    :active="loading"
                                    :indeterminate="loading"
                                    absolute
                                    bottom
                                    color="success accent-4"
                                ></v-progress-linear>
                            </v-row>
                        </v-container>
                    </v-form>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'

import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, numeric, email } from 'vuelidate/lib/validators'

export default {
    name: "AddProspect",
    mixins: [validationMixin],
    data: () => ({
        newProspect: {
            name: '',
            email: '',
            city: '',
            phone: '',
            phone_whatsapp: '',
            phone_viber: '',
            telegram: '',
            user_id: '',
            instrument: '',
            action_bot: '',
            test_results: ''
        },
        stepItems: [
            'Новый',
            'Повторный'
        ],
        resultItems: [
            'Пока не интересно',
            'Интересен бизнес',
            'Интересен продукт',
            'Думает',
            'Партнер ЛР',
            'Не ответил',
            'Отправлены рекомендации',
            'Отправлена ссылка на чат',
            'Добавлен в клиентский чат'
        ],
        loading: false,
        errors: {}
    }),
    computed: {
        nameErrors () {
            const errors = []
            if (!this.$v.newProspect.name.$dirty) return errors
            !this.$v.newProspect.name.minLength && errors.push('Минимум 2 символа')
            !this.$v.newProspect.name.maxLength && errors.push('Максимум 100 символов')
            return errors
        },
        cityErrors () {
            const errors = []
            if (!this.$v.newProspect.city.$dirty) return errors
            !this.$v.newProspect.city.minLength && errors.push('Минимум 2 буквы')
            !this.$v.newProspect.city.maxLength && errors.push('Максимум 30 букв')
            return errors
        },
        phoneErrors () {
            const errors = []
            if (!this.$v.newProspect.phone.$dirty) return errors
            !this.$v.newProspect.phone.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newProspect.phone.maxLength && errors.push('Максимум 30 цифр')
            return errors
        },
        phoneWhatsappErrors () {
            const errors = []
            if (!this.$v.newProspect.phone_whatsapp.$dirty) return errors
            !this.$v.newProspect.phone_whatsapp.numeric && errors.push('Только цифры')
            !this.$v.newProspect.phone_whatsapp.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newProspect.phone_whatsapp.maxLength && errors.push('Максимум 30 цифр')
            return errors
        },
        phoneViberErrors () {
            const errors = []
            if (!this.$v.newProspect.phone_viber.$dirty) return errors
            !this.$v.newProspect.phone_viber.numeric && errors.push('Только цифры')
            !this.$v.newProspect.phone_viber.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newProspect.phone_viber.maxLength && errors.push('Максимум 30 цифр')
            return errors
        },
        emailErrors () {
            const errors = []
            if (!this.$v.newProspect.email.$dirty) return errors
            !this.$v.newProspect.email.email && errors.push('Введите корректный email')
            !this.$v.newProspect.email.maxLength && errors.push('Максимум 50 символ')
            return errors
        },
        userIdErrors () {
            const errors = []
            if (!this.$v.newProspect.user_id.$dirty) return errors
            !this.$v.newProspect.user_id.numeric && errors.push('Только цифры')
            !this.$v.newProspect.user_id.minLength && errors.push('Минимум 1 цифра')
            !this.$v.newProspect.user_id.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.newProspect.user_id.required && errors.push('Обязательно для заполнения')
            return errors
        },
        stepErrors () {
            const errors = []
            if (!this.$v.newProspect.step.$dirty) return errors
            !this.$v.newProspect.step.required && errors.push('Обязательно для заполнения')
            return errors
        },
        instrumentErrors () {
            const errors = []
            if (!this.$v.newProspect.instrument.$dirty) return errors
            !this.$v.newProspect.instrument.required && errors.push('Обязательно для заполнения')
            !this.$v.newProspect.instrument.minLength && errors.push('Минимум 3 символа')
            !this.$v.newProspect.instrument.maxLength && errors.push('Максимум 20 символов')
            return errors
        },
        actionBotErrors () {
            const errors = []
            if (!this.$v.newProspect.action_bot.$dirty) return errors
            !this.$v.newProspect.action_bot.minLength && errors.push('Минимум 3 символа')
            !this.$v.newProspect.action_bot.maxLength && errors.push('Максимум 20 символов')
            return errors
        },
        testResultsErrors () {
            const errors = []
            if (!this.$v.newProspect.test_results.$dirty) return errors
            !this.$v.newProspect.test_results.minLength && errors.push('Минимум 10 символа')
            !this.$v.newProspect.test_results.maxLength && errors.push('Максимум 191 символов')
            return errors
        },
        commentErrors () {
            const errors = []
            if (!this.$v.newProspect.comment.$dirty) return errors
            !this.$v.newProspect.comment.minLength && errors.push('Минимум 2 символа')
            !this.$v.newProspect.comment.maxLength && errors.push('Максимум 500 символов')
            return errors
        }
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            createProspect: 'prospect/addProspect'
        }),
        addProspect() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.loading = true
                this.createProspect(this.newProspect)
                    .then((response) => {
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loading = false
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            }).then(() => {
                                this.$router.push ({ name: 'Prospects' })
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
    validations: {
        newProspect: {
            name: {
                minLength: minLength(2),
                maxLength: maxLength(100)
            },
            city: {
                minLength: minLength(2),
                maxLength: maxLength(30),
            },
            phone: {
                minLength: minLength(5),
                maxLength: maxLength(30)
            },
            phone_whatsapp: {
                numeric,
                minLength: minLength(5),
                maxLength: maxLength(30)
            },
            phone_viber: {
                numeric,
                minLength: minLength(5),
                maxLength: maxLength(30)
            },
            email: {
                maxLength: maxLength(191),
                email
            },
            user_id: {
                required,
                numeric,
                minLength: minLength(1),
                maxLength: maxLength(20)
            },
            instrument: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(20)
            },
            action_bot: {
                minLength: minLength(3),
                maxLength: maxLength(20)
            },
            test_results: {
                minLength: minLength(10),
                maxLength: maxLength(191)
            },
            step: {
                required
            },
            comment: {
                minLength: minLength(2),
                maxLength: maxLength(500)
            },
        }
    }
}
</script>

<style lang="sass">
.v-picker.v-card
        margin-top: 0 !important
        margin-bottom: 0 !important

</style>
