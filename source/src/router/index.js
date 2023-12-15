import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/homePageView.vue'
import Navigation from '../views/navigation.vue'
import PrintView from '../views/printView.vue'
import PrintInfoView from '../views/printInfoView.vue'
import PrintInfoView1 from '../views/printInfoView1.vue'
import PrintInfoView2 from '../views/printInfoView2.vue'
import PrintInfoView3 from '../views/printInfoView3.vue'
import PrintSettingsView from '../views/printSettingsView.vue'
import AnnoucementView from '../views/annoucementView.vue'
import EmptyAnnoucementView from '../views/emptyAnoucement.vue'
import BuyPaperView from '../views/buyPaperView.vue'
import PersonalInfoView from '../views/personalInfoView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/print',
        },
        {
            name: 'Navigation',
            path: '/navigation',  
            component: Navigation,
            children: [
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
                    name: 'PrintInfo1',
                    path: '/printInfo1',
                    component:PrintInfoView1
                },
                {
                    name: 'PrintInfo2',
                    path: '/printInfo2',
                    component:PrintInfoView2
                },
                {
                    name: 'PrintInfo3',
                    path: '/printInfo3',
                    component:PrintInfoView3
                }, 
                {
                    name: 'Annoucement',
                    path: '/annoucement',
                    component:AnnoucementView
                },
                {
                    name: 'EmptyAnnoucement',
                    path: '/emptyAnnoucement',
                    component:EmptyAnnoucementView
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