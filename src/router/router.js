import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import("@/pages/HomePage" /* webpackChunkName: "home" */)
    },
    {
        name: 'Calculator',
        path: '/calculate',
        component: () => import("@/pages/CalculatorPage" /* webpackChunkName: "calculator" */)
    },
    {
        name: 'Vehicle Video',
        path: '/video',
        component: () => import("@/pages/VehicleVideos" /* webpackChunkName: "video" */)
    },
    {
        name: 'About Us',
        path: '/about',
        component: () => import("@/pages/AboutPage" /* webpackChunkName: "about" */)
    },
    {
        name: 'Loan',
        path: '/loan',
        component: () => import("@/pages/LoanPage" /* webpackChunkName: "loan" */)
    },
    {
        name: 'Terms and Conditions',
        path: '/terms',
        component: () => import("@/pages/TermsPage" /* webpackChunkName: "terms" */)
    },
    {
        name: 'Privacy and Policy',
        path: '/privacy',
        component: () => import("@/pages/PrivacyPage" /* webpackChunkName: "privacy" */)
    },
    {
        name: 'Blog',
        path: '/blog',
        component: () => import("@/pages/BlogPage" /* webpackChunkName: "blog" */)
    },
    {
        name: 'Article',
        path: '/blog/:id',
        component: () => import("@/pages/ArticlePage" /* webpackChunkName: "article" */)
    },
    {
        name: 'Inventory',
        path: '/catalog',
        component: () => import("@/pages/CatalogPage" /* webpackChunkName: "inventory" */)
    },
    {
        name: 'Car',
        path: '/catalog/:id',
        component: () => import("@/pages/CarPage" /* webpackChunkName: "car" */)
    },
    {
        name: 'Quiz',
        path: '/request/:id',
        component: () => import("@/pages/QuizPage" /* webpackChunkName: "quiz" */)
    },
    {
        name: 'Not Found',
        path: '/:pathMatch(.*)*',
        component: () => import("@/pages/NotFound" /* webpackChunkName: "404" */)
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        else {
            return {
                top: 0,
                behavior: "smooth"
            }
        }
    }
});

export default router;