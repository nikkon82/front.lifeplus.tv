<template>
    <v-main>
        <section id="hero">
            <v-row no-gutters>
                <v-img
                    :min-height="'calc(100vh)'"
                    src="/img/mac-table.jpg"
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
                                                Проверьте свой Email
                                            </div>
                                        </v-sheet>
                                        <v-card-text>
                                            Прежде чем продолжить, пожалуйста, проверьте свою электронную почту на наличие проверочной ссылки.
                                        </v-card-text>
                                        <v-card-text>
                                            Если вы не получили письмо:
                                            <v-btn text
                                                   rounded
                                                   color="primary"
                                                   @click="resendVerify"
                                            >Отправьте ссылку еще раз</v-btn>
                                        </v-card-text>
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
import {mapActions} from 'vuex'

export default {
    name: "VerifyEmail",
    data: () => ({
        loading: false
    }),
    methods: {
        ...mapActions({
            resendVerifyEmail: 'user/resendVerifyEmail',
            addNotification: 'application/addNotification'
        }),
        resendVerify() {
            this.loading = true
            this.resendVerifyEmail(this.$route.query)
                .then((response) => {
                    this.loading = false
                    this.addNotification({
                        show: true,
                        text: response.data.message,
                        color: 'success'
                    })
                }).catch((error) => {
                    this.loading = false
                    switch (error.response.status) {
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
        },
    }
}
</script>

<style scoped>

</style>