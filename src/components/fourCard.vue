<script setup>
import { onMounted, ref } from 'vue';
import fourCard from '../assets/data/fourCard.json'


const items = ref(fourCard)
const countvalue = ref(0)

const count = ()=>{
    if (countvalue.value !== items.number){
        countvalue.value ++
    }
}

onMounted(()=>{
    window.addEventListener("load",count)
})


</script>
<template>
    <div class="bg-white min-h-[500px] p-5 mb-5">

        <div class="container">

            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-24 mx-11 "  >
                
                    <div class="card bg-orange-400 border rounded-xl 
                    text-center min-h-[300px]  flex 
                    flex-col items-center justify-center 
                    text-2xl hover:-translate-y-3 hover:border-b-fuchsia-50
                     transition duration-150 ease-in-out hover:shadow-2xl" v-for="item in items" :key="item">
                        <i class=" fa-4x text-primary mb-4" :class="`${items.icon}`"></i>
                        <p class="mb-2  text-black">{{ item.article }}</p>
                        <h1 class="mb-0  text-black"  >{{ item.number }}</h1>
                    </div>

            </div>
        </div>

    </div>


</template>




<style scoped>
.container{
    max-width: 1200px;
    margin: 0px auto;
}
</style>