<template>
    <v-container
        id="school"
        fluid
        tag="section"
    >
        <div
            v-if="profileData.role === 'partner' || profileData.role === 'admin'"
        >
            <h2 style="text-align: center; text-transform: uppercase">Базовое обучение</h2>
            <v-row
                justify="center"
            >
                <v-col
                    cols="12"
                    lg="3"
                    md="4"
                    sm="5"
                >
                    <v-card
                        class="mx-auto"
                        max-width="374"
                    >
                        <v-img
                            height="150"
                            src="/img/system/start-system.png"
                            style="border-bottom: 1px solid #cccccc"
                        ></v-img>

                        <v-card-title>
                            <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">О системе. Концепция</p>
                        </v-card-title>

                        <v-card-actions class="pt-0 pb-4">
                            <v-btn style="margin: auto" text rounded color="success" :to="{name: 'AboutSystem'}">Перейти</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>

                <v-col
                    cols="12"
                    lg="3"
                    md="4"
                    sm="5"
                >
                    <v-card
                        class="mx-auto"
                        max-width="374"
                    >
                        <v-img
                            height="150"
                            src="/img/system/client-system.jpg"
                        ></v-img>

                        <v-card-title>
                            <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Сопровождение клиента</p>
                        </v-card-title>

                        <v-card-actions class="pt-0 pb-4">
                            <v-btn style="margin: auto" text rounded color="success" :to="{name: 'ClientSupport'}">Перейти</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>

                <v-col
                    cols="12"
                    lg="3"
                    md="4"
                    sm="5"
                >
                    <v-card
                        class="mx-auto"
                        max-width="374"
                    >
                        <v-img
                            height="150"
                            src="/img/system/partner-system.png"
                        ></v-img>

                        <v-card-title>
                            <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Как работать с инструментами</p>
                        </v-card-title>

                        <v-card-actions class="pt-0 pb-4">
                            <v-btn style="margin: auto" text rounded color="success" :to="{name: 'ToolsTraining'}">Перейти</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col
                    cols="12"
                    lg="3"
                    md="4"
                    sm="5"
                >
                    <v-card
                        class="mx-auto"
                        max-width="374"
                    >
                        <v-img
                            height="150"
                            src="/img/system/client-chat.jpg"
                        ></v-img>

                        <v-card-title>
                            <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Клиентский чат</p>
                        </v-card-title>

                        <v-card-actions class="pt-0 pb-4">
                            <v-btn style="margin: auto" text rounded color="success" :to="{name: 'ClientChat'}">Перейти</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>

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
                    color="warning"
                    class="px-md-16 px-5 py-3"
                >
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Ошибка
                        </div>

                        <div class="subtitle-1 font-weight-light">

                        </div>
                    </template>

                    <v-card-text
                        class="mt-10"
                    >
                        <p>У вас нет доступа к просмотру данной страницы. Обратитесь к администратору сайта:</p>
                        <router-link :to="{ name: 'Support' }"
                                     class="card-link"
                        >
                            <b class="font-weight-bold" style="color: #0288D1">Техподдержка</b>
                        </router-link>
                    </v-card-text>
                </base-material-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "School",
    data: () => ({

    }),
    computed: {
        ...mapGetters({
            profile: 'user/profile',
        }),
        profileData() {
            return this.profile
        },
    },
    methods: {

    },
}
</script>

<style scoped>

</style>