<template>
    <v-main>
        <section id="hero">
            <v-row no-gutters>
                <v-img
                    :min-height="'calc(100vh)'"
                    src="/img/register.jpg"
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
                                    <v-card width="500" class="v-card--material pa-3 mx-auto mt-10">
                                        <v-sheet
                                            color="success"
                                            min-height="80"
                                            width="100%"
                                            elevation="6"
                                            class="text-start v-card--material__heading mb-n6 pa-7"
                                            dark
                                        >
                                            <div class="display-2 font-weight-bold text-center">
                                                Пароль сброшен
                                            </div>
                                        </v-sheet>
                                        <v-card-text>
                                            Ссылка на смену пароля отправлена на твой Email.
                                        </v-card-text>
                                        <v-card-text>
                                            Если письма нет в папке "Входящие", проверь папку "Спам".
                                        </v-card-text>
                                        <v-card-text>
                                            Вспомнил пароль:
                                            <v-btn text
                                                   rounded
                                                   color="blue"
                                                   :to="{name: 'login'}"
                                            >Войти</v-btn>
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
export default {
    name: "ForgotPasswordSuccess"
}
</script>

<style scoped>

</style>