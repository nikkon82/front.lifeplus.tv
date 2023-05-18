<template>
    <v-main>
        <div
            class="cookie-notification"
            v-if="cookieShow"
        >
            <p>
                Этот сайт использует cookie и другие технологии для сбора информации технического характера. Подробнее о
                <router-link :to="{name: 'Cookies'}" target="_blank">
                    файлах cookie
                </router-link>
            </p>
            <v-btn
                color="gray"
                class="cookie-accept"
                @click="cookieAccept"
            >
                Хорошо
            </v-btn>
        </div>
        <section id="np-header">
            <v-container class="np-container">
                <p>{{ userData.name }} {{ userData.last_name }}</p>
                <div class="input-group mb-3 np-contact-top">
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
                </div>
            </v-container>
        </section>
        <section id="np-main">
            <v-container class="np-container">
                <v-row>
                    <v-col
                        cols="12"
                        md="6"
                        class="np-h1"
                    >
                        <h1>Свое дело в растущей нише</h1>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                        class="np-img"
                    >
                        <img src="/img/newpreza/lamp.png" alt=""/>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section id="np-second">
            <v-container class="np-container">
                <p>
                    Чтобы детальнее разобраться в нашем предложении, внимательно просмотрите все три видеоролика, которые последовательно раскрывают суть
                </p>
            </v-container>
        </section>
        <section id="np-video-one">
            <v-container class="np-container">
                <h2 class="np-h2-white">1 видео - Идея</h2>
                <div class="np-video-div">Блок с видео</div>
            </v-container>
        </section>
        <section id="np-video-two">
            <v-container class="np-container">
                <h2 class="np-h2">2 видео - Стратегия</h2>
                <div class="np-video-div">Блок с видео</div>
            </v-container>
        </section>
        <section id="np-video-three">
            <v-container class="np-container">
                <h2 class="np-h2-white">3 видео - Продукт</h2>
                <div class="np-video-div">Блок с видео</div>
            </v-container>
        </section>
        <section id="np-advantages">
            <v-container class="np-container">
                <h2 class="np-h2">Наши преимущества</h2>
                <div class="np-icon">
                    <v-row>
                        <v-col
                            cols="12"
                            lg="4"
                        >
                            <img src="/img/newpreza/world.png" alt=""/>
                            <p>Развитие своего дела
                                из любой точки мира</p>
                        </v-col>
                        <v-col
                            cols="12"
                            lg="4"
                        >
                            <img src="/img/newpreza/noutbook.png" alt=""/>
                            <p>Обучение и поддержка
                                на всех этапах развития</p>
                        </v-col>
                        <v-col
                            cols="12"
                            lg="4"
                        >
                            <img src="/img/newpreza/scales.png" alt=""/>
                            <p>Обучение и поддержка
                                на всех этапах развития</p>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </section>
        <section id="np-offers">
            <v-container class="np-container">
                <h2 class="np-h2-white">Что вы получите</h2>
                <div class="np-icon">
                    <v-row>
                        <v-col
                            cols="12"
                            lg="4"
                        >
                            <img src="/img/newpreza/instruments.png" alt=""/>
                            <p>Инструменты для работы
                                онлайн и офлайн</p>
                        </v-col>
                        <v-col
                            cols="12"
                            lg="4"
                        >
                            <img src="/img/newpreza/www.png" alt=""/>
                            <p>Эффективную модель
                                продвижения в интернет</p>
                        </v-col>
                        <v-col
                            cols="12"
                            lg="4"
                        >
                            <img src="/img/newpreza/infrastructure.png" alt=""/>
                            <p>Отлаженную
                                инфраструктуру</p>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </section>
        <v-footer
            class="justify-center np-footer"
            height="100"
        >
            <div class="title font-weight-light text-center">
                &copy; {{ (new Date()).getFullYear() }} — lifeplus.tv — независимый партнер LR Health & Beauty
            </div>
        </v-footer>

        <v-dialog
            v-model="dialog_prospect"
            width="500"
        >
            <v-card>
                <v-card-title class="headline lighten-2 pb-5" style="background-color: #649d82; color: white">
                    Заявка принята
                </v-card-title>

                <v-card-text>
                    Ваш консультант свяжется с вами в ближайшее время
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="#649d82"
                        text
                        @click="dialog_prospect = false"
                    >
                        Хорошо
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-main>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {maxLength, minLength, numeric, required} from "vuelidate/lib/validators";

