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
        <section id="hero">
            <v-row no-gutters>
                <v-container
                    id="leedbot"
                    tag="section"
                    class="leedbot"
                >
                    <v-row
                        justify="center"
                    >
                        <v-col
                            cols="12"
                            xl="6"
                            lg="8"
                            md="8"
                            sm="10"
                            style="padding-top: 5%"
                            class="main-col"
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
                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
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
                                    </v-card-text>
                                </div>
                                <v-divider/>
                                <v-row>
                                    <v-col class="">
                                        <div class="chat-list">
                                            <div>
                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesFirst"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime1 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Привет, на связи {{ userData.name }} {{ userData.last_name }}!
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesSecond"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime1 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Ниже вы найдете 7 книг в коротком изложении,
                                                                        которые помогут запустить мощные перемены в жизни.
                                                                    </p>
                                                                    <p>
                                                                        Выжимка ключевых идей книги в аудио и текстовом формате,
                                                                        которую можно изучить всего за 30 минут. Максимум пользы, минимум воды.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        v-if="mesBook"
                                                    >
                                                        <v-card
                                                            class="mx-auto my-12"
                                                            max-width="374"
                                                        >
                                                            <v-img
                                                                height="300"
                                                                src="/img/leedbot/books/book6.png"
                                                            ></v-img>

                                                            <v-card-title class="mb-5">«12 недель в году»</v-card-title>
                                                            <v-card-subtitle>Брайан Моран, Майкл Леннингтон</v-card-subtitle>

                                                            <v-card-text>
                                                                <v-card-text>
                                                                    Как за 12 недель сделать больше, чем другие успевают за 12 месяцев
                                                                </v-card-text>
                                                            </v-card-text>

                                                            <v-card-actions>
                                                                <a
                                                                    href="https://drive.google.com/file/d/1Www39ORk_eM1C9cCkc_VeNXXjkeI-0hs/view"
                                                                    target="_blank"
                                                                    style="text-decoration: none; text-transform: uppercase; margin: 0 0 10px 25px;"
                                                                >
                                                                    Перейти
                                                                </a>
                                                            </v-card-actions>
                                                        </v-card>

                                                        <v-card
                                                            class="mx-auto my-12"
                                                            max-width="374"
                                                        >
                                                            <v-img
                                                                height="300"
                                                                src="/img/leedbot/books/book5.png"
                                                            ></v-img>

                                                            <v-card-title class="mb-5">«В этом году я…»</v-card-title>
                                                            <v-card-subtitle>М. Дж. Райан</v-card-subtitle>

                                                            <v-card-text>
                                                                <v-card-text>
                                                                    Как изменить привычки, сдержать обещания или сделать то, о чем вы давно мечтали
                                                                </v-card-text>
                                                            </v-card-text>

                                                            <v-card-actions>
                                                                <a
                                                                    href="https://drive.google.com/file/d/1Ko0AyNEUHUaXRjmORYIf7CCj6-kuVP7r/view"
                                                                    target="_blank"
                                                                    style="text-decoration: none; text-transform: uppercase; margin: 0 0 10px 25px;"
                                                                >
                                                                    Перейти
                                                                </a>
                                                            </v-card-actions>
                                                        </v-card>

                                                        <v-card
                                                            class="mx-auto my-12"
                                                            max-width="374"
                                                        >
                                                            <v-img
                                                                height="300"
                                                                src="/img/leedbot/books/book7.png"
                                                            ></v-img>

                                                            <v-card-title class="mb-5">«Достижение максимума»</v-card-title>
                                                            <v-card-subtitle>Брайан Трейси</v-card-subtitle>

                                                            <v-card-text>
                                                                <v-card-text>
                                                                    12 практических принципов, синтезированных из психологии,
                                                                    религии, философии, бизнеса, экономики, политики и метафизики,
                                                                    которые помогу кардинально трансформировать жизнь.
                                                                </v-card-text>
                                                            </v-card-text>

                                                            <v-card-actions>
                                                                <a
                                                                    href="https://drive.google.com/file/d/1KVYbtZm15w-jnd_-EiMOYKm-cUF7j_QW/view"
                                                                    target="_blank"
                                                                    style="text-decoration: none; text-transform: uppercase; margin: 0 0 10px 25px;"
                                                                >
                                                                    Перейти
                                                                </a>
                                                            </v-card-actions>
                                                        </v-card>

                                                        <v-card
                                                            class="mx-auto my-12"
                                                            max-width="374"
                                                        >
                                                            <v-img
                                                                height="300"
                                                                src="/img/leedbot/books/book4.png"
                                                            ></v-img>

                                                            <v-card-title class="mb-5">«Действуй. 10 заповедей успеха»</v-card-title>
                                                            <v-card-subtitle>Ицхак Пинтосевич</v-card-subtitle>

                                                            <v-card-text>
                                                                <v-card-text>
                                                                    Готовая программа действий. Благодаря которой можно в
                                                                    несколько раз увеличить свою эффективность и легко достигать
                                                                    максимальных результатов в любом деле.
                                                                </v-card-text>
                                                            </v-card-text>

                                                            <v-card-actions>
                                                                <a
                                                                    href="https://drive.google.com/file/d/1UKUarUB9qd-yKCSeT7QkXOrZuNRik0Sh/view"
                                                                    target="_blank"
                                                                    style="text-decoration: none; text-transform: uppercase; margin: 0 0 10px 25px;"
                                                                >
                                                                    Перейти
                                                                </a>
                                                            </v-card-actions>
                                                        </v-card>

                                                        <v-card
                                                            class="mx-auto my-12"
                                                            max-width="374"
                                                        >
                                                            <v-img
                                                                height="300"
                                                                src="/img/leedbot/books/book2.png"
                                                            ></v-img>

                                                            <v-card-title class="mb-5">«Думай медленно... Решай быстро»</v-card-title>
                                                            <v-card-subtitle>Даниэль Канеман</v-card-subtitle>

                                                            <v-card-text>
                                                                <v-card-text>
                                                                    Как выбраться из потока информационного шума и начать принимать взвешанные решения.
                                                                </v-card-text>
                                                            </v-card-text>

                                                            <v-card-actions>
                                                                <a
                                                                    href="https://drive.google.com/file/d/1ZQUYpf6pYtcLQZjNPgQmIrgP43AgFvZJ/view"
                                                                    target="_blank"
                                                                    style="text-decoration: none; text-transform: uppercase; margin: 0 0 10px 25px;"
                                                                >
                                                                    Перейти
                                                                </a>
                                                            </v-card-actions>
                                                        </v-card>

                                                        <v-card
                                                            class="mx-auto my-12"
                                                            max-width="374"
                                                        >
                                                            <v-img
                                                                height="300"
                                                                src="/img/leedbot/books/book1.png"
                                                            ></v-img>

                                                            <v-card-title class="mb-5">«Цельная жизнь»</v-card-title>
                                                            <v-card-subtitle>Джек Кэнфилд, Марк Виктор Хансен, Лес Хьюитт</v-card-subtitle>

                                                            <v-card-text>
                                                                <v-card-text>
                                                                    Книга предназначена для людей, которые хотят добиваться своих целей,
                                                                    и представляет собой сборник рецептов того, как делать это эффективнее
                                                                </v-card-text>
                                                            </v-card-text>

                                                            <v-card-actions>
                                                                <a
                                                                    href="https://drive.google.com/file/d/1XRjQ_unl1GzNe9pdf7hJUO0KI1jzfMJx/view"
                                                                    target="_blank"
                                                                    style="text-decoration: none; text-transform: uppercase; margin: 0 0 10px 25px;"
                                                                >
                                                                    Перейти
                                                                </a>
                                                            </v-card-actions>
                                                        </v-card>

                                                        <v-card
                                                            class="mx-auto my-12"
                                                            max-width="374"
                                                        >
                                                            <v-img
                                                                height="300"
                                                                src="/img/leedbot/books/book3.png"
                                                            ></v-img>

                                                            <v-card-title class="mb-5">«Сила привычки. Почему мы живем и работаем именно так, а не иначе»</v-card-title>
                                                            <v-card-subtitle>Чарльз Дахигг</v-card-subtitle>

                                                            <v-card-text>
                                                                <v-card-text>
                                                                    Узнай как выйти из замкнутого круга обыденной жизни с помощью золотого правила смены привычек.
                                                                </v-card-text>
                                                            </v-card-text>

                                                            <v-card-actions>
                                                                <a
                                                                    href="https://drive.google.com/file/d/1Y2nU7AMuAN1EnI_Ry61bxMQbgoHZIK9B/view"
                                                                    target="_blank"
                                                                    style="text-decoration: none; text-transform: uppercase; margin: 0 0 10px 25px;"
                                                                >
                                                                    Перейти
                                                                </a>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesEndLeedbot"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime18 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Связаться со мной:
                                                                    </p>
                                                                    <p>
                                                                        <a
                                                                            v-if="userData.phone_whatsapp"
                                                                            style="text-decoration: none"
                                                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                                                            target="_blank"
                                                                        >
                                                                            <v-btn
                                                                                fab
                                                                                dark
                                                                                small
                                                                                class="mr-3"
                                                                                color="success"
                                                                            >
                                                                                <v-icon>mdi-whatsapp</v-icon>
                                                                            </v-btn>
                                                                        </a>
                                                                        <a
                                                                            v-if="userData.phone_viber"
                                                                            style="text-decoration: none"
                                                                            :href="`viber://chat?number=${userData.phone_viber}`"
                                                                            target="_blank"
                                                                        >
                                                                            <v-btn
                                                                                fab
                                                                                dark
                                                                                small
                                                                                class="mr-3"
                                                                                color="deep-purple lighten-2"
                                                                            >
                                                                                <v-icon>fab fa-viber</v-icon>
                                                                            </v-btn>
                                                                        </a>
                                                                        <a
                                                                            v-if="userData.telegram"
                                                                            style="text-decoration: none"
                                                                            :href="`${userData.telegram}`"
                                                                            target="_blank"
                                                                        >
                                                                            <v-btn
                                                                                fab
                                                                                dark
                                                                                small
                                                                                class="mr-3"
                                                                                color="blue"
                                                                            >
                                                                                <v-icon>mdi-send</v-icon>
                                                                            </v-btn>
                                                                        </a>
                                                                        <a
                                                                            v-if="userData.fb_messenger"
                                                                            :href="`${userData.fb_messenger}`"
                                                                            target="_blank"
                                                                            style="text-decoration: none"
                                                                        >
                                                                            <v-btn
                                                                                fab
                                                                                dark
                                                                                small
                                                                                class="mr-3"
                                                                                color="light-blue"
                                                                            >
                                                                                <v-icon>mdi-facebook-messenger</v-icon>
                                                                            </v-btn>
                                                                        </a>
                                                                        <a
                                                                            v-if="userData.vkontakte"
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
                                                                            >
                                                                                <v-icon>fab fa-vk</v-icon>
                                                                            </v-btn>
                                                                        </a>
                                                                        <a
                                                                            v-if="userData.odnoklassniki"
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
                                                                            >
                                                                                <v-icon>mdi-odnoklassniki</v-icon>
                                                                            </v-btn>
                                                                        </a>
                                                                        <a
                                                                            v-if="userData.instagram"
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
                                                                            >
                                                                                <v-icon>mdi-instagram</v-icon>
                                                                            </v-btn>
                                                                        </a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>
                                            </div>
                                            <div
                                                class="chat-typing"
                                                v-bind:class="{show: isShow}"
                                            >
                                                {{ userData.name }} печатает
                                                <div class="chat-typing-animate">
                                                    <div class="chat-typing-box">
                                                        ...
                                                        <img src="/img/leedbot/edit.svg" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="scrollToMe"></div>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </section>
    </v-main>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "LeedBook",
    data: () => ({
        isShow: false,
        loading: true,
        lr_number: '',
        nowDateTime: {
            dateTime1: '',
        },
        cookieShow: true,
        mesFirst: false,
        mesSecond: false,
        mesBook: false,
        mesEndLeedbot: false,
    }),
    metaInfo: {
        title: 'Бонус - 7 книг в коротком изложении',
        meta: [
            { vmid: 'description', property: 'description', content: 'Выжимка ключевых идей книги в аудио и текстовом формате, которую можно изучить всего за 30 минут' },
            { vmid: 'og:title', property: 'og:title', content: 'Бонус - 7 книг в коротком изложении' },
            { vmid: 'og:description', property: 'og:description', content: 'Выжимка ключевых идей книги в аудио и текстовом формате, которую можно изучить всего за 30 минут' },
            { vmid: 'og:image', property: 'og:image', content: '/img/LogoLifePlus.png' },
        ],
    },
    created() {
        if (!this.$route.query.p) {
            if (this.$cookies.isKey('lifeplus_partner')) {
                const partnerNum = this.$cookies.get('lifeplus_partner')
                this.$router.push ({name: 'LeedBook', query: { p: partnerNum }})
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
    },
    methods: {
        ...mapActions({
            showPartnerAccess: 'user/showPartnerAccess',
        }),
        zeroFirst(value) {
            if (value < 10) {
                value='0'+value
            }
            return value
        },
        dateTimeNow() {
            let currentTime = new Date()
            let day = this.zeroFirst(currentTime.getDate())
            let month = this.zeroFirst(currentTime.getMonth()+1)
            let hours = this.zeroFirst(currentTime.getHours())
            let minutes = this.zeroFirst(currentTime.getMinutes())

            if (month === '01') {
                month = 'января'
            }
            if (month === '02') {
                month = 'февраля'
            }
            if (month === '03') {
                month = 'марта'
            }
            if (month === '04') {
                month = 'апреля'
            }
            if (month === '05') {
                month = 'мая'
            }
            if (month === '06') {
                month = 'июня'
            }
            if (month === '07') {
                month = 'июля'
            }
            if (month === '08') {
                month = 'августа'
            }
            if (month === '09') {
                month = 'сентября'
            }
            if (month === '10') {
                month = 'октября'
            }
            if (month === '11') {
                month = 'ноября'
            }
            if (month === '12') {
                month = 'декабря'
            }

            return day+' '+month+',  '+hours+':'+minutes
        },
        cookieAccept() {
            this.cookieShow = false
            this.$cookies.set('lifeplus_cookie', 'accept', '12m')
        },
        scrollToMe () {
            let scrollBottom = document.getElementById("scrollToMe")
            scrollBottom.scrollIntoView({ behavior: "smooth" })
        },
        showTyping() {
            let v = this
            setTimeout(function () {
                v.isShow = true
            }, 1000)
            this.showFirstMessage()
        },
        showTypingTxt() {
            let v = this
            setTimeout(function () {
                v.isShow = true
            }, 1000)
        },
        showFirstMessage() {
            let v = this
            this.nowDateTime.dateTime1 = this.dateTimeNow()
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesFirst = true
            }, 3300)
            this.showSecondMessage()
        },
        showSecondMessage() {
            let v = this
            setTimeout(function () {
                v.isShow = true
            }, 6300)
            setTimeout(function () {
                v.isShow = false
            }, 8300)
            setTimeout(function () {
                v.mesSecond = true
            }, 8800)
            setTimeout(function () {
                v.isShow = true
            }, 16000)
            setTimeout(function () {
                v.isShow = false
            }, 18000)
            setTimeout(function () {
                v.mesBook = true
            }, 19000)
            setTimeout(function () {
                v.isShow = true
            }, 29000)
            setTimeout(function () {
                v.isShow = false
            }, 31000)
            setTimeout(function () {
                v.mesEndLeedbot = true
            }, 32000)
        },
    },
    mounted() {
        this.showPartnerAccess(this.$route.query.p)
        this.loading = false

        this.showTyping()
    },
    // updated() {
    //     this.scrollToMe()
    // }
}
</script>

