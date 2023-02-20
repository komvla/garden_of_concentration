import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import './styles/index.css';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(store).use(vuetify).use(router).mount('#app')