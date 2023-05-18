<template>
    <v-container
        id="show-user"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <v-col
                cols="12"
                md="6"
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
                                <img v-if="userData.avatar"
                                     :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                     alt=""
                                >
                                <div class="v-responsive__content" style="width: 250px"></div>
                            </div>
                        </div>
                        <v-card-text class="text-center">
                            <h4 class="display-2 font-weight-light mb-3 black--text">
                                {{ userData.name }} {{ userData.last_name }}
                            </h4>
                            <h6
                                class="display-1 mb-3 green--text"
                                v-if="userData.who_is"
                            >
                                <v-icon class="mr-2 green--text">mdi-seal-variant</v-icon>
                                {{ userData.who_is }}
                            </h6>
                            <h6 class="display-1 mb-3 grey--text">
                                {{ userData.email }}
                            </h6>
                            <h6 class="display-1 mb-3 grey--text">
                                {{ userData.lr_number }}
                            </h6>

                            <h6 v-if="userData.role === 'admin'" class="display-1 mb-3 red--text">
                                <v-icon class="mr-2 red--text">mdi-seal-variant</v-icon>
                                Администратор
                            </h6>
                            <h6 v-if="userData.role === 'guest'" class="display-1 mb-3 orange--text">
                                <v-icon class="mr-2 orange--text">mdi-seal-variant</v-icon>
                                Гость
                            </h6>
                            <h6 v-if="userData.role === 'partner'" class="display-1 mb-3 green--text">
                                <v-icon class="mr-2 green--text">mdi-seal-variant</v-icon>
                                Партнер
                            </h6>
                        </v-card-text>
                    </div>
                    <v-divider/>

                    <v-row
                        class="text-left"
                        tag="v-card-text"
                    >
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <p>
                                <span class="font-weight-medium mr-4">Страна: </span>
                                <span>{{ userData.country }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Город: </span>
                                <span>{{ userData.city }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Email подтвержден: </span>
                                <span>{{ userData.email_verified_at }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Обо мне (для Лидбота): </span>
                                <span>{{ userData.about_me }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Обо мне (для Бизнес-презентации): </span>
                                <span>{{ userData.about_me_biz }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Обо мне (для Страницы-визитки): </span>
                                <span>{{ userData.about_me_viz }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Доп-блок (для Страницы-визитки): </span>
                                <span>{{ userData.dop_viz }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Дизайн (для Страницы-визитки): </span>
                                <span>{{ userData.viz_design }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Заголовок для видео (для бизнес-презы): </span>
                                <span>{{ userData.biz_video_title }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Ссылка на видео (для бизнес-презы): </span>
                                <span>{{ userData.biz_video_link }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Промо теста: </span>
                                <span>{{ userData.promo_test }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">О клиентском чате: </span>
                                <span>{{ userData.about_chat }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Leedbonus: </span>
                                <span>{{ userData.leedbonus }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Пол: </span>
                                <span>{{ userData.gender }}</span>
                            </p>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <p>
                                <span class="font-weight-medium mr-4">Phone: </span>
                                <span>{{ userData.phone }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">WhatsApp: </span>
                                <span>{{ userData.phone_whatsapp }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Viber: </span>
                                <span>{{ userData.phone_viber }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Telegram: </span>
                                <span>{{ userData.telegram }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Instagram: </span>
                                <span>{{ userData.instagram }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">FB messenger: </span>
                                <span>{{ userData.fb_messenger }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">VK: </span>
                                <span>{{ userData.vkontakte }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">OK: </span>
                                <span>{{ userData.odnoklassniki }}</span>
                            </p>
                        </v-col>
                        <v-col
                            cols="12"
                            v-if="userData.photo_money"
                        >
                            <img :src="`${ $store.state.serverPath }/storage/${ userData.photo_money }`"
                                 alt=""
                                 style="height: 100px;"
                            >
                        </v-col>
                        <v-col
                            cols="12"
                            v-if="userData.photo_auto"
                        >
                            <img :src="`${ $store.state.serverPath }/storage/${ userData.photo_auto }`"
                                 alt=""
                                 style="height: 100px;"
                            >
                        </v-col>
                    </v-row>

                    <v-divider/>

                    <h3 class="text-center mt-5">Доступ к инструментам</h3>

                    <p>{{ packageData.instrument }}</p>

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
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
    name: "ShowUser",
    data: () => ({
        loading: true
    }),
    computed: {
        ...mapGetters({
            userData: 'user/getUser',
            packageData: 'user/getUserAccess'
        }),
    },
    watch: {
        '$route.params.id': {
            handler: function () {
                this.loadUser(this.$route.params.id)
                this.loadUserPackage(this.$route.params.id)
                this.loading = false
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        ...mapActions({
            loadUser: 'user/loadOneUser',
            loadUserPackage: 'user/loadUserAccess'
        }),
    }
}
</script>

<style scoped>

</style>
