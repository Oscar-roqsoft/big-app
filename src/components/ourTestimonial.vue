<script setup>
// import { ref} from 'vue'
// import { Carousel, Pagination, Slide } from 'vue3-carousel'

// import 'vue3-carousel/dist/carousel.css'

// import testimonialData from '../assets/data/testimonialData.json'

// const items = ref( testimonialData )

import ourSlider from '../components/ourSlider.vue'
</script>



<template>
    <div class="bg-orange-100 min-h-[800px]  my-10 py-6 pb-0">
        <div class="max-w-[1200px] mx-auto px-3">
            <div class="text-center mx-auto mb-5 " style="max-width: 500px;">
                <p class="text-orange-400 uppercase mb-2">// Client's Review</p>
                <h1 class="text-3xl text-black mb-4">More Than 20000+ Customers Trusted Us</h1>
            </div>
            
            <ourSlider />

            <div class="bg-orange-200 text-white items-center  rounded-lg  my-6 mb-0 min-h-[200px] max-w-[90%] mx-auto">
                <div class="grid md:grid-cols-2 p-8 items-center">
                    <div class="">
                        <h1 class="text-3xl md:text-5xl text-black mb-2">Subscribe Our Newsletter</h1>
                    </div>
                    <div class=" md:text-end">
                        <div class="relative ">
                            <input class="border rounded-lg bg-transparent border-light w-full py-4 inline-flex  ps-4 pe-5" type="text" placeholder="Your email">
                            <button type="button" class="btn btn-dark py-2 px-3 absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

