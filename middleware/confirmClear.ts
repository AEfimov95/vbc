export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/" && useUserStore().isSomeFilled) {
    if (
      confirm("Your entered data may be lost, do you really want to leave?")
    ) {
      useUserStore().clearData();
    } else {
      return abortNavigation();
    }
  }
});
