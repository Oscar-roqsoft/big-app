
<script setup>
import { ref,onMounted } from "vue"

const scrollP = ref(null)
const updateScroll = ()=>{
    scrollP.value = window.scrollY
}
const showMenu = ref(false)
const toggleNav = ()=>{
    showMenu.value = !showMenu.value
}

onMounted(()=> {
    window.addEventListener("scroll", updateScroll)
})
</script>

<template>
   <main class="fixed top-0 left-0 z-10 w-full transition" :class="{changeColor: scrollP  > 50}">

        <header class="container px-6 py-8    lg:flex lg:flex-row  text-white text-xl capitalize justify-between md:items-center">
            
            <nav class="flex items-center justify-between">

                <div class="text-3xl flex  justify-center">
                        <h2>oly<span class="text-orange-500 ">CAKE</span></h2>
                </div>
            
                <div class="lg:hidden border border-orange-500 inline-flex p-2 transition duration-100" @click="toggleNav">
                    <i class="fas fa-align-left " id="menu-icon"></i>
                </div>
            </nav>
            <div class=" bg-orange-500 lg:bg-transparent
            md:animate-none text-black md:text-white
             p-2 lg:border-none 
            border rounded-xl flex-col 
            mt-5 space-y-4 md:space-y-0 
            lg:flex lg:flex-row lg:items-center 
            lg:space-x-8 lg:mt-0" :class="showMenu ? 'flex': 'hidden'">
                    <router-link class=" py-1 md:block items-center " activeClass="text-blue-500 " to="/">
                        <i class="fa fa-home px-2 md:hidden"></i>
                        <span>home</span>
                    </router-link>
                    <router-link to="/about" activeClass="text-blue-500">
                        <i class="fa fa-user px-2 md:hidden"></i>
                        <span>about</span>
                    </router-link>
                    <router-link class="md:px-3  py-1" activeClass="text-blue-500" to="/services">
                        <i class="fa fa-pen-nib  px-2 md:hidden"></i>
                        <span>services</span>
                    </router-link>
                    <router-link class=" " to="/product" activeClass="text-blue-500">
                        <i class="fa fa-snowflake  px-2 md:hidden"></i>
                        <span>product</span>
                    </router-link>
                    <router-link class=" py-1" activeClass="text-blue-500" to="/pages">
                        <i class="fa fa-folder px-2 md:hidden"></i>
                        <span>pages</span>
                    </router-link>
                    <router-link to="/contact" activeClass="text-blue-500">
                        <i class="fa fa-phone px-2 md:hidden"></i>
                        <span>contact</span>
                    </router-link>
               <div class="flex">
                    <div class="p-2  border-2 border-light border-blue-500 md:border-orange-400 inline-flex rounded-full items-center">
                            <i class="fa fa-phone text-blue-500"></i>
                        </div>
                    <div class="ps-2">
                        <small class="text-sm mb-0 ">Call Us</small>
                        <p class="text-sm ">+234 345 6789</p>
                    </div>
               </div>
            </div>

        </header>
    
    </main>
</template>

<style scoped>
 .container{
    max-width: 1200px;
    margin: 0px auto;
 }

 .align-center{
    align-items: center;
 }

 .changeColor{
    background-color: black;
 }
</style>