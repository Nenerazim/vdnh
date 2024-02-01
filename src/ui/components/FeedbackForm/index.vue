<script setup lang="ts">
import Button from '@ui/widgets/Button';
import Input from '@ui/widgets/Input';
import Checkbox from '@ui/widgets/Checkbox';
import {Validate} from '@app/helpers/Validate';

const email = ref('');
const accepted = ref(false);
const success = ref(false);
const errors = ref<Record<string, string>>({});

const submit = () => {
  errors.value = {};
  const rules: Record<string, {value: boolean; message: string}> = {
    email: {value: Validate.email(email.value), message: 'Введенный email некорректен'},
    accepted: {value: accepted.value, message: 'Разрешите обработку персональных данных'}
  };
  for (const key in rules) {
    if (!rules[key].value) {
      errors.value[key] = rules[key].message;
    }
  }
  if (!Object.keys(errors.value).length) {
    success.value = true;
  }
};
</script>

<template>
  <section id="feedback-form">
    <div class="content-block b-r-16">
      <div class="form-content">
        <h3>
          Главные события ВДНХ <br />
          в еженедельной рассылке:
        </h3>
        <form v-if="!success" @submit.prevent="submit">
          <div class="row">
            <Input v-model="email" placeholder="Введите email" type="email" input-mode="email" :error="errors?.email" />
            <Button label="Отправить" type="small" color="red" />
          </div>
          <Checkbox
            v-model="accepted"
            label="Даю согласие на обработку персональных данных и соглашаюсь с политикой обработки персональных данных."
          />
        </form>
        <div v-else>
          <h4>Подписка успешно оформлена</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.content-block {
  padding: 35px 56px;
}
h3 {
  margin-bottom: 11px;
}
.form-content {
  max-width: 497px;
  form {
    width: 100%;
  }
  .row {
    display: flex;
    gap: 7px;
    margin-bottom: 11px;
    :deep(.form-group) {
      flex: 1;
    }
    :deep(.button) {
      width: 152px;
    }
  }
}
</style>
