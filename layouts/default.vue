<template>
    <div class="container">
        <div class="bg"></div>
        <!-- <div id="mainHeader">
            <div class="left">
                <nuxt-link to="/"><img src="~/static/icon/home.png" alt=""></nuxt-link>
                <nuxt-link to="/map"><img src="~/static/icon/map.png" alt=""></nuxt-link>
                <nuxt-link to="/contacts"><img src="~/static/icon/mail.png" alt=""></nuxt-link>
                <p>{{ $t('localTime') }}: {{ timeNow }}</p>
            </div>
            <div class="right">
                <p>{{ $t('language') }}: </p>
                
                
                
            </div>
        </div> -->
        <Menu />
        <Header />
        <Nuxt />
        <Footer />

        <VuePreloader background-color="#091a28" color="#ffffff" transition-type="fade-up" :loading-speed="25"
            :transition-speed="1400" @loading-is-over="loadingIsOver" @transition-is-over="transitionIsOver">
            <template v-slot="{ percent, color }">
                <transition name="loading-animation" mode="in-out">
                    <span v-if="showAnimation" :style="{ color }">
                        {{ percent }}
                    </span>
                </transition>
            </template>
        </VuePreloader>
    </div>
</template>

<script>

export default {
}
</script>

<style></style>