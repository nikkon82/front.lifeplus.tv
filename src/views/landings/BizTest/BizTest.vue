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
            class="biz-test-main"
        >
            <section id="biz-test-page">
                <v-row no-gutters>
                    <transition name="fade">
                        <div v-if="biztData.landing === true">
                            <v-container
                                id="biz-test-start"
                                tag="section"
                            >
                                <p style="width: 100%; max-width: 800px; height: auto; margin: 0">
                                    <img style="width: 100%;" src="/img/biztest/bizt-bg-top.png" alt=""/>
                                </p>
                                <div class="bizt-main-div">
                                    <h1 class="bizt-h1-main">Тест на "Антихрупкость"</h1>
                                    <v-divider class="bizt-divider-main"/>
                                    <h2 class="bizt-h2-main">Готовы ли вы к кризису 2023?</h2>

                                    <p class="bizt-p-main">Эксперты прогнозируют снижение уровня доходов, рост цен, безработицу, продовольственный кризис, новую пандемию и многое другое.</p>
                                    <p class="bizt-p-main">Пройдите тест и узнайте, насколько вы готовы к жизни в новых экономических реалиях.</p>

                                    <v-btn
                                        class="bizt-btn-main"
                                        :disabled="disBtnBizTestDisabled"
                                        @click="biztBtnTest"
                                    >
                                        Пройти тест
                                    </v-btn>
                                </div>
                            </v-container>

                            <v-container
                                id="biz-test-block"
                                tag="section"
                            >
                                <h2 class="bizt-h2">Что происходит?</h2>

                                <p>
                                    Мы переживаем политический, экономический, энергетический, сырьевой, промышленный, финансовый, потребительский кризисы <strong>ОДНОВРЕМЕННО</strong>.
                                </p>
                                <p>
                                    Санкции, нарушение логистических цепочек, горячие конфликты и информационные войны…
                                </p>
                                <p>
                                    Меняется экономический и геополитический уклад мира. Меняется привычный уклад жизни. Нас ждут кардинальные перемены. И эти перемены затрагивают каждого.
                                </p>

                                <p class="bizt-p-str">Пройдите тест и узнайте, насколько вы готовы к жизни в новых экономических реалиях.</p>

                                <p style="text-align: center">
                                    <v-btn
                                        class="bizt-btn"
                                        :disabled="disBtnBizTestDisabled"
                                        @click="biztBtnTest"
                                    >
                                        Пройти тест
                                    </v-btn>
                                </p>
                            </v-container>

                            <v-container
                                id="biz-test-block"
                                tag="section"
                            >
                                <h2 class="bizt-h2">Что делать?</h2>

                                <p>
                                    В книге <strong>«Антихрупкость. Как извлечь выгоду из хаоса»</strong> Нассим Талеб (автор книг и научных статей по
                                    экономике и финансам) описывает <strong>4 вида мышления человека в эпоху перемен:</strong>
                                </p>

                                <div class="bizt-div-border">
                                    <div class="bizt-div-b-img">
                                        <p style="width: 100%; max-width: 200px; height: auto; margin: 0">
                                            <img style="width: 100%;" src="/img/biztest/tbiz-glass.png" alt=""/>
                                        </p>
                                    </div>
                                    <div class="bizt-div-b">
                                        <h3 class="bizt-h3">1. ХРУПКОСТЬ</h3>
                                        <p class="bizt-p-sub">Паника, отчаяние, депрессия</p>

                                        <p>
                                            Паника — это эмоции. Эмоции — это нерациональные решения. Нерациональные решения — это убыток.
                                            Отчаяние парализует волю и решимость. Людям в таком эмоциональном состоянии кажутся бесполезными
                                            любые идеи и новые начинания. <strong>Они не ищут решение, потому что думают, что его нет.</strong>
                                            Именно по ним последствия кризиса бьют больнее всего.
                                        </p>
                                    </div>
                                </div>

                                <div class="bizt-div-border">
                                    <div class="bizt-div-b-img">
                                        <p style="width: 100%; max-width: 200px; height: auto; margin: 0">
                                            <img style="width: 100%;" src="/img/biztest/tbiz-stone.png" alt=""/>
                                        </p>
                                    </div>
                                    <div class="bizt-div-b">
                                        <h3 class="bizt-h3">2. СОПРОТИВЛЕНИЕ</h3>
                                        <p class="bizt-p-sub">Злость, напряжение, глухая оборона</p>

                                        <p>
                                            Стратегия затянуть потуже пояса и перетерпеть — разрушительна.
                                            <strong>Вместо того, чтобы использовать момент времени для адаптации к новым реалиям, они погрязают в новостной ленте, ищут виноватых, а не решение.</strong>
                                            Когда сил сопротивляться больше нет, впадают в состояние хрупкости.
                                        </p>
                                    </div>
                                </div>

                                <div class="bizt-div-border">
                                    <div class="bizt-div-b-img">
                                        <p style="width: 100%; max-width: 200px; height: auto; margin: 0">
                                            <img style="width: 100%;" src="/img/biztest/tbiz-duck.jpeg" alt=""/>
                                        </p>
                                    </div>
                                    <div class="bizt-div-b">
                                        <h3 class="bizt-h3">3. БЕСПЕЧНОЕ СМИРЕНИЕ</h3>
                                        <p class="bizt-p-sub">Ложный позитив, ошибка в оценке реальности</p>

                                        <p>
                                            Часто, когда человек не знает, как решить проблему, он искусственно преуменьшает ее серьезность.
                                            <strong>Вместо того, чтобы искать решение, он ищет «доказательства», что проблема слишком незначительна, чтобы ее решать.</strong>
                                            Как правило, под ударами реальности улыбка, скрывающая боль, сменяется на гримасу отчаяния.
                                        </p>
                                    </div>
                                </div>

                                <div class="bizt-div-border">
                                    <div class="bizt-div-b-img">
                                        <p style="width: 100%; max-width: 200px; height: auto; margin: 0">
                                            <img style="width: 100%;" src="/img/biztest/tbiz-man.jpeg" alt=""/>
                                        </p>
                                    </div>
                                    <div class="bizt-div-b">
                                        <h3 class="bizt-h3">4. АНТИХРУПКОСТЬ</h3>
                                        <p class="bizt-p-sub">Адаптация, способность развиваться и эволюционировать</p>

                                        <p>
                                            Мышцы под воздействием нагрузки восстанавливаться до уровня превышающего исходное состояние.
                                            Человек <strong>с Антихрупким мышлением</strong> в кризис развивается, эволюционирует, преуспевает.
                                            Превращает посттравматический шок в посттравматический рост. <strong style="font-style: italic">«Ветер гасит свечу и разжигает огонь».</strong>
                                        </p>
                                        <p>
                                            Он не просто ищет решение, которое подходит под его текущий уровень навыков. Он ищет лучшее решение и готов адаптировать
                                            под него уровень своих способностей.
                                        </p>
                                    </div>
                                </div>
                            </v-container>

                            <v-container
                                id="biz-test-block"
                                tag="section"
                            >
                                <h2 class="bizt-h2">Хотите преуспеть в условиях хаоса?</h2>

                                <p class="bizt-p-str">
                                    Пройдите тест, узнайте степень своей антихрупкости и получите рекомендации, как начать лучше зарабатывать в условиях кризиса.
                                </p>
                                <p style="text-align: center">
                                    <v-btn
                                        class="bizt-btn"
                                        :disabled="disBtnBizTestDisabled"
                                        @click="biztBtnTest"
                                    >
                                        Пройти тест
                                    </v-btn>
                                </p>
                            </v-container>

                            <v-footer
                                class="justify-center biz-test-footer"
                                height="60"
                                width="100%"
                                style="padding: 10px;"
                            >
                                <div class="title font-weight-light text-center">
                                    &copy; {{ (new Date()).getFullYear() }} — lifeplus.tv — независимый партнер LR Health & Beauty
                                </div>
                            </v-footer>
                        </div>
                    </transition>

                    <transition name="fade">
                        <div v-if="biztData.test" class="bizt-dmain-test">
                            <transition name="fade">
                                <div v-if="bizTest.start === true" class="bizt-div-test">
                                    <h3 class="bizt-h3-test">Оцените степень вашей готовности к кризису</h3>
                                    <p class="bizt-ptest-sub">
                                        Прежде чем проходить тест, оцените свою готовность к кризису по своим ощущениям.
                                        После прохождения теста у вас будет возможность сравнить то, что чувствуете, с тем, как есть на самом деле.
                                    </p>

                                    <v-slider
                                        class="bizt-slider"
                                        v-model="valueCrizes"
                                        step="10"
                                        ticks="always"
                                        thumb-label="always"
                                        tick-size="4"
                                    ></v-slider>

                                    <p class="bizt-p-test">Насколько вы готовы к кризису от 0 до 100</p>

                                    <p style="text-align: center">
                                        <v-btn
                                            class="bizt-btn-test"
                                            :disabled="disBtnBizTest.start"
                                            @click="btnBizTestStart"
                                        >
                                            Далее
                                        </v-btn>
                                    </p>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="bizTest.one" class="bizt-div-test">
                                    <span class="bizt-num-test">1/10</span>
                                    <h3 class="bizt-h3-test">В случае потери работы/снижения доходов есть ли у вас «План Б»?</h3>
                                    <p class="bizt-ptest-sub">(есть дополнительный источник дохода, могу быстро найти работу, есть накопления и т.п.)</p>

                                    <v-radio-group
                                        v-model="radios1"
                                        mandatory
                                        class="bizt-radio-gr"
                                    >
                                        <v-radio
                                            class="bizt-radio"
                                            label="Да, план Б есть"
                                            value="radio1-1"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Нет"
                                            value="radio1-2"
                                        ></v-radio>
                                    </v-radio-group>

                                    <p style="text-align: center">
                                        <v-btn
                                            class="bizt-btn-test"
                                            :disabled="disBtnBizTest.one"
                                            @click="btnBizTestOne"
                                        >
                                            Далее
                                        </v-btn>
                                    </p>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="bizTest.two" class="bizt-div-test">
                                    <span class="bizt-num-test">2/10</span>
                                    <h3 class="bizt-h3-test">Есть ли у вас собственное жилье?</h3>

                                    <v-radio-group
                                        v-model="radios2"
                                        mandatory
                                        class="bizt-radio-gr"
                                    >
                                        <v-radio
                                            class="bizt-radio"
                                            label="Да"
                                            value="radio2-1"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Да, выплачиваю ипотеку"
                                            value="radio2-2"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Нет, снимаю"
                                            value="radio2-3"
                                        ></v-radio>
                                    </v-radio-group>

                                    <p style="text-align: center">
                                        <v-btn
                                            class="bizt-btn-test"
                                            :disabled="disBtnBizTest.two"
                                            @click="btnBizTestTwo"
                                        >
                                            Далее
                                        </v-btn>
                                    </p>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="bizTest.three" class="bizt-div-test">
                                    <span class="bizt-num-test">3/10</span>
                                    <h3 class="bizt-h3-test">Ваша сфера деятельности позволяет работать дистанционно?</h3>

                                    <v-radio-group
                                        v-model="radios3"
                                        mandatory
                                        class="bizt-radio-gr"
                                    >
                                        <v-radio
                                            class="bizt-radio"
                                            label="Да"
                                            value="radio3-1"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Нет"
                                            value="radio3-2"
                                        ></v-radio>
                                    </v-radio-group>

                                    <p style="text-align: center">
                                        <v-btn
                                            class="bizt-btn-test"
                                            :disabled="disBtnBizTest.three"
                                            @click="btnBizTestThree"
                                        >
                                            Далее
                                        </v-btn>
                                    </p>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="bizTest.four" class="bizt-div-test">
                                    <span class="bizt-num-test">4/10</span>
                                    <h3 class="bizt-h3-test">В случае потери доходов, сколько месяцев вы сможете прожить за счет сбережений, оплачивая все ежемесячные расходы?</h3>

                                    <v-radio-group
                                        v-model="radios4"
                                        mandatory
                                        class="bizt-radio-gr"
                                    >
                                        <v-radio
                                            class="bizt-radio"
                                            label="Менее 3 месяцев"
                                            value="radio4-1"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="От 3 до 6 месяцев"
                                            value="radio4-2"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Более 6 месяцев"
                                            value="radio4-3"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="У меня нет сбережений"
                                            value="radio4-4"
                                        ></v-radio>
                                    </v-radio-group>

                                    <p style="text-align: center">
                                        <v-btn
                                            class="bizt-btn-test"
                                            :disabled="disBtnBizTest.four"
                                            @click="btnBizTestFour"
                                        >
                                            Далее
                                        </v-btn>
                                    </p>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="bizTest.five" class="bizt-div-test">
                                    <span class="bizt-num-test">5/10</span>
                                    <h3 class="bizt-h3-test">Есть ли у вас активы, приносящие доход?</h3>
                                    <p class="bizt-ptest-sub">(ценные бумаги, сдаваемая в аренду недвижимость, сдаваемый в аренду автомобиль и т.п.)</p>

                                    <v-radio-group
                                        v-model="radios5"
                                        mandatory
                                        class="bizt-radio-gr"
                                    >
                                        <v-radio
                                            class="bizt-radio"
                                            label="Да, доходность меньше, чем ежемесячные расходы"
                                            value="radio5-1"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Да, доходность больше, чем ежемесячные расходы"
                                            value="radio5-2"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="У меня нет активов"
                                            value="radio5-3"
                                        ></v-radio>
                                    </v-radio-group>

                                    <p style="text-align: center">
                                        <v-btn
                                            class="bizt-btn-test"
                                            :disabled="disBtnBizTest.five"
                                            @click="btnBizTestFive"
                                        >
                                            Далее
                                        </v-btn>
                                    </p>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="bizTest.six" class="bizt-div-test">
                                    <span class="bizt-num-test">6/10</span>
                                    <h3 class="bizt-h3-test">Есть ли у вас огород, дача?</h3>
                                    <p class="bizt-ptest-sub">(ежегодно выращиваете овощи, фрукты, ягоды)</p>

                                    <v-radio-group
                                        v-model="radios6"
                                        mandatory
                                        class="bizt-radio-gr"
                                    >
                                        <v-radio
                                            class="bizt-radio"
                                            label="Да"
                                            value="radio6-1"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Нет"
                                            value="radio6-2"
                                        ></v-radio>
                                    </v-radio-group>

                                    <p style="text-align: center">
                                        <v-btn
                                            class="bizt-btn-test"
                                            :disabled="disBtnBizTest.six"
                                            @click="btnBizTestSix"
                                        >
                                            Далее
                                        </v-btn>
                                    </p>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="bizTest.seven" class="bizt-div-test">
                                    <span class="bizt-num-test">7/10</span>
                                    <h3 class="bizt-h3-test">Какая часть семейного бюджета уходит на погашение долгов и кредитов?</h3>

                                    <v-radio-group
                                        v-model="radios7"
                                        mandatory
                                        class="bizt-radio-gr"
                                    >
                                        <v-radio
                                            class="bizt-radio"
                                            label="Менее половины семейного бюджета"
                                            value="radio7-1"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Более половины"
                                            value="radio7-2"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="У меня нет долгов и кредитов"
                                            value="radio7-3"
                                        ></v-radio>
                                    </v-radio-group>

                                    <p style="text-align: center">
                                        <v-btn
                                            class="bizt-btn-test"
                                            :disabled="disBtnBizTest.seven"
                                            @click="btnBizTestSeven"
                                        >
                                            Далее
                                        </v-btn>
                                    </p>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="bizTest.eight" class="bizt-div-test">
                                    <span class="bizt-num-test">8/10</span>
                                    <h3 class="bizt-h3-test">Ведете ли вы здоровый образ жизни?</h3>
                                    <p class="bizt-ptest-sub">(питание, физическая активность, сон)</p>

                                    <v-radio-group
                                        v-model="radios8"
                                        mandatory
                                        class="bizt-radio-gr"
                                    >
                                        <v-radio
                                            class="bizt-radio"
                                            label="Да. Питаюсь правильно, занимаюсь спортом, высыпаюсь"
                                            value="radio8-1"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Стараюсь придерживаться, но не всегда и не во всем"
                                            value="radio8-2"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Нет. Правильного питания не придерживаюсь, спортом не занимаюсь, есть вредные привычки (все или что-то из перечисленного)"
                                            value="radio8-3"
                                        ></v-radio>
                                    </v-radio-group>

                                    <p style="text-align: center">
                                        <v-btn
                                            class="bizt-btn-test"
                                            :disabled="disBtnBizTest.eight"
                                            @click="btnBizTestEight"
                                        >
                                            Далее
                                        </v-btn>
                                    </p>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="bizTest.nine" class="bizt-div-test">
                                    <span class="bizt-num-test">9/10</span>
                                    <h3 class="bizt-h3-test">Сколько в среднем денег в месяц вы выделяете на поддержание здоровья?</h3>
                                    <p class="bizt-ptest-sub">(употребление витаминов, БАДов и т.п.)</p>

                                    <v-radio-group
                                        v-model="radios9"
                                        mandatory
                                        class="bizt-radio-gr"
                                    >
                                        <v-radio
                                            class="bizt-radio"
                                            label="Менее 5 000 руб. в месяц"
                                            value="radio9-1"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Более 5 000 руб. в месяц"
                                            value="radio9-2"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Не выделяю"
                                            value="radio9-3"
                                        ></v-radio>
                                    </v-radio-group>

                                    <p style="text-align: center">
                                        <v-btn
                                            class="bizt-btn-test"
                                            :disabled="disBtnBizTest.nine"
                                            @click="btnBizTestNine"
                                        >
                                            Далее
                                        </v-btn>
                                    </p>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="bizTest.ten" class="bizt-div-test">
                                    <span class="bizt-num-test">10/10</span>
                                    <h3 class="bizt-h3-test">Готовы ли вы, в случае необходимости, быстро адаптироваться к новым условиям жизни?</h3>
                                    <p class="bizt-ptest-sub">(в короткие сроки освоить новую профессию, развить новый навык, взяться за новое дело и т.п.)</p>

                                    <v-radio-group
                                        v-model="radios10"
                                        mandatory
                                        class="bizt-radio-gr"
                                    >
                                        <v-radio
                                            class="bizt-radio"
                                            label="Да"
                                            value="radio10-1"
                                        ></v-radio>
                                        <v-radio
                                            class="bizt-radio"
                                            label="Нет"
                                            value="radio10-2"
                                        ></v-radio>
                                    </v-radio-group>

                                    <p style="text-align: center">
                                        <v-btn
                                            class="bizt-btn-test"
                                            :disabled="disBtnBizTest.ten"
                                            @click="btnBizTestTen"
                                        >
                                            Далее
                                        </v-btn>
                                    </p>
                                </div>
                            </transition>
                        </div>
                    </transition>

                    <transition name="fade">
                        <div v-if="biztData.result === true" class="bizt-result-test">
                            <h2 class="btest-res-h2">Результаты теста</h2>

                            <h3 class="btest-res-h3">Вы оценили свою готовность к кризису на</h3>
                            <p class="btest-res-p-red">{{ this.biztResults.value_crizes }}</p>

                            <h3 class="btest-res-h3">Тест показал, что ваш уровень готовности к кризису</h3>
                            <p class="btest-res-p-blue">{{ this.biztResults.summ }}</p>

                            <h3 class="btest-res-h2" v-if="biztNegativ">На что стоит обратить внимание</h3>

                            <v-card
                                class="mx-auto btest-card-answer"
                                max-width="344"
                                v-if="biztResults.one === 0"
                            >
                                <v-card-title class="btest-answ-card-title">
                                    <p>
                                        У вас нет плана Б
                                    </p>
                                </v-card-title>

                                <v-card-subtitle class="btest-answ-card-subtitle">
                                    <p>Самый сильный удар - это удар, которого не ждешь</p>
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        class="btest-answ-btn"
                                        text
                                        @click="show_one = !show_one"
                                    >
                                        Подробнее <v-icon>{{ show_one ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show_one">
                                        <v-divider></v-divider>

                                        <v-card-text class="btest-answ-card-text">
                                            В наше время учесть все риски невозможно.
                                            И все же следует проработать план выхода из наиболее вероятных негативных ситуаций.
                                            Как минимум нужен план на случай потери дохода.
                                        </v-card-text>

                                        <v-card-text class="btest-answ-card-text">
                                            Один известный финансист рассказывал, как когда-то был уверен на 100%, что не потеряет работу,
                                            потому что его дядя был гендиректором компании. И вот однажды уволили его дядю. После чего и он лишился своей работы.
                                            Беспечность, ложный оптимизм или чрезмерная уверенность губительны.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>

                            <v-card
                                class="mx-auto btest-card-answer"
                                max-width="344"
                                v-if="biztResults.two === 1"
                            >
                                <v-card-title class="btest-answ-card-title">
                                    <p>
                                        Вы выплачиваете ипотеку
                                    </p>
                                </v-card-title>

                                <v-card-subtitle class="btest-answ-card-subtitle">
                                    <p>Большая нагрузка на семейный бюджет и серьезный фактор риска в случае потери или снижения доход</p>
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        class="btest-answ-btn"
                                        text
                                        @click="show_two_one = !show_two_one"
                                    >
                                        Подробнее <v-icon>{{ show_two_one ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show_two_one">
                                        <v-divider></v-divider>

                                        <v-card-text class="btest-answ-card-text">
                                            Квартира в залоге у банка и если по каким-то причинам вы не сможете платить по кредиту, банк имеет право продать
                                            квартиру на торгах и вы можете остаться без крыши над головой. Более того, на ипотечные квартиры не распространяется
                                            закон о том, что нельзя забрать единственное жилье в случае, если возникают долги и дело доходит до суда.
                                        </v-card-text>

                                        <v-card-text class="btest-answ-card-text">
                                            За 2021 год доля просроченной ипотечной задолженности выросла на рекордные 15% и продолжает расти.
                                            По прогнозам экспертов в ближайшие три года рынок заполонят квартиры с невыплаченной ипотекой.
                                        </v-card-text>

                                        <v-card-text class="btest-answ-card-text">
                                            Рекомендуем проявить дальновидность и подготовится к возможным негативным вариантам. Например, узнать,
                                            может ли по вашему договору банк увеличить ипотечную ставку и в каких случаях, имеете ли вы право на ипотечные
                                            каникулы или снижение ипотечной ставки в случае неспособности вносить платежи. Ну, и самое главное, начните искать
                                            дополнительный доход, чтобы быстрее выплатить ипотеку.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>

                            <v-card
                                class="mx-auto btest-card-answer"
                                max-width="344"
                                v-if="biztResults.two === 0"
                            >
                                <v-card-title class="btest-answ-card-title">
                                    <p>
                                        Вы снимаете квартиру
                                    </p>
                                </v-card-title>

                                <v-card-subtitle class="btest-answ-card-subtitle">
                                    <p>Большая нагрузка на семейный бюджет и серьезный фактор риска в случае потери или снижения доход</p>
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        class="btest-answ-btn"
                                        text
                                        @click="show_two_two = !show_two_two"
                                    >
                                        Подробнее <v-icon>{{ show_two_two ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show_two_two">
                                        <v-divider></v-divider>

                                        <v-card-text class="btest-answ-card-text">
                                            Если по каким-то причинам вы не сможете выплачивать арендную плату, или у хозяина квартиры поменяются планы,
                                            вы можете остаться на улице. Придется и без того в сложной ситуации решать еще и жилищный вопрос.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>

                            <v-card
                                class="mx-auto btest-card-answer"
                                max-width="344"
                                v-if="biztResults.three === 0"
                            >
                                <v-card-title class="btest-answ-card-title">
                                    <p>
                                        Вы не можете работать дистанционно
                                    </p>
                                </v-card-title>

                                <v-card-subtitle class="btest-answ-card-subtitle">
                                    <p>Это существенно ограничивает ваши возможности получения дохода в кризисные времена</p>
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        class="btest-answ-btn"
                                        text
                                        @click="show_three = !show_three"
                                    >
                                        Подробнее <v-icon>{{ show_three ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show_three">
                                        <v-divider></v-divider>

                                        <v-card-text class="btest-answ-card-text">
                                            Рекомендуем уже сейчас осваивать профессии и рассматривать варианты дохода, которые позволяют работать дистанционно.
                                            Вы сможете экономить время на дорогу, будете сами определять, когда работать.
                                            У вас будет больше возможностей создать дополнительный источник дохода.
                                            Вы не будете привязаны к месту и сможете жить там, где более удобно или выгодно.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>

                            <v-card
                                class="mx-auto btest-card-answer"
                                max-width="344"
                                v-if="biztResults.four === 0"
                            >
                                <v-card-title class="btest-answ-card-title">
                                    <p>
                                        У вас нет накоплений
                                    </p>
                                </v-card-title>

                                <v-card-subtitle class="btest-answ-card-subtitle">
                                    <p>Подушка безопасности, которая покрывает все ваши расходы в течении 6 месяцев - один из ключевых показателей
                                        стабильности и безопасности</p>
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        class="btest-answ-btn"
                                        text
                                        @click="show_four = !show_four"
                                    >
                                        Подробнее <v-icon>{{ show_four ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show_four">
                                        <v-divider></v-divider>

                                        <v-card-text class="btest-answ-card-text">
                                            Отсутствие накоплений, особенно в сегодняшние крайне нестабильные времена,
                                            это крайне рискованная ситуация. Вам срочно нужно подумать над тем, как увеличить доход, сократить расходы
                                            и начать создавать финансовую подушку безопасности. Даже если у вас есть долги и кредиты
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>

                            <v-card
                                class="mx-auto btest-card-answer"
                                max-width="344"
                                v-if="biztResults.five === 0"
                            >
                                <v-card-title class="btest-answ-card-title">
                                    <p>
                                        У вас нет активов
                                    </p>
                                </v-card-title>

                                <v-card-subtitle class="btest-answ-card-subtitle">
                                    <p>Активы - это страховка вашей семьи на случай потери трудоспособности</p>
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        class="btest-answ-btn"
                                        text
                                        @click="show_five = !show_five"
                                    >
                                        Подробнее <v-icon>{{ show_five ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show_five">
                                        <v-divider></v-divider>

                                        <v-card-text class="btest-answ-card-text">
                                            Активы - это не просто дополнительный приток денег в ваш семейный бюджет. Активы поддержит вас
                                            в случае потери трудоспособности или основного источника дохода.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>

                            <v-card
                                class="mx-auto btest-card-answer"
                                max-width="344"
                                v-if="biztResults.seven === 0 || biztResults.seven === 1"
                            >
                                <v-card-title class="btest-answ-card-title">
                                    <p>
                                        Долги и кредиты
                                    </p>
                                </v-card-title>

                                <v-card-subtitle class="btest-answ-card-subtitle">
                                    <p>Один из самых больших факторов риска</p>
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        class="btest-answ-btn"
                                        text
                                        @click="show_seven = !show_seven"
                                    >
                                        Подробнее <v-icon>{{ show_seven ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show_seven">
                                        <v-divider></v-divider>

                                        <v-card-text class="btest-answ-card-text">
                                            В случае финансовых трудностей и пропусков ежемесячных платежей проблема начинает увеличиваться как снежный ком.
                                            Звонки кредиторов увеличивают стресс и деморализуют должника.
                                            Ищите возможность увеличить доход, чтобы как можно быстрее избавиться от долгов и кредитов.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>

                            <v-card
                                class="mx-auto btest-card-answer"
                                max-width="344"
                                v-if="biztResults.eight === 0 || biztResults.nine === 0"
                            >
                                <v-card-title class="btest-answ-card-title">
                                    <p>
                                        Вы не инвестируете в свое здоровье
                                    </p>
                                </v-card-title>

                                <v-card-subtitle class="btest-answ-card-subtitle">
                                    <p>Сегодня это актуально как никогда ранее. Медицина дорожает, продукты питания не покрывают ежедневные потребности
                                        организма в микронутриентах</p>
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        class="btest-answ-btn"
                                        text
                                        @click="show_eight_nine = !show_eight_nine"
                                    >
                                        Подробнее <v-icon>{{ show_eight_nine ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show_eight_nine">
                                        <v-divider></v-divider>

                                        <v-card-text class="btest-answ-card-text">
                                            Стрессы, вредные привычки, экология, возраст - это дополнительные факторы риска для здоровья.
                                        </v-card-text>

                                        <v-card-text class="btest-answ-card-text">
                                            Внутренние резервы организма не безграничны. Если вы уже сейчас чувствуете недостаток энергии, у вас есть лишний вес или,
                                            наоборот, дефицит массы тела - все это признаки того, что организм поддерживает работоспособность за счет своих
                                            резервов и не получает достаточную поддержку извне.
                                        </v-card-text>

                                        <v-card-text class="btest-answ-card-text">
                                            Очевидно, если экономить на качественном топливе и своевременном ТО, не следить за износом деталей, водить авто рывками,
                                            по плохим дорогам и т.п., нам придется очень скоро раскошелиться на дорогостоящий ремонт или новое авто.
                                        </v-card-text>

                                        <v-card-text class="btest-answ-card-text">
                                            Точно также и с нашим здоровьем. Если вести малоподвижный образ жизни, не следить за своим питанием, не поддерживать
                                            организм витаминами и минералами, то рано или поздно он начнет давать сбои. Только поменять старый организм на новый
                                            мы не сможем.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>

                            <v-card
                                class="mx-auto btest-card-answer"
                                max-width="344"
                                v-if="biztResults.ten === 0"
                            >
                                <v-card-title class="btest-answ-card-title">
                                    <p>
                                        Вы не готовы быстро адаптироваться к новым условиям жизни
                                    </p>
                                </v-card-title>

                                <v-card-subtitle class="btest-answ-card-subtitle">
                                    <p>Сегодня постоянно совершенствовать свой профессионализм, осваивать новые навыки
                                        и профессии - это единственный способ остаться на плаву</p>
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        class="btest-answ-btn"
                                        text
                                        @click="show_ten = !show_ten"
                                    >
                                        Подробнее <v-icon>{{ show_ten ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show_ten">
                                        <v-divider></v-divider>

                                        <v-card-text class="btest-answ-card-text">
                                            Вам нужно научиться организовать себя и свое время. В случае необходимости уметь добывать ресурсы (деньги, время, энергия).
                                            Понять, какие навыки вам нужно развивать. Понять, как и в каком направлении двигаться. Сегодня выигрывает не самый умный,
                                            а тот, кто быстро адаптирует свои действия под стремительно меняющиеся условия жизни.
                                        </v-card-text>

                                        <v-card-text class="btest-answ-card-text">
                                            По прогнозам экспертов в ближайшие несколько лет около 15% профессий исчезнут. Около 20% профессий перестанут
                                            использовать человеческий ресурс. Эти естественные факторы прогресса помноженные на рост безработицы связанный
                                            с кризисом создают ситуацию, в которой менее квалифицированные и способные к адаптации люди либо теряют работу,
                                            либо вынуждены работать за гроши.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>

                            <div v-if="biztNegativ" style="padding: 15px">
                                <h3 class="mt-7 mb-5">Кризис - это время новых возможностей</h3>
                                <p>
                                    Но для большинства кризис станет большим бедствием, особенно для тех, кто живет в ложной стабильности.
                                    Они думают, что у них все хорошо и кризис их не сильно коснется или не коснется вовсе.
                                </p>
                                <!--                                <p>-->
                                <!--                                    Давайте посмотрим правде в глаза. В США и Европе люди в среднем тратят на продукты не более 15% семейного бюджета.-->
                                <!--                                    Тогда как в России и странах бывшего СНГ чуть ли не половина дохода семьи уходит на еду, а все, что остается,-->
                                <!--                                    уходит на обязательные расходы и платежи (коммуналка, кредиты и т.п.).-->
                                <!--                                </p>-->
                                <p>
                                    При этом у большинства нет накоплений и/или активов. Соответственно любое экономическое потрясение может обернуться
                                    потерей дохода, долгами, потерей жилья и загнать семью в жестокую нужду за чертой бедности.
                                </p>
                                <p>
                                    Важно вовремя осознать хрупкость своей "стабильности" и уже сейчас начать повышать уровень финансовой устойчивости и
                                    безопасности для своей семьи.
                                </p>

                                <h3 class="mt-7 mb-5">Важно научиться ЛУЧШЕ зарабатывать.</h3>
                                <p>
                                    Не просто БОЛЬШЕ, работая как загнанная лошадь, а именно ЛУЧШЕ:
                                </p>
                                <p style="font-weight: 500; font-style: italic; text-align: center" class="mt-10 mb-10">
                                    Зарабатывать больше, работая дистанционно из любой точки мира и при этом иметь больше свободного времени
                                </p>

                                <p>Интересно узнать больше о такой возможности?</p>
                                <p>Как можно начать лучше зарабатывать, создать для начала дополнительный источник дохода, который, со временем,
                                    может стать и основным?</p>
                            </div>
                            <div v-if="!biztNegativ" style="padding: 15px">
                                <h3 class="mt-7 mb-5">Отличный результат</h3>
                                <p>Судя по всему, вы готовы к любым кризисам.</p>
                                <p>
                                    Но так ли это на самом деле? Ведь большинство людей живет в ложной стабильности и форс-мажоры или серьезные экономические
                                    потрясения могут пошатнуть даже "самый устойчивый корабль".</p>
                                <p>
                                    Важно вовремя осознать хрупкость своей "стабильности" и уже сейчас начать повышать уровень финансовой устойчивости и
                                    безопасности для своей семьи.
                                </p>
                                <h3 class="mt-7 mb-5">Важно научиться ЛУЧШЕ зарабатывать.</h3>
                                <p>
                                    Не просто БОЛЬШЕ, работая как загнанная лошадь, а именно ЛУЧШЕ:
                                </p>
                                <p style="font-weight: 500; font-style: italic; text-align: center" class="mt-10 mb-10">
                                    Зарабатывать больше, работая дистанционно из любой точки мира и при этом иметь больше свободного времени
                                </p>

                                <p>Интересно узнать больше о такой возможности?</p>
                                <p>Как можно начать лучше зарабатывать, создать для начала дополнительный источник дохода, который, со временем,
                                    может стать и основным?</p>
                            </div>
                            <div
                                class="bizt-btn-z-block"
                                v-if="userData.biz_test_dop !== null"
                            >
                                <v-btn
                                    class="bizt-btn-yes"
                                    @click="biztBtnYes"
                                    :disabled="biztBtnZDis"
                                >
                                    Да, интересно
                                </v-btn>
                                <v-btn
                                    class="bizt-btn-no"
                                    @click="biztBtnNo"
                                    :disabled="biztBtnZDis"
                                >
                                    Нет, не интересно
                                </v-btn>
                            </div>
                            <div
                                v-if="biztBtnZno"
                                style="padding: 15px"
                            >
                                <span v-html="userData.biz_test_dop"></span>
                            </div>
                            <div
                                v-if="userData.biz_test_dop === null || biztBtnZayavka"
                                style="padding: 15px"
                            >
                                <p>
                                    Выберите удобный мессенджер, оставьте заявку, и я скину больше информации.
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
                                <div v-if="btnWhatsappTrue" class="mt-7">
                                    <div class="chat-input">
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
                                    <div class="chat-controls mt-7">
                                        <v-btn
                                            color="black"
                                            class="chat-btn"
                                            :disabled="disBtnAddProspect"
                                            @click="addProspectBizTest"
                                        >
                                            <v-icon class="mr-3">mdi-send</v-icon>
                                            Отправить
                                        </v-btn>
                                    </div>
                                    <p class="privacy-text mt-3">
                                        Оставляя заявку, вы даете свое
                                        <router-link :to="{name: 'Personal'}" target="_blank">Согласие на обработку персональных данных</router-link>
                                        и принимаете
                                        <router-link :to="{name: 'Policy'}" target="_blank">Политику конфидециальности</router-link>.
                                    </p>
                                </div>
                                <div v-if="btnViberTrue" class="mt-7">
                                    <div class="chat-input">
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
                                    <div class="chat-controls mt-7">
                                        <v-btn
                                            class="chat-btn"
                                            color="black"
                                            :disabled="disBtnAddProspect"
                                            @click="addProspectBizTest"
                                        >
                                            <v-icon class="mr-3">mdi-send</v-icon>
                                            Отправить
                                        </v-btn>
                                    </div>
                                    <p class="privacy-text mt-3">
                                        Оставляя заявку, вы даете свое
                                        <router-link :to="{name: 'Personal'}" target="_blank">Согласие на обработку персональных данных</router-link>
                                        и принимаете
                                        <router-link :to="{name: 'Policy'}" target="_blank">Политику конфидециальности</router-link>.
                                    </p>
                                </div>
                            </div>

                            <div v-if="userData.biz_test_dop === null || biztBtnZayavka">
                                <p
                                    class="mb-10"
                                    style="padding: 15px"
                                >
                                    Или вы можете связаться со мной, выбрав удобный контакт ниже:
                                    <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                </p>

                                <div class="d-flex grow flex-wrap" style="margin-top: 100px">
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
                            </div>
                        </div>
                    </transition>
                </v-row>
            </section>
        </div>
        <v-dialog
            v-model="dialog_prospect"
            width="500"
        >
            <v-card>
                <v-card-title class="headline lighten-2 pb-5" style="background-color: #8c0000; color: white">
                    Заявка принята
                </v-card-title>

                <v-card-text>
                    Мы свяжемся с вами в ближайшее время
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="#8c0000"
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
import {maxLength, minLength, required, helpers, numeric} from "vuelidate/lib/validators";
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)

export default {
    name: "BTest",
    data: () => ({
        show_one: false,
        show_two_one: false,
        show_two_two: false,
        show_three: false,
        show_four: false,
        show_five: false,
        show_seven: false,
        show_eight_nine: false,
        show_ten: false,
        valueCrizes: 0,
        radios1: null,
        radios2: null,
        radios3: null,
        radios4: null,
        radios5: null,
        radios6: null,
        radios7: null,
        radios8: null,
        radios9: null,
        radios10: null,
        biztBtnZayavka: false,
        biztBtnZDis: false,
        biztBtnZno: false,
        lr_number: '',
        newProspect: {
            name: '',
            phone: '',
            partner: '',
            instrument: 'Тест по бизнесу',
            step: 'Новый',
            bizt_results: ''
        },
        biztResults: {
            value_crizes: 0,
            one: 2,
            two: 2,
            three: 2,
            four: 2,
            five: 2,
            six: 2,
            seven: 2,
            eight: 2,
            nine: 2,
            ten: 2,
            summ: 0,
            zayavka: 'yes'
        },
        biztNegativ: false,
        biztData: {
            landing: true,
            test: false,
            result: false
        },
        disBtnBizTestDisabled: false,
        bizTest: {
            start: true,
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
        },
        disBtnBizTest: {
            start: false,
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
        },
        errors: {},
        column: null,
        loading: false,
        cookieShow: true,
        dialog_prospect: false,
        btnWhatsappTrue: false,
        disInpWhatsapp: false,
        disInpViber: false,
        btnViberTrue: false,
        disBtnAddProspect: false
    }),
    metaInfo: {
        title: 'Онлайн-тест по бизнесу',
        meta: [
            { vmid: 'description', property: 'description', content: 'Насколько ты готов к кризису' },
            { vmid: 'og:title', property: 'og:title', content: 'Онлайн-тест по бизнесу' },
            { vmid: 'og:description', property: 'og:description', content: 'Насколько ты готов к кризису' },
            { vmid: 'og:image', property: 'og:image', content: '/img/LogoLifePlus.png' },
        ],
    },
    created() {
        if (!this.$route.query.p) {
            if (this.$cookies.isKey('lifeplus_partner')) {
                const partnerNum = this.$cookies.get('lifeplus_partner')
                this.$router.push ({name: 'BTest', query: { p: partnerNum }})
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
        nameErrors() {
            const errors = []
            if (!this.$v.newProspect.name.$dirty) return errors
            !this.$v.newProspect.name.minLength && errors.push('Минимум 2 буквы')
            !this.$v.newProspect.name.maxLength && errors.push('Максимум 30 букв')
            !this.$v.newProspect.name.required && errors.push('Обязательно для заполнения')
            !this.$v.newProspect.name.alpha && errors.push('Только буквы')
            return errors
        },
        phoneWhatsappErrors() {
            const errors = []
            if (!this.$v.newProspect.phone_whatsapp.$dirty) return errors
            !this.$v.newProspect.phone_whatsapp.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newProspect.phone_whatsapp.maxLength && errors.push('Максимум 30 цифр')
            !this.$v.newProspect.phone_whatsapp.required && errors.push('Обязательно для заполнения')
            return errors
        },
        phoneViberErrors() {
            const errors = []
            if (!this.$v.newProspect.phone_viber.$dirty) return errors
            !this.$v.newProspect.phone_viber.minLength && errors.push('Минимум 5 цифр')
            !this.$v.newProspect.phone_viber.maxLength && errors.push('Максимум 30 цифр')
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
        biztBtnTest() {
            let v = this
            this.disBtnBizTestDisabled = true
            setTimeout(function () {
                v.biztData.landing = false
            }, 500)
            setTimeout(function () {
                v.biztData.test = true
            }, 1000)
        },
        btnBizTestStart() {
            let v = this
            this.disBtnBizTest.start = true
            setTimeout(function () {
                v.bizTest.start = false
                v.biztResults.value_crizes = v.valueCrizes
            }, 500)
            setTimeout(function () {
                v.bizTest.one = true
            }, 1000)
        },
        btnBizTestOne() {
            let v = this
            this.disBtnBizTest.one = true
            setTimeout(function () {
                if (v.radios1 === 'radio1-1') {
                    v.biztResults.one = 5
                } else if (v.radios1 === 'radio1-2') {
                    v.biztResults.one = 0
                    v.biztNegativ = true
                }
                v.bizTest.one = false
            }, 500)
            setTimeout(function () {
                v.bizTest.two = true
            }, 1000)
        },
        btnBizTestTwo() {
            let v = this
            this.disBtnBizTest.two = true
            setTimeout(function () {
                if (v.radios2 === 'radio2-1') {
                    v.biztResults.two = 20
                } else if (v.radios2 === 'radio2-2') {
                    v.biztResults.two = 1
                    v.biztNegativ = true
                } else if (v.radios2 === 'radio2-3') {
                    v.biztResults.two = 0
                    v.biztNegativ = true
                }
                v.bizTest.two = false
            }, 500)
            setTimeout(function () {
                v.bizTest.three = true
            }, 1000)
        },
        btnBizTestThree() {
            let v = this
            this.disBtnBizTest.three = true
            setTimeout(function () {
                if (v.radios3 === 'radio3-1') {
                    v.biztResults.three = 5
                } else if (v.radios3 === 'radio3-2') {
                    v.biztResults.three = 0
                    v.biztNegativ = true
                }
                v.bizTest.three = false
            }, 500)
            setTimeout(function () {
                v.bizTest.four = true
            }, 1000)
        },
        btnBizTestFour() {
            let v = this
            this.disBtnBizTest.four = true
            setTimeout(function () {
                if (v.radios4 === 'radio4-1') {
                    v.biztResults.four = 5
                } else if (v.radios4 === 'radio4-2') {
                    v.biztResults.four = 10
                } else if (v.radios4 === 'radio4-3') {
                    v.biztResults.four = 20
                } else if (v.radios4 === 'radio4-4') {
                    v.biztResults.four = 0
                    v.biztNegativ = true
                }
                v.bizTest.four = false
            }, 500)
            setTimeout(function () {
                v.bizTest.five = true
            }, 1000)
        },
        btnBizTestFive() {
            let v = this
            this.disBtnBizTest.five = true
            setTimeout(function () {
                if (v.radios5 === 'radio5-1') {
                    v.biztResults.five = 5
                } else if (v.radios5 === 'radio5-2') {
                    v.biztResults.five = 15
                } else if (v.radios5 === 'radio5-3') {
                    v.biztResults.five = 0
                    v.biztNegativ = true
                }
                v.bizTest.five = false
            }, 500)
            setTimeout(function () {
                v.bizTest.six = true
            }, 1000)
        },
        btnBizTestSix() {
            let v = this
            this.disBtnBizTest.six = true
            setTimeout(function () {
                if (v.radios6 === 'radio6-1') {
                    v.biztResults.six = 5
                } else if (v.radios6 === 'radio6-2') {
                    v.biztResults.six = 0
                }
                v.bizTest.six = false
            }, 500)
            setTimeout(function () {
                v.bizTest.seven = true
            }, 1000)
        },
        btnBizTestSeven() {
            let v = this
            this.disBtnBizTest.seven = true
            setTimeout(function () {
                if (v.radios7 === 'radio7-1') {
                    v.biztResults.seven = 1
                    v.biztNegativ = true
                } else if (v.radios7 === 'radio7-2') {
                    v.biztResults.seven = 0
                    v.biztNegativ = true
                } else if (v.radios7 === 'radio7-3') {
                    v.biztResults.seven = 15
                }
                v.bizTest.seven = false
            }, 500)
            setTimeout(function () {
                v.bizTest.eight = true
            }, 1000)
        },
        btnBizTestEight() {
            let v = this
            this.disBtnBizTest.eight = true
            setTimeout(function () {
                if (v.radios8 === 'radio8-1') {
                    v.biztResults.eight = 5
                } else if (v.radios8 === 'radio8-2') {
                    v.biztResults.eight = 3
                } else if (v.radios8 === 'radio8-3') {
                    v.biztResults.eight = 0
                    v.biztNegativ = true
                }
                v.bizTest.eight = false
            }, 500)
            setTimeout(function () {
                v.bizTest.nine = true
            }, 1000)
        },
        btnBizTestNine() {
            let v = this
            this.disBtnBizTest.nine = true
            setTimeout(function () {
                if (v.radios9 === 'radio9-1') {
                    v.biztResults.nine = 3
                } else if (v.radios9 === 'radio9-2') {
                    v.biztResults.nine = 5
                } else if (v.radios9 === 'radio9-3') {
                    v.biztResults.nine = 0
                    v.biztNegativ = true
                }
                v.bizTest.nine = false
            }, 500)
            setTimeout(function () {
                v.bizTest.ten = true
            }, 1000)
        },
        btnBizTestTen() {
            let v = this
            this.disBtnBizTest.ten = true
            setTimeout(function () {
                if (v.radios10 === 'radio10-1') {
                    v.biztResults.ten = 5
                } else if (v.radios10 === 'radio10-2') {
                    v.biztResults.ten = 0
                    v.biztNegativ = true
                }
                v.biztResults.summ = v.biztResults.one + v.biztResults.two + v.biztResults.three + v.biztResults.four + v.biztResults.five + v.biztResults.six + v.biztResults.seven + v.biztResults.eight + v.biztResults.nine + v.biztResults.ten
                v.bizTest.ten = false
                v.biztData.test = false
            }, 500)
            setTimeout(function () {
                v.biztData.result = true
            }, 1000)
        },
        biztBtnYes() {
            this.biztBtnZayavka = true
            this.biztResults.zayavka = 'yes'
            this.biztBtnZDis = true
        },
        biztBtnNo() {
            this.biztBtnZayavka = true
            this.biztResults.zayavka = 'no'
            this.biztBtnZDis = true
            this.biztBtnZno = true
        },
        btnWhatsapp() {
            this.btnWhatsappTrue = true
            this.btnViberTrue = false
        },
        btnViber() {
            this.btnWhatsappTrue = false
            this.btnViberTrue = true
        },
        addProspectBizTest() {
            this.$v.newProspect.name.$touch()
            this.$v.newProspect.phone_whatsapp.$touch() || this.$v.newProspect.phone_viber.$touch()
            if (!this.$v.newProspect.name.$invalid) {
                if(!this.$v.newProspect.phone_whatsapp.$invalid || !this.$v.newProspect.phone_viber.$invalid) {
                    this.loading = true
                    this.newProspect.bizt_results = this.biztResults.value_crizes + ',' + this.biztResults.one + ',' + this.biztResults.two + ',' + this.biztResults.three + ',' + this.biztResults.four + ',' + this.biztResults.five + ',' + this.biztResults.six + ',' + this.biztResults.seven + ',' + this.biztResults.eight + ',' + this.biztResults.nine + ',' + this.biztResults.ten + ',' + this.biztResults.summ + ',' + this.biztResults.zayavka
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
.biz-test-main
    background: #ffffff
    font-size: 16px
    line-height: 20px
    color: #0c0c0d
    overflow: hidden
    font-weight: 350

#biz-test-page
    max-width: 800px
    background: #ffffff
    margin: 0 auto

#biz-test-start
    text-align: center
    margin-bottom: 20px
    padding: 0

#biz-test-block
    margin-bottom: 20px

.bizt-main-div
    padding: 0 12px 12px

.bizt-h1-main
    font-size: 22px
    line-height: 30px !important
    margin-top: -80px
    padding-bottom: 10px

.bizt-h2-main
    font-size: 24px
    line-height: 30px !important
    padding-top: 10px
    margin-bottom: 30px

.bizt-p-main
    font-size: 16px

.bizt-divider-main
    border-color: #8c0000 !important
    width: 54%
    margin: 0 auto
    border-width: 1px

.bizt-btn-main
    background-color: #111111 !important
    border-radius: 20px
    margin-bottom: 10px !important
    margin-top: 10px
    margin-right: 0 !important

.bizt-btn
    background-color: #111111 !important
    border-radius: 20px
    margin-right: 0 !important

.bizt-h2
    font-size: 32px
    line-height: 40px !important
    text-align: center
    margin-bottom: 30px

.bizt-p-str
    text-align: center
    font-weight: 500
    margin-bottom: 30px !important
    font-size: 18px

.bizt-h3
    font-size: 20px
    margin-bottom: 10px
    border-bottom: 2px solid #8c0000
    padding-bottom: 12px
    text-align: center

.bizt-p-sub
    font-size: 18px
    text-align: center
    font-weight: 500

.bizt-div-border
    border: 2px solid #ccc
    border-radius: 5px
    padding: 20px
    margin-bottom: 40px

.bizt-div-border:last-child
    margin-bottom: 0

.bizt-div-b-img
    margin-bottom: 20px

.bizt-div-b-img p
    margin: 0 auto !important

.bizt-div-b
    width: 100%

.bizt-dmain-test
    width: 100%
    padding: 5px

.bizt-div-test
    border-radius: 5px
    box-shadow: 0 0 10px 4px rgba(151, 151, 151, 0.5)
    margin-top: 20px
    margin-bottom: 30px
    padding: 30px 20px

.bizt-num-test
    color: #cccccc
    font-weight: bold
    font-size: 18px
    text-align: center
    display: block
    margin-bottom: 20px

.bizt-h3-test
    text-align: center
    line-height: 30px !important
    font-size: 20px
    margin-bottom: 20px

.bizt-ptest-sub
    text-align: center
    font-size: 15px
    margin-bottom: 20px

.bizt-slider
    margin-top: 70px

.bizt-slider .v-slider__thumb-label.primary
    background-color: #a10000 !important
    border-color: #a10000 !important

.bizt-slider .v-slider__track-fill.primary
    background-color: #a10000 !important
    border-color: #a10000 !important

.bizt-slider .v-slider__thumb-container.v-slider__thumb-container--show-label.primary--text
    color: #a10000 !important
    caret-color: #a10000 !important

.bizt-slider .v-slider__thumb.primary
    background-color: #a10000 !important
    border-color: #a10000 !important

.bizt-slider .v-slider__thumb-label
    font-size: 12px

.bizt-slider .v-slider__track-background.primary.lighten-3
    background-color: #c00 !important
    border-color: #c00 !important

.bizt-p-test
    text-align: center
    font-size: 15px

.bizt-radio-gr
    margin: 0 auto
    margin-top: 40px
    max-width: 400px

.bizt-radio
    margin-bottom: 20px !important

.bizt-radio .v-icon.notranslate.far.fa-dot-circle.theme--light.primary--text
    color: #a10000 !important
    caret-color: #a10000 !important

.bizt-radio .v-input--selection-controls__ripple.primary--text
    color: #a10000 !important
    caret-color: #a10000 !important

.bizt-radio label
    color: #111 !important

.bizt-btn-test
    background-color: #111111 !important
    border-radius: 20px
    margin-top: 20px
    margin-right: 0 !important

.bizt-result-test
    margin: 40px 0
    padding: 0 2px

.btest-res-h2
    font-size: 22px
    text-align: center
    margin-bottom: 40px

.btest-res-h3
    font-size: 18px
    text-align: center
    margin-bottom: 30px
    font-weight: 400

.btest-res-p-red
    font-size: 64px
    color: #8c0000
    text-align: center
    font-weight: 400
    margin-bottom: 60px !important

.btest-res-p-blue
    font-size: 64px
    color: #0288D1
    text-align: center
    font-weight: 400
    margin-bottom: 60px !important

.btest-card-answer
    margin-bottom: 20px

.btest-answ-card-title
    margin-bottom: 20px

.btest-answ-card-title p
    margin: 0 auto
    font-size: 20px
    padding: 20px 0
    text-align: center

.btest-answ-card-subtitle p
    text-align: center
    line-height: 24px

.btest-answ-btn
    margin: 0 auto !important
    background-color: #fff !important
    color: #8c0000 !important

.btest-answ-card-text
    font-size: 15px
    line-height: 28px

.bizt-btn-z-block
    padding: 15px

.bizt-btn-yes
    margin-bottom: 15px !important
    background-color: #8c0000 !important

.bizt-btn-no
    margin-bottom: 15px !important
    background-color: #1f1f1f !important

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

.biz-test-footer
    background-color: #0c0c0d !important
    color: white !important

@media(max-width: 680px)
    .bizt-h1-main
        margin-top: -20px

@media(max-width: 500px)
    .bizt-dmain-test
        padding: 2px

    .bizt-div-test
        padding: 20px 10px

    .bizt-radio-gr
        margin-left: 15px

@media(max-width: 350px)
    .video-js .vjs-big-play-button
        top: 36% !important
        left: 36% !important

</style>