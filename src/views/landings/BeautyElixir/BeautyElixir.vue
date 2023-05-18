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
            class="whatsapp-be-fixed"
        >
            <v-menu
                top
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        class="align-self-end be-chats-btn ma-2"
                        fab
                        x-large
                        color="success"
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
                            class="be-list-item"
                        >
                            <a
                                style="text-decoration: none"
                                :href="`https://wa.me/${userData.phone_whatsapp}`"
                                target="_blank"
                            >
                                <v-btn
                                    class="align-self-end be-cntct-btn"
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
                            class="be-list-item"
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
                                    class="align-self-end be-cntct-btn"
                                    color="deep-purple lighten-2"
                                >
                                    <v-icon>fab fa-viber</v-icon>
                                </v-btn>
                            </a>
                        </v-list-item-title>
                        <v-list-item-title
                            v-if="userData.telegram"
                            class="be-list-item"
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
                                    class="align-self-end be-cntct-btn"
                                    color="blue"
                                >
                                    <v-icon>fab fa-telegram-plane</v-icon>
                                </v-btn>
                            </a>
                        </v-list-item-title>
                        <v-list-item-title
                            v-if="userData.fb_messenger"
                            class="be-list-item"
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
                                    class="align-self-end be-cntct-btn"
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
        <section id="beauty-main">
            <v-row no-gutters>
                <v-container
                    fill-height
                    style="max-width: 1140px"
                >
                    <v-img
                        src="/img/Lifetakt_Logo.png"
                        max-width="130"
                        class="lifetakt-be"
                    />
                    <v-row
                        class=""
                    >
                        <v-col
                            cols="12"
                            md="6"
                            class="converter-main"
                        >
                            <p
                                class="rev-p-be"
                            >
                                Революция в сфере красоты
                            </p>
                            <h1
                                class="be-h1"
                            >
                                Бьюти Эликсир 5 в 1
                            </h1>
                            <div class="be-subtitle-main">
                                <p>Научно доказанный эффект</p>
                                <svg class="be-line-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path></svg>
                            </div>

                            <ul class="be-ul-main">
                                <li><v-icon class="be-icon-main">mdi-numeric-1-circle-outline</v-icon>Меньше морщин</li>
                                <li><v-icon class="be-icon-main">mdi-numeric-2-circle-outline</v-icon>Здоровая и красивая кожа</li>
                                <li><v-icon class="be-icon-main">mdi-numeric-3-circle-outline</v-icon>Сокращение целлюлита</li>
                                <li><v-icon class="be-icon-main">mdi-numeric-4-circle-outline</v-icon>Сильные волосы</li>
                                <li><v-icon class="be-icon-main">mdi-numeric-5-circle-outline</v-icon>Крепкие ногти</li>
                            </ul>

                            <div class="be-video-div">
                                <div class="be-video-btn">
                                    <v-btn
                                        class="align-self-end"
                                        fab
                                        color="#CA286C"
                                        @click="scrollToMe"
                                    >
                                        <v-icon>mdi-play</v-icon>
                                    </v-btn>
                                </div>
                                <div class="be-video-btn-txt">Посмотри видео</div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </section>

        <section
            id="be-video"
        >
            <v-container class="text-center">
                <h2 class="be-h2-center mt-7 mb-3">Видео про Бьюти Эликсир 5 в 1</h2>

                <v-responsive
                    class="mx-auto mb-8"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <div style="width: 100%; max-width: 800px; height: auto; margin: 0 auto">
                    <div class="thumb-wrap mt-6 mb-15">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Na0c7PhI1Tc"
                            title="Бьюти Эликсир от LR"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>


            </v-container>
        </section>

        <section
            id="two-complex"
        >
            <v-row no-gutters>
                <v-container style="padding: 0; max-width: 100%">
                    <v-row>
                        <v-col
                            cols="12"
                            md="5"
                            class="be-complex-left"
                        >
                            <h2 class="be-h2">Активный комплекс</h2>
                            <p class="be-p-complex">
                                Активирует процессы, важные для естественной красоты, и борется с признаками старения.
                                Сочетает в себе самые известные и важнейшие ингредиенты для красоты в высочайшей концентрации:
                            </p>
                            <ul class="be-ul-complex">
                                <li><v-icon color="white">mdi-diamond-stone</v-icon>2,5 г пептиды <strong>коллагена</strong></li>
                                <li><v-icon color="white">mdi-diamond-stone</v-icon>50 мг <strong>гиалуроновая кислота</strong></li>
                                <li><v-icon color="white">mdi-diamond-stone</v-icon>ценная <strong>медь</strong></li>
                                <li><v-icon color="white">mdi-diamond-stone</v-icon>эффективный <strong>цинк</strong></li>
                                <li>
                                    <v-icon color="white">mdi-diamond-stone</v-icon>
                                    <strong>9 витаминов</strong> в высокой концентрации: 100% суточной нормы витамина
                                    Е, В1, В2, В3, B6, В7, B12, С и 75% суточной нормы витамина А
                                </li>
                            </ul>
                        </v-col>

                        <v-col
                            cols="12"
                            md="2"
                            class="be-complex-center"
                        >
                            <v-img
                                class="be-complex-center-img"
                                src="/img/beautyelixir/beautyelixirdrop.png"
                            />
                        </v-col>

                        <v-col
                            cols="12"
                            md="5"
                            class="be-complex-right"
                        >
                            <h2 class="be-h2">Превентивный комплекс</h2>
                            <p class="be-p-complex">
                                Защищает изнутри от воздействий окружающей среды и предотвращает появление видимых признаков старения.
                                Сочетает в себе важнейшие ингредиенты и силу природы:
                            </p>
                            <ul class="be-ul-complex">
                                <li><v-icon color="#659e84">mdi-water</v-icon>экстракт <strong>красного апельсина</strong></li>
                                <li><v-icon color="#659e84">mdi-water</v-icon>экстракт <strong>черники</strong></li>
                                <li><v-icon color="#659e84">mdi-water</v-icon>экстракт <strong>родиолы розовой</strong></li>
                                <li><v-icon color="#659e84">mdi-water</v-icon>экстракт <strong>зеленого чая</strong></li>
                                <li><v-icon color="#659e84">mdi-water</v-icon>20% <strong>геля Алоэ Вера</strong>. Он повышает усваивание витаминов на 300% *</li>
                            </ul>
                            <span class="be-snoska">
                            * Прием Aloe Vera Barbadensis Miller в экспериментальной группе увеличил усваиваемость принимаемых с ним витаминов более чем на 300%.
                            Исследование проводились в Charité – Universitätsmedizin Berlin.
                        </span>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </section>

        <section
            id="be-skin"
        >
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="be-img" src="/img/beautyelixir/skin.png"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="be-h2-steps">Омолаживает кожу</h2>
                        <ul class="be-ul-steps">
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                <strong>Уменьшение морщин</strong> благодаря витамину C и 2,5 г высокоэффективных пептидов коллагена *
                            </li>
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                <strong>Увеличение эластичности кожи</strong> на 15% *
                            </li>
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                <strong>Сияющая и насыщенная влагой кожа</strong> благодаря 50 мг гиалуроновой кислоты
                            </li>
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                Гель Алоэ Вера, экстракты красного апельсина, родиолы розовой, зеленого чая
                                <strong>защищают от УФ- излучения и основных причин старения</strong>
                            </li>
                        </ul>
                        <v-img class="be-img-in" src="/img/beautyelixir/be1.png"/>
                        <span class="be-snoska">
                            * Витамин С способствует нормальному образованию коллагена для нормального функционирования кожи.
                            Исследования Proksch и др., Skin Pharmacol Physiol; 27:113-119 и 27:47-55. Значительное уменьшение
                            морщин и увеличение концентрации коллагена в коже после 4 недель использования. Исследовано при участии
                            100 женщин в возрасте от 45 до 65 лет. Увеличение эластичности кожи на 15% после 4 недель использования.
                            При участии 69 женщин в возрасте от 35 до 55 лет.
                        </span>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="be-skin"
        >
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="be-img" src="/img/beautyelixir/skin2.jpeg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="be-h2-steps">Оздоравливает кожу изнутри</h2>
                        <ul class="be-ul-steps">
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                <strong>Защита от внешних воздействий окружающей среды</strong> с помощью натуральных экстрактов и геля Алоэ Вера
                            </li>
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                <strong>Улучшение функций и тона кожи</strong> благодаря цинку и 9 высококонцентрированным витаминам *
                            </li>
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                <strong>Чистая и здоровая кожа</strong>  без раздражений
                            </li>
                        </ul>
                        <v-img class="be-img-in" src="/img/beautyelixir/be2.png"/>
                        <span class="be-snoska">
                            * Витамин Е помогает защитить клетки от оксидативного стресса. В1 способствует нормальному энергетическому обмену.
                            Витамины B6 и B12 способствуют снижению усталости и утомляемости.
                        </span>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="be-img" src="/img/beautyelixir/skin2.jpeg"/>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="be-skin"
        >
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="be-img" src="/img/beautyelixir/body.png"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="be-h2-steps">Делает кожу упругой и сокращает целлюлит</h2>
                        <ul class="be-ul-steps">
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                Доказано, что коллагеновые пептиды <strong>повышают плотность кожи и сокращают целлюлит</strong> *
                            </li>
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                Медь и гель Алоэ Вера <strong>укрепляют соединительную ткань</strong> *
                            </li>
                        </ul>
                        <v-img class="be-img-in" src="/img/beautyelixir/be3.png"/>
                        <span class="be-snoska">
                            * Шунк и др., Journal of Medicinal Food; 18 (12): 1340-1348. Значительное снижение целлюлита уже через
                            3 месяца и значительное увеличение плотности кожи через 6 месяцев применения. Исследование с участием
                            105 женщин в возрасте от 25 до 50 лет.
                        </span>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="be-skin"
        >
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="be-img" src="/img/beautyelixir/probirka.png"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="be-h2-steps">Крепкие и здоровые ногти</h2>
                        <ul class="be-ul-steps">
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                Доказано, что пептиды коллагена ускоряют рост ногтей. <strong>Повреждение ногтей сокращается</strong> на 42% *
                            </li>
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                Цинк <strong>укрепляет ногти</strong> *
                            </li>
                        </ul>
                        <v-img class="be-img-in" src="/img/beautyelixir/be5.png"/>
                        <span class="be-snoska">
                            * Hexsel и другие, Journal of Cosmetic Dermatology; 1-7. Значительное сокращение повреждения ногтей после 2 месяцев
                            применения и увеличения роста ногтей после 3 месяцев применения. Исследование проведено при участии 25 женщин в возрасте от 18 до 50 лет.
                        </span>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="be-img" src="/img/beautyelixir/probirka.png"/>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="be-skin"
        >
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="be-img" src="/img/beautyelixir/hair.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="be-h2-steps">Сильные и блестящие волосы</h2>
                        <ul class="be-ul-steps">
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                Витамин В7 <strong>укрепляет волосы</strong> изнутри *
                            </li>
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>
                                Медь обеспечивает нормальную пигментацию волос и придает им <strong>здоровый блеск</strong> *
                            </li>
                        </ul>
                        <v-img class="be-img-in" src="/img/beautyelixir/be4.png"/>
                        <span class="be-snoska">
                            * Биотин и цинк способствуют поддержанию нормального состояния волос. Медь способствует сохранению нормальной пигментации волос.
                        </span>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="be-whatsapp"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="6"
                        class="pr-5"
                    >
                        <p class="be-p-whatsapp">
                            Хотите узнать актуальную цену на Бьюти Эликсир и получить бесплатную консультацию у специалиста?
                        </p>
                        <p class="be-p-whatsapp">
                            Закажите обратный звонок.
                        </p>
                    </v-col>
                    <v-col
                        cols="12"
                        lg="6"
                        md="6"
                        sm="8"
                        class="field-relative"
                        style="margin-left: auto; margin-right: auto"
                    >
                        <v-text-field
                            class="be-input-phone"
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
                                color="success"
                                class="mr-0"
                                @click="addProspectBe"
                            >
                                Отправить
                            </v-btn>
                        </p>
                        <p class="be-privacy-text">
                            Оставляя заявку, вы даете свое
                            <router-link :to="{name: 'Personal'}" target="_blank">Согласие на обработку персональных данных</router-link>
                            и принимаете
                            <router-link :to="{name: 'Policy'}" target="_blank">Политику конфидециальности</router-link>.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="be-info-video"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="be-h2-steps">5 в 1 Бьюти Эликсир действует в самых глубоких слоях кожи</h2>
                        <p class="be-info-p-bold">и обеспечивает заметный, быстрый, научно доказанный результат</p>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img src="/img/beautyelixir/skinexample.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <p class="be-video-who">
                            <strong>Доктор Свен Верхан,</strong>
                            <span>эксперт по питанию о Бьюти Эликсире</span>
                        </p>
                        <div class="be-video-border"></div>

                        <div class="thumb-wrap mt-6 mb-15">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/P0SoxXYgdl8"
                                title="Эксперт по питанию о Бьюти Эликсире"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <p class="be-video-who">
                            <strong>Нутрициолог, косметолог Ирина Бабахова,</strong>
                            <span>эксперт в области омоложения о Бьюти Эликсире</span>
                        </p>
                        <div class="be-video-border"></div>

                        <div class="thumb-wrap mt-6 mb-15">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/Dff2sKjLCXg"
                                title="Эксперт в области омоложения о Бьюти Эликсире"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="be-sostav"
        >
            <v-container>
                <h2 class="be-h2-center">Состав 5 в 1 Бьюти Эликсира</h2>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-expansion-panels popout focusable>
                        <v-expansion-panel class="be-exp-panel">
                            <v-expansion-panel-header class="be-exp-title">Пептиды коллагена</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="mt-7 be-step-p-exp">
                                    Коллаген является основным структурным белком кожи и одновременно самым распространенным белком в организме человека.
                                    Он крайне важен для увлажненности и эластичности кожи.
                                </p>
                                <p class="be-step-p-exp">
                                    Коллагеновые волокна образуют своего рода трехмерную сетку в дерме и обеспечивают сохранение ее структуры, прочность
                                    и способность сохранять влагу в коже. Однако с возрастом, а также из-за негативного воздействия окружающей среды
                                    производство коллагена замедляется, что, к сожалению, сразу отражается на внешнем виде.
                                </p>
                                <p class="be-step-p-exp">
                                    Образуются морщины, кожа становится не такой эластичной и упругой. Тут нам помогают пептиды коллагена, они являются
                                    фрагментами белка коллагена и из-за их небольшого размера могут быстро «поглощаться» организмом. Они попадают через
                                    кровоток к фибробластам, которые отвечают за производство коллагена в более глубоких слоях кожи. Поступающий в организм
                                    коллаген стимулирует собственную выработку коллагена в организме.
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="be-exp-panel">
                            <v-expansion-panel-header class="be-exp-title">Гиалуроновая кислота</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="mt-7 be-step-p-exp">
                                    Гиалуроновая кислота является широко известным активным ингредиентом, благодаря своим свойствам она
                                    насыщает кожу влагой и делает ее сияющей.
                                </p>
                                <p class="be-step-p-exp">
                                    Гиалуроновая кислота известна своей способностью притягивать воду в 6000 раз больше своего собственного веса.
                                    Таким образом, один грамм кислоты способен на молекулярном уровне связывать до шести литров воды. Поэтому эта
                                    кислота идеальна в борьбе с таким характерным признаком старения как морщины.
                                </p>
                                <p class="be-step-p-exp">
                                    И хотя гиалуроновая кислота присутствует в организме каждого человека, ее выработка снижается уже с 25 лет.
                                    Первые признаки старения кожи видны обычно уже с 30 лет. Кожа становится суше, тоньше и теряет эластичность.
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="be-exp-panel">
                            <v-expansion-panel-header class="be-exp-title">Медь</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="mt-7 be-step-p-exp">
                                    Медь является жизненно важным для нашего организма микроэлементом, выполняющим множество функций.
                                    Но поскольку наше тело не может производить его самостоятельно, мы должны потреблять его через пищу.
                                    Медь важна для нормальной пигментации кожи и поддержания нормального состояния соединительной ткани.
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="be-exp-panel">
                            <v-expansion-panel-header class="be-exp-title">Цинк</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="mt-7 be-step-p-exp">
                                    Цинк – это минерал, который также является одним из необходимых для жизни микроэлементов.
                                    Цинк необходимо получать через пищу, так как организм не может вырабатывать его самостоятельно.
                                    Цинк крайне важен для здоровья кожи, а также необходим для роста ногтей.
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="be-exp-panel">
                            <v-expansion-panel-header class="be-exp-title">Магний</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="mt-7 be-step-p-exp">
                                    Участвует в выработке энергии, усвоении глюкозы, передаче нервного сигнала, синтезе белков,
                                    построении костной ткани, регуляции расслабления и напряжения сосудов и мышц. Оказывает успокаивающее действие,
                                    снижая возбудимость нервной системы.
                                </p>
                                <p class="be-step-p-exp">
                                    Выступает как противоаллергический и противовоспалительный фактор – защищает организм от инфекции, участвуя в
                                    выработке антител. Играет значительную роль в процессах свертываемости крови, регуляции работы кишечника и других органов.
                                </p>
                                <p class="be-step-p-exp">
                                    Магний влияет на работоспособность, утомляемость, стрессоустойчивость, работу сердца и нервов, кровяное давление,
                                    кислотность желудочного сока.
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="be-exp-panel">
                            <v-expansion-panel-header class="be-exp-title">Витамины</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="mt-7 be-step-p-exp">
                                    Витамины важны для красивой и здоровой кожи. Благодаря сбалансированному поступлению витаминов улучшается функция кожи,
                                    кожа может лучше противостоять вредному воздействию окружающей среды, улучшается регенерация клеток.
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="be-exp-panel">
                            <v-expansion-panel-header class="be-exp-title">Алоэ Вера</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="mt-7 be-step-p-exp">
                                    Клинически доказано. Алоэ Вера повышает КПД витаминов в организме более чем на 300%. Соответственно Бьюти Эликсир в
                                    300% эффективнее продуктов с аналогичным колличеством витаминов, но без геля Алоэ Вера.
                                </p>
                                <p class="be-step-p-exp">
                                    Так же Алоэ Вера содержит более 150 биоактивных веществ. Нормализует иммунную систему, повышает устойчивость к инфекции
                                    (вирусной, бактериальной, грибковой). Повышает общую сопротивляемость организма и его адаптивный потенциал. Выводит из
                                    организма токсины, очищает кровь и лимфу. Ускоряет обмен веществ.
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="be-exp-panel">
                            <v-expansion-panel-header class="be-exp-title">Экстракты</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="mt-7 be-step-p-exp">
                                    Природная сила экстрактов красного апельсина, черники, родиолы розовой и зеленого чая поддерживает кожу с разных сторон.
                                    Компоненты, входящие в их состав, оказывают положительное действие и полезны для кожи, волос и ногтей.
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="be-exp-panel">
                            <v-expansion-panel-header class="be-exp-title">Биофлавоноиды</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="mt-7 be-step-p-exp">
                                    Биофлавоноиды и катехины зеленого чая, биофлавоноиды красного апельсина, антоцианы черники, витамины С, В6,
                                    микроэлементы медь, цинк укрепляют стенки капилляров и капиллярного кровоснабжения.
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel class="be-exp-panel">
                            <v-expansion-panel-header class="be-exp-title">Полифенолы</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="mt-7 be-step-p-exp">
                                    Полифенолы из экстракта зеленого чая и красного апельсина богаты антиоксидантами, которые помогают бороться
                                    с вредными свободными радикалами и предотвращают повреждение клеток. Защищают от болезней сердца. Облегчают воспаление.
                                    Предотвращают тромбообразование. Могут уменьшить развитие рака. Поддерживают уровень сахара в крови.
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <v-simple-table
                        class="elevation-1 be-table mx-auto"
                    >
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th>Пищевая ценность</th>
                                <th>Содержание в 100 мл</th>
                                <th>Содержание в суточной дозе (1 ампула 25 мл)</th>
                                <th>
                                    % от РУСП*
                                    <br>
                                    % от АУП*
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Калорийность</td>
                                <td>594 кДж/140 ккал</td>
                                <td>149 кДж/35 ккал</td>
                                <td>1,4*</td>
                            </tr>
                            <tr>
                                <td>Жиры</td>
                                <td>0,34 г</td>
                                <td>менее 0,1 г</td>
                                <td>0,1*</td>
                            </tr>
                            <tr>
                                <td>Углеводы</td>
                                <td>22,6 г</td>
                                <td>5,7 г</td>
                                <td>1,6*</td>
                            </tr>
                            <tr>
                                <td>Белки</td>
                                <td>11 г</td>
                                <td>2,8 г</td>
                                <td>3,7*</td>
                            </tr>
                            <tr>
                                <td>Витамин А (РЭ)</td>
                                <td>2400 мкг</td>
                                <td>600 мкг</td>
                                <td>75*</td>
                            </tr>
                            <tr>
                                <td>Витамин E (ТЭ)</td>
                                <td>48 мг</td>
                                <td>12 мг</td>
                                <td>120*,***</td>
                            </tr>
                            <tr>
                                <td>Витамин B1</td>
                                <td>4,4 мг</td>
                                <td>1,1 мг</td>
                                <td>79*</td>
                            </tr>
                            <tr>
                                <td>Витамин B2</td>
                                <td>5,6 мг</td>
                                <td>1,4 мг</td>
                                <td>88*</td>
                            </tr>
                            <tr>
                                <td>Витамин В3 (РР)</td>
                                <td>64 мг</td>
                                <td>16 мг</td>
                                <td>89*</td>
                            </tr>
                            <tr>
                                <td>Витамин B6</td>
                                <td>5,6 мг</td>
                                <td>1,4 мг</td>
                                <td>70*</td>
                            </tr>
                            <tr>
                                <td>Витамин B12</td>
                                <td>10 мкг</td>
                                <td>2,5 мкг</td>
                                <td>250*,***</td>
                            </tr>
                            <tr>
                                <td>Биотин (B7)</td>
                                <td>200 мкг</td>
                                <td>50 мкг</td>
                                <td>100*</td>
                            </tr>
                            <tr>
                                <td>Витамин С</td>
                                <td>320 мг</td>
                                <td>80 мг</td>
                                <td>133*,***</td>
                            </tr>
                            <tr>
                                <td>Магний</td>
                                <td>225 мг</td>
                                <td>56,3 мг</td>
                                <td>14*</td>
                            </tr>
                            <tr>
                                <td>Цинк</td>
                                <td>не менее 6 мг</td>
                                <td>не менее 1,5 мг</td>
                                <td>10*</td>
                            </tr>
                            <tr>
                                <td>Марганец</td>
                                <td>2 мг</td>
                                <td>0,5 мг</td>
                                <td>25**</td>
                            </tr>
                            <tr>
                                <td>Медь</td>
                                <td>1080 мкг</td>
                                <td>270 мкг</td>
                                <td>27**</td>
                            </tr>
                            <tr>
                                <td>Гиалуроновая кислота</td>
                                <td>200 мг</td>
                                <td>50 мг</td>
                                <td>**</td>
                            </tr>
                            <tr>
                                <td>Гидролизат коллагена</td>
                                <td>10 г</td>
                                <td>2,5 г</td>
                                <td>**</td>
                            </tr>
                            <tr>
                                <td>Aloe Vera Gel</td>
                                <td>20 г</td>
                                <td>5 г</td>
                                <td>**</td>
                            </tr>
                            <tr>
                                <td>Экстракт зеленого чая</td>
                                <td>36 мг</td>
                                <td>9 мг</td>
                                <td>**</td>
                            </tr>
                            <tr>
                                <td>Экстракт родиолы розовой</td>
                                <td>40 мг</td>
                                <td>10 мг</td>
                                <td>**</td>
                            </tr>
                            <tr>
                                <td>Экстракт черники</td>
                                <td>12 мг</td>
                                <td>3 мг</td>
                                <td>**</td>
                            </tr>
                            <tr>
                                <td>Экстракт красного апельсина</td>
                                <td>40 мг</td>
                                <td>10 мг</td>
                                <td>**</td>
                            </tr>
                            <tr>
                                <td>Полифенолы</td>
                                <td>32 мг</td>
                                <td>8 мг</td>
                                <td>**</td>
                            </tr>
                            <tr>
                                <td>Цитрусовые биофлавоноиды</td>
                                <td>12 мг</td>
                                <td>3 мг</td>
                                <td>**</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>

                    <span class="be-snoska-table">
                        * Рекомендуемый уровень суточного потребления согласно ТР ТС 022/2011
                        <br>
                        ** Адекватный уровень потребления согласно "Единым санитарно-эпидемиологическим продукция в части ее маркировки".
                        <br>
                        *** Не превышает верхний допустимый уровень потребления.
                    </span>
                </v-row>
            </v-container>
        </section>

        <section
            id="be-box-award"
            class="pt-10"
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
                        <v-img src="/img/beautyelixir/beautyelixir_box.png"/>
                        <v-img style="max-width: 400px" src="/img/beautyelixir/icons-beauty.png"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-img style="max-width: 100px; display: inline-block; margin-right: 40px" src="/img/beautyelixir/madeingermany.png"/>
                        <v-img style="max-width: 100px; display: inline-block" src="/img/beautyelixir/germanBAW19.png"/>

                        <span class="be-snoska">
                            * 5в1 Бьюти Эликсир стал победителем на церемонии награждения German Brand Award в 2019 году в Берлине.
                            И был признан лучшим продуктом в категории «Красота и уход»
                        </span>

                        <ul class="be-ul-award">
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>Не нужно охлаждать</li>
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>Удобно брать с собой</li>
                            <li><v-icon color="#75AB94">mdi-check-circle-outline</v-icon>Объем <span style="text-transform: none">30 флаконов по 25 мл</span></li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="be-faq"
            class="pt-10"
        >
            <v-container>
                <h2 class="be-h2-center">Часто задаваемые вопросы</h2>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                    >
                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="be-exp-panel">
                                <v-expansion-panel-header class="be-exp-title">Преимущества продукта</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 be-step-p-exp">
                                        Революционный 5в1 Бьюти Эликсир отвечает за исполнение сразу пяти желаний о красоте: выглядеть моложе,
                                        чистая кожа, упругое тело, сильные волосы и крепкие ногти!
                                    </p>
                                    <p class="be-step-p-exp">
                                        Всего одна порция уникального 5в1 Бьюти Эликсира в день запускает в организме процессы, способствующие
                                        естественной красоте и обеспечивающие защиту от основных причин старения. Для молодости и красоты с головы
                                        до ног и в любом возрасте!
                                    </p>
                                    <p class="be-step-p-exp">
                                        Биотин и цинк способствуют поддержанию нормального состояния кожи и волос. Цинк способствует сохранению нормального
                                        состояния ногтей. Медь способствует сохранению нормальной соединительной ткани.
                                    </p>
                                    <p class="be-step-p-exp">
                                        (Научные исследования публиковались в Skin Pharmacol Physiol; 27:113-119)
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="be-exp-panel">
                                <v-expansion-panel-header class="be-exp-title">Для кого предназначен 5в1 Бьюти Эликсир?</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 be-step-p-exp">
                                        Для всех, кто хочет чувствовать себя красивым с головы до ног – независимо от возраста!
                                    </p>
                                    <p class="be-step-p-exp">
                                        С течением времени организм меняется: многие процессы замедляются, важные вещества перестают вырабатываться в
                                        достаточном количестве, питательные вещества уже не используются организмом так эффективно, как прежде. И даже
                                        в молодом возрасте, то есть уже с 25 лет, неуклонно снижается выработка коллагена.
                                    </p>
                                    <p class="be-step-p-exp">
                                        Недостаток питательных веществ, агрессивные факторы окружающей среды, такие как ультрафиолетовое излучение, загрязнение
                                        воздуха или электромагнитное излучение, а также нездоровый образ жизни и стрессы сказываются на внешнем виде.
                                    </p>
                                    <p class="be-step-p-exp">
                                        Поэтому: ранняя и, прежде всего, эффективная профилактика – это и есть ключ к естественной красоте! Уникальный двойной
                                        комплекс в составе 5в1 Бьюти Эликсира активно стимулирует клетки кожи, волос и ногтей и защищает организм изнутри.
                                    </p>
                                    <p class="be-step-p-exp">
                                        5в1 Бьюти Эликсир обеспечивает организм ценными питательными веществами в концентрированном виде, поэтому его прием
                                        рекомендуется уже с 20-летнего возраста.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="be-exp-panel">
                                <v-expansion-panel-header class="be-exp-title">Предназначен ли Бьюти Эликсир для мужчин?</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 be-step-p-exp">
                                        Да, конечно. Даже при том, что мужчины меньше страдают от целлюлита и слабой соединительной ткани из-за иной структуры
                                        соединительной ткани (см. Справочник по продукту), дефицит коллагена и недостаток влаги часто становятся причиной
                                        возникновения морщин у мужчин. 5в1 Бьюти Эликсир поддерживает мужской организм, особенно в том, что касается роста и
                                        укрепления волос.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="be-exp-panel">
                                <v-expansion-panel-header class="be-exp-title">Чем 5в1 Бьюти Эликсир отличается от других напитков, содержащих коллаген?</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 be-step-p-exp">
                                        5в1 Бьюти Эликсир содержит не только коллагеновые пептиды для приема внутрь, но и гиалуроновую кислоту, цинк, медь
                                        и витамины – для сокращения морщин, здоровой кожи, плотной соединительной ткани, блестящих волос и крепких ногтей.
                                        Таким образом, 5в1 Бьюти Эликсир отвечает сразу пяти наиболее распространенным требованиям к красоте благодаря всего
                                        одной порции в день.
                                    </p>
                                    <p class="be-step-p-exp">
                                        Кроме того, превентивный комплекс используется для защиты от основных причин старения: экстракт красного апельсина
                                        обеспечивает естественную защиту от ультрафиолетового излучения. Для борьбы со свободными радикалами и против вредного
                                        воздействия окружающей среды используется экстракт черники. Родиола розовая способствует защите от факторов стресса.
                                        Экстракт зеленого чая эффективно противодействует признакам усталости кожи. Гель Алоэ Вера обеспечивает дополнительное
                                        увлажнение и противодействует потере влаги – основной причине старения кожи.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="be-exp-panel">
                                <v-expansion-panel-header class="be-exp-title">
                                    Разрушаются ли пептиды коллагена в результате воздействия желудочного сока?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 be-step-p-exp">
                                        В ходе естественного процесса пищеварения пептиды коллагена расщепляются, проходя через желудок. Этот процесс необходим
                                        для эффективного всасывания пептидов и аминокислот в тонком кишечнике.
                                    </p>
                                    <p class="be-step-p-exp">
                                        В жидкой форме ингредиенты поглощаются легче, чем, например, таблетки, поэтому активные ингредиенты, микроэлементы или
                                        витамины распределяются в организме быстрее и, что важнее, эффективнее. В отличие от кремов, важные ингредиенты поступают
                                        в глубокие слои кожи.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="be-exp-panel">
                                <v-expansion-panel-header class="be-exp-title">
                                    Как принимать 5в1 Бьюти Эликсир?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 be-step-p-exp">
                                        Готовый к употреблению питьевой флакон следует перед применением хорошо встряхнуть. Лучше всего принимать эликсир каждый
                                        день утром, так как обмен веществ более активен в течение дня: так ингредиенты могут быть оптимально распределены по всему
                                        организму.
                                    </p>
                                    <p class="be-step-p-exp">
                                        Мы рекомендуем принимать эликсир ежедневно в течение не менее трех месяцев. Эликсир можно употреблять на постоянной основе.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="be-exp-panel">
                                <v-expansion-panel-header class="be-exp-title">
                                    Нужно ли хранить флаконы в холодильнике?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 be-step-p-exp">
                                        Нет. 5в1 Бьюти Эликсир не нужно охлаждать, эффективность ингредиентов от этого не зависит. Однако флаконы должны быть
                                        защищены от прямых солнечных лучей, а эликсир следует хранить при комнатной температуре. Таким образом, вы можете хранить
                                        его почти везде, не занимая места в холодильнике. Эликсир удобно брать с собой.
                                    </p>
                                    <p class="be-step-p-exp">
                                        Совет: сделайте эликсир частью вашего ежедневного ухода. Положите флакон в ванной комнате рядом с зубной щеткой,
                                        на кухне рядом с кофеваркой или на рабочем столе в офисе, чтобы вы могли легко интегрировать продукт в повседневную
                                        жизнь и регулярно использовать его для поддержания вашей природной красоты и молодости.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="be-exp-panel">
                                <v-expansion-panel-header class="be-exp-title">
                                    Какой вкус имеет 5в1 Бьюти Эликсир?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 be-step-p-exp">
                                        На вкус 5в1 Бьюти Эликсир свежий и фруктовый. Сок агавы придает ему очень легкую карамельную ноту.
                                    </p>
                                    <p class="be-step-p-exp">
                                        Совет: флаконы при желании также можно хранить в холодильнике, а в охлажденном виде эликсир еще вкуснее.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="be-exp-panel">
                                <v-expansion-panel-header class="be-exp-title">
                                    Есть ли побочные эффекты от приема 5в1 Бьюти Эликсира?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 be-step-p-exp">
                                        5в1 Бьюти Эликсир можно употреблять длительное время. Отрицательного взаимодействия с лекарственными средствами или
                                        другими продуктами LR не обнаружено. Так же как и с пищей и натуральными продуктами в целом, индивидуальная
                                        непереносимость компонентов продукта не может быть полностью исключена.
                                    </p>
                                    <p class="be-step-p-exp">
                                        Доля экстракта зеленого чая в продукте настолько мала, что потребление 5в1 Бьюти Эликсира натощак не является
                                        проблемой и даже рекомендовано для оптимального снабжения необходимыми веществами. Эликсир не содержит подсластителей,
                                        искусственных красителей, глютена и лактозы.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel class="be-exp-panel">
                                <v-expansion-panel-header class="be-exp-title">
                                    Подходит ли Бьюти Эликсир для беременных женщин, детей, вегетарианцев и страдающих диабетом?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 be-step-p-exp">
                                        5в1 Бьюти Эликсир не рекомендуется принимать детям и беременным женщинам, так как он содержит кофеин за счет экстракта
                                        зеленого чая в составе (0,8 мг кофеина на дозу).
                                    </p>
                                    <p class="be-step-p-exp">
                                        Несмотря на то, что эликсир имеет фруктовый, сладкий вкус, он не требует добавления дополнительных подсластителей и
                                        поэтому подходит диабетикам. В качестве подсластителя вместо сахара при его производстве используется сироп агавы.
                                        Сладкий сок агавы после концентрирования состоит почти исключительно из фруктозы.
                                    </p>
                                    <p class="be-step-p-exp">
                                        LR использует ценный коллаген от коров, по этой причине, к сожалению, 5в1 Бьюти Эликсир не подходит вегетарианцам.
                                        Данный продукт, однако, может употребляться партнерами и клиентами, исповедующими ислам.
                                    </p>
                                    <p class="be-step-p-exp">
                                        5в1 Бьюти Эликсир не содержит искусственных красителей, глютена и лактозы.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section id="be-consultant">
            <v-container class="text-center">
                <h2 class="be-h2-center mt-7 mb-3">Продли свою молодость!</h2>

                <p class="be-consultant-p">Получить бесплатную консультацию</p>
                <p class="mb-5">Свяжитесь с персональным консультантом LR Health & Beauty прямо сейчас</p>

                <v-responsive
                    class="mx-auto mb-10"
                    width="56"
                >
                    <v-divider class="mb-1" style="border-color: #CA286C"></v-divider>

                    <v-divider style="border-color: #CA286C"></v-divider>
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
            class="justify-center be-footer"
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
                <v-card-title class="headline lighten-2 pb-5" style="background-color: #CA286C; color: white">
                    Заявка принята
                </v-card-title>

                <v-card-text>
                    Ваш консультант свяжется с вами в ближайшее время
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
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
    name: "BE",
    data: () => ({
        newProspect: {
            phone: '',
            partner: '',
            instrument: 'Бьюти Эликсир',
            step: 'Новый'
        },
        errors: {},
        dialog_main: false,
        dialog_prospect: false,
        loading: false,
        cookieShow: true,
    }),
    metaInfo: {
        title: 'Бьюти Эликсир 5 в 1',
        meta: [
            { vmid: 'description', property: 'description', content: 'Революция в сфере красоты - Бьюти Эликсир 5 в 1. Меньше морщин, здоровая кожа, сокращение целлюлита, сильные волосы и крепкие ногти' },
            { vmid: 'og:title', property: 'og:title', content: 'Бьюти Эликсир 5 в 1' },
            { vmid: 'og:description', property: 'og:description', content: 'Революция в сфере красоты - Бьюти Эликсир 5 в 1. Меньше морщин, здоровая кожа, сокращение целлюлита, сильные волосы и крепкие ногти' },
            { vmid: 'og:image', property: 'og:image', content: '/img/beautyelixir/logogermany-pink.png' },
        ],
    },
    created() {
        if (!this.$route.query.p) {
            if (this.$cookies.isKey('lifeplus_partner')) {
                const partnerNum = this.$cookies.get('lifeplus_partner')
                this.$router.push ({name: 'BE', query: { p: partnerNum }})
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
        phoneErrors() {
            const errors = []
            if (!this.$v.newProspect.phone.$dirty) return errors
            !this.$v.newProspect.phone.numeric && errors.push('Только цифры')
            !this.$v.newProspect.phone.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newProspect.phone.maxLength && errors.push('Максимум 30 цифр')
            !this.$v.newProspect.phone.required && errors.push('Обязательно для заполнения')
            return errors
        }
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
            let scrollBottom = document.getElementById("be-video")
            scrollBottom.scrollIntoView({ behavior: "smooth" })
        },
        addProspectBe() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
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
                numeric,
                minLength: minLength(5),
                maxLength: maxLength(30)
            }
        }
    }
}
</script>

