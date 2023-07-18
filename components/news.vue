<template>
    <div class="news">
        <div class="top">
            <div class="title">
                <p>{{ $t('mainPage.gallery') }}</p>
                <img src="~/static/icon/polaroid.png" alt="">
            </div>
        </div>
        <div class="mid">
            <div class="img"></div>
        </div>
        <div class="bottom">
            <div class="up">
                <p>
                    {{ $t('mainPage.review') }}
                    <img src="~/static/icon/review.png" alt="">
                </p>

            </div>
            <div class="mid">
                {{ $t('mainPage.reviewBig') }}
                <br>
                <br>
                <nuxt-link to="/">{{ $t('mainPage.allReview') }}</nuxt-link>
            </div>
        </div>
        <!-- <div class="social" hidden>
            <img src="~/static/icon/faceic.png" alt="">
            <img src="~/static/icon/instaic.png" alt="">
            <img src="~/static/icon/pintic.png" alt="">
            <div class="like">
              <img src="~/static/icon/like.png" alt=""> Like
            </div>
            <nuxt-link to="/share">Share</nuxt-link>
          </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style></style>