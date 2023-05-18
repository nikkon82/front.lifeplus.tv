<template>
    <v-container
        id="show-prospect"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <v-col
                cols="12"
                md="6"
            >
                <v-card
                    class="v-card-profile v-card--material pa-3"
                >
                    <div class="d-flex grow flex-wrap">
                        <v-card-text class="text-center">
                            <h4 class="display-2 font-weight-light mb-3 black--text">
                                {{ prospectData.name }}
                            </h4>
                        </v-card-text>
                    </div>
                    <v-divider/>

                    <v-row
                        class="text-left"
                        tag="v-card-text"
                    >
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <p>
                                <span class="font-weight-medium mr-4">Город: </span>
                                <span>{{ prospectData.city }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Дата: </span>
                                <span>{{ prospectData.created_at }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Откуда: </span>
                                <span>{{ prospectData.instrument }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Контакт (взаимодействие): </span>
                                <span>{{ prospectData.step }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Результат: </span>
                                <span>{{ prospectData.result }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Действие в боте: </span>
                                <span>{{ prospectData.action_bot }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Комментарий: </span>
                                <span>{{ prospectData.comment }}</span>
                            </p>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <p>
                                <span class="font-weight-medium mr-4">User ID: </span>
                                <span>{{ prospectData.user_id }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Email: </span>
                                <span>{{ prospectData.email }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Phone: </span>
                                <span>{{ prospectData.phone }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Whatsapp: </span>
                                <span>{{ prospectData.phone_whatsapp }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Viber: </span>
                                <span>{{ prospectData.phone_viber }}</span>
                            </p>
                            <p>
                                <span class="font-weight-medium mr-4">Telegram: </span>
                                <span>{{ prospectData.telegram }}</span>
                            </p>
                            <div
                                class="p-dop-data"
                                v-if="testResults"
                            >
                                <v-dialog
                                    v-model="dialog"
                                    width="600px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            color="orange"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            Результаты теста
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">Результаты теста</span>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-simple-table>
                                                <template v-slot:default>
                                                    <thead>
                                                    <tr>
                                                        <th class="text-center">
                                                            Система организма
                                                        </th>
                                                        <th class="text-center" style="width: 120px">
                                                            Очень хорошо
                                                        </th>
                                                        <th class="text-center" style="width: 120px">
                                                            Хорошо
                                                        </th>
                                                        <th class="text-center" style="width: 120px">
                                                            Зона риска
                                                        </th>
                                                        <th class="text-center" style="width: 120px">
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
                                                                  v-if="testResults.pishSys < 3"
                                                            >
                                                                {{ testResults.pishSys }}
                                                            </span>
                                                        </td>
                                                        <td class="tbl-good">
                                                            <span class="table-label">3-4</span>
                                                            <span class="table-result"
                                                                  v-if="testResults.pishSys > 2 && testResults.pishSys < 5"
                                                            >
                                                                {{ testResults.pishSys }}
                                                            </span>
                                                        </td>
                                                        <td class="tbl-risk">
                                                            <span class="table-label">5-9</span>
                                                            <span class="table-result"
                                                                  v-if="testResults.pishSys > 4 && testResults.pishSys < 10"
                                                            >
                                                                {{ testResults.pishSys }}
                                                            </span>
                                                        </td>
                                                        <td class="tbl-bad">
                                                            <span class="table-label">10></span>
                                                            <span class="table-result"
                                                                  v-if="testResults.pishSys > 9"
                                                            >
                                                                {{ testResults.pishSys }}
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
                                                                      v-if="testResults.heartSys === '3'"
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
                                                                      v-if="testResults.breathSys === '0'"
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
                                                                      v-if="testResults.mochaSys === '0'"
                                                                >
                                                                    {{ testResults.mochaSys }}
                                                                </span>
                                                            </td>
                                                            <td class="tbl-good">
                                                                <span class="table-label">1</span>
                                                                <span class="table-result"
                                                                      v-if="testResults.mochaSys === '1'"
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
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="green darken-1"
                                                text
                                                @click="dialog = false"
                                            >
                                                Закрыть
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </div>
                            <div
                                class="p-dop-data mt-5"
                                v-if="prospectData.instrument === 'Лидбот по бизнесу' || prospectData.instrument === 'Тест по здоровью'"
                            >
                                <v-dialog
                                    v-model="dialogLeedbot"
                                    width="400px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            color="green"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            Данные кандидата
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">Данные кандидата</span>
                                        </v-card-title>
                                        <v-card-text>
                                            <p v-if="prospectData.branch">
                                                Ветка: <span style="color: #8c0000">{{ prospectData.branch }}</span>
                                            </p>
                                            <p v-if="prospectData.gender">
                                                Пол: <span style="color: #8c0000">{{ prospectData.gender }}</span>
                                            </p>
                                            <p v-if="prospectData.age">
                                                Возраст: <span style="color: #8c0000">{{ prospectData.age }}</span>
                                            </p>
                                            <p v-if="prospectData.target_a">
                                                Целевая аудитория: <span style="color: #8c0000">{{ prospectData.target_a }}</span>
                                            </p>
                                            <p v-if="prospectData.income_want">
                                                Хочет доход: <span style="color: #8c0000">{{ prospectData.income_want }}</span>
                                            </p>
                                            <p v-if="prospectData.req">
                                                Запрос: <span style="color: #8c0000">{{ prospectData.req }}</span>
                                            </p>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="green darken-1"
                                                text
                                                @click="dialogLeedbot = false"
                                            >
                                                Закрыть
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </div>
                            <div
                                class="p-dop-data mt-5"
                                v-if="prospectData.instrument === 'Тест по бизнесу'"
                            >
                                <v-dialog
                                    v-model="dialogBizTest"
                                    width="400px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            color="black"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            Тест по бизнесу
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-text>
                                            <p v-if="testBizResults.start">
                                                Оценил себя: <span style="color: #8c0000">{{ testBizResults.start }}</span>
                                            </p>
                                            <p v-if="testBizResults.summ">
                                                Оценка теста: <span style="color: #8c0000">{{ testBizResults.summ }}</span>
                                            </p>
                                            <v-divider class=" mt-7 mb-7"/>
                                            <p v-if="testBizResults.one">
                                                1-й вопрос: <span style="color: #8c0000">{{ testBizResults.one }}</span>
                                            </p>
                                            <p v-if="testBizResults.two">
                                                2-й вопрос: <span style="color: #8c0000">{{ testBizResults.two }}</span>
                                            </p>
                                            <p v-if="testBizResults.three">
                                                3-й вопрос: <span style="color: #8c0000">{{ testBizResults.three }}</span>
                                            </p>
                                            <p v-if="testBizResults.four">
                                                4-й вопрос: <span style="color: #8c0000">{{ testBizResults.four }}</span>
                                            </p>
                                            <p v-if="testBizResults.five">
                                                5-й вопрос: <span style="color: #8c0000">{{ testBizResults.five }}</span>
                                            </p>
                                            <p v-if="testBizResults.six">
                                                6-й вопрос: <span style="color: #8c0000">{{ testBizResults.six }}</span>
                                            </p>
                                            <p v-if="testBizResults.seven">
                                                7-й вопрос: <span style="color: #8c0000">{{ testBizResults.seven }}</span>
                                            </p>
                                            <p v-if="testBizResults.eight" style="font-weight: bold">
                                                8-й вопрос: <span style="color: #8c0000">{{ testBizResults.eight }}</span>
                                            </p>
                                            <p v-if="testBizResults.nine" style="font-weight: bold">
                                                9-й вопрос: <span style="color: #8c0000">{{ testBizResults.nine }}</span>
                                            </p>
                                            <p v-if="testBizResults.ten">
                                                10-й вопрос: <span style="color: #8c0000">{{ testBizResults.ten }}</span>
                                            </p>
                                            <p v-if="testBizResults.zayavka">
                                                Оценил себя: <span style="color: #8c0000">{{ testBizResults.zayavka }}</span>
                                            </p>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="green darken-1"
                                                text
                                                @click="dialogBizTest = false"
                                            >
                                                Закрыть
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </div>
                        </v-col>
                    </v-row>

                    <v-progress-linear
                        :active="loading"
                        :indeterminate="loading"
                        absolute
                        bottom
                        color="success accent-4"
                    ></v-progress-linear>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
    name: "ShowProspect",
    data: () => ({
        loading: true,
        dialog: false,
        dialogLeedbot: false,
        dialogBizTest: false,
    }),
    computed: {
        ...mapGetters({
            prospectData: 'prospect/getAdminProspect'
        }),
        testResults() {
            const test_results = this.prospectData.test_results
            if (!test_results) return null

            const results = test_results.split(',')

            if (results.length > 9) {
                const [foodSys, gktSys, heartSys, nervSys, imunSys, breathSys, mochaSys, endoSys, opdvigSys, skinSys] = test_results.split(',')
                const pishSys = parseInt(foodSys) + parseInt(gktSys)

                return {
                    pishSys,
                    heartSys,
                    nervSys,
                    imunSys,
                    breathSys,
                    mochaSys,
                    endoSys,
                    opdvigSys,
                    skinSys
                }
            } else {
                const [pishSys, heartSys, nervSys, imunSys, breathSys, mochaSys, endoSys, opdvigSys, skinSys] = test_results.split(',')

                return {
                    pishSys,
                    heartSys,
                    nervSys,
                    imunSys,
                    breathSys,
                    mochaSys,
                    endoSys,
                    opdvigSys,
                    skinSys
                }
            }
        },
        testBizResults() {
            const test_biz_results = this.prospectData.bizt_results
            if (!test_biz_results) return null

            const [start, one, two, three, four, five, six, seven, eight, nine, ten, summ, zayavka] = test_biz_results.split(',')

            return {
                start,
                one,
                two,
                three,
                four,
                five,
                six,
                seven,
                eight,
                nine,
                ten,
                summ,
                zayavka
            }
        },
    },
    watch: {
        '$route.params.id': {
            handler: function() {
                this.loadProspect(this.$route.params.id)
                this.loading = false
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        ...mapActions({
            loadProspect: 'prospect/showProspect'
        }),
    }
}
</script>

<style lang="sass">
.tbl-sys
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

@media(max-width: 480px)
    .sys-icon
        display: block

    .sys-text
        display: none
</style>
