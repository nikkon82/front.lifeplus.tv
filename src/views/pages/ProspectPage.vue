<template>
    <v-container
        id="edit-prospect"
        fluid
        tag="section"
    >
        <v-row justify="center">
            <v-col
                cols="12"
                md="8"
                v-if="prospectData.user_id"
            >
                <base-material-card>
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Обработка заявки
                        </div>
                    </template>

                    <v-form>
                        <v-container class="py-0">
                            <v-row>
                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <div class="ml-9">
                                        <span class="span-dop-info">Дополнительная информация:</span>
                                        <p
                                            class="p-dop-action-bot"
                                            v-if="prospectData.action_bot"
                                        >
                                            Действие в боте: <span>{{ prospectData.action_bot }}</span>
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
                                                        Тест по здоровью
                                                    </v-btn>
                                                </template>
                                                <v-card>
                                                    <v-card-title class="dialog-card-title">
                                                        <span class="headline">{{ prospectData.name }}</span>
                                                    </v-card-title>
                                                    <v-card-text class="dialog-card-results">
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
                                        <p
                                            class="mt-5"
                                            v-if="prospectData.req"
                                        >
                                            Запрос: <span style="color: #8c0000">{{ prospectData.req }}</span>
                                        </p>
                                        <p
                                            class="mt-5"
                                            v-if="testBizResults"
                                        >
                                            Запрос: <span style="color: #8c0000">{{ testBizResults.zayavka }}</span>
                                        </p>
                                    </div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Имя"
                                        prepend-icon="mdi-face-man"
                                        type="text"
                                        v-model.trim="prospectData.name"
                                        :error-messages="nameErrors"
                                        @input="$v.prospectData.name.$touch()"
                                        @blur="$v.prospectData.name.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Город"
                                        prepend-icon="mdi-home-city-outline"
                                        type="text"
                                        v-model.trim="prospectData.city"
                                        :error-messages="cityErrors"
                                        @input="$v.prospectData.city.$touch()"
                                        @blur="$v.prospectData.city.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.city">{{ errors.city[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Email"
                                        prepend-icon="mdi-email"
                                        type="email"
                                        v-model.trim="prospectData.email"
                                        :error-messages="emailErrors"
                                        @input="$v.prospectData.email.$touch()"
                                        @blur="$v.prospectData.email.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Phone"
                                        prepend-icon="mdi-phone"
                                        type="text"
                                        v-model.trim="prospectData.phone"
                                        :error-messages="phoneErrors"
                                        @input="$v.prospectData.phone.$touch()"
                                        @blur="$v.prospectData.phone.$touch()"
                                    />
                                    <div class="invalid-feedback" v-if="errors.phone">{{ errors.phone[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Whatsapp"
                                        prepend-icon="mdi-whatsapp"
                                        type="text"
                                        v-model.trim="prospectData.phone_whatsapp"
                                        :error-messages="phoneWhatsappErrors"
                                        @input="$v.prospectData.phone_whatsapp.$touch()"
                                        @blur="$v.prospectData.phone_whatsapp.$touch()"
                                        hint="79123456789"
                                        persistent-hint
                                    />
                                    <div class="invalid-feedback" v-if="errors.phone_whatsapp">{{ errors.phone_whatsapp[0] }}</div>
                                    <p
                                        v-if="prospectData.phone_whatsapp"
                                    >
                                        Написать в whatsapp:
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://wa.me/${prospectData.phone_whatsapp}`"
                                            target="_blank"
                                            class="ml-3"
                                        >
                                            <v-btn
                                                fab
                                                dark
                                                small
                                                class="mr-4"
                                                color="success"
                                            >
                                                <v-icon>mdi-whatsapp</v-icon>
                                            </v-btn>
                                        </a>
                                    </p>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Viber"
                                        prepend-icon="fab fa-viber"
                                        type="text"
                                        v-model.trim="prospectData.phone_viber"
                                        :error-messages="phoneViberErrors"
                                        @input="$v.prospectData.phone_viber.$touch()"
                                        @blur="$v.prospectData.phone_viber.$touch()"
                                        hint="79123456789"
                                        persistent-hint
                                    />
                                    <div class="invalid-feedback" v-if="errors.phone_viber">{{ errors.phone_viber[0] }}</div>
                                    <p
                                        v-if="prospectData.phone_viber"
                                    >
                                        Написать в viber:
                                        <a
                                            style="text-decoration: none"
                                            :href="`viber://chat?number=${prospectData.phone_viber}`"
                                            target="_blank"
                                            class="ml-3"
                                        >
                                            <v-btn
                                                fab
                                                dark
                                                small
                                                class="mr-4"
                                                color="deep-purple lighten-2"
                                            >
                                                <v-icon>fab fa-viber</v-icon>
                                            </v-btn>
                                        </a>
                                    </p>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Telegram"
                                        prepend-icon="fab fa-telegram-plane"
                                        type="text"
                                        v-model.trim="prospectData.telegram"
                                        hint="username"
                                        persistent-hint
                                    />
                                    <div class="invalid-feedback" v-if="errors.telegram">{{ errors.telegram[0] }}</div>
                                    <p
                                        v-if="prospectData.telegram"
                                    >
                                        Написать в Telegram:
                                        <a
                                            style="text-decoration: none"
                                            :href="`https://t.me/${prospectData.telegram}`"
                                            target="_blank"
                                            class="ml-3"
                                        >
                                            <v-btn
                                                fab
                                                dark
                                                small
                                                class="mr-4"
                                                color="blue"
                                            >
                                                <v-icon>fab fa-telegram-plane</v-icon>
                                            </v-btn>
                                        </a>
                                    </p>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-text-field
                                        label="Инструмент"
                                        prepend-icon="mdi-hammer-screwdriver"
                                        type="text"
                                        v-model.trim="prospectData.instrument"
                                        readonly
                                    />
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-select
                                        prepend-icon="mdi-tooltip-plus-outline"
                                        :items="stepItems"
                                        label="Контакт"
                                        v-model.trim="prospectData.step"
                                        :error-messages="stepErrors"
                                        @change="$v.prospectData.step.$touch()"
                                        @blur="$v.prospectData.step.$touch()"
                                    ></v-select>
                                    <div class="invalid-feedback" v-if="errors.step">{{ errors.step[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-select
                                        prepend-icon="mdi-tooltip-check-outline"
                                        :items="resultItems"
                                        label="Интерес"
                                        v-model.trim="prospectData.result"
                                    ></v-select>
                                    <div class="invalid-feedback" v-if="errors.result">{{ errors.result[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    lg="6"
                                    class="field-relative"
                                >
                                    <v-textarea
                                        outlined
                                        label="Комментарий"
                                        v-model.trim="prospectData.comment"
                                        :error-messages="commentErrors"
                                        @change="$v.prospectData.comment.$touch()"
                                        @blur="$v.prospectData.comment.$touch()"
                                    ></v-textarea>
                                    <div class="invalid-feedback" v-if="errors.comment">{{ errors.comment[0] }}</div>
                                </v-col>

                                <v-col
                                    cols="12"
                                    class="text-right"
                                >
                                    <v-btn
                                        color="success"
                                        class="mr-0"
                                        @click="editProspect"
                                    >
                                        Сохранить
                                    </v-btn>
                                </v-col>
                                <v-progress-linear
                                    :active="loading"
                                    :indeterminate="loading"
                                    absolute
                                    bottom
                                    color="success accent-4"
                                ></v-progress-linear>
                            </v-row>
                        </v-container>
                    </v-form>
                </base-material-card>
            </v-col>
        </v-row>
        <v-row
            justify="center"
            v-if="!prospectData.user_id"
        >
            <v-col
                cols="12"
                lg="9"
                xl="7"
            >
                <base-material-card
                    color="warning"
                    class="px-md-16 px-5 py-3"
                >
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Ошибка
                        </div>

                        <div class="subtitle-1 font-weight-light">

                        </div>
                    </template>

                    <v-card-text
                        class="mt-10"
                    >
                        <p>У вас нет доступа к просмотру данной страницы. Обратитесь к администратору сайта:</p>
                        <router-link :to="{ name: 'Support' }"
                                     class="card-link"
                        >
                            <b class="font-weight-bold" style="color: #0288D1">Техподдержка</b>
                        </router-link>
                    </v-card-text>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import * as userService from '../../services/user_service'
import { mapActions, mapGetters } from 'vuex'

import { validationMixin } from 'vuelidate'
import {required, minLength, maxLength, email, numeric} from 'vuelidate/lib/validators'

export default {
    name: "ProspectPage",
    mixins: [validationMixin],
    data: () => ({
        stepItems: [
            'Новый',
            'Повторный'
        ],
        resultItems: [
            'Пока не интересно',
            'Интересен бизнес',
            'Интересен продукт',
            'Думает',
            'Партнер ЛР',
            'Не ответил',
            'Отправлены рекомендации',
            'Отправлена ссылка на чат',
            'Добавлен в клиентский чат'
        ],
        dialog: false,
        dialogLeedbot: false,
        dialogBizTest: false,
        loading: false,
        errors: {}
    }),
    computed: {
        ...mapGetters({
            prospectDetails: 'user/getProspect'
        }),
        prospectData() {
            return this.prospectDetails
        },
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

            let [start, one, two, three, four, five, six, seven, eight, nine, ten, summ, zayavka] = test_biz_results.split(',')

            if (zayavka === 'yes') {
                zayavka = 'Заявка на бизнес'
            } else {
                zayavka = 'Заявка на доп'
            }

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
        nameErrors () {
            const errors = []
            if (!this.$v.prospectData.name.$dirty) return errors
            !this.$v.prospectData.name.minLength && errors.push('Минимум 2 символа')
            !this.$v.prospectData.name.maxLength && errors.push('Максимум 100 символов')
            return errors
        },
        cityErrors () {
            const errors = []
            if (!this.$v.prospectData.city.$dirty) return errors
            !this.$v.prospectData.city.minLength && errors.push('Минимум 2 буквы')
            !this.$v.prospectData.city.maxLength && errors.push('Максимум 30 букв')
            return errors
        },
        phoneErrors () {
            const errors = []
            if (!this.$v.prospectData.phone.$dirty) return errors
            !this.$v.prospectData.phone.numeric && errors.push('Только цифры')
            !this.$v.prospectData.phone.minLength && errors.push('Минимум 5 цифр')
            !this.$v.prospectData.phone.maxLength && errors.push('Максимум 30 цифр')
            return errors
        },
        phoneWhatsappErrors () {
            const errors = []
            if (!this.$v.prospectData.phone_whatsapp.$dirty) return errors
            !this.$v.prospectData.phone_whatsapp.numeric && errors.push('Только цифры')
            !this.$v.prospectData.phone_whatsapp.minLength && errors.push('Минимум 5 цифр')
            !this.$v.prospectData.phone_whatsapp.maxLength && errors.push('Максимум 30 цифр')
            return errors
        },
        phoneViberErrors () {
            const errors = []
            if (!this.$v.prospectData.phone_viber.$dirty) return errors
            !this.$v.prospectData.phone_viber.numeric && errors.push('Только цифры')
            !this.$v.prospectData.phone_viber.minLength && errors.push('Минимум 5 цифр')
            !this.$v.prospectData.phone_viber.maxLength && errors.push('Максимум 30 цифр')
            return errors
        },
        emailErrors () {
            const errors = []
            if (!this.$v.prospectData.email.$dirty) return errors
            !this.$v.prospectData.email.email && errors.push('Введите корректный email')
            !this.$v.prospectData.email.maxLength && errors.push('Максимум 50 символ')
            return errors
        },
        stepErrors () {
            const errors = []
            if (!this.$v.prospectData.step.$dirty) return errors
            !this.$v.prospectData.step.required && errors.push('Обязательно для заполнения')
            return errors
        },
        commentErrors () {
            const errors = []
            if (!this.$v.prospectData.comment.$dirty) return errors
            !this.$v.prospectData.comment.minLength && errors.push('Минимум 2 символа')
            !this.$v.prospectData.comment.maxLength && errors.push('Максимум 500 символов')
            return errors
        }
    },
    methods: {
        ...mapActions({
            loadProspect: 'user/showProspectPage',
            addNotification: 'application/addNotification',
            updateProspect: 'prospect/updateProspect',
        }),
        editProspect() {
            this.$v.prospectData.$touch()
            if (!this.$v.prospectData.$invalid) {
                this.loading = true
                userService.updateProspect(this.prospectData.id, this.prospectData)
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
            } else {
                this.addNotification({
                    show: true,
                    text: 'Ошибка валидации',
                })
            }
        }
    },
    mounted() {
        this.loadProspect(this.$route.params.id)
    },
    validations: {
        prospectData: {
            name: {
                minLength: minLength(2),
                maxLength: maxLength(100),
            },
            city: {
                minLength: minLength(2),
                maxLength: maxLength(30),
            },
            phone: {
                numeric,
                minLength: minLength(5),
                maxLength: maxLength(30)
            },
            phone_whatsapp: {
                numeric,
                minLength: minLength(5),
                maxLength: maxLength(30)
            },
            phone_viber: {
                numeric,
                minLength: minLength(5),
                maxLength: maxLength(30),
            },
            email: {
                maxLength: maxLength(50),
                email
            },
            step: {
                required
            },
            comment: {
                minLength: minLength(2),
                maxLength: maxLength(500)
            },
        }
    }
}
</script>

<style lang="sass">
.v-picker.v-card
    margin-top: 0 !important
    margin-bottom: 0 !important

.span-dop-info
    font-size: 11px
    color: rgba(0, 0, 0, 0.3)

.p-dop-action-bot
    margin-top: 10px

.p-dop-action-bot span
    color: #c00
    padding-left: 10px

.p-dop-data
    margin-top: 10px

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
        margin-right: 5px !important
        margin-left: 5px !important

    .dialog-card-title
        padding-top: 10px !important

    .dialog-card-results
        padding: 10px 5px !important

    .dialog-th
        padding: 0 5px !important

</style>
