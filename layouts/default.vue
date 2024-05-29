<template>
  <div class="flex h-screen">
    <div
      class="flex min-w-[1440px] m-auto rounded-[50px] overflow-hidden"
    >
      <div class="section bg-white">
        <div class="m-auto"><slot /></div>
      </div>
      <div class="section bg-blue-dark">
        <img
          class="absolute flex w-[606px] h-[606px] top-[209px] left-[57px] z-1"
          src="@/assets/img/layout/ellipse-big.svg"
          alt="ring"
        />
        <img
          class="absolute flex w-[528px] h-[528px] top-[247px] left-[96px] z-2"
          src="@/assets/img/layout/ellipse-small.svg"
          alt="ring"
        />
        <img
          class="flex absolute"
          :class="rightSideContent.img_position"
          :src="rightSideContent.img"
          alt="content"
        />
        <div class="py-[50px] mt-auto mb-[58px] text-center text-blue-sky">
          <h3 class="font-bold text-lg">{{ rightSideContent.title }}</h3>
          <p class="opacity-75">{{ rightSideContent.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import two_factor from "@/assets/img/layout/two_factor_authentication.svg";
import thought_process from "@/assets/img/layout/thought_process.svg";
import secure_login from "@/assets/img/layout/secure_login.svg";

interface rightContent {
  img: string;
  img_position: string[];
  title: string;
  text: string;
}

const route = useRoute();

const rightSideContent = computed<rightContent>(() => {
  if (route.path === "/otp") {
    return {
      img: secure_login,
      img_position: ["left-[44px]","top-[291px]"],
      title: "It's just OTP verification",
      text: "You are one step away from recovering your password.",
    };
  }
  if (route.path === "/signup") {
    return {
      img: thought_process,
      img_position: ["left-[57px]","top-[293px]"],
      title: "Join us!",
      text: "Just go through the boring process of creating an account.",
    };
  }
  return {
    img: two_factor,
    img_position: ["left-[67px]","top-[327px]"],
    title: "Connect with any device.",
    text: "Everything you need is an internet connection.",
  };
});
</script>
