export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/otp' && !useUserStore().email) {
      return navigateTo('/')
    }
  })