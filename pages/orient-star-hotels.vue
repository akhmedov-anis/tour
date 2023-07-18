<template>
    <div id="uzbekistan">
        <div class="infoMain">
            <div class="infoGrids">
                <div class="mid">
                    <p class="title">
                        {{ $t('our_brands.Star_Hotels') }}
                    </p>
                    <br>
                    <div id="grid">
                        <a href="#" class="hotels" @click="$router.push(localePath('/tours'))">
                            <div class="item">
                                <div class="text">
                                    {{ $t('orientStarHotels.item1') }}
                                </div>
                                <div class="bottom">
                                    <span>
                                        <img src="~/static/icon/star.svg" v-for="item of 3" :key="item" alt="">
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="hotels" @click="$router.push(localePath('/tours'))">
                            <div class="item">
                                <div class="text">
                                    {{ $t('orientStarHotels.item2') }}
                                </div>
                                <div class="bottom">
                                    <span>
                                        <img src="~/static/icon/star.svg" v-for="item of 3" :key="item" alt="">
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="hotels" @click="$router.push(localePath('/tours'))">
                            <div class="item">
                                <div class="text">
                                    {{ $t('orientStarHotels.item3') }}
                                </div>
                                <div class="bottom">
                                    <span>
                                        <img src="~/static/icon/star.svg" v-for="item of 4" :key="item" alt="">
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <br>
                <br>
                <news />
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.photos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-auto-rows: 200px;
    gap: 10px;
}

.photos img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
}

.hotels:nth-child(1) {
    background-image: url(~/static/hotel/2.jpg) !important;
}

.hotels:nth-child(2) {
    background-image: url(~/static/hotel/5.jpg) !important;
}

.hotels:nth-child(3) {
    background-image: url(~/static/hotel/7.jpg) !important;
}
</style>