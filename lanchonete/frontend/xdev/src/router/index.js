import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AuthService from '../services/AuthService.js'
import LoggedLayout from '@/layouts/LoggedLayout'
import AuthLayout from '@/layouts/AuthLayout'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: 'Home',
        component: LoggedLayout,
        children: [{
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/About.vue')
            },
            {
                path: '/createuser',
                name: 'CreateUser',
                component: () =>
                    import ("../views/Users/Create.vue")
            },
            {
                path: '/createproduct',
                name: 'CreateProduct',
                component: () =>
                    import ("../views/Products/Create.vue")
            },
            {
                path: '/listproducts',
                name: 'ListProducts',
                component: () =>
                    import ("../views/Products/List.vue")
            },
            {
                path: '/detailproduct:id',
                name: 'DetailProduct',
                component: () =>
                    import ("../views/Products/Detail.vue")
            }
        ]
    },
    {
        path: '/login',
        redirect: 'Login',
        component: AuthLayout,
        children: [{
            path: '/login',
            name: 'Login',
            component: () =>
                import ("../views/Login.vue")
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name != 'Login' && !AuthService.isSignedIn()) {
        next({ name: 'Login' });
    } else {

        if (to.name == "CreateProduct" && !AuthService.isAdmin()) {
            next({ name: 'Home' });
        } else
            next();
    }
})

export default router