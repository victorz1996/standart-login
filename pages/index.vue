<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Home />
    </v-col>
  </v-row>
</template>
<script>
import Home from '@/components/home/home.vue'
export default {
  name: 'HomePage',
  components: {
    Home,
  },
}
</script>
