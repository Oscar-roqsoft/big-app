<script setup>
import { ref} from 'vue'
import { Carousel, Pagination, Navigation, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

import testimonialData from '../assets/data/testimonialData.json'
 

const items = ref( testimonialData )

const settings= {
      itemsToShow: 1,
      
    }
const breakpoints = {
      // 700px and up
      700: {
        itemsToShow: 3,
        
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        
      },
    }
</script>

<template>

    <Carousel ref="carousel" v-bind="settings"
     :autoplay="2500" :wrapAround="true"
      :transition="500" :breakpoints = "breakpoints"
       class="max-w-[900px] mt-16 mx-auto h-400px">
            <Slide v-for="Slide in items" :key="Slide" class="max-w-full mx-auto">
                <div class="carousel__item testimonial-carousel">
                    <div class="testimonial-item   md:max-w-full mx-auto  rounded-2xl p-6 transition duration-[0.5s]">
                        <div class="flex items-start text-justify mb-4">
                            <img class="w-[60px] h-[60px] flex-shrink-0 rounded-full border border-orange-400 p-1" :src="`${Slide.img}`">
                            <div class="ms-4">
                                <h5 class="">{{ Slide.name }}</h5>
                                <span>{{ Slide.work }}</span>
                            </div>
                        </div>
                        <p class="mb-0 text-black">{{ Slide.article }}</p>
                    </div>   
                </div>
            </Slide>
             
           

            <template #addons>
                <navigation>
                     <template #prev>
                        <div class="nav">
                            <button @click="prev" class="  text-sm items-center opacity-[0.7]">
                            <i class="fas fa-chevron-left fa-2x"></i>
                            </button>
                        </div>
                     </template>
                     <template #next>
                        <div class="nav">
                            <button @click="next" class="  text-sm items-center opacity-[0.7]">
                            <i class="fas fa-chevron-right fa-2x"></i>
                            </button>
                        </div>
                     </template>
                    </navigation>
                <Pagination class="mt-11" />
            </template>
        </Carousel> 


</template>


<style scoped>
/* 
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}



.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
} */

.carousel__slide{
  background: white;
  border-radius: 10px;
}
.carousel__viewport {
  perspective: 2000px;
}

.carousel__slide--active {
    opacity: 1;
    margin: 0px 9px;
    background-color:rgb(241, 213, 160) !important;
}

</style>