<style lang="sass">
.chat-list p
    font-size: 16px

.chat-list
    width: 100%
    height: 100%
    box-sizing: border-box
    display: flex
    flex-direction: column
    justify-content: flex-end
    padding: 40px 11px

.chat-item
    display: flex
    margin-bottom: 15px

.chat-item.item-user
    width: 100%
    align-self: flex-end
    flex-direction: row-reverse
    margin-top: 40px
    margin-bottom: 40px

.chat-item p
    margin-bottom: 0

.chat-item ul
    list-style: none
    padding: 0
    font-size: 16px

.chat-item ul li i
    top: -2px

.chat-avatar
    width: 32px
    height: 32px
    margin-top: 20px
    margin-right: 10px
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    background-color: #999999
    flex-shrink: 0
    border-radius: 50%

.chat-avatar img
    width: 100%
    border-radius: 50%

.chat-block
    min-width: 60%
    max-width: 90%

.chat-date
    opacity: 0.5
    color: #252525
    font-size: 14px
    font-weight: 400
    margin-bottom: 5px

.chat-messages
    width: 100%
    display: flex
    flex-direction: column
    align-items: flex-start

.chat-message
    display: inline-block
    background-color: rgb(248, 248, 248)
    padding: 15px 20px
    color: rgb(37, 37, 37)
    font-size: 14px
    font-weight: 400
    line-height: 1.5
    margin-bottom: 5px
    min-width: 250px

