<template>
    <v-container
        id="biz-test-instrum"
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
                            Онлайн-тест по бизнесу
                        </div>

                        <div class="subtitle-1 font-weight-light">
                            Рефссылка, инструкции
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
                                    <p class="mt-10">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-right-bold-outline</v-icon>
                                        <router-link
                                            color="success"
                                            :to="{name: 'BTest', query: { p: $store.state.user.profile.lr_number }}"
                                        >
                                            Онлайн-тест по бизнесу
                                        </router-link>
                                    </p>
                                    <p class="mb-n2">
                                        <v-icon class="mr-2" color="blue">mdi-arrow-down-bold-outline</v-icon>
                                        <strong>Реферальная ссылка на Онлайн-тест по бизнесу</strong>:
                                        <v-text-field
                                            :value="`https://lifeplus.tv/btest/?p=${$store.state.user.profile.lr_number}`"
                                            readonly
                                            id="referLinkBizTest"
                                        ></v-text-field>
                                    </p>
                                    <v-btn
                                        color="gray"
                                        @click="copyRefLinkBizTest"
                                        class="mb-5"
                                    >
                                        Скопировать ссылку
                                    </v-btn>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <span>
                                        <v-icon class="mr-2" color="purple">mdi-numeric-2-box-multiple</v-icon>
                                        Настройка
                                    </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        Антикризисный тест по бизнесу имеет редактируемый блок, в котором вы можете предложить кандидату оставить заявку на
                                        что-то дополнительное, на случай, если в данный момент ему не интересно предложение бизнеса.
                                    </p>
                                    <p>
                                        Например, вступить в группу, получить подарок (книгу, брошюру и т.п.) посмотреть видео, посетить вебинар и т.д.
                                    </p>

                                    <v-divider></v-divider>

                                    <p class="mt-5">
                                        1. Добавить предложение (НЕ обязательно):
                                    </p>
                                    <vue-editor
                                        v-model="profileData.biz_test_dop"
                                        :editor-toolbar="customToolbar1"
                                    />
                                    <div class="invalid-feedback" v-if="errors.biz_test_dop">{{ errors.biz_test_dop[0] }}</div>

                                    <v-btn
                                        color="success"
                                        class="mr-0 mt-5"
                                        @click="editProfileData"
                                    >
                                        Сохранить данные
                                    </v-btn>
                                    <v-progress-linear
                                        :active="loading"
                                        :indeterminate="loading"
                                        absolute
                                        bottom
                                        color="success accent-4"
                                    ></v-progress-linear>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <span>
                                        <v-icon class="mr-2" color="blue">mdi-numeric-3-box-multiple</v-icon>
                                        Рекомендации
                                    </span>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="mt-10">
                                        Тест по бизнесу - это инструмент для первого касания.
                                    </p>
                                    <p>Особенно хорошо себя показал при холодных контактах в соцсетях, а также при использовании рекламы для поиска контактов.</p>
                                    <p>При получении заявки важно отправить кандидату дополнительную информацию о вашем бизнес-предложении.</p>
                                    <p>Рекомендуем отправлять после Теста по бизнесу, например, инструмент "Бизнес-презентация".</p>
                                    <p class="mt-16 mb-10">
                                        Ответы на вопросы теста в карточке кандидата
                                    </p>
                                    <v-expansion-panels
                                        popout
                                        focusable
                                        class="exp-panel-title"
                                    >
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <span>
                                                    <v-icon class="mr-2" color="red">mdi-numeric-1-box-multiple</v-icon>
                                                    1-й вопрос
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    В случае потери работы/снижения доходов есть ли у вас «План Б»?
                                                </p>
                                                <p>5 баллов - Да, план Б есть</p>
                                                <p>0 баллов - Нет</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <span>
                                                    <v-icon class="mr-2" color="red">mdi-numeric-2-box-multiple</v-icon>
                                                    2-й вопрос
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    Есть ли у вас собственное жилье?
                                                </p>
                                                <p>20 баллов - Да</p>
                                                <p>1 балл - Да, выплачиваю ипотеку</p>
                                                <p>0 баллов - Нет</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <span>
                                                    <v-icon class="mr-2" color="red">mdi-numeric-3-box-multiple</v-icon>
                                                    3-й вопрос
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    Ваша сфера деятельности позволяет работать дистанционно?
                                                </p>
                                                <p>5 баллов - Да</p>
                                                <p>0 баллов - Нет</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <span>
                                                    <v-icon class="mr-2" color="red">mdi-numeric-4-box-multiple</v-icon>
                                                    4-й вопрос
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    В случае потери доходов, сколько месяцев вы сможете прожить за счет сбережений, оплачивая все ежемесячные расходы?
                                                </p>
                                                <p>5 баллов - Менее 3 месяцев</p>
                                                <p>10 баллов - От 3 до 6 месяцев</p>
                                                <p>20 баллов - Более 6 месяцев</p>
                                                <p>0 баллов - Нет сбережений</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <span>
                                                    <v-icon class="mr-2" color="red">mdi-numeric-5-box-multiple</v-icon>
                                                    5-й вопрос
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    Есть ли у вас активы, приносящие доход?
                                                </p>
                                                <p>5 баллов - Да, доходность меньше, чем ежемесячные расходы</p>
                                                <p>15 баллов - Да, доходность больше, чем ежемесячные расходы</p>
                                                <p>0 баллов - Нет активов</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <span>
                                                    <v-icon class="mr-2" color="red">mdi-numeric-6-box-multiple</v-icon>
                                                    6-й вопрос
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    Есть ли у вас огород, дача?
                                                </p>
                                                <p>5 баллов - Да</p>
                                                <p>0 баллов - Нет</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <span>
                                                    <v-icon class="mr-2" color="red">mdi-numeric-7-box-multiple</v-icon>
                                                    7-й вопрос
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    Какая часть семейного бюджета уходит на погашение долгов и кредитов?
                                                </p>
                                                <p>1 балл - Менее половины семейного бюджета</p>
                                                <p>0 баллов - Более половины</p>
                                                <p>15 баллов - Нет долгов и кредитов</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <span>
                                                    <v-icon class="mr-2" color="red">mdi-numeric-8-box-multiple</v-icon>
                                                    8-й вопрос
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    Ведете ли вы здоровый образ жизни?
                                                </p>
                                                <p>5 баллов - Да. Питаюсь правильно, занимаюсь спортом, высыпаюсь</p>
                                                <p>3 балла - Стараюсь придерживаться, но не всегда и не во всем</p>
                                                <p>0 баллов - Нет. Правильного питания не придерживаюсь, спортом не занимаюсь, есть вредные привычки (все или что-то из перечисленного</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <span>
                                                    <v-icon class="mr-2" color="red">mdi-numeric-9-box-multiple</v-icon>
                                                    9-й вопрос
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    Сколько в среднем денег в месяц вы выделяете на поддержание здоровья?
                                                </p>
                                                <p>3 балла - Выделяю менее 5000 рублей в месяц</p>
                                                <p>5 баллов - Выделяю более 5000 рублей в месяц</p>
                                                <p>0 баллов - Не выделяю</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <span>
                                                    <v-icon class="mr-2" color="red">mdi-numeric-10-box-multiple</v-icon>
                                                    10-й вопрос
                                                </span>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="mt-10">
                                                    Готовы ли вы, в случае необходимости, быстро адаптироваться к новым условиям жизни?
                                                </p>
                                                <p>5 баллов - Да</p>
                                                <p>0 баллов - Нет</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
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
import { mapActions, mapGetters } from 'vuex'
import * as userService from "@/services/user_service";

export default {
    name: "BizTestInstrum",
    data: () => ({
        dialog: true,
        errors: {},
        loading: false,
        customToolbar1: [
            ["bold", "italic", "underline"],
            [{ align: "" }, { align: "center" }, { align: "right" }],
            [{ list: "ordered" }, { list: "bullet" }]
        ],
    }),
    computed: {
        ...mapGetters({
            packageData: 'user/getProfileAccess',
            profile: 'user/profile',
        }),
        profileData() {
            return this.profile
        },
    },
    methods: {
        ...mapActions({
            loadProfileAccess: 'user/loadProfileAccess',
            addNotification: 'application/addNotification',
            updateProfile: 'user/updateProfile',
        }),
        copyRefLinkBizTest () {
            let referLinkBizTest = document.getElementById('referLinkBizTest')

            referLinkBizTest.select()

            document.execCommand('copy')
        },
        editProfileData() {
            this.loading = true
            userService.updateProfile(this.profileData.id, this.profileData)
                .then((response) => {
                    this.updateProfile(response.data)
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
        }
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

.ul-price
    list-style-type: none

.ul-price li
    padding-bottom: 10px
    line-height: 26px !important

@media(max-width: 600px)
    .block-media-lk
        padding: 0

    .card-media-lk
        padding: 0

</style>
