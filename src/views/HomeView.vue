<script setup>
import { ref } from "vue"
import { defineComponent } from 'vue';
import { Carousel, Navigation, Pagination, Slide} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'

import carouselData from "../assets/data/carouselData.json"

import fourCard from "../components/fourCard.vue"
import ourAbout from "../components/ourAbout.vue"
import ourServicesVue from "../components/ourServices.vue";
import ourProduct from "../components/ourProduct.vue"
import ourTeam from "../components/ourTeam.vue"
import testimonial from "../components/ourTestimonial.vue"
import ourfooter from "../components/ourFooter.vue"

let lists = ref(carouselData)
</script>

<template id="home">
  <Carousel ref="carousel"  :wrap-around="true"  >
    <Slide v-for="slides in lists" :key="slides.id">
      <div class="main carousel__item relative h-[90vh] w-screen z-50 bg-black">

        <img class="img-fluid absolute top-0 left-0 h-[90vh]  md:h-[95vh] object-cover opacity-40" :src=" `${slides.img }`" alt="">
         
        <div class=" relative top-52 left-0 grid">
          <div class=" container flex flex-col items-center px-10 grid-cols-6">
            <p class="uppercase mb-2 text-orange-400">// The Best Bakery</p>
            <h1 class="text-4xl md:text-6xl mb-4 ">We Bake With Passion</h1>
            <p class="text-2xl md:text-4xl mb-4"> lVero elitr justo clita lorem. Ipsum dolor sed stet sit <br> diam rebum ipsum.</p>
            <a href="" class="btn py-3 px-5">Read More</a>
          </div>
        </div>
       

      </div>

      <div class="absolute top-[80vh] z-10">
        <button  @click="next">next</button>
        <input class="invisible" type="number" min="0" max="9"/>
        <button @click="prev">prev</button>
      </div>
   </Slide>
   <Navigation/>
   <Pagination/>
  </Carousel>
    
    <fourCard />
     
    <ourAbout/>

    <ourProduct/>

    <ourServicesVue/>
     
    <ourTeam/>

    <testimonial/>

    <ourfooter />

</template>

<style scoped>
*{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

img{
  width: 100%;
}

.container{
  max-width: 1200px;
  margin: 0px auto;
}

.carousel__track{
  transform-style: preserve-3d;
}
</style>