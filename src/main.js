import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'



import HomePage from './components/HomePage.vue'
import Aboutpage from './components/AboutPage.vue'


const router = createRouter({
    routes:[{
        path:"/",
        component:HomePage
    },
      {
        path:"/about",
        component:Aboutpage
      }  
    ],
    history:createWebHistory()
})
createApp(App).use(router).mount('#app')
