<template>
  <div class="flex flex-col w-[484px] h-[269px]">
    <div class="flex flex-col gap-[14px]">
      <h1 class="title">Enter OTP</h1>
      <p class="text-lg text-gray">
        Sent OTP on
        <span class="text-blue-light font-semibold">{{ userStore.email }}</span>
      </p>
    </div>
    <NuxtLink to="/signup" class="text-base text-blue-light font-bold"
      >Change email</NuxtLink
    >
    <form class="flex flex-col gap-6 mt-[25px]" @submit.prevent="completeAuth">
      <div class="flex gap-5">
        <FormOtp
          v-for="(item, id) in otpCode"
          :key="id"
          v-model="otpCode[id]"
        />
      </div>
      <div class="px-3">
        <FormButton :disabled="!isComplete"> SUBMIT </FormButton>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "redirect",
});
const userStore = useUserStore();
const otpCode = ref<string[]>(Array(6).fill(""));
const isComplete = computed<boolean>(() => {
  return otpCode.value.every((code) => code !== "");
});
const completeAuth = async () => {
  await useAuth();
};
</script>
