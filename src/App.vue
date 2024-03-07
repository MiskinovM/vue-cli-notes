<template>
  
  <div class="wrapper min-vh-100 d-flex flex-column justify-content-between position-relative">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>

</template>

<script>

import TheHeader from "@/components/TheHeader.vue";
import TheMain from "@/components/TheMain.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: 'App',
  components: {
    TheMain,
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      
    }
  }
}

</script>

<style>

</style>