<style lang="sass">
#beauty-main
    background-color: #FCFAF8
    background-image: url("/img/beautyelixir/5in1_bgrd.png")
    background-position: top right
    background-repeat: no-repeat
    background-size: contain
    min-height: 100vh

#be-skin
    background-color: #FCFAF8
    padding-bottom: 60px

#be-info-video, #be-box-award, #be-sostav, #be-faq, #be-consultant, #be-video
    background-color: #FCFAF8

.be-img
    box-shadow: 10px 10px 0 0 #CA286C

.media-img
    display: none

.converter-main
    background-color: rgba(252, 250, 248, 0.7)

.whatsapp-be-fixed
    position: fixed
    margin-top: 0
    margin-bottom: 0
    bottom: 21px
    right: 20px
    z-index: 10

.be-list-item
    margin-right: 10px

.be-list-item:last-child
    margin-right: 0

.be-chats-btn
    margin: 0 !important

.be-cntct-btn
    box-shadow: none !important

.be-video-div
    padding-left: 10px

.be-video-btn
    width: 60px
    display: inline-block

.be-video-btn-txt
    display: inline-block
    padding-left: 10px
    color: #666

.be-line-title
    position: absolute
    top: 50%
    left: 50%
    width: calc(100% + 20px)
    height: calc(100% + 20px)
    -webkit-transform: translate(-50%,-50%)
    -ms-transform: translate(-50%,-50%)
    transform: translate(-50%,-50%)
    overflow: visible

