<template>
  <div class="flex flex-col gap-[25px] w-[477px] h-[384px]">
    <h1 class="title">Login to your Account</h1>
    <div class="flex justify-between items-center px-3">
      <div class="w-[120px] h-[1px] bg-gray"></div>
      <p class="text-[15px] text-gray font-medium">with email</p>
      <div class="w-[120px] h-[1px] bg-gray"></div>
    </div>
    <form class="flex flex-col gap-[10px] px-3" @submit.prevent="auth">
      <FormInput :placeholder="'Email'" :name="'email'" v-model="form.email">
        <template #left-content>
          <IconsMailIcon />
        </template>
      </FormInput>
      <FormPassword :placeholder="'Password'" v-model="form.password">
        <template #left-content>
          <IconsShieldIcon />
        </template>
      </FormPassword>
      <div class="flex flex-col items-center gap-5 mt-[15px]">
        <FormButton :disabled="isEmptyField"> LOG IN </FormButton>
        <p>
          Don’t have account?
          <NuxtLink to="/signup" class="link">Create an account</NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "confirm-clear",
});
interface LoginForm {
  email: string;
  password: string;
}
const form = reactive<LoginForm>({
  email: "",
  password: "",
});

const isEmptyField = computed<boolean>(() => {
  return Object.values(form).some((value) => !value);
});

const auth = async (): Promise<void> => {
  await useAuth();
};
</script>
