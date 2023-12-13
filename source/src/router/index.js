import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/homePageView.vue'
import Navigation from '../views/navigation.vue'
import PrintView from '../views/printView.vue'
import PrintInfoView from '../views/printInfoView.vue'
import PrintSettingsView from '../views/printSettingsView.vue'
import AnnoucementView from '../views/annoucementView.vue'
import BuyPaperView from '../views/buyPaperView.vue'
import PersonalInfoView from '../views/personalInfoView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            name: 'Navigation',
            path: '/navigation',  
            component: Navigation,
            children: [
                {
                    name: 'Home',
                    path: '/home',
                    component: Homepage
                },
                {
                    name: 'Print',
                    path: '/print',
                    component:PrintView
                },
                {
                    name: 'PrintSettings',
                    path: '/printSettings',
                    component:PrintSettingsView
                },
                {
                    name: 'PrintInfo',
                    path: '/printInfo',
                    component:PrintInfoView
                },
                {
                    name: 'Annoucement',
                    path: '/annoucement',
                    component:AnnoucementView
                },
                {
                    name: 'BuyPaper',
                    path: '/buypaper',
                    component:BuyPaperView
                },
                {
                    name: 'PersonalInfo',
                    path: '/personalInfo',
                    component:PersonalInfoView
                },
            ]
        },
    ]
})

export default router