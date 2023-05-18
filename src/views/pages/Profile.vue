<template>
    <v-container
        id="user-profile"
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
                            Редактировать данные
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
                                        v-model.trim="profileData.name"
                                        :error-messages="nameErrors"
                                        @input="$v.profileData.name.$touch()"
                                        @blur="$v.profileData.name.$touch()"
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
                                        v-model.trim="profileData.last_name"
                                        :error-messages="lastNameErrors"
                                        @input="$v.profileData.last_name.$touch()"
                                        @blur="$v.profileData.last_name.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.last_name">{{ errors.last_name[0] }}</div>
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
                                        v-model.trim="profileData.country"
                                        :error-messages="countryErrors"
                                        @input="$v.profileData.country.$touch()"
                                        @blur="$v.profileData.country.$touch()"
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
                                        v-model.trim="profileData.city"
                                        :error-messages="cityErrors"
                                        @input="$v.profileData.city.$touch()"
                                        @blur="$v.profileData.city.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.city">{{ errors.city[0] }}</div>
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
                                        v-model.trim="profileData.who_is"
                                        :error-messages="whoIsErrors"
                                        @input="$v.profileData.who_is.$touch()"
                                        @blur="$v.profileData.who_is.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.who_is">{{ errors.who_is[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-select
                                        prepend-icon="mdi-gender-male-female"
                                        :items="genderItems"
                                        label="Пол"
                                        v-model.trim="profileData.gender"
                                    ></v-select>
                                    <div class="invalid-feedback" v-if="errors.gender">{{ errors.gender[0] }}</div>
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
                                        v-model.trim="profileData.phone"
                                        :error-messages="phoneErrors"
                                        @input="$v.profileData.phone.$touch()"
                                        @blur="$v.profileData.phone.$touch()"
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
                                        v-model.trim="profileData.phone_whatsapp"
                                        :error-messages="phoneWhatsappErrors"
                                        @input="$v.profileData.phone_whatsapp.$touch()"
                                        @blur="$v.profileData.phone_whatsapp.$touch()"
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
                                        v-model.trim="profileData.phone_viber"
                                        :error-messages="phoneViberErrors"
                                        @input="$v.profileData.phone_viber.$touch()"
                                        @blur="$v.profileData.phone_viber.$touch()"
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
                                        v-model.trim="profileData.telegram"
                                        :error-messages="telegramErrors"
                                        @input="$v.profileData.telegram.$touch()"
                                        @blur="$v.profileData.telegram.$touch()"
                                        hint="https://t.me/username"
                                        persistent-hint
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
                                        v-model.trim="profileData.instagram"
                                        :error-messages="instagramErrors"
                                        @input="$v.profileData.instagram.$touch()"
                                        @blur="$v.profileData.instagram.$touch()"
                                        hint="https://www.instagram.com/username"
                                        persistent-hint
                                    />
                                    <div class="invalid-feedback" v-if="errors.instagram">{{ errors.instagram[0] }}</div>
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
                                        v-model.trim="profileData.fb_messenger"
                                        :error-messages="fbMessengerErrors"
                                        @input="$v.profileData.fb_messenger.$touch()"
                                        @blur="$v.profileData.fb_messenger.$touch()"
                                        hint="https://m.me/username"
                                        persistent-hint
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
                                        prepend-icon="fab fa-vk"
                                        type="text"
                                        v-model.trim="profileData.vkontakte"
                                        :error-messages="vkontakteErrors"
                                        @input="$v.profileData.vkontakte.$touch()"
                                        @blur="$v.profileData.vkontakte.$touch()"
                                        hint="https://vk.me/username"
                                        persistent-hint
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
                                        v-model.trim="profileData.odnoklassniki"
                                        :error-messages="odnoklassnikiErrors"
                                        @input="$v.profileData.odnoklassniki.$touch()"
                                        @blur="$v.profileData.odnoklassniki.$touch()"
                                        hint="https://ok.ru/profile/1234567890 или https://ok.ru/username"
                                        persistent-hint
                                    />
                                    <div class="invalid-feedback" v-if="errors.odnoklassniki">{{ errors.odnoklassniki[0] }}
                                    </div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    class="text-right"
                                >
                                    <v-btn
                                        color="success"
                                        class="mr-0"
                                        @click="editProfileData"
                                    >
                                        Сохранить данные
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

            <v-col
                cols="12"
                md="4"
            >
                <v-card
                    class="v-card-profile v-card--material pa-3"
                >
                    <div class="d-flex grow flex-wrap">
                        <div
                            class="v-avatar mx-auto v-card--material__avatar elevation-6 grey"
                            style="height: 128px; min-width: 128px; width: 128px"
                        >
                            <div class="v-image v-responsive theme--light">
                                <img v-if="profileDataAvatar && !newAvatar" :src="`${ $store.state.serverPath }/storage/${ profileDataAvatar }`"
                                     alt=""
                                >
                                <img
                                    v-show="newAvatar"
                                    alt=""
                                    class="v-image__image v-image__image--cover"
                                    src=""
                                    ref="profileAvatarSrc"
                                />
                                <div class="v-responsive__content" style="width: 250px"></div>
                            </div>
                        </div>
                        <v-card-text class="text-center">
                            <div class="input-group mb-3">
                                <v-tooltip
                                    bottom
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            fab
                                            dark
                                            small
                                            class="mr-4"
                                            color="error"
                                            @click.stop="dialogAvatar = true"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Загрузить аватар</span>
                                </v-tooltip>
                                <v-tooltip
                                    bottom
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            fab
                                            dark
                                            small
                                            color="success"
                                            @click="saveAvatar"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            <v-icon>mdi-account-circle</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Сохранить аватар</span>
                                </v-tooltip>
                            </div>
                        </v-card-text>
                    </div>

                    <v-divider/>

                    <v-card-text class="text-center">
                        <h6 class="display-1 mb-3 grey--text">
                            {{ profileData.email }}
                        </h6>

                        <h6 class="display-1 mb-3 red--text">
                            {{ profileData.lr_number }}
                        </h6>
                    </v-card-text>

                    <v-progress-linear
                        :active="loadingAvatar"
                        :indeterminate="loadingAvatar"
                        absolute
                        bottom
                        color="success accent-4"
                    ></v-progress-linear>
                </v-card>

                <v-card
                    class="v-card-profile v-card--material pa-3"
                >
                    <div class="d-flex grow flex-wrap">
                        <div>
                            <img v-if="profileDataAuto && !profileNewAuto" :src="`${ $store.state.serverPath }/storage/${ profileDataAuto }`"
                                 alt=""
                                 style="height: 100px;"
                            >
                            <img
                                v-show="profileNewAuto"
                                alt=""
                                style="height: 100px;"
                                src=""
                                ref="newAutoImage"
                            />
                        </div>
                        <v-file-input
                            accept="image/*"
                            label="Выбрать фото вашего авто от LR"
                            @change="attachAuto"
                            ref="imageAuto"
                        ></v-file-input>
                        <v-card-text class="text-center">
                            <p style="color: #c00; font-size: 13px; line-height: 18px;">
                                Фото удалить нельзя!<br/>
                                Если у вас нет авто от LR, то не нужно здесь ничего добавлять!
                            </p>
                            <div class="input-group mb-3">
                                <v-btn
                                    color="success"
                                    rounded
                                    class="mr-0"
                                    @click="saveAuto"
                                >
                                    Сохранить авто
                                </v-btn>
                            </div>
                        </v-card-text>
                    </div>
                    <v-progress-linear
                        :active="loadingPhotoAuto"
                        :indeterminate="loadingPhotoAuto"
                        absolute
                        bottom
                        color="success accent-4"
                    ></v-progress-linear>
                </v-card>

                <v-card
                    class="v-card-profile v-card--material pa-3"
                >
                    <div class="d-flex grow flex-wrap">
                        <div>
                            <img v-if="profileDataMoney && !profileNewMoney" :src="`${ $store.state.serverPath }/storage/${ profileDataMoney }`"
                                 alt=""
                                 style="height: 100px;"
                            >
                            <img
                                v-show="profileNewMoney"
                                alt=""
                                style="height: 100px;"
                                src=""
                                ref="newMoneyImage"
                            />
                        </div>
                        <v-file-input
                            accept="image/*"
                            label="Выбрать фото вашего чека от LR"
                            @change="attachMoney"
                            ref="imageMoney"
                        ></v-file-input>
                        <v-card-text class="text-center">
                            <p style="color: #c00; font-size: 13px; line-height: 18px;">
                                Фото удалить нельзя!<br/>
                                Если у вас нет чека от LR, то не нужно здесь ничего добавлять!
                            </p>
                            <div class="input-group mb-3">
                                <v-btn
                                    color="success"
                                    rounded
                                    class="mr-0"
                                    @click="saveMoney"
                                >
                                    Сохранить чек
                                </v-btn>
                            </div>
                        </v-card-text>
                    </div>
                    <v-progress-linear
                        :active="loadingPhotoMoney"
                        :indeterminate="loadingPhotoMoney"
                        absolute
                        bottom
                        color="success accent-4"
                    ></v-progress-linear>
                </v-card>

                <base-material-card>
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Сменить пароль
                        </div>
                    </template>

                    <v-form>
                        <v-container class="py-0">
                            <v-row>
                                <v-col
                                    cols="12"
                                    class="field-relative no-padding"
                                >
                                    <v-text-field
                                        label="Текущий пароль"
                                        :type="showPassword ? 'text' : 'password'"
                                        prepend-icon="mdi-lock-outline"
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showPassword = !showPassword"
                                        v-model="profilePass.oldPassword"
                                        :error-messages="oldPasswordErrors"
                                        @input="$v.profilePass.oldPassword.$touch()"
                                        @blur="$v.profilePass.oldPassword.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.oldPassword">{{ errors.oldPassword[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    class="field-relative no-padding"
                                >
                                    <v-text-field
                                        label="Новый пароль"
                                        :type="showPassword ? 'text' : 'password'"
                                        prepend-icon="mdi-lock-outline"
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showPassword = !showPassword"
                                        v-model="profilePass.password"
                                        :error-messages="newPasswordErrors"
                                        @input="$v.profilePass.password.$touch()"
                                        @blur="$v.profilePass.password.$touch()"
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
                                        v-model="profilePass.password_confirmation"
                                        :error-messages="passwordConfirmationErrors"
                                        @input="$v.profilePass.password_confirmation.$touch()"
                                        @blur="$v.profilePass.password_confirmation.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    class="text-right"
                                >
                                    <v-btn
                                        color="success"
                                        class="mr-0"
                                        @click="changePassword"
                                    >
                                        Сменить пароль
                                    </v-btn>
                                </v-col>

                                <v-progress-linear
                                    :active="loadingPassword"
                                    :indeterminate="loadingPassword"
                                    absolute
                                    bottom
                                    color="success accent-4"
                                ></v-progress-linear>
                            </v-row>
                        </v-container>
                    </v-form>
                </base-material-card>
            </v-col>

            <v-dialog
                v-model="dialogAvatar"
                max-width="350"
            >
                <v-card>
                    <vue-avatar
                        :width="300"
                        :height="300"
                        :borderRadius="borderRadius"
                        :scale="scale"
                        ref="vueavatar"
                        @vue-avatar-editor:image-ready="onImageReady"
                    >
                    </vue-avatar>
                    <v-card-text>
                        <v-row>
                            <v-col cols="4" class="body-2 text--disabled">
                                Zoom : {{scale}}x
                            </v-col>
                            <v-col cols="8" class="pr-4">
                                <v-slider
                                    v-model="scale"
                                    class="align-center"
                                    min="1"
                                    max="3"
                                    step="0.02"
                                    type="number"
                                    hide-details
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveClicked"
                        >
                            Выбрать
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
import VueAvatar from '../../components/Avatar/VueAvatar.vue';
import * as userService from '../../services/user_service'
import { mapActions, mapGetters } from 'vuex'

import { validationMixin } from 'vuelidate'
import {required, minLength, maxLength, sameAs, numeric} from 'vuelidate/lib/validators'

export default {
    name: 'Profile',
    mixins: [validationMixin],
    components: {
        VueAvatar
    },
    data: () => ({
        showPassword: false,
        profilePass: {
            oldPassword: '',
            password: '',
            password_confirmation: ''
        },
        genderItems: [
            'м',
            'ж',
        ],
        loading: false,
        loadingAvatar: false,
        loadingPhotoMoney: false,
        loadingPhotoAuto: false,
        loadingPassword: false,
        rotation: 0,
        scale: 1,
        borderRadius: 200,
        errors: {},
        dialogAvatar: false,
        newAvatar: false,
        profileNewAuto: '',
        profileNewMoney: '',
        profileNewAvatar: '',
        dialog: true,
    }),
    computed: {
        ...mapGetters({
            profile: 'user/profile',
        }),
        profileData() {
            return this.profile
        },
        profileDataAvatar() {
            return this.profile.avatar
        },
        profileDataAuto() {
            return this.profile.photo_auto
        },
        profileDataMoney() {
            return this.profile.photo_money
        },
        nameErrors () {
            const errors = []
            if (!this.$v.profileData.name.$dirty) return errors
            !this.$v.profileData.name.minLength && errors.push('Минимум 2 буквы')
            !this.$v.profileData.name.maxLength && errors.push('Максимум 30 букв')
            !this.$v.profileData.name.required && errors.push('Обязательно для заполнения')
            return errors
        },
        lastNameErrors () {
            const errors = []
            if (!this.$v.profileData.last_name.$dirty) return errors
            !this.$v.profileData.last_name.minLength && errors.push('Минимум 3 буквы')
            !this.$v.profileData.last_name.maxLength && errors.push('Максимум 30 букв')
            return errors
        },
        countryErrors () {
            const errors = []
            if (!this.$v.profileData.country.$dirty) return errors
            !this.$v.profileData.country.minLength && errors.push('Минимум 2 буквы')
            !this.$v.profileData.country.maxLength && errors.push('Максимум 30 букв')
            return errors
        },
        cityErrors () {
            const errors = []
            if (!this.$v.profileData.city.$dirty) return errors
            !this.$v.profileData.city.minLength && errors.push('Минимум 2 буквы')
            !this.$v.profileData.city.maxLength && errors.push('Максимум 30 букв')
            return errors
        },
        whoIsErrors() {
            const errors = []
            if (!this.$v.profileData.who_is.$dirty) return errors
            !this.$v.profileData.who_is.maxLength && errors.push('Максимум 191 символ')
            return errors
        },

        aboutMeBizErrors() {
            const errors = []
            if (!this.$v.profileData.about_me_biz.$dirty) return errors
            !this.$v.profileData.about_me_biz.minLength && errors.push('Минимум 10 символов')
            !this.$v.profileData.about_me_biz.maxLength && errors.push('Максимум 3000 символов')
            return errors
        },
        telegramErrors () {
            const errors = []
            if (!this.$v.profileData.telegram.$dirty) return errors
            !this.$v.profileData.telegram.minLength && errors.push('Минимум 13 символов')
            !this.$v.profileData.telegram.maxLength && errors.push('Максимум 50 символов')
            return errors
        },
        instagramErrors () {
            const errors = []
            if (!this.$v.profileData.instagram.$dirty) return errors
            !this.$v.profileData.instagram.minLength && errors.push('Минимум 10 символов')
            !this.$v.profileData.instagram.maxLength && errors.push('Максимум 500 символов')
            return errors
        },
        fbMessengerErrors () {
            const errors = []
            if (!this.$v.profileData.fb_messenger.$dirty) return errors
            !this.$v.profileData.fb_messenger.minLength && errors.push('Минимум 2 символов')
            !this.$v.profileData.fb_messenger.maxLength && errors.push('Максимум 50 символ')
            return errors
        },
        vkontakteErrors() {
            const errors = []
            if (!this.$v.profileData.vkontakte.$dirty) return errors
            !this.$v.profileData.vkontakte.minLength && errors.push('Минимум 10 символов')
            !this.$v.profileData.vkontakte.maxLength && errors.push('Максимум 500 символов')
            return errors
        },
        odnoklassnikiErrors() {
            const errors = []
            if (!this.$v.profileData.odnoklassniki.$dirty) return errors
            !this.$v.profileData.odnoklassniki.minLength && errors.push('Минимум 10 символов')
            !this.$v.profileData.odnoklassniki.maxLength && errors.push('Максимум 500 символов')
            return errors
        },
        phoneErrors () {
            const errors = []
            if (!this.$v.profileData.phone.$dirty) return errors
            !this.$v.profileData.phone.minLength && errors.push('Минимум 5 цифр')
            !this.$v.profileData.phone.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.profileData.phone.numeric && errors.push('Только цифры')
            return errors
        },
        phoneWhatsappErrors () {
            const errors = []
            if (!this.$v.profileData.phone_whatsapp.$dirty) return errors
            !this.$v.profileData.phone_whatsapp.minLength && errors.push('Минимум 5 цифр')
            !this.$v.profileData.phone_whatsapp.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.profileData.phone_whatsapp.numeric && errors.push('Только цифры')
            return errors
        },
        phoneViberErrors () {
            const errors = []
            if (!this.$v.profileData.phone_viber.$dirty) return errors
            !this.$v.profileData.phone_viber.minLength && errors.push('Минимум 5 цифр')
            !this.$v.profileData.phone_viber.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.profileData.phone_viber.numeric && errors.push('Только цифры')
            return errors
        },
        oldPasswordErrors () {
            const errors = []
            if (!this.$v.profilePass.oldPassword.$dirty) return errors
            !this.$v.profilePass.oldPassword.required && errors.push('Обязательно для заполнения')
            !this.$v.profilePass.oldPassword.minLength && errors.push('Минимум 8 символов')
            return errors
        },
        newPasswordErrors () {
            const errors = []
            if (!this.$v.profilePass.password.$dirty) return errors
            !this.$v.profilePass.password.required && errors.push('Обязательно для заполнения')
            !this.$v.profilePass.password.minLength && errors.push('Минимум 8 символов')
            return errors
        },
        passwordConfirmationErrors () {
            const errors = []
            if (!this.$v.profilePass.password_confirmation.$dirty) return errors
            !this.$v.profilePass.password_confirmation.sameAsPassword && errors.push('Пароли должны совпадать')
            return errors
        }
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            updateProfile: 'user/updateProfile',
        }),
        hideUploadAvatarModal() {
            this.dialogAvatar = false
        },
        saveClicked() {
            let avatar = this.$refs.vueavatar.getImageScaled()
            this.$refs.profileAvatarSrc.src = avatar.toDataURL()
            this.profileNewAvatar = avatar.toDataURL()
            this.hideUploadAvatarModal()
            this.newAvatar = true
        },
        onImageReady() {
            this.scale = 1
            this.rotation = 0
        },
        changePassword() {
            this.$v.profilePass.$touch()
            if (!this.$v.profilePass.$invalid) {
                this.loadingPassword = true

                userService.changeProfilePassword(this.profileData.id, this.profilePass)
                    .then((response) => {
                        this.updateProfile(response.data)
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loadingPassword = false
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
                                this.loadingPassword = false
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            case 500:
                                this.loadingPassword = false
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            default:
                                this.loadingPassword = false
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
        },
        saveAvatar() {
            if (this.profileNewAvatar) {
                this.loadingAvatar = true

                let formData = new FormData()
                formData.append('avatar', this.profileNewAvatar)

                userService.updateProfileAvatar(this.profileData.id, formData)
                    .then((response) => {
                        this.updateProfile(response.data)
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loadingAvatar = false
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            })
                            this.profileNewAvatar = ''
                        }
                    })
                    .catch((error) => {
                        switch (error.response.status) {
                            case 500:
                                this.loadingAvatar = false
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            default:
                                this.loadingAvatar = false
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
                    text: 'Вы не выбрали новый аватар',
                })
            }
        },
        attachAuto() {
            if(this.$refs.imageAuto.$refs.input.files[0]) {
                this.profileNewAuto = this.$refs.imageAuto.$refs.input.files[0]
                let reader = new FileReader()

                reader.addEventListener('load', function () {
                    this.$refs.newAutoImage.src = reader.result
                }.bind(this), false)

                reader.readAsDataURL(this.profileNewAuto)
            } else {
                this.$refs.newAutoImage.src = ''
            }
        },
        attachMoney() {
            if(this.$refs.imageMoney.$refs.input.files[0]) {
                this.profileNewMoney = this.$refs.imageMoney.$refs.input.files[0]
                let reader = new FileReader()

                reader.addEventListener('load', function () {
                    this.$refs.newMoneyImage.src = reader.result
                }.bind(this), false)

                reader.readAsDataURL(this.profileNewMoney)
            } else {
                this.$refs.newMoneyImage.src = ''
            }
        },
        saveAuto() {
            if (this.profileNewAuto) {
                this.loadingPhotoAuto = true

                let formData = new FormData()
                formData.append('photo_auto', this.profileNewAuto)

                userService.updateProfileAuto(this.profile.id, formData)
                    .then((response) => {
                        this.updateProfile(response.data)
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loadingPhotoAuto = false
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            })
                            this.profileNewAuto = ''
                        }
                    })
                    .catch((error) => {
                        switch (error.response.status) {
                            case 500:
                                this.loadingPhotoAuto = false
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            default:
                                this.loadingPhotoAuto = false
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
                    text: 'Вы не выбрали фото авто',
                })
            }
        },
        saveMoney() {
            if (this.profileNewMoney) {
                this.loadingPhotoMoney = true

                let formData = new FormData()
                formData.append('photo_money', this.profileNewMoney)

                userService.updateProfileMoney(this.profile.id, formData)
                    .then((response) => {
                        this.updateProfile(response.data)
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loadingPhotoMoney = false
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            })
                            this.profileNewMoney = ''
                        }
                    })
                    .catch((error) => {
                        switch (error.response.status) {
                            case 500:
                                this.loadingPhotoMoney = false
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            default:
                                this.loadingPhotoMoney = false
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
                    text: 'Вы не выбрали фото чека',
                })
            }
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
    validations: {
        profileData: {
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

            about_me_biz: {
                minLength: minLength(10),
                maxLength: maxLength(3000)
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
        },
        profilePass: {
            oldPassword: {
                required,
                minLength: minLength(8),
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
