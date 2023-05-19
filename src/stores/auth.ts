import { supabase } from '@/lib/supabase'
import type { Session } from '@supabase/supabase-js'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toast-notification'

const initialState: {
  session: Session | null
  isLoggedIn: boolean
  isLoading: boolean
} = {
  session: null,
  isLoggedIn: false,
  isLoading: false
}

export const useAuthStore = defineStore('auth', {
  state: () => {
    return initialState
  },
  actions: {
    async login(payload: { email: string }) {
      try {
        const $toast = useToast()
        const toastConfig = {
          duration: 4000,
          dismissible: true,
          position: 'top-right'
        } as const
        this.isLoading = true
        const { error } = await supabase.auth.signInWithOtp({ email: payload.email })
        if (error) {
          $toast.error(error.message, toastConfig)
          throw error
        }
        $toast.info('Check your email for the login link', toastConfig)
      } catch (err) {
        console.log(err)
        throw err
      }
    },

    listenAuthChange() {
      supabase.auth
        .getSession()
        .then(({ data }) => (this.session = data.session))
        .catch((err) => {
          console.log('Error occured in App.vue:onMounted', err)
        })
      supabase.auth.onAuthStateChange((_, _session) => (this.session = _session))
    }
  }
})
