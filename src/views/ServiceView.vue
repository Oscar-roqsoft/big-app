<script setup>
  import ourfooter from "../components/ourFooter.vue"
  import fourCard from "../components/fourCard.vue"
  import ourServicesVue from "../components/ourServices.vue";
</script>

<template>
      <div class="main  ">
        <div class=" mx-auto h-[400px]  overflow-hidden">
             <img class="opacity-30 w-full" src="../assets/img/carousel-2.jpg" alt="">
        </div>
      </div>

      <fourCard />
      
      <ourServicesVue/>

      <ourfooter/>
</template>



<style scoped>
  .main{
  background: black;
  background-size: cover;
}
</style>