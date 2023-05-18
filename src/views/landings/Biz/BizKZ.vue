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
        <div
            class="biz-main"
        >
            <section id="biz-page">
                <v-row no-gutters>
                    <v-container
                        id="biz-start"
                        tag="section"
                    >
                        <p style="width: 100%; max-width: 450px; height: auto">
                            <img style="width: 100%;" src="/img/biz/maintitle-biz.png" alt=""/>
                        </p>
                        <p style="width: 100%; max-width: 450px; height: auto">
                            <img style="width: 100%;" src="/img/biz/lrpreza-kz.png" alt=""/>
                        </p>
                    </v-container>

                    <v-container
                        id="biz-expert"
                        tag="section"
                    >
                        <p class="biz-p-h">Причина 1</p>
                        <h2 class="biz-h2">Рост спроса на продукцию LR</h2>

                        <div class="biz-ul-div">
                            <ul class="biz-ul">
                                <li>
                                    <img class="arrow-icon" src="/img/biz/arrow-circle.png" alt=""/>
                                    <h3 class="biz-h3">Медицина дорожает</h3>
                                    <p>90% мед оборудования и медикаментов импортные. Поставки в обход санкций увеличат их стоимость в десятки раз</p>
                                </li>
                                <li>
                                    <img class="arrow-icon" src="/img/biz/arrow-circle.png" alt=""/>
                                    <h3 class="biz-h3">Качество гос. медицины снижается</h3>
                                    <p>Квалифицированные специалисты уходят в частные клиники</p>
                                </li>
                                <li>
                                    <img class="arrow-icon" src="/img/biz/arrow-circle.png" alt=""/>
                                    <h3 class="biz-h3">Заботиться о здоровье будет в разы дешевле, чем лечиться</h3>
                                    <p>В странах с дорогой медициной люди больше вкладывают в поддержание здоровья</p>
                                </li>
                            </ul>
                        </div>

                        <p class="biz-title">LR уже более 35 лет работает в сфере поддержания здоровья и выпускает продукты с научно доказанной эффективностью.</p>

                        <p style="width: 100%; max-width: 450px; height: auto">
                            <img style="width: 100%;" src="/img/biz/spravochnik.png" alt=""/>
                        </p>
                    </v-container>

                    <v-container
                        id="biz-expert-sec"
                        tag="section"
                    >
                        <p class="biz-p-h">Причина 2</p>
                        <h2 class="biz-h2">Все больше людей ищут дополнительный доход</h2>

                        <div class="biz-ul-div">
                            <ul class="biz-ul">
                                <li>
                                    <img class="arrow-icon" src="/img/biz/arrow-circle.png" alt=""/>
                                    <h3 class="biz-h3">Денег не хватает</h3>
                                    <p>Цены растут, покупательская способность падает</p>
                                </li>
                                <li>
                                    <img class="arrow-icon" src="/img/biz/arrow-circle.png" alt=""/>
                                    <h3 class="biz-h3">Растет скрытая безработица</h3>
                                    <p>Это когда у населения есть работа, но оплачивается она по минимуму</p>
                                </li>
                                <li>
                                    <img class="arrow-icon" src="/img/biz/arrow-circle.png" alt=""/>
                                    <h3 class="biz-h3">Люди теряют доход</h3>
                                    <p>Количество закрывающихся ИП и ООО бьет рекорды</p>
                                </li>
                            </ul>
                        </div>

                        <p class="biz-title">Бизнес в партнерстве с LR — это возможность зарабатывать по готовой системе без вложений и рисков.</p>

                        <v-carousel
                            cycle
                            height="400"
                            hide-delimiter-background
                            show-arrows-on-hover
                        >
                            <v-carousel-item
                                v-for="(slide, i) in slides"
                                :key="i"
                            >
                                <v-sheet
                                    height="100%"
                                >
                                    <v-row
                                        class="fill-height"
                                        align="center"
                                        justify="center"
                                    >
                                        <div class="text-h2">
                                            <p style="width: 100%; max-width: 450px; height: auto">
                                                <img style="width: 100%;" :src=slide.src alt=""/>
                                            </p>
                                            <p class="biz-p-ca">{{ slide.title }}</p>
                                        </div>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-container>

                    <v-container
                        id="biz-variants"
                        tag="section"
                    >
                        <p class="biz-p-h">Причина 3</p>
                        <h2 class="biz-h2">Рост цен и дефицит качественных продуктов в сегменте “Красота и здоровье”</h2>

                        <div class="biz-ul-div">
                            <ul class="biz-ul">
                                <li>
                                    <img class="arrow-icon" src="/img/biz/arrow-circle.png" alt=""/>
                                    <h3 class="biz-h3">Снижается ассортимент</h3>
                                    <p>Производители продукции в сегменте “Красота и здоровье” массово уходят с рынка</p>
                                </li>

                                <li>
                                    <img class="arrow-icon" src="/img/biz/arrow-circle.png" alt=""/>
                                    <h3 class="biz-h3">Цены стремительно растут</h3>
                                    <p>Компании, особенно не имеющие собственного производства, вынуждены поднимать цены</p>
                                </li>
                                <li>
                                    <img class="arrow-icon" src="/img/biz/arrow-circle.png" alt=""/>
                                    <h3 class="biz-h3">Кризис логистики</h3>
                                    <p>Из-за нарушений глобальных цепочек поставок продукции рост цен и снижение ассортимента продолжится по всему миру</p>
                                </li>
                            </ul>
                        </div>

                        <p class="biz-title">LR остается на Казахстанском рынке и сдерживает рост цен на свои продукты, выигрывая тем самым и по качеству, и по цене.</p>
                    </v-container>

                    <v-container
                        id="biz-var-sec"
                        tag="section"
                    >
                        <h2 class="biz-h2">Еще раз...</h2>
                        <ul class="biz-ul-else">
                            <li>
                                <v-icon color="#659d83">mdi-adjust</v-icon>
                                <p>Все больше людей хотят увеличить доход</p>
                            </li>
                            <li>
                                <v-icon color="#659d83">mdi-adjust</v-icon>
                                <p>Качественной продукции и вариантов дополнительного дохода на рынке становится меньше</p>
                            </li>
                            <li>
                                <v-icon color="#659d83">mdi-adjust</v-icon>
                                <p>Спрос на продукцию для поддержания здоровья растет</p>
                            </li>
                        </ul>

                        <h3 class="biz-title">Сейчас самое подходящее время начать бизнес в партнерстве с LR</h3>
                        <p>
                            У нас есть:
                        </p>
                        <ul class="biz-pr">
                            <li><v-icon color="#659d83">mdi-check-all</v-icon> готовая бизнес-модель</li>
                            <li><v-icon color="#659d83">mdi-check-all</v-icon> качественный продукт с высоким спросом</li>
                            <li><v-icon color="#659d83">mdi-check-all</v-icon> обучение и поддержка</li>
                            <li><v-icon color="#659d83">mdi-check-all</v-icon> современные онлайн-инструменты</li>
                        </ul>
                        <p style="width: 100%; max-width: 450px; height: auto">
                            <img style="width: 100%;" src="/img/biz/relifesystem2.png" alt=""/>
                        </p>
                        <p class="biz-title">Все это позволит тебе начать зарабатывать в кризис 2022</p>

                    </v-container>

                    <v-container
                        id="biz-step-one"
                        tag="section"
                    >
                        <h2 class="biz-h2">C чего начать?</h2>

                        <p class="biz-step">Шаг 1</p>
                        <h3 class="biz-h3-step">Узнай, как работает бизнес c LR</h3>
                        <p class="p-timeline mb-10">Посмотри 3 видео ниже. В них коротко, в общих чертах описывается суть бизнеса и возможностей с LR.</p>

                        <h3 class="biz-h3-video">Коротко о компании</h3>
                        <div class="thumb-wrap mt-6 mb-15">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/VzjFiA29GcI"
                                title="О компании LR"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>

                        <h3 class="biz-h3-video">Как и сколько можно заработать</h3>
                        <div class="thumb-wrap-how mt-6 mb-15">
                            <iframe
                                width="480"
                                height="480"
                                src="https://fast.wistia.net/embed/iframe/lhxycta304"
                                title="Как зарабатывать с LR"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>

                        <h3 class="biz-h3-video">Уникальная автопрограмма</h3>
                        <div class="thumb-wrap mt-6 mb-15">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/ErZf1BJpy3A"
                                title="Автопрограмма LR"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </v-container>

                    <v-container
                        id="biz-step-two"
                        tag="section"
                    >
                        <p class="biz-step">Шаг 2</p>
                        <h3 class="biz-h3-step">Изучи больше информации</h3>
                        <p class="p-timeline">
                            Оставь заявку, и я тебе вышлю дополнительную информацию о компании, о продукте, о системе работы, инструментах и обучении.
                        </p>
                        <p class="p-timeline">
                            А также отвечу на все твои вопросы и расскажу, как начать зарабатывать с LR.
                        </p>

                        <p
                            class="mt-10 mb-7"
                            style="text-align: center"
                        >
                            <v-btn
                                color="#649d82"
                                class="mr-0"
                                :disabled="bizReqDis"
                                @click="bizRequest"
                            >
                                Оставить заявку
                            </v-btn>
                        </p>

                        <transition name="fade">
                            <div
                                v-if="biz_request"
                                class="mb-10"
                            >
                                <v-text-field
                                    label="Введите свое имя"
                                    prepend-icon="mdi-face-man"
                                    type="text"
                                    v-model.trim="newProspect.name"
                                    :error-messages="nameErrors"
                                    @input="$v.newProspect.name.$touch()"
                                    @blur="$v.newProspect.name.$touch()"
                                />
                                <v-text-field
                                    class="cell-input-phone"
                                    label="Телефон"
                                    prepend-icon="mdi-phone"
                                    type="text"
                                    v-model.trim="newProspect.phone"
                                    :error-messages="phoneErrors"
                                    @input="$v.newProspect.phone.$touch()"
                                    @blur="$v.newProspect.phone.$touch()"
                                />
                                <div class="invalid-feedback" v-if="errors.phone">
                                    {{ errors.phone[0] }}
                                </div>

                                <p style="text-align: center">
                                    <v-btn
                                        color="#649d82"
                                        class="mr-0"
                                        @click="addProspectBiz"
                                    >
                                        Отправить
                                    </v-btn>
                                </p>
                                <p class="cell-privacy-text">
                                    Оставляя заявку, вы даете свое
                                    <router-link :to="{name: 'Personal'}" target="_blank">Согласие на обработку персональных данных</router-link>
                                    и принимаете
                                    <router-link :to="{name: 'Policy'}" target="_blank">Политику конфидециальности</router-link>.
                                </p>
                            </div>
                        </transition>

                        <p
                            class="text-center mb-10"
                        >
                            Или свяжись со мной
                            <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                        </p>

                    </v-container>

                    <v-container
                        id="biz-partner-history"
                        tag="section"
                        class="mt-16"
                    >
                        <div class="d-flex grow flex-wrap">
                            <div
                                class="v-avatar mx-auto v-card--material__avatar elevation-6 grey"
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

                            <v-card-text class="text-center" style="padding-top: 0">
                                <h4 class="display-2 font-weight-light mb-3 black--text">
                                    {{ userData.name }} {{ userData.last_name }}
                                </h4>
                            </v-card-text>
                        </div>
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
                        <p v-if="userData.about_me_biz" class="mt-13 mb-15">
                            <span v-html="userData.about_me_biz"></span>
                        </p>
                        <div v-if="userData.photo_money" class="mt-13 mb-15">
                            <h3 class="biz-h3-video mb-10">
                                Мой доход от LR
                            </h3>
                            <p style="width: 100%; max-width: 450px; height: auto">
                                <img
                                    style="width: 100%;"
                                    :src="`${ $store.state.serverPath }/storage/${ userData.photo_money }`"
                                    alt=""
                                />
                            </p>
                        </div>
                        <div v-if="userData.photo_auto" class="mt-13 mb-15">
                            <h3 class="biz-h3-video mb-10">
                                Мое авто от LR
                            </h3>
                            <p style="width: 100%; max-width: 450px; height: auto">
                                <img
                                    style="width: 100%;"
                                    :src="`${ $store.state.serverPath }/storage/${ userData.photo_auto }`"
                                    alt=""
                                />
                            </p>
                        </div>

                        <h3 v-if="userData.biz_video_title" class="biz-h3-video">
                            {{ userData.biz_video_title }}
                        </h3>
                        <div v-if="userData.biz_video_link" class="thumb-wrap mt-6 mb-15">
                            <iframe
                                width="560"
                                height="315"
                                :src="`https://www.youtube.com/embed/${ userData.biz_video_link }`"
                                :title="`${ userData.biz_video_title }`"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </v-container>
                    <v-footer
                        class="justify-center biz-footer"
                        height="100"
                        width="100%"
                    >
                        <div class="title font-weight-light text-center">
                            &copy; {{ (new Date()).getFullYear() }} — lifeplus.tv — независимый партнер LR Health & Beauty
                        </div>
                    </v-footer>
                </v-row>
            </section>
        </div>
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
import {maxLength, minLength, required, helpers} from "vuelidate/lib/validators";
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)

