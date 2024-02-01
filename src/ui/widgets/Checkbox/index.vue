<script setup lang="ts">
const model = defineModel<boolean>();
defineProps<{label: string}>();
</script>

<template>
  <div class="form-group checkbox-group">
    <input id="cbx" v-model="model" type="checkbox" class="default-checkbox" />
    <label for="cbx" class="labeled-checkbox">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

.form-group {
  position: relative;
}

.checkbox-group {
  .default-checkbox {
    opacity: 0;
    position: absolute;
  }
  .labeled-checkbox {
    position: relative;
    display: flex;
    align-items: center;
    gap: 11px;
    @include font14();
    cursor: pointer;
    top: unset;
  }
  [type='checkbox']:not(:checked) + label:before,
  [type='checkbox']:checked + label:before {
    content: '';
    display: inline-flex;
    width: 16px;
    min-width: 16px;
    height: 16px;
    border: 1px solid rgba(180, 184, 204, 0.36);
    background: $lightGrey4;
    border-radius: 50%;
    outline: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  [type='checkbox']:checked + label:before {
    background: $red;
  }
}
</style>