export default {
    name: "NewSystem",
    data: () => ({
        lr_number: '',
        newProspect: {
            phone: '',
            phone_whatsapp: '',
            phone_viber: '',
            req: '',
            partner: '',
            instrument: 'Суперфуды',
            step: 'Новый'
        },
        errors: {},
        dialog_main: false,
        dialog_prospect: false,
        loading: false,
        cookieShow: true,
    }),
    metaInfo: {
        title: 'Новая презентация',
        meta: [
            { vmid: 'description', property: 'description', content: 'Описание' },
            { vmid: 'og:title', property: 'og:title', content: 'Новая презентация' },
            { vmid: 'og:description', property: 'og:description', content: 'Описание' },
            { vmid: 'og:image', property: 'og:image', content: '' },
        ],
    },
    created() {
        if (!this.$route.query.p) {
            if (this.$cookies.isKey('lifeplus_partner')) {
                const partnerNum = this.$cookies.get('lifeplus_partner')
                this.$router.push ({name: 'NewSys', query: { p: partnerNum }})
            }
        } else {
            this.$cookies.set('lifeplus_partner', this.$route.query.p, '6m')
        }

        if (this.$cookies.isKey('lifeplus_cookie')) {
            this.cookieShow = false
        }
        this.lr_number = this.$route.query.p
    },
    computed: {
        ...mapGetters({
            userData: 'user/getPartnerAccess',
        }),
        phoneErrors() {
            const errors = []
            if (!this.$v.newProspect.phone.$dirty) return errors
            !this.$v.newProspect.phone.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newProspect.phone.maxLength && errors.push('Максимум 30 цифр')
            !this.$v.newProspect.phone.required && errors.push('Обязательно для заполнения')
            return errors
        },
        phoneWhatsappErrors() {
            const errors = []
            if (!this.$v.newProspect.phone_whatsapp.$dirty) return errors
            !this.$v.newProspect.phone_whatsapp.numeric && errors.push('Только цифры')
            !this.$v.newProspect.phone_whatsapp.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newProspect.phone_whatsapp.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.newProspect.phone_whatsapp.required && errors.push('Обязательно для заполнения')
            return errors
        },
        phoneViberErrors() {
            const errors = []
            if (!this.$v.newProspect.phone_viber.$dirty) return errors
            !this.$v.newProspect.phone_viber.numeric && errors.push('Только цифры')
            !this.$v.newProspect.phone_viber.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newProspect.phone_viber.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.newProspect.phone_viber.required && errors.push('Обязательно для заполнения')
            return errors
        },
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            showPartnerAccess: 'user/showPartnerAccess',
            createProspect: 'user/addClient'
        }),
        cookieAccept() {
            this.cookieShow = false
            this.$cookies.set('lifeplus_cookie', 'accept', '12m')
        },
        scrollToMe () {
            let scrollBottom = document.getElementById("cell-start")
            scrollBottom.scrollIntoView({ behavior: "smooth" })
        },
        btnWhatsapp() {
            this.btnWhatsappTrue = true
            this.btnViberTrue = false
        },
        btnViber() {
            this.btnWhatsappTrue = false
            this.btnViberTrue = true
        },
        addProspectNewPreza() {
            this.$v.newProspect.phone_whatsapp.$touch() || this.$v.newProspect.phone_viber.$touch() || this.$v.newProspect.phone.$touch()
            if (!this.$v.newProspect.phone_whatsapp.$invalid || !this.$v.newProspect.phone_viber.$invalid || !this.$v.newProspect.phone.$invalid) {
                this.disInpWhatsapp = true
                this.disInpViber = true
                this.loading = true
                this.createProspect(this.newProspect)
                    .then((response) => {
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.loading = false
                            this.dialog_prospect = true
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
    },
    mounted () {
        this.showPartnerAccess(this.$route.query.p)
        this.newProspect.partner = this.$route.query.p
    },
    validations: {
        newProspect: {
            phone: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(20)
            },
            phone_whatsapp: {
                required,
                numeric,
                minLength: minLength(5),
                maxLength: maxLength(20)
            },
            phone_viber: {
                required,
                numeric,
                minLength: minLength(5),
                maxLength: maxLength(20)
            },
        }
    }
}
</script>

<style lang="sass">
.np-container
    max-width: 1200px

#np-header
    height: 50px
    background: linear-gradient(-90deg,#122d3e 0,#274961 100%)
    color: #ffffff
    position: fixed
    border-bottom: 1px solid #182f3c
    width: 100%

#np-header p
    float: left
    font-weight: 400
    font-size: 24px

.np-contact-top
    display: flex
    flex-direction: row
    align-items: center
    justify-content: flex-end

#np-main
    background: linear-gradient(-90deg,#122d3e 0,#274961 100%)
    padding-top: 20%
    padding-bottom: 20%

.np-h1
    color: #ffffff
    font-size: 42px

.np-img img
    max-width: 450px

#np-second
    text-align: center

#np-second p
    color: #204056
    font-size: 24px
    max-width: 800px
    line-height: 40px !important
    margin: 0 auto
    padding: 10% 0

#np-video-one
    background: linear-gradient(-90deg,#122d3e 0,#274961 100%)
    text-align: center

#np-video-two
    text-align: center

#np-video-three
    background: linear-gradient(-90deg,#122d3e 0,#274961 100%)
    text-align: center

.np-h2
    color: #204056
    text-align: center
    font-size: 24px
    text-transform: uppercase
    margin: 20px 0 40px

.np-h2-white
    color: #ffffff
    text-align: center
    font-size: 24px
    text-transform: uppercase
    margin: 20px 0 40px

#np-advantages
    text-align: center

#np-advantages p
    color: #204056
    text-align: center
    font-size: 22px
    margin-top: 40px

#np-offers
    background: linear-gradient(-90deg,#122d3e 0,#274961 100%)
    text-align: center

#np-offers p
    color: #ffffff
    text-align: center
    font-size: 22px
    margin-top: 40px

#np-advantages img, #np-offers img
    max-width: 150px

.np-icon
    padding-top: 40px

.np-footer
    background: linear-gradient(-90deg,#122d3e 0,#274961 100%) !important
    color: white !important

</style>