export default {
    name: "BizPrezaKZ",
    data: () => ({
        lr_number: '',
        newProspect: {
            name: '',
            phone: '',
            partner: '',
            instrument: 'Бизнес-презентация',
            step: 'Новый'
        },
        slides: [
            {
                src: '/img/leedbot/KZ/history/history-kz-12.png',
                title: 'Наемный работник',
            },
            {
                src: '/img/leedbot/KZ/history/history-kz-17.png',
                title: 'Мама в декрете',
            },
            {
                src: '/img/leedbot/KZ/history/history-kz-13.png',
                title: 'Домохозяйка',
            },
            {
                src: '/img/leedbot/KZ/history/history-kz-11.png',
                title: 'Пенсионер',
            },
            // {
            //     src: '/img/leedbot/pfr/pfr3.jpeg',
            //     title: 'Студент',
            // },
            {
                src: '/img/leedbot/KZ/history/history-kz-4.png',
                title: 'Предприниматель',
            },
            {
                src: '/img/leedbot/KZ/history/history-kz-5.png',
                title: 'Фрилансер',
            }
        ],
        errors: {},
        column: null,
        loading: false,
        cookieShow: true,
        dialog_prospect: false,
        biz_request: false,
        bizReqDis: false,
    }),
    metaInfo: {
        title: 'Бизнес-презентация LR',
        meta: [
            { vmid: 'description', property: 'description', content: 'Почему бизнес с LR растет даже в кризис' },
            { vmid: 'og:title', property: 'og:title', content: 'Бизнес-презентация LR' },
            { vmid: 'og:description', property: 'og:description', content: 'Почему бизнес с LR растет даже в кризис' },
            { vmid: 'og:image', property: 'og:image', content: '/img/LogoLifePlus.png' },
        ],
    },
    created() {
        if (!this.$route.query.p) {
            if (this.$cookies.isKey('lifeplus_partner')) {
                const partnerNum = this.$cookies.get('lifeplus_partner')
                this.$router.push ({name: 'BizPrezaKZ', query: { p: partnerNum }})
            }
        } else {
            this.$cookies.set('lifeplus_partner', this.$route.query.p, '6m')
        }

        if (this.$cookies.isKey('lifeplus_cookie')) {
            this.cookieShow = false
        }
    },
    computed: {
        ...mapGetters({
            userData: 'user/getPartnerAccess'
        }),
        dataUser() {
            return this.userData
        },
        nameErrors() {
            const errors = []
            if (!this.$v.newProspect.name.$dirty) return errors
            !this.$v.newProspect.name.minLength && errors.push('Минимум 2 буквы')
            !this.$v.newProspect.name.maxLength && errors.push('Максимум 30 букв')
            !this.$v.newProspect.name.required && errors.push('Обязательно для заполнения')
            !this.$v.newProspect.name.alpha && errors.push('Только буквы')
            return errors
        },
        phoneErrors() {
            const errors = []
            if (!this.$v.newProspect.phone.$dirty) return errors
            !this.$v.newProspect.phone.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newProspect.phone.maxLength && errors.push('Максимум 30 цифр')
            !this.$v.newProspect.phone.required && errors.push('Обязательно для заполнения')
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
        bizRequest() {
            this.biz_request = true
            this.bizReqDis = true
        },
        addProspectBiz() {
            this.$v.newProspect.$touch()
            if (!this.$v.newProspect.$invalid) {
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
            name: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(30),
                alpha
            },
            phone: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(20)
            },
        }
    }
}
</script>

