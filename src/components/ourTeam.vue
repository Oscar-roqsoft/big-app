<script setup>
import { ref } from 'vue';
import teamData from '../assets/data/teamData.json'
const items = ref( teamData )
</script>
<template>
    <div class="min-h-[600px] max-w-[1200px] mx-auto p-6 bg-gray-200">
        
            <div class="text-center mx-auto mb-12 " style="max-width: 500px;">
                <p class="text-orange-400 uppercase mb-2">// Our Team</p>
                <h1 class="text-4xl text-black mb-4">We're Super Professional At Our Skills</h1>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                    <div class="team-item text-center rounded overflow-hidden" 
                    v-for="item in items" :key="item">
                        <img class="img-fluid" :src="`${item.img}`" alt="">
                        <div class="relative overflow-hidden h-[100px]">
                            <div class="team-title">
                                <h5>{{ item.fullname }}</h5>
                                <span>{{ item.work }}</span>
                            </div>
                            <div class="team-social">
                                <a class="btn  btn-light inline-flex  rounded-full " href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn  btn-light inline-flex  rounded-full " href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn  btn-light inline-flex  rounded-full" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                

            </div>
    
    </div>
</template>


<style scoped>
    .team-item .team-title {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(238, 221, 190);
    transition: .5s;
}

.team-item:hover .team-title {
    top: -100px;
}


.team-item .team-social {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 100px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: orange;
    transition: .5s;
}

.team-item .team-social .btn {
    margin: 0 3px;
}

.team-item:hover .team-social {
    top: 0;
}

</style>