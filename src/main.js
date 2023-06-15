/* eslint-disable-next-line no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

    let req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
    }

const app = createApp(App).use(router)
app.use(VueAxios, axios)
app.config.globalProperties.$globalToken = req
app.mount('#app')


