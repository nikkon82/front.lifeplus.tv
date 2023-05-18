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
                <v-img
                    :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
                    src="/img/converter-bg.jpg"
                >
                    <v-theme-provider dark>
                        <v-container
                            fill-height
                            style="max-width: 1400px"
                        >
                            <v-row
                                class=""
                            >
                                <v-col
                                    cols="12"
                                    class="converter-main"
                                    tag="h1"
                                >
                                    <v-img
                                        src="/img/Lifetakt_Logo.png"
                                        max-width="400"
                                        class="mb-10"
                                    />
                                    <p
                                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                                        class="font-weight-light"
                                    >
                                      Инновационные решения для людей, которые хотят
                                    </p>
                                    <p
                                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                                        class="font-weight-black mb-10"
                                    >
                                        Жить дольше, выглядеть моложе и чувствовать себя превосходно
                                    </p>

                                    <v-btn
                                        class="align-self-end black--text converter-main-btn"
                                        fab
                                        outlined
                                        @click="$vuetify.goTo('#health-steps')"
                                    >
                                      <v-icon class="black--text">mdi-chevron-double-down</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-theme-provider>
                </v-img>
            </v-row>
        </section>

        <section
            id="health-steps"
        >
            <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mt-7 mb-3 text-uppercase">Программа "3 шага к твоему здоровью"</h2>

                <p class="mb-5">Программа разработана специалистами из Германии, экспертами по продукции LR и врачами, сотрудничающими с LR Health & Beauty</p>

                <v-responsive
                    class="mx-auto mb-5"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <v-row
                    justify="center"
                    style="max-width: 1200px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="pt-7 pb-5 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/1step.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 200px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5"
                            >
                                Шаг 1
                                <br>
                                "Очищение"
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Очищаем и подготавливаем организм к восстановлению
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                    color="green"
                                    class="mx-auto"
                                    :to="{name: 'HStepOne', query: { p: this.$route.query.p }}"
                                >
                                    Подробнее
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="pt-7 pb-5 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/2step.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 200px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5"
                            >
                                Шаг 2
                                <br>
                                "Восстановление"
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Нормализация работы кишечника и других систем
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                    color="green"
                                    class="mx-auto"
                                    :to="{name: 'HStepTwo', query: { p: this.$route.query.p }}"
                                >
                                    Подробнее
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="pt-7 pb-5 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/3step.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 200px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5"
                            >
                                Шаг 3
                                <br>
                                "Питание"
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Насыщаем организм питательными веществами
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                    color="green"
                                    class="mx-auto"
                                    :to="{name: 'HStepThree', query: { p: this.$route.query.p }}"
                                >
                                    Подробнее
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="why-lr"
        >
            <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mt-7 mb-3 text-uppercase">Почему LR</h2>

                <v-responsive
                    class="mx-auto mb-8"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <div style="width: 100%; max-width: 800px; height: auto; margin: 0 auto">
                    <div class="thumb-wrap">
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
                </div>

            </v-container>
        </section>

        <section
            id="experts-lr"
        >
            <v-container>
                <h2 class="display-2 font-weight-bold mt-7 mb-3 text-uppercase text-center white--text">Научный совет LR</h2>

                <v-responsive
                    class="mx-auto mb-7"
                    width="56"
                >
                    <v-divider class="mb-1" style="border-color: white"></v-divider>

                    <v-divider style="border-color: white"></v-divider>
                </v-responsive>

                <v-row
                    justify="center"
                    style="max-width: 1200px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="mx-auto"
                            max-width="374"
                        >
                            <v-theme-provider dark>
                                <div
                                    style="text-align: center"
                                >
                                    <v-avatar
                                        class="elevation-12 mt-10 mb-10"
                                        size="128"
                                    >
                                        <v-img src="/img/converter/werner-foss.jpg"></v-img>
                                    </v-avatar>
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center"
                            >
                                Вернер Фосс
                            </v-card-title>

                            <v-card-text
                            >
                                <div
                                    class="my-4 subtitle-1"
                                    style="text-align: center"
                                >
                                    Профессор, д-р мед. наук, основатель и руководитель НИИ Dermatest
                                </div>

                                <p>
                                    «Ведя здоровый образ жизни, мы можем быть в форме и оставаться молодыми и здоровыми надолго. На протяжении тысячелетий люди
                                    используют силу растений, среди которых особое место занимает Алоэ Вера»
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="mx-auto"
                            max-width="374"
                        >
                            <v-theme-provider dark>
                                <div
                                    style="text-align: center"
                                >
                                    <v-avatar
                                        class="elevation-12 mt-10 mb-10"
                                        size="128"
                                    >
                                        <v-img src="/img/converter/sven-verhein.jpg"></v-img>
                                    </v-avatar>
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center"
                            >
                                Свен Верхан
                            </v-card-title>

                            <v-card-text
                            >
                                <div
                                    class="my-4 subtitle-1"
                                    style="text-align: center"
                                >
                                    Д-р мед. наук, диетолог, независимый эксперт по питанию
                                </div>

                                <p>
                                    «Помимо продуктов, созданных с учетом индивидуальных потребностей, компания LR предлагает научно
                                    обоснованные экспертные рекомендации по питанию, физическим упражнениям и здоровому образу жизни»
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="mx-auto"
                            max-width="374"
                        >
                            <v-theme-provider dark>
                                <div
                                    style="text-align: center"
                                >
                                    <v-avatar
                                        class="elevation-12 mt-10 mb-10"
                                        size="128"
                                    >
                                        <v-img src="/img/converter/dietrich-groenemeyer.jpg"></v-img>
                                    </v-avatar>
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center"
                            >
                                Карл-Кристиан Бергманн
                            </v-card-title>

                            <v-card-text>
                                <div
                                    class="my-4 subtitle-1"
                                    style="text-align: center"
                                >
                                    Профессор, д-р мед. наук, Клиника Шарите, Берлинский университет
                                </div>

                                <p>
                                    «LR предлагает продукты с высококачественными активными компонентами и современными
                                    рецептурами, которые обеспечивают оптимальный ежедневный уход за кожей любого типа»
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="advantage-lr"
            class="grey lighten-3"
        >
            <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mt-7 mb-3 text-uppercase">LR - качество, проверенное временем</h2>

                <v-responsive
                    class="mx-auto mb-7"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <v-row
                    justify="center"
                    style="max-width: 1200px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/3.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Немецкое качество
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Более 35 лет компания LR Health & Beauty разрабатывает и выпускает инновационные продукты высочайшего качества
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/2.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Натуральные ингредиенты
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Био активные добавки LR создаются из экстрактов овощей, фруктов, ягод и трав. Никаких синтетических веществ
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/9.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Сертификат Friend Of the Sea
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Подтверждает что добавки, содержащие Омега 3 ПНЖК, добыты из глубоководных рыб при экологичной рыбной ловле
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/4.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Сертификат качества IASC
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Превосходное качество выращивания и переработки контролируется и под- тверждается Международным научным советом по Алоэ (IASC)
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/8.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Сертификат Kölner Liste
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Ведущая лаборатория мира в области тестирования пищевых добавок на наличие запрещенных веществ в профессиональном спорте
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/12.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Собственное производство
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Самая современная производственная площадка Алоэ Вера в Европе и уникальные методы производства сделали LR лидером в своем сегменте
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/7.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Сертификат качества SGS Institut Fresenius
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Это строжайшая проверка качества всего цикла производства. От места происхождения до готового продукта, который тестируется ежемесячно
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/1.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Высокое содержание Aloe Vera геля
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Прием Алоэ Вера геля увеличивает усваиваемость принимаемых с ним витаминов более чем на 300%. Клинически доказано институтом Charité (Berlin)
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/11.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Собственные лаборатории и научный совет
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Научно-исследовательский центр LR идет в ногу с новейшими научными открытиями и создает уникальные продукты, обладающие максимальной эффективностью
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/6.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Более 30 запатентованных продуктов
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Запатентованная микроинкапсуляция и комплекс биологически активных веществ
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/15.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Премия GBA в 2020 году
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Награда присуждается инновационным продуктам и проектам, которые являются лидерами в своей области в Германии и за рубежом
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/10.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Внимание к упаковке
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Упаковка продукции LR изготавливается из материалов, имеющих сертификат FSC (FSC N003255)
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/5.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Сертификаты НИИ DERMATEST и DERMA CONSULT
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Продукция, отмеченная НИИ DERMATEST и DERMA CONSULT гарантирует высочайшее качество
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/14.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Сертификат BDIH
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Продукция LR не тестируется на животных
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-card
                            class="py-7 px-4"
                        >
                            <v-theme-provider dark>
                                <div>
                                    <v-img
                                        src="/img/lricon/13.png"
                                        class="mx-auto mb-5"
                                        style="max-width: 150px"
                                    />
                                </div>
                            </v-theme-provider>

                            <v-card-title
                                class="justify-center font-weight-black text-uppercase mb-5 converter-card-title"
                            >
                                Индивидуальный подход
                            </v-card-title>

                            <v-card-text
                                class="subtitle-1"
                            >
                                Широкая линейка инновационных продуктовых решений позволяет подобрать то, что нужно именно вам. На каждом жизненном этапе
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section id="consultant">
            <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mt-7 mb-3 text-uppercase">Бесплатная консультация</h2>

                <p class="mb-5">Свяжитесь с вашим персональным консультантом LR Health & Beauty</p>

                <v-responsive
                    class="mx-auto mb-10"
                    width="56"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <v-card
                    class="v-card-profile v-card--material mt-16 pa-3 mx-auto"
                    max-width="480"
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
                    <v-divider/>
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
                                                <v-icon>mdi-send</v-icon>
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
            class="justify-center"
            height="100"
        >
            <div class="title font-weight-light grey--text text-center">
                &copy; {{ (new Date()).getFullYear() }} — lifeplus.tv— независимый партнер LR Health & Beauty
            </div>
        </v-footer>
    </v-main>
