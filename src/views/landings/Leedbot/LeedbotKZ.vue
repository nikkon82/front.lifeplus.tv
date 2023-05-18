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
                                                                <div v-if="userData.about_me" class="chat-message">
                                                                    <span v-html="userData.about_me"></span>
                                                                </div>
                                                                <div v-else class="chat-message">
                                                                    <p>
                                                                        Привет, на связи {{ userData.name }} {{ userData.last_name }}, я предприниматель!
                                                                    </p>
                                                                    <p>
                                                                        Развиваю свой бизнес в партнёрстве с немецким производителем LR в направлении здоровья и красоты
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
                                                                    <p>
                                                                        Выберите, о чем хотите узнать подробнее, и мой виртуальный помощник расскажет об этом.
                                                                        На изучение информации понадобится чуть больше 10 минут. В конце вас ждет ценный подарок &#128521;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnBiz"
                                                                    @click="btnBiz"
                                                                >
                                                                    Расскажи как заработать
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnProd"
                                                                    @click="btnProd"
                                                                >
                                                                    Расскажи про продукт
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answBizProd"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime2 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div v-if="clientData.branch === 'бизнес'" class="chat-message">
                                                                    Расскажи как заработать
                                                                </div>
                                                                <div v-if="clientData.branch === 'продукт'" class="chat-message">
                                                                    Расскажи про продукт
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz1"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime2 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Давайте для начала познакомимся &#128521;
                                                                    </p>
                                                                    <p>
                                                                        Как вас зовут?
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
                                                        class="chat-item item-user"
                                                        v-if="answName"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime3 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Меня зовут {{ clientData.name }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz2"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime3 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Приятно познакомиться, {{ clientData.name }}!
                                                                    </p>
                                                                    <p>
                                                                        Ответьте, пожалуйста, еще на несколько вопросов, чтобы мой виртуальный помощник
                                                                        подобрал информацию актуальную именно для вас &#128071;
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
                                                        class="chat-item item-user"
                                                        v-if="answOk1"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime4 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Хорошо
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz3"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime4 }}
                                                            </div>
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
                                                        class="chat-item item-user"
                                                        v-if="answGender"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime5 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    {{ clientData.gender }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz4"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime5 }}
                                                            </div>
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
                                                        class="chat-item item-user"
                                                        v-if="answAge"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime6 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Мне {{ clientData.age }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz5"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime6 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Чем вы занимаетесь?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnNaim"
                                                                    @click="targetNaim"
                                                                >
                                                                    Работаю по найму
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnFree"
                                                                    @click="targetFree"
                                                                >
                                                                    Работаю на себя
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnEnt"
                                                                    @click="targetEnt"
                                                                >
                                                                    Свой бизнес
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnPfr"
                                                                    @click="targetPfr"
                                                                >
                                                                    На пенсии
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnMlm"
                                                                    @click="targetMlm"
                                                                >
                                                                    Сетевик
                                                                </v-btn>
                                                                <v-btn
                                                                    v-if="clientData.gender === 'ж'"
                                                                    class="chat-btn"
                                                                    :disabled="disBtnDekret"
                                                                    @click="targetDekret"
                                                                >
                                                                    В декрете
                                                                </v-btn>
                                                                <v-btn
                                                                    v-if="clientData.gender === 'ж'"
                                                                    class="chat-btn"
                                                                    :disabled="disBtnDom"
                                                                    @click="targetDom"
                                                                >
                                                                    Домохозяйка
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answTarget"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    {{ clientData.target_a }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesNaim1"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Да, есть у меня опыт работы по найму.
                                                                        Постоянный напряг по деньгам, жизнь по будильнику, долги, кредиты...
                                                                    </p>
                                                                    <p>
                                                                        Каждый день как день сурка: дом - работа, дом - работа. И никакой свободы! &#128543;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesNaim2"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Представьте, какое чувство свободы испытывает человек, которому не нужно вставать
                                                                        по будильнику и перед кем-то отчитываться.
                                                                    </p>
                                                                    <p>
                                                                        Когда все расходы и платежи уже оплачены, а еще только половина месяца прошла.
                                                                        При этом остались свободные деньги, и вы не знаете, куда их потратить. &#129395;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesNaim3"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        {{ clientData.name }}, какой доход позволит вам начать жить такой жизнью?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-input">
                                                                <v-text-field
                                                                    :disabled="disInpMoney"
                                                                    label="Сколько хотите зарабатывать?"
                                                                    type="text"
                                                                    v-model.trim="clientData.income_want"
                                                                    :error-messages="moneyErrors"
                                                                    @input="$v.clientData.income_want.$touch()"
                                                                    @blur="$v.clientData.income_want.$touch()"
                                                                />
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnMoney"
                                                                    @click="btnMoney"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Хочу получать
                                                                    <span
                                                                        class="ml-2"
                                                                        style="text-decoration: underline"
                                                                    >
                                                                        {{ clientData.income_want }}
                                                                    </span>
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesEnt1"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Респект! Предприниматели - это люди с твердым характером.
                                                                    </p>
                                                                    <p>
                                                                        Не каждый готов в одиночку тащить на себе бизнес, платить аренду, когда нет выручки,
                                                                        постоянно искать новых сотрудников, видеть деньги только на бумаге,
                                                                        вместо выходного с семьей решать бесконечные проблемы в бизнесе,
                                                                        а про спокойный отпуск я вообще молчу... &#128543;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesEnt2"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        А что если бизнес может быть другим?
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Просто представьте, что у вас появилась возможность систематизировать все
                                                                        бизнес-процессы и скинуть с себя всю операционку, аренду, найм персонала,
                                                                        хранение товара, логистику, бухгалтерию и прочие сложности.
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        И теперь вы можете сфокусироваться только на масштабировании бизнеса
                                                                        и увеличении прибыли.
                                                                    </p>
                                                                    <p>
                                                                        Это позволит высвободить время для себя, семьи, хобби, ощутить свободу и уверенность.
                                                                        &#129395;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesEnt3"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        {{ clientData.name }}, какой доход вы хотели бы получать от бизнеса?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-input">
                                                                <v-text-field
                                                                    :disabled="disInpMoney"
                                                                    label="Сколько хотите зарабатывать?"
                                                                    type="text"
                                                                    v-model.trim="clientData.income_want"
                                                                    :error-messages="moneyErrors"
                                                                    @input="$v.clientData.income_want.$touch()"
                                                                    @blur="$v.clientData.income_want.$touch()"
                                                                />
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnMoney"
                                                                    @click="btnMoney"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Хочу получать
                                                                    <span
                                                                        class="ml-2"
                                                                        style="text-decoration: underline"
                                                                    >
                                                                        {{ clientData.income_want }}
                                                                    </span>
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesFree1"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Респект! В работе на себя есть много преимуществ.
                                                                        Нет начальника, сам выбираешь когда и сколько работать.
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Однако есть и свои нюансы.
                                                                    </p>
                                                                    <p>
                                                                        Постоянный поиск клиентов. Как потопал - так и полопал, как говорится.
                                                                        Работаешь практически всегда и много...
                                                                        Клиенты сегодня есть, а завтра - ушли к конкурентам.
                                                                        &#128543;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesFree2"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        А что если при таких же усилиях вы сможете создать свое дело,
                                                                        которое будет приносить доход и без вашего участия?
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Один раз поработал и получаешь доход постоянно. Многие процессы автоматизированы,
                                                                        поэтому сможете высвободить время для себя, семьи, хобби, ощутить свободу и уверенность.
                                                                        &#129395;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesFree3"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        {{ clientData.name }}, какой доход вы хотели бы получать от своей деятельности?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-input">
                                                                <v-text-field
                                                                    :disabled="disInpMoney"
                                                                    label="Сколько хотите зарабатывать?"
                                                                    type="text"
                                                                    v-model.trim="clientData.income_want"
                                                                    :error-messages="moneyErrors"
                                                                    @input="$v.clientData.income_want.$touch()"
                                                                    @blur="$v.clientData.income_want.$touch()"
                                                                />
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnMoney"
                                                                    @click="btnMoney"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Хочу получать
                                                                    <span
                                                                        class="ml-2"
                                                                        style="text-decoration: underline"
                                                                    >
                                                                        {{ clientData.income_want }}
                                                                    </span>
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesDekret1"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Респект! Мама в декрете - это, наверное, самая сложная профессия, причем чаще всего
                                                                        близкие нам люди этого не осознают.
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Сколько сил и терпения нужно иметь, чтобы переносить постоянный недосып, не сойти
                                                                        с ума в бесконечном дне сурка: стирка, глажка, готовка, уборка...
                                                                    </p>
                                                                    <p>
                                                                        Времени на себя практически нет: элементарно принять ванну и побыть одной
                                                                        - непозволительная роскошь. &#128543;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesDekret2"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Есть проверенный способ, который может в корне изменить ситуацию.
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Просто представьте, какие чувства вы будете испытывать, когда появится
                                                                        СВОЙ источник дохода.
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Не зависеть от мужа, нанять няню, чаще посещать салоны красоты,
                                                                        покупать себе и своему ребенку одежду, которая нравится, заниматься своим развитием, начать
                                                                        ходить в спортзал...
                                                                    </p>
                                                                    <p>
                                                                        И самое главное - не нужно выходить на работу после декрета! &#129395;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesDekret3"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        {{ clientData.name }}, какой доход позволил бы вам начать жить такой жизнью?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-input">
                                                                <v-text-field
                                                                    :disabled="disInpMoney"
                                                                    label="Сколько хотите зарабатывать?"
                                                                    type="text"
                                                                    v-model.trim="clientData.income_want"
                                                                    :error-messages="moneyErrors"
                                                                    @input="$v.clientData.income_want.$touch()"
                                                                    @blur="$v.clientData.income_want.$touch()"
                                                                />
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnMoney"
                                                                    @click="btnMoney"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Хочу получать
                                                                    <span
                                                                        class="ml-2"
                                                                        style="text-decoration: underline"
                                                                    >
                                                                        {{ clientData.income_want }}
                                                                    </span>
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesMlm1"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Респект! Сетевой - это бизнес для смелых людей, движимых мечтой и большими целями.
                                                                    </p>
                                                                    <p>
                                                                        В теории - это идеальный бизнес, в котором может преуспеть каждый.
                                                                        Но по факту огромное количество людей топчутся на месте. &#128543;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesMlm2"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Если нет инструментов для демонстрации бизнеса и продукта
                                                                        - получаешь много отказов, денег нет, выглядишь глупо в глазах близких и знакомых.
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Если нет простой системы обучения партнеров - бизнес превращается в проходной двор
                                                                        - пришел один, а ушло 10. Вечный вопрос: "Где взять новых людей?"
                                                                    </p>
                                                                    <p>
                                                                        Если вы чувствуете, что в вашей компании вам сложно двигаться
                                                                        к желаемым целям, то могу показать, как с помощью нашей системы за пару месяцев
                                                                        можно выйти на доходы от 77 000 тенге, а в течении года на 400 000 тенге и более.
                                                                        &#129395;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesMlm3"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        {{ clientData.name }}, сколько хотите зарабатывать в сетевом бизнесе?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-input">
                                                                <v-text-field
                                                                    :disabled="disInpMoney"
                                                                    label="Сколько хотите зарабатывать?"
                                                                    type="text"
                                                                    v-model.trim="clientData.income_want"
                                                                    :error-messages="moneyErrors"
                                                                    @input="$v.clientData.income_want.$touch()"
                                                                    @blur="$v.clientData.income_want.$touch()"
                                                                />
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnMoney"
                                                                    @click="btnMoney"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Хочу получать
                                                                    <span
                                                                        class="ml-2"
                                                                        style="text-decoration: underline"
                                                                    >
                                                                        {{ clientData.income_want }}
                                                                    </span>
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesPfr1"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        С одной стороны, пенсия - это хорошо, есть много свободного времени.
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Но с другой - жизнь на пенсии, в основном, скучновата и однообразна, ограничена и вызывает
                                                                        чувство одиночества.
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        А хочется быть в интересном сообществе, общаться, больше путешествовать, пожить для себя.
                                                                    </p>
                                                                    <p>
                                                                        Понятно, что денег не достаточно. Здоровье также оставляет желать лучшего. &#128543;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesPfr2"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Есть проверенный способ, который может в корне изменить ситуацию.
                                                                    </p>
                                                                    <p>
                                                                        В нашей команде много людей, которые без особых навыков, будучи на пенсии, смогли создать
                                                                        хороший дополнительный доход и существенно поправили свое здоровье.
                                                                        &#129395;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesPfr3"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        {{ clientData.name }}, какой дополнительный доход позволит вам достойно жить на пенсии?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-input">
                                                                <v-text-field
                                                                    :disabled="disInpMoney"
                                                                    label="Сколько хотите зарабатывать?"
                                                                    type="text"
                                                                    v-model.trim="clientData.income_want"
                                                                    :error-messages="moneyErrors"
                                                                    @input="$v.clientData.income_want.$touch()"
                                                                    @blur="$v.clientData.income_want.$touch()"
                                                                />
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnMoney"
                                                                    @click="btnMoney"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Хочу получать
                                                                    <span
                                                                        class="ml-2"
                                                                        style="text-decoration: underline"
                                                                    >
                                                                        {{ clientData.income_want }}
                                                                    </span>
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesDom1"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Образ домохозяйки для многих выглядит так: ты сидишь дома,
                                                                        у тебя куча свободного времени, муж обеспечивает, занимайся семьей, домом,
                                                                        живи и радуйся.
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        И, действительно, в этом образе все хорошо, кроме некоторых моментов...
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Полная финансовая зависимость от мужа. Отсутствие самореализации, неуверенность в себе,
                                                                        жизнь превратилась в жизнь "во имя семьи", "для мужа", "ради детей"...
                                                                    </p>
                                                                    <p>
                                                                        {{ clientData.name }}, о такой ли жизни вы мечтали?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesDom2"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Представьте, как было бы здорово, оставаясь в привычном ритме жизни,
                                                                        начать развиваться в интересном окружении, создать СВОЙ источник дохода и меньше
                                                                        зависеть от мужа, раскрыть свой личностный потенциал и наполнить жизнь новыми
                                                                        позитивными моментами. &#129395;
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesDom3"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        {{ clientData.name }}, какой собственный доход вы хотели бы иметь?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-input">
                                                                <v-text-field
                                                                    :disabled="disInpMoney"
                                                                    label="Сколько хотите зарабатывать?"
                                                                    type="text"
                                                                    v-model.trim="clientData.income_want"
                                                                    :error-messages="moneyErrors"
                                                                    @input="$v.clientData.income_want.$touch()"
                                                                    @blur="$v.clientData.income_want.$touch()"
                                                                />
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnMoney"
                                                                    @click="btnMoney"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Хочу получать
                                                                    <span
                                                                        class="ml-2"
                                                                        style="text-decoration: underline"
                                                                    >
                                                                        {{ clientData.income_want }}
                                                                    </span>
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answMoney"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime8 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Хочу получать {{ clientData.income_want }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz6"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime8 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Сейчас я вам расскажу, как выйти на такой доход, не
                                                                        бросая текущую деятельность, удаленно, в удобное для себя время.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz7"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime8 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p v-if="userData.gender === 'ж'">
                                                                        <!-- audio element -->
                                                                        <vue-player
                                                                            audio
                                                                            :sources="audioSources1g"
                                                                        />
                                                                    </p>
                                                                    <p v-else>
                                                                        <!-- audio element -->
                                                                        <vue-player
                                                                            audio
                                                                            :sources="audioSources1"
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <transition name="fade">
                                                                <div
                                                                    v-if="btnDaleeBiz1"
                                                                    class="chat-controls"
                                                                >
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnBiz7"
                                                                        @click="btnBiz7"
                                                                    >
                                                                        <v-icon class="mr-3">mdi-send</v-icon>
                                                                        Далее
                                                                    </v-btn>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answBiz7"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime9 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Далее
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz8"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime9 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p v-if="clientData.target_a === 'Работаю по найму'">
                                                                        Посмотрите результаты партнеров нашей команды,
                                                                        которые совмещают бизнес с LR или раньше работали по найму
                                                                    </p>
                                                                    <p v-if="clientData.target_a === 'Работаю на себя'">
                                                                        Посмотрите результаты партнеров нашей команды,
                                                                        которые работали на себя, а сейчас зарабатывают в LR
                                                                    </p>
                                                                    <p v-if="clientData.target_a === 'Свой бизнес'">
                                                                        Посмотрите результаты партнеров нашей команды,
                                                                        которые имеют свой бизнес и создали дополнительный источник дохода с LR
                                                                    </p>
                                                                    <p v-if="clientData.target_a === 'На пенсии'">
                                                                        Посмотрите результаты партнеров нашей команды,
                                                                        которые на пенсии создали дополнительный источник дохода с LR
                                                                    </p>
                                                                    <p v-if="clientData.target_a === 'Сетевик'">
                                                                        Посмотрите результаты партнеров нашей команды
                                                                    </p>
                                                                    <p v-if="clientData.target_a === 'В декрете'">
                                                                        Посмотрите результаты мамочек из нашей команды, которые так и не вышли из декрета,
                                                                        создав источник дохода с LR
                                                                    </p>
                                                                    <p v-if="clientData.target_a === 'Домохозяйка'">
                                                                        Посмотрите результаты домохозяек из нашей команды,
                                                                        которые создали свой собственный источник дохода с LR
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz9"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime9 }}
                                                            </div>
                                                            <div
                                                                v-if="clientData.target_a === 'Работаю по найму'"
                                                                class="chat-messages"
                                                            >
                                                                <p
                                                                    class="mb-5"
                                                                    style="width: 100%; max-width: 550px; height: auto;"
                                                                >
                                                                    <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-12.png" alt=""/>
                                                                </p>
                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Елена, в прошлом преподаватель в техническом ВУЗе.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    При знакомстве с компанией LR сразу приняла решение развиваться и строить карьеру.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Получила 3 автомобиля от компании, в команде 9 автомобилей у партнеров, развиваю бизнес в 9 странах, ежемесячный доход от компании более 1.5 млн тг
                                                                </p>

                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnOtzNaim1"
                                                                    @click="btnOtzNaim1"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Далее
                                                                </v-btn>

                                                                <transition name="fade">
                                                                    <div v-if="imgNaim2" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-9.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Елена, логист в компании по продаже горной и строительной техники.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            В LR пришла на продукт и три года была клиентом со скидкой.
                                                                            Получила хорошие результаты по здоровью, приняла решение развивать бизнес с LR,
                                                                            уволилась с основной работы.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Через пол года побывала в Германии на производстве и в офисе LR, получила первый авто VW Polo, вышла на стабильный доход более 500 000 тенге
                                                                        </p>

                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzNaim2"
                                                                            @click="btnOtzNaim2"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgNaim3" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-8.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Нурила, страховщик, до сих пор совмещаю работу по найму на руководящей должности
                                                                            в крупной страховой компании.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            В LR третий год. Через пол года получила первое Авто и вышла на доход более 500 000 тенге, получила второй автомобиль.
                                                                        </p>

                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzNaim3"
                                                                            @click="btnOtzNaim3"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgNaim4" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-6.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Мадина. До ЛР работала продавцом в магазине одежды. Доросла до директора, все время на работе,
                                                                            стресс, а денег особо больше не стало.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            LR пришел в нашу жизнь как долгожданное спасение.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Сейчас доход более 800 тысяч тенге, Volkswagen Tiguan, часто путешествуем за счет LR. И что самое главное мы вместе, все время с семьей, видим как растут наши дети.
                                                                        </p>

                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzNaim4"
                                                                            @click="btnOtzNaim4"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgNaim5" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-15.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Багжамал, до LR работала в школе, преподавала математику. Работа нравилась, но зарплата…
                                                                            Обнять и плакать, как говориться.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            В LR позвала знакомая. За 2 года вышла на доход 390 000 тенге, получила уже второй автомобиль.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Вот такая математика. С работы уволилась, отдыхаю.
                                                                        </p>

                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzNaim5"
                                                                            @click="btnOtzNaim5"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>
                                                            </div>
                                                            <div
                                                                v-if="clientData.target_a === 'Работаю на себя'"
                                                                class="chat-messages"
                                                            >
                                                                <p
                                                                    class="mb-5"
                                                                    style="width: 100%; max-width: 550px; height: auto;"
                                                                >
                                                                    <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-5.png" alt=""/>
                                                                </p>
                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Илья, страховщик, так же в прошлом предприниматель, держал продуктовый магазин.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    В LR 5 лет был просто клиентом, в июне 2019 года начал развивать бизнес.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Через пол года получил первое Авто и вышел на доход 500 000 тенге, За год доход в LR более 1 000 000 тенге, получил второй автомобиль.
                                                                </p>

                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnOtzFree1"
                                                                    @click="btnOtzFree1"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Далее
                                                                </v-btn>

                                                                <transition name="fade">
                                                                    <div v-if="imgFree2" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-10.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Роза. <br>
                                                                            В 90-е интуиция мне подсказала, что надо заняться челночным бизнесом.
                                                                            В 2000 году когда строилась Астана, я стала риэлтором и снова не прогадала.
                                                                            Сегодня люди с предпринимательской чуйкой идут в LR.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            За три года я вышла на доход свыше 2,5 миллиона тенге в месяц, плюс ежегодно получаю Годовой бонус (13 зарплата) более 7 миллионов тенге!
                                                                            Без затрат на аренду, вложений в товар, взяток и откатов. Скажите, где сегодня есть такие возможности?
                                                                        </p>

                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzFree2"
                                                                            @click="btnOtzFree2"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgFree3" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-4.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Татьяна, по образованию юрист.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Предприниматель, до знакомства с LR имела сеть магазинов, в 2014 году решила построить бизнес с немецкой компанией и не ошиблась!
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            За 1 год получила два автомобиля, в 2020 третий авто и вышла на стабильный доход в 2 000 000 тенге.
                                                                        </p>

                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzFree3"
                                                                            @click="btnOtzFree3"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgFree4" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-11.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Кандаурова Лариса - 60 лет. Предприниматель, имела сеть магазинов женской одежды и СПА салон.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Пришла в компанию в декабре 2017 года.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            На сегодняшний день квалификация Серебряный лидер, в пользовании Тигуан. Стремлюсь стать Золотым лидером компании.
                                                                        </p>

                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzFree4"
                                                                            @click="btnOtzFree4"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgFree5" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-1.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Маржан, предприниматель.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Пришла в ЛР на продукт. Не верила, но получила замечательные результаты по здоровью.
                                                                            Увидела ВСЕ возможности и приняла решение строить бизнес.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Первую машину, Фольксваген Поло, получила через полгода. Сейчас катается на Фольксваген Тигуан.
                                                                            На доход 500 000 вышла через 1.5 года. Побывала на заводе в Германии, в путешествиях от компании. Имеет партнеров в 5 странах.
                                                                        </p>

                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzFree5"
                                                                            @click="btnOtzFree5"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>
                                                            </div>
                                                            <div
                                                                v-if="clientData.target_a === 'Свой бизнес'"
                                                                class="chat-messages"
                                                            >
                                                                <p
                                                                    class="mb-5"
                                                                    style="width: 100%; max-width: 550px; height: auto;"
                                                                >
                                                                    <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-10.png" alt=""/>
                                                                </p>
                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Роза. <br>
                                                                    В 90-е интуиция мне подсказала, что надо заняться челночным бизнесом.
                                                                    В 2000 году когда строилась Астана, я стала риэлтором и снова не прогадала.
                                                                    Сегодня люди с предпринимательской чуйкой идут в LR.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    За три года я вышла на доход свыше 2,5 миллиона тенге в месяц, плюс ежегодно получаю Годовой бонус (13 зарплата) более 7 миллионов тенге!
                                                                    Без затрат на аренду, вложений в товар, взяток и откатов. Скажите, где сегодня есть такие возможности?
                                                                </p>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnOtzEnt1"
                                                                    @click="btnOtzEnt1"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Далее
                                                                </v-btn>

                                                                <transition name="fade">
                                                                    <div v-if="imgEnt2" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-4.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Татьяна, по образованию юрист.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Предприниматель, до знакомства с LR имела сеть магазинов, в 2014 году решила построить бизнес с немецкой компанией и не ошиблась!
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            За 1 год получила два автомобиля, в 2020 третий авто и вышла на стабильный доход в 2 000 000 тенге.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzEnt2"
                                                                            @click="btnOtzEnt2"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgEnt3" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-11.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Кандаурова Лариса - 60 лет. Предприниматель, имела сеть магазинов женской одежды и СПА салон.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Пришла в компанию в декабре 2017 года.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            На сегодняшний день квалификация Серебряный лидер, в пользовании Тигуан. Стремлюсь стать Золотым лидером компании.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzEnt3"
                                                                            @click="btnOtzEnt3"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgEnt4" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-1.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Маржан, предприниматель.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Пришла в ЛР на продукт. Не верила, но получила замечательные результаты по здоровью.
                                                                            Увидела ВСЕ возможности и приняла решение строить бизнес.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Первую машину, Фольксваген Поло, получила через полгода. Сейчас катается на Фольксваген Тигуан.
                                                                            На доход 500 000 вышла через 1.5 года. Побывала на заводе в Германии, в путешествиях от компании. Имеет партнеров в 5 странах.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzEnt4"
                                                                            @click="btnOtzEnt4"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgEnt5" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-3.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Наталья. Руководитель IT проектов в национальных компаниях.
                                                                            Имела опыт в предпринимательстве, занималась ввозом спецтехники на территорию Казахстана.

                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Первые пол года просто пользовалась продуктом. Позже начала развивать бизнес.
                                                                            Через 6 месяцев вышла на доход более 1 миллиона тенге.
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            На сегодняшний день получила четвертый автомобиль от LR.
                                                                        </p>

                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzEnt5"
                                                                            @click="btnOtzEnt5"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>
                                                            </div>
                                                            <div
                                                                v-if="clientData.target_a === 'На пенсии'"
                                                                class="chat-messages"
                                                            >
                                                                <p
                                                                    class="mb-5"
                                                                    style="width: 100%; max-width: 550px; height: auto;"
                                                                >
                                                                    <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-11.png" alt=""/>
                                                                </p>
                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Кандаурова Лариса - 60 лет. Предприниматель, имела сеть магазинов женской одежды и СПА салон.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Пришла в компанию в декабре 2017 года.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    На сегодняшний день квалификация Серебряный лидер, в пользовании Тигуан. Стремлюсь стать Золотым лидером компании.
                                                                </p>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnOtzPfr1"
                                                                    @click="btnOtzPfr1"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Далее
                                                                </v-btn>

                                                                <transition name="fade">
                                                                    <div v-if="imgPfr2" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-10.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Роза. <br>
                                                                            В 90-е интуиция мне подсказала, что надо заняться челночным бизнесом.
                                                                            В 2000 году когда строилась Астана, я стала риэлтором и снова не прогадала.
                                                                            Сегодня люди с предпринимательской чуйкой идут в LR.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            За три года я вышла на доход свыше 2,5 миллиона тенге в месяц, плюс ежегодно получаю Годовой бонус (13 зарплата) более 7 миллионов тенге!
                                                                            Без затрат на аренду, вложений в товар, взяток и откатов. Скажите, где сегодня есть такие возможности?
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzPfr2"
                                                                            @click="btnOtzPfr2"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgPfr3" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-8.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Нурила, страховщик, до сих пор совмещаю работу по найму на руководящей должности
                                                                            в крупной страховой компании.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            В LR третий год. Через пол года получила первое Авто и вышла на доход более 500 000 тенге, получила второй автомобиль.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzPfr3"
                                                                            @click="btnOtzPfr3"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgPfr4" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-15.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Багжамал, до LR работала в школе, преподавала математику. Работа нравилась, но зарплата…
                                                                            Обнять и плакать, как говориться.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            В LR позвала знакомая. За 2 года вышла на доход 390 000 тенге, получила уже второй автомобиль.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Вот такая математика. С работы уволилась, отдыхаю.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzPfr4"
                                                                            @click="btnOtzPfr4"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgPfr5" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-16.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Ирина. Предприниматель, собственный бизнес.

                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Пришла на продукт. Получила результат! Попробовала бизнес. Получилось.
                                                                            Решила, что мне это надо, мне нравится помогать людям быть красивыми и здоровыми!
                                                                            В LR позвала знакомая.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            За 2 года вышла на доход 390 000 тенге, получила уже второй автомобиль.
                                                                            Доход  500 тыс тенге. Была два раза в Германии от Компании. Получила второй автомобиль. Горжусь, что я в Немецкой Компании LR!
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzPfr5"
                                                                            @click="btnOtzPfr5"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>
                                                            </div>
                                                            <div
                                                                v-if="clientData.target_a === 'Сетевик'"
                                                                class="chat-messages"
                                                            >
                                                                <p
                                                                    class="mb-5"
                                                                    style="width: 100%; max-width: 550px; height: auto;"
                                                                >
                                                                    <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-14.png" alt=""/>
                                                                </p>
                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Айгуль.
                                                                    Мама троих детей.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Были с супругом Топ лидерами в Американской МЛМ компании. В LR увидели больше перспектив для себя и команды. Востребованный продукт, систему и огромный потенциал роста.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Вышли на доход в более 2 млн тенге в месяц. Получили третий корпоративный авто. Много путешествуем за счёт Компании.
                                                                </p>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnOtzMlm1"
                                                                    @click="btnOtzMlm1"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Далее
                                                                </v-btn>

                                                                <transition name="fade">
                                                                    <div v-if="imgMlm2" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-10.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Роза. <br>
                                                                            В 90-е интуиция мне подсказала, что надо заняться челночным бизнесом.
                                                                            В 2000 году когда строилась Астана, я стала риэлтором и снова не прогадала.
                                                                            Сегодня люди с предпринимательской чуйкой идут в LR.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            За три года я вышла на доход свыше 2,5 миллиона тенге в месяц, плюс ежегодно получаю Годовой бонус (13 зарплата) более 7 миллионов тенге!
                                                                            Без затрат на аренду, вложений в товар, взяток и откатов. Скажите, где сегодня есть такие возможности?
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzMlm2"
                                                                            @click="btnOtzMlm2"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgMlm3" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-4.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Татьяна, по образованию юрист.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Предприниматель, до знакомства с LR имела сеть магазинов, в 2014 году решила построить бизнес с немецкой компанией и не ошиблась!
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            За 1 год получила два автомобиля, в 2020 третий авто и вышла на стабильный доход в 2 000 000 тенге.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzMlm3"
                                                                            @click="btnOtzMlm3"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgMlm4" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-5.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Илья, страховщик, так же в прошлом предприниматель, держал продуктовый магазин.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            В LR 5 лет был просто клиентом, в июне 2019 года начал развивать бизнес.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Через пол года получил первое Авто и вышел на доход 500 000 тенге, За год доход в LR более 1 000 000 тенге, получил второй автомобиль.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzMlm4"
                                                                            @click="btnOtzMlm4"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgMlm5" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-16.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Ирина. Предприниматель, собственный бизнес.

                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Пришла на продукт. Получила результат! Попробовала бизнес. Получилось.
                                                                            Решила, что мне это надо, мне нравится помогать людям быть красивыми и здоровыми!
                                                                            В LR позвала знакомая.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            За 2 года вышла на доход 390 000 тенге, получила уже второй автомобиль.
                                                                            Доход  500 тыс тенге. Была два раза в Германии от Компании. Получила второй автомобиль. Горжусь, что я в Немецкой Компании LR!
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzMlm5"
                                                                            @click="btnOtzMlm5"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>
                                                            </div>
                                                            <div
                                                                v-if="clientData.target_a === 'В декрете'"
                                                                class="chat-messages"
                                                            >
                                                                <p
                                                                    class="mb-5"
                                                                    style="width: 100%; max-width: 550px; height: auto;"
                                                                >
                                                                    <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-17.png" alt=""/>
                                                                </p>
                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Клобук Марина, домохозяйка, мама троих детей.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    В LR пришла, как потребитель. Два года пользовалась продукцией и восхищалась.
                                                                    Поняла что продукт актуален для многих и начала развивать бизнес.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Получила авто от компании. Вышла на доход более 300 000 тг.
                                                                </p>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnOtzDekret1"
                                                                    @click="btnOtzDekret1"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Далее
                                                                </v-btn>

                                                                <transition name="fade">
                                                                    <div v-if="imgDekret2" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-13.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Айгуль. До сотрудничества с LR работала в Министерстве индустрии и новых технологий.
                                                                            Мама троих детей.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Не имея опыта в прямых продажах, в первый же год получила два автомобиля.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            На сегодняшний день имею стабильный доход более 1 миллиона тенге. Ежегодно путешествуем с семьей.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzDekret2"
                                                                            @click="btnOtzDekret2"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgDekret3" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-7.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Алтын, 43 года. Мама двоих девочек.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            До LR работала бухгалтером. Работа - дом - работа. Все как у всех, ничего интересного. В LR все изменилось.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Вышла на доход более 800 тысяч тенге. Уже второй авто от компании. Пришла за автомобилем и финансовой стабильностью,
                                                                            но получила гораздо больше. Шикарные результаты по здоровью, путешествия, поменялся круг общения, жизнь заиграла новыми красками!
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzDekret3"
                                                                            @click="btnOtzDekret3"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgDekret4" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-2.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Айсулу, до LR работала в Beeline менеджером по продажам.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Не видела перспектив, каждый день был похож на предыдущий.
                                                                            Хотелось перемен, внести краски в жизни, посвящать больше времени себе и семье. В этот момент и познакомилась с LR.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Сейчас доход более 700 000, получила 3 автомобиля, посетила 9 стран благодаря LR.
                                                                            За годы сотрудничества с компанией, родила 2-х деток.
                                                                            С кайфом развиваю бизнес и воспитываю детей.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzDekret4"
                                                                            @click="btnOtzDekret4"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgDekret5" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-14.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Айгуль.
                                                                            Мама троих детей.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Были с супругом Топ лидерами в Американской МЛМ компании. В LR увидели больше перспектив для себя и команды. Востребованный продукт, систему и огромный потенциал роста.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Вышли на доход в более 2 млн тенге в месяц. Получили третий корпоративный авто. Много путешествуем за счёт Компании.
                                                                        </p>

                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzDekret5"
                                                                            @click="btnOtzDekret5"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>
                                                            </div>
                                                            <div
                                                                v-if="clientData.target_a === 'Домохозяйка'"
                                                                class="chat-messages"
                                                            >
                                                                <p
                                                                    class="mb-5"
                                                                    style="width: 100%; max-width: 550px; height: auto;"
                                                                >
                                                                    <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-17.png" alt=""/>
                                                                </p>
                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Клобук Марина, домохозяйка, мама троих детей.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    В LR пришла, как потребитель. Два года пользовалась продукцией и восхищалась.
                                                                    Поняла что продукт актуален для многих и начала развивать бизнес.
                                                                </p>

                                                                <p
                                                                    class="mb-5"
                                                                >
                                                                    Получила авто от компании. Вышла на доход более 300 000 тг.
                                                                </p>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnOtzDom1"
                                                                    @click="btnOtzDom1"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Далее
                                                                </v-btn>

                                                                <transition name="fade">
                                                                    <div v-if="imgDom2" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-13.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Айгуль. До сотрудничества с LR работала в Министерстве индустрии и новых технологий.
                                                                            Мама троих детей.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Не имея опыта в прямых продажах, в первый же год получила два автомобиля.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            На сегодняшний день имею стабильный доход более 1 миллиона тенге. Ежегодно путешествуем с семьей.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzDom2"
                                                                            @click="btnOtzDom2"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgDom3" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-7.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Алтын, 43 года. Мама двоих девочек.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            До LR работала бухгалтером. Работа - дом - работа. Все как у всех, ничего интересного. В LR все изменилось.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Вышла на доход более 800 тысяч тенге. Уже второй авто от компании. Пришла за автомобилем и финансовой стабильностью,
                                                                            но получила гораздо больше. Шикарные результаты по здоровью, путешествия, поменялся круг общения, жизнь заиграла новыми красками!
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzDom3"
                                                                            @click="btnOtzDom3"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgDom4" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-2.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Айсулу, до LR работала в Beeline менеджером по продажам.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Не видела перспектив, каждый день был похож на предыдущий.
                                                                            Хотелось перемен, внести краски в жизни, посвящать больше времени себе и семье. В этот момент и познакомилась с LR.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Сейчас доход более 700 000, получила 3 автомобиля, посетила 9 стран благодаря LR.
                                                                            За годы сотрудничества с компанией, родила 2-х деток.
                                                                            С кайфом развиваю бизнес и воспитываю детей.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzDom4"
                                                                            @click="btnOtzDom4"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div v-if="imgDom5" class="mt-10">
                                                                        <p
                                                                            class="mb-5"
                                                                            style="width: 100%; max-width: 550px; height: auto;"
                                                                        >
                                                                            <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-14.png" alt=""/>
                                                                        </p>
                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Айгуль.
                                                                            Мама троих детей.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Были с супругом Топ лидерами в Американской МЛМ компании. В LR увидели больше перспектив для себя и команды. Востребованный продукт, систему и огромный потенциал роста.
                                                                        </p>

                                                                        <p
                                                                            class="mb-5"
                                                                        >
                                                                            Вышли на доход в более 2 млн тенге в месяц. Получили третий корпоративный авто. Много путешествуем за счёт Компании.
                                                                        </p>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnOtzDom5"
                                                                            @click="btnOtzDom5"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

<!--                                                <transition name="fade">-->
<!--                                                    <div-->
<!--                                                        class="chat-item"-->
<!--                                                        v-if="mesBiz10_1"-->
<!--                                                    >-->
<!--                                                        <div class="chat-avatar">-->
<!--                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"-->
<!--                                                                 alt=""-->
<!--                                                            >-->
<!--                                                        </div>-->
<!--                                                        <div class="chat-block">-->
<!--                                                            <div class="chat-date">-->
<!--                                                                {{ nowDateTime.dateTime10 }}-->
<!--                                                            </div>-->
<!--                                                            <div class="chat-messages">-->
<!--                                                                <div class="chat-message">-->
<!--                                                                    <p class="mb-5">-->
<!--                                                                        Эта информация может вообще никак не повлиять на вашу жизнь-->
<!--                                                                        и все останется так, как есть сейчас.-->
<!--                                                                    </p>-->
<!--                                                                    <p class="mb-5">-->
<!--                                                                        Либо вы можете не только увеличить доход и решить какие-то текущие проблемы,-->
<!--                                                                        но и сможете полностью ИЗМЕНИТЬ КАЧЕСТВО ВАШЕЙ ЖИЗНИ.-->
<!--                                                                    </p>-->
<!--                                                                    <p class="mb-5">-->
<!--                                                                        Все зависит только от вашего решения.-->
<!--                                                                    </p>-->
<!--                                                                    <p class="mb-5">-->
<!--                                                                        Пример того, как решение заняться этим бизнесом-->
<!--                                                                        может полностью изменить жизнь, посмотрите в видео ниже:-->
<!--                                                                    </p>-->
<!--                                                                    <p>-->
<!--                                                                        <video-player-->
<!--                                                                            class="video-player-box be-video-main mt-13 mb-10"-->
<!--                                                                            ref="videoPlayer"-->
<!--                                                                            :options="playerOptions10_1"-->
<!--                                                                            :playsinline="true"-->
<!--                                                                        >-->
<!--                                                                        </video-player>-->
<!--                                                                    </p>-->
<!--                                                                </div>-->
<!--                                                            </div>-->
<!--                                                            <transition name="fade">-->
<!--                                                                <div-->
<!--                                                                    v-if="btnDaleeBiz2_1"-->
<!--                                                                    class="chat-controls"-->
<!--                                                                >-->
<!--                                                                    <v-btn-->
<!--                                                                        class="chat-btn"-->
<!--                                                                        :disabled="disBtnBiz9_1"-->
<!--                                                                        @click="btnBiz9_1"-->
<!--                                                                    >-->
<!--                                                                        <v-icon class="mr-3">mdi-send</v-icon>-->
<!--                                                                        Далее-->
<!--                                                                    </v-btn>-->
<!--                                                                </div>-->
<!--                                                            </transition>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                </transition>-->

<!--                                                <transition name="fade">-->
<!--                                                    <div-->
<!--                                                        class="chat-item item-user"-->
<!--                                                        v-if="answBiz9_1"-->
<!--                                                    >-->
<!--                                                        <div class="chat-avatar-user"></div>-->
<!--                                                        <div class="chat-block">-->
<!--                                                            <div class="chat-date">-->
<!--                                                                {{ nowDateTime.dateTime10 }}-->
<!--                                                            </div>-->
<!--                                                            <div class="chat-messages">-->
<!--                                                                <div class="chat-message">-->
<!--                                                                    Далее-->
<!--                                                                </div>-->
<!--                                                            </div>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                </transition>-->

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz10"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime10 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Сейчас расскажу коротко о компании LR и почему мы выбрали именно эту компанию
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz11"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime10 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p v-if="userData.gender === 'ж'">
                                                                        <!-- audio element -->
                                                                        <vue-player
                                                                            audio
                                                                            :sources="audioSources2g"
                                                                        />
                                                                    </p>
                                                                    <p v-else>
                                                                        <!-- audio element -->
                                                                        <vue-player
                                                                            audio
                                                                            :sources="audioSources2"
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <transition name="fade">
                                                                <div
                                                                    v-if="btnDaleeBiz3"
                                                                    class="chat-controls"
                                                                >
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnBiz11"
                                                                        @click="btnBiz11"
                                                                    >
                                                                        <v-icon class="mr-3">mdi-send</v-icon>
                                                                        Посмотреть видео
                                                                    </v-btn>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </transition>

<!--                                                <transition name="fade">-->
<!--                                                    <div-->
<!--                                                        class="chat-item item-user"-->
<!--                                                        v-if="answBiz11"-->
<!--                                                    >-->
<!--                                                        <div class="chat-avatar-user"></div>-->
<!--                                                        <div class="chat-block">-->
<!--                                                            <div class="chat-date">-->
<!--                                                                {{ nowDateTime.dateTime11 }}-->
<!--                                                            </div>-->
<!--                                                            <div class="chat-messages">-->
<!--                                                                <div class="chat-message">-->
<!--                                                                    Далее-->
<!--                                                                </div>-->
<!--                                                            </div>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                </transition>-->

<!--                                                <transition name="fade">-->
<!--                                                    <div-->
<!--                                                        class="chat-item"-->
<!--                                                        v-if="mesBiz12"-->
<!--                                                    >-->
<!--                                                        <div class="chat-avatar">-->
<!--                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"-->
<!--                                                                 alt=""-->
<!--                                                            >-->
<!--                                                        </div>-->
<!--                                                        <div class="chat-block">-->
<!--                                                            <div class="chat-date">-->
<!--                                                                {{ nowDateTime.dateTime11 }}-->
<!--                                                            </div>-->
<!--                                                            <div class="chat-messages">-->
<!--                                                                <div class="chat-message">-->
<!--                                                                    <p>-->
<!--                                                                        Посмотрите минутное видео об основных продуктовых линейках компании-->
<!--                                                                    </p>-->
<!--                                                                </div>-->
<!--                                                            </div>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                </transition>-->

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz13"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime11 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message" style="width: 100%">
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
                                                            </div>
                                                            <transition name="fade">
                                                                <div
                                                                    v-if="btnDaleeBiz4"
                                                                    class="chat-controls"
                                                                >
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnBiz13"
                                                                        @click="btnBiz13"
                                                                    >
                                                                        <v-icon class="mr-3">mdi-send</v-icon>
                                                                        Далее
                                                                    </v-btn>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answBiz13"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime12 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Далее
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz14"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime12 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Сейчас расскажу, что нужно делать, чтобы здесь зарабатывать
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz15"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime12 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message" style="width: 100%;">
                                                                    <div class="thumb-wrap-how">
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
                                                                </div>
                                                            </div>
                                                            <transition name="fade">
                                                                <div
                                                                    v-if="btnDaleeBiz5"
                                                                    class="chat-controls"
                                                                >
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnBiz15"
                                                                        @click="btnBiz15"
                                                                    >
                                                                        <v-icon class="mr-3">mdi-send</v-icon>
                                                                        Далее
                                                                    </v-btn>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answBiz15"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime13 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Далее
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz16"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime13 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        А это видео от партнеров, которые уже получили свои автомобили. Вы тоже можете стать членом авто клуба LR.
                                                                    </p>
                                                                    <div class="thumb-wrap">
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
                                                                </div>
                                                            </div>
                                                            <transition name="fade">
                                                                <div
                                                                    v-if="btnDaleeBiz6_1"
                                                                    class="chat-controls"
                                                                >
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnBiz17_1"
                                                                        @click="btnBiz17_1"
                                                                    >
                                                                        <v-icon class="mr-3">mdi-send</v-icon>
                                                                        Далее
                                                                    </v-btn>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </transition>

<!--                                                <transition name="fade">-->
<!--                                                    <div-->
<!--                                                        class="chat-item"-->
<!--                                                        v-if="mesBiz17"-->
<!--                                                    >-->
<!--                                                        <div class="chat-avatar">-->
<!--                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"-->
<!--                                                                 alt=""-->
<!--                                                            >-->
<!--                                                        </div>-->
<!--                                                        <div class="chat-block">-->
<!--                                                            <div class="chat-date">-->
<!--                                                                {{ nowDateTime.dateTime13 }}-->
<!--                                                            </div>-->
<!--                                                            <div class="chat-messages">-->
<!--                                                                <p-->
<!--                                                                    class="mb-5"-->
<!--                                                                    style="width: 100%; max-width: 550px; height: auto;"-->
<!--                                                                >-->
<!--                                                                    <img style="width: 100%;" src="/img/leedbot/KZ/history/history-kz-4.png" alt=""/>-->
<!--                                                                </p>-->
<!--                                                                <p-->
<!--                                                                    class="mb-5"-->
<!--                                                                >-->
<!--                                                                    Татьяна, по образованию юрист.-->
<!--                                                                </p>-->

<!--                                                                <p-->
<!--                                                                    class="mb-5"-->
<!--                                                                >-->
<!--                                                                    Предприниматель, до знакомства с LR имела сеть магазинов, в 2014 году решила построить бизнес с немецкой компанией и не ошиблась!-->
<!--                                                                </p>-->

<!--                                                                <p-->
<!--                                                                    class="mb-5"-->
<!--                                                                >-->
<!--                                                                    За 1 год получила два автомобиля, в 2020 третий авто и вышла на стабильный доход в 2 000 000 тенге.-->
<!--                                                                </p>-->
<!--                                                                <v-btn-->
<!--                                                                    class="chat-btn"-->
<!--                                                                    :disabled="disBtnOtzAvto1"-->
<!--                                                                    @click="btnOtzAvto1"-->
<!--                                                                >-->
<!--                                                                    <v-icon class="mr-3">mdi-send</v-icon>-->
<!--                                                                    Далее-->
<!--                                                                </v-btn>-->

<!--                                                                <transition name="fade">-->
<!--                                                                    <div v-if="imgAvto2" class="mt-10">-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                            style="width: 100%; max-width: 550px; height: auto;"-->
<!--                                                                        >-->
<!--                                                                            <img style="width: 100%;" src="/img/leedbot/avto/avto2.jpeg" alt=""/>-->
<!--                                                                        </p>-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                        >-->
<!--                                                                            Ольга, 17 лет работала бухгалтером.-->
<!--                                                                        </p>-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                        >-->
<!--                                                                            Уволилась с работы, потому что не получалось уделять больше времени троим детям,-->
<!--                                                                            полноценно заниматься их воспитанием и учебой.-->
<!--                                                                        </p>-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                        >-->
<!--                                                                            Через год получила авто от LR, а через 1,5 года вышла на ежемесячный доход 90 000 руб.-->
<!--                                                                            Досрочно закрыла кредит.-->
<!--                                                                        </p>-->
<!--                                                                        <v-btn-->
<!--                                                                            class="chat-btn"-->
<!--                                                                            :disabled="disBtnOtzAvto2"-->
<!--                                                                            @click="btnOtzAvto2"-->
<!--                                                                        >-->
<!--                                                                            <v-icon class="mr-3">mdi-send</v-icon>-->
<!--                                                                            Далее-->
<!--                                                                        </v-btn>-->
<!--                                                                    </div>-->
<!--                                                                </transition>-->

<!--                                                                <transition name="fade">-->
<!--                                                                    <div v-if="imgAvto3" class="mt-10">-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                            style="width: 100%; max-width: 550px; height: auto;"-->
<!--                                                                        >-->
<!--                                                                            <img style="width: 100%;" src="/img/leedbot/avto/avto3.jpeg" alt=""/>-->
<!--                                                                        </p>-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                        >-->
<!--                                                                            Ильгина, в прошлом инженер в нефтяной компании.-->
<!--                                                                        </p>-->
<!--                                                                        <p>-->
<!--                                                                            Работа в жестком графике, было мало времени на себя и семью.-->
<!--                                                                        </p>-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                        >-->
<!--                                                                            В ЛР пришла за свободой распоряжаться своим временем, личностным и финансовым ростом.-->
<!--                                                                            Через пол года в нашей семье появился первый авто от LR.-->
<!--                                                                        </p>-->
<!--                                                                        <v-btn-->
<!--                                                                            class="chat-btn"-->
<!--                                                                            :disabled="disBtnOtzAvto3"-->
<!--                                                                            @click="btnOtzAvto3"-->
<!--                                                                        >-->
<!--                                                                            <v-icon class="mr-3">mdi-send</v-icon>-->
<!--                                                                            Далее-->
<!--                                                                        </v-btn>-->
<!--                                                                    </div>-->
<!--                                                                </transition>-->

<!--                                                                <transition name="fade">-->
<!--                                                                    <div v-if="imgAvto4" class="mt-10">-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                            style="width: 100%; max-width: 550px; height: auto;"-->
<!--                                                                        >-->
<!--                                                                            <img style="width: 100%;" src="/img/leedbot/avto/avto4.jpeg" alt=""/>-->
<!--                                                                        </p>-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                        >-->
<!--                                                                            Татьяна, до LR медработник - оптометрист с з/п на крайнем севере 20000.-->
<!--                                                                        </p>-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                        >-->
<!--                                                                            В LR пришла потому что устала от кредитов и постоянной нехватки денег даже на минимум.-->
<!--                                                                        </p>-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                        >-->
<!--                                                                            Сейчас мой ежемесячный доход 90 000, уволилась с работы и получила авто от компании.-->
<!--                                                                        </p>-->
<!--                                                                        <v-btn-->
<!--                                                                            class="chat-btn"-->
<!--                                                                            :disabled="disBtnOtzAvto4"-->
<!--                                                                            @click="btnOtzAvto4"-->
<!--                                                                        >-->
<!--                                                                            <v-icon class="mr-3">mdi-send</v-icon>-->
<!--                                                                            Далее-->
<!--                                                                        </v-btn>-->
<!--                                                                    </div>-->
<!--                                                                </transition>-->

<!--                                                                <transition name="fade">-->
<!--                                                                    <div v-if="imgAvto5" class="mt-10">-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                            style="width: 100%; max-width: 550px; height: auto;"-->
<!--                                                                        >-->
<!--                                                                            <img style="width: 100%;" src="/img/leedbot/avto/avto5.jpeg" alt=""/>-->
<!--                                                                        </p>-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                        >-->
<!--                                                                            Надежда, в прошлом физик-математик.-->
<!--                                                                        </p>-->
<!--                                                                        <p-->
<!--                                                                            class="mb-5"-->
<!--                                                                        >-->
<!--                                                                            В LR пришла во время декретного отпуска, когда уже собиралась открыть свой бизнес - мыловарню.-->
<!--                                                                            Через 1,5 года получила свой первый авто от компании. Сейчас уже второй авто.-->
<!--                                                                            Доходы от LR позволили не выходить после декрета на работу и не заморачиваться с мыловарней.-->
<!--                                                                        </p>-->
<!--                                                                        <v-btn-->
<!--                                                                            class="chat-btn"-->
<!--                                                                            :disabled="disBtnOtzAvto5"-->
<!--                                                                            @click="btnOtzAvto5"-->
<!--                                                                        >-->
<!--                                                                            <v-icon class="mr-3">mdi-send</v-icon>-->
<!--                                                                            Далее-->
<!--                                                                        </v-btn>-->
<!--                                                                    </div>-->
<!--                                                                </transition>-->
<!--                                                            </div>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                </transition>-->

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz18"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime14 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        {{ clientData.name }}, почему вы сможете начать зарабатывать с нами:
                                                                    </p>
                                                                    <ul>
                                                                        <li>
                                                                            <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                                            Пройдете пошаговое обучение
                                                                        </li>
                                                                        <li>
                                                                            <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                                            Получите современные инструменты
                                                                        </li>
                                                                        <li>
                                                                            <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                                            У вас будет личный куратор, который проведет по всем шагам и поможет быстрее начать
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz19"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime14 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Хотите узнать, как начать, или остались вопросы?
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Оставьте заявку и я помогу разобраться.
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Выберите удобный для вас мессенджер, куда я также скину обещанный подарок:
                                                                    </p>
                                                                    <div v-if="userData.leedbonus">
                                                                        <span v-html="userData.leedbonus"></span>
                                                                    </div>
                                                                    <div v-else>
                                                                        <p style="width: 100%; max-width: 450px; height: auto">
                                                                            <img style="width: 100%;" src="/img/leedbot/leed-book.jpg" alt=""/>
                                                                        </p>
                                                                        <p>
                                                                            7 книг в коротком изложении, которые помогут запустить мощные перемены в жизни.
                                                                            Выжимка ключевых идей книги в аудио и текстовом формате,
                                                                            которую можно изучить всего за 30 минут.
                                                                        </p>
                                                                    </div>
                                                                    <div class="mt-7">
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
                                                                            color="success"
                                                                            @click="btnWhatsapp"
                                                                        >
                                                                            <v-icon>mdi-whatsapp</v-icon>
                                                                        </v-btn>
                                                                    </div>
                                                                </div>
                                                            </div>
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
                                                                        :disabled="disBtnBiz19"
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
<!--                                                                        :disabled="disBtnBiz19"-->
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
                                                                        :disabled="disBtnBiz19"
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
                                                        v-if="mesBiz20"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime15 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">Заявка отправлена, я свяжусь с вами в ближайшее время</p>
                                                                    <p class="mb-3 mr-3">
                                                                        Или напишите мне:
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

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz21"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime15 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Пока можете изучить информацию о продукции компании
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls-end">
                                                                <v-btn
                                                                    class="chat-btn btn-skip"
                                                                    :disabled="disBtnBizSkip21"
                                                                    @click="btnBizSkip21"
                                                                >
                                                                    Пропустить
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnBiz21"
                                                                    @click="btnBiz21"
                                                                >
                                                                    Расскажи про продукт
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answBiz21"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime16 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    {{ answerBiz25 }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesBiz22"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime16 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Хорошо, больше не отвлекаю. Свяжусь с вами в ближайшее время.
                                                                    </p>
                                                                    <p class="mb-3 mr-3">
                                                                        Или напишите мне:
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

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd1"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime2 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Мы сотрудничаем с немецкой компанией-производителем продукции,
                                                                        с помощью которой можно:
                                                                    </p>
                                                                    <ul>
                                                                        <li>
                                                                            <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                                            Укрепить иммунитет
                                                                        </li>
                                                                        <li>
                                                                            <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                                            Убрать живот
                                                                        </li>
                                                                        <li>
                                                                            <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                                            Снизить утомляемость в течение дня
                                                                        </li>
                                                                        <li>
                                                                            <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                                            Уменьшить стресс
                                                                        </li>
                                                                        <li>
                                                                            <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                                            Укрепить суставы
                                                                        </li>
                                                                        <li>
                                                                            <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                                            Выглядеть моложе
                                                                        </li>
                                                                        <li>
                                                                            <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                                            Меньше болеть
                                                                        </li>
                                                                        <li>
                                                                            <v-icon color="green" class="mr-2">mdi-check-bold</v-icon>
                                                                            Избавиться от аллергии и проблем с кожей
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd2"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime2 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Коротко о компании LR Health & Beauty
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd3"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime2 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p v-if="userData.gender === 'ж'">
                                                                        <!-- audio element -->
                                                                        <vue-player
                                                                            audio
                                                                            :sources="audioSources3g"
                                                                        />
                                                                    </p>
                                                                    <p v-else>
                                                                        <!-- audio element -->
                                                                        <vue-player
                                                                            audio
                                                                            :sources="audioSources3"
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <transition name="fade">
                                                                <div
                                                                    v-if="btnDaleeProd1"
                                                                    class="chat-controls"
                                                                >
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnProd3"
                                                                        @click="btnProd3"
                                                                    >
                                                                        <v-icon class="mr-3">mdi-send</v-icon>
                                                                        Далее
                                                                    </v-btn>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answProd3"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime3 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Далее
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd4"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime3 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Посмотрите видео о продукции компании LR
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd5"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime3 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message" style="width: 100%;">
                                                                    <div class="thumb-wrap">
                                                                        <iframe
                                                                            width="560"
                                                                            height="315"
                                                                            src="https://www.youtube.com/embed/dvykWW6JGO4"
                                                                            title="О продукции компании LR"
                                                                            frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                            allowfullscreen
                                                                        ></iframe>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <transition name="fade">
                                                                <div
                                                                    v-if="btnDaleeProd2"
                                                                    class="chat-controls"
                                                                >
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnProd5"
                                                                        @click="btnProd5"
                                                                    >
                                                                        <v-icon class="mr-3">mdi-send</v-icon>
                                                                        Далее
                                                                    </v-btn>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answProd5"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime4 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Далее
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd6"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime4 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Посмотрите несколько отзывов о продукте
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd7"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime4 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <p
                                                                    class="mb-5"
                                                                    style="width: 100%; max-width: 550px; height: auto;"
                                                                >
                                                                    <img style="width: 100%;" src="/img/leedbot/product/product1.jpg" alt=""/>
                                                                </p>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnProdOtz1"
                                                                    @click="btnProdOtz1"
                                                                >
                                                                    <v-icon class="mr-3">mdi-send</v-icon>
                                                                    Далее
                                                                </v-btn>

                                                                <transition name="fade">
                                                                    <p
                                                                        v-if="imgProduct2"
                                                                        class="mb-5"
                                                                        style="width: 100%; max-width: 550px; height: auto;"
                                                                    >
                                                                        <img style="width: 100%;" src="/img/leedbot/product/product2.jpg" alt=""/>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnProdOtz2"
                                                                            @click="btnProdOtz2"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </p>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div
                                                                        v-if="videoProduct3"
                                                                        class="mb-5"
                                                                    >
                                                                        <p
                                                                            class="mt-13 mb-5"
                                                                        >
                                                                            Бабушка не могла ходить, не могла сама одеться, болели суставы.
                                                                            После применения продукции LR начала двигаться самостоятельно.
                                                                        </p>
                                                                        <div class="thumb-wrap mb-10">
                                                                            <iframe
                                                                                width="560"
                                                                                height="315"
                                                                                src="https://www.youtube.com/embed/ZDBu0KPh2fk"
                                                                                title="Отзыв о продукции LR (3)"
                                                                                frameborder="0"
                                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                allowfullscreen
                                                                            ></iframe>
                                                                        </div>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnProdOtz3"
                                                                            @click="btnProdOtz3"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div
                                                                        v-if="videoProduct4"
                                                                        class="mb-5"
                                                                    >
                                                                        <p
                                                                            class="mt-13 mb-5"
                                                                        >
                                                                            Ушла глаукома, нормализовался вес, коленные суставы пришли в норму.
                                                                        </p>
                                                                        <div class="thumb-wrap mb-10">
                                                                            <iframe
                                                                                width="560"
                                                                                height="315"
                                                                                src="https://www.youtube.com/embed/rUBohM478XY"
                                                                                title="Отзыв о продукции LR (4)"
                                                                                frameborder="0"
                                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                allowfullscreen
                                                                            ></iframe>
                                                                        </div>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnProdOtz4"
                                                                            @click="btnProdOtz4"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div
                                                                        v-if="videoProduct5"
                                                                        class="mb-5"
                                                                    >
                                                                        <p
                                                                            class="mt-13 mb-5"
                                                                        >
                                                                            Уменьшилась раковая опухоль мозга, вернулось зрение и слух, ушли метостазы.
                                                                        </p>
                                                                        <div class="thumb-wrap mb-10">
                                                                            <iframe
                                                                                width="560"
                                                                                height="315"
                                                                                src="https://www.youtube.com/embed/zKMMQGILR5g"
                                                                                title="Отзыв о продукции LR (5)"
                                                                                frameborder="0"
                                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                allowfullscreen
                                                                            ></iframe>
                                                                        </div>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnProdOtz5"
                                                                            @click="btnProdOtz5"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div
                                                                        v-if="videoProduct6"
                                                                        class="mb-5"
                                                                    >
                                                                        <p
                                                                            class="mt-13 mb-5"
                                                                        >
                                                                            Женщина в возрасте перенесла Covid бессимптомно, укрепляла иммунитет продукцией LR.
                                                                        </p>
                                                                        <div class="thumb-wrap mb-10">
                                                                            <iframe
                                                                                width="560"
                                                                                height="315"
                                                                                src="https://www.youtube.com/embed/dwv4gwHiNto"
                                                                                title="Отзыв о продукции LR (6)"
                                                                                frameborder="0"
                                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                allowfullscreen
                                                                            ></iframe>
                                                                        </div>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnProdOtz6"
                                                                            @click="btnProdOtz6"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>

                                                                <transition name="fade">
                                                                    <div
                                                                        v-if="videoProduct7"
                                                                        class="mb-5"
                                                                    >
                                                                        <p
                                                                            class="mt-13 mb-5"
                                                                        >
                                                                            Ушла сезонная аллергия и вторичное бесплодие.
                                                                        </p>
                                                                        <div class="thumb-wrap mb-10">
                                                                            <iframe
                                                                                width="560"
                                                                                height="315"
                                                                                src="https://www.youtube.com/embed/KidZ_iXUnfs"
                                                                                title="Отзыв о продукции LR (7)"
                                                                                frameborder="0"
                                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                allowfullscreen
                                                                            ></iframe>
                                                                        </div>
                                                                        <v-btn
                                                                            class="chat-btn"
                                                                            :disabled="disBtnProdOtz7"
                                                                            @click="btnProdOtz7"
                                                                        >
                                                                            <v-icon class="mr-3">mdi-send</v-icon>
                                                                            Далее
                                                                        </v-btn>
                                                                    </div>
                                                                </transition>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd8"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime5 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Почему наш продукт сейчас пользуется большим спросом
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd9"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime5 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p v-if="userData.gender === 'ж'">
                                                                        <!-- audio element -->
                                                                        <vue-player
                                                                            audio
                                                                            :sources="audioSources4g"
                                                                        />
                                                                    </p>
                                                                    <p v-else>
                                                                        <!-- audio element -->
                                                                        <vue-player
                                                                            audio
                                                                            :sources="audioSources4"
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <transition name="fade">
                                                                <div
                                                                    v-if="btnDaleeProd4"
                                                                    class="chat-controls"
                                                                >
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnProd9"
                                                                        @click="btnProd9"
                                                                    >
                                                                        <v-icon class="mr-3">mdi-send</v-icon>
                                                                        Далее
                                                                    </v-btn>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answProd9"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime6 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Далее
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd10"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime6 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p style="width: 100%; max-width: 450px; height: auto">
                                                                        <img style="width: 100%;" src="/img/leedbot/grafik_bad.jpeg" alt=""/>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd11"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime6 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Как видно из графика, жители стран, потребляющих БАДы, живут значительно дольше
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd12"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime6 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Посмотрите видео про БАДы от профессора Владимира Дадали
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd13"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime6 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message" style="width: 100%;">
                                                                    <div class="thumb-wrap">
                                                                        <iframe
                                                                            width="560"
                                                                            height="315"
                                                                            src="https://fast.wistia.net/embed/iframe/h3rfnqq5uc"
                                                                            title="Профессор Дадали о БАДах"
                                                                            frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                            allowfullscreen
                                                                        ></iframe>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <transition name="fade">
                                                                <div
                                                                    v-if="btnDaleeProd5"
                                                                    class="chat-controls"
                                                                >
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnProd13"
                                                                        @click="btnProd13"
                                                                    >
                                                                        <v-icon class="mr-3">mdi-send</v-icon>
                                                                        Далее
                                                                    </v-btn>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answProd13"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Далее
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd14"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Чем продукция LR отличается от других
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd15"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime7 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p v-if="userData.gender === 'ж'">
                                                                        <!-- audio element -->
                                                                        <vue-player
                                                                            audio
                                                                            :sources="audioSources5g"
                                                                        />
                                                                    </p>
                                                                    <p v-else>
                                                                        <!-- audio element -->
                                                                        <vue-player
                                                                            audio
                                                                            :sources="audioSources5"
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <transition name="fade">
                                                                <div
                                                                    v-if="btnDaleeProd6"
                                                                    class="chat-controls"
                                                                >
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnProd15"
                                                                        @click="btnProd15"
                                                                    >
                                                                        <v-icon class="mr-3">mdi-send</v-icon>
                                                                        Далее
                                                                    </v-btn>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answProd15"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime8 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Далее
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd16"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime8 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Чтобы узнать больше об Алоэ Вера, посмотрите видео
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd17"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime8 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message" style="width: 100%;">
                                                                    <div class="thumb-wrap">
                                                                        <iframe
                                                                            width="560"
                                                                            height="315"
                                                                            src="https://www.youtube.com/embed/6y6JxGx0xi0"
                                                                            title="Про Алое Вера от компании LR"
                                                                            frameborder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                            allowfullscreen
                                                                        ></iframe>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <transition name="fade">
                                                                <div
                                                                    v-if="btnDaleeProd7"
                                                                    class="chat-controls"
                                                                >
                                                                    <v-btn
                                                                        class="chat-btn"
                                                                        :disabled="disBtnProd17"
                                                                        @click="btnProd17"
                                                                    >
                                                                        <v-icon class="mr-3">mdi-send</v-icon>
                                                                        Далее
                                                                    </v-btn>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answProd17"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime9 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Далее
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesClientChat"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime10 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Хотите узнать больше о продукции компании LR,
                                                                        первыми узнавать об акциях и выгодных предложениях?
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Оставьте заявку и я добавлю вас в специальный чат
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        <span v-html="userData.about_chat"></span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls-end">
                                                                <v-btn
                                                                    class="chat-btn btn-skip"
                                                                    :disabled="disBtnChatSkip"
                                                                    @click="btnChatSkip"
                                                                >
                                                                    Пропустить
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnChat"
                                                                    @click="btnChat"
                                                                >
                                                                    Оставить заявку
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answChat"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime11 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    {{ answerClientChat }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesSendChat"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime11 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Выберите удобный для вас мессенджер и я отправлю вам ссылку на специальный чат
                                                                </div>
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
<!--                                                                    <v-btn-->
<!--                                                                        fab-->
<!--                                                                        dark-->
<!--                                                                        small-->
<!--                                                                        class="mr-3"-->
<!--                                                                        color="blue"-->
<!--                                                                        @click="btnTelegram"-->
<!--                                                                    >-->
<!--                                                                        <v-icon>mdi-send</v-icon>-->
<!--                                                                    </v-btn>-->
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
                                                            <div v-if="btnWhatsappTrue">
                                                                <div class="chat-input">
                                                                    <v-text-field
                                                                        :disabled="disInpName"
                                                                        label="Введите свое имя"
                                                                        prepend-icon="mdi-face-man"
                                                                        type="text"
                                                                        v-model.trim="clientData.name"
                                                                        :error-messages="nameErrors"
                                                                        @input="$v.clientData.name.$touch()"
                                                                        @blur="$v.clientData.name.$touch()"
                                                                    />
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
                                                                        :disabled="disBtnSendChat"
                                                                        @click="btnSendChat"
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
<!--                                                                        :disabled="disInpName"-->
<!--                                                                        label="Введите свое имя"-->
<!--                                                                        prepend-icon="mdi-face-man"-->
<!--                                                                        type="text"-->
<!--                                                                        v-model.trim="clientData.name"-->
<!--                                                                        :error-messages="nameErrors"-->
<!--                                                                        @input="$v.clientData.name.$touch()"-->
<!--                                                                        @blur="$v.clientData.name.$touch()"-->
<!--                                                                    />-->
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
<!--                                                                        :disabled="disBtnSendChat"-->
<!--                                                                        @click="btnSendChat"-->
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
                                                                        :disabled="disInpName"
                                                                        label="Введите свое имя"
                                                                        prepend-icon="mdi-face-man"
                                                                        type="text"
                                                                        v-model.trim="clientData.name"
                                                                        :error-messages="nameErrors"
                                                                        @input="$v.clientData.name.$touch()"
                                                                        @blur="$v.clientData.name.$touch()"
                                                                    />
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
                                                                        :disabled="disBtnSendChat"
                                                                        @click="btnSendChat"
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
                                                        v-if="mesTest"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime12 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">
                                                                        Вам было бы интересно пройти тест и узнать о состоянии своего здоровья?
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Этот тест разработан специалистами из Германии, и в Европе люди платят за него
                                                                        80 евро. Т.к. я сотрудничаю с немецкой компанией, то у меня есть возможность
                                                                        предоставить вам бесплатный доступ к тесту.
                                                                    </p>
                                                                    <p class="mb-5">
                                                                        Хотите бесплатно пройти онлайн-тест? Оставьте заявку.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls-end">
                                                                <v-btn
                                                                    class="chat-btn btn-skip"
                                                                    :disabled="disBtnTestSkip"
                                                                    @click="btnTestSkip"
                                                                >
                                                                    Пропустить
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnTest"
                                                                    @click="btnTest"
                                                                >
                                                                    Оставить заявку
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answTest"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime13 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    {{ answerTest }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesSendTest"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime13 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Выберите удобный для вас мессенджер и я отправлю вам ссылку на прохождение теста
                                                                </div>
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
<!--                                                                    <v-btn-->
<!--                                                                        fab-->
<!--                                                                        dark-->
<!--                                                                        small-->
<!--                                                                        class="mr-3"-->
<!--                                                                        color="blue"-->
<!--                                                                        @click="btnTelegram"-->
<!--                                                                    >-->
<!--                                                                        <v-icon>mdi-send</v-icon>-->
<!--                                                                    </v-btn>-->
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
                                                            <div v-if="btnWhatsappTrue">
                                                                <div class="chat-input">
                                                                    <v-text-field
                                                                        :disabled="disInpName"
                                                                        label="Введите свое имя"
                                                                        prepend-icon="mdi-face-man"
                                                                        type="text"
                                                                        v-model.trim="clientData.name"
                                                                        :error-messages="nameErrors"
                                                                        @input="$v.clientData.name.$touch()"
                                                                        @blur="$v.clientData.name.$touch()"
                                                                    />
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
                                                                        :disabled="disBtnSendTest"
                                                                        @click="btnSendTest"
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
<!--                                                                        :disabled="disInpName"-->
<!--                                                                        label="Введите свое имя"-->
<!--                                                                        prepend-icon="mdi-face-man"-->
<!--                                                                        type="text"-->
<!--                                                                        v-model.trim="clientData.name"-->
<!--                                                                        :error-messages="nameErrors"-->
<!--                                                                        @input="$v.clientData.name.$touch()"-->
<!--                                                                        @blur="$v.clientData.name.$touch()"-->
<!--                                                                    />-->
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
<!--                                                                        :disabled="disBtnSendTest"-->
<!--                                                                        @click="btnSendTest"-->
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
                                                                        :disabled="disInpName"
                                                                        label="Введите свое имя"
                                                                        prepend-icon="mdi-face-man"
                                                                        type="text"
                                                                        v-model.trim="clientData.name"
                                                                        :error-messages="nameErrors"
                                                                        @input="$v.clientData.name.$touch()"
                                                                        @blur="$v.clientData.name.$touch()"
                                                                    />
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
                                                                        :disabled="disBtnSendTest"
                                                                        @click="btnSendTest"
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
                                                        v-if="mesReqProd"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime14 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p>
                                                                        Хочешь узнать больше информации и получить бесплатную консультацию по продукту?
                                                                        Отправь заявку и я расскажу подробнее
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls">
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnReqProd"
                                                                    @click="btnReqProd"
                                                                >
                                                                    Оставить заявку
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnSkipProd"
                                                                    @click="btnSkipProd"
                                                                >
                                                                    Расскажи как можно заработать
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answReqProd"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime15 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    {{ answerReqProd }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesSendProd"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime15 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Выберите удобный для вас мессенджер и я свяжусь с вами в ближайшее время
                                                                </div>
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
<!--                                                                    <v-btn-->
<!--                                                                        fab-->
<!--                                                                        dark-->
<!--                                                                        small-->
<!--                                                                        class="mr-3"-->
<!--                                                                        color="blue"-->
<!--                                                                        @click="btnTelegram"-->
<!--                                                                    >-->
<!--                                                                        <v-icon>mdi-send</v-icon>-->
<!--                                                                    </v-btn>-->
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
                                                            <div v-if="btnWhatsappTrue">
                                                                <div class="chat-input">
                                                                    <v-text-field
                                                                        :disabled="disInpName"
                                                                        label="Введите свое имя"
                                                                        prepend-icon="mdi-face-man"
                                                                        type="text"
                                                                        v-model.trim="clientData.name"
                                                                        :error-messages="nameErrors"
                                                                        @input="$v.clientData.name.$touch()"
                                                                        @blur="$v.clientData.name.$touch()"
                                                                    />
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
                                                                        :disabled="disBtnSendProd"
                                                                        @click="btnSendProd"
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
<!--                                                                        :disabled="disInpName"-->
<!--                                                                        label="Введите свое имя"-->
<!--                                                                        prepend-icon="mdi-face-man"-->
<!--                                                                        type="text"-->
<!--                                                                        v-model.trim="clientData.name"-->
<!--                                                                        :error-messages="nameErrors"-->
<!--                                                                        @input="$v.clientData.name.$touch()"-->
<!--                                                                        @blur="$v.clientData.name.$touch()"-->
<!--                                                                    />-->
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
<!--                                                                        :disabled="disBtnSendProd"-->
<!--                                                                        @click="btnSendProd"-->
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
                                                                        :disabled="disInpName"
                                                                        label="Введите свое имя"
                                                                        prepend-icon="mdi-face-man"
                                                                        type="text"
                                                                        v-model.trim="clientData.name"
                                                                        :error-messages="nameErrors"
                                                                        @input="$v.clientData.name.$touch()"
                                                                        @blur="$v.clientData.name.$touch()"
                                                                    />
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
                                                                        :disabled="disBtnSendProd"
                                                                        @click="btnSendProd"
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
                                                        v-if="mesProd18"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime16 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">Заявка отправлена, я свяжусь с вами в ближайшее время</p>
                                                                    <p class="mb-3 mr-3">
                                                                        Или напишите мне:
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

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd19"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime16 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    Интересно узнать, как с нами можно еще и зарабатывать?
                                                                </div>
                                                            </div>
                                                            <div class="chat-controls-end">
                                                                <v-btn
                                                                    class="chat-btn btn-skip"
                                                                    :disabled="disBtnProd19Skip"
                                                                    @click="btnProd19Skip"
                                                                >
                                                                    Пропустить
                                                                </v-btn>
                                                                <v-btn
                                                                    class="chat-btn"
                                                                    :disabled="disBtnProd19"
                                                                    @click="btnProd19"
                                                                >
                                                                    Расскажи как заработать
                                                                </v-btn>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item item-user"
                                                        v-if="answProd19"
                                                    >
                                                        <div class="chat-avatar-user"></div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime17 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    {{ answerProd19 }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>

                                                <transition name="fade">
                                                    <div
                                                        class="chat-item"
                                                        v-if="mesProd20"
                                                    >
                                                        <div class="chat-avatar">
                                                            <img v-if="userData.avatar" :src="`${ $store.state.serverPath }/storage/${ userData.avatar }`"
                                                                 alt=""
                                                            >
                                                        </div>
                                                        <div class="chat-block">
                                                            <div class="chat-date">
                                                                {{ nowDateTime.dateTime17 }}
                                                            </div>
                                                            <div class="chat-messages">
                                                                <div class="chat-message">
                                                                    <p class="mb-5">Хорошо, больше не отвлекаю. Свяжусь с вами в ближайшее время</p>
                                                                    <p class="mb-3 mr-3">
                                                                        Или напишите мне:
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
                                                                    <p class="mb-5">На данном этапе информации достаточно.</p>
                                                                    <p class="mb-5">Я свяжусь с вами в ближайшее время.</p>
                                                                    <p class="mb-3 mr-3">
                                                                        Или напишите мне:
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

import {validationMixin} from 'vuelidate'
import {required, minLength, maxLength, numeric, helpers} from 'vuelidate/lib/validators'

const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)

export default {
    name: "LeedbotKZ",
    mixins: [validationMixin],
    data: () => ({
        isShow: false,
        loading: true,
        lr_number: '',
        errors: {},
        audioSources1: {
            'audio/mp3': '/audio/leedbot/audio_leedbot_biz1.mp3'
        },
        audioSources2: {
            'audio/mp3': '/audio/leedbot/audio_leedbot_biz2.mp3'
        },
        audioSources3: {
            'audio/mp3': '/audio/leedbot/audio_leedbot_prod1.mp3'
        },
        audioSources4: {
            'audio/mp3': '/audio/leedbot/audio_leedbot_prod2.mp3'
        },
        audioSources5: {
            'audio/mp3': '/audio/leedbot/audio_leedbot_prod3.mp3'
        },
        audioSources1g: {
            'audio/mp3': '/audio/leedbot/audio_leedbot_biz1g.mp3'
        },
        audioSources2g: {
            'audio/mp3': '/audio/leedbot/audio_leedbot_biz2g.mp3'
        },
        audioSources3g: {
            'audio/mp3': '/audio/leedbot/audio_leedbot_prod1g.mp3'
        },
        audioSources4g: {
            'audio/mp3': '/audio/leedbot/audio_leedbot_prod2g.mp3'
        },
        audioSources5g: {
            'audio/mp3': '/audio/leedbot/audio_leedbot_prod3g.mp3'
        },
        nowDateTime: {
            dateTime1: '',
            dateTime2: '',
            dateTime3: '',
            dateTime4: '',
            dateTime5: '',
            dateTime6: '',
            dateTime7: '',
            dateTime8: '',
            dateTime9: '',
            dateTime10: '',
            dateTime11: '',
            dateTime12: '',
            dateTime13: '',
            dateTime14: '',
            dateTime15: '',
            dateTime16: '',
            dateTime17: '',
            dateTime18: '',
        },
        clientData: {
            branch: '',
            name: '',
            gender: '',
            age: '',
            target_a: '',
            income_want: '',
            phone: '',
            phone_whatsapp: '',
            phone_viber: '',
            // telegram: '',
            req: '',
            partner: '',
            instrument: 'Лидбот по бизнесу',
            step: 'Новый',
        },
        zayavka: false,
        answerBiz25: '',
        answerClientChat: '',
        answerTest: '',
        answerReqProd: '',
        answerProd19: '',
        cookieShow: true,
        mesFirst: false,
        mesSecond: false,
        disBtnBiz: false,
        disBtnProd: false,
        answBizProd: false,
        mesBiz1: false,
        disInpName: false,
        disBtnName: false,
        answName: false,
        answOk1: false,
        disBtnOk1: false,
        mesBiz2: false,
        mesBiz3: false,
        disBtnM: false,
        disBtnG: false,
        answGender: false,
        mesBiz4: false,
        disInpAge: false,
        disBtnAge: false,
        answAge: false,
        mesBiz5: false,
        disBtnNaim: false,
        disBtnFree: false,
        disBtnEnt: false,
        disBtnPfr: false,
        disBtnMlm: false,
        disBtnDekret: false,
        disBtnDom: false,
        answTarget: false,
        mesNaim1: false,
        mesNaim2: false,
        mesNaim3: false,
        mesEnt1: false,
        mesEnt2: false,
        mesEnt3: false,
        mesFree1: false,
        mesFree2: false,
        mesFree3: false,
        mesDekret1: false,
        mesDekret2: false,
        mesDekret3: false,
        mesMlm1: false,
        mesMlm2: false,
        mesMlm3: false,
        mesPfr1: false,
        mesPfr2: false,
        mesPfr3: false,
        mesDom1: false,
        mesDom2: false,
        mesDom3: false,
        disInpMoney: false,
        disBtnMoney: false,
        answMoney: false,
        mesBiz6: false,
        mesBiz7: false,
        disBtnBiz7: false,
        btnDaleeBiz1: false,
        answBiz7: false,
        mesBiz8: false,
        mesBiz9: false,
        disBtnOtzNaim1: false,
        disBtnOtzNaim2: false,
        disBtnOtzNaim3: false,
        disBtnOtzNaim4: false,
        disBtnOtzNaim5: false,
        imgNaim2: false,
        imgNaim3: false,
        imgNaim4: false,
        imgNaim5: false,
        disBtnOtzFree1: false,
        disBtnOtzFree2: false,
        disBtnOtzFree3: false,
        disBtnOtzFree4: false,
        disBtnOtzFree5: false,
        imgFree2: false,
        imgFree3: false,
        imgFree4: false,
        imgFree5: false,
        disBtnOtzEnt1: false,
        disBtnOtzEnt2: false,
        disBtnOtzEnt3: false,
        disBtnOtzEnt4: false,
        disBtnOtzEnt5: false,
        imgEnt2: false,
        imgEnt3: false,
        imgEnt4: false,
        imgEnt5: false,
        disBtnOtzPfr1: false,
        disBtnOtzPfr2: false,
        disBtnOtzPfr3: false,
        disBtnOtzPfr4: false,
        disBtnOtzPfr5: false,
        imgPfr2: false,
        imgPfr3: false,
        imgPfr4: false,
        imgPfr5: false,
        disBtnOtzMlm1: false,
        disBtnOtzMlm2: false,
        disBtnOtzMlm3: false,
        disBtnOtzMlm4: false,
        disBtnOtzMlm5: false,
        imgMlm2: false,
        imgMlm3: false,
        imgMlm4: false,
        imgMlm5: false,
        disBtnOtzDekret1: false,
        disBtnOtzDekret2: false,
        disBtnOtzDekret3: false,
        disBtnOtzDekret4: false,
        disBtnOtzDekret5: false,
        imgDekret2: false,
        imgDekret3: false,
        imgDekret4: false,
        imgDekret5: false,
        disBtnOtzDom1: false,
        disBtnOtzDom2: false,
        disBtnOtzDom3: false,
        disBtnOtzDom4: false,
        disBtnOtzDom5: false,
        imgDom2: false,
        imgDom3: false,
        imgDom4: false,
        imgDom5: false,
        disBtnBiz9_1: false,
        btnDaleeBiz2_1: false,
        answBiz9_1: false,
        mesBiz10: false,
        mesBiz10_1: false,
        mesBiz11: false,
        disBtnBiz11: false,
        btnDaleeBiz3: false,
        // answBiz11: false,
        // mesBiz12: false,
        mesBiz13: false,
        disBtnBiz13: false,
        btnDaleeBiz4: false,
        answBiz13: false,
        mesBiz14: false,
        mesBiz15: false,
        disBtnBiz15: false,
        btnDaleeBiz5: false,
        btnDaleeBiz6_1: false,
        disBtnBiz17_1: false,
        answBiz15: false,
        mesBiz16: false,
        mesBiz17: false,
        disBtnOtzAvto1: false,
        disBtnOtzAvto2: false,
        disBtnOtzAvto3: false,
        disBtnOtzAvto4: false,
        disBtnOtzAvto5: false,
        imgAvto2: false,
        imgAvto3: false,
        imgAvto4: false,
        imgAvto5: false,
        mesBiz18: false,
        mesBiz19: false,
        disBtnBiz19: false,
        btnWhatsappTrue: false,
        // btnTelegramTrue: false,
        btnViberTrue: false,
        mesBiz20: false,
        mesBiz21: false,
        disBtnBizSkip21: false,
        disBtnBiz21: false,
        answBiz21: false,
        mesBiz22: false,
        mesProd1: false,
        mesProd2: false,
        mesProd3: false,
        disBtnProd3: false,
        btnDaleeProd1: false,
        answProd3: false,
        mesProd4: false,
        mesProd5: false,
        disBtnProd5: false,
        btnDaleeProd2: false,
        answProd5: false,
        mesProd6: false,
        mesProd7: false,
        disBtnProdOtz1: false,
        disBtnProdOtz2: false,
        disBtnProdOtz3: false,
        disBtnProdOtz4: false,
        disBtnProdOtz5: false,
        disBtnProdOtz6: false,
        disBtnProdOtz7: false,
        imgProduct2: false,
        videoProduct3: false,
        videoProduct4: false,
        videoProduct5: false,
        videoProduct6: false,
        videoProduct7: false,
        mesProd8: false,
        mesProd9: false,
        disBtnProd9: false,
        btnDaleeProd4: false,
        answProd9: false,
        mesProd10: false,
        mesProd11: false,
        mesProd12: false,
        mesProd13: false,
        disBtnProd13: false,
        btnDaleeProd5: false,
        answProd13: false,
        mesProd14: false,
        mesProd15: false,
        disBtnProd15: false,
        btnDaleeProd6: false,
        answProd15: false,
        mesProd16: false,
        mesProd17: false,
        disBtnProd17: false,
        btnDaleeProd7: false,
        answProd17: false,
        disInpWhatsapp: false,
        // disInpTelegram: false,
        disInpViber: false,
        mesClientChat: false,
        disBtnChatSkip: false,
        disBtnChat: false,
        answChat: false,
        mesSendChat: false,
        disBtnSendChat: false,
        mesTest: false,
        disBtnTestSkip: false,
        disBtnTest: false,
        answTest: false,
        mesSendTest: false,
        disBtnSendTest: false,
        mesReqProd: false,
        disBtnReqProd: false,
        disBtnSkipProd: false,
        answReqProd: false,
        mesSendProd: false,
        disBtnSendProd: false,
        mesProd18: false,
        mesProd19: false,
        disBtnProd19Skip: false,
        disBtnProd19: false,
        answProd19: false,
        mesProd20: false,
        mesEndLeedbot: false,
    }),
    metaInfo: {
        title: 'Бизнес-визитка партнера LR Health & Beauty',
        meta: [
            { vmid: 'description', property: 'description', content: 'Бизнес-визитка партнера LR Health & Beauty' },
            { vmid: 'og:title', property: 'og:title', content: 'Бизнес-визитка партнера LR Health & Beauty' },
            { vmid: 'og:description', property: 'og:description', content: 'Бизнес-визитка партнера LR Health & Beauty' },
            { vmid: 'og:image', property: 'og:image', content: '/img/LogoLifePlus.png' },
        ],
    },
    created() {
        if (!this.$route.query.p) {
            if (this.$cookies.isKey('lifeplus_partner')) {
                const partnerNum = this.$cookies.get('lifeplus_partner')
                this.$router.push ({name: 'LeedbotKZ', query: { p: partnerNum }})
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
            !this.$v.clientData.name.minLength && errors.push('Минимум 2 буквы')
            !this.$v.clientData.name.maxLength && errors.push('Максимум 30 букв')
            !this.$v.clientData.name.required && errors.push('Обязательно для заполнения')
            !this.$v.clientData.name.alpha && errors.push('Только буквы')
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
        moneyErrors() {
            const errors = []
            if (!this.$v.clientData.income_want.$dirty) return errors
            !this.$v.clientData.income_want.minLength && errors.push('Минимум 2 символа')
            !this.$v.clientData.income_want.maxLength && errors.push('Максимум 191 символ')
            !this.$v.clientData.income_want.required && errors.push('Обязательно для заполнения')
            return errors
        },
        phoneErrors() {
            const errors = []
            if (!this.$v.clientData.phone.$dirty) return errors
            !this.$v.clientData.phone.numeric && errors.push('Только цифры')
            !this.$v.clientData.phone.minLength && errors.push('Минимум 5 цифр')
            !this.$v.clientData.phone.maxLength && errors.push('Максимум 20 цифр')
            !this.$v.clientData.phone.required && errors.push('Обязательно для заполнения')
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
        },
        btnBiz() {
            this.answBizProd = true
            this.disBtnBiz = true
            this.disBtnProd = true
            this.clientData.branch = 'бизнес'
            this.showTypingTxt()
            this.showMesBiz1()
        },
        showMesBiz1() {
            let v = this
            this.nowDateTime.dateTime2 = this.dateTimeNow()
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz1 = true
            }, 3500)
        },
        myName() {
            this.$v.clientData.name.$touch()
            if (!this.$v.clientData.name.$invalid) {
                this.nowDateTime.dateTime3 = this.dateTimeNow()
                this.disBtnName = true
                this.disInpName = true
                this.answName = true
                this.showTypingTxt()
                this.showMesBiz2()
            }
        },
        showMesBiz2() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz2 = true
            }, 3500)
        },
        btnOk1() {
            this.nowDateTime.dateTime4 = this.dateTimeNow()
            this.disBtnOk1 = true
            this.answOk1 = true
            this.showTypingTxt()
            this.showMesBiz3()
        },
        showMesBiz3() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz3 = true
            }, 3500)
        },
        btnM() {
            this.nowDateTime.dateTime5 = this.dateTimeNow()
            this.disBtnM = true
            this.disBtnG = true
            this.clientData.gender = 'м'
            this.answGender = true
            this.showTypingTxt()
            this.showMesBiz4()
        },
        btnG() {
            this.nowDateTime.dateTime5 = this.dateTimeNow()
            this.disBtnM = true
            this.disBtnG = true
            this.clientData.gender = 'ж'
            this.answGender = true
            this.showTypingTxt()
            this.showMesBiz4()
        },
        showMesBiz4() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz4 = true
            }, 3500)
        },
        myAge() {
            this.$v.clientData.age.$touch()
            if (!this.$v.clientData.age.$invalid) {
                this.nowDateTime.dateTime6 = this.dateTimeNow()
                this.disInpAge = true
                this.disBtnAge = true
                this.answAge = true
                this.showTypingTxt()
                this.showMesBiz5()
            }
        },
        showMesBiz5() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz5 = true
            }, 3500)
        },
        targetNaim() {
            this.nowDateTime.dateTime7 = this.dateTimeNow()
            this.disBtnNaim = true
            this.disBtnFree = true
            this.disBtnEnt = true
            this.disBtnPfr = true
            this.disBtnMlm = true
            this.disBtnDekret = true
            this.disBtnDom = true
            this.clientData.target_a = 'Работаю по найму'
            this.answTarget = true
            this.showTypingTxt()
            this.showMesNaim()
        },
        showMesNaim() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesNaim1 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 10500)
            setTimeout(function () {
                v.isShow = false
            }, 12500)
            setTimeout(function () {
                v.mesNaim2 = true
            }, 13000)
            setTimeout(function () {
                v.isShow = true
            }, 23000)
            setTimeout(function () {
                v.isShow = false
            }, 25000)
            setTimeout(function () {
                v.mesNaim3 = true
            }, 25500)
        },
        targetFree() {
            this.nowDateTime.dateTime7 = this.dateTimeNow()
            this.disBtnNaim = true
            this.disBtnFree = true
            this.disBtnEnt = true
            this.disBtnPfr = true
            this.disBtnMlm = true
            this.disBtnDekret = true
            this.disBtnDom = true
            this.clientData.target_a = 'Работаю на себя'
            this.answTarget = true
            this.showTypingTxt()
            this.showMesFree()
        },
        showMesFree() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesFree1 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 16500)
            setTimeout(function () {
                v.isShow = false
            }, 18500)
            setTimeout(function () {
                v.mesFree2 = true
            }, 19000)
            setTimeout(function () {
                v.isShow = true
            }, 32000)
            setTimeout(function () {
                v.isShow = false
            }, 34000)
            setTimeout(function () {
                v.mesFree3 = true
            }, 34500)
        },
        targetEnt() {
            this.nowDateTime.dateTime7 = this.dateTimeNow()
            this.disBtnNaim = true
            this.disBtnFree = true
            this.disBtnEnt = true
            this.disBtnPfr = true
            this.disBtnMlm = true
            this.disBtnDekret = true
            this.disBtnDom = true
            this.clientData.target_a = 'Свой бизнес'
            this.answTarget = true
            this.showTypingTxt()
            this.showMesEnt()
        },
        showMesEnt() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesEnt1 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 16500)
            setTimeout(function () {
                v.isShow = false
            }, 18500)
            setTimeout(function () {
                v.mesEnt2 = true
            }, 19000)
            setTimeout(function () {
                v.isShow = true
            }, 40000)
            setTimeout(function () {
                v.isShow = false
            }, 42000)
            setTimeout(function () {
                v.mesEnt3 = true
            }, 42500)
        },
        targetPfr() {
            this.nowDateTime.dateTime7 = this.dateTimeNow()
            this.disBtnNaim = true
            this.disBtnFree = true
            this.disBtnEnt = true
            this.disBtnPfr = true
            this.disBtnMlm = true
            this.disBtnDekret = true
            this.disBtnDom = true
            this.clientData.target_a = 'На пенсии'
            this.answTarget = true
            this.showTypingTxt()
            this.showMesPfr()
        },
        showMesPfr() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesPfr1 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 19500)
            setTimeout(function () {
                v.isShow = false
            }, 21500)
            setTimeout(function () {
                v.mesPfr2 = true
            }, 22000)
            setTimeout(function () {
                v.isShow = true
            }, 33000)
            setTimeout(function () {
                v.isShow = false
            }, 35000)
            setTimeout(function () {
                v.mesPfr3 = true
            }, 35500)
        },
        targetMlm() {
            this.nowDateTime.dateTime7 = this.dateTimeNow()
            this.disBtnNaim = true
            this.disBtnFree = true
            this.disBtnEnt = true
            this.disBtnPfr = true
            this.disBtnMlm = true
            this.disBtnDekret = true
            this.disBtnDom = true
            this.clientData.target_a = 'Сетевик'
            this.answTarget = true
            this.showTypingTxt()
            this.showMesMlm()
        },
        showMesMlm() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesMlm1 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 15500)
            setTimeout(function () {
                v.isShow = false
            }, 17500)
            setTimeout(function () {
                v.mesMlm2 = true
            }, 18000)
            setTimeout(function () {
                v.isShow = true
            }, 40000)
            setTimeout(function () {
                v.isShow = false
            }, 42000)
            setTimeout(function () {
                v.mesMlm3 = true
            }, 42500)
        },
        targetDekret() {
            this.nowDateTime.dateTime7 = this.dateTimeNow()
            this.disBtnNaim = true
            this.disBtnFree = true
            this.disBtnEnt = true
            this.disBtnPfr = true
            this.disBtnMlm = true
            this.disBtnDekret = true
            this.disBtnDom = true
            this.clientData.target_a = 'В декрете'
            this.answTarget = true
            this.showTypingTxt()
            this.showMesDekret()
        },
        showMesDekret() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesDekret1 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 24500)
            setTimeout(function () {
                v.isShow = false
            }, 26500)
            setTimeout(function () {
                v.mesDekret2 = true
            }, 27000)
            setTimeout(function () {
                v.isShow = true
            }, 45000)
            setTimeout(function () {
                v.isShow = false
            }, 47000)
            setTimeout(function () {
                v.mesDekret3 = true
            }, 47500)
        },
        targetDom() {
            this.nowDateTime.dateTime7 = this.dateTimeNow()
            this.disBtnNaim = true
            this.disBtnFree = true
            this.disBtnEnt = true
            this.disBtnPfr = true
            this.disBtnMlm = true
            this.disBtnDekret = true
            this.disBtnDom = true
            this.clientData.target_a = 'Домохозяйка'
            this.answTarget = true
            this.showTypingTxt()
            this.showMesDom()
        },
        showMesDom() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesDom1 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 22500)
            setTimeout(function () {
                v.isShow = false
            }, 24500)
            setTimeout(function () {
                v.mesDom2 = true
            }, 25000)
            setTimeout(function () {
                v.isShow = true
            }, 38000)
            setTimeout(function () {
                v.isShow = false
            }, 40000)
            setTimeout(function () {
                v.mesDom3 = true
            }, 40500)
        },
        btnMoney() {
            this.$v.clientData.income_want.$touch()
            if (!this.$v.clientData.income_want.$invalid) {
                this.nowDateTime.dateTime8= this.dateTimeNow()
                this.disInpMoney = true
                this.disBtnMoney = true
                this.answMoney = true
                this.showTypingTxt()
                this.showMesBiz6()
            }
        },
        showMesBiz6() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz6 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 6500)
            setTimeout(function () {
                v.isShow = false
            }, 8500)
            setTimeout(function () {
                v.mesBiz7 = true
            }, 9000)
            setTimeout(function () {
                v.btnDaleeBiz1 = true
            }, 19000)
        },
        btnBiz7() {
            this.nowDateTime.dateTime9= this.dateTimeNow()
            this.disBtnBiz7 = true
            this.answBiz7 = true
            this.showTypingTxt()
            this.showMesBiz8()
        },
        showMesBiz8() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz8 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 5500)
            setTimeout(function () {
                v.isShow = false
            }, 7500)
            setTimeout(function () {
                v.mesBiz9 = true
            }, 8000)
        },
        btnOtzNaim1() {
            this.disBtnOtzNaim1 = true
            this.imgNaim2 = true
        },
        btnOtzNaim2() {
            this.disBtnOtzNaim2 = true
            this.imgNaim3 = true
        },
        btnOtzNaim3() {
            this.disBtnOtzNaim3 = true
            this.imgNaim4 = true
        },
        btnOtzNaim4() {
            this.disBtnOtzNaim4 = true
            this.imgNaim5 = true
        },
        btnOtzNaim5() {
            this.nowDateTime.dateTime10= this.dateTimeNow()
            this.disBtnOtzNaim5 = true
            this.showTypingTxt()
            // this.showMesBiz10_1()
            this.showMesBiz10()
        },
        btnOtzFree1() {
            this.disBtnOtzFree1 = true
            this.imgFree2 = true
        },
        btnOtzFree2() {
            this.disBtnOtzFree2 = true
            this.imgFree3 = true
        },
        btnOtzFree3() {
            this.disBtnOtzFree3 = true
            this.imgFree4 = true
        },
        btnOtzFree4() {
            this.disBtnOtzFree4 = true
            this.imgFree5 = true
        },
        btnOtzFree5() {
            this.nowDateTime.dateTime10= this.dateTimeNow()
            this.disBtnOtzFree5 = true
            this.showTypingTxt()
            // this.showMesBiz10_1()
            this.showMesBiz10()
        },
        btnOtzEnt1() {
            this.disBtnOtzEnt1 = true
            this.imgEnt2 = true
        },
        btnOtzEnt2() {
            this.disBtnOtzEnt2 = true
            this.imgEnt3 = true
        },
        btnOtzEnt3() {
            this.disBtnOtzEnt3 = true
            this.imgEnt4 = true
        },
        btnOtzEnt4() {
            this.disBtnOtzEnt4 = true
            this.imgEnt5 = true
        },
        btnOtzEnt5() {
            this.nowDateTime.dateTime10= this.dateTimeNow()
            this.disBtnOtzEnt5 = true
            this.showTypingTxt()
            // this.showMesBiz10_1()
            this.showMesBiz10()
        },
        btnOtzPfr1() {
            this.disBtnOtzPfr1 = true
            this.imgPfr2 = true
        },
        btnOtzPfr2() {
            this.disBtnOtzPfr2 = true
            this.imgPfr3 = true
        },
        btnOtzPfr3() {
            this.disBtnOtzPfr3 = true
            this.imgPfr4 = true
        },
        btnOtzPfr4() {
            this.disBtnOtzPfr4 = true
            this.imgPfr5 = true
        },
        btnOtzPfr5() {
            this.nowDateTime.dateTime10= this.dateTimeNow()
            this.disBtnOtzPfr5 = true
            this.showTypingTxt()
            // this.showMesBiz10_1()
            this.showMesBiz10()
        },
        btnOtzMlm1() {
            this.disBtnOtzMlm1 = true
            this.imgMlm2 = true
        },
        btnOtzMlm2() {
            this.disBtnOtzMlm2 = true
            this.imgMlm3 = true
        },
        btnOtzMlm3() {
            this.disBtnOtzMlm3 = true
            this.imgMlm4 = true
        },
        btnOtzMlm4() {
            this.disBtnOtzMlm4 = true
            this.imgMlm5 = true
        },
        btnOtzMlm5() {
            this.nowDateTime.dateTime10= this.dateTimeNow()
            this.disBtnOtzMlm5 = true
            this.showTypingTxt()
            // this.showMesBiz10_1()
            this.showMesBiz10()
        },
        btnOtzDekret1() {
            this.disBtnOtzDekret1 = true
            this.imgDekret2 = true
        },
        btnOtzDekret2() {
            this.disBtnOtzDekret2 = true
            this.imgDekret3 = true
        },
        btnOtzDekret3() {
            this.disBtnOtzDekret3 = true
            this.imgDekret4 = true
        },
        btnOtzDekret4() {
            this.disBtnOtzDekret4 = true
            this.imgDekret5 = true
        },
        btnOtzDekret5() {
            this.nowDateTime.dateTime10= this.dateTimeNow()
            this.disBtnOtzDekret5 = true
            this.showTypingTxt()
            // this.showMesBiz10_1()
            this.showMesBiz10()
        },
        btnOtzDom1() {
            this.disBtnOtzDom1 = true
            this.imgDom2 = true
        },
        btnOtzDom2() {
            this.disBtnOtzDom2 = true
            this.imgDom3 = true
        },
        btnOtzDom3() {
            this.disBtnOtzDom3 = true
            this.imgDom4 = true
        },
        btnOtzDom4() {
            this.disBtnOtzDom4 = true
            this.imgDom5 = true
        },
        btnOtzDom5() {
            this.nowDateTime.dateTime10= this.dateTimeNow()
            this.disBtnOtzDom5 = true
            this.showTypingTxt()
            // this.showMesBiz10_1()
            this.showMesBiz10()
        },
        // showMesBiz10_1() {
        //     let v = this
        //     setTimeout(function () {
        //         v.isShow = false
        //     }, 3000)
        //     setTimeout(function () {
        //         v.mesBiz10_1 = true
        //     }, 3500)
        //     setTimeout(function () {
        //         v.btnDaleeBiz2_1 = true
        //     }, 10000)
        // },
        // btnBiz9_1() {
        //     this.nowDateTime.dateTime10= this.dateTimeNow()
        //     this.disBtnBiz9_1 = true
        //     this.answBiz9_1 = true
        //     this.showTypingTxt()
        //     this.showMesBiz10()
        // },
        showMesBiz10() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz10 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 5500)
            setTimeout(function () {
                v.isShow = false
            }, 7500)
            setTimeout(function () {
                v.mesBiz11 = true
            }, 8000)
            setTimeout(function () {
                v.btnDaleeBiz3 = true
            }, 18000)
        },
        btnBiz11() {
            this.nowDateTime.dateTime11= this.dateTimeNow()
            this.disBtnBiz11 = true
            // this.answBiz11 = true
            this.showTypingTxt()
            this.showMesBiz12()
        },
        showMesBiz12() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            // setTimeout(function () {
            //     v.mesBiz12 = true
            // }, 3500)
            // setTimeout(function () {
            //     v.isShow = true
            // }, 5500)
            // setTimeout(function () {
            //     v.isShow = false
            // }, 7500)
            setTimeout(function () {
                v.mesBiz13 = true
            }, 3500)
            setTimeout(function () {
                v.btnDaleeBiz4 = true
            }, 13500)
        },
        btnBiz13() {
            this.nowDateTime.dateTime12= this.dateTimeNow()
            this.disBtnBiz13 = true
            this.answBiz13 = true
            this.showTypingTxt()
            this.showMesBiz14()
        },
        showMesBiz14() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz14 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 5500)
            setTimeout(function () {
                v.isShow = false
            }, 7500)
            setTimeout(function () {
                v.mesBiz15 = true
            }, 8000)
            setTimeout(function () {
                v.btnDaleeBiz5 = true
            }, 18000)
        },
        btnBiz15() {
            this.nowDateTime.dateTime13= this.dateTimeNow()
            this.disBtnBiz15 = true
            this.answBiz15 = true
            this.showTypingTxt()
            this.showMesBiz16()
        },
        showMesBiz16() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz16 = true
            }, 3500)
            setTimeout(function () {
                v.btnDaleeBiz6_1 = true
            }, 13500)
        },
        btnBiz17_1() {
            this.nowDateTime.dateTime13= this.dateTimeNow()
            this.disBtnBiz17_1= true
            this.showTypingTxt()
            // this.showMesBiz16_1()
            this.showMesBiz18()
        },
        // showMesBiz16_1() {
        //     let v = this
        //     setTimeout(function () {
        //         v.isShow = true
        //     }, 5500)
        //     setTimeout(function () {
        //         v.isShow = false
        //     }, 7500)
        //     setTimeout(function () {
        //         v.mesBiz17 = true
        //     }, 8000)
        // },
        // btnOtzAvto1() {
        //     this.disBtnOtzAvto1 = true
        //     this.imgAvto2 = true
        // },
        // btnOtzAvto2() {
        //     this.disBtnOtzAvto2 = true
        //     this.imgAvto3 = true
        // },
        // btnOtzAvto3() {
        //     this.disBtnOtzAvto3 = true
        //     this.imgAvto4 = true
        // },
        // btnOtzAvto4() {
        //     this.disBtnOtzAvto4 = true
        //     this.imgAvto5 = true
        // },
        // btnOtzAvto5() {
        //     this.nowDateTime.dateTime14= this.dateTimeNow()
        //     this.disBtnOtzAvto5 = true
        //     this.showTypingTxt()
        //     this.showMesBiz18()
        // },
        showMesBiz18() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz18 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 8500)
            setTimeout(function () {
                v.isShow = false
            }, 10500)
            if (!this.zayavka) {
                setTimeout(function () {
                    v.mesBiz19 = true
                }, 11000)
            } else {
                setTimeout(function () {
                    v.mesEndLeedbot = true
                }, 11000)
            }
        },
        btnWhatsapp() {
            this.btnWhatsappTrue = true
            this.btnViberTrue = false
            // this.btnTelegramTrue = false
        },
        // btnTelegram() {
        //     this.btnWhatsappTrue = false
        //     this.btnViberTrue = false
        //     this.btnTelegramTrue = true
        // },
        btnViber() {
            this.btnWhatsappTrue = false
            this.btnViberTrue = true
            // this.btnTelegramTrue = false
        },
        btnSendBiz() {
            this.$v.clientData.phone_whatsapp.$touch() || this.$v.clientData.phone_viber.$touch()
            if (!this.$v.clientData.phone_whatsapp.$invalid || !this.$v.clientData.phone_viber.$invalid) {
                this.nowDateTime.dateTime15 = this.dateTimeNow()
                this.disBtnBiz19 = true
                this.disInpWhatsapp = true
                // this.disInpTelegram = true
                this.disInpViber = true
                this.clientData.req = 'Заявка на бизнес'
                this.createProspect(this.clientData)
                    .then((response) => {
                        if (response.data && response.data.success) {
                            this.errors = {}
                            this.addNotification({
                                show: true,
                                text: response.data.message,
                                color: 'success'
                            })
                            this.showTypingTxt()
                            this.showMesBiz20()
                            this.zayavka = true
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
        showMesBiz20() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz20 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 5500)
            setTimeout(function () {
                v.isShow = false
            }, 7500)
            setTimeout(function () {
                v.mesBiz21 = true
            }, 8000)
        },
        btnBizSkip21() {
            this.nowDateTime.dateTime16= this.dateTimeNow()
            this.disBtnBizSkip21 = true
            this.disBtnBiz21 = true
            this.answBiz21 = true
            this.answerBiz25 = 'Пропустить'
            this.showTypingTxt()
            this.showMesBiz21()
        },
        showMesBiz21() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesBiz22 = true
            }, 3500)
        },
        btnBiz21() {
            this.nowDateTime.dateTime16= this.dateTimeNow()
            this.disBtnBizSkip21 = true
            this.disBtnBiz21 = true
            this.answBiz21 = true
            this.answerBiz25 = 'Расскажи про продукт'
            this.mesFirst = false
            this.mesSecond = false
            this.answBizProd = false
            this.mesBiz1 = false
            this.answName = false
            this.answOk1 = false
            this.mesBiz2 = false
            this.mesBiz3 = false
            this.answGender = false
            this.mesBiz4 = false
            this.answAge = false
            this.mesBiz5 = false
            this.answTarget = false
            this.mesNaim1 = false
            this.mesNaim2 = false
            this.mesNaim3 = false
            this.mesEnt1 = false
            this.mesEnt2 = false
            this.mesEnt3 = false
            this.mesFree1 = false
            this.mesFree2 = false
            this.mesFree3 = false
            this.mesDekret1 = false
            this.mesDekret2 = false
            this.mesDekret3 = false
            this.mesMlm1 = false
            this.mesMlm2 = false
            this.mesMlm3 = false
            this.mesPfr1 = false
            this.mesPfr2 = false
            this.mesPfr3 = false
            this.mesDom1 = false
            this.mesDom2 = false
            this.mesDom3 = false
            this.answMoney = false
            this.mesBiz6 = false
            this.mesBiz7 = false
            this.answBiz7 = false
            this.mesBiz8 = false
            this.mesBiz9 = false
            this.answBiz9 = false
            this.answBiz9_1 = false
            this.mesBiz10 = false
            this.mesBiz10_1 = false
            this.answBiz17_1 = false
            this.btnDaleeBiz2_1 = false
            this.mesBiz11 = false
            this.answBiz11 = false
            this.mesBiz12 = false
            this.mesBiz13 = false
            this.answBiz13 = false
            this.mesBiz14 = false
            this.mesBiz15 = false
            this.answBiz15 = false
            this.mesBiz16 = false
            this.mesBiz17 = false
            this.answBiz17 = false
            this.mesBiz18 = false
            this.mesBiz19 = false
            this.mesBiz20 = false
            this.mesBiz21 = false
            this.answBiz21 = false
            this.mesBiz22 = false
            this.showTypingTxt()
            this.showMesProd1()
        },
        btnProd() {
            this.answBizProd = true
            this.disBtnBiz = true
            this.disBtnProd = true
            this.clientData.branch = 'продукт'
            this.showTypingTxt()
            this.showMesProd1()
        },
        showMesProd1() {
            let v = this
            this.nowDateTime.dateTime2 = this.dateTimeNow()
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesProd1 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 12500)
            setTimeout(function () {
                v.isShow = false
            }, 14500)
            setTimeout(function () {
                v.mesProd2 = true
            }, 15000)
            setTimeout(function () {
                v.isShow = true
            }, 16000)
            setTimeout(function () {
                v.isShow = false
            }, 18000)
            setTimeout(function () {
                v.mesProd3 = true
            }, 18500)
            setTimeout(function () {
                v.btnDaleeProd1 = true
            }, 28500)
        },
        btnProd3() {
            this.nowDateTime.dateTime3 = this.dateTimeNow()
            this.answProd3= true
            this.disBtnProd3 = true
            this.showTypingTxt()
            this.showMesProd4()
        },
        showMesProd4() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesProd4 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 4500)
            setTimeout(function () {
                v.isShow = false
            }, 6500)
            setTimeout(function () {
                v.mesProd5 = true
            }, 7000)
            setTimeout(function () {
                v.btnDaleeProd2 = true
            }, 17000)
        },
        btnProd5() {
            this.nowDateTime.dateTime4 = this.dateTimeNow()
            this.answProd5= true
            this.disBtnProd5 = true
            this.showTypingTxt()
            this.showMesProd6()
        },
        showMesProd6() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesProd6 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 4500)
            setTimeout(function () {
                v.isShow = false
            }, 6500)
            setTimeout(function () {
                v.mesProd7 = true
            }, 7000)
        },
        btnProdOtz1() {
            this.disBtnProdOtz1 = true
            this.imgProduct2 = true
        },
        btnProdOtz2() {
            this.disBtnProdOtz2 = true
            this.videoProduct3 = true
        },
        btnProdOtz3() {
            this.disBtnProdOtz3 = true
            this.videoProduct4 = true
        },
        btnProdOtz4() {
            this.disBtnProdOtz4 = true
            this.videoProduct5 = true
        },
        btnProdOtz5() {
            this.disBtnProdOtz5 = true
            this.videoProduct6 = true
        },
        btnProdOtz6() {
            this.disBtnProdOtz6 = true
            this.videoProduct7 = true
        },
        btnProdOtz7() {
            this.nowDateTime.dateTime5 = this.dateTimeNow()
            this.disBtnProdOtz7 = true
            this.showTypingTxt()
            this.showMesProd8()
        },
        showMesProd8() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesProd8 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 4500)
            setTimeout(function () {
                v.isShow = false
            }, 6500)
            setTimeout(function () {
                v.mesProd9 = true
            }, 7000)
            setTimeout(function () {
                v.btnDaleeProd4 = true
            }, 17000)
        },
        btnProd9() {
            this.nowDateTime.dateTime6 = this.dateTimeNow()
            this.answProd9= true
            this.disBtnProd9 = true
            this.showTypingTxt()
            this.showMesProd10()
        },
        showMesProd10() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesProd10 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 4500)
            setTimeout(function () {
                v.isShow = false
            }, 6500)
            setTimeout(function () {
                v.mesProd11 = true
            }, 7000)
            setTimeout(function () {
                v.isShow = true
            }, 8000)
            setTimeout(function () {
                v.isShow = false
            }, 10000)
            setTimeout(function () {
                v.mesProd12 = true
            }, 10500)
            setTimeout(function () {
                v.isShow = true
            }, 11500)
            setTimeout(function () {
                v.isShow = false
            }, 13500)
            setTimeout(function () {
                v.mesProd13 = true
            }, 14000)
            setTimeout(function () {
                v.btnDaleeProd5 = true
            }, 24000)
        },
        btnProd13() {
            this.nowDateTime.dateTime7 = this.dateTimeNow()
            this.answProd13= true
            this.disBtnProd13 = true
            this.showTypingTxt()
            this.showMesProd14()
        },
        showMesProd14() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesProd14 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 4500)
            setTimeout(function () {
                v.isShow = false
            }, 6500)
            setTimeout(function () {
                v.mesProd15 = true
            }, 7000)
            setTimeout(function () {
                v.btnDaleeProd6 = true
            }, 17000)
        },
        btnProd15() {
            this.nowDateTime.dateTime8 = this.dateTimeNow()
            this.answProd15= true
            this.disBtnProd15 = true
            this.showTypingTxt()
            this.showMesProd16()
        },
        showMesProd16() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesProd16 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 4500)
            setTimeout(function () {
                v.isShow = false
            }, 6500)
            setTimeout(function () {
                v.mesProd17 = true
            }, 7000)
            setTimeout(function () {
                v.btnDaleeProd7 = true
            }, 17000)
        },
        btnProd17() {
            if (!this.zayavka) {
                this.nowDateTime.dateTime9 = this.dateTimeNow()
                this.answProd17= true
                this.disBtnProd17 = true
                this.showTypingTxt()
                if (this.userData.about_chat) {
                    this.showMesClientChat()
                } else if (this.userTestData) {
                    this.showMesTest()
                } else {
                    this.showMesReqProd()
                }
            } else {
                this.nowDateTime.dateTime18 = this.dateTimeNow()
                this.answProd17= true
                this.disBtnProd17 = true
                this.showTypingTxt()
                this.showMesEndLeedbot()
            }
        },
        showMesEndLeedbot() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesEndLeedbot = true
            }, 3500)
        },
        showMesClientChat() {
            let v = this
            this.nowDateTime.dateTime10 = this.dateTimeNow()
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesClientChat = true
            }, 3500)
        },
        btnChatSkip() {
            this.nowDateTime.dateTime11 = this.dateTimeNow()
            this.answChat= true
            this.disBtnChatSkip = true
            this.disBtnChat = true
            this.answerClientChat = 'Пропустить'
            this.showTypingTxt()
            if (this.userTestData) {
                this.showMesTest()
            } else {
                this.showMesReqProd()
            }
        },
        btnChat() {
            this.nowDateTime.dateTime11 = this.dateTimeNow()
            this.answChat= true
            this.disBtnChatSkip = true
            this.disBtnChat = true
            this.answerClientChat = 'Оставить заявку'
            this.showTypingTxt()
            this.showMesSendChat()
        },
        showMesSendChat() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesSendChat = true
            }, 3500)
        },
        btnSendChat() {
            this.$v.clientData.name.$touch()
            this.$v.clientData.phone_whatsapp.$touch() || this.$v.clientData.phone_viber.$touch()
            if (!this.$v.clientData.name.$invalid) {
                if(!this.$v.clientData.phone_whatsapp.$invalid || !this.$v.clientData.phone_viber.$invalid) {
                    this.disBtnSendChat = true
                    this.disInpName = true
                    this.disInpViber = true
                    this.disInpWhatsapp = true
                    // this.disInpTelegram = true
                    this.clientData.req = 'Заявка на клиентский чат'
                    this.createProspect(this.clientData)
                        .then((response) => {
                            if (response.data && response.data.success) {
                                this.errors = {}
                                this.addNotification({
                                    show: true,
                                    text: response.data.message,
                                    color: 'success'
                                })
                                this.showTypingTxt()
                                this.showMesProd18()
                                this.zayavka = true
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
            } else {
                this.addNotification({
                    show: true,
                    text: 'Ошибка валидации',
                })
            }
        },
        showMesTest() {
            let v = this
            this.nowDateTime.dateTime12 = this.dateTimeNow()
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesTest = true
            }, 3500)
        },
        btnTestSkip() {
            this.nowDateTime.dateTime13 = this.dateTimeNow()
            this.answTest= true
            this.disBtnTestSkip = true
            this.disBtnTest = true
            this.answerTest = 'Пропустить'
            this.showTypingTxt()
            this.showMesReqProd()
        },
        btnTest() {
            this.nowDateTime.dateTime13 = this.dateTimeNow()
            this.answTest= true
            this.disBtnTestSkip = true
            this.disBtnTest = true
            this.answerTest = 'Оставить заявку'
            this.showTypingTxt()
            this.showMesSendTest()
        },
        showMesSendTest() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesSendTest = true
            }, 3500)
        },
        btnSendTest() {
            this.$v.clientData.name.$touch()
            this.$v.clientData.phone_whatsapp.$touch() || this.$v.clientData.phone_viber.$touch()
            if (!this.$v.clientData.name.$invalid) {
                if (!this.$v.clientData.phone_whatsapp.$invalid || !this.$v.clientData.phone_viber.$invalid ) {
                    this.disBtnSendTest = true
                    this.disInpName = true
                    this.disInpWhatsapp = true
                    this.disInpViber = true
                    // this.disInpTelegram = true
                    this.clientData.req = 'Заявка на онлайн-тест'
                    this.createProspect(this.clientData)
                        .then((response) => {
                            if (response.data && response.data.success) {
                                this.errors = {}
                                this.addNotification({
                                    show: true,
                                    text: response.data.message,
                                    color: 'success'
                                })
                                this.showTypingTxt()
                                this.showMesProd18()
                                this.zayavka = true
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
            } else {
                this.addNotification({
                    show: true,
                    text: 'Ошибка валидации',
                })
            }
        },
        showMesReqProd() {
            let v = this
            this.nowDateTime.dateTime14 = this.dateTimeNow()
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesReqProd = true
            }, 3500)
        },
        btnReqProd() {
            this.answReqProd = true
            this.disBtnReqProd = true
            this.disBtnSkipProd = true
            this.answerReqProd = 'Оставить заявку'
            this.showTypingTxt()
            this.showMesSendProd()
        },
        btnSkipProd() {
            // this.answReqProd = true
            this.disBtnReqProd = true
            this.disBtnSkipProd = true
            // this.answerReqProd = 'Расскажи как можно заработать'
            this.clientData.branch = 'бизнес'
            this.mesFirst = false
            this.mesSecond = false
            this.mesProd1 = false
            this.mesProd2 = false
            this.mesProd3 = false
            this.answProd3 = false
            this.mesProd4 = false
            this.mesProd5 = false
            this.answProd5 = false
            this.mesProd6 = false
            this.mesProd7 = false
            this.answProd7 = false
            this.mesProd8 = false
            this.mesProd9 = false
            this.answProd9 = false
            this.mesProd10 = false
            this.mesProd11 = false
            this.mesProd12 = false
            this.mesProd13 = false
            this.answProd13 = false
            this.mesProd14 = false
            this.mesProd15 = false
            this.answProd15 = false
            this.mesProd16 = false
            this.mesProd17 = false
            this.answProd17 = false
            this.mesClientChat = false
            this.answChat = false
            this.mesSendChat = false
            this.mesTest = false
            this.answTest = false
            this.mesSendTest = false
            this.mesReqProd = false
            this.mesSendProd = false
            this.mesProd18 = false
            this.mesProd19 = false
            this.answProd19 = false
            this.mesProd20 = false
            this.showTypingTxt()
            this.showMesBiz1()
        },
        showMesSendProd() {
            let v = this
            this.nowDateTime.dateTime15 = this.dateTimeNow()
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesSendProd = true
            }, 3500)
        },
        btnSendProd() {
            this.$v.clientData.name.$touch()
            this.$v.clientData.phone_whatsapp.$touch() || this.$v.clientData.phone_viber.$touch()
            if (!this.$v.clientData.name.$invalid) {
                if (!this.$v.clientData.phone_whatsapp.$invalid || !this.$v.clientData.phone_viber.$invalid) {
                    this.disBtnSendProd = true
                    this.disInpName = true
                    this.disInpWhatsapp = true
                    this.disInpViber = true
                    // this.disInpTelegram = true
                    this.clientData.req = 'Заявка на продукт'
                    this.createProspect(this.clientData)
                        .then((response) => {
                            if (response.data && response.data.success) {
                                this.errors = {}
                                this.addNotification({
                                    show: true,
                                    text: response.data.message,
                                    color: 'success'
                                })
                                this.showTypingTxt()
                                this.showMesProd18()
                                this.zayavka = true
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
            } else {
                this.addNotification({
                    show: true,
                    text: 'Ошибка валидации',
                })
            }
        },
        showMesProd18() {
            let v = this
            this.nowDateTime.dateTime16 = this.dateTimeNow()
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesProd18 = true
            }, 3500)
            setTimeout(function () {
                v.isShow = true
            }, 4500)
            setTimeout(function () {
                v.isShow = false
            }, 6500)
            setTimeout(function () {
                v.mesProd19 = true
            }, 7000)
        },
        btnProd19Skip() {
            this.nowDateTime.dateTime17= this.dateTimeNow()
            this.disBtnProd19Skip = true
            this.disBtnProd19 = true
            this.answProd19 = true
            this.answerProd19 = 'Пропустить'
            this.showTypingTxt()
            this.showMesProd20()
        },
        showMesProd20() {
            let v = this
            setTimeout(function () {
                v.isShow = false
            }, 3000)
            setTimeout(function () {
                v.mesProd20 = true
            }, 3500)
        },
        btnProd19() {
            this.nowDateTime.dateTime17= this.dateTimeNow()
            this.disBtnProd19Skip = true
            this.disBtnProd19 = true
            this.answProd19 = true
            this.answerProd19 = 'Расскажи как заработать'
            this.mesFirst = false
            this.mesSecond = false
            this.answBizProd = false
            this.mesProd1 = false
            this.mesProd2 = false
            this.mesProd3 = false
            this.answProd3 = false
            this.mesProd4 = false
            this.mesProd5 = false
            this.answProd5 = false
            this.mesProd6 = false
            this.mesProd7 = false
            this.answProd7 = false
            this.mesProd8 = false
            this.mesProd9 = false
            this.answProd9 = false
            this.mesProd10 = false
            this.mesProd11 = false
            this.mesProd12 = false
            this.mesProd13 = false
            this.answProd13 = false
            this.mesProd14 = false
            this.mesProd15 = false
            this.answProd15 = false
            this.mesProd16 = false
            this.mesProd17 = false
            this.answProd17 = false
            this.mesClientChat = false
            this.answChat = false
            this.mesSendChat = false
            this.mesTest = false
            this.answTest = false
            this.mesSendTest = false
            this.mesReqProd = false
            this.answReqProd = false
            this.mesSendProd = false
            this.mesProd18 = false
            this.mesProd19 = false
            this.answProd19 = false
            this.mesProd20 = false
            this.showTypingTxt()
            this.showMesBiz1()
        },
    },
    mounted() {
        this.showPartnerAccess(this.$route.query.p)
        this.loading = false

        this.showTyping()

        this.clientData.partner = this.$route.query.p
    },
    updated() {
        this.scrollToMe()
    },
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

@media(max-width: 480px)
    .video-js .vjs-big-play-button
        top: 40% !important
        left: 40% !important

@media(max-width: 350px)
    .video-js .vjs-big-play-button
        top: 36% !important
        left: 36% !important

</style>