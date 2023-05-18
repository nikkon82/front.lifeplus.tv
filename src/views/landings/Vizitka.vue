<template>
    <v-main>
        <div
            class="viz-main"
        >
            <section
                id="viz-page"
                :class="classDesign"
            >
                <v-row no-gutters>
                    <v-container
                        tag="section"
                        class="ava_viz_bg"
                    >
                        <div class="d-flex grow flex-wrap mt-16">
                            <div
                                class="v-avatar mx-auto elevation-6 grey"
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

                            <v-card-text class="text-center mt-7">
                                <h2 class="viz-h2">
                                    {{ userData.name }} {{ userData.last_name }}
                                </h2>
                            </v-card-text>
                        </div>
                    </v-container>

                    <v-container
                        tag="section"
                        v-if="userData.about_me_viz"
                    >
                        <div class="mb-5">
                             <span v-html="userData.about_me_viz"></span>
                        </div>
                    </v-container>

                    <v-container
                        tag="section"
                        v-if="userData.photo_money"
                    >
                        <div class="mt-5 mb-5">
                            <h3 class="viz-h3 mb-5 text-center">
                                Мой доход от LR
                            </h3>
                            <p
                                class="viz-img"
                                style="width: 100%; height: auto"
                            >
                                <img
                                    style="width: 100%;"
                                    :src="`${ $store.state.serverPath }/storage/${ userData.photo_money }`"
                                    alt=""
                                />
                            </p>
                        </div>
                    </v-container>

                    <v-container
                        tag="section"
                        v-if="userData.photo_auto"
                    >
                        <div class="mt-5 mb-5">
                            <h3 class="viz-h3 mb-5 text-center">
                                Мое авто от LR
                            </h3>
                            <p
                                class="viz-img"
                                style="width: 100%; height: auto"
                            >
                                <img
                                    style="width: 100%;"
                                    :src="`${ $store.state.serverPath }/storage/${ userData.photo_auto }`"
                                    alt=""
                                />
                            </p>
                        </div>
                    </v-container>

                    <v-container
                        tag="section"
                        v-if="userData.dop_viz"
                    >
                        <div class="mt-5 mb-5 dop_viz_div">
                            <span v-html="userData.dop_viz"></span>
                        </div>
                    </v-container>

                    <v-container
                        tag="section"
                        class="pt-16 pb-16 viz-bottom-section"
                    >
                        <v-row>
                            <v-col class="text-center">
                                <div class="input-group mb-3">
                                    <v-tooltip
                                        top
                                        v-if="userData.phone_whatsapp"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <a
                                                style="text-decoration: none"
                                                :href="`https://wa.me/${userData.phone_whatsapp}`"
                                                target="_blank"
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
                                        v-if="userData.telegram"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <a
                                                style="text-decoration: none"
                                                :href="`${userData.telegram}`"
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
                                        v-if="userData.phone_viber"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <a
                                                :href="`viber://chat?number=${userData.phone_viber}`"
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

                                    <v-tooltip
                                        top
                                        v-if="userData.instagram"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <a
                                                :href="`${userData.instagram}`"
                                                target="_blank"
                                                style="text-decoration: none"
                                            >
                                                <v-btn
                                                    fab
                                                    dark
                                                    small
                                                    class="mr-4"
                                                    color="pink darken-1"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >
                                                    <v-icon>mdi-instagram</v-icon>
                                                </v-btn>
                                            </a>
                                        </template>
                                        <span>Связаться в Instagram</span>
                                    </v-tooltip>

                                    <v-tooltip
                                        top
                                        v-if="userData.fb_messenger"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <a
                                                :href="`${userData.fb_messenger}`"
                                                target="_blank"
                                                style="text-decoration: none"
                                            >
                                                <v-btn
                                                    fab
                                                    dark
                                                    small
                                                    class="mr-4"
                                                    color="light-blue"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >
                                                    <v-icon>mdi-facebook-messenger</v-icon>
                                                </v-btn>
                                            </a>
                                        </template>
                                        <span>Связаться в Facebook Messenger</span>
                                    </v-tooltip>

                                    <v-tooltip
                                        top
                                        v-if="userData.vkontakte"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <a
                                                :href="`${userData.vkontakte}`"
                                                target="_blank"
                                                style="text-decoration: none"
                                            >
                                                <v-btn
                                                    fab
                                                    dark
                                                    small
                                                    class="mr-4"
                                                    color="blue darken-2"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >
                                                    <v-icon>fab fa-vk</v-icon>
                                                </v-btn>
                                            </a>
                                        </template>
                                        <span>Связаться во VKontakte</span>
                                    </v-tooltip>

                                    <v-tooltip
                                        top
                                        v-if="userData.odnoklassniki"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <a
                                                :href="`${userData.odnoklassniki}`"
                                                target="_blank"
                                                style="text-decoration: none"
                                            >
                                                <v-btn
                                                    fab
                                                    dark
                                                    small
                                                    class="mr-4"
                                                    color="orange darken-2"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >
                                                    <v-icon>mdi-odnoklassniki</v-icon>
                                                </v-btn>
                                            </a>
                                        </template>
                                        <span>Связаться в Одноклассники</span>
                                    </v-tooltip>
                                </div>
                            </v-col>
                        </v-row>

                    </v-container>
                </v-row>
            </section>
        </div>
    </v-main>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Viz",
    data: () => ({
        loading: true,
        lr_number: '',
    }),
    metaInfo: {
        title: 'Визитка партнера LR Health & Beauty',
        meta: [
            { vmid: 'description', property: 'description', content: 'Командный сайт lifeplus. Инструменты для сетевого бизнеса' },
            { vmid: 'og:title', property: 'og:title', content: 'Визитка партнера LR Health & Beauty' },
            { vmid: 'og:description', property: 'og:description', content: 'Командный сайт lifeplus. Инструменты для сетевого бизнеса' },
            { vmid: 'og:image', property: 'og:image', content: '/img/LogoLifePlus.png' },
        ],
    },
    created() {
        if (!this.$route.query.p) {
            if (this.$cookies.isKey('lifeplus_partner')) {
                const partnerNum = this.$cookies.get('lifeplus_partner')
                this.$router.push ({name: 'Viz', query: { p: partnerNum }})
            }
        } else {
            this.$cookies.set('lifeplus_partner', this.$route.query.p, '6m')
        }
        this.lr_number = this.$route.query.p
    },
    computed: {
        ...mapGetters({
            userData: 'user/getPartnerAccess'
        }),
        dataUser() {
            return this.userData
        },
        classDesign() {
            let designClass

            if (this.userData.viz_design === 'default') {
                designClass = 'default_viz'
            }

            if (this.userData.viz_design === 'dark') {
                designClass = 'dark_viz'
            }

            if (this.userData.viz_design === 'brown') {
                designClass = 'brown_viz'
            }

            return designClass
        }
    },
    methods: {
        ...mapActions({
            showPartnerAccess: 'user/showPartnerAccess',
        }),
    },
    mounted() {
        this.showPartnerAccess(this.$route.query.p)
        this.loading = false
    }
}
</script>

