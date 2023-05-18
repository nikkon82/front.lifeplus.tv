<template>
    <v-main class="htest-main">
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
        <transition name="fade">
            <section v-if="blockLanding" id="htest-main">
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
                            md="6"
                            class="converter-main"
                        >
                            <v-img
                                src="/img/health/Lifetakt_Logo_w.png"
                                max-width=""
                                class="htest-logo"
                            />
                            <h1
                                class="htest-h1"
                            >
                                Узнай за 7 минут состояние своего здоровья
                            </h1>
                            <div class="htest-subtitle-main">
                                <p>
                                    Питание, образ жизни, привычки и другие обстоятельства напрямую влияют на состояние систем нашего организма
                                </p>
                                <p>
                                    Тест поможет оценить показатели здоровья и выявить зоны риска
                                </p>
                                <p>
                                    На основе результатов теста для вас будут подобраны
                                    персональные рекомендации
                                </p>
                            </div>
                            <div class="htest-video-div">
                                <div class="htest-video-btn">
                                    <v-btn
                                        class="align-self-end"
                                        color="#fff"
                                        @click="btnStartTest"
                                    >
                                        <p class="htest-video-btn-txt">Пройти тест</p>
                                    </v-btn>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-img
                        src="/img/health/iphone-x-test.png"
                        max-width=""
                        class="htest-iphone"
                    />
                </v-container>
            </v-row>
        </section>
        </transition>

        <transition name="fade">
            <section v-if="blockLanding" id="htest-start">
                <v-container>
                    <v-row
                        style="max-width: 1140px"
                        class="mx-auto"
                    >
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <h2 class="htest-h2-steps">Коротко о тесте LifeTakt</h2>
                            <div class="htest-border-left">
                                <div class="htest-blockquote">
                                    <p>
                                        Проблемы со здоровьем не возникают за один день.
                                        <strong>Между состоянием здоровья и болезнью существует третье состояние — предболезнь.</strong>
                                        Гораздо эффективнее заниматься профилактикой здоровья (превентивной медициной) до того, как проблема проявит себя.
                                        То есть на стадии здоровья или предболезни.
                                    </p>
                                    <p>
                                        Однако переход от здоровья к болезни часто происходит незаметно и может длиться годами. Диагностика организма с помощью
                                        компьютерной томографии, УЗИ, анализа крови, мочи определяют проблему постфактум, то есть когда организм перешел
                                        в стадию болезни.
                                    </p>
                                    <p>
                                        Возникает вопрос. <strong>Как диагностировать проблему на ранней стадии?</strong>
                                        Именно для этого был создан аналитический тест.
                                        Он как система раннего оповещения показывает, как влияет ваш образ жизни и привычки питания на 9 систем организма.
                                    </p>
                                </div>
                            </div>
                        </v-col>

                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-expansion-panels popout focusable>
                                <v-expansion-panel class="htest-exp-panel">
                                    <v-expansion-panel-header class="htest-exp-title">Есть ли у теста научная база?</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <p class="mt-7 htest-step-p-exp">
                                            Тест LifeTakt — это тест интегрального типа, который формирует результаты на основе анамнестических
                                            данных человека и показывает оценку общего состояния 9 систем организма в числовой форме.
                                        </p>
                                        <p class="htest-step-p-exp">
                                            <strong>АНАМНЕЗ</strong> — совокупность сведений о человеке (привычки питания, образ жизни, наличие
                                            или отсутствие определенных симптомов), получаемых при опросе и используемых для установления диагноза
                                            и прогноза болезни, а также выбора оптимальных методов ее лечения и профилактики.
                                        </p>
                                        <ul class="htest-ul-steps">
                                            <li>
                                                <v-icon>mdi-check-circle-outline</v-icon>
                                                Анамнестические данные являются самыми ранними проявлениями нездоровья человека.
                                            </li>
                                            <li>
                                                <v-icon>mdi-check-circle-outline</v-icon>
                                                Они помогают понять причинно-следственные связи в нарушении механизмов поддержания здоровья (саногенезе).
                                            </li>
                                            <li>
                                                <v-icon>mdi-check-circle-outline</v-icon>
                                                Зная эти связи, можно выстроить программу оздоровления, а не лечения болезни.
                                            </li>
                                        </ul>
                                        <p class="htest-step-p-exp">
                                            Анамнестическое тестирование широко развито в клиниках США и Европы.
                                        </p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel class="htest-exp-panel">
                                    <v-expansion-panel-header class="htest-exp-title">Тест определяет точный диагноз?</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <p class="mt-7 htest-step-p-exp">
                                            Тест LifeTakt – это не универсальный диагност, способный без анализов и специальных исследований
                                            поставить точный диагноз.
                                        </p>
                                        <p class="htest-step-p-exp">
                                            Тест анализирует ваши ответы и показывает наиболее вероятное состояние систем организма,
                                            опираясь на анамнестические данные.
                                        </p>
                                        <p class="htest-step-p-exp">
                                            Диагноз — это констатация самого факта болезни, которая УЖЕ случилась.
                                        </p>
                                        <p class="htest-step-p-exp">
                                            Тест нужен для того, чтобы предотвратить проблему, предупредить развитие заболеваний, узнать заранее,
                                            с чем может столкнуться ваш организм, и вовремя провести профилактику.
                                        </p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel class="htest-exp-panel">
                                    <v-expansion-panel-header class="htest-exp-title">Зачем мне проходить тест, если у меня все хорошо? </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <p class="mt-7 htest-step-p-exp">
                                            Движение человека из состояния здоровья в состояние болезни всегда проходит через состояние предболезни.
                                            В этом состоянии человек может находиться как от нескольких дней так и десятилетиями.
                                            <strong>По оценкам ВОЗ около 75% населения земли находятся в состоянии предболезни</strong>.
                                            При этом чувствуют они себя относительно хорошо.
                                        </p>
                                        <p class="htest-step-p-exp">
                                            Гораздо проще и дешевле вернуться в состояние здоровья из состояния предболезни.
                                            Проще не допустить проблему, чем бороться с ней.
                                        </p>
                                        <p class="htest-step-p-exp">
                                            Однако медицина занимается человеком тогда, когда можно поставить диагноз.
                                        </p>
                                        <p class="htest-step-p-exp">
                                            Если человек стремится к активному долголетию, хочет дольше быть здоровым и энергичным, ему нужно позаботиться
                                            о своем здоровье самостоятельно и заблаговременно.
                                        </p>
                                        <p class="htest-step-p-exp">
                                            Именно для этих целей создан аналитический тест LifeTakt.
                                        </p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                                <v-expansion-panel class="htest-exp-panel">
                                    <v-expansion-panel-header class="htest-exp-title">Стоит ли проходить тест, если я итак знаю состояние своего организма?</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <p class="mt-7 htest-step-p-exp">
                                            Однозначно стоит. Потому что помимо результатов вы получите рекомендации по коррекции питания и образа жизни,
                                            составленные европейскими специалистами.
                                        </p>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                    </v-row>
                </v-container>
            </section>
        </transition>

        <div class="htest-divider" v-if="blockLanding">
            <v-icon>mdi-circle-small</v-icon>
            <v-icon>mdi-circle-small</v-icon>
            <v-icon>mdi-star-outline</v-icon>
            <v-icon>mdi-circle-small</v-icon>
            <v-icon>mdi-circle-small</v-icon>
        </div>

        <transition name="fade">
            <section v-if="blockLanding" id="htest-start">
                <v-container>
                    <v-row
                        style="max-width: 1140px"
                        class="mx-auto"
                    >
                        <v-col
                            cols="12"
                            md="6"
                            style="position: relative"
                            class="htest-cont-two"
                        >
                            <div class="htest-food">
                                <h1
                                    class="htest-h1-food"
                                >
                                    Пройди тест и получи рекомендации по корректировке питания и образа жизни
                                </h1>
                                <div class="htest-subtitle-food">
                                    <p>
                                        Ты узнаешь, в какой области здоровья есть проблемы, и как их скорректировать, чтобы быть более здоровым и энергичным.
                                    </p>
                                </div>
                                <div class="htest-btn-food-div">
                                    <div class="htest-food-btn">
                                        <v-btn
                                            class="align-self-end"
                                            color="#fff"
                                            @click="btnStartTest"
                                        >
                                            <p class="htest-food-btn-txt">Пройти тест</p>
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-img
                                src="/img/health/htest.jpg"
                                max-width=""
                                class="htest-food-img"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </section>
        </transition>

        <transition name="fade">
            <section v-if="blockLanding" id="htest-feedback">
                <v-container>
                    <h2
                        class="htest-h2-feedback"
                    >
                        Что говорят специалисты о тесте LifeTakt
                    </h2>
                    <v-row
                        style="max-width: 980px"
                        class="mx-auto"
                    >
                        <v-col
                            cols="12"
                        >
                            <div class="htest-feedback">
                                <p>
                                    Это как раз тот случай, когда простой тест помогает увидеть слабые места,
                                    на которые человек, как правило, обращает внимание только тогда, когда симптоматика уже, как говорится, «налицо».
                                </p>
                                <p>
                                    Как говорится, профилактика – лучшее лекарство. А в современном мире люди слишком заняты своими
                                    повседневными делами, чтобы ходить по врачам или делать какие-то обследования.
                                </p>
                                <p>
                                    На мой взгляд, это один из самых эффективных экспресс-тестов, позволяющих без лишних усилий вовремя
                                    предотвратить наступление болезни или хотя бы дать человеку шанс начать нужную терапию, когда болезнь
                                    только начала себя проявлять.
                                </p>
                                <div class="htest-fb-who">
                                    <div
                                        class="v-avatar mx-auto v-card--material__avatar elevation-6 grey htest-fb-avatar"
                                        style="height: 64px; min-width: 64px; width: 64px"
                                    >
                                        <div class="v-image v-responsive theme--light">
                                            <img
                                                 src="/img/health/ganna-feedback.jpg"
                                                 alt=""
                                            >
                                            <div class="v-responsive__content" style="width: 250px"></div>
                                        </div>
                                    </div>
                                    <div class="htest-fb-text">
                                        <h3>Жанна Федотова</h3>
                                        <p>
                                            Нутрициолог, консультант по питанию и здоровому образу жизни
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <div class="htest-feedback">
                                <p>
                                    Тест точно показывает что происходит в организме.
                                    Я как нутрициолог и натуропат, работающий несколько лет в направлении устранения причин заболеваний,
                                    регулярно сталкиваюсь с тем, что люди сдают массу за частую ненужных и неинформативных анализов,
                                    потратив при этом кучу денег, времени, сил и нервов, а результатов практически нет.
                                </p>
                                <p>
                                    Данный тест позволяет с 90%-й вероятностью определить в какой системе организма есть неполадки и
                                    в каком направлении двигаться человеку, не гадая с чего начать и что делать. Т.к. именно на это уходит
                                    очень много времени и денег.
                                </p>
                                <p>
                                    Тест идеально подходит не только для обычного обывателя, которому важен контроль состояния своего организма
                                    с минимальными затратами денег и времени. Он будет полезен так же и специалистам, работающим в направлении
                                    превентивной медицины. Тест позволит не сдавать лишних анализов, и избежать ненужных лекарств.
                                </p>
                                <div class="htest-fb-who">
                                    <div
                                        class="v-avatar mx-auto v-card--material__avatar elevation-6 grey htest-fb-avatar"
                                        style="height: 64px; min-width: 64px; width: 64px"
                                    >
                                        <div class="v-image v-responsive theme--light">
                                            <img
                                                src="/img/health/aslan-feedback.jpg"
                                                alt=""
                                            >
                                            <div class="v-responsive__content" style="width: 250px"></div>
                                        </div>
                                    </div>
                                    <div class="htest-fb-text">
                                        <h3>Аслан Наптугов</h3>
                                        <p>
                                            Нутрициолог и натуропат
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <div class="htest-feedback">
                                <p>
                                    Как практикующий врач, могу сказать, что данный тест несёт высокую  клиническую ценность.
                                </p>
                                <p>
                                    Что важно, он способен показать развернутую картину состояния всего организма, а также выявить органы и системы,
                                    находящихся в фазе предболезни, что в принципе, отличает его от привычных клинических обследований.
                                </p>
                                <p>
                                    Тест идеален для самодиагностики организма и доступен каждому.
                                </p>
                                <div class="htest-fb-who">
                                    <div
                                        class="v-avatar mx-auto v-card--material__avatar elevation-6 grey htest-fb-avatar"
                                        style="height: 64px; min-width: 64px; width: 64px"
                                    >
                                        <div class="v-image v-responsive theme--light">
                                            <img
                                                src="/img/health/murad-feedback.jpg"
                                                alt=""
                                            >
                                            <div class="v-responsive__content" style="width: 250px"></div>
                                        </div>
                                    </div>
                                    <div class="htest-fb-text">
                                        <h3>Мурад Мусаев</h3>
                                        <p>
                                              Врач терапевт/дерматовенеролог
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <div class="htest-feedback">
                                <p>
                                    Пройдя тест, была поражена! Невероятно, но на основе простых на первый взгляд вопросов, результат показал
                                    точно ту ситуацию, которую показали дорогие анализы накануне!
                                </p>
                                <p>
                                    Когда проходила второй раз, тест показал жёлтую зону (зону риска) в одной из систем. Но я её не чувствовала.
                                    Через какое-то время эта система дала сбой. То есть, тест точно даёт знать, где есть "узкие места" и подготовить
                                    профилактику.
                                </p>
                                <div class="htest-fb-who">
                                    <div
                                        class="v-avatar mx-auto v-card--material__avatar elevation-6 grey htest-fb-avatar"
                                        style="height: 64px; min-width: 64px; width: 64px"
                                    >
                                        <div class="v-image v-responsive theme--light">
                                            <img
                                                src="/img/health/tsareva-feedback.jpg"
                                                alt=""
                                            >
                                            <div class="v-responsive__content" style="width: 250px"></div>
                                        </div>
                                    </div>
                                    <div class="htest-fb-text">
                                        <h3>Юлия Царева</h3>
                                        <p>
                                            Специалист по антивозрастным технологиям
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </v-col>

                        <div class="htest-btn-fb-div mx-auto">
                            <div class="htest-fb-btn">
                                <v-btn
                                    class="align-self-end"
                                    color="#03311F"
                                    @click="btnStartTest"
                                >
                                    <p class="htest-fb-btn-txt">Пройти тест</p>
                                </v-btn>
                            </div>
                        </div>
                    </v-row>
                </v-container>
            </section>
        </transition>

        <transition name="fade">
            <v-footer
                v-if="blockLanding"
                class="justify-center htest-footer"
                height="80"
            >
                <div class="title font-weight-light text-center">
                    &copy; {{ (new Date()).getFullYear() }} — lifeplus.tv — независимый партнер LR Health & Beauty
                </div>
            </v-footer>
        </transition>

        <transition name="fade">
            <section v-if="blockTest" id="hero">
            <v-row no-gutters>
                <v-container
                    id="leedbot"
                    tag="section"
                    class="leedbot test"
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
                            style="padding-top: 5%; padding-bottom: 0"
                            class="main-col"
                        >
                            <v-card
                                class="v-card-profile v-card--material pa-3"
                                style="margin-top: 0; margin-bottom: 0"
                            >
                                <v-row>
                                    <v-col class="">
                                        <div class="chat-list">
                                            <div>
                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz1"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Перед прохождением теста ответьте пожалуйста на несколько вопросов,
                                                                        чтобы система подобрала вопросы актуальные именно для вас.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnOk1"
                                                                    @click="btnOk1"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Хорошо
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz2"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Ваше имя?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-input">
                                                                <v-text-field
                                                                    :disabled="disInpName"
                                                                    label="Введите свое имя"
                                                                    type="text"
                                                                    v-model.trim="clientData.name"
                                                                    :error-messages="nameErrors"
                                                                    @input="$v.clientData.name.$touch()"
                                                                    @blur="$v.clientData.name.$touch()"
                                                                />
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnName"
                                                                    @click="myName"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Меня зовут
                                                                    <span
                                                                        class="ml-2"
                                                                        style="text-decoration: underline"
                                                                    >
                                                                        {{ clientData.name }}
                                                                    </span>
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz3"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Ваш пол?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    color="green"
                                                                    :disabled="disBtnM"
                                                                    @click="btnM"
                                                                >
                                                                    М
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    color="green"
                                                                    :disabled="disBtnG"
                                                                    @click="btnG"
                                                                >
                                                                    Ж
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz4"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Сколько вам лет?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-input">
                                                                <v-text-field
                                                                    :disabled="disInpAge"
                                                                    label="Введите число полных лет"
                                                                    type="text"
                                                                    v-model.trim="clientData.age"
                                                                    :error-messages="ageErrors"
                                                                    @input="$v.clientData.age.$touch()"
                                                                    @blur="$v.clientData.age.$touch()"
                                                                />
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnAge"
                                                                    @click="myAge"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Мне
                                                                    <span
                                                                        class="ml-2"
                                                                        style="text-decoration: underline"
                                                                    >
                                                                        {{ clientData.age }}
                                                                    </span>
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz5"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        И последний шаг:
                                                                    </p>
                                                                    <p>
                                                                        Выберите удобный для вас мессенджер, куда выслать результаты теста и рекомендации.
                                                                    </p>
                                                                    <div class="mt-7">
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
<!--                                                                        <v-btn-->
<!--                                                                            fab-->
<!--                                                                            dark-->
<!--                                                                            small-->
<!--                                                                            class="mr-3"-->
<!--                                                                            color="blue"-->
<!--                                                                            @click="btnTelegram"-->
<!--                                                                        >-->
<!--                                                                            <v-icon>mdi-send</v-icon>-->
<!--                                                                        </v-btn>-->
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
                                                                </div>
                                                            </div>
                                                            <div v-if="btnWhatsappTrue">
                                                                <div class="chat-input">
                                                                    <v-text-field
                                                                        :disabled="disInpWhatsapp"
                                                                        label="Номер Whatsapp"
                                                                        prepend-icon="mdi-whatsapp"
                                                                        type="text"
                                                                        v-model.trim="clientData.phone_whatsapp"
                                                                        :error-messages="phoneWhatsappErrors"
                                                                        @input="$v.clientData.phone_whatsapp.$touch()"
                                                                        @blur="$v.clientData.phone_whatsapp.$touch()"
                                                                        hint="79123456789"
                                                                        persistent-hint
                                                                    />
                                                                </div>
                                                                <div class="chat-controls">
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnBiz5"
                                                                        @click="btnSendBiz"
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
<!--                                                            <div v-if="btnTelegramTrue">-->
<!--                                                                <div class="chat-input">-->
<!--                                                                    <v-text-field-->
<!--                                                                        :disabled="disInpTelegram"-->
<!--                                                                        label="Имя пользователя в telegram"-->
<!--                                                                        prepend-icon="mdi-send"-->
<!--                                                                        type="text"-->
<!--                                                                        v-model.trim="clientData.telegram"-->
<!--                                                                        :error-messages="telegramErrors"-->
<!--                                                                        @input="$v.clientData.telegram.$touch()"-->
<!--                                                                        @blur="$v.clientData.telegram.$touch()"-->
<!--                                                                        hint="username"-->
<!--                                                                        persistent-hint-->
<!--                                                                    />-->
<!--                                                                </div>-->
<!--                                                                <div class="chat-controls">-->
<!--                                                                    <v-btn-->
<!--                                                                        class="chat-btn"-->
<!--                                                                        :disabled="disBtnBiz5"-->
<!--                                                                        @click="btnSendBiz"-->
<!--                                                                    >-->
<!--                                                                        <v-icon class="mr-3">mdi-send</v-icon>-->
<!--                                                                        Отправить-->
<!--                                                                    </v-btn>-->
<!--                                                                </div>-->
<!--                                                                <p class="privacy-text">-->
<!--                                                                    Оставляя заявку, вы даете свое-->
<!--                                                                    <router-link :to="{name: 'Personal'}" target="_blank">Согласие на обработку персональных данных</router-link>-->
<!--                                                                    и принимаете-->
<!--                                                                    <router-link :to="{name: 'Policy'}" target="_blank">Политику конфидециальности</router-link>.-->
<!--                                                                </p>-->
<!--                                                            </div>-->
                                                            <div v-if="btnViberTrue">
                                                                <div class="chat-input">
                                                                    <v-text-field
                                                                        :disabled="disInpViber"
                                                                        label="Номер Viber"
                                                                        prepend-icon="fab fa-viber"
                                                                        type="text"
                                                                        v-model.trim="clientData.phone_viber"
                                                                        :error-messages="phoneViberErrors"
                                                                        @input="$v.clientData.phone_viber.$touch()"
                                                                        @blur="$v.clientData.phone_viber.$touch()"
                                                                        hint="79123456789"
                                                                        persistent-hint
                                                                    />
                                                                </div>
                                                                <div class="chat-controls">
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnBiz5"
                                                                        @click="btnSendBiz"
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
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTestStart"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Итак, приступим к тесту.
                                                                    </p>
                                                                    <p>Только отвечая ЧЕСТНО, можно получить ТОЧНЫЕ результаты</p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTestStart"
                                                                    @click="btnTestStart"
                                                                >
                                                                    OK
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest1"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 1/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Недостаток энергии, упадок сил
                                                                    </p>
                                                                    <p>
                                                                        Просыпаетесь вялыми, в течение дня преследует
                                                                        сонливость, апатия, пропадает интерес к жизни.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest1Y"
                                                                    @click="btnTest1Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest1N"
                                                                    @click="btnTest1N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest2"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 2/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Заболевания более 2 раз в год
                                                                    </p>
                                                                    <p>
                                                                        Простудные и другие заболевания более 2-х раз в год.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest2Y"
                                                                    @click="btnTest2Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest2N"
                                                                    @click="btnTest2N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest3"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 3/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Неприятный запах тела или изо рта
                                                                    </p>
                                                                    <p>
                                                                        Чувствуется через короткое время после душа и
                                                                        гигиены полости рта.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest3Y"
                                                                    @click="btnTest3Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest3N"
                                                                    @click="btnTest3N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest4"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 4/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Плохое переваривание некоторых продуктов (чувство тяжести)
                                                                    </p>
                                                                    <p>
                                                                        Постоянные или периодические боли в животе в
                                                                        течение двух часов после приема пищи.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest4Y"
                                                                    @click="btnTest4Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest4N"
                                                                    @click="btnTest4N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest5"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 5/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Употребление красного мяса
                                                                    </p>
                                                                    <p>
                                                                        Употребление красного мяса (говядина, баранина, стэйк с кровью) 2 и более раз в
                                                                        неделю.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest5Y"
                                                                    @click="btnTest5Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest5N"
                                                                    @click="btnTest5N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest6"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 6/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Проблемы с менструальным циклом, в т.ч. болезненная менструация
                                                                    </p>
                                                                    <p>
                                                                        Менструальный цикл менее 21 дня или более 32 дней.
                                                                        Менструация сопровождается болями.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest6Y"
                                                                    @click="btnTest6Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest6N"
                                                                    @click="btnTest6N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest7"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 7/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Использование антибиотиков (лекарств)
                                                                    </p>
                                                                    <p>
                                                                        Применение антибиотиков и других медикаментов более
                                                                        2 раз в год за последние 3 года.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest7Y"
                                                                    @click="btnTest7Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest7N"
                                                                    @click="btnTest7N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest8"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 8/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Употребление алкоголя (в т.ч. пива)
                                                                    </p>
                                                                    <p>
                                                                        Употребление алкоголя (в т.ч. пива) более 1 раза в
                                                                        неделю.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest8Y"
                                                                    @click="btnTest8Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest8N"
                                                                    @click="btnTest8N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest9"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 9/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Частые перепады настроения
                                                                    </p>
                                                                    <p>
                                                                        Вы не в состоянии поддерживать свой эмоциональный
                                                                        фон ровным в течении дня.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest9Y"
                                                                    @click="btnTest9Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest9N"
                                                                    @click="btnTest9N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest10"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 10/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Аллергия
                                                                    </p>
                                                                    <p>
                                                                        Высыпания, зуд, отеки, насморк.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest10Y"
                                                                    @click="btnTest10Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest10N"
                                                                    @click="btnTest10N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest11"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 11/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Темные круги или отечность под глазами
                                                                    </p>
                                                                    <p>
                                                                        Наличие припухлостей или темных кругов под
                                                                        глазами.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest11Y"
                                                                    @click="btnTest11Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest11N"
                                                                    @click="btnTest11N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest12"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 12/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Курение (в т.ч. пассивное)
                                                                    </p>
                                                                    <p>
                                                                        Курите регулярно или после употребления алкоголя в
                                                                        кругу друзей, в том числе частое присутствие среди курящих.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest12Y"
                                                                    @click="btnTest12Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest12N"
                                                                    @click="btnTest12N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest13"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 13/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Трудности с концентрацией внимания, плохое запоминание
                                                                    </p>
                                                                    <p>
                                                                        Рассеянность, страдает краткосрочная память.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest13Y"
                                                                    @click="btnTest13Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest13N"
                                                                    @click="btnTest13N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest14"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 14/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Дискомфорт после еды (изжога, газообразование)
                                                                    </p>
                                                                    <p>
                                                                        Хотя бы один раз в день, а особенно после приёма
                                                                        определенного типа пищи.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest14Y"
                                                                    @click="btnTest14Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest14N"
                                                                    @click="btnTest14N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest15"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 15/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Нервная обстановка, частые стрессы
                                                                    </p>
                                                                    <p>
                                                                        Кроме явных стрессовых ситуаций присутствует
                                                                        чувство вины, обиды, переживания, тревога.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest15Y"
                                                                    @click="btnTest15Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest15N"
                                                                    @click="btnTest15N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest16"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 16/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Дефекты кожи или неудовлетворительный цвет кожи лица
                                                                    </p>
                                                                    <p>
                                                                        Высыпания, угри, пигментные пятна, папилломы на
                                                                        коже лица.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest16Y"
                                                                    @click="btnTest16Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest16N"
                                                                    @click="btnTest16N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest17"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 17/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Употребление сладостей или полуфабрикатов (в т.ч. фаст-фуд)
                                                                    </p>
                                                                    <p>
                                                                        Частое употребление десертов во время приема пищи,
                                                                        перекусываете сладостями. Больше употребляете переработанную пищу,
                                                                        нежели сырую. Употребление фаст-фуда.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest17Y"
                                                                    @click="btnTest17Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest17N"
                                                                    @click="btnTest17N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest18"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 18/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Употребление молочных продуктов более 2 раз в неделю
                                                                    </p>
                                                                    <p>
                                                                        Употребление молочных продуктов и их производных
                                                                        (творога, масла, сыров и др.) более 2 раз в неделю.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest18Y"
                                                                    @click="btnTest18Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest18N"
                                                                    @click="btnTest18N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest19"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 19/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Чувство апатии, вялости, депрессия
                                                                    </p>
                                                                    <p>
                                                                        Продолжительное время не можете выйти из таких
                                                                        состояний.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest19Y"
                                                                    @click="btnTest19Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest19N"
                                                                    @click="btnTest19N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest20"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 20/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Сон, не приносящий отдыха, бессонница
                                                                    </p>
                                                                    <p>
                                                                        Не можете заснуть в первые 10 минут или часто
                                                                        просыпаетесь от любого шороха.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest20Y"
                                                                    @click="btnTest20Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest20N"
                                                                    @click="btnTest20N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest21"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 21/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Период менопаузы, «приливы»
                                                                    </p>
                                                                    <p>
                                                                        Повышенное давление, приливы, потливость и т.д.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest21Y"
                                                                    @click="btnTest21Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest21N"
                                                                    @click="btnTest21N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest22"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 22/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Проблемы с мочеиспусканием или заболевания мочевого пузыря
                                                                    </p>
                                                                    <p>
                                                                        Мочеиспускание более 7 раз в день.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest22Y"
                                                                    @click="btnTest22Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest22N"
                                                                    @click="btnTest22N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest23"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 23/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Чувствительная (истончённая) кожа
                                                                    </p>
                                                                    <p>
                                                                        Ощущение стянутости после умывания, частые
                                                                        раздражения, возникновение красных пятен, чувство жжения, зуд,
                                                                        шелушение, реакция на использование новой косметики.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest23Y"
                                                                    @click="btnTest23Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest23N"
                                                                    @click="btnTest23N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest24"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 24/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Выпадение волос или проблемы с кожей головы
                                                                    </p>
                                                                    <p>
                                                                        Визуально замечаете увеличение количества выпавших
                                                                        волос во время мытья, в процессе расчесывания, на подушке после сна.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest24Y"
                                                                    @click="btnTest24Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest24N"
                                                                    @click="btnTest24N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest25"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 25/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Боли в суставах, «хруст». Отечность. Онемение конечностей.
                                                                    </p>
                                                                    <p>
                                                                        Визуально видите отеки и ощущаете боли в суставах,
                                                                        особенно после долгого сидения.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest25Y"
                                                                    @click="btnTest25Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest25N"
                                                                    @click="btnTest25N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest26"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 26/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Отклонение от нормального веса
                                                                    </p>
                                                                    <p>
                                                                        Вес снижается только при ограничениях в питании, во
                                                                        время диеты. Либо не идёт набор веса даже при усиленном питании.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest26Y"
                                                                    @click="btnTest26Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest26N"
                                                                    @click="btnTest26N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest27"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 27/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Быстрая утомляемость
                                                                    </p>
                                                                    <p>
                                                                        Нет сил, выносливости, требуется постоянный
                                                                        отдых.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest27Y"
                                                                    @click="btnTest27Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest27N"
                                                                    @click="btnTest27N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest28"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 28/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Нарушение режима питания
                                                                    </p>
                                                                    <p>
                                                                        Нерегулярное, неполноценное питание менее 3-х раз в
                                                                        день.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest28Y"
                                                                    @click="btnTest28Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest28N"
                                                                    @click="btnTest28N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest29"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 29/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Длительное выздоровление после болезней
                                                                    </p>
                                                                    <p>
                                                                        Период выздоровления от простудных заболеваний
                                                                        более 1 недели.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest29Y"
                                                                    @click="btnTest29Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest29N"
                                                                    @click="btnTest29N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest30"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 30/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Нерегулярный стул
                                                                    </p>
                                                                    <p>
                                                                        При 3-х разовом питании опорожнение кишечника менее
                                                                        2 раз в день и/или явные запоры.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest30Y"
                                                                    @click="btnTest30Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest30N"
                                                                    @click="btnTest30N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest31"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 31/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Плохой аппетит
                                                                    </p>
                                                                    <p>
                                                                        Вам приходится заставлять себя что-то скушать.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest31Y"
                                                                    @click="btnTest31Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest31N"
                                                                    @click="btnTest31N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest32"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 32/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Истончённые и ломкие ногти (слоящиеся ногти)
                                                                    </p>
                                                                    <p>
                                                                        Вам трудно отрастить ногти, ломаются при любом
                                                                        механическом воздействии.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest32Y"
                                                                    @click="btnTest32Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest32N"
                                                                    @click="btnTest32N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest33"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 33/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Повреждённые волосы (сухие или тусклые)
                                                                    </p>
                                                                    <p>
                                                                        Ломкость волоса в прикорневой зоне или 5-10 см от
                                                                        корня волоса, посеченные кончики.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest33Y"
                                                                    @click="btnTest33Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest33N"
                                                                    @click="btnTest33N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest34"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 34/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Употребление жирной пищи
                                                                    </p>
                                                                    <p>
                                                                        Употребление жареной, масляной, сильно жирной пищи
                                                                        более 2 раз в неделю.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest34Y"
                                                                    @click="btnTest34Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest34N"
                                                                    @click="btnTest34N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest35"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 35/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Недостаток клетчатки в рационе
                                                                    </p>
                                                                    <p>
                                                                        Употребление овощей, в т.ч. салатов - менее 2 раз в
                                                                        день.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest35Y"
                                                                    @click="btnTest35Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest35N"
                                                                    @click="btnTest35N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest36"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 36/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Мышечный дискомфорт (боли, судороги)
                                                                    </p>
                                                                    <p>
                                                                        Частые судороги по утрам, в воде, при ходьбе.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest36Y"
                                                                    @click="btnTest36Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest36N"
                                                                    @click="btnTest36N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest37"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 37/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Неблагоприятная экология
                                                                    </p>
                                                                    <p>
                                                                        Живете в мегаполисе, неподалеку заводы, фабрики,
                                                                        токсичное производство.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest37Y"
                                                                    @click="btnTest37Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest37N"
                                                                    @click="btnTest37N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest38"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 38/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Дневная сонливость
                                                                    </p>
                                                                    <p>
                                                                        Постоянно хочется днём спать.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest38Y"
                                                                    @click="btnTest38Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest38N"
                                                                    @click="btnTest38N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest39"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 39/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Ежедневное потребление колы, кофе или крепкого чая
                                                                    </p>
                                                                    <p>
                                                                        Пьёте более 2-х чашек колы, кофе или крепкого чая в
                                                                        день.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest39Y"
                                                                    @click="btnTest39Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest39N"
                                                                    @click="btnTest39N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest40"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 40/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Чувствительность к химикатам, лекарствам, некоторой пище
                                                                    </p>
                                                                    <p>
                                                                        Дискомфорт любого характера: зуд, одышка, отеки.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest40Y"
                                                                    @click="btnTest40Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest40N"
                                                                    @click="btnTest40N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest41"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 41/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Грибковые поражения
                                                                    </p>
                                                                    <p>
                                                                        Наличие белого налёта на языке по утрам, выделения
                                                                        у женщин, грибок на ногтях.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest41Y"
                                                                    @click="btnTest41Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest41N"
                                                                    @click="btnTest41N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest42"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 42/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Слабость в мышцах или хрупкость костей
                                                                    </p>
                                                                    <p>
                                                                        Частые переломы, периодически подкашиваются
                                                                        ноги.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest42Y"
                                                                    @click="btnTest42Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest42N"
                                                                    @click="btnTest42N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest43"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 43/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Чувство тревоги
                                                                    </p>
                                                                    <p>
                                                                        Вы постоянно переживаете и порой по пустякам.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest43Y"
                                                                    @click="btnTest43Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest43N"
                                                                    @click="btnTest43N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest44"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 44/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Повышенная раздражительность, чрезмерная возбудимость
                                                                    </p>
                                                                    <p>
                                                                        Раздражаетесь, злитесь и понимаете, что веских
                                                                        причин для этого нет.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest44Y"
                                                                    @click="btnTest44Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest44N"
                                                                    @click="btnTest44N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest45"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 45/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Малоподвижный образ жизни, низкая физическая активность
                                                                    </p>
                                                                    <p>
                                                                        Ведете сидячий образ жизни, малоподвижная работа,
                                                                        отсутствует какая-либо физическая активность.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest45Y"
                                                                    @click="btnTest45Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest45N"
                                                                    @click="btnTest45N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest46"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 46/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Повышенное выделение мокроты (выделение слизи)
                                                                    </p>
                                                                    <p>
                                                                        Кашель с мокротой по утрам и в течение дня,
                                                                        независимо от простуды, повышенное слюноотделение.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest46Y"
                                                                    @click="btnTest46Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest46N"
                                                                    @click="btnTest46N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTest47"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="p-quest-num mt-5 mb-5">Вопрос: 47/47</p>
                                                                    <p class="mb-5" style="font-weight: bold; font-size: 22px">
                                                                        Большие поры на коже, повышенное потоотделение (угри)
                                                                    </p>
                                                                    <p>
                                                                        Кожа жирная, крупные поры, угревая сыпь, иные
                                                                        высыпания.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls quest">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest47Y"
                                                                    @click="btnTest47Y"
                                                                >
                                                                    Скорее Да
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest47N"
                                                                    @click="btnTest47N"
                                                                >
                                                                    Скорее Нет
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        v-if="mesTestRes"
                                                    >
                                                        <p class="mb-5"
                                                           style="font-weight: bold"
                                                        >
                                                            Результаты теста
                                                        </p>
                                                        <v-simple-table>
                                                            <template v-slot:default>
                                                                <thead>
                                                                <tr>
                                                                    <th class="text-center dialog-th">
                                                                        Система
                                                                    </th>
                                                                    <th class="text-center dialog-th" style="width: 120px">
                                                                        Очень хорошо
                                                                    </th>
                                                                    <th class="text-center dialog-th" style="width: 120px">
                                                                        Хорошо
                                                                    </th>
                                                                    <th class="text-center dialog-th" style="width: 120px">
                                                                        Зона риска
                                                                    </th>
                                                                    <th class="text-center dialog-th" style="width: 120px">
                                                                        Плохо
                                                                    </th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr class="tbl-tr">
                                                                    <td class="tbl-sys">
                                                                        <v-tooltip right>
                                                                            <template v-slot:activator="{ on, attrs }">
                                                                                <span
                                                                                    class="sys-icon"
                                                                                    v-bind="attrs"
                                                                                    v-on="on"
                                                                                >
                                                                                    <img src="/img/testsysicons/gkt-icon.png" alt="">
                                                                                </span>
                                                                            </template>
                                                                            <span>Пищеварительная система</span>
                                                                        </v-tooltip>
                                                                        <p class="sys-text">Пищеварительная</p>
                                                                    </td>
                                                                    <td class="tbl-very-good">
                                                                        <span class="table-label">0-2</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.gktSys < 3"
                                                                        >
                                                                                {{ testResults.gktSys }}
                                                                            </span>
                                                                    </td>
                                                                    <td class="tbl-good">
                                                                        <span class="table-label">3-4</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.gktSys > 2 && testResults.gktSys < 5"
                                                                        >
                                                                                {{ testResults.gktSys }}
                                                                            </span>
                                                                    </td>
                                                                    <td class="tbl-risk">
                                                                        <span class="table-label">5-9</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.gktSys > 4 && testResults.gktSys < 10"
                                                                        >
                                                                                {{ testResults.gktSys }}
                                                                            </span>
                                                                    </td>
                                                                    <td class="tbl-bad">
                                                                        <span class="table-label">10></span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.gktSys > 9"
                                                                        >
                                                                                {{ testResults.gktSys }}
                                                                            </span>
                                                                    </td>
                                                                </tr>
                                                                <tr class="tbl-tr">
                                                                    <td class="tbl-sys">
                                                                        <v-tooltip right>
                                                                            <template v-slot:activator="{ on, attrs }">
                                                                                    <span
                                                                                        class="sys-icon"
                                                                                        v-bind="attrs"
                                                                                        v-on="on"
                                                                                    >
                                                                                        <img src="/img/testsysicons/heart-icon.png" alt="">
                                                                                    </span>
                                                                            </template>
                                                                            <span>Сердечно-сосудистая система</span>
                                                                        </v-tooltip>
                                                                        <p class="sys-text">Сердечно-сосудистая</p>
                                                                    </td>
                                                                    <td class="tbl-very-good">
                                                                        <span class="table-label">0-2</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.heartSys < 3"
                                                                        >
                                                                            {{ testResults.heartSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-good">
                                                                        <span class="table-label">3</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.heartSys === 3"
                                                                        >
                                                                            {{ testResults.heartSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-risk">
                                                                        <span class="table-label">4-7</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.heartSys > 3 && testResults.heartSys < 8"
                                                                        >
                                                                            {{ testResults.heartSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-bad">
                                                                        <span class="table-label">8></span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.heartSys > 7"
                                                                        >
                                                                            {{ testResults.heartSys }}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr class="tbl-tr">
                                                                    <td class="tbl-sys">
                                                                        <v-tooltip right>
                                                                            <template v-slot:activator="{ on, attrs }">
                                                                                    <span
                                                                                        class="sys-icon"
                                                                                        v-bind="attrs"
                                                                                        v-on="on"
                                                                                    >
                                                                                        <img src="/img/testsysicons/nerv-icon.png" alt="">
                                                                                    </span>
                                                                            </template>
                                                                            <span>Нервная система</span>
                                                                        </v-tooltip>
                                                                        <p class="sys-text">Нервная</p>
                                                                    </td>
                                                                    <td class="tbl-very-good">
                                                                        <span class="table-label">0-2</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.nervSys < 3"
                                                                        >
                                                                            {{ testResults.nervSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-good">
                                                                        <span class="table-label">3-5</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.nervSys > 2 && testResults.nervSys < 6"
                                                                        >
                                                                            {{ testResults.nervSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-risk">
                                                                        <span class="table-label">6-9</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.nervSys > 5 && testResults.nervSys < 10"
                                                                        >
                                                                            {{ testResults.nervSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-bad">
                                                                        <span class="table-label">10></span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.nervSys > 9"
                                                                        >
                                                                            {{ testResults.nervSys }}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr class="tbl-tr">
                                                                    <td class="tbl-sys">
                                                                        <v-tooltip right>
                                                                            <template v-slot:activator="{ on, attrs }">
                                                                                    <span
                                                                                        class="sys-icon"
                                                                                        v-bind="attrs"
                                                                                        v-on="on"
                                                                                    >
                                                                                        <img src="/img/testsysicons/imun-icon.png" alt="">
                                                                                    </span>
                                                                            </template>
                                                                            <span>Иммунная система</span>
                                                                        </v-tooltip>
                                                                        <p class="sys-text">Иммунная</p>
                                                                    </td>
                                                                    <td class="tbl-very-good">
                                                                        <span class="table-label">0-2</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.imunSys < 3"
                                                                        >
                                                                            {{ testResults.imunSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-good">
                                                                        <span class="table-label">3-4</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.imunSys > 2 && testResults.imunSys < 5"
                                                                        >
                                                                            {{ testResults.imunSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-risk">
                                                                        <span class="table-label">5-7</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.imunSys > 4 && testResults.imunSys < 8"
                                                                        >
                                                                            {{ testResults.imunSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-bad">
                                                                        <span class="table-label">8></span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.imunSys > 7"
                                                                        >
                                                                            {{ testResults.imunSys }}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr class="tbl-tr">
                                                                    <td class="tbl-sys">
                                                                        <v-tooltip right>
                                                                            <template v-slot:activator="{ on, attrs }">
                                                                                    <span
                                                                                        class="sys-icon"
                                                                                        v-bind="attrs"
                                                                                        v-on="on"
                                                                                    >
                                                                                        <img src="/img/testsysicons/breath-icon.png" alt="">
                                                                                    </span>
                                                                            </template>
                                                                            <span>Дыхательная система</span>
                                                                        </v-tooltip>
                                                                        <p class="sys-text">Дыхательная</p>
                                                                    </td>
                                                                    <td class="tbl-very-good">
                                                                        <span class="table-label">0</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.breathSys === 0"
                                                                        >
                                                                            {{ testResults.breathSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-good">
                                                                        <span class="table-label">1-3</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.breathSys > 0 && testResults.breathSys < 4"
                                                                        >
                                                                            {{ testResults.breathSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-risk">
                                                                        <span class="table-label">4-5</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.breathSys > 3 && testResults.breathSys < 6"
                                                                        >
                                                                            {{ testResults.breathSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-bad">
                                                                        <span class="table-label">6></span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.breathSys > 5"
                                                                        >
                                                                            {{ testResults.breathSys }}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr class="tbl-tr">
                                                                    <td class="tbl-sys">
                                                                        <v-tooltip right>
                                                                            <template v-slot:activator="{ on, attrs }">
                                                                                    <span
                                                                                        class="sys-icon"
                                                                                        v-bind="attrs"
                                                                                        v-on="on"
                                                                                    >
                                                                                        <img src="/img/testsysicons/mocha-icon.png" alt="">
                                                                                    </span>
                                                                            </template>
                                                                            <span>Мочеполовая система</span>
                                                                        </v-tooltip>
                                                                        <p class="sys-text">Мочеполовая</p>
                                                                    </td>
                                                                    <td class="tbl-very-good">
                                                                        <span class="table-label">0</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.mochaSys === 0"
                                                                        >
                                                                            {{ testResults.mochaSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-good">
                                                                        <span class="table-label">1</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.mochaSys === 1"
                                                                        >
                                                                            {{ testResults.mochaSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-risk">
                                                                        <span class="table-label">2-4</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.mochaSys > 1 && testResults.mochaSys < 5"
                                                                        >
                                                                            {{ testResults.mochaSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-bad">
                                                                        <span class="table-label">5></span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.mochaSys > 4"
                                                                        >
                                                                            {{ testResults.mochaSys }}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr class="tbl-tr">
                                                                    <td class="tbl-sys">
                                                                        <v-tooltip right>
                                                                            <template v-slot:activator="{ on, attrs }">
                                                                                    <span
                                                                                        class="sys-icon"
                                                                                        v-bind="attrs"
                                                                                        v-on="on"
                                                                                    >
                                                                                        <img src="/img/testsysicons/endo-icon.png" alt="">
                                                                                    </span>
                                                                            </template>
                                                                            <span>Эндокринная система</span>
                                                                        </v-tooltip>
                                                                        <p class="sys-text">Эндокринная</p>
                                                                    </td>
                                                                    <td class="tbl-very-good">
                                                                        <span class="table-label">0-2</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.endoSys < 3"
                                                                        >
                                                                            {{ testResults.endoSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-good">
                                                                        <span class="table-label">3-5</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.endoSys > 2 && testResults.endoSys < 6"
                                                                        >
                                                                            {{ testResults.endoSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-risk">
                                                                        <span class="table-label">6-9</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.endoSys > 5 && testResults.endoSys < 10"
                                                                        >
                                                                            {{ testResults.endoSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-bad">
                                                                        <span class="table-label">10></span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.endoSys > 9"
                                                                        >
                                                                            {{ testResults.endoSys }}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr class="tbl-tr">
                                                                    <td class="tbl-sys">
                                                                        <v-tooltip right>
                                                                            <template v-slot:activator="{ on, attrs }">
                                                                                    <span
                                                                                        class="sys-icon"
                                                                                        v-bind="attrs"
                                                                                        v-on="on"
                                                                                    >
                                                                                        <img src="/img/testsysicons/move-icon.png" alt="">
                                                                                    </span>
                                                                            </template>
                                                                            <span>Опорно-двигательная система</span>
                                                                        </v-tooltip>
                                                                        <p class="sys-text">Опорно-двигательная</p>
                                                                    </td>
                                                                    <td class="tbl-very-good">
                                                                        <span class="table-label">0-1</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.opdvigSys < 2"
                                                                        >
                                                                            {{ testResults.opdvigSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-good">
                                                                        <span class="table-label">2-3</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.opdvigSys > 1 && testResults.opdvigSys < 4"
                                                                        >
                                                                            {{ testResults.opdvigSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-risk">
                                                                        <span class="table-label">4-8</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.opdvigSys > 3 && testResults.opdvigSys < 9"
                                                                        >
                                                                            {{ testResults.opdvigSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-bad">
                                                                        <span class="table-label">9></span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.opdvigSys > 8"
                                                                        >
                                                                            {{ testResults.opdvigSys }}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr class="tbl-tr">
                                                                    <td class="tbl-sys">
                                                                        <v-tooltip right>
                                                                            <template v-slot:activator="{ on, attrs }">
                                                                                    <span
                                                                                        class="sys-icon"
                                                                                        v-bind="attrs"
                                                                                        v-on="on"
                                                                                    >
                                                                                        <img src="/img/testsysicons/skin-icon.png" alt="">
                                                                                    </span>
                                                                            </template>
                                                                            <span>Кожа система</span>
                                                                        </v-tooltip>
                                                                        <p class="sys-text">Кожа</p>
                                                                    </td>
                                                                    <td class="tbl-very-good">
                                                                        <span class="table-label">0-1</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.skinSys < 2"
                                                                        >
                                                                            {{ testResults.skinSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-good">
                                                                        <span class="table-label">2-3</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.skinSys > 1 && testResults.skinSys < 4"
                                                                        >
                                                                            {{ testResults.skinSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-risk">
                                                                        <span class="table-label">4-6</span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.skinSys > 3 && testResults.skinSys < 7"
                                                                        >
                                                                            {{ testResults.skinSys }}
                                                                        </span>
                                                                    </td>
                                                                    <td class="tbl-bad">
                                                                        <span class="table-label">7></span>
                                                                        <span class="table-result"
                                                                              v-if="testResults.skinSys > 6"
                                                                        >
                                                                            {{ testResults.skinSys }}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </template>
                                                        </v-simple-table>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div

                                                        v-if="mesTestZone"
                                                    >
                                                        <v-simple-table class="mt-10 mb-10">
                                                            <template v-slot:default>
                                                                <tbody>
                                                                <tr>
                                                                    <td style="width: 450px; background-color: #bcfea4; padding-top: 10px; padding-bottom: 10px">
                                                                        Системы, которые <strong style="text-decoration: underline">работают
                                                                        очень хорошо</strong>:
                                                                        <ul>
                                                                            <li class="span-res-sys" v-if="testResults.gktSys < 3">
                                                                                пищеварительная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.heartSys < 3">
                                                                                сердечно-сосудистая
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.nervSys < 3">
                                                                                нервная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.imunSys < 3">
                                                                                иммунная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.breathSys < 1">
                                                                                дыхательная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.mochaSys < 1">
                                                                                мочеполовая
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.endoSys < 3">
                                                                                эндокринная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.opdvigSys < 2">
                                                                                опорно-двигательная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.skinSys < 2">
                                                                                кожа
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="width: 450px; background-color: #b7e0fe; padding-top: 10px; padding-bottom: 10px">
                                                                        Системы, которые <strong style="text-decoration: underline">работают
                                                                        хорошо</strong>, но уже начался сдвиг в ЗОНУ РИСКА:
                                                                        <ul>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.gktSys > 2 && testResults.gktSys < 5">
                                                                                пищеварительная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.heartSys === 3">
                                                                                сердечно-сосудистая
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.nervSys > 2 && testResults.nervSys < 6">
                                                                                нервная
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.imunSys > 2 && testResults.imunSys < 5">
                                                                                иммунная
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.breathSys > 0 && testResults.breathSys < 4">
                                                                                дыхательная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.mochaSys === 1">
                                                                                мочеполовая
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.endoSys > 2 && testResults.endoSys < 6">
                                                                                эндокринная
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.opdvigSys > 1 && testResults.opdvigSys < 4">
                                                                                опорно-двигательная
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.skinSys > 1 && testResults.skinSys < 4">
                                                                                кожа
                                                                            </li>
                                                                        </ul>
                                                                        Если ничего не менять в питании и образе жизни, то со временем
                                                                        эти системы перейдут в ЗОНУ РИСКА.
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="width: 450px; background-color: #feffb3; padding-top: 10px; padding-bottom: 10px">
                                                                        Системы, которые находятся в самой опасной <strong
                                                                        style="text-decoration: underline">ЗОНЕ РИСКА</strong>:
                                                                        <ul>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.gktSys > 4 && testResults.gktSys < 10">
                                                                                пищеварительная
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.heartSys > 3 && testResults.heartSys < 8">
                                                                                сердечно-сосудистая
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.nervSys > 5 && testResults.nervSys < 10">
                                                                                нервная
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.imunSys > 4 && testResults.imunSys < 8">
                                                                                иммунная
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.breathSys > 3 && testResults.breathSys < 6">
                                                                                дыхательная
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.mochaSys > 1 && testResults.mochaSys < 5">
                                                                                мочеполовая
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.endoSys > 5 && testResults.endoSys < 10">
                                                                                эндокринная
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.opdvigSys > 3 && testResults.opdvigSys < 9">
                                                                                опорно-двигательная
                                                                            </li>
                                                                            <li class="span-res-sys"
                                                                                v-if="testResults.skinSys > 3 && testResults.skinSys < 7">
                                                                                кожа
                                                                            </li>
                                                                        </ul>
                                                                        В любой момент стресс может вызвать сбой какой-либо системы в
                                                                        организме, что может привести к серьезным заболеваниям! <strong
                                                                        style="text-decoration: underline">Медлить нельзя! Надо срочно
                                                                        заняться своим здоровьем!</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="width: 450px; background-color: #ffc5c4; padding-top: 10px; padding-bottom: 10px">
                                                                        <strong style="text-decoration: underline">Системы
                                                                            поражены</strong>, или в ближайшее время могут проявиться
                                                                        заболевания:
                                                                        <ul>
                                                                            <li class="span-res-sys" v-if="testResults.gktSys > 9">
                                                                                пищеварительная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.heartSys > 7">
                                                                                сердечно-сосудистая
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.nervSys > 9">
                                                                                нервная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.imunSys > 7">
                                                                                иммунная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.breathSys > 5">
                                                                                дыхательная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.mochaSys > 4">
                                                                                мочеполовая
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.endoSys > 9">
                                                                                эндокринная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.opdvigSys > 8">
                                                                                опорно-двигательная
                                                                            </li>
                                                                            <li class="span-res-sys" v-if="testResults.skinSys > 6">
                                                                                кожа
                                                                            </li>
                                                                        </ul>
                                                                        Вам <strong style="text-decoration: underline">срочно необходимо
                                                                        обратиться к специалисту</strong>, если вы до сих пор этого не
                                                                        сделали!
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </template>
                                                        </v-simple-table>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesTestReq"
                                                    >
                                                        <div class="chat-block">
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        В ближайшее время, на выбранный вами мессенджер,
                                                                        ваш персональный консультант LR вышлет рекомендации по питанию и укреплению здоровья
                                                                    </p>
                                                                    <p class="mb-3 mr-3">
                                                                        Либо вы можете сами связаться со своим персональным консультантом LR:
                                                                    </p>
                                                                </div>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>
                                            </div>
<!--                                            <div-->
<!--                                                class="chat-typing"-->
<!--                                                v-bind:class="{show: isShow}"-->
<!--                                            >-->
<!--                                                {{ userData.name }} печатает-->
<!--                                                <div class="chat-typing-animate">-->
<!--                                                    <div class="chat-typing-box">-->
<!--                                                        ...-->
<!--                                                        <img src="/img/leedbot/edit.svg" alt="">-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
                                        </div>
<!--                                        <div id="scrollToMe"></div>-->
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </section>
        </transition>
    </v-main>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

import {validationMixin} from 'vuelidate'
import {required, minLength, maxLength, numeric, helpers} from 'vuelidate/lib/validators'
import * as authService from "@/services/auth_service"

const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)

export default {
    name: "HTest",
    mixins: [validationMixin],
    data: () => ({
        isShow: false,
        loading: true,
        lr_number: '',
        errors: {},
        clientData: {
            name: '',
            gender: '',
            age: '',
            phone: '',
            partner: '',
            instrument: 'Тест по здоровью',
            step: 'Новый',
        },
        prospectData: {
            id: '',
            test_results: ''
        },
        testResults: {
            gktSys: 0,
            heartSys: 0,
            nervSys: 0,
            imunSys: 0,
            breathSys: 0,
            mochaSys: 0,
            endoSys: 0,
            opdvigSys: 0,
            skinSys: 0,
        },
        cookieShow: true,
        blockLanding: true,
        blockTest: false,
        disBtnStartTest: false,
        // mesFirst: false,
        // mesSecond: false,
        // disBtnBiz: false,
        // answBizProd: false,
        mesBiz1: true,
        disInpName: false,
        disInpPhone: false,
        disBtnName: false,
        // answName: false,
        // answOk1: false,
        disBtnOk1: false,
        mesBiz2: false,
        mesBiz3: false,
        disBtnM: false,
        disBtnG: false,
        // answGender: false,
        mesBiz4: false,
        disInpAge: false,
        disBtnAge: false,
        // answAge: false,
        mesBiz5: false,
        disBtnBiz5: false,
        btnWhatsappTrue: false,
        // btnTelegramTrue: false,
        btnViberTrue: false,
        disInpWhatsapp: false,
        // disInpTelegram: false,
        disInpViber: false,
        mesTestStart: false,
        disBtnTestStart: false,
        mesTest1: false,
        disBtnTest1Y: false,
        disBtnTest1N: false,
        mesTest2: false,
        disBtnTest2Y: false,
        disBtnTest2N: false,
        mesTest3: false,
        disBtnTest3Y: false,
        disBtnTest3N: false,
        mesTest4: false,
        disBtnTest4Y: false,
        disBtnTest4N: false,
        mesTest5: false,
        disBtnTest5Y: false,
        disBtnTest5N: false,
        mesTest6: false,
        disBtnTest6Y: false,
        disBtnTest6N: false,
        mesTest7: false,
        disBtnTest7Y: false,
        disBtnTest7N: false,
        mesTest8: false,
        disBtnTest8Y: false,
        disBtnTest8N: false,
        mesTest9: false,
        disBtnTest9Y: false,
        disBtnTest9N: false,
        mesTest10: false,
        disBtnTest10Y: false,
        disBtnTest10N: false,
        mesTest11: false,
        disBtnTest11Y: false,
        disBtnTest11N: false,
        mesTest12: false,
        disBtnTest12Y: false,
        disBtnTest12N: false,
        mesTest13: false,
        disBtnTest13Y: false,
        disBtnTest13N: false,
        mesTest14: false,
        disBtnTest14Y: false,
        disBtnTest14N: false,
        mesTest15: false,
        disBtnTest15Y: false,
        disBtnTest15N: false,
        mesTest16: false,
        disBtnTest16Y: false,
        disBtnTest16N: false,
        mesTest17: false,
        disBtnTest17Y: false,
        disBtnTest17N: false,
        mesTest18: false,
        disBtnTest18Y: false,
        disBtnTest18N: false,
        mesTest19: false,
        disBtnTest19Y: false,
        disBtnTest19N: false,
        mesTest20: false,
        disBtnTest20Y: false,
        disBtnTest20N: false,
        mesTest21: false,
        disBtnTest21Y: false,
        disBtnTest21N: false,
        mesTest22: false,
        disBtnTest22Y: false,
        disBtnTest22N: false,
        mesTest23: false,
        disBtnTest23Y: false,
        disBtnTest23N: false,
        mesTest24: false,
        disBtnTest24Y: false,
        disBtnTest24N: false,
        mesTest25: false,
        disBtnTest25Y: false,
        disBtnTest25N: false,
        mesTest26: false,
        disBtnTest26Y: false,
        disBtnTest26N: false,
        mesTest27: false,
        disBtnTest27Y: false,
        disBtnTest27N: false,
        mesTest28: false,
        disBtnTest28Y: false,
        disBtnTest28N: false,
        mesTest29: false,
        disBtnTest29Y: false,
        disBtnTest29N: false,
        mesTest30: false,
        disBtnTest30Y: false,
        disBtnTest30N: false,
        mesTest31: false,
        disBtnTest31Y: false,
        disBtnTest31N: false,
        mesTest32: false,
        disBtnTest32Y: false,
        disBtnTest32N: false,
        mesTest33: false,
        disBtnTest33Y: false,
        disBtnTest33N: false,
        mesTest34: false,
        disBtnTest34Y: false,
        disBtnTest34N: false,
        mesTest35: false,
        disBtnTest35Y: false,
        disBtnTest35N: false,
        mesTest36: false,
        disBtnTest36Y: false,
        disBtnTest36N: false,
        mesTest37: false,
        disBtnTest37Y: false,
        disBtnTest37N: false,
        mesTest38: false,
        disBtnTest38Y: false,
        disBtnTest38N: false,
        mesTest39: false,
        disBtnTest39Y: false,
        disBtnTest39N: false,
        mesTest40: false,
        disBtnTest40Y: false,
        disBtnTest40N: false,
        mesTest41: false,
        disBtnTest41Y: false,
        disBtnTest41N: false,
        mesTest42: false,
        disBtnTest42Y: false,
        disBtnTest42N: false,
        mesTest43: false,
        disBtnTest43Y: false,
        disBtnTest43N: false,
        mesTest44: false,
        disBtnTest44Y: false,
        disBtnTest44N: false,
        mesTest45: false,
        disBtnTest45Y: false,
        disBtnTest45N: false,
        mesTest46: false,
        disBtnTest46Y: false,
        disBtnTest46N: false,
        mesTest47: false,
        disBtnTest47Y: false,
        disBtnTest47N: false,
        mesTestRes: false,
        mesTestZone: false,
        mesTestReq: false,
    }),
    metaInfo: {
        title: 'Тест Хорошее самочувствие',
        meta: [
            {
                vmid: 'description',
                property: 'description',
                content: 'Пройди тест, который покажет, в какой области здоровья есть проблемы, и получи рекомендации специалистов по укреплению и поддержанию здоровья'
            },
            {vmid: 'og:title', property: 'og:title', content: 'Тест Хорошее самочувствие'},
            {
                vmid: 'og:description',
                property: 'og:description',
                content: 'Пройди тест, который покажет, в какой области здоровья есть проблемы, и получи рекомендации специалистов по укреплению и поддержанию здоровья'
            },
            {vmid: 'og:image', property: 'og:image', content: '/img/LogoLifePlus.png'},
        ],
    },
    created() {
        if (!this.$route.query.p) {
            if (this.$cookies.isKey('lifeplus_partner')) {
                const partnerNum = this.$cookies.get('lifeplus_partner')
                this.$router.push ({name: 'HTest', query: { p: partnerNum }})
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
        nameErrors() {
            const errors = []
            if (!this.$v.clientData.name.$dirty) return errors
            !this.$v.clientData.name.alpha && errors.push('Только буквы')
            !this.$v.clientData.name.minLength && errors.push('Минимум 2 буквы')
            !this.$v.clientData.name.maxLength && errors.push('Максимум 30 букв')
            !this.$v.clientData.name.required && errors.push('Обязательно для заполнения')
            return errors
        },
        ageErrors() {
            const errors = []
            if (!this.$v.clientData.age.$dirty) return errors
            !this.$v.clientData.age.minLength && errors.push('Минимум 1 цифра')
            !this.$v.clientData.age.maxLength && errors.push('Максимум 2 цифры')
            !this.$v.clientData.age.required && errors.push('Обязательно для заполнения')
            !this.$v.clientData.age.numeric && errors.push('Только цифры')
            return errors
        },
        phoneErrors() {
            const errors = []
            if (!this.$v.clientData.phone.$dirty) return errors
            !this.$v.clientData.phone.minLength && errors.push('Минимум 5 цифр')
            !this.$v.clientData.phone.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.clientData.phone.required && errors.push('Обязательно для заполнения')
            !this.$v.clientData.phone.numeric && errors.push('Только цифры')
            return errors
        },
        phoneWhatsappErrors() {
            const errors = []
            if (!this.$v.clientData.phone_whatsapp.$dirty) return errors
            !this.$v.clientData.phone_whatsapp.numeric && errors.push('Только цифры')
            !this.$v.clientData.phone_whatsapp.minLength && errors.push('Минимум 5 цифр')
            !this.$v.clientData.phone_whatsapp.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.clientData.phone_whatsapp.required && errors.push('Обязательно для заполнения')
            return errors
        },
        phoneViberErrors() {
            const errors = []
            if (!this.$v.clientData.phone_viber.$dirty) return errors
            !this.$v.clientData.phone_viber.numeric && errors.push('Только цифры')
            !this.$v.clientData.phone_viber.minLength && errors.push('Минимум 5 цифр')
            !this.$v.clientData.phone_viber.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.clientData.phone_viber.required && errors.push('Обязательно для заполнения')
            return errors
        },
        // telegramErrors() {
        //     const errors = []
        //     if (!this.$v.clientData.telegram.$dirty) return errors
        //     !this.$v.clientData.telegram.required && errors.push('Обязательно для заполнения')
        //     return errors
        // }
    },
    methods: {
        ...mapActions({
            showPartnerAccess: 'user/showPartnerAccess',
            addNotification: 'application/addNotification',
            createProspect: 'user/addClient',
            updateProspect: 'prospect/updateProspect',
        }),
        cookieAccept() {
            this.cookieShow = false
            this.$cookies.set('lifeplus_cookie', 'accept', '12m')
        },
        // scrollToMe () {
        //     let scrollBottom = document.getElementById("scrollToMe")
        //     scrollBottom.scrollIntoView({ behavior: "smooth" })
        // },
        btnStartTest() {
            let v = this
            this.disBtnStartTest = true
            setTimeout(function () {
                v.blockLanding = false
            }, 500)
            setTimeout(function () {
                v.blockTest = true
            }, 1500)
        },
        btnOk1() {
            this.disBtnOk1 = true
            this.mesBiz1 = false
            this.showMesBiz2()
        },
        showMesBiz2() {
            let v = this
            setTimeout(function () {
                v.mesBiz2 = true
            }, 1000)
        },
        myName() {
            this.$v.clientData.name.$touch()
            if (!this.$v.clientData.name.$invalid) {
                this.disBtnName = true
                this.disInpName = true
                this.mesBiz2 = false
                this.showMesBiz3()
            }
        },
        showMesBiz3() {
            let v = this
            setTimeout(function () {
                v.mesBiz3 = true
            }, 1000)
        },
        btnM() {
            this.disBtnM = true
            this.disBtnG = true
            this.clientData.gender = 'м'
            this.mesBiz3 = false
            this.showMesBiz4()
        },
        btnG() {
            this.disBtnM = true
            this.disBtnG = true
            this.clientData.gender = 'ж'
            this.mesBiz3 = false
            this.showMesBiz4()
        },
        showMesBiz4() {
            let v = this
            setTimeout(function () {
                v.mesBiz4 = true
            }, 1000)
        },
        myAge() {
            this.$v.clientData.age.$touch()
            if (!this.$v.clientData.age.$invalid) {
                this.disInpAge = true
                this.disBtnAge = true
                this.mesBiz4 = false
                this.showMesBiz5()
            }
        },
        showMesBiz5() {
            let v = this
            setTimeout(function () {
                v.mesBiz5 = true
            }, 1000)
        },
        btnWhatsapp() {
            this.btnWhatsappTrue = true
            this.btnViberTrue = false
            // this.btnTelegramTrue = false
        },
        // btnTelegram() {
        //     this.btnWhatsappTrue = false
        //     this.btnViberTrue = false
        //     // this.btnTelegramTrue = true
        // },
        btnViber() {
            this.btnWhatsappTrue = false
            this.btnViberTrue = true
            // this.btnTelegramTrue = false
        },
        btnSendBiz() {
            this.$v.clientData.phone_whatsapp.$touch() || this.$v.clientData.phone_viber.$touch()
            if (!this.$v.clientData.phone_whatsapp.$invalid || !this.$v.clientData.phone_viber.$invalid) {
                this.disBtnBiz5 = true
                this.disInpWhatsapp = true
                this.disInpViber = true
                // this.disInpTelegram = true
                this.createProspect(this.clientData)
                    .then((response) => {
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            })
                            this.prospectData.id = response.data.prospect_id
                            this.mesBiz5 = false
                            this.showMesTestStart()
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
        showMesTestStart() {
            let v = this
            setTimeout(function () {
                v.mesTestStart = true
            }, 1000)
        },
        btnTestStart() {
            this.disBtnTestStart = true
            this.mesTestStart = false
            this.showMesTest1()
        },
        showMesTest1() {
            let v = this
            setTimeout(function () {
                v.mesTest1 = true
            }, 1000)
        },
        btnTest1Y() {
            this.disBtnTest1Y = true
            this.disBtnTest1N = true
            this.testResults.gktSys += 1
            this.testResults.heartSys += 1
            this.testResults.nervSys += 1
            this.testResults.imunSys += 1
            this.testResults.endoSys += 1
            this.mesTest1 = false
            this.showMesTest2()
        },
        btnTest1N() {
            this.disBtnTest1Y = true
            this.disBtnTest1N = true
            this.mesTest1 = false
            this.showMesTest2()
        },
        showMesTest2() {
            let v = this
            setTimeout(function () {
                v.mesTest2 = true
            }, 1000)
        },
        btnTest2Y() {
            this.disBtnTest2Y = true
            this.disBtnTest2N = true
            this.testResults.imunSys += 1
            this.testResults.skinSys += 1
            this.mesTest2 = false
            this.showMesTest3()
        },
        btnTest2N() {
            this.disBtnTest2Y = true
            this.disBtnTest2N = true
            this.mesTest2 = false
            this.showMesTest3()
        },
        showMesTest3() {
            let v = this
            setTimeout(function () {
                v.mesTest3 = true
            }, 1000)
        },
        btnTest3Y() {
            this.disBtnTest3Y = true
            this.disBtnTest3N = true
            this.testResults.gktSys += 1
            this.testResults.breathSys += 1
            this.testResults.mochaSys += 1
            this.mesTest3 = false
            this.showMesTest4()
        },
        btnTest3N() {
            this.disBtnTest3Y = true
            this.disBtnTest3N = true
            this.mesTest3 = false
            this.showMesTest4()
        },
        showMesTest4() {
            let v = this
            setTimeout(function () {
                v.mesTest4 = true
            }, 1000)
        },
        btnTest4Y() {
            this.disBtnTest4Y = true
            this.disBtnTest4N = true
            this.testResults.gktSys += 1
            this.testResults.imunSys += 1
            this.mesTest4 = false
            this.showMesTest5()
        },
        btnTest4N() {
            this.disBtnTest4Y = true
            this.disBtnTest4N = true
            this.mesTest4 = false
            this.showMesTest5()
        },
        showMesTest5() {
            let v = this
            setTimeout(function () {
                v.mesTest5 = true
            }, 1000)
        },
        btnTest5Y() {
            this.disBtnTest5Y = true
            this.disBtnTest5N = true
            this.testResults.gktSys += 1
            this.testResults.heartSys += 1
            this.testResults.imunSys += 1
            this.testResults.breathSys += 1
            this.mesTest5 = false
            if (this.clientData.gender === 'ж') {
                this.showMesTest6()
            } else {
                this.showMesTest7()
            }

        },
        btnTest5N() {
            this.disBtnTest5Y = true
            this.disBtnTest5N = true
            this.mesTest5 = false
            if (this.clientData.gender === 'ж') {
                this.showMesTest6()
            } else {
                this.showMesTest7()
            }
        },
        showMesTest6() {
            let v = this
            setTimeout(function () {
                v.mesTest6 = true
            }, 1000)
        },
        btnTest6Y() {
            this.disBtnTest6Y = true
            this.disBtnTest6N = true
            this.testResults.gktSys += 1
            this.testResults.mochaSys += 1
            this.testResults.endoSys += 1
            this.mesTest6 = false
            this.showMesTest7()
        },
        btnTest6N() {
            this.disBtnTest6Y = true
            this.disBtnTest6N = true
            this.mesTest6 = false
            this.showMesTest7()
        },
        showMesTest7() {
            let v = this
            setTimeout(function () {
                v.mesTest7 = true
            }, 1000)
        },
        btnTest7Y() {
            this.disBtnTest7Y = true
            this.disBtnTest7N = true
            this.testResults.gktSys += 1
            this.testResults.imunSys += 1
            this.mesTest7 = false
            this.showMesTest8()
        },
        btnTest7N() {
            this.disBtnTest7Y = true
            this.disBtnTest7N = true
            this.mesTest7 = false
            this.showMesTest8()
        },
        showMesTest8() {
            let v = this
            setTimeout(function () {
                v.mesTest8 = true
            }, 1000)
        },
        btnTest8Y() {
            this.disBtnTest8Y = true
            this.disBtnTest8N = true
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.mesTest8 = false
            this.showMesTest9()
        },
        btnTest8N() {
            this.disBtnTest8Y = true
            this.disBtnTest8N = true
            this.mesTest8 = false
            this.showMesTest9()
        },
        showMesTest9() {
            let v = this
            setTimeout(function () {
                v.mesTest9 = true
            }, 1000)
        },
        btnTest9Y() {
            this.disBtnTest9Y = true
            this.disBtnTest9N = true
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.mesTest9 = false
            this.showMesTest10()
        },
        btnTest9N() {
            this.disBtnTest9Y = true
            this.disBtnTest9N = true
            this.mesTest9 = false
            this.showMesTest10()
        },
        showMesTest10() {
            let v = this
            setTimeout(function () {
                v.mesTest10 = true
            }, 1000)
        },
        btnTest10Y() {
            this.disBtnTest10Y = true
            this.disBtnTest10N = true
            this.testResults.gktSys += 1
            this.testResults.imunSys += 1
            this.testResults.breathSys += 1
            this.testResults.skinSys += 1
            this.mesTest10 = false
            this.showMesTest11()
        },
        btnTest10N() {
            this.disBtnTest10Y = true
            this.disBtnTest10N = true
            this.mesTest10 = false
            this.showMesTest11()
        },
        showMesTest11() {
            let v = this
            setTimeout(function () {
                v.mesTest11 = true
            }, 1000)
        },
        btnTest11Y() {
            this.disBtnTest11Y = true
            this.disBtnTest11N = true
            this.testResults.heartSys += 1
            this.testResults.nervSys += 1
            this.testResults.mochaSys += 1
            this.testResults.skinSys += 1
            this.mesTest11 = false
            this.showMesTest12()
        },
        btnTest11N() {
            this.disBtnTest11Y = true
            this.disBtnTest11N = true
            this.mesTest11 = false
            this.showMesTest12()
        },
        showMesTest12() {
            let v = this
            setTimeout(function () {
                v.mesTest12 = true
            }, 1000)
        },
        btnTest12Y() {
            this.disBtnTest12Y = true
            this.disBtnTest12N = true
            this.testResults.heartSys += 1
            this.testResults.nervSys += 1
            this.testResults.breathSys += 1
            this.testResults.skinSys += 1
            this.mesTest12 = false
            this.showMesTest13()
        },
        btnTest12N() {
            this.disBtnTest12Y = true
            this.disBtnTest12N = true
            this.mesTest12 = false
            this.showMesTest13()
        },
        showMesTest13() {
            let v = this
            setTimeout(function () {
                v.mesTest13 = true
            }, 1000)
        },
        btnTest13Y() {
            this.disBtnTest13Y = true
            this.disBtnTest13N = true
            this.testResults.heartSys += 1
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.mesTest13 = false
            this.showMesTest14()
        },
        btnTest13N() {
            this.disBtnTest13Y = true
            this.disBtnTest13N = true
            this.mesTest13 = false
            this.showMesTest14()
        },
        showMesTest14() {
            let v = this
            setTimeout(function () {
                v.mesTest14 = true
            }, 1000)
        },
        btnTest14Y() {
            this.disBtnTest14Y = true
            this.disBtnTest14N = true
            this.testResults.gktSys += 1
            this.testResults.imunSys += 1
            this.mesTest14 = false
            this.showMesTest15()
        },
        btnTest14N() {
            this.disBtnTest14Y = true
            this.disBtnTest14N = true
            this.mesTest14 = false
            this.showMesTest15()
        },
        showMesTest15() {
            let v = this
            setTimeout(function () {
                v.mesTest15 = true
            }, 1000)
        },
        btnTest15Y() {
            this.disBtnTest15Y = true
            this.disBtnTest15N = true
            this.testResults.heartSys += 1
            this.testResults.nervSys += 1
            this.testResults.imunSys += 1
            this.testResults.endoSys += 1
            this.testResults.skinSys += 1
            this.mesTest15 = false
            this.showMesTest16()
        },
        btnTest15N() {
            this.disBtnTest15Y = true
            this.disBtnTest15N = true
            this.mesTest15 = false
            this.showMesTest16()
        },
        showMesTest16() {
            let v = this
            setTimeout(function () {
                v.mesTest16 = true
            }, 1000)
        },
        btnTest16Y() {
            this.disBtnTest16Y = true
            this.disBtnTest16N = true
            this.testResults.gktSys += 1
            this.testResults.mochaSys += 1
            this.testResults.endoSys += 1
            this.testResults.opdvigSys += 1
            this.testResults.skinSys += 1
            this.mesTest16 = false
            this.showMesTest17()
        },
        btnTest16N() {
            this.disBtnTest16Y = true
            this.disBtnTest16N = true
            this.mesTest16 = false
            this.showMesTest17()
        },
        showMesTest17() {
            let v = this
            setTimeout(function () {
                v.mesTest17 = true
            }, 1000)
        },
        btnTest17Y() {
            this.disBtnTest17Y = true
            this.disBtnTest17N = true
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.mesTest17 = false
            this.showMesTest18()
        },
        btnTest17N() {
            this.disBtnTest17Y = true
            this.disBtnTest17N = true
            this.mesTest17 = false
            this.showMesTest18()
        },
        showMesTest18() {
            let v = this
            setTimeout(function () {
                v.mesTest18 = true
            }, 1000)
        },
        btnTest18Y() {
            this.disBtnTest18Y = true
            this.disBtnTest18N = true
            this.testResults.gktSys += 1
            this.testResults.breathSys += 1
            this.mesTest18 = false
            this.showMesTest19()
        },
        btnTest18N() {
            this.disBtnTest18Y = true
            this.disBtnTest18N = true
            this.mesTest18 = false
            this.showMesTest19()
        },
        showMesTest19() {
            let v = this
            setTimeout(function () {
                v.mesTest19 = true
            }, 1000)
        },
        btnTest19Y() {
            this.disBtnTest19Y = true
            this.disBtnTest19N = true
            this.testResults.gktSys += 1
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.mesTest19 = false
            this.showMesTest20()
        },
        btnTest19N() {
            this.disBtnTest19Y = true
            this.disBtnTest19N = true
            this.mesTest19 = false
            this.showMesTest20()
        },
        showMesTest20() {
            let v = this
            setTimeout(function () {
                v.mesTest20 = true
            }, 1000)
        },
        btnTest20Y() {
            this.disBtnTest20Y = true
            this.disBtnTest20N = true
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.testResults.opdvigSys += 1
            this.mesTest20 = false
            if (this.clientData.gender === 'ж') {
                this.showMesTest21()
            } else {
                this.showMesTest22()
            }
        },
        btnTest20N() {
            this.disBtnTest20Y = true
            this.disBtnTest20N = true
            this.mesTest20 = false
            if (this.clientData.gender === 'ж') {
                this.showMesTest21()
            } else {
                this.showMesTest22()
            }
        },
        showMesTest21() {
            let v = this
            setTimeout(function () {
                v.mesTest21 = true
            }, 1000)
        },
        btnTest21Y() {
            this.disBtnTest21Y = true
            this.disBtnTest21N = true
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.testResults.opdvigSys += 1
            this.mesTest21 = false
            this.showMesTest22()
        },
        btnTest21N() {
            this.disBtnTest21Y = true
            this.disBtnTest21N = true
            this.mesTest21 = false
            this.showMesTest22()
        },
        showMesTest22() {
            let v = this
            setTimeout(function () {
                v.mesTest22 = true
            }, 1000)
        },
        btnTest22Y() {
            this.disBtnTest22Y = true
            this.disBtnTest22N = true
            this.testResults.mochaSys += 1
            this.mesTest22 = false
            this.showMesTest23()
        },
        btnTest22N() {
            this.disBtnTest22Y = true
            this.disBtnTest22N = true
            this.mesTest22 = false
            this.showMesTest23()
        },
        showMesTest23() {
            let v = this
            setTimeout(function () {
                v.mesTest23 = true
            }, 1000)
        },
        btnTest23Y() {
            this.disBtnTest23Y = true
            this.disBtnTest23N = true
            this.testResults.skinSys += 1
            this.mesTest23 = false
            this.showMesTest24()
        },
        btnTest23N() {
            this.disBtnTest23Y = true
            this.disBtnTest23N = true
            this.mesTest23 = false
            this.showMesTest24()
        },
        showMesTest24() {
            let v = this
            setTimeout(function () {
                v.mesTest24 = true
            }, 1000)
        },
        btnTest24Y() {
            this.disBtnTest24Y = true
            this.disBtnTest24N = true
            this.testResults.heartSys += 1
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.testResults.opdvigSys += 1
            this.mesTest24 = false
            this.showMesTest25()
        },
        btnTest24N() {
            this.disBtnTest24Y = true
            this.disBtnTest24N = true
            this.mesTest24 = false
            this.showMesTest25()
        },
        showMesTest25() {
            let v = this
            setTimeout(function () {
                v.mesTest25 = true
            }, 1000)
        },
        btnTest25Y() {
            this.disBtnTest25Y = true
            this.disBtnTest25N = true
            this.testResults.heartSys += 1
            this.testResults.imunSys += 1
            this.testResults.opdvigSys += 1
            this.mesTest25 = false
            this.showMesTest26()
        },
        btnTest25N() {
            this.disBtnTest25Y = true
            this.disBtnTest25N = true
            this.mesTest25 = false
            this.showMesTest26()
        },
        showMesTest26() {
            let v = this
            setTimeout(function () {
                v.mesTest26 = true
            }, 1000)
        },
        btnTest26Y() {
            this.disBtnTest26Y = true
            this.disBtnTest26N = true
            this.testResults.nervSys += 1
            this.testResults.imunSys += 1
            this.testResults.endoSys += 1
            this.testResults.opdvigSys += 1
            this.mesTest26 = false
            this.showMesTest27()
        },
        btnTest26N() {
            this.disBtnTest26Y = true
            this.disBtnTest26N = true
            this.mesTest26 = false
            this.showMesTest27()
        },
        showMesTest27() {
            let v = this
            setTimeout(function () {
                v.mesTest27 = true
            }, 1000)
        },
        btnTest27Y() {
            this.disBtnTest27Y = true
            this.disBtnTest27N = true
            this.testResults.heartSys += 1
            this.testResults.breathSys += 1
            this.testResults.opdvigSys += 1
            this.mesTest27 = false
            this.showMesTest28()
        },
        btnTest27N() {
            this.disBtnTest27Y = true
            this.disBtnTest27N = true
            this.mesTest27 = false
            this.showMesTest28()
        },
        showMesTest28() {
            let v = this
            setTimeout(function () {
                v.mesTest28 = true
            }, 1000)
        },
        btnTest28Y() {
            this.disBtnTest28Y = true
            this.disBtnTest28N = true
            this.testResults.gktSys += 1
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.testResults.skinSys += 1
            this.mesTest28 = false
            this.showMesTest29()
        },
        btnTest28N() {
            this.disBtnTest28Y = true
            this.disBtnTest28N = true
            this.mesTest28 = false
            this.showMesTest29()
        },
        showMesTest29() {
            let v = this
            setTimeout(function () {
                v.mesTest29 = true
            }, 1000)
        },
        btnTest29Y() {
            this.disBtnTest29Y = true
            this.disBtnTest29N = true
            this.testResults.gktSys += 1
            this.testResults.heartSys += 1
            this.testResults.imunSys += 1
            this.testResults.endoSys += 1
            this.mesTest29 = false
            this.showMesTest30()
        },
        btnTest29N() {
            this.disBtnTest29Y = true
            this.disBtnTest29N = true
            this.mesTest29 = false
            this.showMesTest30()
        },
        showMesTest30() {
            let v = this
            setTimeout(function () {
                v.mesTest30 = true
            }, 1000)
        },
        btnTest30Y() {
            this.disBtnTest30Y = true
            this.disBtnTest30N = true
            this.testResults.gktSys += 1
            this.testResults.nervSys += 1
            this.testResults.skinSys += 1
            this.mesTest30 = false
            this.showMesTest31()
        },
        btnTest30N() {
            this.disBtnTest30Y = true
            this.disBtnTest30N = true
            this.mesTest30 = false
            this.showMesTest31()
        },
        showMesTest31() {
            let v = this
            setTimeout(function () {
                v.mesTest31 = true
            }, 1000)
        },
        btnTest31Y() {
            this.disBtnTest31Y = true
            this.disBtnTest31N = true
            this.testResults.gktSys += 1
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.mesTest31 = false
            this.showMesTest32()
        },
        btnTest31N() {
            this.disBtnTest31Y = true
            this.disBtnTest31N = true
            this.mesTest31 = false
            this.showMesTest32()
        },
        showMesTest32() {
            let v = this
            setTimeout(function () {
                v.mesTest32 = true
            }, 1000)
        },
        btnTest32Y() {
            this.disBtnTest32Y = true
            this.disBtnTest32N = true
            this.testResults.gktSys += 1
            this.testResults.opdvigSys += 1
            this.mesTest32 = false
            this.showMesTest33()
        },
        btnTest32N() {
            this.disBtnTest32Y = true
            this.disBtnTest32N = true
            this.mesTest32 = false
            this.showMesTest33()
        },
        showMesTest33() {
            let v = this
            setTimeout(function () {
                v.mesTest33 = true
            }, 1000)
        },
        btnTest33Y() {
            this.disBtnTest33Y = true
            this.disBtnTest33N = true
            this.testResults.gktSys += 1
            this.testResults.mochaSys += 1
            this.mesTest33 = false
            this.showMesTest34()
        },
        btnTest33N() {
            this.disBtnTest33Y = true
            this.disBtnTest33N = true
            this.mesTest33 = false
            this.showMesTest34()
        },
        showMesTest34() {
            let v = this
            setTimeout(function () {
                v.mesTest34 = true
            }, 1000)
        },
        btnTest34Y() {
            this.disBtnTest34Y = true
            this.disBtnTest34N = true
            this.testResults.gktSys += 1
            this.testResults.heartSys += 1
            this.mesTest34 = false
            this.showMesTest35()
        },
        btnTest34N() {
            this.disBtnTest34Y = true
            this.disBtnTest34N = true
            this.mesTest34 = false
            this.showMesTest35()
        },
        showMesTest35() {
            let v = this
            setTimeout(function () {
                v.mesTest35 = true
            }, 1000)
        },
        btnTest35Y() {
            this.disBtnTest35Y = true
            this.disBtnTest35N = true
            this.testResults.gktSys += 1
            this.testResults.heartSys += 1
            this.mesTest35 = false
            this.showMesTest36()
        },
        btnTest35N() {
            this.disBtnTest35Y = true
            this.disBtnTest35N = true
            this.mesTest35 = false
            this.showMesTest36()
        },
        showMesTest36() {
            let v = this
            setTimeout(function () {
                v.mesTest36 = true
            }, 1000)
        },
        btnTest36Y() {
            this.disBtnTest36Y = true
            this.disBtnTest36N = true
            this.testResults.heartSys += 1
            this.testResults.nervSys += 1
            this.testResults.opdvigSys += 1
            this.mesTest36 = false
            this.showMesTest37()
        },
        btnTest36N() {
            this.disBtnTest36Y = true
            this.disBtnTest36N = true
            this.mesTest36 = false
            this.showMesTest37()
        },
        showMesTest37() {
            let v = this
            setTimeout(function () {
                v.mesTest37 = true
            }, 1000)
        },
        btnTest37Y() {
            this.disBtnTest37Y = true
            this.disBtnTest37N = true
            this.testResults.imunSys += 1
            this.testResults.breathSys += 1
            this.testResults.skinSys += 1
            this.mesTest37 = false
            this.showMesTest38()
        },
        btnTest37N() {
            this.disBtnTest37Y = true
            this.disBtnTest37N = true
            this.mesTest37 = false
            this.showMesTest38()
        },
        showMesTest38() {
            let v = this
            setTimeout(function () {
                v.mesTest38 = true
            }, 1000)
        },
        btnTest38Y() {
            this.disBtnTest38Y = true
            this.disBtnTest38N = true
            this.testResults.heartSys += 1
            this.testResults.endoSys += 1
            this.mesTest38 = false
            this.showMesTest39()
        },
        btnTest38N() {
            this.disBtnTest38Y = true
            this.disBtnTest38N = true
            this.mesTest38 = false
            this.showMesTest39()
        },
        showMesTest39() {
            let v = this
            setTimeout(function () {
                v.mesTest39 = true
            }, 1000)
        },
        btnTest39Y() {
            this.disBtnTest39Y = true
            this.disBtnTest39N = true
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.testResults.opdvigSys += 1
            this.mesTest39 = false
            this.showMesTest40()
        },
        btnTest39N() {
            this.disBtnTest39Y = true
            this.disBtnTest39N = true
            this.mesTest39 = false
            this.showMesTest40()
        },
        showMesTest40() {
            let v = this
            setTimeout(function () {
                v.mesTest40 = true
            }, 1000)
        },
        btnTest40Y() {
            this.disBtnTest40Y = true
            this.disBtnTest40N = true
            this.testResults.gktSys += 1
            this.testResults.imunSys += 1
            this.mesTest40 = false
            this.showMesTest41()
        },
        btnTest40N() {
            this.disBtnTest40Y = true
            this.disBtnTest40N = true
            this.mesTest40 = false
            this.showMesTest41()
        },
        showMesTest41() {
            let v = this
            setTimeout(function () {
                v.mesTest41 = true
            }, 1000)
        },
        btnTest41Y() {
            this.disBtnTest41Y = true
            this.disBtnTest41N = true
            this.testResults.gktSys += 1
            this.testResults.imunSys += 1
            this.testResults.mochaSys += 1
            this.mesTest41 = false
            this.showMesTest42()
        },
        btnTest41N() {
            this.disBtnTest41Y = true
            this.disBtnTest41N = true
            this.mesTest41 = false
            this.showMesTest42()
        },
        showMesTest42() {
            let v = this
            setTimeout(function () {
                v.mesTest42 = true
            }, 1000)
        },
        btnTest42Y() {
            this.disBtnTest42Y = true
            this.disBtnTest42N = true
            this.testResults.gktSys += 1
            this.testResults.opdvigSys += 1
            this.mesTest42 = false
            this.showMesTest43()
        },
        btnTest42N() {
            this.disBtnTest42Y = true
            this.disBtnTest42N = true
            this.mesTest42 = false
            this.showMesTest43()
        },
        showMesTest43() {
            let v = this
            setTimeout(function () {
                v.mesTest43 = true
            }, 1000)
        },
        btnTest43Y() {
            this.disBtnTest43Y = true
            this.disBtnTest43N = true
            this.testResults.gktSys += 1
            this.testResults.nervSys += 1
            this.mesTest43 = false
            this.showMesTest44()
        },
        btnTest43N() {
            this.disBtnTest43Y = true
            this.disBtnTest43N = true
            this.mesTest43 = false
            this.showMesTest44()
        },
        showMesTest44() {
            let v = this
            setTimeout(function () {
                v.mesTest44 = true
            }, 1000)
        },
        btnTest44Y() {
            this.disBtnTest44Y = true
            this.disBtnTest44N = true
            this.testResults.gktSys += 1
            this.testResults.nervSys += 1
            this.testResults.endoSys += 1
            this.mesTest44 = false
            this.showMesTest45()
        },
        btnTest44N() {
            this.disBtnTest44Y = true
            this.disBtnTest44N = true
            this.mesTest44 = false
            this.showMesTest45()
        },
        showMesTest45() {
            let v = this
            setTimeout(function () {
                v.mesTest45 = true
            }, 1000)
        },
        btnTest45Y() {
            this.disBtnTest45Y = true
            this.disBtnTest45N = true
            this.testResults.gktSys += 1
            this.testResults.heartSys += 1
            this.testResults.nervSys += 1
            this.testResults.imunSys += 1
            this.testResults.endoSys += 1
            this.testResults.opdvigSys += 1
            this.mesTest45 = false
            this.showMesTest46()
        },
        btnTest45N() {
            this.disBtnTest45Y = true
            this.disBtnTest45N = true
            this.mesTest45 = false
            this.showMesTest46()
        },
        showMesTest46() {
            let v = this
            setTimeout(function () {
                v.mesTest46 = true
            }, 1000)
        },
        btnTest46Y() {
            this.disBtnTest46Y = true
            this.disBtnTest46N = true
            this.testResults.gktSys += 1
            this.testResults.breathSys += 1
            this.mesTest46 = false
            this.showMesTest47()
        },
        btnTest46N() {
            this.disBtnTest46Y = true
            this.disBtnTest46N = true
            this.mesTest46 = false
            this.showMesTest47()
        },
        showMesTest47() {
            let v = this
            setTimeout(function () {
                v.mesTest47 = true
            }, 1000)
        },
        btnTest47Y() {
            this.disBtnTest47Y = true
            this.disBtnTest47N = true
            this.testResults.skinSys += 1
            this.prospectData.test_results = this.testResults.gktSys + ',' + this.testResults.heartSys + ',' + this.testResults.nervSys + ',' + this.testResults.imunSys + ',' + this.testResults.breathSys + ',' + this.testResults.mochaSys + ',' + this.testResults.endoSys + ',' + this.testResults.opdvigSys + ',' + this.testResults.skinSys
            this.mesTest47 = false
            this.showMesTestEnd()
            authService.updateProspect(this.prospectData.id, this.prospectData)
                .then((response) => {
                    this.updateProspect(response.data)
                    if (response.data && response.data.success) {
                        this.errors = {}
                        this.loading = false
                        this.addNotification({
                            show: true,
                            text: response.data.message,
                            color: 'success'
                        })
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
        },
        btnTest47N() {
            this.disBtnTest47Y = true
            this.disBtnTest47N = true
            this.prospectData.test_results = this.testResults.gktSys + ',' + this.testResults.heartSys + ',' + this.testResults.nervSys + ',' + this.testResults.imunSys + ',' + this.testResults.breathSys + ',' + this.testResults.mochaSys + ',' + this.testResults.endoSys + ',' + this.testResults.opdvigSys + ',' + this.testResults.skinSys
            this.mesTest47 = false
            this.showMesTestEnd()
            authService.updateProspect(this.prospectData.id, this.prospectData)
                .then((response) => {
                    this.updateProspect(response.data)
                    if (response.data && response.data.success) {
                        this.errors = {}
                        this.loading = false
                        this.addNotification({
                            show: true,
                            text: response.data.message,
                            color: 'success'
                        })
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
        },
        showMesTestEnd() {
            let v = this
            setTimeout(function () {
                v.mesTestRes = true
            }, 1000)
            setTimeout(function () {
                v.mesTestZone = true
            }, 6000)
            setTimeout(function () {
                v.mesTestReq = true
            }, 19000)
        },
    },
    mounted() {
        this.showPartnerAccess(this.$route.query.p)
        this.loading = false

        // this.showTyping()

        this.clientData.partner = this.$route.query.p
    },
    // updated() {
    //     this.scrollToMe()
    // },
    validations: {
        clientData: {
            name: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(30),
                alpha
            },
            age: {
                required,
                numeric,
                minLength: minLength(1),
                maxLength: maxLength(2)
            },
            income_want: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(191)
            },
            phone: {
                required,
                numeric,
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
            // telegram: {
            //     required
            // }
        }
    }
}
</script>

<style lang="sass">
#htest-main
    background-color: #FCFAF8
    background-position: top right
    background-repeat: no-repeat
    background-size: contain
    position: relative
    background-image: linear-gradient(180deg, #002416 0%, #03311F 100%)

.htest-main
    background-color: #FCFAF8 !important

#htest-start
    background-color: #FCFAF8
    padding-bottom: 60px
    padding-top: 40px

#htest-feedback
    background-color: #f2f2f2

.htest-h2-feedback
    text-align: center
    font-size: 32px
    margin-top: 20px
    margin-bottom: 40px
    padding: 0 10px
    font-weight: 400

.htest-feedback
    background-color: #fff
    padding: 30px 40px
    border-radius: 5px
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)

.htest-feedback p
    color: #333333
    font-style: italic

.htest-fb-who
    padding-top: 10px

.htest-fb-avatar
    top: -10px
    margin-bottom: 0
    display: inline-block

.htest-fb-text
    display: inline-block
    margin-left: 20px

.htest-fb-text h3
    color: #333333

.htest-fb-text p
    color: #666666

.htest-img
    box-shadow: 10px 10px 0 0 #03311F

.htest-divider
    text-align: center
    margin: 40px 0

.htest-divider .v-icon
    color: #03311F

.media-img
    display: none

.htest-food
    background-color: #03311F
    padding: 40px
    position: absolute
    top: 15%
    right: -40px
    z-index: 10

.htest-h1-food
    font-size: 40px
    line-height: 48px
    color: white
    margin-bottom: 40px
    font-weight: 400

.htest-subtitle-food
    font-size: 18px
    font-weight: 300
    color: white
    margin-bottom: 40px

.htest-btn-food-div
    margin-bottom: 5px

.htest-food-btn
    width: 60px
    display: inline-block

.htest-food-btn-txt
    display: inline-block
    margin-bottom: 0 !important
    color: #002617

.htest-btn-fb-div
    margin-top: 40px
    margin-bottom: 60px

.htest-fb-btn .v-btn
    margin-right: 0 !important

.htest-fb-btn-txt
    color: #fff
    margin-bottom: 0 !important

.htest-list-item
    margin-right: 10px

.htest-list-item:last-child
    margin-right: 0

.htest-video-div
    margin-bottom: 40px

.htest-video-btn
    width: 60px
    display: inline-block

.htest-video-btn-txt
    display: inline-block
    margin-bottom: 0 !important
    color: #002617

.htest-line-title
    position: absolute
    top: 50%
    left: 50%
    width: calc(100% + 20px)
    height: calc(100% + 20px)
    -webkit-transform: translate(-50%,-50%)
    -ms-transform: translate(-50%,-50%)
    transform: translate(-50%,-50%)
    overflow: visible

.htest-h2-main-view
    font-size: 24px
    margin-bottom: 20px

.htest-h2-steps
    font-size: 24px
    margin-bottom: 23px

.htest-line-title path
    stroke: #03311F
    stroke-width: 9
    fill: none
    opacity: 1
    stroke-dasharray: 1500 1500
    -webkit-transition: .3s
    -o-transition: .3s
    transition: .3s

.p-htest
    font-size: 16px

.htest-divider
    text-align: center
    margin: 40px 0

.htest-divider .v-icon
    color: #03311F

.htest-border-left
    border-left: 3px solid #03311F
    padding-left: 20px

.htest-ul-steps, .htest-ul-award
    font-size: 16px
    list-style-type: none
    padding: 0 !important
    margin-bottom: 20px

.htest-ul-steps li, .htest-ul-award li
    line-height: 2rem
    margin-bottom: 10px

.htest-steps li .v-icon, .htest-ul-award .v-icon
    padding-right: 7px
    color: #03311F

.htest-blockquote
    font-size: 16px
    font-style: italic

.rev-p-htest
    font-weight: bold
    text-transform: uppercase
    line-height: 18px !important
    margin-bottom: 30px !important
    color: #333
    font-size: 22px
    display: inline-block
    position: relative
    margin-top: 40%

.htest-logo
    max-width: 250px
    margin-top: 15%
    margin-bottom: 40px

.htest-iphone
    position: absolute
    right: 0
    bottom: 0
    max-width: 550px

.htest-food-img


.rev-p-htest span
    position: relative
    top: 15px

.htest-h1
    color: #fff
    font-size: 48px
    line-height: 56px
    font-weight: 400
    margin-bottom: 40px
    position: relative

.htest-img-in
    max-width: 250px

.htest-subtitle-main
    position: relative
    margin-bottom: 40px
    color: white

.htest-subtitle-main p
    font-size: 16px
    font-weight: 300

.htest-ul-main
    list-style-type: none
    margin-top: 30px
    padding-left: 10px !important
    margin-bottom: 20px

.htest-ul-main li
    font-size: 22px
    line-height: 34px
    color: #333333

.htest-icon-main
    color: #03311F !important
    padding-right: 5px

.htest-h2
    font-size: 24px
    text-transform: uppercase
    text-align: center
    margin-top: 10px
    margin-bottom: 10px

.htest-h2-center
    font-size: 36px
    margin-top: 10px
    margin-bottom: 10px
    color: #03311F
    text-transform: uppercase
    text-align: center

.htest-exp-panel .v-icon
    color: #03311F !important

.htest-exp-title
    font-size: 18px
    background-color: #dfffda

.htest-step-p-exp
    font-size: 16px

.htest-footer
    background-color: #03311F !important
    color: white !important

.htest-consultant-p
    font-size: 24px

.chat-list p
    font-size: 16px

.chat-list
    width: 100%
    height: 100%
    box-sizing: border-box
    display: flex
    flex-direction: column
    justify-content: flex-end
    padding: 0 11px 20px

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

.chat-item ul li i
    top: -2px

.p-quest-num
    color: #999999
    font-size: 13px !important

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
    max-width: 100%

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
    //background-color: rgb(248, 248, 248)
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
    margin-left: 20px

.chat-controls
    display: flex
    margin-top: 10px
    align-items: center
    flex-wrap: wrap
    margin-left: 20px

.chat-controls.quest
    padding: 0 20px

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

.span-res-sys
    font-weight: 500

.tbl-sys  p
    font-size: 12px !important
    color: #666

.tbl-very-good
    text-align: center
    background-color: #bcfea4
    position: relative

.tbl-good
    text-align: center
    background-color: #b7e0fe
    position: relative

.tbl-risk
    text-align: center
    background-color: #feffb3
    position: relative

.tbl-bad
    text-align: center
    background-color: #ffc5c4
    position: relative

.table-label
    color: #666
    font-size: 13px
    position: absolute
    left: 5px
    top: 0

.table-result
    position: absolute
    left: calc(47.5% - 18px)
    font-size: 22px
    background: #fff
    border-radius: 50%
    width: 36px
    height: 36px
    text-align: center
    border: 2px solid #c00
    bottom: 5px
    display: flex
    justify-content: center
    align-items: center
    transition: all 0.3s
    font-weight: 600
    color: #333
    z-index: 300

.sys-icon
    display: none
    text-align: center
    padding-top: 7px

.tbl-sys .v-tooltip
    z-index: 999

.sys-icon img
    width: 32px

.sys-text
    margin: 0 !important

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

@media(max-width: 1320px)
    .htest-food
        top: 5%

    .htest-h1-food
        font-size: 36px
        line-height: 44px

@media(max-width: 1200px)
    #htest-skin
        padding-bottom: 0

    .converter-main
        margin-left: 40px

    .htest-iphone
        width: 500px

    .htest-logo
        margin-top: 10%

    .htest-h1
        font-size: 40px

    .htest-h1-food
        margin-bottom: 20px

@media(max-width: 980px)
    .htest-iphone
        width: 400px

    .htest-food
        padding: 30px
        top: 10%

    .htest-h1-food
        font-size: 32px
        line-height: 42px

@media(max-width: 959px)
    .media-img
        display: inline-block

    .right-img
        display: none

    .rev-p-htest
        margin-top: 10%

    .htest-h1
        line-height: 44px

    .htest-subtitle-main
        max-width: 450px

    .htest-logo
        margin-top: 5%
        max-width: 200px

    .htest-iphone
        max-width: 300px

    .htest-food
        top: 0
        right: 0
        position: relative

    .htest-food-img
        max-width: 500px
        margin: 0 auto
        top: -25px

@media(max-width: 760px)
    .lifetakt-htest
        margin-bottom: 20px

    .htest-subtitle-main
        max-width: 300px

    .converter-main
        margin-left: 20px

@media(max-width: 600px)
    .main-col
        padding-left: 0
        padding-right: 0

    .chat-list
        padding-left: 0
        padding-right: 0

    .htest-iphone
        max-width: 250px

    .htest-h1
        font-size: 36px

    #htest-start .container, #htest-feedback .container
        padding: 0

    .htest-cont-two
        padding: 0

@media(max-width: 550px)
    .htest-iphone
        max-width: 200px

@media(max-width: 500px)
    .converter-main
        margin-left: 0

    .lifetakt-htest
        margin-left: 0

@media(max-width: 480px)
    //.sys-icon
    //    display: block
    //
    //.sys-text
    //    display: none

    .tbl-sys
        padding: 0 2px !important
        font-size: 11px !important

    .sys-text
        line-height: 1.5rem !important

    .v-dialog
        margin-right: 5px
        margin-left: 5px

    .dialog-card-title
        padding-top: 10px !important

    .dialog-card-results
        padding: 10px 5px !important

    .dialog-th
        padding: 0 5px !important

    .rev-p-htest
        max-width: 200px
        line-height: 18px !important
        margin-bottom: 30px !important
        font-size: 14px

    .htest-logo
        max-width: 150px
        margin-bottom: 30px

    .htest-h1
        font-size: 32px
        line-height: 38px
        margin-bottom: 30px

    .htest-subtitle-main
        margin-bottom: 80px

    .htest-iphone
        width: 180px

    .htest-video-div
        margin-bottom: 80px

    .htest-feedback
        padding: 20px

    .htest-food
        padding: 20px

    .htest-h2-feedback
        font-size: 28px

</style>