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
                                            min-height="80"
                                            width="100%"
                                            elevation="6"
                                            class="text-start v-card--material__heading mb-n6 pa-7"
                                            dark
                                        >
                                            <div class="display-2 font-weight-bold text-center">
                                                Проверка Email
                                            </div>
                                        </v-sheet>
                                        <v-card-text>
                                            Идет процесс подтверждения Email
                                        </v-card-text>
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
                    </v-theme-provider>
                </v-img>
            </v-row>
        </section>
    </v-main>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "VerifyEmailSuccess",
    data: () => ({
        loading: true
    }),
    methods: {
        ...mapActions({
            verifyEmail: 'user/verifyEmail',
            addNotification: 'application/addNotification'
        }),
    },
    created() {
        this.verifyEmail(this.$route.query)
            .then((response) => {
                this.loading = false
                this.addNotification({
                    show: true,
                    text: response.data.message
                }).then(() => {
                    this.$router.push({name: 'login'})
                })
            })
    }
}
</script>

<style scoped>

</style>