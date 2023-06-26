/* eslint-disable-next-line no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "./styles/main.css"
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'

    let req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
    }
    

const app = createApp(App).use(router).use(VueSweetalert2)
app.use(VueAxios, axios)
app.config.globalProperties.$globalToken = req
app.mount('#app')


