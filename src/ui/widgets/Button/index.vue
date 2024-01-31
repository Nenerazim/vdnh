<script setup lang="ts">
import type {UiButtonProps} from './types';

const emit = defineEmits(['onClick']);
const props = withDefaults(defineProps<UiButtonProps>(), {
  type: 'default',
  additionalClass: ''
});
</script>

<template>
  <button :class="`button ${props.type} ${props.additionalClass}`" @click="emit('onClick')">
    {{ props.label }}
  </button>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  background: transparent;
  font-family: 'Intl', sans-serif;
  &.default {
    background: $white;
    color: $red;
    @include font18(500);
    height: 46px;
    padding: 12px 16px;
    border-radius: 16px;
  }
  &.full-width {
    width: 100%;
  }
}
</style>
