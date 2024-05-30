<template>
  <div class="flex items-center">
    <input
      autocomplete="otp"
      class="input-form py-5 text-center w-[64px] text-otp"
      placeholder="-"
      :value="props.modelValue"
      @input="onInput"
      maxlength="1"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit("update:modelValue", input.value);
};
</script>
