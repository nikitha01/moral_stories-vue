import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bulma/css/bulma.css';


createApp(App).use(router).mount('#app')

new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
  