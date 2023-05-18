<template>
    <v-navigation-drawer
        id="core-navigation-drawer"
        v-model="drawer"
        :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
        :expand-on-hover="expandOnHover"
        :src="barImage"
        mobile-breakpoint="960"
        app
        width="260"
        v-bind="$attrs"
    >
        <template v-slot:img="props">
            <v-img
                :gradient="`to bottom, ${barColor}`"
                v-bind="props"
            />
        </template>

        <v-list
            dense
            nav
        >
            <v-list-item>
                <v-list-item-avatar
                    class="align-self-center"
                    color="white"
                    contain
                >
                    <v-img
                        src="/img/LogoLifePlus.png"
                    />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title
                        class="display-1"
                        style="line-height: 1.8rem;"
                    >
                        <span class="title-drawer">lifeplus</span>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider class="mb-1" />

        <v-list
            dense
            nav
        >
            <v-list-item
                :to="{name: 'Profile'}"
                active-class="primary white--text"
            >
                <v-list-item-avatar
                    class="align-self-center"
                    color="white"
                    contain
                >
                    <v-img
                        v-if="profile.avatar"
                        :src="`${ $store.state.serverPath }/storage/${ profile.avatar }`"
                    />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title
                        v-if="profile.last_name"
                        class="display-1"
                    >
                        {{ profile.name }} {{ profile.last_name }}
                    </v-list-item-title>
                    <v-list-item-title
                        v-else
                        class="display-1"
                    >
                        {{ profile.name }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider class="mb-2" />

        <v-list
            expand
            nav
        >
            <v-list-item
                :to="{name: 'Dashboard'}"
                active-class="primary white--text"
            >
                <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Главная</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item
                :to="{name: 'Instruments'}"
                active-class="primary white--text"
            >
                <v-list-item-icon>
                    <v-icon>mdi-hammer-screwdriver</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Инструменты</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

<!--            <v-list-item-->
<!--                v-if="profile.role === 'partner' || profile.role === 'admin'"-->
<!--                :to="{name: 'School'}"-->
<!--                active-class="primary white&#45;&#45;text"-->
<!--            >-->
<!--                <v-list-item-icon>-->
<!--                    <v-icon>mdi-school</v-icon>-->
<!--                </v-list-item-icon>-->

<!--                <v-list-item-content>-->
<!--                    <v-list-item-title>Обучение</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->

            <v-list-item
                :to="{name: 'myProspects'}"
                active-class="primary white--text"
            >
                <v-list-item-icon>
                    <v-icon>mdi-account-multiple-plus</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Мои заявки</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item
                :to="{name: 'Support'}"
                active-class="primary white--text"
            >
                <v-list-item-icon>
                    <v-icon>mdi-alarm-light</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Техподдержка</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <div class="footer-sidebar body-2 font-weight-light">
            &copy; {{ new Date().getFullYear() }}, lifeplus.tv, v1.0.0
        </div>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name: "Drawer",
    props: {
        expandOnHover: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        //
    }),
    computed: {
        ...mapState(['barColor', 'barImage']),
        ...mapGetters({
            profile: 'user/profile'
        }),
        drawer: {
            get () {
                return this.$store.state.drawer
            },
            set (val) {
                this.$store.commit('SET_DRAWER', val)
            },
        }
    }
}
</script>

<style lang="sass">
#core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
        opacity: .24

    .v-list-item
        &__icon--text,
        &__icon:first-child
            justify-content: center
            text-align: center
            width: 20px

    .v-list--dense
        .v-list-item
            &__icon--text,
            &__icon:first-child
                margin-top: 10px

    .v-list-group--sub-group
        .v-list-group__header

            .v-list-item__icon--text
                margin-top: 19px
                order: 0

            .v-list-group__header__prepend-icon
                order: 2
.title-drawer
    font-size: 26px

.footer-sidebar
    color: gray
    position: absolute
    bottom: 0
    padding: 20px
</style>
