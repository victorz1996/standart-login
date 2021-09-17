<template>
  <v-container>
    <Login />
  </v-container>
</template>
<script>
import Login from '@/components/login/login.vue'
export default {
  name: 'LoginPage',
  components: {
    Login,
  },
  layout: 'login',
}
</script>
