<template>
    <v-main>
        <section id="hero">
            <v-row no-gutters>
                <v-img
                    :min-height="'calc(100vh)'"
                    src="/img/mac-table.jpg"
                    gradient="to top right, rgba(0,0,0,.6), rgba(0,0,0,.6)"
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
                                    <div
                                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4']"
                                        class="mb-8"
                                        style="font-weight: bold"
                                    >
                                        <v-img
                                            max-width="100px"
                                            style="margin: 0 auto"
                                            src="/img/LogoLifePlus.png"
                                        />
                                        Добро пожаловать в систему поддержки партнеров LR
                                    </div>

                                    <v-divider></v-divider>

                                    <div
                                        :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']"
                                        class="mt-10 mb-16"
                                    >
                                        <div class="mt-5">
                                            <v-btn
                                                rounded
                                                color="primary"
                                                :to="{name: 'login'}"
                                                class="mr-5"
                                            >Войти</v-btn>
                                            <v-btn
                                                rounded
                                                color="blue"
                                                :to="{name: 'register'}"
                                            >Регистрация</v-btn>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-theme-provider>
                <v-container
                    id="intro"
                    tag="section"
                    class="landing"
                >
                    <v-row
                        justify="center"
                    >
                        <v-col
                            cols="12"
                            style="padding-top: 0"
                        >
                            <div class="block-autorize">
                                <v-btn text rounded color="primary" :to="{name: 'login', query: { partner: this.$route.query.partner }}">Войти</v-btn>
                                <v-btn text rounded color="primary" :to="{name: 'register', query: { partner: this.$route.query.partner }}">Регистрация</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
                </v-img>
            </v-row>
        </section>
    </v-main>
</template>

<script>
export default {
    name: "Landing",
    data: () => ({

    }),
    metaInfo: {
        title: 'LifePlus',
        meta: [
            { vmid: 'description', property: 'description', content: 'Командный сайт lifeplus. Инструменты для сетевого бизнеса' },
            { vmid: 'og:title', property: 'og:title', content: 'LifePlus' },
            { vmid: 'og:description', property: 'og:description', content: 'Командный сайт lifeplus. Инструменты для сетевого бизнеса' },
            { vmid: 'og:image', property: 'og:image', content: '/img/LogoLifePlus.png' },
        ],
    },
}
</script>

<style scoped>

</style>