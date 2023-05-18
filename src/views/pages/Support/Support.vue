<template>
    <v-container
        id="support-page"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <v-col
                cols="12"
                md="4"
            >
                <base-material-card>
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light text-center">
                            Техподдержка
                        </div>
                    </template>
                    <div class="d-flex grow flex-wrap">
                        <v-card-text class="text-center">
                            <p>Хотите получить доступ к инструментам?</p>
                            <p>Нашли ошибку или столкнулись с техническими сложностями?</p>
                            <p>Есть вопросы или рекомендации?</p>
                            <p>Свяжитесь с администратором, выбрав способ ниже:</p>
                        </v-card-text>
                    </div>
                    <v-divider class="mb-3"/>
                    <v-row>
                        <v-col class="text-center">
                            <div class="input-group mb-3">
                                <v-tooltip
                                    top
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <a
                                            href="https://wa.me/79122248711"
                                            target="_blank"
                                            style="text-decoration: none"
                                        >
                                            <v-btn
                                                fab
                                                dark
                                                small
                                                class="mr-4"
                                                color="success"
                                                v-bind="attrs"
                                                v-on="on"
                                            >
                                                <v-icon>mdi-whatsapp</v-icon>
                                            </v-btn>
                                        </a>
                                    </template>
                                    <span>Связаться в WhatsApp</span>
                                </v-tooltip>
                                <v-tooltip
                                    top
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <a
                                            style="text-decoration: none"
                                            href="https://t.me/NikolayKon"
                                            target="_blank"
                                        >
                                            <v-btn
                                                fab
                                                dark
                                                small
                                                class="mr-4"
                                                color="blue"
                                                v-bind="attrs"
                                                v-on="on"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </template>
                                    <span>Связаться в Telegram</span>
                                </v-tooltip>
                                <v-tooltip
                                    top
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <a
                                            href="viber://chat?number=79122248711"
                                            target="_blank"
                                            style="text-decoration: none"
                                        >
                                            <v-btn
                                                fab
                                                dark
                                                small
                                                class="mr-4"
                                                color="deep-purple lighten-2"
                                                v-bind="attrs"
                                                v-on="on"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </template>
                                    <span>Связаться в Viber</span>
                                </v-tooltip>
                            </div>
                        </v-col>
                    </v-row>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Support"
}
</script>

<style scoped>

</style>
