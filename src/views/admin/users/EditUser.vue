<template>
    <v-container
        id="edit-user"
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
                            Edit user
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
                                        v-model.trim="userData.name"
                                        :error-messages="nameErrors"
                                        @input="$v.userData.name.$touch()"
                                        @blur="$v.userData.name.$touch()"
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
                                        v-model.trim="userData.last_name"
                                        :error-messages="lastNameErrors"
                                        @input="$v.userData.last_name.$touch()"
                                        @blur="$v.userData.last_name.$touch()"
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
                                        v-model.trim="userData.country"
                                        :error-messages="countryErrors"
                                        @input="$v.userData.country.$touch()"
                                        @blur="$v.userData.country.$touch()"
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
                                        v-model.trim="userData.city"
                                        :error-messages="cityErrors"
                                        @input="$v.userData.city.$touch()"
                                        @blur="$v.userData.city.$touch()"
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
                                        v-model.trim="userData.about_me"
                                        :error-messages="aboutMeErrors"
                                        @change="$v.userData.about_me.$touch()"
                                        @blur="$v.userData.about_me.$touch()"
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
                                        v-model.trim="userData.about_me_biz"
                                        :error-messages="aboutMeBizErrors"
                                        @change="$v.userData.about_me_biz.$touch()"
                                        @blur="$v.userData.about_me_biz.$touch()"
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
                                        v-model.trim="userData.about_me_viz"
                                        :error-messages="aboutMeVizErrors"
                                        @change="$v.userData.about_me_viz.$touch()"
                                        @blur="$v.userData.about_me_viz.$touch()"
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
                                        label="Доп-блок (для Страницы-визитки)"
                                        v-model.trim="userData.dop_viz"
                                        :error-messages="dopVizErrors"
                                        @change="$v.userData.dop_viz.$touch()"
                                        @blur="$v.userData.dop_viz.$touch()"
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
                                        v-model.trim="userData.viz_design"
                                        :error-messages="vizDesignErrors"
                                        @change="$v.userData.viz_design.$touch()"
                                        @blur="$v.userData.viz_design.$touch()"
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
                                        v-model.trim="userData.promo_test"
                                        :error-messages="promoTestErrors"
                                        @change="$v.userData.promo_test.$touch()"
                                        @blur="$v.userData.promo_test.$touch()"
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
                                        label="О клиентском чате"
                                        v-model.trim="userData.about_chat"
                                        :error-messages="aboutChatErrors"
                                        @input="$v.userData.about_chat.$touch()"
                                        @blur="$v.userData.about_chat.$touch()"
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
                                        v-model.trim="userData.leedbonus"
                                        :error-messages="leedbonusErrors"
                                        @input="$v.userData.leedbonus.$touch()"
                                        @blur="$v.userData.leedbonus.$touch()"
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
                                        v-model.trim="userData.who_is"
                                        :error-messages="whoIsErrors"
                                        @input="$v.userData.who_is.$touch()"
                                        @blur="$v.userData.who_is.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.who_is">{{ errors.who_is[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Заголовок к видео (для бизнес-презы)"
                                        prepend-icon="mdi-lead-pencil"
                                        type="text"
                                        v-model.trim="userData.biz_video_title"
                                        :error-messages="bizVideoTitleErrors"
                                        @input="$v.userData.biz_video_title.$touch()"
                                        @blur="$v.userData.biz_video_title.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.biz_video_title">{{ errors.biz_video_title[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Ссылка на видео (для бизнес-презы)"
                                        prepend-icon="mdi-lead-pencil"
                                        type="text"
                                        v-model.trim="userData.biz_video_link"
                                        :error-messages="bizVideoLinkErrors"
                                        @input="$v.userData.biz_video_link.$touch()"
                                        @blur="$v.userData.biz_video_link.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.biz_video_link">{{ errors.biz_video_link[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-select
                                        prepend-icon="mdi-account-key-outline"
                                        :items="genderItems"
                                        label="Gender"
                                        v-model.trim="userData.gender"
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
                                        v-model.trim="userData.email"
                                        :error-messages="emailErrors"
                                        @input="$v.userData.email.$touch()"
                                        @blur="$v.userData.email.$touch()"
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
                                                v-model.trim="userData.email_verified_at"
                                                :error-messages="emailVerifiedErrors"
                                                @input="$v.userData.email_verified_at.$touch()"
                                                @blur="$v.userData.email_verified_at.$touch()"
                                                label="Дата подтверждения email"
                                                prepend-icon="mdi-email-check"
                                                v-bind="attrs"
                                                v-on="on"
                                                hint="YYYY-MM-DD format"
                                                persistent-hint
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="userData.email_verified_at"
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
                                        v-model.trim="userData.lr_number"
                                        :error-messages="lrNumberErrors"
                                        @input="$v.userData.lr_number.$touch()"
                                        @blur="$v.userData.lr_number.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.lr_number">{{ errors.lr_number[0] }}
                                    </div>
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
                                        v-model.trim="userData.phone"
                                        :error-messages="phoneErrors"
                                        @input="$v.userData.phone.$touch()"
                                        @blur="$v.userData.phone.$touch()"
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
                                        v-model.trim="userData.phone_whatsapp"
                                        :error-messages="phoneWhatsappErrors"
                                        @input="$v.userData.phone_whatsapp.$touch()"
                                        @blur="$v.userData.phone_whatsapp.$touch()"
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
                                        v-model.trim="userData.phone_viber"
                                        :error-messages="phoneViberErrors"
                                        @input="$v.userData.phone_viber.$touch()"
                                        @blur="$v.userData.phone_viber.$touch()"
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
                                        v-model.trim="userData.telegram"
                                        :error-messages="telegramErrors"
                                        @input="$v.userData.telegram.$touch()"
                                        @blur="$v.userData.telegram.$touch()"
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
                                        v-model.trim="userData.instagram"
                                        :error-messages="instagramErrors"
                                        @input="$v.userData.instagram.$touch()"
                                        @blur="$v.userData.instagram.$touch()"
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
                                        v-model.trim="userData.fb_messenger"
                                        :error-messages="fbMessengerErrors"
                                        @input="$v.userData.fb_messenger.$touch()"
                                        @blur="$v.userData.fb_messenger.$touch()"
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
                                        v-model.trim="userData.vkontakte"
                                        :error-messages="vkontakteErrors"
                                        @input="$v.userData.vkontakte.$touch()"
                                        @blur="$v.userData.vkontakte.$touch()"
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
                                        v-model.trim="userData.odnoklassniki"
                                        :error-messages="odnoklassnikiErrors"
                                        @input="$v.userData.odnoklassniki.$touch()"
                                        @blur="$v.userData.odnoklassniki.$touch()"
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
                                        v-model.trim="userData.role"
                                        :error-messages="roleErrors"
                                        @change="$v.userData.role.$touch()"
                                        @blur="$v.userData.role.$touch()"
                                    ></v-select>
                                    <div class="invalid-feedback" v-if="errors.role">{{ errors.role[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    class="text-right"
                                >
                                    <v-btn
                                        color="success"
                                        class="mr-0"
                                        @click="editUser"
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
                                <img v-if="userDataAvatar && !newAvatar"
                                     :src="`${ $store.state.serverPath }/storage/${ userDataAvatar }`"
                                     alt=""
                                >
                                <img
                                    v-show="newAvatar"
                                    alt=""
                                    class="v-image__image v-image__image--cover"
                                    src=""
                                    ref="userAvatarSrc"
                                />
                                <div class="v-responsive__content" style="width: 250px"></div>
                            </div>
                        </div>
                        <v-card-text class="text-center">
                            <div class="input-group mb-3">
                                <v-btn
                                    @click.stop="dialogAvatar = true"
                                    color="error"
                                    rounded
                                    class="mr-0"
                                >
                                    Upload avatar
                                </v-btn>
                            </div>
                            <div class="input-group mb-3">
                                <v-btn
                                    color="success"
                                    rounded
                                    class="mr-0"
                                    @click="saveAvatar"
                                >
                                    Save avatar
                                </v-btn>
                            </div>
                        </v-card-text>
                    </div>
                    <v-progress-linear
                        :active="loadingAvatar"
                        :indeterminate="loadingAvatar"
                        absolute
                        bottom
                        color="success accent-4"
                    ></v-progress-linear>
                </v-card>

                <base-material-card>
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Доступ
                        </div>
                    </template>

                    <v-form>
                        <v-container class="py-0">
                            <v-row>
                                <v-col
                                    cols="12"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Доступ"
                                        prepend-icon="mdi-cash-multiple"
                                        type="text"
                                        v-model.trim="accessData.instrument"
                                        :error-messages="accessDataInstrumErrors"
                                        @input="$v.accessData.instrument.$touch()"
                                        @blur="$v.accessData.instrument.$touch()"
                                    />
                                </v-col>

                                <v-col
                                    cols="12"
                                    class="text-right"
                                >
                                    <v-btn
                                        color="success"
                                        class="mr-0"
                                        @click="updateAccess"
                                    >
                                        Сохранить
                                    </v-btn>
                                </v-col>

                                <v-progress-linear
                                    :active="loadingAccess"
                                    :indeterminate="loadingAccess"
                                    absolute
                                    bottom
                                    color="success accent-4"
                                ></v-progress-linear>
                            </v-row>
                        </v-container>
                    </v-form>
                </base-material-card>

                <v-card
                    class="v-card-profile v-card--material pa-3"
                >
                    <div class="d-flex grow flex-wrap">
                        <div>
                            <img v-if="userDataAuto && !userNewAuto" :src="`${ $store.state.serverPath }/storage/${ userDataAuto }`"
                                 alt=""
                                 style="height: 100px;"
                            >
                            <img
                                v-show="userNewAuto"
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
                            <img v-if="userDataMoney && !userNewMoney" :src="`${ $store.state.serverPath }/storage/${ userDataMoney }`"
                                 alt=""
                                 style="height: 100px;"
                            >
                            <img
                                v-show="userNewMoney"
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
                                        v-model="userPass.oldPassword"
                                        :error-messages="oldPasswordErrors"
                                        @input="$v.userPass.oldPassword.$touch()"
                                        @blur="$v.userPass.oldPassword.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.oldPassword">{{ errors.oldPassword[0] }}
                                    </div>
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
                                        v-model="userPass.password"
                                        :error-messages="newPasswordErrors"
                                        @input="$v.userPass.password.$touch()"
                                        @blur="$v.userPass.password.$touch()"
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
                                        v-model="userPass.password_confirmation"
                                        :error-messages="passwordConfirmationErrors"
                                        @input="$v.userPass.password_confirmation.$touch()"
                                        @blur="$v.userPass.password_confirmation.$touch()"
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
                                Zoom : {{ scale }}x
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
import VueAvatar from '../../../components/Avatar/VueAvatar.vue';
import * as adminService from '../../../services/admin_service'
import {mapActions, mapGetters} from 'vuex'

import {validationMixin} from 'vuelidate'
import {required, minLength, maxLength, alphaNum, sameAs, numeric, helpers, email} from 'vuelidate/lib/validators'

const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)

export default {
    name: "EditUser",
    mixins: [validationMixin],
    components: {
        VueAvatar
    },
    data: () => ({
        showPassword: false,
        userPass: {
            oldPassword: '',
            password: '',
            password_confirmation: ''
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
        dataAccessVerified: false,
        loading: false,
        loadingAvatar: false,
        loadingPhotoMoney: false,
        loadingPhotoAuto: false,
        loadingPassword: false,
        loadingAccess: false,
        rotation: 0,
        scale: 1,
        borderRadius: 200,
        errors: {},
        dialogAvatar: false,
        newAvatar: false,
        userNewAvatar: '',
        userNewAuto: '',
        userNewMoney: ''
    }),
    computed: {
        ...mapGetters({
            userDetails: 'user/getUser',
            userAccess: 'user/getUserAccess',
        }),
        userData() {
            return this.userDetails
        },
        accessData() {
            return this.userAccess
        },
        userDataAvatar() {
            return this.userDetails.avatar
        },
        userDataAuto() {
            return this.userDetails.photo_auto
        },
        userDataMoney() {
            return this.userDetails.photo_money
        },
        nameErrors() {
            const errors = []
            if (!this.$v.userData.name.$dirty) return errors
            !this.$v.userData.name.minLength && errors.push('Минимум 2 буквы')
            !this.$v.userData.name.maxLength && errors.push('Максимум 30 букв')
            !this.$v.userData.name.required && errors.push('Обязательно для заполнения')
            return errors
        },
        lastNameErrors() {
            const errors = []
            if (!this.$v.userData.last_name.$dirty) return errors
            !this.$v.userData.last_name.minLength && errors.push('Минимум 3 буквы')
            !this.$v.userData.last_name.maxLength && errors.push('Максимум 30 букв')
            return errors
        },
        countryErrors() {
            const errors = []
            if (!this.$v.userData.country.$dirty) return errors
            !this.$v.userData.country.minLength && errors.push('Минимум 2 буквы')
            !this.$v.userData.country.maxLength && errors.push('Максимум 30 букв')
            return errors
        },
        cityErrors() {
            const errors = []
            if (!this.$v.userData.city.$dirty) return errors
            !this.$v.userData.city.minLength && errors.push('Минимум 2 буквы')
            !this.$v.userData.city.maxLength && errors.push('Максимум 30 букв')
            return errors
        },
        whoIsErrors() {
            const errors = []
            if (!this.$v.userData.who_is.$dirty) return errors
            !this.$v.userData.who_is.maxLength && errors.push('Максимум 191 символ')
            return errors
        },
        bizVideoTitleErrors() {
            const errors = []
            if (!this.$v.userData.biz_video_title.$dirty) return errors
            !this.$v.userData.biz_video_title.maxLength && errors.push('Максимум 191 символ')
            return errors
        },
        bizVideoLinkErrors() {
            const errors = []
            if (!this.$v.userData.biz_video_link.$dirty) return errors
            !this.$v.userData.biz_video_link.maxLength && errors.push('Максимум 191 символ')
            return errors
        },
        aboutMeErrors() {
            const errors = []
            if (!this.$v.userData.about_me.$dirty) return errors
            !this.$v.userData.about_me.minLength && errors.push('Минимум 10 символов')
            !this.$v.userData.about_me.maxLength && errors.push('Максимум 1000 символов')
            return errors
        },
        aboutMeBizErrors() {
            const errors = []
            if (!this.$v.userData.about_me_biz.$dirty) return errors
            !this.$v.userData.about_me_biz.minLength && errors.push('Минимум 10 символов')
            !this.$v.userData.about_me_biz.maxLength && errors.push('Максимум 3000 символов')
            return errors
        },
        aboutMeVizErrors() {
            const errors = []
            if (!this.$v.userData.about_me_viz.$dirty) return errors
            !this.$v.userData.about_me_viz.minLength && errors.push('Минимум 10 символов')
            !this.$v.userData.about_me_viz.maxLength && errors.push('Максимум 3000 символов')
            return errors
        },
        dopVizErrors() {
            const errors = []
            if (!this.$v.userData.dop_viz.$dirty) return errors
            !this.$v.userData.dop_viz.minLength && errors.push('Минимум 10 символов')
            !this.$v.userData.dop_viz.maxLength && errors.push('Максимум 3000 символов')
            return errors
        },
        vizDesignErrors() {
            const errors = []
            if (!this.$v.userData.viz_design.$dirty) return errors
            !this.$v.userData.viz_design.required && errors.push('Обязательно для заполнения')
            return errors
        },
        promoTestErrors() {
            const errors = []
            if (!this.$v.userData.promo_test.$dirty) return errors
            !this.$v.userData.promo_test.minLength && errors.push('Минимум 10 символов')
            !this.$v.userData.promo_test.maxLength && errors.push('Максимум 2000 символов')
            return errors
        },
        aboutChatErrors() {
            const errors = []
            if (!this.$v.userData.about_chat.$dirty) return errors
            !this.$v.userData.about_chat.minLength && errors.push('Минимум 10 символов')
            !this.$v.userData.about_chat.maxLength && errors.push('Максимум 1000 символов')
            return errors
        },
        leedbonusErrors() {
            const errors = []
            if (!this.$v.userData.leedbonus.$dirty) return errors
            !this.$v.userData.leedbonus.minLength && errors.push('Минимум 10 символов')
            !this.$v.userData.leedbonus.maxLength && errors.push('Максимум 1000 символов')
            return errors
        },
        lrNumberErrors() {
            const errors = []
            if (!this.$v.userData.lr_number.$dirty) return errors
            !this.$v.userData.lr_number.minLength && errors.push('Минимум 2 символа')
            !this.$v.userData.lr_number.maxLength && errors.push('Максимум 30 символов')
            !this.$v.userData.lr_number.alphaNum && errors.push('Только буквы и цифры')
            !this.$v.userData.lr_number.required && errors.push('Обязательно для заполнения')
            return errors
        },
        telegramErrors() {
            const errors = []
            if (!this.$v.userData.telegram.$dirty) return errors
            !this.$v.userData.telegram.minLength && errors.push('Минимум 13 символов')
            !this.$v.userData.telegram.maxLength && errors.push('Максимум 50 символов')
            return errors
        },
        instagramErrors () {
            const errors = []
            if (!this.$v.userData.instagram.$dirty) return errors
            !this.$v.userData.instagram.minLength && errors.push('Минимум 10 символов')
            !this.$v.userData.instagram.maxLength && errors.push('Максимум 500 символов')
            return errors
        },
        fbMessengerErrors () {
            const errors = []
            if (!this.$v.userData.fb_messenger.$dirty) return errors
            !this.$v.userData.fb_messenger.minLength && errors.push('Минимум 2 символов')
            !this.$v.userData.fb_messenger.maxLength && errors.push('Максимум 50 символ')
            return errors
        },
        vkontakteErrors() {
            const errors = []
            if (!this.$v.userData.vkontakte.$dirty) return errors
            !this.$v.userData.vkontakte.minLength && errors.push('Минимум 10 символов')
            !this.$v.userData.vkontakte.maxLength && errors.push('Максимум 500 символов')
            return errors
        },
        odnoklassnikiErrors() {
            const errors = []
            if (!this.$v.userData.odnoklassniki.$dirty) return errors
            !this.$v.userData.odnoklassniki.minLength && errors.push('Минимум 10 символов')
            !this.$v.userData.odnoklassniki.maxLength && errors.push('Максимум 500 символов')
            return errors
        },
        roleErrors() {
            const errors = []
            if (!this.$v.userData.role.$dirty) return errors
            !this.$v.userData.role.required && errors.push('Обязательно для заполнения')
            return errors
        },
        phoneErrors() {
            const errors = []
            if (!this.$v.userData.phone.$dirty) return errors
            !this.$v.userData.phone.minLength && errors.push('Минимум 5 цифр')
            !this.$v.userData.phone.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.userData.phone.numeric && errors.push('Только цифры')
            return errors
        },
        phoneWhatsappErrors() {
            const errors = []
            if (!this.$v.userData.phone_whatsapp.$dirty) return errors
            !this.$v.userData.phone_whatsapp.minLength && errors.push('Минимум 5 цифр')
            !this.$v.userData.phone_whatsapp.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.userData.phone_whatsapp.numeric && errors.push('Только цифры')
            return errors
        },
        phoneViberErrors() {
            const errors = []
            if (!this.$v.userData.phone_viber.$dirty) return errors
            !this.$v.userData.phone_viber.minLength && errors.push('Минимум 5 цифр')
            !this.$v.userData.phone_viber.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.userData.phone_viber.numeric && errors.push('Только цифры')
            return errors
        },
        emailErrors() {
            const errors = []
            if (!this.$v.userData.email.$dirty) return errors
            !this.$v.userData.email.email && errors.push('Введите корректный email')
            !this.$v.userData.email.required && errors.push('Обязательно для заполнения')
            !this.$v.userData.email.maxLength && errors.push('Максимум 50 символ')
            return errors
        },
        emailVerifiedErrors() {
            const errors = []
            if (!this.$v.userData.email_verified_at.$dirty) return errors
            !this.$v.userData.email_verified_at.required && errors.push('Обязательно для заполнения')
            return errors
        },
        oldPasswordErrors() {
            const errors = []
            if (!this.$v.userPass.oldPassword.$dirty) return errors
            !this.$v.userPass.oldPassword.required && errors.push('Обязательно для заполнения')
            !this.$v.userPass.oldPassword.minLength && errors.push('Минимум 8 символов')
            return errors
        },
        newPasswordErrors() {
            const errors = []
            if (!this.$v.userPass.password.$dirty) return errors
            !this.$v.userPass.password.required && errors.push('Обязательно для заполнения')
            !this.$v.userPass.password.minLength && errors.push('Минимум 8 символов')
            return errors
        },
        passwordConfirmationErrors() {
            const errors = []
            if (!this.$v.userPass.password_confirmation.$dirty) return errors
            !this.$v.userPass.password_confirmation.sameAsPassword && errors.push('Пароли должны совпадать')
            return errors
        },
        accessDataInstrumErrors() {
            const errors = []
            if (!this.$v.accessData.instrument.$dirty) return errors
            !this.$v.accessData.instrument.required && errors.push('Обязательно для заполнения')
            return errors
        },
    },
    methods: {
        ...mapActions({
            loadUser: 'user/loadOneUser',
            loadUserAccess: 'user/loadUserAccess',
            addNotification: 'application/addNotification',
            updateUser: 'user/updateUser',
        }),
        hideUploadAvatarModal() {
            this.dialogAvatar = false
        },
        saveClicked() {
            let avatar = this.$refs.vueavatar.getImageScaled()
            this.$refs.userAvatarSrc.src = avatar.toDataURL()
            this.userNewAvatar = avatar.toDataURL()
            this.hideUploadAvatarModal()
            this.newAvatar = true
        },
        onImageReady() {
            this.scale = 1
            this.rotation = 0
        },
        changePassword() {
            this.$v.userPass.$touch()
            if (!this.$v.userPass.$invalid) {
                this.loadingPassword = true

                adminService.changePassword(this.userData.id, this.userPass)
                    .then((response) => {
                        this.updateUser(response.data)
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
                                    color: 'success'
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
            if (this.userNewAvatar) {
                this.loadingAvatar = true

                let formData = new FormData()
                formData.append('avatar', this.userNewAvatar)

                adminService.updateAvatar(this.userData.id, formData)
                    .then((response) => {
                        this.updateUser(response.data)
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loadingAvatar = false
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            })
                            this.userNewAvatar = ''
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
                this.userNewAuto = this.$refs.imageAuto.$refs.input.files[0]
                let reader = new FileReader()

                reader.addEventListener('load', function () {
                    this.$refs.newAutoImage.src = reader.result
                }.bind(this), false)

                reader.readAsDataURL(this.userNewAuto)
            } else {
                this.$refs.newAutoImage.src = ''
            }
        },
        attachMoney() {
            if(this.$refs.imageMoney.$refs.input.files[0]) {
                this.userNewMoney = this.$refs.imageMoney.$refs.input.files[0]
                let reader = new FileReader()

                reader.addEventListener('load', function () {
                    this.$refs.newMoneyImage.src = reader.result
                }.bind(this), false)

                reader.readAsDataURL(this.userNewMoney)
            } else {
                this.$refs.newMoneyImage.src = ''
            }
        },
        saveAuto() {
            if (this.userNewAuto) {
                this.loadingPhotoAuto = true

                let formData = new FormData()
                formData.append('photo_auto', this.userNewAuto)

                adminService.updateUserAuto(this.userData.id, formData)
                    .then((response) => {
                        this.updateUser(response.data)
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loadingPhotoAuto = false
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            })
                            this.userNewAuto = ''
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
            if (this.userNewMoney) {
                this.loadingPhotoMoney = true

                let formData = new FormData()
                formData.append('photo_money', this.userNewMoney)

                adminService.updateUserMoney(this.userData.id, formData)
                    .then((response) => {
                        this.updateUser(response.data)
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loadingPhotoMoney = false
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            })
                            this.userNewMoney = ''
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
        editUser() {
            this.$v.userData.$touch()
            if (!this.$v.userData.$invalid) {
                this.loading = true
                adminService.updateUser(this.userData.id, this.userData)
                    .then((response) => {
                        this.updateUser(response.data)
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
        },
        updateAccess() {
            this.$v.accessData.$touch()
            if (!this.$v.accessData.$invalid) {
                this.loadingAccess = true
                this.accessData.user_id = this.userData.id
                adminService.updateUserAccess(this.userData.id, this.accessData)
                    .then((response) => {
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loadingAccess = false
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            })
                        }
                    })
                    .catch((error) => {
                        switch (error.response.status) {
                            case 500:
                                this.loadingAccess = false
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                            default:
                                this.loadingAccess = false
                                this.addNotification({
                                    show: true,
                                    text: error.response.data.message,
                                    color: 'error'
                                })
                                this.errors = error.response.data.errors
                                break
                        }
                    })
            }
        },
    },
    mounted() {
        this.loadUser(this.$route.params.id)
        this.loadUserAccess(this.$route.params.id)
    },
    validations: {
        userData: {
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
            biz_video_title: {
                maxLength: maxLength(191),
            },
            biz_video_link: {
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
            fb_messenger: {
                minLength: minLength(2),
                maxLength: maxLength(50)
            },
            vkontakte: {
                minLength: minLength(10),
                maxLength: maxLength(500)
            },
            odnoklassniki: {
                minLength: minLength(10),
                maxLength: maxLength(500)
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
            }
        },
        userPass: {
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
        },
        accessData: {
            instrument: {
                required,
                alpha
            },
        },
    }
}
</script>

<style lang="sass">
.v-picker.v-card
    margin-top: 0 !important
    margin-bottom: 0 !important

</style>
