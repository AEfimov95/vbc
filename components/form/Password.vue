<template>
  <div class="flex items-center relative">
    <div class="absolute top-1/2 left-[10px] -translate-y-1/2">
      <slot name="left-content" />
    </div>
    <input
      autocomplete="new-password"
      class="input-form py-5 px-[50px]"
      :placeholder="props.placeholder"
      :type="inputType"
      :value="props.modelValue"
      @input="onInput"
    />
    <div
      class="absolute top-1/2 right-[10px] -translate-y-1/2 cursor-pointer"
      @click="toggleShow"
    >
      <IconsShowPasswordIcon :class="{ 'opacity-20': isShowPassword }" />
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  placeholder: string;
  modelValue: string;
}>();
const emit = defineEmits(["update:modelValue"]);
const isShowPassword = ref<boolean>(false);
const inputType = computed<string>(() => {
  return isShowPassword.value ? "text" : "password";
});
const toggleShow = (): void => {
  isShowPassword.value = !isShowPassword.value;
};
const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit("update:modelValue", input.value);
};
</script>
