<script setup >
  import ourfooter from "../components/ourFooter.vue"
  import ourProduct from "../components/ourProduct.vue"
 
</script>

<template>
      <div class="main  ">
        <div class=" mx-auto h-[400px]  overflow-hidden">
             <img class="opacity-30 w-full" src="../assets/img/carousel-2.jpg" alt="">
        </div>
      </div>

      <ourProduct class="mt-0"/>
      
      
      <ourfooter/>
</template>



<style scoped>
  .main{
  background: black;
  background-size: cover;
}
</style>