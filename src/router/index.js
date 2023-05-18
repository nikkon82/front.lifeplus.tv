import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLayout from '../views/layouts/AuthLayout'
import AppLayout from '../views/layouts/AppLayout'

import * as auth from '../services/auth_service'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: AuthLayout,
        children: [
            {
                path: '',
                name: 'landing',
                component: () => import(/* webpackChunkName: "landing" */ '../views/landings/Landing.vue'),
            },
            {
                path: 'privacy/cookies',
                name: 'Cookies',
                component: () => import(/* webpackChunkName: "Cookies" */ '@/views/landings/privacy/Cookies.vue')
            },
            {
                path: 'privacy/policy',
                name: 'Policy',
                component: () => import(/* webpackChunkName: "Policy" */ '@/views/landings/privacy/Policy.vue')
            },
            {
                path: 'privacy/personal',
                name: 'Personal',
                component: () => import(/* webpackChunkName: "Personal" */ '@/views/landings/privacy/Personal.vue')
            },
            {
                path: 'htest',
                name: 'HTest',
                component: () => import(/* webpackChunkName: "HTest" */ '../views/landings/HealthTest/HealthTest.vue'),
            },
            {
                path: 'newpreza',
                name: 'NewSys',
                component: () => import(/* webpackChunkName: "NewSys" */ '../views/landings/NewSystem/NewSystem.vue'),
            },
            {
                path: 'hreq',
                name: 'HReq',
                component: () => import(/* webpackChunkName: "HReq" */ '../views/landings/HealthTest/HealthReq.vue'),
            },
            {
                path: 'hplan',
                name: 'HPlan',
                component: () => import(/* webpackChunkName: "HPlan" */ '../views/landings/HealthPlan/HealthPlan.vue'),
            },
            {
                path: 'hplan/one',
                name: 'HStepOne',
                component: () => import(/* webpackChunkName: "HStepOne" */ '../views/landings/HealthPlan/components/HealthStepOne.vue'),
            },
            {
                path: 'hplan/two',
                name: 'HStepTwo',
                component: () => import(/* webpackChunkName: "HStepTwo" */ '../views/landings/HealthPlan/components/HealthStepTwo.vue'),
            },
            {
                path: 'hplan/three',
                name: 'HStepThree',
                component: () => import(/* webpackChunkName: "HStepThree" */ '../views/landings/HealthPlan/components/HealthStepThree.vue'),
            },
            {
                path: 'viz',
                name: 'Viz',
                component: () => import(/* webpackChunkName: "Viz" */ '@/views/landings/Vizitka.vue')
            },
            {
                path: 'be',
                name: 'BE',
                component: () => import(/* webpackChunkName: "BE" */ '@/views/landings/BeautyElixir/BeautyElixir.vue')
            },
            {
                path: 'gift',
                name: 'Gifts',
                component: () => import(/* webpackChunkName: "Gifts" */ '@/views/landings/Gifts/Gifts.vue')
            },
            {
                path: 'ce',
                name: 'Cell',
                component: () => import(/* webpackChunkName: "Cell" */ '@/views/landings/Cell/Cell.vue')
            },
            {
                path: 'ce-ru',
                name: 'CellRU',
                component: () => import(/* webpackChunkName: "CellRU" */ '@/views/landings/Cell/CellRU.vue')
            },
            {
                path: 'btest',
                name: 'BTest',
                component: () => import(/* webpackChunkName: "BTest" */ '@/views/landings/BizTest/BizTest.vue')
            },
            {
                path: 'bprez',
                name: 'BizPreza',
                component: () => import(/* webpackChunkName: "BizPreza" */ '@/views/landings/Biz/Biz.vue')
            },
            {
                path: 'bprez-ua',
                name: 'BizPrezaUA',
                component: () => import(/* webpackChunkName: "BizPrezaUA" */ '@/views/landings/Biz/BizUA.vue')
            },
            {
                path: 'bprez-kz',
                name: 'BizPrezaKZ',
                component: () => import(/* webpackChunkName: "BizPrezaKZ" */ '@/views/landings/Biz/BizKZ.vue')
            },
            {
                path: 'lbot',
                name: 'Leedbot',
                component: () => import(/* webpackChunkName: "Leedbot" */ '@/views/landings/Leedbot/Leedbot.vue')
            },
            {
                path: 'lbot-ua',
                name: 'LeedbotUA',
                component: () => import(/* webpackChunkName: "LeedbotUA" */ '@/views/landings/Leedbot/LeedbotUA.vue')
            },
            {
                path: 'lbot-kz',
                name: 'LeedbotKZ',
                component: () => import(/* webpackChunkName: "LeedbotKZ" */ '@/views/landings/Leedbot/LeedbotKZ.vue')
            },
            {
                path: 'lbook',
                name: 'LeedBook',
                component: () => import(/* webpackChunkName: "LeedBook" */ '@/views/landings/Leedbot/LeedBook.vue')
            },
        ]
    },
    {
        path: '/',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
            },
            {
                path: 'register',
                name: 'register',
                component: () => import(/* webpackChunkName: "register" */ '../views/auth/Register.vue'),
            },
            {
                path: 'forgot-password',
                name: 'forgotPassword',
                component: () => import(/* webpackChunkName: "forgotPassword" */ '../views/auth/ForgotPassword.vue'),
            },
            {
                path: 'forgot-password-success',
                name: 'forgotPasswordSuccess',
                component: () => import(/* webpackChunkName: "forgotPasswordSuccess" */ '../views/auth/ForgotPasswordSuccess.vue'),
            },
            {
                path: 'reset-password',
                name: 'resetPassword',
                component: () => import(/* webpackChunkName: "resetPassword" */ '../views/auth/ResetPassword.vue'),
            },
            {
                path: 'verify-email',
                name: 'verifyEmail',
                component: () => import(/* webpackChunkName: "verifyEmail" */ '../views/auth/VerifyEmail.vue'),
            },
            {
                path: 'verify-email-success',
                name: 'verifyEmailSuccess',
                component: () => import(/* webpackChunkName: "verifyEmailSuccess" */ '../views/auth/VerifyEmailSuccess.vue'),
            }
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next()
            } else {
                next('/dashboard')
            }
        }
    },
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/pages/Dashboard/Dashboard')
            },
            {
                path: 'profile',
                name: 'Profile',
                component: () => import(/* webpackChunkName: "Profile" */ '@/views/pages/Profile')
            },
            {
                path: 'prospect/:id',
                name: 'prospectPage',
                component: () => import(/* webpackChunkName: "prospectPage" */ '@/views/pages/ProspectPage')
            },
            {
                path: 'prospects',
                name: 'myProspects',
                component: () => import(/* webpackChunkName: "myProspects" */ '@/views/pages/MyProspects')
            },
            {
                path: 'prospects-basket',
                name: 'myProspectsBasket',
                component: () => import(/* webpackChunkName: "myProspectsBasket" */ '@/views/pages/MyProspectsBasket')
            },
            {
                path: 'instruments',
                name: 'Instruments',
                component: () => import(/* webpackChunkName: "Instruments" */ '@/views/pages/Instruments/Instruments')
            },
            {
                path: 'support',
                name: 'Support',
                component: () => import(/* webpackChunkName: "Support" */ '@/views/pages/Support/Support')
            },
            {
                path: 'instruments/test-instrum',
                name: 'TestInstrum',
                component: () => import(/* webpackChunkName: "TestInstrum" */ '@/views/pages/Instruments/TestInstrum')
            },
            {
                path: 'instruments/new-system',
                name: 'NewSystemInst',
                component: () => import(/* webpackChunkName: "NewSystemInst" */ '@/views/pages/Instruments/NewSystemInst')
            },
            {
                path: 'instruments/vizitka-instrum',
                name: 'VizitkaInstrum',
                component: () => import(/* webpackChunkName: "VizitkaInstrum" */ '@/views/pages/Instruments/VizitkaInstrum')
            },
            {
                path: 'instruments/be-instrum',
                name: 'BeInstrum',
                component: () => import(/* webpackChunkName: "BeInstrum" */ '@/views/pages/Instruments/BeInstrum')
            },
            {
                path: 'instruments/leedbot-instrum',
                name: 'LeedbotInstrum',
                component: () => import(/* webpackChunkName: "LeedbotInstrum" */ '@/views/pages/Instruments/LeedbotInstrum')
            },
            {
                path: 'instruments/biz-instrum',
                name: 'BizInstrum',
                component: () => import(/* webpackChunkName: "BizInstrum" */ '@/views/pages/Instruments/BizInstrum')
            },
            {
                path: 'instruments/biztest-instrum',
                name: 'BizTestInstrum',
                component: () => import(/* webpackChunkName: "BizTestInstrum" */ '@/views/pages/Instruments/BizTestInstrum')
            },
            {
                path: 'instruments/gifts-instrum',
                name: 'GiftsInstrum',
                component: () => import(/* webpackChunkName: "GiftsInstrum" */ '@/views/pages/Instruments/GiftsInstrum')
            },
            {
                path: 'instruments/cell-instrum',
                name: 'CellInstrum',
                component: () => import(/* webpackChunkName: "CellInstrum" */ '@/views/pages/Instruments/CellInstrum')
            },
            {
                path: 'school',
                name: 'School',
                component: () => import(/* webpackChunkName: "School" */ '@/views/pages/School/School')
            },
            {
                path: 'school/about-system',
                name: 'AboutSystem',
                component: () => import(/* webpackChunkName: "AboutSystem" */ '@/views/pages/School/AboutSystem')
            },
            {
                path: 'school/client-support',
                name: 'ClientSupport',
                component: () => import(/* webpackChunkName: "ClientSupport" */ '@/views/pages/School/ClientSupport')
            },
            {
                path: 'school/tools-training',
                name: 'ToolsTraining',
                component: () => import(/* webpackChunkName: "ToolsTraining" */ '@/views/pages/School/ToolsTraining')
            },
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next('/login')
            } else {
                next()
            }
        }
    },
    {
        path: '/admin/',
        component: AppLayout,
        children: [
            {
                path: 'users',
                name: 'Users',
                component: () => import(/* webpackChunkName: "Users" */ '@/views/admin/users/Users')
            },
            {
                path: 'users/add',
                name: 'addUser',
                component: () => import(/* webpackChunkName: "addUser" */ '@/views/admin/users/AddUser')
            },
            {
                path: 'users/:id/edit',
                name: 'editUser',
                component: () => import(/* webpackChunkName: "editUser" */ '@/views/admin/users/EditUser')
            },
            {
                path: 'users/:id',
                name: 'showUser',
                component: () => import(/* webpackChunkName: "showUser" */ '@/views/admin/users/ShowUser')
            },
            {
                path: 'prospects',
                name: 'Prospects',
                component: () => import(/* webpackChunkName: "Prospects" */ '@/views/admin/prospects/Prospects')
            },
            {
                path: 'prospects/add',
                name: 'addProspect',
                component: () => import(/* webpackChunkName: "addProspect" */ '@/views/admin/prospects/AddProspect')
            },
            {
                path: 'prospects/:id/edit',
                name: 'editProspect',
                component: () => import(/* webpackChunkName: "editProspect" */ '@/views/admin/prospects/EditProspect')
            },
            {
                path: 'prospects/:id',
                name: 'showProspect',
                component: () => import(/* webpackChunkName: "showProspects" */ '@/views/admin/prospects/ShowProspect')
            }
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next('/login')
            } else if (auth.getUserRole() === 'admin') {
                next()
            } else {
                next('/Page404')
            }
        }
    },
    {
        path: '*',
        name: 'Page404',
        component: () => import('@/views/pages/Page404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    // eslint-disable-next-line no-unused-vars
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default router
