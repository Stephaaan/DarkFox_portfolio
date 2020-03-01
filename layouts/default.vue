<template>
  <div class="flex flex-col justify-between h-screen">
    <Header />
    <div class="h-full bg-linear flex items-center">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
   components: {
     Header, Footer
   }
}
</script>
<style >
.bg-linear{
background: linear-gradient(180deg, #2A363B 0%, rgba(75, 84, 88, 0.5) 52.08%, rgba(42, 54, 59, 0) 100%), #2A363B;
}
</style>
