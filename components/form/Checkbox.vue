<template>
  <label
    class="select-none inline-flex items-center cursor-pointer py-1"
  >
    <input
      @input="onInput"
      type="checkbox"
      :checked="modelValue"
      :value="modelValue"
      class="hidden"
    />

    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33333 0C1.49238 0 0 1.11929 0 2.5V17.5C0 18.8807 1.49239 20 3.33333 20H16.6667C18.5076 20 20 18.8807 20 17.5V2.5C20 1.11929 18.5076 0 16.6667 0H3.33333ZM3.33333 1.25H16.6667C17.5871 1.25 18.3333 1.80964 18.3333 2.5V17.5C18.3333 18.1904 17.5871 18.75 16.6667 18.75H3.33333C2.41286 18.75 1.66667 18.1904 1.66667 17.5V2.5C1.66667 1.80964 2.41286 1.25 3.33333 1.25Z"
        fill="#8098F9"
      />
      <path
        v-if="modelValue"
        d="M5 10L8.5 13.5L15 7"
        stroke="#8098F9"
        stroke-width="2"
      />
    </svg>
    <div class="ml-[10px]">
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

export interface Props {
  modelValue?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const onInput = (event: any) => {
  emit("update:modelValue", event.target.checked);
};
</script>
