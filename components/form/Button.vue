<template>
  <button type="submit" class="btn" :disabled="props.disabled">
    <slot />
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{ disabled: boolean }>();
</script>
