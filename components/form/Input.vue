<template>
  <div class="flex items-center relative">
    <div class="absolute top-1/2 left-[10px] -translate-y-1/2">
      <slot name="left-content" />
    </div>
    <input
      :autocomplete="props.name"
      class="input-form py-5 px-[50px]"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="onInput"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: string;
  placeholder: string;
  modelValue: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit("update:modelValue", input.value);
};
</script>
