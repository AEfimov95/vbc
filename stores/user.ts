import { defineStore } from "pinia";
interface RootStore {
  username: string;
  email: string;
  terms: boolean;
}

export const useUserStore = defineStore("user", {
  state: (): RootStore => ({
    username: "",
    email: "",
    terms: false,
  }),
  getters: {
    isSomeEmpty(state) {
      return !state.username || !state.email || !state.terms;
    },
    isSomeFilled(state) {
      return !!state.username || !!state.email;
    },
  },
  actions: {
    setUsername(username: string) {
      this.username = username;
    },
    setEmail(email: string) {
      this.email = email;
    },
    setTerms(check: boolean) {
      this.terms = check;
    },
    clearData() {
      this.username = "";
      this.email = "";
      this.terms = false;
    },
  },
});
