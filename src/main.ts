import 'vue-toast-notification/dist/theme-sugar.css'
import './styles/global.css'

import { createPinia, storeToRefs } from 'pinia'
import { createApp, watch } from 'vue'

import App from './App.vue'
import router from './routes'
import { useAuthStore } from './stores/auth'

const app = createApp(App)
const pinia = createPinia()

router.beforeEach((to) => {
  const store = useAuthStore()
  const { session } = storeToRefs(store)
  return watch(session, () => {
    if (
      // make sure the user is authenticated
      !session.value &&
      // ❗️ Avoid an infinite redirect
      to.name !== 'Registration'
    ) {
      // redirect the user to the Registration page
      return { name: 'Registration' }
    }
  })
})

app.use(pinia)
app.use(router)

app.mount('#app')
