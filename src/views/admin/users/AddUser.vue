<template>
    <v-container
        id="add-user"
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
                            Add user
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
                                        v-model.trim="newUser.name"
                                        :error-messages="nameErrors"
                                        @input="$v.newUser.name.$touch()"
                                        @blur="$v.newUser.name.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Фамилия"
                                        prepend-icon="mdi-face-man"
                                        type="text"
                                        v-model.trim="newUser.last_name"
                                        :error-messages="lastNameErrors"
                                        @input="$v.newUser.last_name.$touch()"
                                        @blur="$v.newUser.last_name.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.last_name">{{ errors.last_name[0] }}
                                    </div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Страна"
                                        prepend-icon="mdi-city-variant-outline"
                                        type="text"
                                        v-model.trim="newUser.country"
                                        :error-messages="countryErrors"
                                        @input="$v.newUser.country.$touch()"
                                        @blur="$v.newUser.country.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.country">{{ errors.country[0] }}</div>
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
                                        v-model.trim="newUser.city"
                                        :error-messages="cityErrors"
                                        @input="$v.newUser.city.$touch()"
                                        @blur="$v.newUser.city.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.city">{{ errors.city[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-textarea
                                        outlined
                                        label="Обо мне (для Лидбота)"
                                        v-model.trim="newUser.about_me"
                                        :error-messages="aboutMeErrors"
                                        @change="$v.newUser.about_me.$touch()"
                                        @blur="$v.newUser.about_me.$touch()"
                                    ></v-textarea>
                                    <div class="invalid-feedback" v-if="errors.about_me">{{ errors.about_me[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-textarea
                                        outlined
                                        label="Обо мне (для Бизнес-презентации)"
                                        v-model.trim="newUser.about_me_biz"
                                        :error-messages="aboutMeBizErrors"
                                        @change="$v.newUser.about_me_biz.$touch()"
                                        @blur="$v.newUser.about_me_biz.$touch()"
                                    ></v-textarea>
                                    <div class="invalid-feedback" v-if="errors.about_me_biz">{{ errors.about_me_biz[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-textarea
                                        outlined
                                        label="Обо мне (для Страницы-визитки)"
                                        v-model.trim="newUser.about_me_viz"
                                        :error-messages="aboutMeVizErrors"
                                        @change="$v.newUser.about_me_viz.$touch()"
                                        @blur="$v.newUser.about_me_viz.$touch()"
                                    ></v-textarea>
                                    <div class="invalid-feedback" v-if="errors.about_me_viz">{{ errors.about_me_viz[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-textarea
                                        outlined
                                        label="Доп-блок (Для Страницы-визитки)"
                                        v-model.trim="newUser.dop_viz"
                                        :error-messages="dopVizErrors"
                                        @change="$v.newUser.dop_viz.$touch()"
                                        @blur="$v.newUser.dop_viz.$touch()"
                                    ></v-textarea>
                                    <div class="invalid-feedback" v-if="errors.dop_viz">{{ errors.dop_viz[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-select
                                        prepend-icon="mdi-account-key-outline"
                                        :items="vizDesignItems"
                                        label="Дизайн (для визитки)"
                                        v-model.trim="newUser.viz_design"
                                        :error-messages="vizDesignErrors"
                                        @change="$v.newUser.viz_design.$touch()"
                                        @blur="$v.newUser.viz_design.$touch()"
                                    ></v-select>
                                    <div class="invalid-feedback" v-if="errors.viz_design">{{ errors.viz_design[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-textarea
                                        outlined
                                        label="Промо теста"
                                        v-model.trim="newUser.promo_test"
                                        :error-messages="promoTestErrors"
                                        @change="$v.newUser.promo_test.$touch()"
                                        @blur="$v.newUser.promo_test.$touch()"
                                    ></v-textarea>
                                    <div class="invalid-feedback" v-if="errors.promo_test">{{ errors.promo_test[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-textarea
                                        outlined
                                        label="О клиентском чате"
                                        v-model.trim="newUser.about_chat"
                                        :error-messages="aboutChatErrors"
                                        @change="$v.newUser.about_chat.$touch()"
                                        @blur="$v.newUser.about_chat.$touch()"
                                    ></v-textarea>
                                    <div class="invalid-feedback" v-if="errors.about_chat">{{ errors.about_chat[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-textarea
                                        outlined
                                        label="Ваш бонус за заявку в ветке по бизнесу"
                                        v-model.trim="newUser.leedbonus"
                                        :error-messages="leedbonusErrors"
                                        @change="$v.newUser.leedbonus.$touch()"
                                        @blur="$v.newUser.leedbonus.$touch()"
                                    ></v-textarea>
                                    <div class="invalid-feedback" v-if="errors.leedbonus">{{ errors.leedbonus[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Подпись"
                                        prepend-icon="mdi-lead-pencil"
                                        type="text"
                                        v-model.trim="newUser.who_is"
                                        :error-messages="whoIsErrors"
                                        @input="$v.newUser.who_is.$touch()"
                                        @blur="$v.newUser.who_is.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.who_is">{{ errors.who_is[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-select
                                        prepend-icon="mdi-tooltip-check-outline"
                                        :items="genderItems"
                                        label="Пол"
                                        v-model.trim="newUser.gender"
                                    ></v-select>
                                    <div class="invalid-feedback" v-if="errors.gender">{{ errors.gender[0] }}</div>
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
                                        v-model.trim="newUser.email"
                                        :error-messages="emailErrors"
                                        @input="$v.newUser.email.$touch()"
                                        @blur="$v.newUser.email.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-menu
                                        v-model="dataEmailVerified"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="290px"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model.trim="newUser.email_verified_at"
                                                :error-messages="emailVerifiedErrors"
                                                @input="$v.newUser.email_verified_at.$touch()"
                                                @blur="$v.newUser.email_verified_at.$touch()"
                                                label="Дата подтверждения email"
                                                prepend-icon="mdi-email-check"
                                                v-bind="attrs"
                                                v-on="on"
                                                hint="YYYY-MM-DD format"
                                                persistent-hint
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="newUser.email_verified_at"
                                            @input="dataEmailVerified = false"
                                            :first-day-of-week="1"
                                            locale="ru-ru"
                                        ></v-date-picker>
                                    </v-menu>
                                    <div class="invalid-feedback" v-if="errors.email_verified_at">{{ errors.email_verified_at[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="LR number"
                                        prepend-icon="mdi-numeric"
                                        type="text"
                                        v-model.trim="newUser.lr_number"
                                        :error-messages="lrNumberErrors"
                                        @input="$v.newUser.lr_number.$touch()"
                                        @blur="$v.newUser.lr_number.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.lr_number">{{ errors.lr_number[0] }}</div>
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
                                        v-model.trim="newUser.phone"
                                        :error-messages="phoneErrors"
                                        @input="$v.newUser.phone.$touch()"
                                        @blur="$v.newUser.phone.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.phone">{{ errors.phone[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Phone WhatsApp"
                                        prepend-icon="mdi-whatsapp"
                                        type="text"
                                        v-model.trim="newUser.phone_whatsapp"
                                        :error-messages="phoneWhatsappErrors"
                                        @input="$v.newUser.phone_whatsapp.$touch()"
                                        @blur="$v.newUser.phone_whatsapp.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.phone_whatsapp">{{ errors.phone_whatsapp[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Phone Viber"
                                        prepend-icon="fab fa-viber"
                                        type="text"
                                        v-model.trim="newUser.phone_viber"
                                        :error-messages="phoneViberErrors"
                                        @input="$v.newUser.phone_viber.$touch()"
                                        @blur="$v.newUser.phone_viber.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.phone_viber">{{ errors.phone_viber[0] }}
                                    </div>
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
                                        v-model.trim="newUser.telegram"
                                        :error-messages="telegramErrors"
                                        @input="$v.newUser.telegram.$touch()"
                                        @blur="$v.newUser.telegram.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.telegram">{{ errors.telegram[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Instagram"
                                        prepend-icon="mdi-instagram"
                                        type="text"
                                        v-model.trim="newUser.instagram"
                                        :error-messages="instagramErrors"
                                        @input="$v.newUser.instagram.$touch()"
                                        @blur="$v.newUser.instagram.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.instagram">{{ errors.instagram[0] }}
                                    </div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Facebook messenger"
                                        prepend-icon="mdi-facebook-messenger"
                                        type="text"
                                        v-model.trim="newUser.fb_messenger"
                                        :error-messages="fbMessengerErrors"
                                        @input="$v.newUser.fb_messenger.$touch()"
                                        @blur="$v.newUser.fb_messenger.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.fb_messenger">{{ errors.fb_messenger[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="VKontakte"
                                        prepend-icon="mdi-vk"
                                        type="text"
                                        v-model.trim="newUser.vkontakte"
                                        :error-messages="vkontakteErrors"
                                        @input="$v.newUser.vkontakte.$touch()"
                                        @blur="$v.newUser.vkontakte.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.vkontakte">{{ errors.vkontakte[0] }}
                                    </div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Odnoklassniki"
                                        prepend-icon="mdi-odnoklassniki"
                                        type="text"
                                        v-model.trim="newUser.odnoklassniki"
                                        :error-messages="odnoklassnikiErrors"
                                        @input="$v.newUser.odnoklassniki.$touch()"
                                        @blur="$v.newUser.odnoklassniki.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.odnoklassniki">{{ errors.odnoklassniki[0] }}
                                    </div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-select
                                        prepend-icon="mdi-account-key-outline"
                                        :items="roleItems"
                                        label="Role"
                                        v-model.trim="newUser.role"
                                        :error-messages="roleErrors"
                                        @change="$v.newUser.role.$touch()"
                                        @blur="$v.newUser.role.$touch()"
                                    ></v-select>
                                    <div class="invalid-feedback" v-if="errors.role">{{ errors.role[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Пароль"
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
                                    lg="6"
                                    class="field-relative"
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
                                </v-col>
                                <div class="invalid-feedback" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</div>

                                <v-col
                                    cols="12"
                                    class="text-right"
                                >
                                    <v-btn
                                        color="success"
                                        class="mr-0"
                                        @click="addUser"
                                    >
                                        Save user
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
import {mapActions} from 'vuex'

import {validationMixin} from 'vuelidate'
import {required, minLength, maxLength, alphaNum, sameAs, numeric, email} from 'vuelidate/lib/validators'

export default {
    name: "AddUser",
    mixins: [validationMixin],
    data: () => ({
        showPassword: false,
        newUser: {
            name: '',
            last_name: '',
            email: '',
            email_verified_at: '',
            password: '',
            password_confirmation: '',
            role: 'guest',
            viz_design: 'default',
            country: '',
            city: '',
            gender: '',
            who_is: 'Консультант LR Health & Beauty',
            phone: '',
            phone_whatsapp: '',
            phone_viber: '',
            telegram: '',
            instagram: '',
            fb_messenger: '',
            lr_number: '',
            odnoklassniki: '',
            vkontakte: '',
            about_me: '',
            about_me_viz: '',
            about_me_biz: '',
            dop_viz: '',
            promo_test: '',
            about_chat: '',
            leedbonus: ''
        },
        genderItems: [
            'м',
            'ж',
        ],
        vizDesignItems: [
            'default',
            'dark',
            'brown'
        ],
        roleItems: [
            'admin',
            'guest',
            'partner',
        ],
        dataEmailVerified: false,
        loading: false,
        errors: {}
    }),
    computed: {
        nameErrors() {
            const errors = []
            if (!this.$v.newUser.name.$dirty) return errors
            !this.$v.newUser.name.minLength && errors.push('Минимум 2 буквы')
            !this.$v.newUser.name.maxLength && errors.push('Максимум 30 букв')
            !this.$v.newUser.name.required && errors.push('Обязательно для заполнения')
            return errors
        },
        lastNameErrors() {
            const errors = []
            if (!this.$v.newUser.last_name.$dirty) return errors
            !this.$v.newUser.last_name.minLength && errors.push('Минимум 3 буквы')
            !this.$v.newUser.last_name.maxLength && errors.push('Максимум 30 букв')
            return errors
        },
        countryErrors() {
            const errors = []
            if (!this.$v.newUser.country.$dirty) return errors
            !this.$v.newUser.country.minLength && errors.push('Минимум 2 буквы')
            !this.$v.newUser.country.maxLength && errors.push('Максимум 30 букв')
            return errors
        },
        cityErrors() {
            const errors = []
            if (!this.$v.newUser.city.$dirty) return errors
            !this.$v.newUser.city.minLength && errors.push('Минимум 2 буквы')
            !this.$v.newUser.city.maxLength && errors.push('Максимум 30 букв')
            return errors
        },
        whoIsErrors() {
            const errors = []
            if (!this.$v.newUser.who_is.$dirty) return errors
            !this.$v.newUser.who_is.maxLength && errors.push('Максимум 191 символ')
            return errors
        },
        aboutMeErrors() {
            const errors = []
            if (!this.$v.newUser.about_me.$dirty) return errors
            !this.$v.newUser.about_me.minLength && errors.push('Минимум 10 символов')
            !this.$v.newUser.about_me.maxLength && errors.push('Максимум 1000 символов')
            return errors
        },
        aboutMeBizErrors() {
            const errors = []
            if (!this.$v.newUser.about_me_biz.$dirty) return errors
            !this.$v.newUser.about_me_biz.minLength && errors.push('Минимум 10 символов')
            !this.$v.newUser.about_me_biz.maxLength && errors.push('Максимум 3000 символов')
            return errors
        },
        aboutMeVizErrors() {
            const errors = []
            if (!this.$v.newUser.about_me_viz.$dirty) return errors
            !this.$v.newUser.about_me_viz.minLength && errors.push('Минимум 10 символов')
            !this.$v.newUser.about_me_viz.maxLength && errors.push('Максимум 3000 символов')
            return errors
        },
        dopVizErrors() {
            const errors = []
            if (!this.$v.newUser.dop_viz.$dirty) return errors
            !this.$v.newUser.dop_viz.minLength && errors.push('Минимум 10 символов')
            !this.$v.newUser.dop_viz.maxLength && errors.push('Максимум 3000 символов')
            return errors
        },
        vizDesignErrors() {
            const errors = []
            if (!this.$v.newUser.viz_design.$dirty) return errors
            !this.$v.newUser.viz_design.required && errors.push('Обязательно для заполнения')
            return errors
        },
        promoTestErrors() {
            const errors = []
            if (!this.$v.newUser.promo_test.$dirty) return errors
            !this.$v.newUser.promo_test.minLength && errors.push('Минимум 10 символов')
            !this.$v.newUser.promo_test.maxLength && errors.push('Максимум 2000 символов')
            return errors
        },
        aboutChatErrors() {
            const errors = []
            if (!this.$v.newUser.about_chat.$dirty) return errors
            !this.$v.newUser.about_chat.minLength && errors.push('Минимум 10 символов')
            !this.$v.newUser.about_chat.maxLength && errors.push('Максимум 1000 символов')
            return errors
        },
        leedbonusErrors() {
            const errors = []
            if (!this.$v.newUser.leedbonus.$dirty) return errors
            !this.$v.newUser.leedbonus.minLength && errors.push('Минимум 10 символов')
            !this.$v.newUser.leedbonus.maxLength && errors.push('Максимум 1000 символов')
            return errors
        },
        lrNumberErrors() {
            const errors = []
            if (!this.$v.newUser.lr_number.$dirty) return errors
            !this.$v.newUser.lr_number.minLength && errors.push('Минимум 2 символа')
            !this.$v.newUser.lr_number.maxLength && errors.push('Максимум 30 символов')
            !this.$v.newUser.lr_number.alphaNum && errors.push('Только буквы и цифры')
            !this.$v.newUser.lr_number.required && errors.push('Обязательно для заполнения')
            return errors
        },
        telegramErrors() {
            const errors = []
            if (!this.$v.newUser.telegram.$dirty) return errors
            !this.$v.newUser.telegram.minLength && errors.push('Минимум 13 символов')
            !this.$v.newUser.telegram.maxLength && errors.push('Максимум 50 символов')
            return errors
        },
        instagramErrors() {
            const errors = []
            if (!this.$v.newUser.instagram.$dirty) return errors
            !this.$v.newUser.instagram.minLength && errors.push('Минимум 10 символов')
            !this.$v.newUser.instagram.maxLength && errors.push('Максимум 500 символов')
            return errors
        },
        vkontakteErrors() {
            const errors = []
            if (!this.$v.newUser.vkontakte.$dirty) return errors
            !this.$v.newUser.vkontakte.minLength && errors.push('Минимум 10 символов')
            !this.$v.newUser.vkontakte.maxLength && errors.push('Максимум 500 символов')
            return errors
        },
        odnoklassnikiErrors() {
            const errors = []
            if (!this.$v.newUser.odnoklassniki.$dirty) return errors
            !this.$v.newUser.odnoklassniki.minLength && errors.push('Минимум 10 символов')
            !this.$v.newUser.odnoklassniki.maxLength && errors.push('Максимум 500 символов')
            return errors
        },
        fbMessengerErrors () {
            const errors = []
            if (!this.$v.newUser.fb_messenger.$dirty) return errors
            !this.$v.newUser.fb_messenger.minLength && errors.push('Минимум 2 символов')
            !this.$v.newUser.fb_messenger.maxLength && errors.push('Максимум 50 символ')
            return errors
        },
        roleErrors() {
            const errors = []
            if (!this.$v.newUser.role.$dirty) return errors
            !this.$v.newUser.role.required && errors.push('Обязательно для заполнения')
            return errors
        },
        phoneErrors() {
            const errors = []
            if (!this.$v.newUser.phone.$dirty) return errors
            !this.$v.newUser.phone.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newUser.phone.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.newUser.phone.numeric && errors.push('Только цифры')
            return errors
        },
        phoneWhatsappErrors() {
            const errors = []
            if (!this.$v.newUser.phone_whatsapp.$dirty) return errors
            !this.$v.newUser.phone_whatsapp.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newUser.phone_whatsapp.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.newUser.phone_whatsapp.numeric && errors.push('Только цифры')
            return errors
        },
        phoneViberErrors() {
            const errors = []
            if (!this.$v.newUser.phone_viber.$dirty) return errors
            !this.$v.newUser.phone_viber.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newUser.phone_viber.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.newUser.phone_viber.numeric && errors.push('Только цифры')
            return errors
        },
        emailErrors() {
            const errors = []
            if (!this.$v.newUser.email.$dirty) return errors
            !this.$v.newUser.email.email && errors.push('Введите корректный email')
            !this.$v.newUser.email.required && errors.push('Обязательно для заполнения')
            !this.$v.newUser.email.maxLength && errors.push('Максимум 50 символ')
            return errors
        },
        emailVerifiedErrors() {
            const errors = []
            if (!this.$v.newUser.email_verified_at.$dirty) return errors
            !this.$v.newUser.email_verified_at.required && errors.push('Обязательно для заполнения')
            return errors
        },
        passwordErrors() {
            const errors = []
            if (!this.$v.newUser.password.$dirty) return errors
            !this.$v.newUser.password.minLength && errors.push('Минимум 8 символов')
            !this.$v.newUser.password.required && errors.push('Обязательно для заполнения')
            return errors
        },
        passwordConfirmationErrors() {
            const errors = []
            if (!this.$v.newUser.password_confirmation.$dirty) return errors
            !this.$v.newUser.password_confirmation.sameAsPassword && errors.push('Пароли должны совпадать')
            return errors
        }
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            createUser: 'user/addUser'
        }),
        addUser() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.loading = true
                this.createUser(this.newUser)
                    .then((response) => {
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loading = false
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            }).then(() => {
                                this.$router.push({name: 'Users'})
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
        newUser: {
            name: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(30),
            },
            last_name: {
                minLength: minLength(3),
                maxLength: maxLength(30),
            },
            country: {
                minLength: minLength(2),
                maxLength: maxLength(30),
            },
            city: {
                minLength: minLength(2),
                maxLength: maxLength(30),
            },
            who_is: {
                maxLength: maxLength(191),
            },
            about_me: {
                minLength: minLength(10),
                maxLength: maxLength(1000)
            },
            about_me_biz: {
                minLength: minLength(10),
                maxLength: maxLength(3000)
            },
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
            promo_test: {
                minLength: minLength(10),
                maxLength: maxLength(2000)
            },
            about_chat: {
                minLength: minLength(10),
                maxLength: maxLength(1000)
            },
            leedbonus: {
                minLength: minLength(10),
                maxLength: maxLength(1000)
            },
            lr_number: {
                required,
                alphaNum,
                minLength: minLength(2),
                maxLength: maxLength(30)
            },
            role: {
                required
            },
            telegram: {
                minLength: minLength(13),
                maxLength: maxLength(50)
            },
            instagram: {
                minLength: minLength(10),
                maxLength: maxLength(500)
            },
            vkontakte: {
                minLength: minLength(10),
                maxLength: maxLength(500)
            },
            odnoklassniki: {
                minLength: minLength(10),
                maxLength: maxLength(500)
            },
            fb_messenger: {
                minLength: minLength(2),
                maxLength: maxLength(50)
            },
            phone: {
                numeric,
                minLength: minLength(5),
                maxLength: maxLength(20)
            },
            phone_whatsapp: {
                numeric,
                minLength: minLength(5),
                maxLength: maxLength(20)
            },
            phone_viber: {
                numeric,
                minLength: minLength(5),
                maxLength: maxLength(20)
            },
            email: {
                required,
                maxLength: maxLength(50),
                email
            },
            email_verified_at: {
                required
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
.v-picker.v-card
    margin-top: 0 !important
    margin-bottom: 0 !important

</style>
