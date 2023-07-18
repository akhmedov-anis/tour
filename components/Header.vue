<template>
    <div id="viewport">
        <div class="container">
            <div id="header">
                <!-- <div id="mainHeader">
                    <div class="left">
                        <nuxt-link to="/"><img src="~/static/icon/home.png" alt=""></nuxt-link>
                        <nuxt-link to="/map"><img src="~/static/icon/map.png" alt=""></nuxt-link>
                        <nuxt-link to="/contacts"><img src="~/static/icon/mail.png" alt=""></nuxt-link>
                        <p>{{ $t('localTime') }}: {{ timeNow }}</p>
                    </div>
                    <div class="right">
                        <p>{{ $t('language') }}: </p>
                        <nuxt-link :to="switchLocalePath('en')">
                            <img src="~/static/united-kingdom.png" alt="">
                        </nuxt-link>
                        <nuxt-link :to="switchLocalePath('ru')">
                            <img src="~/static/russia.png" alt="">
                        </nuxt-link>
                        <nuxt-link :to="switchLocalePath('uz')">
                            <img src="~/static/uzbekistan.png" alt="">
                        </nuxt-link>
                    </div>
                </div> -->
            </div>
            <!-- <ul class="dropMenu">
                <li v-for="item of this.dataDropDown" :key="item.id" @mouseleave="showDropDown(true)" @mouseenter="showDropDown(false)" class="liDrop" :id="item.id" :class="item.isShow ? '' : 'active'">
                    <p class="text" >{{ item.title }}</p>
                    <div class="dropDown" :hidden="item.isShow">
                        <ul>
                            <li v-for="it of item.arr" :key="it">{{ it }} </li>
                        </ul>
                    </div>
                </li>
            </ul> -->

            <dropdown />

            <VueSlickCarousel class="carousel" ref="c1" :asNavFor="$refs.c2" :focusOnSelect="true">
                <div><img src="~/static/slider/0eb460f12a.jpg" alt=""></div>
                <div><img src="~/static/slider/7af3d96ef5.jpg" alt=""></div>
                <div><img src="~/static/slider/53d37d423f.jpg" alt=""></div>
                <div><img src="~/static/slider/54d946d47e.jpg" alt=""></div>
                <div><img src="~/static/slider/592cf39da1.jpg" alt=""></div>
                <div><img src="~/static/slider/634df9dfa5.jpg" alt=""></div>
                <div><img src="~/static/slider/142756a9f2.jpg" alt=""></div>
                <div><img src="~/static/slider/a8a2bfe3f3.jpg" alt=""></div>
                <div><img src="~/static/slider/ab0e9215c0.jpg" alt=""></div>
                <div><img src="~/static/slider/b345d4f8e9.jpg" alt=""></div>
                <div><img src="~/static/slider/b585fbb5ec.jpg" alt=""></div>
                <div><img src="~/static/slider/c77cd0f90e.jpg" alt=""></div>
                <div><img src="~/static/slider/d93afa1a00.jpg" alt=""></div>
                <div><img src="~/static/slider/e3af23820c.jpg" alt=""></div>
                <div><img src="~/static/slider/ea46b4a357.jpg" alt=""></div>
            </VueSlickCarousel>

            <VueSlickCarousel class="carousel2" ref="c2" :asNavFor="$refs.c1" :slidesToShow="valueCarousel"
                :focusOnSelect="true">
                <div><img src="~/static/slider/0eb460f12a.jpg" alt=""></div>
                <div><img src="~/static/slider/7af3d96ef5.jpg" alt=""></div>
                <div><img src="~/static/slider/53d37d423f.jpg" alt=""></div>
                <div><img src="~/static/slider/54d946d47e.jpg" alt=""></div>
                <div><img src="~/static/slider/592cf39da1.jpg" alt=""></div>
                <div><img src="~/static/slider/634df9dfa5.jpg" alt=""></div>
                <div><img src="~/static/slider/142756a9f2.jpg" alt=""></div>
                <div><img src="~/static/slider/a8a2bfe3f3.jpg" alt=""></div>
                <div><img src="~/static/slider/ab0e9215c0.jpg" alt=""></div>
                <div><img src="~/static/slider/b345d4f8e9.jpg" alt=""></div>
                <div><img src="~/static/slider/b585fbb5ec.jpg" alt=""></div>
                <div><img src="~/static/slider/c77cd0f90e.jpg" alt=""></div>
                <div><img src="~/static/slider/d93afa1a00.jpg" alt=""></div>
                <div><img src="~/static/slider/e3af23820c.jpg" alt=""></div>
                <div><img src="~/static/slider/ea46b4a357.jpg" alt=""></div>
            </VueSlickCarousel>
        </div>
    </div>
</template>
<!-- <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Dropdown</v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title>Item 1</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Item 2</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu> -->
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'Header',

    data() {
        return {
            timeNow: String,
            isShowDropDown: true,
            valueCarousel: 9,
            settings: {
                dots: false,
                dotsClass: "slick-dots custom-dot-class",
                edgeFriction: 0.35,
                lazyLoad: "ondemand",
                fade: true,
                speed: 500,
                slidesToScroll: 1,
                infinite: true
            },

        }
    },
    methods: {
        showDropDown() {
            this.isShowDropDown = false
            for (let item of this.dataDropDown) {
                if (event.target.id == item.id) {
                    item.isShow = false
                }
            }
        }
    },
    mounted() {
        let hour = new Date().getHours()
        let min = new Date().getMinutes()

        min = min.toString().length == 1 ? 0 + min.toString() : min

        let sec = new Date().getSeconds()
        let timeInt = (60 - sec) * 1000
        this.timeNow = hour.toString() + ':' + min.toString()

        const time = () => {
            setTimeout(() => {
                timeInt = 60000
                hour = new Date().getHours()
                min = new Date().getMinutes()
                if (min.toString().length < 1) {
                    console.log(min);
                }
                this.timeNow = hour.toString() + ':' + min.toString()
                time()
            }, timeInt)
        }
        time()

        if (process.client) {
            if (window.innerWidth <= 550) {
                this.valueCarousel = 6
            }
            if (window.innerWidth <= 450) {
                this.valueCarousel = 4
            }
        }
    },
    components: { VueSlickCarousel },

}
</script>

<style></style>

