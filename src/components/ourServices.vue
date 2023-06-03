<template>
    <div class=" min-h-[600px]">
        <div class="max-w-[1200px] mx-auto">
            <div class="grid md:grid-cols-2 gap-10">
                <div class="p-6">
                    <p class="text-orange-500 text-lg uppercase mb-2">// Our Services</p>
                    <h1 class="text-black  mb-4">What Do We Offer For You?</h1>
                    <p class="mb-5 text-black ">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div class="grid grid-cols-2 gap-y-10 gap-x-8">
                        <div class="">
                            <div class="flex items-center mb-3">
                                <div class="flex-shrink-0 btn rounded-5xl me-5 ">
                                    <i class="fa fa-bread-slice text-white"></i>
                                </div>
                                <h5 class="mb-0 ">Quality Products</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div class="">
                            <div class="flex items-center mb-3">
                                <div class="flex-shrink-0 btn rounded-5xl me-5">
                                    <i class="fa fa-birthday-cake text-white"></i>
                                </div>
                                <h5 class="mb-0">Custom Products</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div class="">
                            <div class="flex items-center mb-3">
                                <div class="flex-shrink-0 btn rounded-5xl me-5">
                                    <i class="fa fa-cart-plus text-white"></i>
                                </div>
                                <h5 class="mb-0">Online Order</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div class="">
                            <div class="flex items-center mb-3">
                                <div class="flex-shrink-0 btn rounded-5xl me-5">
                                    <i class="fa fa-truck text-white"></i>
                                </div>
                                <h5 class="mb-0">Home Delivery</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <div class="grid grid-cols-2 gap-2 img-twice relative h-[440px] sm:mb-20">
                        <div class="md:w-52  ">
                            <img class="img-fluid border-2 border-orange-300 rounded-2xl w-full " src="../assets/img/service-1.jpg" alt="">
                        </div>
                        <div class="md:w-52 flex flex-col justify-end items-end">
                            <img class="img-fluid border-2 border-orange-300 rounded-2xl w-full" src="../assets/img/service-2.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.img-twice::before {
    position: absolute;
    content: "";
    width: 60%;
    height: 80%;
    top: 10%;
    left: 20%;
    background: rgb(18, 11, 210);
    border: 25px solid rgb(248, 231, 199);
    border-radius: 6px;
    z-index: -1;
}
</style>