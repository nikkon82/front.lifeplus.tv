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
            class="whatsapp-gifts-fixed"
        >
            <v-menu
                top
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        class="align-self-end gifts-chats-btn ma-2"
                        fab
                        x-large
                        color="#826235"
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
                            class="gifts-list-item"
                        >
                            <a
                                style="text-decoration: none"
                                :href="`https://wa.me/${userData.phone_whatsapp}`"
                                target="_blank"
                            >
                                <v-btn
                                    class="align-self-end gifts-cntct-btn"
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
                            class="gifts-list-item"
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
                                    class="align-self-end gifts-cntct-btn"
                                    color="deep-purple lighten-2"
                                >
                                    <v-icon>fab fa-viber</v-icon>
                                </v-btn>
                            </a>
                        </v-list-item-title>
                        <v-list-item-title
                            v-if="userData.telegram"
                            class="gifts-list-item"
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
                                    class="align-self-end gifts-cntct-btn"
                                    color="blue"
                                >
                                    <v-icon>fab fa-telegram-plane</v-icon>
                                </v-btn>
                            </a>
                        </v-list-item-title>
                        <v-list-item-title
                            v-if="userData.fb_messenger"
                            class="gifts-list-item"
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
                                    class="align-self-end gifts-cntct-btn"
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
        <section id="gifts-main">
            <v-row no-gutters>
                <v-container
                    fill-height
                    style="max-width: 1140px"
                >
                    <div class="gifts-video-bg">
                        <video class="gifts-bg-video-hosted gifts-html5-video" loop="loop" autoplay="" muted="">
                            <source src="/video/gifts/LovinglyVideoBGmin.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <v-row
                        class=""
                    >
                        <v-col
                            cols="12"
                            md="6"
                            class="converter-main"
                        >
                            <p
                                class="rev-p-gifts"
                            >
                                <v-img
                                    src="/img/gifts/logogermany.png"
                                    max-width="50"
                                    class="gifts-logo"
                                />
                                <span>Made in Germany</span>
                            </p>
                            <h1
                                class="gifts-h1"
                            >
                                Эксклюзивные подарки
                                <span class="block-podcherk-gifts">
                                    премиум
                                    <svg class="gifts-line-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path></svg>
                                </span>
                                класса
                            </h1>
                            <div class="gifts-subtitle-main">
                                <p>По доступным ценам</p>
                            </div>

                            <div class="gifts-video-div">
                                <div class="gifts-video-btn">
                                    <v-btn
                                        class="align-self-end"
                                        color="#826235"
                                        @click="scrollToMe"
                                    >
                                        <p class="gifts-video-btn-txt">Подробнее</p>
                                    </v-btn>
                                </div>

                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </section>

        <section
            id="gifts-start"
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
                        <div class="gifts-border-left">
                            <div class="gifts-blockquote">
                                <p>
                                    Праздник для каждого человека является приятным и волшебным событием.
                                </p>
                                <p>
                                    Но чем больше их, тем все чаще встает вопрос где найти оригинальный и
                                    полезный подарок для любимого человека, друга, коллеги, важного делового партнера,
                                    вышестоящего руководителя, или ценного сотрудника.
                                </p>
                                <p>
                                    В наше время трудно кого-либо удивить, но подарить полезный и оригинальный подарок можно.
                                </p>
                            </div>
                        </div>
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <h3 class="gifts-h3-steps">Хороший подарок должен быть:</h3>
                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">Практичным и полезным</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Если вы не хотите, чтобы ваш подарок спрятали в шкаф или просто передарили за ненадобностью,
                                        то он должен нести пользу и быть практичным.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Подарок не должен стать «еще одним пылесборником» в копилке вещей, захламляющих дом.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Сладости, тортики, алкоголь и другие вредные продукты в качестве подарка так же считаются дурным тоном.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Подарок должен нести пользу и дарить положительные эмоции от его использования.
                                        Чтобы всякий раз, когда человек использует подарок, вспоминал вас и отправлял вам мысленно лучики добра.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">Качественным</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Подарок может быть не дорогим, но уж 100% он должен быть качественным.
                                        Качественный подарок можно подарить человеку любого статуса.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Если Италию называют родиной моды, то родиной высочайшего качества бесспорно считается Германия.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Весь ассортимент, представленный на этом сайте высочайшего качества Made in Germany.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">Эксклюзивным</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Эксклюзивность — это то, что в разы повышает ценность подарка в глазах принимающего.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        То, что не купить в обычных магазинах ценится выше, чем то, что есть в общем доступе.
                                        Поэтому люди так любят подарки, привезенные из-за границы.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Теперь, чтобы подарить такой подарок, не нужно никуда ехать.
                                        Мы доставим его вам домой. Быстро и бесплатно.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">Ценным</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Никто не хочет получать дешевые подарки. Но и дарить дорогие подарки не всегда есть возможность.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Поэтому важно находить подарки, чья ценность будет гораздо выше чем их цена. А что делает подарок ценным?
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Практичность, польза, качество, эксклюзивность.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        И… покупки на прямую от производителя. Если бы то, что представлено на этом сайте,
                                        продавалось в обычных розничных сетях, то цена была бы не в два и не в три, а минимум в четыре раза дороже.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="gifts-skin"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                    >
                        <div class="gifts-choice-block">
                            <h2 class="gifts-h2-main-view">Для кого ищите подарок и по какой цене?</h2>

                            <div class="gifts-choice-gender">
                                <p
                                    :class="{ active: genderWoman}"
                                    @click="btnGiftsW"
                                >
                                    <v-icon>mdi-gesture-tap</v-icon>
                                    Для женщины
                                </p>
                                <p
                                    :class="{ active: genderMan}"
                                    @click="btnGiftsM"
                                >
                                    <v-icon>mdi-gesture-tap</v-icon>
                                    Для мужчины
                                </p>
                            </div>

                            <div class="gifts-choice-price">
                                <p
                                    :class="{ active: price1000 }"
                                    @click="btnGifts1000"
                                >
                                    1000+
                                </p>
                                <p
                                    :class="{ active: price2000 }"
                                    @click="btnGifts2000"
                                >
                                    2000+
                                </p>
                                <p
                                    :class="{ active: price3000 }"
                                    @click="btnGifts3000"
                                >
                                    3000+
                                </p>
                                <p
                                    :class="{ active: price4000 }"
                                    @click="btnGifts4000"
                                >
                                    4000+
                                </p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="gifts-skin"
            v-if="giftsGender === 'w' && giftsPrice === '1000'"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/ToothGellipbalm.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">«Уход за полостью рта»</h2>
                        <p class="p-gifts">
                            Все мечтают о здоровой и красивой улыбке! Для этого необходимо ухаживать за полостью
                            рта каждый день, используя специальные средства.
                        </p>
                        <p class="p-gifts">
                            Регенеративные свойства Алоэ Вера в продуктах LR ALOE VIA обеспечивают свежее дыхание
                            и здоровье ваших десен. При ежедневном использовании средств с Алоэ Вера вы можете
                            всегда наслаждаться красотой своей улыбки.
                        </p>

                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Зубная паста-гель</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Зубная паста-гель для ежедневного очищения.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 43% геля Алоэ Вера и экстракт эхинацеи
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            бережно очищает зубы и десны
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            оставляет ощущение свежести
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            не содержит фторидов
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Увлажняющий бальзам для губ</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Нежный и легкий уход за кожей губ.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            на 40% состоит из геля Алоэ Вера и растительных масел,
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            увлажняет и защищает тонкую и чувствительную кожу губ.
                                        </li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">1194 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/HandCream.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="gifts-h2-steps">Смягчающий крем для рук</h2>
                        <p class="p-gifts">
                            Побалуйте свои руки кремом для рук Aloe Vera. Наносите крем на сухую кожу каждый день
                            – и почувствуете, как ваши руки становятся мягкими и нежными. Специальный состав, в который
                            входит Алоэ Вера и экстракт календулы, поможет восстановить естественный водный баланс вашей кожи.
                        </p>
                        <p class="p-gifts">
                            Быстро впитывающийся крем для рук.
                        </p>
                        <ul class="gifts-ul-steps">
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                содержит 35% геля Алоэ Вера и экстракт календулы,
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                питает и увлажняет кожу, придавая ей мягкость и нежность.
                            </li>
                        </ul>
                        <p class="p-gifts">
                            75 мл
                        </p>

                        <p class="gifts-p-price">Цена: <span class="gifts-price">949 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/HandCream.jpg"/>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/AVSoftCream.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="gifts-h2-steps">Aloe Vera Мягкий крем-уход</h2>
                        <p class="p-gifts">
                            Благодаря действию Алоэ Вера средства LR ALOE VIA интенсивно питают кожу, придают ей свежесть и делают более упругой.
                        </p>
                        <p class="p-gifts">
                            Питательный крем для кожи, склонной к сухости.
                        </p>

                        <ul class="gifts-ul-steps">
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                содержит 35% геля Алоэ Вера и экстракт магнолии,
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                обеспечивает глубокое увлажнение,
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                быстро впитывается и делает кожу мягкой и нежной.
                            </li>
                        </ul>

                        <p class="p-gifts">
                            100 мл
                        </p>

                        <p class="gifts-p-price">Цена: <span class="gifts-price">1075₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/DeoToothGel.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">Дезодорант + зубной гель</h2>
                        <p class="p-gifts">
                            Гипоаллергенные продукты серии Aloe Via универсальны и подходят абсолютно каждому.
                            Набор дезодорант Алоэ Вера и зубной гель Алоэ Вера подарят вам чувство свежести на весь день.
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Шариковый дезодорант</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Мягкий шариковый дезодорант без содержания спирта.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 15% геля Алоэ Вера и экстракт хлопка
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            устраняет неприятный запах и хорошо сочетается с другими ароматами
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            может использоваться после бритья и эпиляции
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            хорошо подходит для чувствительной кожи
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        50 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Зубная паста-гель</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Зубная паста-гель для ежедневного очищения.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 43% геля Алоэ Вера и экстракт эхинацеи
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            бережно очищает зубы и десны
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            оставляет ощущение свежести
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            не содержит фторидов
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">1214 ₽</span></p>

                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/DeoToothGel.jpg"/>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/emergencyspray.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="gifts-h2-steps">Спрей «Скорая помощь»</h2>
                        <p class="p-gifts">
                            Оказывают успокаивающее и восстанавливающее действие. Предназначены как для очень чувствительной,
                            так и для раздраженной кожи. Они покрывают кожу защитной пленкой: охлаждают, успокаивают и восстанавливают.
                            Такой эффект возможен благодаря уникальному составу продуктов, которые содержат биологически активные вещества и экстракты трав.
                        </p>
                        <p class="p-gifts">
                            Легкий спрей для всего тела.
                        </p>
                        <ul class="gifts-ul-steps">
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                содержит 83 % геля Алоэ Вера, экстракты 11 традиционных целебных трав и прополиса
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                создает на коже защитную пленку, успокаивает и охлаждает
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                поддерживает процессы естественного восстановления кожи
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                без добавления парфюмерных масел
                            </li>
                        </ul>

                        <p class="p-gifts">
                            400 мл
                        </p>

                        <p class="gifts-p-price">Цена: <span class="gifts-price">1859 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/emergencyspray.jpg"/>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/ClassicWomen.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="gifts-h2-steps">Парфюм из коллекции "LR Classics"</h2>
                        <p class="p-gifts">
                            Подарите себе и любимым аромат из эксклюзивной коллекции ароматов LR Classics.
                        </p>
                        <p class="p-gifts">
                            Флакон 50 мл
                        </p>

                        <span class="gifts-sostav">Парфюм на выбор</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Гавайи</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/hawai.jpg"/>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Экзотический микс из ароматов корицы, гелиотропа, ванили и бобов тонка.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Прекрасный аромат для ярких, неординарных натур. Сексуальный, манящий, завораживающий.
                                        Для вечерних прогулок и романтических свиданий. Делает вас более сладкой, теплой и нежной.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Рекомендуемый возраст 25+
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Лос-Анджелес</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/la.jpg"/>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Гламурный, пульсирующий. Наполненный жизнью. Будоражащий парфюмерный микс
                                        и черной смородины, ландыша, ванили и розового перца.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Женственный, чувственный, мотивирующий, энергичный, страстный, прохладный, дерзкий.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Вечерний. Хорошо подходит для похода в клуб. Аромат успешной, недоступной женщины.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Рекомендуемый возраст 18+
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Марбелья</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/marbelia.jpg"/>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Истинный соблазн и тонкая чувственность. Роскошный аромат розы, жасмина и манящего пачули.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Сексуальный, страстный, чувственный аромат. Поможет раскрыть или подчеркнуть женственность.
                                        Подарит легкость походки и приподнятый подбородок. Вас захочется окутать нежностью и любовью.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Рекомендуемый возраст 23+
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">4 | Антигуа</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/antigua.jpg"/>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Это ослепительно белый песок и упоительная страсть. Цветочная симфония и розы, ириса, фиалки и жасмина.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Аромат кремовый, тягучий, сладостный, сексуальный. Подойдет для романтического свидания с любимым.
                                        Создаст вокруг вас ореол сладкой женщины.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Вечерний вариант для тех, кому 23+
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        На вторую половину дня для 30+
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">5 | Санторини</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/santorini.jpg"/>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Волшебные краски рассвета на пляже Санторини. Волнующий и незабываемый аромат фрезии, жасмина и мускуса.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Аромат дневной, легкий, игривый, романтичный. Для свиданий без продолжения.
                                        Прекрасный спутник в отпуске или для создания настроения. Подарит вам упоительное состояние свободы.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Рекомендуемый возраст 18+
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">6 | Валенсия</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/valencia.jpg"/>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Беззаботная легкость и дух Средиземноморья. Чарующий аромат цитрусов, цветочных нот и пленящего мускуса.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Свежий, цветочный, легкий, бодрящий аромат. Утренний, поднимает настроение на весь день.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Станет прекрасным спутником в отпуске. Дарит легкость и беззаботность.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена флакона: <span class="gifts-price">1539 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>

            </v-container>
        </section>

        <section
            id="gifts-skin"
            v-if="giftsGender === 'w' && giftsPrice === '2000'"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/HandSoftSet.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">«Крем для рук и мягкий крем Алоэ Вера»</h2>
                        <p class="p-gifts">
                            Побалуйте свои руки кремом для рук Aloe Vera. Наносите крем на сухую кожу каждый день – и почувствуете,
                            как ваши руки становятся мягкими и нежными. Специальный состав, в который входит Алоэ Вера и экстракт календулы,
                            поможет восстановить естественный водный баланс вашей кожи.
                        </p>
                        <p class="p-gifts">
                            75 мл
                        </p>

                        <p class="p-gifts">
                            Питательный крем для кожи, склонной к сухости. Можно использовать для всего тела.
                        </p>


                        <ul class="gifts-ul-steps">
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                содержит 35% геля Алоэ Вера и экстракт магнолии
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                обеспечивает глубокое увлажнение
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                быстро впитывается и делает кожу мягкой и нежной
                            </li>
                        </ul>

                        <p class="p-gifts">
                            100 мл
                        </p>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">2024 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="gifts-skin"
            v-if="giftsGender === 'w' && giftsPrice === '3000'"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/lovengly-gift.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Парфюмерная вода</p>
                        <h2 class="gifts-h2-steps">«Lovingly by Bruce Willis»</h2>
                        <p class="p-gifts">
                            Чувственное проявление любви, наполненное теплом и романтикой.
                            Lovingly – аромат, ставший признанием Брюса Уиллиса в любви его супруге Эмме.
                        </p>
                        <p class="p-gifts">
                            Белые цветы, свежий цитрус олицетворяют чувственность, сандаловое дерево и мускус окутывают теплом. Восточный, элегантный аромат.
                        </p>
                        <p class="p-gifts">
                            Верхняя нота - Цитрусовые. Груша. <br>
                            Нота сердца - Лилия. Пион.<br>
                            Базовая нота - Белый кедр. Сандаловое дерево.
                        </p>
                        <p class="p-gifts">
                            50 мл
                        </p>

                        <p class="gifts-p-price">Цена: <span class="gifts-price">3719 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/lovengly-gift.jpg"/>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>                               

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/AVbaby.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор для мам</p>
                        <h2 class="gifts-h2-steps">«Уход за нежной кожей ребенка»</h2>
                        <p class="p-gifts">
                            Кожа малышей требует особого ухода, ведь она удивительно тонкая и нежная,
                            а её защитный барьер ещё полностью не сформировался. Поэтому кожа ребёнка нуждается в дополнительной защите.
                        </p>
                        <p class="p-gifts">
                            Средства LR ALOE VIA для защиты кожи детей содержат гель Алоэ Вера и экстракты растений –
                            они стали еще более натуральными и нежными. Они питают, увлажняют и обеспечивают защиту кожи малыша.
                            Не содержат парабенов, минеральных и парфюмерных масел.
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Детский шампунь-гель</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Экстра-нежный шампунь-гель для чувствительной кожи.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 30% геля Алоэ Вера, экстракт календулы и масло сои
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            нежное и бережное очищение
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            не пересушивает кожу
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            не содержит сульфатов и парфюмерных масел
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        250 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Детский защитный крем</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Питательный крем для поврежденной кожи.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 40% геля Алоэ Вера, экстракт календулы, цинк и пантенол
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            поддерживает регенерацию поврежденной кожи под подгузником и защищает ее от дальнейшего травмирования
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            восстанавливает раздраженную кожу и успокаивает ее
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            не содержит парфюмерных масел
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Детский лосьон для лица и тела</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Экстра-нежный легкий лосьон для чувствительной кожи.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 40% геля Алоэ Вера, экстракт календулы и пантенол
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            активизирует защитные функции кожи и предотвращает сухость
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            увлажняет и успокаивает
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            не содержит парфюмерных масел
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">3225 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/AVhair.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">Набор для ухода за волосами</h2>
                        <p class="p-gifts">
                            Ваши волосы – Ваша гордость. Средства для ухода за волосами от LR ALOE VIA – лучший подарок любой женщине.
                            Красивые волосы придают уверенность в себе, силу и грацию – то, что всегда покажет Вас в выгодном свете!
                            Подарите Вашим волосам здоровое сияние и гладкость!
                        </p>
                        <p class="p-gifts">
                            Новая серия средств по уходу за волосами с уникальным комплексом семи натуральных масел и гелем Алоэ Вера
                            укрепляет, восстанавливает волосы и защищает их от ломкости.
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Восстанавливающий шампунь для волос</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Шампунь мягко очищает волосы, как магнит притягивая и удаляя все загрязнения. Он содержит провитамин B5 и укрепляет волосы снаружи.
                                        Шампунь также содержит 45% геля Алоэ Вера и увлажняет волосы и кожу головы.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит био-экстракт бамбука
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            мягко очищает, укрепляет и питает волосы, увлажняет кожу головы
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            подходит для ежедневного использования
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        200 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Восстанавливающий кондиционер для волос</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Кондиционер питает и восстанавливает волосы изнутри с помощью восстанавливающего комплекса 7 натуральных масел.
                                        Ухаживающие активные компоненты разглаживают и восстанавливают поверхность волос.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 15% геля Алоэ Вера и восстанавливающий комплекс семи масел
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            питает и восстанавливает волосы изнутри, не утяжеляя их
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            разглаживает и восстанавливает поверхность волос
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            подходит для ежедневного использования.
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        200 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Восстанавливающая маска для волос</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Маска питает и восстанавливает волосы изнутри вместе с восстанавливающим комплексом 7 натуральных масел.
                                        Она устраняет пористость и сухость волос, повышает плотность коркового слоя.
                                        Делает волосы напитанными, эластичными и послушными.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 15% геля Алоэ Вера и восстанавливающий комплекс семи масел
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            глубоко питает и восстанавливает волосы, разглаживает поверхность волос,
                                            возвращает волосам прочность и защищает от ломкости
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            применять 1-2 раза в неделю вместо кондиционера.
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        200 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">3719 ₽</span></p>

                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/AVhair.jpg"/>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="gifts-skin"
            v-if="giftsGender === 'w' && giftsPrice === '4000'"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/purehappinessw.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Женский аромат</p>
                        <h2 class="gifts-h2-steps">«PURE HAPPINESS by Guido Maria»</h2>
                        <p class="p-gifts">
                            "Будь настоящей. Будь сияющей. Просто будь счастливой!"
                        </p>
                        <p class="p-gifts">
                            Почувствуйте чистую радость жизни – здесь и сейчас. Насладитесь прекрасным чувством,
                            словно вы готовы обнять весь мир. Аромат PURE HAPPINESS подарит вам счастье:
                            благодаря этому легкому аромату улыбка – как по мановению волшебной палочки – будет озарять ваше лицо каждый день.
                        </p>
                        <p class="p-gifts">
                            Верхняя нота - Грейпфрут. Бергамот.<br>
                            Нота сердца - Жасмин. Ирис.<br>
                            Базовая нота - Мускус. Табак.
                        </p>
                        <p class="p-gifts">
                            50 мл
                        </p>

                        <p class="gifts-p-price">Цена: <span class="gifts-price">4819 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/purehappinessw.jpg"/>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/avbox.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор для всей семьи</p>
                        <h2 class="gifts-h2-steps">«Первая помощь»</h2>
                        <p class="p-gifts">
                            Продукты оказывают успокаивающее и восстанавливающее действие.
                            Предназначены как для очень чувствительной, так и для раздраженной кожи.
                            Они покрывают кожу защитной пленкой: охлаждают, успокаивают и восстанавливают.
                            Такой эффект возможен благодаря уникальному составу продуктов, которые содержат биологически активные вещества и экстракты трав.
                        </p>
                        <p class="p-gifts">
                            Набор «Первая помощь» – универсальный помощник на все случаи жизни. Ожоги, порезы, ссадины больше не проблема!
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Увлажняющий гель-концентрат</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Освежающий гель для сухой и раздраженной кожи.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            особенно высокое содержание геля Алое Вера – 90%
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            интенсивно увлажняет кожу
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            охлаждает, успокаивает и освежает
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            без добавления парфюмерных масел
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Спрей «Скорая помощь»</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Легкий спрей для всего тела.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 83% геля Алоэ Вера, экстракты 11 целебных трав и прополис.
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            создает на коже защитную пленку, успокаивает и охлаждает
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            поддерживает процессы естественного восстановления кожи
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            без добавления парфюмерных масел
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        150 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Защитный крем с прополисом</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Интенсивно питающий крем для очень сухой и нуждающейся в уходе кожи.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 79% геля Алоэ Вера и экстракт прополиса
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            интенсивно питает кожу и поддерживает ее естественную барьерную функцию
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            обеспечивает гладкость, бархатистость и комфортное ощущение кожи
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">4099 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/set-3.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">Для очищения кожи лица</h2>
                        <p class="p-gifts">
                            Наслаждайтесь моментом! Найдите время для ухода за Вашей кожей с помощью натуральных средств с Алоэ Вера.
                            Ощутите чистую свежесть, увлажнение и интенсивный уход благодаря лучшему, что дает природа.
                        </p>
                        <p class="p-gifts">
                            Чистый гель Алоэ Вера, натуральные растительные экстракты, высококачественные масла и насыщенные текстуры
                            с нежным ароматом захватят Вас и станут частью Вашего ежедневного ритуала ухода.
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Очищающее молочко</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        ОЧИЩАЕМ КОЖУ УТРОМ И ВЕЧЕРОМ.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Основательное и мягкое очищение для сухой и чувствительной кожи.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит гель Алоэ Вера (50%) и экстракт шиповника
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            снимает макияж и очищает кожу
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            не пересушивает
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            обеспечивает интенсивное увлажнение
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        200 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Очищающий тоник для лица</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        ТОНИЗИРУЕМ КОЖУ УТРОМ И ВЕЧЕРОМ.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Удаляет остатки загрязнений после снятия макияжа, а также может использоваться на протяжении дня.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит гель Алоэ Вера (50%), экстракт шиповника
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            очищает, успокаивает и освежает кожу
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            обеспечивает интенсивное увлажнение.
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        200 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Волшебная пузырьковая маска для лица</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        ДЕТОКС 1-2 РАЗА В НЕДЕЛЮ.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Очищающая пузырьковая детокс-маска для лица с глубоким воздействием.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            С экстрактом моринги, экстрактом имбиря, гелем Алоэ Вера и активатором пузырей.
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            Предотвращает накопление загрязняющих частиц.
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            Увлажняет.
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            Кожа снова свежая и сияет красотой.
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        1. ДЕТОКС. <br>
                                        Экстракты имбиря и моринги удаляют омертвевшие клетки кожи и нейтрализуют негативное влияние окружающей среды,
                                        борясь, например, с частицами пыли и свободными радикалами. <br>
                                        Маска 2 глубоко очищает и предотвращает накопление загрязняющих частиц благодаря эффекту лотоса (эффекту самоочищения).<br>
                                        Био-экстракт имбиря в составе помогает защитить кожу.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        2. УВЛАЖНЕНИЕ. <br>
                                        Алоэ Вера интенсивно увлажняет и способствует восстановлению кожи.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        3. АКТИВАЦИЯ. <br>
                                        Активатор пузырей увеличивает подачу кислорода и создает пузырьки, которые
                                        усиливают очищающий и увлажняющий эффект маски.<br>
                                        Активные компоненты проникают глубоко в поры, загрязнения легче удаляются, а влага проникает глубже.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        50 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">4575 ₽</span></p>

                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/set-3.jpg"/>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/aroma-3.png"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">LR Soul of Nature «HOPEFUL SOUL»</h2>
                        <p class="p-gifts">
                            Позвольте себе больше моментов, предназначенных только для себя,
                            и сфокусируйтесь на вашем внутреннем благополучии.
                        </p>
                        <p class="p-gifts">
                            Продукты линейки LR Soul of Nature HOPEFUL SOUL помогут обрести баланс души и тела, подарят чувство внутренней гармонии и равновесия.
                        </p>
                        <p class="p-gifts">
                            100% натуральные эфирные масла бергамота, розы, римской ромашки и сандалового дерева образуют
                            гармоничную ароматическую композицию для идеально сбалансированного ритуала ароматерапии и ухода.
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Гель для душа HOPEFUL SOUL</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Мягко очищает кожу, специально подобранная композиция масел дарит внутреннюю гармонию.
                                        Превращает ванную комнату в уютный оазис.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        На 95% состоит из натуральных ингредиентов, включая 100% натуральные эфирные масла.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Масло для тела HOPEFUL SOUL</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        100% натуральные эфирные масла бергамота, розы, римской ромашки и сандалового дерева образуют
                                        гармоничную ароматическую композицию для идеально сбалансированного ритуала ароматерапии и ухода.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Эфирное масло с роликовым аппликатором</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Гармонизирующая смесь эфирных масел поможет быстро вновь обрести равновесие.
                                        Обладает приятным согревающим эффектом и успокаивающим ароматом.
                                        Не оставляет жирную пленку, идеально подходит для того, чтобы брать с собой.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        На 99% состоит из натуральных компонентов, включая 100% натуральные эфирные масла.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">4397 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/aroma-4.png"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">LR Soul of Nature «CHEERFUL SOUL»</h2>
                        <p class="p-gifts">
                            Подарите себе больше драгоценного времени только для вас, насладитесь счастливыми мгнове- ниями вашей жизни!
                            LR Soul of Nature является источником хорошего настроения и позитивной энергии.
                        </p>
                        <p class="p-gifts">
                            Благодаря композиции из 100% натуральных масел лимона, апельсина, розы и кедра вы испытаете особые моменты,
                            полные радости и ощущения истинного счастья.
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Гель для душа CHEERFUL SOUL</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Мягко очищает кожу, а также бодрит и освежает благодаря ароматной композиции масел.
                                        Превращает ванную комнату в уютный оазис счастья.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        На 95% состоит из натуральных ингредиентов, включая 100% натуральные эфирные масла.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Гель для тела CHEERFUL SOUL</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Легкая текстура освежает кожу и питает миндальным маслом.
                                        Быстро впитывается и не оставляет ощущения липкости на коже.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        На 97% состоит из натуральных ингредиентов, включая 100% натуральные эфирные масла.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Эфирное масло с роликовым аппликатором</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Свежая фруктовая композиция, которая делает счастливым!
                                        Острый аромат лимонного и сладкий аромат апельсинового масла – настоящие мастера в создании хорошего настроения.
                                        Заземляющее тепло кедра завершает композицию, которая оживляет тело, ум и душу!
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        На 99% состоит из натуральных ингредиентов, в том числе из 100% натуральных масел.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">4397 ₽</span></p>

                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/aroma-4.png"/>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/aroma-1.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">LR Soul of Nature «STRONG SOUL»</h2>
                        <p class="p-gifts">
                            Почувствуйте свою внутреннюю силу! LR Soul of Nature STRONG SOUL – источник энергии.
                        </p>
                        <p class="p-gifts">
                            Благодаря 100% натуральным маслам мяты перечной, эвкалипта, тимьяна и кедра в составе продуктов этой
                            линейки вы почувствуете себя готовым к повседневным вызовам после вашего ежедневного ритуала ароматерапии и ухода.
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Гель для душа STRONG SOUL</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Мягко очищает кожу, обеспечивает прилив жизненной силы и энергии благодаря ароматной композиции масел.
                                        Превращает ванную комнату в водопад, мощный источник внутренней силы.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        На 95% состоит из натуральных ингредиентов, включая 100% натуральные эфирные масла.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Крем для тела STRONG SOUL</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Интенсивно питает кожу благодаря маслу ши и миндальному маслу, освежает. Делает кожу эластичной, укрепляет ее защитный барьер.
                                        Сила ароматов натуральных масел обеспечивает прилив энергии.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        На 98% состоит из натуральных ингредиентов, включая 100% натуральные эфирные масла.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Эфирное масло с роликовым аппликатором</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Благодаря эффекту перепада температур стимулирует кожные рецепторы и снимает напряжение.
                                        Уникальный эффективный комплекс с эвкалиптовым маслом, мятой перечной, тимьяном, кедровым маслом,
                                        ментолом и камфорой освежает и оживляет чувства для лучшей концентрации и ясной головы.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        На 99% состоит из натуральных ингредиентов, включая 100% натуральные эфирные масла.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">4397 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/aroma-2.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">LR Soul of Nature «RELAXED SOUL»</h2>
                        <p class="p-gifts">
                            LR Soul of Nature RELAXED SOUL поможет расслабиться и снять напряжение, что очень важно для спокойного сна.
                        </p>
                        <p class="p-gifts">
                            Ароматы бергамота, лаванды, нероли и сандалового дерева в средствах для ухода образуют идеальную основу
                            для ежедневного ритуала релаксации. Сделайте глубокий вдох, закройте глаза и позвольте вашей душе расслабиться.
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Гель для душа RELAXED SOUL</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Мягко очищает кожу, эфирные масла в составе способствуют расслаблению и снятию внутреннего напряжения.
                                        Ванная комната превращается в оазис спокойствия.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        На 95% состоит из натуральных ингредиентов, включая 100% натуральные эфирные масла.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Масло для тела RELAXED SOUL</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Интенсивно питает кожу маслом ши и миндальным маслом, а эфирные масла помогают расслабить тело, ум и душу.
                                        Кожа становится более эластичной, ее защитный барьер укрепляется.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        На 98% состоит из натуральных ингредиентов, включая 100% натуральные эфирные масла.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 |  Эфирное масло с роликовым аппликатором</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Ценная смесь масел с двойным эффектом:
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        1. Чистое расслабление благодаря успокаивающим эфирным маслам.<br>
                                        2. Чувство внутреннего покоя за счет нежного тепла на коже. Приводит внутренние силы в равновесие.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        99% ингредиентов имеют натуральное происхождение.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">4397 ₽</span></p>

                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/aroma-2.jpg"/>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="gifts-skin"
            v-if="giftsGender === 'm' && giftsPrice === '1000'"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/AfterShaveBalm-1.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="gifts-h2-steps">Успокаивающий бальзам после бритья</h2>
                        <p class="p-gifts">
                            Средства по уходу за кожей для мужчин LR ALOE VIA благодаря уникальной комбинации увлажняющего
                            геля Алоэ Вера и успокаивающего экстракта календулы идеально подходят для ухода за мужской кожей.
                        </p>
                        <p class="p-gifts">
                            Мягкий бальзам для лица
                        </p>
                        <ul class="gifts-ul-steps">
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                содержит 50% Алоэ Вера и экстракт белого чая
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                снимает раздражение и успокаивает
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                обеспечивает увлажнение и уход
                            </li>
                        </ul>
                        <p class="p-gifts">
                            100 мл
                        </p>

                        <p class="gifts-p-price">Цена: <span class="gifts-price">1075₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/AfterShaveBalm-1.jpg"/>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/ShavingFoam-1.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="gifts-h2-steps">Успокаивающая пена для бритья</h2>
                        <p class="p-gifts">
                            Успокаивающая пена для ежедневного бритья.
                        </p>
                        <ul class="gifts-ul-steps">
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                содержит 30% геля Алоэ Вера для интенсивного увлажнения
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                обеспечивает оптимальный уход перед бритьем
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                воздушная пена для особо легкого нанесения
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                обеспечивает легкое скольжение лезвия и защищает кожу от раздражения
                            </li>
                        </ul>
                        <p class="p-gifts">
                            200 мл
                        </p>

                        <p class="gifts-p-price">Цена:<span class="gifts-price">1075₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/DeoToothGel.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">Дезодорант + зубной гель</h2>
                        <p class="p-gifts">
                            Гипоаллергенные продукты серии Aloe Via универсальны и подходят абсолютно каждому.
                            Набор дезодорант Алоэ Вера и зубной гель Алоэ Вера подарят вам чувство свежести на весь день.
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Шариковый дезодорант</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Мягкий шариковый дезодорант без содержания спирта.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 15% геля Алоэ Вера и экстракт хлопка
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            устраняет неприятный запах и хорошо сочетается с другими ароматами
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            может использоваться после бритья и эпиляции
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            хорошо подходит для чувствительной кожи
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        50 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Зубная паста-гель</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Зубная паста-гель для ежедневного очищения.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 43% геля Алоэ Вера и экстракт эхинацеи
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            бережно очищает зубы и десны
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            оставляет ощущение свежести
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            не содержит фторидов
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">1214 ₽</span></p>

                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/DeoToothGel.jpg"/>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/emergencyspray.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="gifts-h2-steps">Спрей «Скорая помощь»</h2>
                        <p class="p-gifts">
                            Оказывают успокаивающее и восстанавливающее действие. Предназначены как для очень чувствительной,
                            так и для раздраженной кожи. Они покрывают кожу защитной пленкой: охлаждают, успокаивают и восстанавливают.
                            Такой эффект возможен благодаря уникальному составу продуктов, которые содержат биологически активные вещества и экстракты трав.
                        </p>
                        <p class="p-gifts">
                            Легкий спрей для всего тела.
                        </p>
                        <ul class="gifts-ul-steps">
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                содержит 83 % геля Алоэ Вера, экстракты 11 традиционных целебных трав и прополиса
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                создает на коже защитную пленку, успокаивает и охлаждает
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                поддерживает процессы естественного восстановления кожи
                            </li>
                            <li>
                                <v-icon>mdi-check-circle-outline</v-icon>
                                без добавления парфюмерных масел
                            </li>
                        </ul>

                        <p class="p-gifts">
                            400 мл
                        </p>

                        <p class="gifts-p-price">Цена: <span class="gifts-price">1859 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/emergencyspray.jpg"/>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/ClassicMan.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <h2 class="gifts-h2-steps">Парфюм из коллекции "LR Classics"</h2>
                        <p class="p-gifts">
                            Подарите себе и любимым аромат из эксклюзивной коллекции ароматов LR Classics.
                        </p>
                        <p class="p-gifts">
                            Флакон 50 мл
                        </p>

                        <span class="gifts-sostav">Парфюм на выбор</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Сингапур</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/singapur.jpg"/>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Контрастный и волнующий. Пряный, восточный аромат, насыщенный кедром и ванилью.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Манящий, завлекающий, сексуальный. Природные афродизиаки привлекут противоположный пол.
                                        Вечерний, сексуальный или стильный, деловой. Если хочется быть в центре женского внимания.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Рекомендуемый возраст 18+
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Ниагара</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/niagara.jpg"/>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Аромат, оставляющий неизгладимые впечатления. Вобрал в себя аромат лаванды и кедра с завершающим морским оттенком.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Аромат природы, свободы. Свежий, будоражащий. Потрясающий аромат для отпуска и экстрима.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Для уверенных мужчин, полных энергии и сил. Хорош в качестве спортивного или утреннего.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Рекомендуемый возраст 18+
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Бостон</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/boston.jpg"/>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Этот аромат создан для того, кто знает, чего он хочет.
                                        Освежающая фруктовая композиция из яблока и апельсина с нотками кедра и амбры.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Аромат унисекс. Подходит днем и на вечер. Сладость аромата нравится мужчинам,
                                        которые ухаживают за собой и привыкли быть в центре женского внимания.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Уверенный в себе, знает себе цену и то, чего он хочет. Мужчина, который обаяет своим успехом.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Рекомендуемый возраст 23+
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">4 | Монако</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/monaco.jpg"/>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Роскошный! Насыщенный ароматом имбиря, сочного апельсина, амбры и табачного листа.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Аромат деловой, уверенный, харизматичный. Идеальное дополнение к деловому костюму.
                                        Аромат богатого мужчины из высшего общества.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Подходит в любое время года, за исключением жарких дней. Идеально подходит для торжественного или делового вечера.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Рекомендуемый возраст 25+
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">5 | Стокгольм</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/stockholm.jpg"/>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Стокгольм — город моды, дизайна и особого стиля, воплощенного в одноименном аромате,
                                        наполненном нотками кедра, амбры и бергамота с древесным оттенком.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Стильный, харизматичный, дерзкий аромат. загадочный, призванный влюблять в себя многих женщин.
                                        Мужчина, ценящий свободу и живущий по своим правилам. Аромат вечеринок. Придаст вашему стилю яркость.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Рекомендуемый возраст 18+
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена флакона: <span class="gifts-price">1539 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="gifts-skin"
            v-if="giftsGender === 'm' && giftsPrice === '2000'"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/ShaveSet-1.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">«Идеальное бритье с алоэ вера»</h2>
                        <p class="p-gifts">
                            Благодаря уникальной комбинации увлажняющего геля Алоэ Вера и успокаивающего
                            экстракта календулы идеально подходят для ухода за мужской кожей.
                        </p>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Успокаивающая пена для бритья</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Для ежедневного бритья.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 30% геля Алоэ Вера для интенсивного увлажнения
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            обеспечивает оптимальный уход перед бритьем
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            воздушная пена для особо легкого нанесения
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            обеспечивает легкое скольжение лезвия и защищает кожу от раздражения
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        200 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Успокаивающий бальзам после бритья</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Мягкий бальзам для лица.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 50% Алоэ Вера и экстракт белого чая
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            снимает раздражение и успокаивает
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            обеспечивает увлажнение и уход
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">2150 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>

                
            </v-container>
        </section>

        <section
            id="gifts-skin"
            v-if="giftsGender === 'm' && giftsPrice === '3000'"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/BWPE.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Парфюмерная вода</p>
                        <h2 class="gifts-h2-steps">«Bruce Willis Personal Edition»</h2>
                        <p class="p-gifts">
                            ДЫХАНИЕ ГОЛЛИВУДА В ОДНОМ ФЛАКОНЕ.
                        </p>
                        <p class="p-gifts">
                            Олицетворение звезды с неповторимой индивидуальностью – элегантный, харизматичный, с сильным характером.
                        </p>
                        <p class="p-gifts">
                            Цитрусовые фрукты и пачули отвечают за свежее вступление, ноты сердца, облагороженные ноткой табака,
                            выражают неоспоримую мужественность и элегантность.
                        </p>
                        <p class="p-gifts">
                            Чувственные кожаные ноты и ценный аромат агарового дерева ярко завершают композицию,
                            подчеркивая уникальность аромата, отражающего индивидуальность звезды.
                        </p>
                        <p class="p-gifts">
                            Верхняя нота - Цитрусовые. Кардамон.<br>
                            Нота сердца - Лаванда. Аккорд табака.<br>
                            Базовая нота - Кожаные аккорды. Агаровое дерево.
                        </p>
                        <p class="p-gifts">
                            50 мл
                        </p>
                        <p class="gifts-p-price">Цена: <span class="gifts-price">3719 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/AVman.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор для мужчин</p>
                        <h2 class="gifts-h2-steps">уход за мужской кожей лица</h2>
                        <p class="p-gifts">
                            Благодаря уникальной комбинации увлажняющего геля Алоэ Вера и
                            успокаивающего экстракта календулы идеально подходят для ухода за мужской кожей.
                        </p>
                        <p class="p-gifts">
                            У женщин и мужчин разные потребности в уходе. Мужская кожа подвергается стрессу ежедневно – бритьё раздражает и сушит ее.
                            Именно поэтому она нуждается в специальных средствах, которые обеспечивают интенсивное увлажнение и снимают неприятные ощущения.
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Успокаивающая пена для бритья</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Для ежедневного бритья
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 30% геля Алоэ Вера для интенсивного увлажнения
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            обеспечивает оптимальный уход перед бритьем
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            воздушная пена для особо легкого нанесения
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            обеспечивает легкое скольжение лезвия и защищает кожу от раздражения
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        200 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Успокаивающий бальзам после бритья</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Мягкий бальзам для лица
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 50% Алоэ Вера и экстракт белого чая
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            снимает раздражение и успокаивает
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            обеспечивает увлажнение и уход.
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Крем-антистресс для лица</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Лёгкий, освежающий крем для лица.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 50% Алоэ Вера и экстракт белого чая
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            дарит свежесть уставшей коже
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            увлажняет и тонизирует
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">3745 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/AVman.jpg"/>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="gifts-skin"
            v-if="giftsGender === 'm' && giftsPrice === '4000'"
        >
            <v-container>
                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/avbox.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор для всей семьи</p>
                        <h2 class="gifts-h2-steps">«Первая помощь»</h2>
                        <p class="p-gifts">
                            Продукты оказывают успокаивающее и восстанавливающее действие.
                            Предназначены как для очень чувствительной, так и для раздраженной кожи.
                            Они покрывают кожу защитной пленкой: охлаждают, успокаивают и восстанавливают.
                            Такой эффект возможен благодаря уникальному составу продуктов, которые содержат биологически активные вещества и экстракты трав.
                        </p>
                        <p class="p-gifts">
                            Набор «Первая помощь» – универсальный помощник на все случаи жизни. Ожоги, порезы, ссадины больше не проблема!
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Увлажняющий гель-концентрат</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Освежающий гель для сухой и раздраженной кожи.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            особенно высокое содержание геля Алое Вера – 90%
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            интенсивно увлажняет кожу
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            охлаждает, успокаивает и освежает
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            без добавления парфюмерных масел
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Спрей «Скорая помощь»</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Легкий спрей для всего тела.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 83% геля Алоэ Вера, экстракты 11 целебных трав и прополис.
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            создает на коже защитную пленку, успокаивает и охлаждает
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            поддерживает процессы естественного восстановления кожи
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            без добавления парфюмерных масел
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        150 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Защитный крем с прополисом</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Интенсивно питающий крем для очень сухой и нуждающейся в уходе кожи.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 79% геля Алоэ Вера и экстракт прополиса
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            интенсивно питает кожу и поддерживает ее естественную барьерную функцию
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            обеспечивает гладкость, бархатистость и комфортное ощущение кожи
                                        </li>
                                    </ul>
                                    <p class="gifts-step-p-exp">
                                        100 мл
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">4099 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                        class="media-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/PureHappinessM.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Мужской аромат</p>
                        <h2 class="gifts-h2-steps">«PURE HAPPINESS by Guido Maria»</h2>
                        <p class="p-gifts">
                            "Будь настоящим. Будь сияющим. Просто будь счастливым!"
                        </p>
                        <p class="p-gifts">
                            Ощутите чувство свободы – бескрайней, как океан, полной чудесных ожиданий.
                            Живите здесь и сейчас, наслаждайтесь моментом.
                            PURE HAPPINESS подарит счастье: аромат полон темперамента и позитивной энергии!
                        </p>
                        <p class="p-gifts">
                            Верхняя нота - Грейпфрут. Перец. <br>
                            Нота сердца - Кедровое дерево. Герань.<br>
                            Базовая нота - Мох. Бальзамические ноты.
                        </p>
                        <p class="p-gifts">
                            50 мл
                        </p>

                        <p class="gifts-p-price">Цена: <span class="gifts-price">4819 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        class="right-img"
                    >
                        <v-img class="gifts-img" src="/img/gifts/PureHappinessM.jpg"/>
                    </v-col>
                </v-row>

                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-img class="gifts-img" src="/img/gifts/boroda-man-set.jpg"/>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                    >
                        <p class="gifts-nabor">Набор</p>
                        <h2 class="gifts-h2-steps">«Мужской уход за кожей, волосами и бородой»</h2>
                        <p class="p-gifts">
                            Все, чего хотят мужчины (и так любят женщины) – никогда еще не было так легко «прокачать» свою привлекательность!
                        </p>
                        <p class="p-gifts">
                            Откройте для себя ежедневный ритуал ухода за кожей, волосами и бородой, который будет работать
                            на мужскую притягательность!
                        </p>
                        <p class="p-gifts">
                            LR ALOE VIA предлагает натуральные продукты, которые оценит любой мужчина: быстро, просто, эффективно,
                            с мужественным древесным ароматом.
                        </p>
                        <p class="p-gifts">
                            Вся мощь Алоэ Вера, биоэкстракт хмеля и свежий древесный аромат!<br>
                            Гель Алоэ Вера известен своим успокаивающим и увлажняющим эффектом.<br>
                            Хмель питает, укрепляет кожу и волосы, а также предотвращает раздражение кожи.<br>
                            Для ухоженного внешнего вида без особых усилий.
                        </p>
                        <span class="gifts-sostav">Состав набора</span>

                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">1 | Aloe Vera 4 в 1 Шампунь для волос и тела</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Универсальное средство для очищения тела и волос. Обладает приятным древесным ароматом.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 15% Алоэ Вера и био-экстракт хмеля
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            тщательно и бережно очищает кожу, волосы и бороду
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            освобождает от остатков воздействия окружающей среды и запахов
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            увлажняет кожу и волосы
                                        </li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">2 | Aloe Vera 2 в 1 Масло для лица и бороды</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Масло включает в себя 8 компонентов, способных стимулировать естественный рост волос на лице,
                                        за счет естественных ресурсов организма.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Масло сладкого миндаля, масло арганы и сои, витамин E, а также экстракт хмеля и Алоэ Вера питают кожу лица,
                                        волосяные луковицы и обеспечивают приток питательных веществ к корням делая бороду более густой и ухоженной.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит Алоэ Вера и био-экстракт хмеля
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            аргановое, миндальное, подсолнечное масло и масло жожоба защищают кожу и волосы от потери влаги
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            для гладких и сильных волос на бороде
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            придает волосам бороды естественный блеск, не делая ее жирной
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            снимает зуд
                                        </li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">3 | Aloe Vera 2 в 1 Бальзам для укладки волос и бороды</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Идеальный стиль для волос и бороды. Фиксирует волосы, даже кудрявые,
                                        позволяет легче их расчесывать. Ухаживает за волосами, насыщает полезными компонентами, придает мягкость и блеск.
                                    </p>
                                    <ul class="gifts-ul-steps">
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            содержит 15% Алоэ Вера и био-экстракт хмеля
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            для укладки и увлажнения
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            придает волосам естественный блеск
                                        </li>
                                        <li>
                                            <v-icon>mdi-check-circle-outline</v-icon>
                                            может способствовать сокращению наследственного выпадения волос
                                        </li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <p class="gifts-p-price">Цена набора: <span class="gifts-price">4219 ₽</span></p>
                        <v-menu
                            top
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="align-self-end gifts-chats-btn"
                                    color="#826235"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Заказать
                                </v-btn>
                            </template>
                            <v-list>
                                <p class="p-gifts-zakaz">
                                    Для заказа выберите любой<br>
                                    удобный вам мессенджер:
                                </p>
                                <v-list-item>
                                    <v-list-item-title
                                        v-if="userData.phone_whatsapp"
                                        class="gifts-list-item"
                                    >
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${userData.phone_whatsapp}`"
                                            target="_blank"
                                        >
                                            <v-btn
                                                class="align-self-end gifts-cntct-btn"
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
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.telegram"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                    <v-list-item-title
                                        v-if="userData.fb_messenger"
                                        class="gifts-list-item"
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
                                                class="align-self-end gifts-cntct-btn"
                                                color="light-blue"
                                            >
                                                <v-icon>mdi-facebook-messenger</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="gifts-skin"
        >
            <v-container>
                <div class="gifts-divider">
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-star-outline</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                    <v-icon>mdi-circle-small</v-icon>
                </div>

                <v-row
                    style="max-width: 1140px"
                    class="mx-auto"
                >
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <h3 class="gifts-h3-steps">Коротко о производителе</h3>
                        <p class="p-gifts">
                            LR Health & Beauty — немецкий производитель первоклассной продукции для здоровья и хорошего самочувствия, для ухода за собой и красоты.
                        </p>
                        <p class="p-gifts">
                            Собственная производственная база, лаборатории и исследовательский центр. Более 30 продуктов имеют уникальный состав и защищены патентом.
                        </p>
                        <p class="p-gifts">
                            Продукты на основе Алоэ Вера являются натуральными и на 100% не содержат парабенов и минеральных масел, что делает их еще более эффективными.
                        </p>
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-expansion-panels popout focusable>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">Сертификаты качества</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        LR — единственный производитель Алоэ Вера, обладающий знаком качества от ИНСТИТУТА ФРЕЗЕНИУС.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        В год для LR выращивается примерно 23 млн. листьев Алоэ Вера исключительно в высокогорьях Мексики,
                                        где для этого имеются самые лучшие условия, позволяющие не использовать пестициды.
                                        Превосходное качество выращивания и переработки контролируется и подтверждается
                                        Международным научным советом по Алоэ (IASC).
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Безопасность для кожи и эффективность продукции LR подтверждена НИИ DERMATEST и DERMA CONSULT
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Продукция LR не тестируется на животных.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Парфюмерия LR неоднократно номинировалась на премию Duftstars.
                                    </p>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/certificates.jpg"/>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">Парфюмерия</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        LR выпускает парфюмерную продукцию с 1985 года.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Продукция протестирована и одобрена дерматологами.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        LR выпускает индивидуальные парфюмерные композиции от международных звезд.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Парфюмерия LR неоднократно номинировалась на премию Duftstars, которая присуждается лучшим парфюмерным композициям года.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        Стойкость ароматов парфюмерии LR достигается высоким содержанием парфюмерных масел – от 15% и даже до 23,5%.
                                    </p>
                                    <v-img class="gifts-img-exp mt-7 mx-auto" max-width="250px" src="/img/gifts/concentration-parfum.jpg"/>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel class="gifts-exp-panel">
                                <v-expansion-panel-header class="gifts-exp-title">Линия Aloe Via</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-7 gifts-step-p-exp">
                                        Что делает линию Aloe Via максимально эффективной.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        1. Высокое содержание Алоэ Вера, обеспечивающее интенсивный уход и восстановление (до 90%).
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        2. Каждое средство содержит большое количество био-экстрактов, которые ориентированы на различные потребности кожи.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        3. Все продукты являются натуральными и на 100% не содержат парабенов и минеральных масел, что делает их еще более эффективными.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        5. LR обладает самой современной производственной площадкой Алоэ Вера в Европе.
                                    </p>
                                    <p class="gifts-step-p-exp">
                                        6. Строгие критерии выращивания Алоэ Вера на высокогорных плантациях Мексики – без пестицидов, удобрений или других химических добавок.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section
            id="gifts-whatsapp"
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
                        <p class="gifts-p-whatsapp">
                            Не нашли подходящий подарок?
                        </p>
                        <p class="gifts-p-whatsapp-small">
                            Закажите обратный звонок и мы поможем вам подобрать подарок из более 500 наименований продукции
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
                            class="gifts-input-phone"
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
                                color="#826235"
                                class="mr-0"
                                @click="addProspectGifts"
                            >
                                Отправить
                            </v-btn>
                        </p>
                        <p class="gifts-privacy-text">
                            Оставляя заявку, вы даете свое
                            <router-link :to="{name: 'Personal'}" target="_blank">Согласие на обработку персональных данных</router-link>
                            и принимаете
                            <router-link :to="{name: 'Policy'}" target="_blank">Политику конфидециальности</router-link>.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section id="gifts-consultant">
            <v-container class="text-center">
                <h2 class="gifts-h2-center mt-7 mb-3">Заказать подарок</h2>

                <p class="gifts-consultant-p">Или получить помощь в выборе подарка</p>
                <p class="mb-5">Свяжитесь с персональным консультантом LR Health & Beauty прямо сейчас</p>

                <v-responsive
                    class="mx-auto mb-10"
                    width="56"
                >
                    <v-divider class="mb-1" style="border-color: #AD8F64"></v-divider>

                    <v-divider style="border-color: #AD8F64"></v-divider>
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
            class="justify-center gifts-footer"
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
                <v-card-title class="headline lighten-2 pb-5" style="background-color: #AD8F64; color: white">
                    Заявка принята
                </v-card-title>

                <v-card-text>
                    Ваш консультант свяжется с вами в ближайшее время
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="#AD8F64"
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
    name: "Gifts",
    data: () => ({
        newProspect: {
            phone: '',
            partner: '',
            instrument: 'Подарки',
            step: 'Новый'
        },
        errors: {},
        dialog_main: false,
        dialog_prospect: false,
        loading: false,
        cookieShow: true,
        genderMan: false,
        genderWoman: true,
        price1000: true,
        price2000: false,
        price3000: false,
        price4000: false,
        giftsGender: 'w',
        giftsPrice: '1000',
    }),
    metaInfo: {
        title: 'Подарки по доступной цене',
        meta: [
            { vmid: 'description', property: 'description', content: 'Эксклюзивные подарки премиум класса по доступной цене' },
            { vmid: 'og:title', property: 'og:title', content: 'Подарки по доступной цене' },
            { vmid: 'og:description', property: 'og:description', content: 'Эксклюзивные подарки премиум класса по доступной цене' },
            { vmid: 'og:image', property: 'og:image', content: '/img/gifts/gifts.jpg' },
        ],
    },
    created() {
        if (!this.$route.query.p) {
            if (this.$cookies.isKey('lifeplus_partner')) {
                const partnerNum = this.$cookies.get('lifeplus_partner')
                this.$router.push ({name: 'Gifts', query: { p: partnerNum }})
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
            let scrollBottom = document.getElementById("gifts-start")
            scrollBottom.scrollIntoView({ behavior: "smooth" })
        },
        btnGiftsW() {
            this.genderMan = false
            this.genderWoman = true
            this.giftsGender = 'w'
        },
        btnGiftsM() {
            this.genderMan = true
            this.genderWoman = false
            this.giftsGender = 'm'
        },
        btnGifts1000() {
            this.price1000 = true
            this.price2000 = false
            this.price3000 = false
            this.price4000 = false
            this.giftsPrice = '1000'
        },
        btnGifts2000() {
            this.price1000 = false
            this.price2000 = true
            this.price3000 = false
            this.price4000 = false
            this.giftsPrice = '2000'
        },
        btnGifts3000() {
            this.price1000 = false
            this.price2000 = false
            this.price3000 = true
            this.price4000 = false
            this.giftsPrice = '3000'
        },
        btnGifts4000() {
            this.price1000 = false
            this.price2000 = false
            this.price3000 = false
            this.price4000 = true
            this.giftsPrice = '4000'
        },
        addProspectGifts() {
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
#gifts-main
    background-color: #FCFAF8
    background-position: top right
    background-repeat: no-repeat
    background-size: contain
    min-height: 100vh

.gifts-video-bg
    height: 100% !important
    width: 100% !important
    top: 0
    left: 0
    position: absolute !important
    overflow: hidden
    z-index: 0
    direction: ltr
    margin: 0 !important
    max-height: 100vh !important
    -webkit-transition: opacity 1s
    -o-transition: opacity 1s
    transition: opacity 1s
    pointer-events: none
    opacity: 0.5

.gifts-bg-video-hosted
    position: absolute !important
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    height: 100% !important
    width: 100% !important
    max-height: 100vh !important
    margin: 0 !important

.gifts-html5-video
    -o-object-fit: cover
    object-fit: cover

#gifts-skin, #gifts-start
    background-color: #FCFAF8
    padding-bottom: 60px

#gifts-start
    padding-top: 40px

#gifts-info-video, #gifts-box-award, #gifts-sostav, #gifts-faq, #gifts-consultant, #gifts-video
    background-color: #FCFAF8

.gifts-img
    box-shadow: 10px 10px 0 0 #AD8F64

.media-img
    display: none

.converter-main
    background-color: rgba(252, 250, 248, 0.7)

.whatsapp-gifts-fixed
    position: fixed
    margin-top: 0
    margin-bottom: 0
    bottom: 21px
    right: 20px
    z-index: 10

.block-podcherk-gifts
    position: relative
    display: block
    width: 230px

.gifts-list-item
    margin-right: 10px

.gifts-list-item:last-child
    margin-right: 0

.gifts-chats-btn
    margin: 0 !important

.gifts-cntct-btn
    box-shadow: none !important

.gifts-video-div
    padding-left: 10px

.gifts-video-btn
    width: 60px
    display: inline-block

.gifts-video-btn-txt
    display: inline-block
    margin-bottom: 0 !important
    color: #fff

.gifts-line-title
    position: absolute
    top: 50%
    left: 50%
    width: calc(100% + 20px)
    height: calc(100% + 20px)
    -webkit-transform: translate(-50%,-50%)
    -ms-transform: translate(-50%,-50%)
    transform: translate(-50%,-50%)
    overflow: visible

.gifts-choice-block
    text-align: center

.gifts-h2-main-view
    font-size: 24px
    margin-bottom: 20px

.gifts-choice-gender
    font-size: 22px

.gifts-choice-gender p
    display: inline-block
    padding: 0 40px
    cursor: pointer
    position: relative

.gifts-choice-gender p.active
    color: #AD8F64

.gifts-choice-gender p.active .v-icon
    color: #AD8F64

.gifts-choice-gender p.active:before
    margin-top: 5px
    height: 5px
    background: linear-gradient(to right,#fff0 0%,#AD8F64 50%,#fff0 100%)
    width: 130px
    position: absolute
    left: 50%
    top: 25px
    content: ""
    transform: translateX(-50%)

.gifts-choice-gender p .v-icon
    padding-bottom: 4px

.gifts-choice-price
    font-size: 22px
    margin-top: 10px

.gifts-choice-price p
    display: inline-block
    padding: 0 20px
    cursor: pointer
    position: relative

.gifts-choice-price p.active
    color: #AD8F64

.gifts-choice-price p.active:before
    margin-top: 5px
    height: 5px
    background: linear-gradient(to right,#fff0 0%,#AD8F64 50%,#fff0 100%)
    width: 50px
    position: absolute
    left: 50%
    top: 25px
    content: ""
    transform: translateX(-50%)

.gifts-line-title path
    stroke: #AD8F64
    stroke-width: 9
    fill: none
    opacity: 1
    stroke-dasharray: 1500 1500
    -webkit-transition: .3s
    -o-transition: .3s
    transition: .3s

.gifts-nabor
    color: #333
    font-size: 18px
    font-style: italic
    margin-bottom: 0 !important

.p-gifts
    font-size: 16px

.gifts-divider
    text-align: center
    margin: 40px 0

.gifts-divider .v-icon
    color: #826235

.gifts-border-left
    border-left: 3px solid #826235
    padding-left: 20px

.gifts-border-left:before
    content: "“"
    font-size: 100px
    color: #826235
    font-weight: 900
    line-height: 1
    display: block
    height: .6em
    font-family: Times New Roman,Times,serif

.gifts-blockquote
    font-size: 16px
    font-style: italic

.p-gifts-zakaz
    color: #826235
    text-align: center
    font-size: 16px
    line-height: 20px !important

.gifts-sostav
    text-transform: uppercase
    background-color: #AD8F64
    padding: 3px 5px
    color: white
    margin-bottom: 20px
    display: inline-block

.gifts-p-price
    font-size: 24px
    margin-top: 20px

.gifts-price
    color: #AD8F64
    font-size: 48px
    margin-left: 20px
    padding-top: 20px
    display: inline-block

.gifts-price-line
    text-decoration: line-through
    font-weight: lighter
    margin-left: 10px

.rev-p-gifts
    font-weight: bold
    text-transform: uppercase
    line-height: 18px !important
    margin-bottom: 30px !important
    color: #333
    font-size: 22px
    display: inline-block
    position: relative
    margin-top: 40%

.gifts-logo
    margin-right: 10px
    float: left

.rev-p-gifts span
    position: relative
    top: 15px

.gifts-h1
    color: #333
    font-size: 54px
    line-height: 60px
    font-weight: 400
    margin-bottom: 40px
    position: relative

.gifts-img-in
    max-width: 250px

.gifts-subtitle-main
    position: relative
    max-width: 300px
    margin-bottom: 40px

.gifts-subtitle-main p
    font-size: 22px
    font-weight: 300

.gifts-ul-main
    list-style-type: none
    margin-top: 30px
    padding-left: 10px !important
    margin-bottom: 20px

.gifts-ul-main li
    font-size: 22px
    line-height: 34px
    color: #333333

.gifts-icon-main
    color: #AD8F64 !important
    padding-right: 5px

.gifts-h2
    font-size: 24px
    text-transform: uppercase
    text-align: center
    margin-top: 10px
    margin-bottom: 10px

.gifts-h2-center
    font-size: 36px
    margin-top: 10px
    margin-bottom: 10px
    color: #AD8F64
    text-transform: uppercase
    text-align: center

.gifts-h2-steps
    font-size: 36px
    margin-bottom: 10px
    color: #AD8F64
    text-transform: uppercase

.gifts-h3-steps
    color: #AD8F64
    font-size: 32px
    font-style: italic
    margin-bottom: 20px
    padding-left: 10px

.gifts-snoska
    display: inline-block
    margin-bottom: 20px
    margin-top: 30px

.gifts-snoska-table
    display: inline-block
    margin-bottom: 20px
    margin-top: 30px
    max-width: 670px

.gifts-ul-steps, .gifts-ul-award
    font-size: 16px
    list-style-type: none
    padding: 0 !important
    margin-bottom: 20px

.gifts-ul-steps li, .gifts-ul-award li
    line-height: 2rem
    margin-bottom: 10px

.gifts-ul-steps li .v-icon, .gifts-ul-award .v-icon
    padding-right: 7px
    color: #AD8F64

#gifts-whatsapp
    background-color: #e6d3ba

.gifts-p-whatsapp
    margin-top: 20px
    color: #333
    font-size: 22px

.gifts-p-whatsapp-small
    color: #333
    font-size: 16px

.gifts-privacy-text
    color: #333 !important
    font-size: 10px
    line-height: 15px !important

.gifts-privacy-text a
    color: #333 !important

.gifts-input-phone .v-icon
    color: #826235 !important

.gifts-input-phone .v-lagiftsl
    color: #333 !important

.gifts-input-phone input
    color: #333 !important

.gifts-info-p-bold
    font-size: 32px
    font-weight: bold
    line-height: 44px !important

.gifts-video-who
    font-size: 18px
    margin-top: 40px
    margin-bottom: 7px !important

.gifts-video-who span
    display: block

.gifts-video-border
    border-bottom-width: 1px
    width: 97px
    border-style: solid
    border-color: #AD8F64

.gifts-exp-panel .v-icon
    color: #AD8F64 !important

.gifts-exp-title
    font-size: 18px
    background-color: antiquewhite

.gifts-step-p-exp
    font-size: 16px

.gifts-footer
    background-color: #AD8F64 !important
    color: white !important

.gifts-consultant-p
    font-size: 24px

.gifts-video-main
    max-width: 800px
    margin-left: auto
    margin-right: auto

@media(max-width: 1200px)
    #gifts-skin
        padding-bottom: 0

    .gifts-complex-left
        padding: 20px 30px

    .gifts-complex-right
        padding: 20px 30px

    .converter-main
        margin-left: 40px

    .lifetakt-gifts
        margin-left: 40px

    .rev-p-gifts
        font-size: 18px
        margin-top: 15%

    .gifts-h1
        font-size: 46px

    .block-podcherk-gifts
        width: 200px

    .gifts-subtitle-main p
        font-size: 22px

    .gifts-ul-main li
        font-size: 18px
        line-height: 28px

@media(max-width: 959px)
    .media-img
        display: inline-block

    .right-img
        display: none

    .rev-p-gifts
        margin-top: 10%

    .gifts-h1
        font-size: 40px
        line-height: 44px

@media(max-width: 760px)
    .lifetakt-gifts
        margin-bottom: 20px

@media(max-width: 500px)
    .converter-main
        margin-left: 0

    .lifetakt-gifts
        margin-left: 0

@media(max-width: 480px)
    .rev-p-gifts
        max-width: 200px
        line-height: 18px !important
        margin-bottom: 30px !important
        font-size: 14px

    .gifts-h1
        font-size: 36px
        line-height: 40px

    .block-podcherk-gifts
        width: 150px


@media(max-width: 350px)
    .converter-main
        background-color: initial

</style>