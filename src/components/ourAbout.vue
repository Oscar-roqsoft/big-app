<template>
    <main class=" w-full p-8">
        
        <div class="container">
            <div class="grid sm:grid-cols-1  md:grid-cols-2 gap-4  w-full">
                <div class="h-96 " >
                    <div class="grid grid-cols-2 gap-2 img-twice relative h-[440px] sm:mb-20">
                        <div class="md:w-52  ">
                            <img class="img-fluid border-2 border-orange-300 rounded-2xl w-full " src="../assets/img/about-1.jpg" alt="">
                        </div>
                        <div class="md:w-52 flex flex-col justify-end items-end">
                            <img class="img-fluid border-2 border-orange-300 rounded-2xl w-full" src="../assets/img/about-2.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="my-2">
                    <div class="h-100">
                        <p class="text-orange-300 text-2xl uppercase mb-2">// About Us</p>
                        <h1 class="text-black text-4xl mb-4">We Bake Every Item From The Core Of Our Hearts</h1>
                        <p class="text-gray-500 mb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p class="text-gray-500">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div class="grid  md:grid-cols-2 g-2 my-6">
                            <div class=" text-xl">
                                <i class="fa fa-check text-orange-400  me-2"></i>Quality Products
                            </div>
                            <div class="text-xl">
                                <i class="fa fa-check text-orange-400  me-2"></i>Custom Products
                            </div>
                            <div class="text-xl">
                                <i class="fa fa-check text-orange-400   me-2"></i>Online Order
                            </div>
                            <div class="text-xl">
                                <i class="fa fa-check  text-orange-400  me-2"></i>Home Delivery
                            </div>
                        </div>
                        <a class="btn py-3 px-5" href="">Read More</a>
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

.img-twice::before {
    position: absolute;
    content: "";
    width: 60%;
    height: 80%;
    top: 10%;
    left: 20%;
    background: orange;
    border: 25px solid rgb(248, 231, 199);
    border-radius: 6px;
    z-index: -1;
}
</style>