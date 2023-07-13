<template>
  <div class="login-view">
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: "LoginView",
  components:{
    LoginForm
  }
}
</script>

<style scoped>
.login-view {
  background-color: #4f74c4;
}
</style>
