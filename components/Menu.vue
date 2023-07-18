<template>
    <div id="Menu">
        <div class="main">
            <div class="first" @click="isOpen = !isOpen">
                <img src="~/static/icon/x.svg" v-if="isOpen">
                <img src="~/static/icon/menu.svg" v-else>
            </div>
            <ul v-if="isOpen" :class="isOpen ? 'active' : ''">
                <li class="rus">
                    <nuxt-link :to="switchLocalePath('ru')">
                        <img src="~/static/russia.png" alt="">
                    </nuxt-link>
                </li>
                <nuxt-link :to="switchLocalePath('uz')">
                    <li class="uz">
                        <img src="~/static/uzbekistan.png" alt="">
                    </li>
                </nuxt-link>
                <nuxt-link :to="switchLocalePath('en')">
                    <li class="eng">
                        <img src="~/static/united-kingdom.png" alt="">
                    </li>
                </nuxt-link>
                <nuxt-link to="/">
                    <li class="home">
                        <img src="~/static/icon/home.svg" alt="">
                    </li>
                </nuxt-link>
                <nuxt-link to="">
                    <li class="map">
                        <img src="~/static/icon/map-pin.svg" alt="">
                    </li>
                </nuxt-link>
                <nuxt-link to="/contacts">
                    <li class="contacts">
                        <img src="~/static/icon/phone.svg" alt="">
                    </li>
                </nuxt-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    }
}
</script>

<style></style>