.be-line-title path
    stroke: #CA286C
    stroke-width: 9
    fill: none
    opacity: 1
    stroke-dasharray: 1500 1500
    -webkit-transition: .3s
    -o-transition: .3s
    transition: .3s

.lifetakt-be
    margin-bottom: 120px

.rev-p-be
    font-weight: bold
    text-transform: uppercase
    line-height: 18px !important
    margin-bottom: 30px !important
    color: #333
    font-size: 22px

.be-h1
    color: #CA286C
    font-size: 54px
    line-height: 48px
    font-weight: 300
    margin-bottom: 10px

.be-img-in
    max-width: 250px

.be-subtitle-main
    position: relative
    max-width: 300px

.be-subtitle-main p
    font-size: 22px
    font-weight: 300

.be-ul-main
    list-style-type: none
    margin-top: 30px
    padding-left: 10px !important
    margin-bottom: 20px

.be-ul-main li
    font-size: 22px
    line-height: 34px
    color: #333333

.be-icon-main
    color: #CA286C !important
    padding-right: 5px

.be-complex-left
    background: linear-gradient(to right, #CA286C, #fff)
    padding: 20px 80px

.be-complex-center
    background-color: #fff

.be-complex-center-img
    max-width: 200px
    margin-left: auto
    margin-right: auto

.be-complex-right
    background: linear-gradient(to right, #fff, #659e84)
    padding: 20px 80px

.be-h2
    font-size: 24px
    text-transform: uppercase
    text-align: center
    margin-top: 10px
    margin-bottom: 10px

.be-h2-center
    font-size: 36px
    margin-top: 10px
    margin-bottom: 10px
    color: #CA286C
    text-transform: uppercase
    text-align: center

.be-h2-steps
    font-size: 36px
    margin-top: 10px
    margin-bottom: 10px
    color: #CA286C
    text-transform: uppercase

.be-p-complex
    font-size: 18px

.be-ul-complex
    font-size: 18px
    list-style-type: none
    padding: 0 !important
    margin-bottom: 20px

.be-ul-complex li
    line-height: 2rem

.be-ul-complex li .v-icon
    padding-right: 7px

.be-snoska
    display: inline-block
    margin-bottom: 20px
    margin-top: 30px

.be-snoska-table
    display: inline-block
    margin-bottom: 20px
    margin-top: 30px
    max-width: 670px

.be-ul-steps, .be-ul-award
    font-size: 18px
    list-style-type: none
    padding: 0 !important
    margin-bottom: 20px

.be-ul-steps li, .be-ul-award li
    line-height: 2rem
    margin-bottom: 10px

.be-ul-steps li .v-icon, .be-ul-award .v-icon
    padding-right: 7px

#be-whatsapp
    background-color: #CA286C

.be-p-whatsapp
    color: #ffffff
    font-size: 22px

.be-privacy-text
    color: white !important
    font-size: 10px
    line-height: 15px !important

.be-privacy-text a
    color: white !important

.be-input-phone .v-icon
    color: #4caf50 !important

.be-input-phone .v-label
    color: white !important

.be-input-phone input
    color: white !important

.be-info-p-bold
    font-size: 32px
    font-weight: bold
    line-height: 44px !important

.be-video-who
    font-size: 18px
    margin-top: 40px
    margin-bottom: 7px !important

.be-video-who span
    display: block

.be-video-border
    border-bottom-width: 1px
    width: 97px
    border-style: solid
    border-color: #CA286C

.be-exp-panel .v-icon
    color: #CA286C !important

.be-exp-title
    font-size: 18px

.be-step-p-exp
    font-size: 16px

.be-table
    margin-top: 40px
    background-color: white

.be-table th
    text-align: center

.be-table td
    font-size: 12px !important

.be-footer
    background-color: #CA286C !important
    color: white !important

.be-consultant-p
    font-size: 24px

.be-video-main
    max-width: 800px
    margin-left: auto
    margin-right: auto

@media(max-width: 1200px)
    #be-skin
        padding-bottom: 0

    .be-complex-left
        padding: 20px 30px

    .be-complex-right
        padding: 20px 30px

    .converter-main
        margin-left: 40px

    .lifetakt-be
        margin-left: 40px

    .rev-p-be
        font-size: 18px

    .be-h1
        font-size: 46px

    .be-subtitle-main p
        font-size: 22px

    .be-ul-main li
        font-size: 18px
        line-height: 28px

@media(max-width: 959px)
    .media-img
        display: inline-block

    .right-img
        display: none

@media(max-width: 760px)
    .lifetakt-be
        margin-bottom: 20px

@media(max-width: 500px)
    .converter-main
        margin-left: 0

    .lifetakt-be
        margin-left: 0

@media(max-width: 480px)
    .rev-p-be
        max-width: 200px
        line-height: 18px !important
        margin-bottom: 30px !important
        font-size: 14px

    .be-table td
        font-size: 11px !important

    .video-js .vjs-big-play-button
        top: 40% !important
        left: 40% !important

@media(max-width: 350px)
    .converter-main
        background-color: initial

    .video-js .vjs-big-play-button
        top: 36% !important
        left: 36% !important

</style>