<style lang="sass">
.viz-main
    background: #222
    font-size: 16px
    line-height: 20px
    overflow: hidden

#viz-page
    max-width: 500px
    margin: 0 auto

#viz-page.default_viz
    background: #fff
    color: #0c0c0d

#viz-page.dark_viz
    background: #141515
    color: #fff

#viz-page.brown_viz
    background: #3f2918
    color: #fff

#viz-page.default_viz .ava_viz_bg
    height: 350px
    background: -webkit-linear-gradient(180deg, #8ba27396, rgba(255, 255, 255, 0)), url(/img/vizitka/default_bg_img.png) /* Safari 5.1, iOS 5.0-6.1, Chrome 10-25, Android 4.0-4.3 */
    background: -moz-linear-gradient(180deg, #8ba27396, rgba(255, 255, 255, 0)), url(/img/vizitka/default_bg_img.png) /* Firefox 3.6-15 */
    background: -o-linear-gradient(180deg, #8ba27396, rgba(255, 255, 255, 0)), url(/img/vizitka/default_bg_img.png) /* Opera 11.1-12 */
    background: linear-gradient(180deg, #8ba27396, rgba(255, 255, 255, 0)), url(/img/vizitka/default_bg_img.png)
    background-size: cover

#viz-page.dark_viz .ava_viz_bg
    height: 400px
    background: -webkit-linear-gradient(180deg, rgba(20, 21, 21, 0.65), rgb(20, 21, 21)), url(/img/vizitka/dark_bg_img.jpg) /* Safari 5.1, iOS 5.0-6.1, Chrome 10-25, Android 4.0-4.3 */
    background: -moz-linear-gradient(180deg, rgba(20, 21, 21, 0.65), rgb(20, 21, 21)), url(/img/vizitka/dark_bg_img.jpg) /* Firefox 3.6-15 */
    background: -o-linear-gradient(180deg, rgba(20, 21, 21, 0.65), rgb(20, 21, 21)), url(/img/vizitka/dark_bg_img.jpg) /* Opera 11.1-12 */
    background: linear-gradient(180deg, rgba(20, 21, 21, 0.65), rgb(20, 21, 21)), url(/img/vizitka/dark_bg_img.jpg)
    background-size: cover

#viz-page.brown_viz .ava_viz_bg
    height: 400px
    background: -webkit-linear-gradient(180deg, rgba(63, 41, 24, 0.63), rgb(63, 41, 24)), url(/img/vizitka/brown_bg_img.png) /* Safari 5.1, iOS 5.0-6.1, Chrome 10-25, Android 4.0-4.3 */
    background: -moz-linear-gradient(180deg, rgba(63, 41, 24, 0.63), rgb(63, 41, 24)), url(/img/vizitka/brown_bg_img.png) /* Firefox 3.6-15 */
    background: -o-linear-gradient(180deg, rgba(63, 41, 24, 0.63), rgb(63, 41, 24)), url(/img/vizitka/brown_bg_img.png) /* Opera 11.1-12 */
    background: linear-gradient(180deg, rgba(63, 41, 24, 0.63), rgb(63, 41, 24)), url(/img/vizitka/brown_bg_img.png)
    background-size: cover

.viz-img img
    border-radius: 10px

#viz-page.default_viz .viz-img img
    box-shadow: 0 2px 28px rgba(111, 111, 111, 0.53), 0 10px 10px rgba(4, 4, 4, 0.32)

#viz-page.dark_viz .viz-img img
    box-shadow: 0 2px 28px rgba(187, 186, 186, 0.53), 0 10px 10px rgba(0, 0, 0, 0.32)

#viz-page.brown_viz .viz-img img
    box-shadow: 0 2px 28px rgba(217, 183, 0, 0.53), 0 10px 10px rgba(68, 24, 7, 0.84)

.viz-h2
    font-size: 18px
    text-transform: uppercase
    font-weight: 500

#viz-page.default_viz .viz-h2
    color: #111

#viz-page.dark_viz .viz-h2
    color: #fff

#viz-page.brown_viz .viz-h2
    color: #fbdb68

.viz-h3
    font-size: 18px
    text-transform: uppercase
    font-weight: 500

#viz-page.default_viz .viz-h3
    color: #659d83

#viz-page.dark_viz .viz-h3
    color: #fff

#viz-page.brown_viz .viz-h3
    color: #fbdb68

.dop_viz_div
    text-align: center

.dop_viz_div a
    text-decoration: none
    border-radius: 20px
    padding: 10px 20px

#viz-page.default_viz .dop_viz_div a
    color: #659d83
    border: 1px solid #659d83

#viz-page.dark_viz .dop_viz_div a
    color: #fff
    border: 1px solid #fff

#viz-page.brown_viz .dop_viz_div a
    color: #fbdb68
    border: 1px solid #fbdb68

#viz-page.default_viz .viz-bottom-section
    background-color: #3e802773

#viz-page.dark_viz .viz-bottom-section
    background-color: #1e1e1e

#viz-page.brown_viz .viz-bottom-section
    background-color: #5e4430

</style>