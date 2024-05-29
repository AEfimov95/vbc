import { defineStore } from "pinia";
interface RootStore {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  terms: boolean;
}

export const useUserStore = defineStore("user", {
  state: (): RootStore => ({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    terms: false,
  }),
  getters: {
    isSomeEmpty(state) {
      return (
        !state.email ||
        !state.username ||
        !state.password ||
        !state.confirm_password ||
        !state.terms
      );
    },
    isSomeFilled(state) {
      return (
        state.email != "" ||
        state.username != "" ||
        state.password != "" ||
        state.confirm_password != ""
      );
    },
  },
  actions: {
    clearData() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.confirm_password = "";
      this.terms = false;
    },
    clearPasswords() {
      this.password = "";
      this.confirm_password = "";
    },
  },
});
