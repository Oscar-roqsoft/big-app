<script setup>
import { ref } from 'vue';
import productData from "../assets/data/productData.json"

 const items = ref(productData)


</script>
<template>
   <main class=" bg-orange-100 my-12 min-h-[1000px] ">
       <div class="max-w-[1200px] mx-auto">
            <div class=  "bg-orange-400 w-4/5 md:w-2/3 mx-auto text-gray-100 rounded-b-2xl p-10 md:p-12 my-6 mt-0">
                <div class="grid grid-rows-2 gap-4 text-start">
                    <div class="">
                        <h1 class="text-2xl md:text-5xl text-gray-100  mb-0 ">The Best Bakery In Your City</h1>
                    </div>

                    <div class=" text-start">
                        <div class="inline-flex  items-center text-start">
                            <i class="fa fa-phone-alt md:fa-4x fa-2x flex-shrink-0"></i>
                            <div class="ms-4">
                                <p class="md:text-2xl font-bold mb-0">Call Us</p>
                                <p class="md:text-4xl font-bold mb-0">+234 345 6789</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="text-center mx-auto my-16 p-6" style="max-width: 500px;">
                <p class="text-orange-400 text-2xl uppercase mb-2">// Bakery Products</p>
                <h1 class="text-4xl mb-4 text-black">Explore The Categories Of Our Bakery Products</h1>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
            
                <div class="product-item flex flex-col
                    bg-white rounded-lg overflow-hidden"
                    v-for="item in items" :key="item">
                    <div class="text-center p-8">
                        <div class="inline-block border border-orange-300 rounded px-3 mb-3">{{ item.price }}</div>
                        <h3 class="mb-2 text-lg font-semibold">{{ item.name }}</h3>
                        <span class="">{{ item.article }}</span>
                    </div>
                    <div class="relative mt-auto">
                        <img class="img-fluid w-full object-cover" :src="`${item.img}`" alt="">
                        <div class="product-overlay">
                            <a class="btn outline-none rounded-full" href=""><i class="fa fa-eye text-primary"></i></a>
                        </div>
                    </div>
                </div>
            </div> 
       </div>      
   </main>
</template>

<style scoped>
.container{
    max-width: 1200px;
    margin: 0px auto;
}

.product-item .product-overlay {
    position: absolute;
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .5);
    overflow: hidden;
    opacity: 0;
    transition: .5s;
}
.product-item {
    transition: .5s;
}

.product-item:hover {
    background: orange !important;
}

.product-item:hover * {
    color: white;
}

.product-item:hover .border-primary {
    border-color: white !important;
}

.product-item:hover .product-overlay {
    height: 100%;
    opacity: 1;
    
}
</style>