<style lang="sass">
.biz-main
    background: #222
    font-size: 16px
    line-height: 20px
    color: #0c0c0d
    overflow: hidden

#biz-page
    max-width: 500px
    background: #fff
    margin: 0 auto

.biz-p-h
    text-transform: uppercase
    color: #659d83
    font-weight: bold
    font-size: 18px
    text-align: center

.biz-h2
    font-size: 28px
    text-transform: uppercase
    line-height: 36px
    text-align: center
    margin-bottom: 30px

.biz-h3
    color: #659d83
    font-size: 18px

.biz-h3-video
    color: #659d83
    font-size: 18px
    text-align: center
    text-transform: uppercase

.biz-ul-div
    border-left: 1px solid #000
    padding-top: 7px

.biz-ul
    list-style-type: none
    padding-left: 12px !important

.biz-ul li
    position: relative

.biz-ul li .arrow-icon
    position: absolute
    left: -19.5px
    top: 3px
    width: 14px
    height: 14px

.biz-ul-else
    list-style-type: none

.biz-ul-else li
    position: relative

.biz-ul-else li .v-icon
    position: absolute
    left: -25px
    top: 4px

.p-timeline
    color: #333333

.step-timeline
    font-size: 14px

.biz-timeline::before
    left: calc(26px - 1px) !important

.biz-timeline .v-timeline-item__body
    max-width: calc(100% - 52px)
    padding-left: 12px

.biz-timeline .v-timeline-item__divider
    min-width: 52px

.biz-title
    font-size: 18px
    font-weight: bold
    text-align: center
    margin: 40px 0 !important

.biz-pr
    list-style-type: none
    margin-bottom: 30px
    padding-left: 0 !important

.biz-pr li
    padding-bottom: 15px

.biz-p-ca
    font-weight: bold
    font-size: 18px
    color: #659d83
    text-align: center

.biz-step
    font-size: 24px
    text-transform: uppercase
    font-weight: bold
    color: #659d83

.biz-h3-step
    font-size: 18px
    color: #333333
    padding-bottom: 10px

.video-js .vjs-big-play-button
    top: 40% !important
    left: 40% !important

.cell-privacy-text
    color: #333 !important
    font-size: 10px
    line-height: 15px !important
    text-align: center

.cell-privacy-text a
    color: #333 !important

@media(max-width: 350px)
    .video-js .vjs-big-play-button
        top: 36% !important
        left: 36% !important

</style>