<template>
  <div class="flex items-center h-[100vh] bg-[#FAFBFF]">
    <div class="h-full w-full max-w-[50%]">
      <img :src="require('@/assets/img/auth.jpg')" alt="" class=" object-cover h-full w-full">
    </div>
    <div class="p-[100px] w-full">
      <div class="logo mb-[30px]">
        <img :src="require('@/assets/img/logo.png')" alt="">
      </div>
      <div class="form-header mb-[30px]">
        <v-title title="Добро пожаловать!" level="h3" class="text-24xl text-grey-700 font-medium mb-[10px]"/>
        <p class="text-16sm text-grey-500">Войдите в свой аккаунт, чтобы продолжить</p>
      </div>
      <div class="form max-w-[594px] w-full">
        <div class="flex items-start justify-start flex-col mb-[20px]">
          <label for="userEmail" class="mb-[10px] text-16sm text-grey-700 font-medium">E-mail</label>
          <input type="email" class="rounded-[8px] border border-grey-300 bg-white py-[15px] px-[17px] w-full focus:border-indigo-600 text-16sm" id="userEmail" placeholder="Введите e-mail" v-model.trim="form.email" :class="$v.form.email.$error ? 'is-invalid' : ''"/>
        </div>
        <div class="mb-[20px]">
          <label class="mb-[10px] text-16sm text-grey-700 font-medium flex" for="userPassword">Пароль</label>
          <div class="relative">
            <input class="rounded-[8px] border border-grey-300 bg-white py-[15px] px-[17px] w-full focus:border-indigo-600 text-16sm" id="userPassword" placeholder="Введите пароль" :type="showPassword ? 'text' : 'password'" :class="$v.form.password.$error ? 'is-invalid' : ''" v-model.trim="form.password" />
            <div
              class="pass-icon"
              @click="showPassword = !showPassword">
              <global-icon 
                width="24"
                height="24"
                class="show-pass"
                color="#9CA3AF"
                :icon="showPassword ? 'tabler:eye-off' : 'tabler:eye'"
                :class="$v.form.password.$error ? 'is-hidden' : ''"
                />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between mb-[40px]">
          <div class="check-me">
            <input type="checkbox" id="saveMe">
            <label for="saveMe">Запомнить меня</label>
          </div>
          <div>
            <router-link to="/lost-password/" class="text-14sm text-indigo-600 font-medium hover:text-grey-400 duration-200">Забыли пароль?</router-link>
          </div>
        </div>
        <div>
          <button type="submit" class="w-full bg-indigo-600 text-white font-medium py-[13px] px-[20px] rounded-[8px]" @click.prevent="submit">Войти</button>
          <!-- <router-link to="/admin/" class="w-full flex items-center justify-center bg-indigo-600 text-white font-medium py-[13px] px-[20px] rounded-[8px]">Войти</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vTitle from '@/components/content/v-title.vue';
  // import axios from 'axios';
  import { validationMixin } from 'vuelidate';
  import { required, email, minLength } from 'vuelidate/lib/validators';
  
  export default {
    mixins: [validationMixin],
    components: {
      vTitle,
    },
    data() {
      return {
        showPassword: false,
        showIconPassword: true,
        cookieValue: '',
        form: [
          { 
            email: '',
            password: '',
            saveMe: false,
          },
        ]
      }
    },
    validations: {
      form: {
        email: {
          required,
          email
        },
        password: {
          minLength: minLength(8),
          required
        },
      }
    },
    methods: {
      async submit() {
        const formData = {
          email: this.form.email,
          password: this.form.password,
        }
        this.$store.dispatch('actionsAuth', formData)
      }
    }
  }
</script>

<style lang="scss" scoped>

input {
  outline: none!important;
}




.form {
  user-select: none;
}


.pass-icon {
  position: absolute;
  top: 55%;
  right: 17px;
  transform: translateY(-50%);
  cursor: pointer;
}

.check-me {
  position: relative;
  input {
    display: none;
    &:checked + label {
      &:after {
        opacity: 1;
        visibility: visible;
      }
      &:before {
        background-color: #4F46E5;
        border-color: #4F46E5;
      }
    }
  }

  label {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    font-size: 14px;
    &:before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      content: '';
      border: 1px solid #D1D5DB;
      border-radius: 5px;
      transition: all .2s ease;
    }
    &:after {
      background: url('https://api.iconify.design/tabler/check.svg?color=white&width=14&height=14') no-repeat center center / contain;
      width: 14px;
      height: 14px;
      content: '';
      position: absolute;
      top: 50%;
      left: 3px;
      transform: translateY(-50%);
      opacity: 0;
      visibility: hidden;
      transition: all .2s ease;
    }
  }
}
</style>