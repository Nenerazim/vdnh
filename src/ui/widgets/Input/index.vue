<script setup lang="ts">
import type {UiInputProps} from './types';

const model = defineModel<string>();
withDefaults(defineProps<UiInputProps>(), {
  type: 'text',
  error: '',
  inputMode: 'text'
});
</script>

<template>
  <div class="form-group">
    <input v-model="model" :placeholder="placeholder" :type="type" :inputmode="inputMode" />
    <div v-if="error" class="help-block">{{ error }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';

input {
  height: 37px;
  border: 1px solid rgba(180, 184, 204, 0.36);
  padding: 0 12px;
  background: $lightGrey4;
  font-size: 15px;
  font-family: 'Intl', sans-serif;
  border-radius: 12px;
  width: 100%;
  &::placeholder {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.45);
  }
}
.help-block {
  margin: 3px 0;
  font-size: 11px;
  color: $red;
}
</style>