</template>

<script>

import {mapActions, mapGetters} from "vuex"

export default {
    name: "HPlan",
    data: () => ({
        loading: false,
        cookieShow: true,
    }),
    metaInfo: {
        title: 'Программа 3 шага к твоему здоровью',
        meta: [
            { vmid: 'description', property: 'description', content: 'Инновационные решения для людей, которые хотят жить дольше, выглядеть моложе и чувствовать себя превосходно' },
            { vmid: 'og:title', property: 'og:title', content: 'Программа 3 шага к твоему здоровью' },
            { vmid: 'og:description', property: 'og:description', content: 'Инновационные решения для людей, которые хотят жить дольше, выглядеть моложе и чувствовать себя превосходно' },
            { vmid: 'og:image', property: 'og:image', content: '/img/LogoLifePlus.png' },
        ],
    },
    created() {
        if (!this.$route.query.p) {
            if (this.$cookies.isKey('lifeplus_partner')) {
                const partnerNum = this.$cookies.get('lifeplus_partner')
                this.$router.push ({name: 'HPlan', query: { p: partnerNum }})
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
    },
    methods: {
        ...mapActions({
            addNotification: 'application/addNotification',
            showPartnerAccess: 'user/showPartnerAccess',
        }),
        cookieAccept() {
            this.cookieShow = false
            this.$cookies.set('lifeplus_cookie', 'accept', '12m')
        },
    },
    mounted () {
        this.showPartnerAccess(this.$route.query.p)
    }
}
</script>

<style lang="sass">
.converter-main
    max-width: 600px
    margin-left: 40px
    background-color: rgba(239, 237, 240, 0.7)

.converter-main-btn
    margin-left: auto
    margin-right: auto
    display: block

#health-steps
    background: url('/img/converter/cellbg.png') center no-repeat #f6f6f6

#why-lr
    background-color: white

.converter-video
    max-width: 800px
    margin-left: auto
    margin-right: auto

#experts-lr
    background: url('/img/converter/world-map-dark.png') #659c82
    background-size: cover

#advantage-lr
    background: url('/img/converter/world-map-dark.png')
    background-size: contain

.converter-card-title
    word-break: normal

#consultant
    background-color: #f8f8f8

@media(max-width: 600px)
    .converter-main
        margin-left: 20px

@media(max-width: 480px)
    .converter-main
        margin-left: 5px
</style>