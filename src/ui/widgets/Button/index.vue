<script setup lang="ts">
import type {UiButtonProps} from './types';

const emit = defineEmits(['onClick']);
const props = withDefaults(defineProps<UiButtonProps>(), {
  type: 'default',
  color: 'white',
  additionalClass: ''
});
</script>

<template>
  <button :class="`button ${props.type} ${props.color} ${props.additionalClass}`" @click="emit('onClick')">
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
  @include font18(500);
  padding: 12px 16px;
  border-radius: 16px;
  &.default {
    height: 46px;
  }
  &.small {
    height: 37px;
  }
  &.white {
    background: $white;
    color: $red;
  }
  &.red {
    background: $red;
    color: $white;
  }
  &.full-width {
    width: 100%;
  }
}
</style>
