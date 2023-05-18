<template>
    <v-container
        id="test-instrum"
        tag="section"
    >
        <v-row
            justify="center"
            v-if="packageData.instrument === 'yes'"
        >
            <v-col
                cols="12"
                lg="9"
                xl="7"
                class="block-media-lk"
            >
                <base-material-card
                    color="warning"
                    class="px-sm-8 px-md-16 px-2 py-3"
                >
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Тест по здоровью
                        </div>

                        <div class="subtitle-1 font-weight-light">
                            Рефссылка, инструкции, алгоритм работы
                        </div>
                    </template>

                    <v-card-text
                        class="mt-10 mb-10 card-media-lk"
                    >
                        <v-expansion-panels
                            popout
                            focusable
                            class="exp-panel-title"
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <span>
                                        <v-icon class="mr-2" color="green">mdi-numeric-1-box-multiple</v-icon>
                                        Твоя реферальная ссылка
                                    </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10" style="color: #8c0000">
                                        Русский язык
                                    </p>
                                    <p class="mt-5">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                        <router-link
                                            color="success"
                                            :to="{name: 'HTest', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Лендинг по тестированию (рус)
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Твоя реферальная ссылка на лендинг по тестированию (рус)</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/htest/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkTest"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkTest"
                                        class="mb-5"
                                    >
                                        Скопировать ссылку
                                    </v-btn>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <span>
                                        <v-icon class="mr-2" color="blue">mdi-numeric-2-box-multiple</v-icon>
                                        Рекомендации по работе с тестом
                                    </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        Данные методы работы с тестом несут строго рекомендательный характер.
                                    </p>

                                    <p class="mb-10">
                                        <a href="https://teletype.in/@dushaev/healthtest">Система рекрутинга в бизнес через Онлайн-тест по здоровью</a>
                                    </p>

                                    <v-expansion-panels popout>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                    <span>
                                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                        Как предложить пройти тест знакомым
                                                    </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-5">
                                                    В разговоре спрашиваем, например:
                                                    <br>
                                                    <span style="font-style: italic; color: #026099;">
                                                            "Тебе было бы интересно пройти тест и узнать о состоянии своего здоровья?
                                                            Этот тест разработан специалистами из Германии и в Европе люди платят за него 80 евро.
                                                            Т.к. я сотрудничаю с немецкой компанией, то у меня есть возможность предоставить тебе бесплатный доступ к тесту."
                                                        </span>
                                                </p>
                                                <p>
                                                        <span style="color: #8c0000">
                                                            Если говорит, что интересно
                                                        </span> - Отправляете свою реферальную ссылку на тест
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                    <span>
                                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                        Клиентские чаты
                                                    </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-5">
                                                    Предложить бесплатный тест для участников:
                                                    <br>
                                                    <span style="font-style: italic; color: #026099;">
                                                            "Кому бы было интересно пройти тест и узнать о состоянии своего здоровья?
                                                            Этот тест разработан специалистами из Германии и в Европе люди платят за него 80 евро.
                                                            У меня есть возможность предоставить вам бесплатный доступ к этому тесту.
                                                            <span style="text-decoration: underline">Поставьте + в чате кому интересно"</span>
                                                        </span>
                                                </p>
                                                <p>
                                                    <span style="color: #8c0000">Только тем, кто поставил "+" в чате</span>
                                                    - Отправляете свою реферальную ссылку на тест
                                                    <span style="text-decoration: underline; text-transform: uppercase;">личным сообщением</span>
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                    <span>
                                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                        Пост в социальных сетях
                                                    </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-5">
                                                    Создать интригу и предложить отреагировать в комментариях:
                                                    <br>
                                                    Например, написали пост о здоровье или свою историю, свой результат по здоровью и в конце, например, пишем:
                                                    <br>
                                                    <span style="font-style: italic; color: #026099;">
                                                            "Кому бы было интересно пройти тест и узнать о состоянии своего здоровья?
                                                            Этот тест разработан специалистами из Германии и в Европе люди платят за него 80 евро.
                                                            У меня есть возможность предоставить вам бесплатный доступ к этому тесту.
                                                            <span style="text-decoration: underline">Напишите в комментариях "Хочу пройти тест""</span>
                                                        </span>
                                                </p>
                                                <p>
                                                    <span style="color: #8c0000">Только тем, кто написал в комментариях "Хочу пройти тест"</span>
                                                    - Отправляете свою реферальную ссылку на тест
                                                    <span style="text-decoration: underline; text-transform: uppercase;">личным сообщением</span>
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                    <span>
                                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                        Встречи по бизнесу
                                                    </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-5">
                                                    1. <span style="text-decoration: underline">Если кандидату не интересен бизнес</span>,
                                                    то через 2-3 дня можно ему выслать предложение пройти тест, сделав "второе касание":
                                                    <br>
                                                    Связываетесь через пару дней и говорите, например:
                                                    <span style="font-style: italic; color: #026099;">
                                                            "Я понимаю, что бизнес тебе пока не интересен. А как ты относишься к своему здоровью?
                                                            Интересно было бы тебе пройти тест и узнать о состоянии своего здоровья?
                                                            Этот тест разработан специалистами из Германии и в Европе платят за него 80 евро.
                                                            Т.к. я сотрудничаю с немецкой компанией, у меня есть возможность предоставить тебе бесплатный доступ к этому тесту."
                                                        </span>
                                                </p>
                                                <p>
                                                        <span style="color: #8c0000">
                                                            Если говорит, что интересно
                                                        </span> - Отправляете свою реферальную ссылку на тест
                                                </p>

                                                <v-divider/>

                                                <p class="mt-5">
                                                    <span style="text-decoration: underline">2. Если кандидату предложение по бизнесу интересно или он сомневается</span>,
                                                    то усиливаем предложение:
                                                    <br>
                                                    Варианты:
                                                    <br>
                                                    <span style="font-style: italic; color: #026099;">
                                                            "Хочешь узнать, почему наш продукт пользуется большим спросом, и у тебя тоже будут его покупать?"
                                                        </span>
                                                    <br><br>
                                                    <span style="font-style: italic; color: #026099;">
                                                            "У меня есть инструмент, с помощью которого ты легко сможешь заинтересовать своих близких и знакомых."
                                                        </span>
                                                </p>
                                                <p>
                                                    На "живой" встрече показываете тест и проходите его вместе с кандидатом.
                                                    <br>
                                                    Во время онлайн-встречи отправляете кандидату свою реферальную ссылку на тест
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>

                                    <p class="mt-7">
                                        <strong>После того, как вы получили заявку от вашего кандидата:</strong>
                                    </p>
                                    <p>
                                        <!-- audio element -->
                                        <vue-player
                                            audio
                                            :sources="audioSourcesTest"
                                        />
                                    </p>
                                    <p>
                                        Связываемся с кандидатом и отправляем ему скрин его результатов теста, которые вы можете увидеть в карточке кандидата после того,
                                        как он пройдет тест.
                                    </p>
                                    <p>
                                        Также отправляем кандидату сайт с рекомендациями по питанию
                                    </p>
                                    <p class="mt-10">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                        <router-link
                                            color="success"
                                            :to="{name: 'HReq', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Лендинг с рекомендациями по питанию
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Твоя реферальная ссылка на лендинг с рекомендациями по питанию</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/hreq/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkTestReq"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkTestReq"
                                        class="mb-5"
                                    >
                                        Скопировать ссылку
                                    </v-btn>

                                    <v-divider/>

                                    <p class="mt-7">
                                        Онлайн-тест по здоровью - это универсальный инструмент! По статистике людей, заинтересованных в бизнес-предложении,
                                        в окружении большинства партнеров составляет 10-15%. А тех, кому интересна тема собственного здоровья,
                                        здоровья их родителей, семьи, детей по статистике более 90%. Поэтому мы рекомендуем
                                        начинать общение не с бизнеса, а именно с темы здоровья, предложив по итогу пройти тест.
                                    </p>
                                    <p>
                                        Также существует тенденция, что партнеры, которые пришли в бизнес через результат по продукту,
                                        дольше остаются активными и достигают бОльших результатов.
                                    </p>
                                    <p>
                                        С тестом у вас есть легкий и комфортный повод сделать "первый контакт"
                                        со всеми друзьями, близкими и знакомыми, которым, возможно, ранее вы боялись или стеснялись
                                        сделать предложение по бизнесу.
                                    </p>
                                    <p>
                                        Также с тестом у вас есть прекрасный повод для повторного контакта с теми, с кем вы ранее проводили встречи.
                                    </p>
                                    <p>
                                        Помимо этого, вы можете "разбудить" давно "спящих" или неактивных партнеров, показав им инструмент,
                                        которого раньше у них не было.
                                    </p>

                                    <p>
                                        <v-icon class="mr-2" color="red">mdi-alert-decagram</v-icon>
                                        И помните - не существует "волшебных таблеток". Все нужно пробовать и тестировать!
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <span>
                                        <v-icon class="mr-2" color="purple">mdi-numeric-3-box-multiple</v-icon>
                                        Рекомендации по продуктам LR
                                    </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        При подборе продуктов для клиента рекомендуем придерживаться программы "3 шага к твоему здоровью",
                                        которая рассчитана на первые 4 месяца и состоит из:
                                    </p>
                                    <p>
                                        <v-icon class="mr-2" color="green">mdi-numeric-1-box-multiple</v-icon>
                                        Шаг 1 - "Очищение" (1-й месяц)
                                    </p>
                                    <p>
                                        <v-icon class="mr-2" color="blue">mdi-numeric-2-box-multiple</v-icon>
                                        Шаг 2 - "Восстановление" (2-й и 3-й месяцы)
                                    </p>
                                    <p>
                                        <v-icon class="mr-2" color="red">mdi-numeric-3-box-multiple</v-icon>
                                        Шаг 3 - "Питание" (4-й месяц)
                                    </p>

                                    <p>
                                        Подробнее с программой "3 шага к твоему здоровью" вы можете ознакомиться на сайте,
                                        который также может являться для вас дополнительным инструментом и доступен по вашей
                                        персональной реферальной ссылке для этого сайта.
                                        <v-icon class="mr-2" color="blue">mdi-hand-pointing-down</v-icon>
                                    </p>
                                    <p>
                                        <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                        <router-link
                                            color="success"
                                            :to="{name: 'HPlan', query: { p: $store.state.user.profile.lr_number }}"
                                            target="_blank"
                                        >Программа "3 шага к твоему здоровью"</router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Твоя реферальная ссылка на "3 шага к твоему здоровью"</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/hplan/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkConverter"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkConverter"
                                        class="mb-5"
                                    >
                                        Скопировать ссылку
                                    </v-btn>

                                    <p>
                                        <v-icon color="purple" class="mr-2">mdi-basket</v-icon>
                                        <strong style="text-decoration: underline">1-й месяц - "Очищение"</strong>
                                    </p>
                                    <p>
                                        В первый месяц мы предлагаем базовый для всех систем набор продуктов:
                                    </p>
                                    <p>
                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                        Гель Алое Вера Персик
                                        <br>
                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                        ProBalance
                                        <br>
                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                        Mind Master (желательно и только через 2 недели после начала приема геля и пробаланса)
                                    </p>
                                    <p class="mt-5">
                                        <strong>Почему в первый месяц мы не рекомендуем принимать Файбер Буст (клетчатку)?</strong>
                                    </p>
                                    <p>
                                        Загрязнение организма у вашего клиента длилось годами. И теперь организму необходимо время на то, чтобы очиститься и восстановиться.
                                        Важно не торопиться впихнуть в клиента, все что только возможно из продуктов LR.
                                        На зашлакованную толстую кишку добавлять клетчатку (Файбер Буст) очень рискованно.
                                        Клиент ещё не научился правильно питаться и пить воду в достаточном количестве.
                                        Поэтому в первый месяц идет подготовительная, щадящая очистка.
                                    </p>

                                    <p>
                                        <v-icon color="purple" class="mr-2">mdi-basket</v-icon>
                                        <strong style="text-decoration: underline">2-й месяц - "Восстановление"</strong>
                                    </p>

                                    <v-expansion-panels>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Пищеварительная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Файбер Буст
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12 (через 2 недели с начала приема Файбер Буст)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Мед (можно дополнительно чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (желательно)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Сердечно-сосудистая система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Файбер Буст
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12 (через 2 недели с начала приема Файбер Буст)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Сивера (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (желательно)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Нервная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Файбер Буст
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12 (через 2 недели с начала приема Файбер Буст)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (обязательно)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Найт Мастер (нормализует сон и способствует полноценному восстановлению ЦНС)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Опорно-двигательная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Файбер Буст
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12 (через 2 недели с начала приема Файбер Буст)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Фридом (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (желательно)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем-гель Концентрат (втирание и самомассаж)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем Термолосьон (улучшение кровообращения мышц)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    МСМ-боди-крем с органической серой (улучшение работы связок, сухожилий + обезболивание)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Дыхательная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Файбер Буст
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12 (через 2 недели с начала приема Файбер Буст)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус (спрей, капсулы и чай)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Мед (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (желательно)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем-гель Концентрат (втирание и самомассаж)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем Термолосьон (растирка и ингаляции)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    спрей «Скорая помощь» (орошение носоглотки и полоскание горла)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Иммунная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Файбер Буст
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12 (через 2 недели с начала приема Файбер Буст)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус (спрей, капсулы и чай)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Иммун+ (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (обязательно)
                                                </p>
                                                <p>
                                                    Наружно. Для устранения проявлений аллергических дерматитов,
                                                    а также для устранения последствий лучевой терапии при онкологии (ожоги):
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    спрей Алоэ Вера «Скорая помощь»
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем-гель Алоэ Вера Концентрат
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем Алоэ Вера с Прополисом
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Эндокринная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Файбер Буст
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12 (через 2 недели с начала приема Файбер Буст)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (желательно)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Мочеполовая система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Файбер Буст
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12 (через 2 недели с начала приема Файбер Буст)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (желательно)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Кожа
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Файбер Буст
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12 (через 2 недели с начала приема Файбер Буст)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (желательно)
                                                </p>
                                                <p>
                                                    Местная терапия:
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При псориазе, экземе рекомендовано применять аптечку "Первая помощь" по следующей схеме:
                                                    утром спрей "Скорая помощь", затем концентрат Aloe Vera, вечером спрей скорая помощь,
                                                    затем крем Aloe Vera с прополисом.
                                                    <br>
                                                    В случае подострой стадии или в стадии ремиссии «дежурные» псориатические бляшки смазывать
                                                    кремом Дермаинтенс.

                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При поверхностных ожогах или раздражительных дерматитах - спрей "Скорая помощь", затем гель-концентрат Aloe Vera.
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При поверхностных инфекционных поражениях: спрей "Скорая помощь", затем крем Aloe Vera с прополисом.
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При себорейном дерматите волосистой части головы (перхоть) – шампунь Microsilver.
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При дерматитах кожи туловища (от хлорированной воды, пересушенная и ослабленная кожа)
                                                    – увлажняющий лосьон для тела Aloe Vera или крем Soft skin Aloe Vera
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При сухой или обветренной коже кистей - смягчающий крем для рук Aloe Vera
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При угревой сыпи – очищение кожи лица прибором Zeitgard-1, затем нанесение  концентрата Aloe Vera
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При возрастных изменениях кожи (снижение тургора, поверхностные и глубокие морщины,
                                                    темные круги под глазами, нездоровый цвет лица и др.) – применение серии косметических
                                                    средств Zeitgard, аппарат для антивозрастного эффекта Zeitgard-2.
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>

                                    <p class="mt-10">
                                        <v-icon color="purple" class="mr-2">mdi-basket</v-icon>
                                        <strong style="text-decoration: underline">3-й месяц - "Восстановление"</strong>
                                    </p>

                                    <v-expansion-panels>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Пищеварительная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Мед (можно дополнительно чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Сердечно-сосудистая система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Сивера (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Нервная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (обязательно)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Найт Мастер (нормализует сон и способствует полноценному восстановлению ЦНС)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Опорно-двигательная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Фридом (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Капсулы Фридом
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем-гель Концентрат (втирание и самомассаж)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем Термолосьон (улучшение кровообращения мышц)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    МСМ-боди-крем с органической серой (улучшение работы связок, сухожилий + обезболивание)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Дыхательная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус (спрей, капсулы и чай)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Мед (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем-гель Концентрат (втирание и самомассаж)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем Термолосьон (растирка и ингаляции)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    спрей «Скорая помощь» (орошение носоглотки и полоскание горла)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Иммунная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус (спрей, капсулы и чай)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Иммун+ (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (обязательно)
                                                </p>
                                                <p>
                                                    Наружно. Для устранения проявлений аллергических дерматитов,
                                                    а также для устранения последствий лучевой терапии при онкологии (ожоги):
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    спрей Алоэ Вера «Скорая помощь»
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем-гель Алоэ Вера Концентрат
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем Алоэ Вера с Прополисом
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Эндокринная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Вита Актив
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Мочеполовая система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Вита Актив
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Кожа
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                </p>
                                                <p>
                                                    Местная терапия:
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При псориазе, экземе рекомендовано применять аптечку "Первая помощь" по следующей схеме:
                                                    утром спрей "Скорая помощь", затем концентрат Aloe Vera, вечером спрей скорая помощь,
                                                    затем крем Aloe Vera с прополисом.
                                                    <br>
                                                    В случае подострой стадии или в стадии ремиссии «дежурные» псориатические бляшки смазывать
                                                    кремом Дермаинтенс.

                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При поверхностных ожогах или раздражительных дерматитах - спрей "Скорая помощь", затем гель-концентрат Aloe Vera.
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При поверхностных инфекционных поражениях: спрей "Скорая помощь", затем крем Aloe Vera с прополисом.
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При себорейном дерматите волосистой части головы (перхоть) – шампунь Microsilver.
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При дерматитах кожи туловища (от хлорированной воды, пересушенная и ослабленная кожа)
                                                    – увлажняющий лосьон для тела Aloe Vera или крем Soft skin Aloe Vera
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При сухой или обветренной коже кистей - смягчающий крем для рук Aloe Vera
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При угревой сыпи – очищение кожи лица прибором Zeitgard-1, затем нанесение  концентрата Aloe Vera
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При возрастных изменениях кожи (снижение тургора, поверхностные и глубокие морщины,
                                                    темные круги под глазами, нездоровый цвет лица и др.) – применение серии косметических
                                                    средств Zeitgard, аппарат для антивозрастного эффекта Zeitgard-2.
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>

                                    <p class="mt-10">
                                        <v-icon color="purple" class="mr-2">mdi-basket</v-icon>
                                        <strong style="text-decoration: underline">4-й месяц - "Питание"</strong>
                                    </p>

                                    <v-expansion-panels>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Пищеварительная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Протеин
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Вита Актив
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Мед (можно дополнительно чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Сердечно-сосудистая система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Протеин
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Вита Актив
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Сивера (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Нервная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Протеин
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Вита Актив
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (обязательно)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Найт Мастер (нормализует сон и способствует полноценному восстановлению ЦНС)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Опорно-двигательная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Протеин
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Вита Актив
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Фридом (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Капсулы Фридом
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем-гель Концентрат (втирание и самомассаж)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем Термолосьон (улучшение кровообращения мышц)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    МСМ-боди-крем с органической серой (улучшение работы связок, сухожилий + обезболивание)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Дыхательная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Протеин
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Вита Актив
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус (спрей, капсулы и чай)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Мед (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем-гель Концентрат (втирание и самомассаж)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем Термолосьон (растирка и ингаляции)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    спрей «Скорая помощь» (орошение носоглотки и полоскание горла)
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Иммунная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Протеин
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Вита Актив
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус (спрей, капсулы и чай)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Иммун+ (чередовать с Персиком в течении дня)
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master (обязательно)
                                                </p>
                                                <p>
                                                    Наружно. Для устранения проявлений аллергических дерматитов,
                                                    а также для устранения последствий лучевой терапии при онкологии (ожоги):
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    спрей Алоэ Вера «Скорая помощь»
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем-гель Алоэ Вера Концентрат
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    крем Алоэ Вера с Прополисом
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Эндокринная система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Протеин
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Вита Актив
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Мочеполовая система
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Протеин
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Вита Актив
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Кожа
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Протеин
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Вита Актив
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Супер Омега
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Pro 12
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Цистус Инканус
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Гель Алое Вера Персик
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    ProBalance
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    Mind Master
                                                </p>
                                                <p>
                                                    Местная терапия:
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При псориазе, экземе рекомендовано применять аптечку "Первая помощь" по следующей схеме:
                                                    утром спрей "Скорая помощь", затем концентрат Aloe Vera, вечером спрей скорая помощь,
                                                    затем крем Aloe Vera с прополисом.
                                                    <br>
                                                    В случае подострой стадии или в стадии ремиссии «дежурные» псориатические бляшки смазывать
                                                    кремом Дермаинтенс.

                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При поверхностных ожогах или раздражительных дерматитах - спрей "Скорая помощь", затем гель-концентрат Aloe Vera.
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При поверхностных инфекционных поражениях: спрей "Скорая помощь", затем крем Aloe Vera с прополисом.
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При себорейном дерматите волосистой части головы (перхоть) – шампунь Microsilver.
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При дерматитах кожи туловища (от хлорированной воды, пересушенная и ослабленная кожа)
                                                    – увлажняющий лосьон для тела Aloe Vera или крем Soft skin Aloe Vera
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При сухой или обветренной коже кистей - смягчающий крем для рук Aloe Vera
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При угревой сыпи – очищение кожи лица прибором Zeitgard-1, затем нанесение  концентрата Aloe Vera
                                                    <br>
                                                    <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                    При возрастных изменениях кожи (снижение тургора, поверхностные и глубокие морщины,
                                                    темные круги под глазами, нездоровый цвет лица и др.) – применение серии косметических
                                                    средств Zeitgard, аппарат для антивозрастного эффекта Zeitgard-2.
                                                </p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <span>
                                        <v-icon class="mr-2" color="indigo">mdi-numeric-4-box-multiple</v-icon>
                                        Дополнительные материалы
                                    </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                        Дозировки по основным продуктам (pdf):
                                    </p>
                                    <p>
                                        <a href="/files/health/dozirovki.pdf" target="_blank">Скачать/открыть дозировки</a>
                                    </p>
                                    <v-divider class="mt-7 mb-7"/>
                                    <p class="mt-10">
                                        <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                        Брошюра по микронутриентам (pdf):
                                    </p>
                                    <p>
                                        <a href="/files/health/mikronutrienty_mart_2022.pdf" target="_blank">Скачать/открыть брошюру</a>
                                    </p>

                                </v-expansion-panel-content>
                            </v-expansion-panel>

                        </v-expansion-panels>
                    </v-card-text>
                </base-material-card>
            </v-col>
        </v-row>
        <v-row
            justify="center"
            v-else
        >
            <v-col
                cols="12"
                lg="9"
                xl="7"
            >
                <base-material-card
                    color="red"
                    class="px-md-16 px-5 py-3"
                >
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Ошибка доступа
                        </div>

                        <div class="subtitle-1 font-weight-light">

                        </div>
                    </template>

                    <v-card-text
                        class="mt-10"
                    >
                        <p>
                            <v-icon
                                color="red"
                                class="mr-2"
                            >
                                mdi-alert-circle-outline
                            </v-icon>
                            У вас нет доступа к просмотру данной страницы.</p>
                        <p>
                            <v-icon
                                class="mr-2"
                                color="blue"
                            >
                                mdi-arrow-right-bold-outline
                            </v-icon>
                            Для получения доступа к инструменту обратитесь к администратору:
                            <router-link
                                color="success"
                                :to="{name: 'Support'}"
                            >
                                Техподдержка
                            </router-link>
                        </p>
                    </v-card-text>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "TestInstrum",
    data: () => ({
        dialog: true,
        audioSourcesTest: {
            'audio/mp3': '/audio/instructions/test/audio_req_test.mp3'
        },
    }),
    computed: {
        ...mapGetters({
            packageData: 'user/getProfileAccess',
        })
    },
    methods: {
        ...mapActions({
            loadProfileAccess: 'user/loadProfileAccess',
        }),
        copyRefLinkTest () {
            let referLinkTest = document.getElementById('referLinkTest')

            referLinkTest.select()

            document.execCommand('copy')
        },
        copyRefLinkTestFin () {
            let referLinkTestFin = document.getElementById('referLinkTestFin')

            referLinkTestFin.select()

            document.execCommand('copy')
        },
        copyRefLinkTestReq () {
            let referLinkTestReq = document.getElementById('referLinkTestReq')

            referLinkTestReq.select()

            document.execCommand('copy')
        },
        copyRefLinkConverter () {
            let referLinkConverter = document.getElementById('referLinkConverter')

            referLinkConverter.select()

            document.execCommand('copy')
        },
    },
    mounted() {
        this.loadProfileAccess()
    }
}
</script>

<style lang="sass">
.exp-panel-title .v-expansion-panel-header
    font-size: 14px

.exp-panel-title .v-expansion-panel--active
    border: 1px solid #69db69

@media(max-width: 600px)
    .block-media-lk
        padding: 0

    .card-media-lk
        padding: 0

</style>