.chat-message:last-of-type
    border-bottom-left-radius: 10px
    border-bottom-right-radius: 10px

.chat-message:first-of-type
    border-top-left-radius: 10px
    border-top-right-radius: 10px

.chat-input
    margin-bottom: 10px

.chat-controls
    display: flex
    margin-top: 10px
    align-items: center
    flex-wrap: wrap

.chat-controls-end
    display: flex
    margin-top: 10px
    align-items: center
    flex-wrap: wrap
    justify-content: flex-start

.chat-btn
    margin-bottom: 10px !important
    background-color: #4caf50 !important

.chat-btn.btn-skip
    background-color: gray !important

.chat-btn.btn-send
    margin-left: auto

.item-user .chat-avatar-user
    background-image: url("/img/leedbot/user_avatar.png")
    margin-left: 10px
    margin-right: 0
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    background-color: #999999
    flex-shrink: 0
    border-radius: 50%
    width: 32px
    height: 32px
    margin-top: 20px

.item-user .chat-date
    text-align: right

.item-user .chat-messages
    align-items: flex-end

.chat-typing
    font-size: 12px
    color: #999999
    display: flex
    align-items: baseline
    margin-left: 45px
    opacity: 0
    transform: translateY(5px)

.chat-typing.show
    opacity: 1
    transform: translateY(0)
    transition: 0.5s

.chat-typing-animate
    width: 27px
    overflow: hidden
    margin-left: 5px

.chat-typing-box
    display: flex

@keyframes typing
    0%
        transform: translateX(-30%)
    100%
        transform: translateX(0px)

@-webkit-keyframes typing
    0%
        transform: translateX(-30%)
    100%
        transform: translateX(0px)

.chat-typing.show .chat-typing-box
    -webkit-animation: typing 1s infinite
    animation: typing 1s infinite

.chat-typing-box img
    width: 12px
    height: 12px

.fade-enter-active, .fade-leave-active
    transition: opacity 1s

.fade-enter, .fade-leave-to
    opacity: 0

@media(max-width: 600px)
    .main-col
        padding-left: 0
        padding-right: 0

    .chat-list
        padding-left: 0
        padding-right: 0

</style>