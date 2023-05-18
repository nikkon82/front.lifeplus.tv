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
            class="whatsapp-cell-fixed"
        >
            <v-menu
                top
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        class="align-self-end cell-chats-btn ma-2"
                        fab
                        x-large
                        color="#649D82"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-chat</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title
                            v-if="userData.phone_whatsapp"
                            class="cell-list-item"
                        >
                            <a
                                style="text-decoration: none"
                                :href="`https://wa.me/${userData.phone_whatsapp}`"
                                target="_blank"
                            >
                                <v-btn
                                    class="align-self-end cell-cntct-btn"
                                    fab
                                    small
                                    color="success"
                                >
                                    <v-icon>mdi-whatsapp</v-icon>
                                </v-btn>
                            </a>
                        </v-list-item-title>
                        <v-list-item-title
                            v-if="userData.phone_viber"
                            class="cell-list-item"
                        >
                            <a
                                :href="`viber://chat?number=${userData.phone_viber}`"
                                target="_blank"
                                style="text-decoration: none"
                            >
                                <v-btn
                                    fab
                                    dark
                                    small
                                    class="align-self-end cell-cntct-btn"
                                    color="deep-purple lighten-2"
                                >
                                    <v-icon>fab fa-viber</v-icon>
                                </v-btn>
                            </a>
                        </v-list-item-title>
                        <v-list-item-title
                            v-if="userData.telegram"
                            class="cell-list-item"
                        >
                            <a
                                style="text-decoration: none"
                                :href="`${userData.telegram}`"
                                target="_blank"
                            >
                                <v-btn
                                    fab
                                    dark
                                    small
                                    class="align-self-end cell-cntct-btn"
                                    color="blue"
                                >
                                    <v-icon>fab fa-telegram-plane</v-icon>
                                </v-btn>
                            </a>
                        </v-list-item-title>
                        <v-list-item-title
                            v-if="userData.fb_messenger"
                            class="cell-list-item"
                        >
                            <a
                                :href="`${userData.fb_messenger}`"
                                target="_blank"
                                style="text-decoration: none"
                            >
                                <v-btn
                                    fab
                                    dark
                                    small
                                    class="align-self-end cell-cntct-btn"
                                    color="light-blue"
                                >
                                    <v-icon>mdi-facebook-messenger</v-icon>
                                </v-btn>
                            </a>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
        <section id="cell-main">
            <v-row no-gutters>
                <v-container
                    fill-height
                    style="max-width: 1140px"
                >
                    <v-row
                        class=""
                    >
                        <v-col
                            cols="12"
                            md="7"
                            class="converter-main"
                        >
                            <p
                                class="rev-p-cell"
                            >
                                <v-img
                                    src="/img/cell/Lifetakt_Logo.png"
                                    class="cell-logo"
                                />
                            </p>
                            <h1
                                class="cell-h1"
                            >
                                Суперфуды
                            </h1>
                            <h2
                                class="cell-h2-main"
                            >
                                правильное и здоровое питание
                            </h2>
                            <div class="cell-subtitle-main">
                                <p>Высококачественные питательные вещества с научно доказанной эффективностью и тщательно подобранные суперфуды для идеального питания,
                                    энергии и защиты каждой клетки твоего организма.</p>
                            </div>

                            <div class="cell-video-div">
                                <div class="cell-video-btn">
                                    <v-btn
                                        class="align-self-end"
                                        color="#649D82"
                                        @click="scrollToMe"
                                    >
                                        <p class="cell-video-btn-txt">Узнать подробнее</p>
                                    </v-btn>
                                </div>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="5"
                            class="converter-main-img"
                        >
                            <v-img
                                src="/img/cell/CellMain.jpg"
                                max-width=""
                                class="cell-img-main"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <div class="block-cell">
                            <h2 class="cell-h2">
                                Суперфуды
                            </h2>
                            <p class="subtitle-h2">
                                что это такое
                            </p>
                            <p class="cell-p">
                                Это натуральные, растительные продукты, которые содержат максимально высокую концентрацию полезных веществ.
                            </p>
                            <p class="cell-p">
                                Уровень витаминов и минералов в них выше, чем в обычной пище, в десятки раз.
                            </p>
                            <p class="cell-p">
                                Если регулярно употреблять их в пищу, то вы быстро почувствуете эффект от приема.
                            </p>
                        </div>
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <h3 class="cell-h3-steps">Согласно исследованиям, выявлены полезные свойства суперфудов:</h3>
                        <ul class="cell-ul-steps">
                            <li><v-icon>mdi-check-circle-outline</v-icon>Повышают иммунитет</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Активно борются со старением организма</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Помогают худеть</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Продлевают молодость, способствуют омоложению</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Уменьшают уровень холестерина и сахара в крови</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Нормализуют кровяное давление</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Улучшают состояние сосудов и состав крови</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Снижают вероятность сосудистых заболеваний</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Нормализуют обменные процессы</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Обладают противовоспалительным и противоопухолевым действием</li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-img
                            src="/img/cell/cellpeople.jpg"
                            max-width=""
                            class="cell-img"
                        />
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <h3 class="cell-h3-steps-mini">Кому необходимы</h3>
                        <p class="subtitle-h3-cell"><span class="cell-span-title">Супер</span>фуды</p>
                        <ul class="cell-ul-steps">
                            <li><v-icon>mdi-check-circle-outline</v-icon>Кто ведет малоподвижный образ жизни</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Кому не хватает энергии, сил и хорошего настроения</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Кто подвержен ежедневному стрессу</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Кто страдает от избыточного веса</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Кто хочет дольше сохранить молодость</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Кто правильно питается и ведет активный образ жизни</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>У кого есть хронические заболевания</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Кто профессионально занимается спортом</li>
                            <li><v-icon>mdi-check-circle-outline</v-icon>Кто живет в экологически проблемных городах и городах-миллионниках</li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <h2 class="cell-h2">
                            Клеточный голод
                        </h2>
                        <p class="subtitle-h2">
                            тихий убийца XXI века
                        </p>
                        <p class="cell-p">
                            В обществе бытует стереотип, что основная проблема — это фаст фуд, переедание, сахар. Но это только верхушка айсберга.
                        </p>
                        <p class="cell-p">
                            Главная причина — это хронический клеточный голод.
                        </p>
                        <p class="cell-p">
                            Наш ежедневный рацион питания включает в себя «Избытки» и катастрофически нуждается в восполнении «Дефицита», как показано на рисунке.
                        </p>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-img
                            src="/img/cell/cell-deficit.png"
                            max-width="450px"
                            class="cell-img"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-whatsapp"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="6"
                        class="whatsapp-cell-block"
                        style="margin-top: 20px"
                    >
                        <h3 class="cell-h3-whatsapp">Хотите узнать как дефицит в питании уже повлиял на ваш организм?</h3>
                        <p class="cell-p-whatsapp">
                            Вы можете оставить заявку на прохождение бесплатного онлайн-теста по здоровью,
                            который покажет, какие системы вашего организма находятся в "зоне риска" и нуждаются в восстановлении?
                        </p>
                        <p class="mb-2">
                            Выберите удобный для вас мессенджер, на который вышлем ссылку на прохождение онлайн-теста:
                        </p>
                        <div class="mt-3">
                            <v-btn
                                fab
                                dark
                                small
                                class="mr-3"
                                color="success"
                                @click="btnWhatsapp"
                            >
                                <v-icon>mdi-whatsapp</v-icon>
                            </v-btn>
                            <v-btn
                                fab
                                dark
                                small
                                class="mr-3"
                                color="deep-purple lighten-2"
                                @click="btnViber"
                            >
                                <v-icon>fab fa-viber</v-icon>
                            </v-btn>
                        </div>
                        <div v-if="btnWhatsappTrue">
                            <div class="chat-input">
                                <v-text-field
                                    :disabled="disInpWhatsapp"
                                    label="Номер Whatsapp"
                                    prepend-icon="mdi-whatsapp"
                                    type="text"
                                    v-model.trim="newProspect.phone_whatsapp"
                                    :error-messages="phoneWhatsappErrors"
                                    @input="$v.newProspect.phone_whatsapp.$touch()"
                                    @blur="$v.newProspect.phone_whatsapp.$touch()"
                                    hint="79123456789"
                                    persistent-hint
                                />
                            </div>
                            <div class="chat-controls mt-3 mb-1">
                                <v-btn
                                    class="chat-btn"
                                    color="#649d82"
                                    @click="addProspectCellTest"
                                >
                                    <v-icon class="mr-3">mdi-send</v-icon>
                                    Отправить
                                </v-btn>
                            </div>
                            <p class="privacy-text">
                                Оставляя заявку, вы даете свое
                                <router-link :to="{name: 'Personal'}" target="_blank">Согласие на обработку персональных данных</router-link>
                                и принимаете
                                <router-link :to="{name: 'Policy'}" target="_blank">Политику конфидециальности</router-link>.
                            </p>
                        </div>
                        <div v-if="btnViberTrue">
                            <div class="chat-input">
                                <v-text-field
                                    :disabled="disInpViber"
                                    label="Номер Viber"
                                    prepend-icon="fab fa-viber"
                                    type="text"
                                    v-model.trim="newProspect.phone_viber"
                                    :error-messages="phoneViberErrors"
                                    @input="$v.newProspect.phone_viber.$touch()"
                                    @blur="$v.newProspect.phone_viber.$touch()"
                                    hint="79123456789"
                                    persistent-hint
                                />
                            </div>
                            <div class="chat-controls">
                                <v-btn
                                    class="chat-btn"
                                    color="#649d82"
                                    @click="addProspectCellTest"
                                >
                                    <v-icon class="mr-3">mdi-send</v-icon>
                                    Отправить
                                </v-btn>
                            </div>
                            <p class="privacy-text">
                                Оставляя заявку, вы даете свое
                                <router-link :to="{name: 'Personal'}" target="_blank">Согласие на обработку персональных данных</router-link>
                                и принимаете
                                <router-link :to="{name: 'Policy'}" target="_blank">Политику конфидециальности</router-link>.
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <h2 class="cell-h2 mt-10">
                        СЕЛЛ ЭССЕНС
                    </h2>
                    <p class="subtitle-h2">
                        <span style="border-bottom: 1px solid #649d82">комплексное</span> решение для ваших клеток
                    </p>
                    <p class="cell-p mb-5">
                        Включает три продукта для нормального состояния и производительности клеток.
                        Специально разработана и произведена в Германии для решения проблемы клеточного голода.
                    </p>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-img
                            src="/img/cell/cell-3.png"
                            max-width="450px"
                            class="cell-img"
                        />
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <p class="cell-p">
                            Эти три продукта <strong>обеспечивают клетки всеми жизненно важными питательными веществами</strong>,
                            которые ежедневно необходимы нам для полноценного питания клеток, поскольку каждую секунду в организме разрушаются
                            и заменяются новыми от 10 до 50 миллионов клеток.
                        </p>
                        <p class="cell-p">
                            Когда эти клетки насыщены питательными веществами, новые клетки формируются легче, а вредные побочные продукты могут
                            быть изолированы или нейтрализованы. Таким образом наш <strong>организм восстанавливается и обновляется</strong>, а значит, остается
                            в хорошей форме и полным энергии.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-video"
        >
            <v-container class="text-center">
                <h2 class="cell-h2-video mb-3">Видео про Селл Эссенс</h2>

                <div style="width: 100%; max-width: 800px; height: auto; margin: 0 auto">
                    <div class="thumb-wrap mt-6 mb-15">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/5cmRtYPb2bs"
                            title="Селл Эссенс от LR"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

            </v-container>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                    >
                        <h2 class="cell-h2">В чем уникальность Селл Эссенс?</h2>

                        <v-img
                            src="/img/cell/Cell_Essence.jpg"
                            max-width="450px"
                            class="cell-img"
                            style="margin: 20px auto"
                        />

                        <p class="cell-p mt-3">
                            <v-icon style="color: #649d82">mdi-check-circle-outline</v-icon> Селл Эссенс - это Суперфуды, прошедшие космическую технологию сублимации,
                            которая позволяет уменьшить вес и объем продукта в несколько десятков раз, <strong>сохраняя 98% полезных веществ</strong>.
                            Например, после сублимации пюре из свежих овощей и фруктов весом в 3 кг остается спрессованный сухой брусок весом около 10 граммов.
                        </p>
                        <p class="cell-p">
                            <v-icon style="color: #649d82">mdi-check-circle-outline</v-icon> Селл Эссенс - это <strong>омоложение всех органов и систем, торможение процессов старения</strong>,
                            восстановление гармоничной работы органов: <br>
                            - Селл Эссенс Питание = желудок, поджелудочная железа, печень, тонкий и толстый кишечник;<br>
                            - Селл Эссенс Энергия = сердечно-сосудистая и нервная система,  энергобаланс;<br>
                            - Селл Эссенс Восстановление = опорно-двигательная система, кожа, волосы, ногти, скорость обновления клеток, запах кожи и тела
                        </p>
                        <p class="cell-p">
                            <v-icon style="color: #649d82">mdi-check-circle-outline</v-icon> Это часть питания, причем очень сытная, несмотря на объем 100 мл.
                            Поэтому объем обычной еды будет уменьшен, что <strong>приведет к сбросу лишнего веса</strong>.
                        </p>
                        <p class="cell-p">
                            <v-icon style="color: #649d82">mdi-check-circle-outline</v-icon> Всемирная организация здравоохранения (ВОЗ) рекомендует взрослому
                            человеку употреблять в день 5 порций фруктов и овощей, не считая картофеля. <strong>Селл Эссенс - заменяет 3 порции овощей и фруктов
                            в день</strong>.
                        </p>
                        <p class="cell-p">
                            <v-icon style="color: #649d82">mdi-check-circle-outline</v-icon> Простое и легкое приготовление. И что не менее важно, <strong>Селл Эссенс
                            - это очень вкусно</strong>!
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                    >
                        <v-img
                            src="/img/cell/cbflogo.png"
                            max-width="75px"
                            class="cell-img mr-3"
                            style="display: inline-block"
                        />
                        <p class="cell-p mt-3">
                            Логотип Cell Boost Formula  означает <strong>максимальную эффективность на клеточном уровне</strong>.
                        </p>
                        <p class="cell-p">
                            Клетка получает наиболее важные минералы и витамины, обладающие научно подтвержденными полезными свойствами,
                            то есть состав продукта представляет собой <strong>эффективный коктейль с необходимым разнообразием и высокой биодоступностью</strong>.
                        </p>
                        <p class="cell-p">
                            Продукты также содержат тщательно отобранные суперфуды, позволяющие оптимизировать клеточные процессы.
                        </p>

                        <v-img
                            src="/img/cell/madeingermany.png"
                            max-width="75px"
                            class="cell-img"
                            style="display: inline-block"
                        />
                        <p class="cell-p mt-3">
                            Сделано в Германии - высочайшее качество продукта.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px; position: relative"
                    class="mx-auto"
                >
                    <v-img
                        src="/img/cell/1.png"
                        max-width="140px"
                        class="cell-img cell-number"
                        style="position: absolute; top: 0; right: 30px; z-index: 1;"
                    />
                    <v-img
                        src="/img/cell/Cellfood.jpg"
                        max-width=""
                        class="cell-img"
                    />
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-video"
        >
            <v-container class="text-center">
                <h2 class="cell-h2-video mb-3">Видео от эксперта</h2>

                <div style="width: 100%; max-width: 800px; height: auto; margin: 0 auto">
                    <div class="thumb-wrap mt-6 mb-15">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/VOEs07pUuFc"
                            title="Профессор Дадали о Селл Эссенс (Питание)"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

            </v-container>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <h2 class="cell-h2">
                            Для чего
                        </h2>
                        <p class="cell-p">
                            Формирует основу здоровья наших клеток, <strong>снабжая</strong> их важными базовыми <strong>питательными веществами</strong>
                            и защищая от оксидативного стресса.
                        </p>
                        <p class="cell-p">
                            Продукт включает комбинацию тщательно подобранных Суперфудов: <strong>каму-каму</strong> и <strong>ацерола</strong>,
                            а также смесь витаминов, минералов и ферментов высокого качества — <strong>витамины С, Е, А, цинк, железо, липаза и амилаза</strong>.
                        </p>
                        <v-img
                            src="/img/cell/cellicons1.png"
                            max-width="350px"
                            class="cell-img"
                        />
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Каму-каму</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        Кладезь полезных питательных веществ.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Каму-каму – источник витаминов (особенно витамина С), аминокислот и природных антиоксидантов,
                                        содержит в своем составе ингибиторы ферментов. Они способствуют профилактике развития диабетических осложнений.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Помогает боротся с окислительным стрессом,
                                        который связан с такими заболеваниями, как диабет, болезни сердца и рак.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Эффективен в снижении воспаления в теле.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Снижает вес тела за счет увеличения количества
                                        сожженных калорий и положительного изменения кишечных бактерий.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Снижает уровень сахара в крови.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Снижает кровяное давление, способствуя расширению кровеносных сосудов.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Ацерола (барбадосская вишня)</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        Известна очень высоким содержанием витамина С, который в 100 раз превышает содержание витамина С в апельсинах.
                                        Ни одно известное растение не содержит больше витамина С, чем ацерола.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Также содержит: Витамин А, витамины группы B, калий, кальций, фосфор и некоторые другие минералы.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Поддерживает иммунитет
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Профилактика зрительной системы
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Улучшает работу нервной системы
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Улучшает работу сердечно-сосудистой системы
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Благотворно влияет на волосы, ногти, кости
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Антиоксидантные свойства
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Фруктовые и овощные экстракты</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        Содержит высококачественные фруктовые и овощные экстракты брокколи, шпинат, капуста, морковь, томаты.
                                    </p>
                                    <p class="cell-step-p-exp">
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Витамины А, С, Е</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        <strong>Витамин А</strong> участвует в формировании клеток, поддержании остроты зрения,
                                        работе иммунитета и репродуктивных функций, сердечно-сосудистой системы, легких, почек.
                                        В соответствии с этим при дефиците витамина формируются проблемы.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <strong>Витамин С</strong> способствует нормальному энергетическому метаболизму и нормальному функционированию
                                        иммунной системы. При его недостатке снижается иммунитет, ухудшается состояние кровеносных сосудов и капилляров.
                                        Помогает в борьбе с вирусными недугами, а также при лечении рака.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <strong>Витамин Е</strong> – антиоксидант, предохраняет мембраны клеток от окисления, света и радиации.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Минералы</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        <strong>Цинк.</strong> Поддержание необходимого уровня цинка критически важно для иммунитета, заживления ран,
                                        половой функции и здоровья кожи. Он необходим для укрепления памяти и концентрации внимания.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Цинк помогает предотвратить рак. Отвечает за синтез тестостерона.
                                        Недостаток тестостерона приводит к снижению потенции, увеличивается риск возникновения инфаркта.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <strong>Железо</strong> влияет на уровень жизненной энергии, концентрацию внимания, желудочно-кишечные процессы,
                                        иммунную систему и регуляцию температуры тела.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Организм не вырабатывает железо самостоятельно.
                                        Его недостаток моментально сказывается на самочувствии.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> снижается иммунитет, увеличивается риск инфекционных заболеваний<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> повышается утомляемость<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> ощущается постоянная усталость<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> происходят нежелательные изменения в тканях и органах
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Железо также необходимо для поддержания здоровья клеток, кожи, волос и ногтей.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Ферменты</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        Необходимы для переваривания пищевых продуктов, стимуляции деятельности головного мозга,
                                        процессов энергообеспечения клеток, восстановления органов и тканей.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Наиболее важной функцией ферментов является ускорение и запуск биохимических реакций в организме.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px; position: relative"
                    class="mx-auto"
                >
                    <v-img
                        src="/img/cell/2.png"
                        max-width="140px"
                        class="cell-img cell-number"
                        style="position: absolute; top: 0; right: 30px; z-index: 1;"
                    />
                    <v-img
                        src="/img/cell/Cellenergy.jpg"
                        max-width=""
                        class="cell-img"
                    />
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-video"
        >
            <v-container class="text-center">
                <h2 class="cell-h2-video mb-3">Видео от эксперта</h2>

                <div style="width: 100%; max-width: 800px; height: auto; margin: 0 auto">
                    <div class="thumb-wrap mt-6 mb-15">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/ygoYnWRNvdk"
                            title="Профессор Дадали о Селл Эссенс (Энергия)"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

            </v-container>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <h2 class="cell-h2">
                            Для чего
                        </h2>
                        <p class="cell-p">
                            Комплекс витаминов группы В в сочетании с суперфудами обеспечивает более высокий уровень энергии
                            в клетках и дает вам заметно <strong>больше энергии, бодрости и ясности ума</strong>.
                        </p>
                        <p class="cell-p">
                            Идеально подходит для спортивных людей и профессиональных атлетов.
                        </p>
                        <p class="cell-p">
                            Так же <strong>способствует поддержанию или снижению веса</strong>.
                        </p>
                        <p class="cell-p">
                            Продукт обогащен минералами высокого качества: <strong>хромом, кальцием и магнием</strong>, а также содержит сочетание инновационных Суперфудов,
                            таких как <strong>спирулина, хлорелла и гуарана</strong>.
                        </p>

                        <v-img
                            src="/img/cell/icons.jpg"
                            max-width="350px"
                            class="cell-img"
                        />
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Спирулина</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        Это сине-зелёная водоросль, которую также называют «едой будущего».
                                    </p>
                                    <p class="cell-step-p-exp">
                                        По сути, это фотосинтетические цианобактерии. Много белка, жирные кислоты, фитонутриенты, металлы, витамины.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Укрепляет иммунную систему<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Уменьшает рост опухолей<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Противодействует свободным радикалам (антиоксидант)<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Помогает легче переносить аллергию<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Повышает выносливость и эффективность тренировок<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Способствует росту здоровой микрофлоры в кишечнике.<br>
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Хлорелла</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        Одноклеточные зелёные водоросли. 650 различных веществ, витаминов, микроэлементов, минералов и соединений: витамины групп А, В и D, 40 аминокислот, фолиевая кислота, железо, магний, фосфор, медь, сера, полиненасыщенные кислоты. Считается суперфудом.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Улучшает пищеварение и ускоряет обмен веществ<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Выводит из организма токсины и тяжёлые металлы<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Заряжает энергией<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Усиливает иммунную систему<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Стимулирует противовоспалительный эффект<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Нормализует уровень холестерина<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Замедляет процессы старения<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Помогает восстановиться после болезней<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Способствует снижению веса<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Нормализует уровень сахара в крови<br>
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Гуарана</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        Экстракт семян гуараны содержит в 4 раза больше гуаранина (кофеина), чем зерна обычного кофе.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        А также ксантиновые алкалоиды, полифенолы, танин, витамины Е, А и группы В. Хорошо стимулирует организм, бодрит без побочных эффектов (нет перевозбуждения).
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Эффективна при синдроме хронической усталости<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Повышает работоспособность и выносливость организма<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Снижает аппетит и ускоряет сжигание жиров<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Способствует хорошему эмоциональному состоянию<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Показана при мигрени и головокружениях<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Хорошо поддерживает работу сердечно-сосудистой системы<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Увеличивает расход калорий при физических тренировках<br>
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Витамины</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        <strong>Витамин С</strong>. При недостатке снижается иммунитет, ухудшается состояние кровеносных сосудов и капилляров.
                                        Помогает в борьбе с вирусными недугами, а также при лечении рака.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <strong>Витамины группы В (В1, В2, В3, В5)</strong>. Поддержание работы нервной системы.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> нормализация работы центральной нервной системы<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> улучшение функционирования сердца и кровеносных сосудов<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> благоприятное воздействие на органы желудочно-кишечного тракта<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> повышение тонуса кожи, её эластичности<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> снижение негативного воздействия стресса<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> повышение мышечного тонуса<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> укрепление иммунитета<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> снижение уровня холестерина в крови<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> улучшение состояния кожного покрова, цвета лица<br>
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Минералы</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        <strong>Хром</strong>. Укрепляет костную ткань, обеспечивая
                                        профилактику остеопороза, а также предупреждает возникновение гипертонии, снижает артериальное давление.
                                        Выводит из организма соли тяжелых металлов, токсины и радионуклиды.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <strong>Кальций</strong>. Нехватка кальция приводит к ухудшению состояния костей, волос, зубов,
                                        развитию остеопороза, возникновению почечной и сердечной недостаточности, неправильной работе щитовидной железы,
                                        замедлению передачи нервных импульсов.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <strong>Медь</strong>. Медь необходима для лучшего функционирования иммунной системы и процесса кроветворения.
                                        Нормализует обмен веществ. Обеспечивает здоровье и прочность костей, предотвращает вымывание минералов и служит
                                        профилактикой остеопороза.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <strong>Магний</strong>. Оказывает успокаивающее действие, снижая возбудимость нервной системы.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Защищает организм от инфекции, участвуя в выработке антител. Магний влияет на работоспособность, утомляемость, стрессоустойчивость, работу сердца и нервов,
                                        кровяное давление, кислотность желудочного сока.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <strong>Марганец</strong>. Влияет на работу нервной системы.
                                        Благотворно влияет на образование и рост костной ткани вместе с кальцием, поддерживает иммунную систему при
                                        противостоянии различным инфекциям, стабилизирует пищеварительный процесс.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Влияет на работу мозга, рост и образование новых клеток. Предотвращает развитие сахарного диабета, болезней сердечно-сосудистой
                                        системы и щитовидной железы.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Марганец поможет вернуть тонус мышечной ткани и чувствительность конечностям, предотвратить атеросклероз,
                                        снизить активность вредного холестерина, привести в норму мочеполовую систему. При беременности в умеренных
                                        дозах марганец необходим для правильного формирования плода, а после родов способствует лактации.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Участвует в процессе кроветворения. Также способен уменьшить влияние токсинов на организм.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <strong>Йод</strong>. Участвует в синтезе двух гормонов щитовидной железы, Т3 и Т4. Они играют важную роль
                                        в регулировании обмена веществ, в росте и развитии, а также в развитии центральной нервной системы и головного
                                        мозга у плода и детей.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Эти гормоны регулируют метаболическую деятельность большинства клеток и играют жизненно важную роль в процессе
                                        раннего роста и развития большинства органов, особенно головного мозга. Недостаточное потребление йода может привести
                                        к недостаточной выработке этих гормонов, что негативно влияет на мышцы, сердце, печень, почки и развивающийся мозг.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Также содержит железо
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Рибоза</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        Помогает синтезировать белок, способствует уменьшению утомляемости и улучшению спортивных результатов.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Помогает восстановить запасы энергии в клетках и улучшить работу сердца.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        При регулярном приеме способствует повышению ясности ума. Помогает повысить уровень выносливости и обеспечивать прилив сил.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px; position: relative"
                    class="mx-auto"
                >
                    <v-img
                        src="/img/cell/3.png"
                        max-width="140px"
                        class="cell-img cell-number"
                        style="position: absolute; top: 0; right: 30px; z-index: 1;"
                    />
                    <v-img
                        src="/img/cell/Cellregen.jpg"
                        max-width=""
                        class="cell-img"
                    />
                </v-row>
            </v-container>
        </section>

        <section
            id="cell-video"
        >
            <v-container class="text-center">
                <h2 class="cell-h2-video mb-3">Видео от эксперта</h2>

                <div style="width: 100%; max-width: 800px; height: auto; margin: 0 auto">
                    <div class="thumb-wrap mt-6 mb-15">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/EHQTQy3_rbY"
                            title="Профессор Дадали о Селл Эссенс (Восстановление)"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

            </v-container>
        </section>

        <section
            id="cell-start"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <h2 class="cell-h2">
                            Для чего
                        </h2>
                        <p class="cell-p">
                            Поддерживает процессы регенерации и деления клеток а так же воспроизведение генетической информации — ДНК.
                        </p>
                        <p class="cell-p">
                            Содержит Суперфуды: куркуму, смесь витаминов и минералов высокого качества, таких как витамин D3, медь, селен и фолиевая кислота.
                        </p>
                        <v-img
                            src="/img/cell/icons.jpg"
                            max-width="350px"
                            class="cell-img"
                        />
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Куркума</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        Вся польза куркумы кроется в особом активном ингредиенте, обладающий мощными биологическими свойствами — в куркумине.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Исследования показали, что он обладает различными антиоксидантными, нейропротекторными, противовоспалительными и антиканцерогенными свойствами.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Вот всего лишь несколько научно доказанных полезных свойств куркумы:
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Природное противовоспалительное средство<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Мощный антиоксидант<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Улучшает функции мозга<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Способствует похудению<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Помогает при депрессии<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Защищает от диабета<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Помогает при любых заболеваний кожи<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Снижает риск сердечных заболеваний<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Помогает при раке, артрите и в лечении болезни Альцгеймера<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Облегчает симптомы раздражённого кишечника<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Продлевает жизнь<br>
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title"> Витамины D и В9</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        <strong>Витамин D</strong>. Благодаря ему нормально формируется скелет, повышается иммунитет,
                                        улучшается кровяное давление и сердцебиение. Недостаток витамина проявляется частыми простудами, выпадением волос. депрессией.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Основные функции витамина Д:
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> Способствует нормальному формированию скелета.<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Обеспечивает обмен кальция и фосфора в организме.<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Способствует мышечному тонусу.<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Повышает иммунитет.<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Необходим для функционирования щитовидной железы и нормальной свертываемости крови.<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Помогает организму восстанавливать защитные оболочки, окружающие нервы.<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> Участвует в регуляции кровяного давления и сердцебиения.<br>
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <strong>Витамин В9</strong>
                                    </p>
                                    <p class="cell-step-p-exp">
                                        <v-icon>mdi-check-circle-outline</v-icon> необходим для выработки гормонов «счастья» <br>
                                        <v-icon>mdi-check-circle-outline</v-icon> влияет на эмоциональный фон, деление клеток, рост и развитие всех тканей<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> помогает наладить работу иммунной системы<br>
                                        <v-icon>mdi-check-circle-outline</v-icon> поддерживает сердечнососудистую систему
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Благотворно влияет на работу кроветворной системы, состояние печени и на пищеварительную систему в целом.
                                        Кроме этого, обеспечивает передачу импульсов между клетками нервной системы, регулирует процессы возбуждения
                                        и торможения нервной системы, сглаживает последствия стрессовых ситуаций.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="cell-exp-panel">
                                <v-expansion-panel-header class="cell-exp-title">Минералы</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 cell-step-p-exp">
                                        <strong>Селен</strong>. Незаменимый микроэлемент, содержится во всех тканях организма. Участвует в работе иммунной,
                                        антиоксидантной и детоксикационной систем организма, прерывает цепь свободнорадикального окисления и нейтрализует
                                        свободные радикалы в момент их возникновения. Защищает клетки от токсического воздействия.
                                        Он также относится к геропротекторам – веществам, замедляющим старение организма.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Селен может быть полезен  в борьбе с инфекционными заболеваниями и вирусными инфекциями. Участвует в поддержании
                                        правильной функции щитовидной железы. Благоприятно влияет на фертильность у мужчин и снижает риск выкидыша у женщин.
                                    </p>
                                    <p class="cell-step-p-exp">
                                        Также содержит хром, кальций, железо, медь, магний, цинк
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section id="cell-consultant">
            <v-container class="text-center">
                <h2 class="cell-h2-center mt-7 mb-3">Хотите получить консультацию по Селл Эссенс?</h2>

                <p class="cell-consultant-p">Свяжитесь с консультантом LR любым удобным вам способом</p>
