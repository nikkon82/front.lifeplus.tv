<template>
    <v-app>
        <v-main>
            <section id="hero">
                <v-row no-gutters>
                    <v-img
                        :min-height="'calc(100vh)'"
                        src="/img/clint-mckoy.jpg"
                        gradient="to top right, rgba(0,0,0,.8), rgba(0,0,0,.8)"
                        aspect-ratio="2"
                    >
                        <v-theme-provider dark>
                            <v-container fill-height>
                                <v-row
                                    align="center"
                                    class="white--text mx-auto"
                                    justify="center"
                                >
                                    <v-col
                                        class="white--text text-center"
                                        cols="12"
                                        tag="h1"
                                    >
                                    <span
                                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                                        class="font-weight-light"
                                    >
                                        Страницы не существует
                                    </span>
                                    <br>
                                    <span
                                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                                        class="font-weight-light"
                                    >
                                        Или у вас недостаточно прав для доступа
                                    </span>
                                        <br>
                                    <span
                                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                                        class="font-weight-black"
                                    >
                                        404
                                    </span>

                                    </v-col>
                                    <v-btn style="background-color: #4caf50" to="/">На главную</v-btn>
                                </v-row>
                            </v-container>
                        </v-theme-provider>
                    </v-img>
                </v-row>
            </section>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "Page404"
}
</script>

<style scoped>

</style>
