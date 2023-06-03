<script setup>
    import ourAbout from "../components/ourAbout.vue"
    import ourTeam from "../components/ourTeam.vue"
    import ourfooter from "../components/ourFooter.vue"
</script>
<template>
   <main>
      <div class="main  ">
        <div class=" mx-auto h-[400px]  overflow-hidden">
             <img class="opacity-30 w-full" src="../assets/img/carousel-2.jpg" alt="">
        </div>
      </div>

      <ourAbout class="mt-10"/>

      <ourTeam/>
      
      <ourfooter/>
   </main>
    
</template>

<style scoped>
.main{
  /* background-image: url("../assets/img/carousel-2.jpg"); */
  background: black;
  background-size: cover;
}


@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>
