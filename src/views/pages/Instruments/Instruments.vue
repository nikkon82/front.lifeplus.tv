<template>
    <v-container
        id="instruments"
        fluid
        tag="section"
    >
        <h2 class="mt-10" style="text-align: center; text-transform: uppercase">Основные инструменты</h2>
        <v-row
            justify="center"
        >
            <v-col
                cols="12"
                lg="3"
                md="4"
                sm="5"
            >
                <v-card
                    class="mx-auto"
                    max-width="374"
                >
                    <v-img
                        height="150"
                        src="/img/vizitka.png"
                        style="border-bottom: 1px solid #cccccc"
                    ></v-img>

                    <v-card-title>
                        <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Страница-визитка</p>
                    </v-card-title>

                    <v-card-actions class="pt-0 pb-4">
                        <v-btn style="margin: auto" text rounded color="success" :to="{name: 'VizitkaInstrum'}">Перейти</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                lg="3"
                md="4"
                sm="5"
            >
                <v-card
                    class="mx-auto"
                    max-width="374"
                >
                    <v-img
                        height="150"
                        src="/img/new-preza/new-preza.png"
                    ></v-img>

                    <v-card-title>
                        <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Новая презентация</p>
                    </v-card-title>

                    <v-card-actions class="pt-0 pb-4">
                        <v-btn style="margin: auto" text rounded color="blue">В разработке</v-btn>
                        <!--<v-btn style="margin: auto" text rounded color="success" :to="{name: 'NewSystemInst'}">Перейти</v-btn> -->
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                lg="3"
                md="4"
                sm="5"
            >
                <v-card
                    class="mx-auto"
                    max-width="374"
                >
                    <v-img
                        height="150"
                        src="/img/health/restest.png"
                    ></v-img>

                    <v-card-title>
                        <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Онлайн-тест по здоровью</p>
                    </v-card-title>

                    <v-card-actions class="pt-0 pb-4">
                        <v-btn style="margin: auto" text rounded color="success" :to="{name: 'TestInstrum'}">Перейти</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                lg="3"
                md="4"
                sm="5"
            >
                <v-card
                    class="mx-auto"
                    max-width="374"
                >
                    <v-img
                        height="150"
                        src="/img/biztest/bizt-bg-top.png"
                        style="border-bottom: 1px solid #cccccc"
                    ></v-img>

                    <v-card-title>
                        <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Онлайн-тест по бизнесу</p>
                    </v-card-title>

                    <v-card-actions class="pt-0 pb-4">
                        <v-btn style="margin: auto" text rounded color="success" :to="{name: 'BizTestInstrum'}">Перейти</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                lg="3"
                md="4"
                sm="5"
            >
                <v-card
                    class="mx-auto"
                    max-width="374"
                >
                    <v-img
                        height="150"
                        src="/img/biz/lrpreza.png"
                        style="border-bottom: 1px solid #cccccc"
                    ></v-img>

                    <v-card-title>
                        <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Бизнес-презентация</p>
                    </v-card-title>

                    <v-card-actions class="pt-0 pb-4">
                        <v-btn style="margin: auto" text rounded color="success" :to="{name: 'BizInstrum'}">Перейти</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                lg="3"
                md="4"
                sm="5"
            >
                <v-card
                    class="mx-auto"
                    max-width="374"
                >
                    <v-img
                        height="150"
                        src="/img/leedbot/leedbot-img.jpg"
                        style="border-bottom: 1px solid #cccccc"
                    ></v-img>

                    <v-card-title>
                        <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Лидбот по бизнесу</p>
                    </v-card-title>

                    <v-card-actions class="pt-0 pb-4">
                        <v-btn style="margin: auto" text rounded color="success" :to="{name: 'LeedbotInstrum'}">Перейти</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <h2 class="mt-10" style="text-align: center; text-transform: uppercase">Вспомогательные инструменты</h2>
        <v-row
            justify="center"
        >
            <v-col
                cols="12"
                lg="3"
                md="4"
                sm="5"
            >
                <v-card
                    class="mx-auto"
                    max-width="374"
                >
                    <v-img
                        height="150"
                        src="/img/cell/cell.jpg"
                    ></v-img>

                    <v-card-title>
                        <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Суперфуды</p>
                    </v-card-title>

                    <v-card-actions class="pt-0 pb-4">
                        <v-btn style="margin: auto" text rounded color="success" :to="{name: 'CellInstrum'}">Перейти</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                lg="3"
                md="4"
                sm="5"
            >
                <v-card
                    class="mx-auto"
                    max-width="374"
                >
                    <v-img
                        height="150"
                        src="/img/gifts/gifts.jpg"
                    ></v-img>

                    <v-card-title>
                        <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Подарки</p>
                    </v-card-title>

                    <v-card-actions class="pt-0 pb-4">
                        <v-btn style="margin: auto" text rounded color="success" :to="{name: 'GiftsInstrum'}">Перейти</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                lg="3"
                md="4"
                sm="5"
            >
                <v-card
                    class="mx-auto"
                    max-width="374"
                >
                    <v-img
                        height="150"
                        src="/img/beautyelixir/5in1.jpg"
                    ></v-img>

                    <v-card-title>
                        <p class="mt-5" style="text-align: center; width: 100%; text-transform: uppercase">Бьюти эликсир</p>
                    </v-card-title>

                    <v-card-actions class="pt-0 pb-4">
                        <v-btn style="margin: auto" text rounded color="success" :to="{name: 'BeInstrum'}">Перейти</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Instruments",
    data: () => ({

    }),
    methods: {

    },
}
</script>

<style scoped>

</style>