<!--                <p class="mb-5">Свяжитесь с консультантом LR любым удобным вам способом</p>-->

                <v-responsive
                    class="mx-auto mb-10"
                    width="56"
                >
                    <v-divider class="mb-1" style="border-color: #649d82"></v-divider>

                    <v-divider style="border-color: #649d82"></v-divider>
                </v-responsive>

                <v-card
                    class="v-card-profile v-card--material mt-16 pa-3 mx-auto"
                    max-width="430"
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

                            <p v-if="userData.country || userData.city">
                                <span v-if="userData.country">{{ userData.country }}</span>
                                <span v-if="userData.country && userData.city">, </span>
                                <span v-if="userData.city">{{ userData.city }}</span>
                            </p>
                        </v-card-text>
                    </div>
                    <v-divider style="padding-bottom: 20px"/>
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
                </v-card>
            </v-container>
        </section>

        <v-footer
            class="justify-center cell-footer"
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
    name: "CellRU",
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
        btnWhatsappTrue: false,
        btnViberTrue: false,
        disInpWhatsapp: false,
        disInpViber: false,
    }),
    metaInfo: {
        title: 'Cell Essence - Суперфуды',
        meta: [
            { vmid: 'description', property: 'description', content: 'Суперфуды - клеточное питание для лучшего здоровья' },
            { vmid: 'og:title', property: 'og:title', content: 'Cell Essence - Суперфуды' },
            { vmid: 'og:description', property: 'og:description', content: 'Суперфуды - клеточное питание для лучшего здоровья' },
            { vmid: 'og:image', property: 'og:image', content: '/img/cell/cell.jpg' },
        ],
    },
    created() {
        if (!this.$route.query.p) {
            if (this.$cookies.isKey('lifeplus_partner')) {
                const partnerNum = this.$cookies.get('lifeplus_partner')
                this.$router.push ({name: 'CellRU', query: { p: partnerNum }})
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
        addProspectCellTest() {
            this.$v.newProspect.phone_whatsapp.$touch() || this.$v.newProspect.phone_viber.$touch() || this.$v.newProspect.phone.$touch()
            if (!this.$v.newProspect.phone_whatsapp.$invalid || !this.$v.newProspect.phone_viber.$invalid || !this.$v.newProspect.phone.$invalid) {
                this.disInpWhatsapp = true
                this.disInpViber = true
                this.newProspect.req = 'Заявка на онлайн-тест'
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
#cell-main
    background-color: #ffffff
    padding-bottom: 60px

#cell-skin, #cell-start
    background-color: #ffffff
    padding-bottom: 60px

#cell-start
    padding-top: 40px

#cell-info-video, #cell-box-award, #cell-sostav, #cell-faq, #cell-consultant, #cell-video
    background-color: #ffffff

.media-img
    display: none

.converter-main
    background-color: #ffffff

.whatsapp-cell-fixed
    position: fixed
    margin-top: 0
    margin-bottom: 0
    bottom: 21px
    right: 20px
    z-index: 10

.block-podcherk-cell
    position: relative
    display: block
    width: 230px

.cell-list-item
    margin-right: 10px

.cell-list-item:last-child
    margin-right: 0

.cell-chats-btn
    margin: 0 !important

.cell-cntct-btn
    box-shadow: none !important

.cell-video-div
    padding-left: 0px

.block-cell
    padding-right: 40px

.cell-video-btn
    width: 60px
    display: inline-block

.cell-video-btn-txt
    display: inline-block
    margin-bottom: 0 !important
    color: #fff

.cell-line-title
    position: absolute
    top: 50%
    left: 50%
    width: calc(100% + 20px)
    height: calc(100% + 20px)
    -webkit-transform: translate(-50%,-50%)
    -ms-transform: translate(-50%,-50%)
    transform: translate(-50%,-50%)
    overflow: visible

.cell-h2-main-view
    font-size: 24px
    margin-bottom: 20px

.cell-line-title path
    stroke: #649d82
    stroke-width: 9
    fill: none
    opacity: 1
    stroke-dasharray: 1500 1500
    -webkit-transition: .3s
    -o-transition: .3s
    transition: .3s

.cell-nabor
    color: #333
    font-size: 18px
    font-style: italic
    margin-bottom: 0 !important

.p-cell
    font-size: 16px

.cell-divider
    text-align: center
    margin: 40px 0

.cell-divider .v-icon
    color: #826235

.cell-border-left
    border-left: 3px solid #826235
    padding-left: 20px

.cell-border-left:before
    content: "“"
    font-size: 100px
    color: #826235
    font-weight: 900
    line-height: 1
    display: block
    height: .6em
    font-family: Times New Roman,Times,serif

.cell-blockquote
    font-size: 16px
    font-style: italic

.p-cell-zakaz
    color: #826235
    text-align: center
    font-size: 16px
    line-height: 20px !important

.cell-sostav
    text-transform: uppercase
    background-color: #649d82
    padding: 3px 5px
    color: white
    margin-bottom: 20px
    display: inline-block

.cell-p-price
    font-size: 24px
    margin-top: 20px

.cell-price
    color: #649d82
    font-size: 48px
    margin-left: 20px
    padding-top: 20px
    display: inline-block

.cell-price-line
    text-decoration: line-through
    font-weight: lighter
    margin-left: 10px

.rev-p-cell
    font-weight: bold
    text-transform: uppercase
    line-height: 18px !important
    margin-bottom: 30px !important
    color: #333
    font-size: 22px
    display: inline-block
    position: relative
    margin-top: 15%

.cell-logo
    margin-right: 10px
    float: left

.rev-p-cell span
    position: relative
    top: 15px

.cell-h1
    color: #333
    font-size: 64px
    line-height: 60px
    font-weight: 600
    margin-bottom: 10px
    position: relative
    text-transform: uppercase

.cell-h2-main
    font-size: 52px
    font-weight: 300
    line-height: 50px
    margin-bottom: 40px

.converter-main-img
    margin-top: 10%

.cell-img-in
    max-width: 250px

.cell-subtitle-main
    position: relative
    margin-bottom: 40px

.cell-subtitle-main p
    font-size: 20px
    font-weight: 300
    line-height: 32px

.cell-ul-main
    list-style-type: none
    margin-top: 30px
    padding-left: 10px !important
    margin-bottom: 20px

.cell-ul-main li
    font-size: 22px
    line-height: 34px
    color: #333333

.cell-icon-main
    color: #649d82 !important
    padding-right: 5px

.cell-h2
    font-size: 54px
    color: #649d82
    line-height: 58px !important

.cell-h2-video
    font-size: 24px
    color: #649d82
    line-height: 30px !important

.subtitle-h2
    font-size: 48px
    font-weight: 300
    margin-bottom: 40px !important
    line-height: 52px !important

.cell-p
    font-size: 18px

.cell-h2-center
    font-size: 28px
    margin-top: 10px
    margin-bottom: 10px
    color: #649d82
    text-transform: uppercase
    text-align: center

.cell-h2-steps
    font-size: 36px
    margin-bottom: 10px
    color: #649d82
    text-transform: uppercase

.cell-h3-steps
    font-size: 22px
    margin-bottom: 20px
    margin-top: 20px
    color: #649d82

.cell-h3-steps-mini
    font-size: 32px
    margin-bottom: 10px
    color: #649d82
    text-transform: uppercase

.subtitle-h3-cell
    font-size: 64px
    font-weight: 300
    text-transform: uppercase
    margin-bottom: 40px !important
    line-height: 60px !important

.cell-span-title
    font-weight: bold
    border-bottom: 1px solid #649d82

.cell-snoska
    display: inline-block
    margin-bottom: 20px
    margin-top: 30px

.cell-snoska-table
    display: inline-block
    margin-bottom: 20px
    margin-top: 30px
    max-width: 670px

.cell-ul-steps
    font-size: 16px
    list-style-type: none
    padding: 0 !important
    margin-bottom: 20px

.cell-ul-steps li
    line-height: 2rem
    margin-bottom: 10px

.cell-ul-steps li .v-icon
    padding-right: 7px
    color: #649d82

#cell-whatsapp
    background-color: #FCFAF8
    background-image: url("/img/cell/cellbg.jpg")
    background-position: bottom center
    background-repeat: no-repeat
    background-size: cover
    height: 550px

.cell-h3-whatsapp
    font-size: 28px
    color: #649d82

.cell-p-whatsapp
    margin-top: 15px
    font-size: 16px

.cell-p-whatsapp-small
    font-size: 16px

.whatsapp-cell-block
    background-color: #ffffff73

.cell-privacy-text
    color: #333 !important
    font-size: 10px
    line-height: 15px !important

.cell-privacy-text a
    color: #333 !important

.cell-input-phone .v-icon
    color: #649d82 !important

.cell-input-phone .v-lacelll
    color: #333 !important

.cell-input-phone input
    color: #333 !important

.cell-info-p-bold
    font-size: 32px
    font-weight: bold
    line-height: 44px !important

.cell-video-who
    font-size: 18px
    margin-top: 40px
    margin-bottom: 7px !important

.cell-video-who span
    display: block

.cell-video-border
    border-bottom-width: 1px
    width: 97px
    border-style: solid
    border-color: #649d82

.cell-exp-panel .v-icon
    color: #649d82 !important

.cell-exp-title
    font-size: 16px

.cell-step-p-exp
    font-size: 16px

.cell-footer
    background-color: #649d82 !important
    color: white !important

.cell-consultant-p
    font-size: 18px

.cell-video-main
    max-width: 800px
    margin-left: auto
    margin-right: auto

@media(max-width: 1263px)
    #cell-whatsapp
        height: 600px

@media(max-width: 1200px)
    #cell-skin
        padding-bottom: 0

    .cell-complex-left
        padding: 20px 30px

    .cell-complex-right
        padding: 20px 30px

    .cell-p
        font-size: 16px

    .lifetakt-cell
        margin-left: 40px

    .rev-p-cell
        font-size: 18px

    .cell-h1
        font-size: 46px

    .block-podcherk-cell
        width: 200px

    .cell-subtitle-main p
        font-size: 22px

    .cell-ul-main li
        font-size: 18px
        line-height: 28px

@media(max-width: 959px)
    .media-img
        display: inline-block

    .right-img
        display: none

    .rev-p-cell
        margin-top: 5%

    .cell-h1
        line-height: 44px

    .cell-h2-main
        font-size: 36px
        line-height: 40px
        margin-bottom: 30px

    .cell-subtitle-main p
        font-size: 18px

    .converter-main-img
        max-width: 450px
        margin: 5% auto 0

    #cell-start
        padding-top: 0

    .cell-h2
        font-size: 48px
        line-height: 50px !important

    .subtitle-h2
        font-size: 42px
        margin-bottom: 20px !important
        line-height: 42px !important

    .subtitle-h3-cell
        font-size: 48px
        line-height: 50px !important

    #cell-skin, #cell-start
        padding-bottom: 20px

    .cell-img
        margin: 0 auto

@media(max-width: 760px)
    .lifetakt-cell
        margin-bottom: 20px

    #cell-whatsapp
        height: 650px

@media(max-width: 500px)
    .converter-main
        margin-left: 0

    .lifetakt-cell
        margin-left: 0

@media(max-width: 480px)
    .rev-p-cell
        max-width: 200px
        line-height: 18px !important
        margin-bottom: 30px !important
        font-size: 14px

    .cell-h1
        font-size: 36px
        line-height: 40px

    .block-podcherk-cell
        width: 150px

    #cell-whatsapp
        height: 700px

    .cell-h3-whatsapp
        font-size: 24px
        line-height: 32px !important

    .cell-h2
        font-size: 40px
        line-height: 48px !important

    .subtitle-h2
        font-size: 38px

    .cell-h3-steps-mini
        font-size: 28px

    .subtitle-h3-cell
        font-size: 38px
        line-height: 30px !important

    .cell-number
        max-width: 100px !important
        right: 10px !important
        top: -20px !important

    .video-js .vjs-big-play-button
        top: 40% !important
        left: 40% !important

@media(max-width: 350px)
    .converter-main
        background-color: initial

    .cell-h2
        margin-bottom: 10px
        font-size: 36px
        line-height: 38px !important

    .subtitle-h2
        font-size: 32px
        line-height: 38px !important

    .cell-h3-steps-mini
        font-size: 24px

    .subtitle-h3-cell
        font-size: 38px
        line-height: 30px !important

    .video-js .vjs-big-play-button
        top: 36% !important
        left: 36% !important

    .cell-number
        max-width: 70px !important

</style>