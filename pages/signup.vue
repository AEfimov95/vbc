<template>
  <div class="flex flex-col gap-[25px] w-[477px] h-[550px]">
    <div class="flex flex-col gap-[14px]">
      <h1 class="title">Create your account</h1>
      <p class="text-lg text-gray">Unlock all Features!</p>
    </div>
    <form class="flex flex-col gap-[10px] px-3" @submit.prevent="nextStep">
      <FormInput
        :placeholder="'Username'"
        :name="'username'"
        v-model="userStore.username"
      >
        <template #left-content>
          <IconsPersonIcon />
        </template>
      </FormInput>
      <FormInput
        :placeholder="'Email'"
        :name="'email'"
        v-model="userStore.email"
      >
        <template #left-content>
          <IconsMailIcon />
        </template>
      </FormInput>
      <FormPassword :placeholder="'Password'" v-model="form.password">
        <template #left-content>
          <IconsShieldIcon />
        </template>
      </FormPassword>
      <FormPassword
        :placeholder="'Confirm Password'"
        v-model="form.confirm_password"
      >
        <template #left-content>
          <IconsShieldIcon />
        </template>
      </FormPassword>
      <FormCheckbox v-model="userStore.terms">
        <p>Accept <a class="link" href="#">terms and conditions</a></p>
      </FormCheckbox>
      <div class="flex flex-col items-center gap-5 mt-[15px]">
        <FormButton
          :disabled="isEmptyField || form.password !== form.confirm_password"
        >
          SIGN UP
        </FormButton>
        <p>
          You have account?
          <NuxtLink to="/" class="link">Login now</NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
interface PasswordForm {
  password: string;
  confirm_password: string;
}
const form = reactive<PasswordForm>({
  password: "",
  confirm_password: "",
});

const userStore = useUserStore();

const isEmptyField = computed<boolean>(() => {
  return Object.values(form).some((value) => !value) || userStore.isSomeEmpty;
});
const isSomeField = computed<boolean>(() => {
  return (
    Object.values(form).some((value) => value !== "") || userStore.isSomeFilled
  );
});
const nextStep = (): void => {
  router.push({ name: "otp" });
};

const router = useRouter();
router.beforeEach((to, from, next) => {
  if (from.path === "/signup" && to.path === "/" && isSomeField.value) {
    const answer = window.confirm(
      "Your entered data may be lost, do you really want to leave?"
    );
    if (answer) {
      userStore.clearData();
      next();
    } else {
      next(false);
    }
  } else {
    next();
  }
});
</script>
