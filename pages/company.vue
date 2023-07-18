<template>
    <div id="uzbekistan">
        <div class="infoMain">
            <div class="infoGrids">
                <div class="mid">
                    <p class="title">
                        {{ $t('aboutCompany.title') }}
                    </p>
                    <br>
                    <img src="~/static/icon/logo.png" width="300px" height="300px" class="" alt="">
                    <br>
                    <div class="allText">
                        <p class="span1">
                            <span>
                                {{ $t('aboutCompany.text1') }}
                            </span>
                        </p>
                        <br>
                        <p class="span1">
                            <span>
                                {{ $t('aboutCompany.text2') }}
                            </span>
                        </p>
                        <br>
                        <p class="span1">
                            <span>
                                {{ $t('aboutCompany.text3') }}
                            </span>
                        </p>
                        <br>
                        <p class="span1">
                            <span>
                                {{ $t('aboutCompany.text4') }}
                            </span>
                        </p>
                        <br>
                        <p class="span1">
                            <span>
                                {{ $t('aboutCompany.text5') }}
                            </span>
                        </p>
                        <br>
                        <p class="span1">
                            <span>
                                {{ $t('aboutCompany.text6') }}
                            </span>
                        </p>
                        <br>
                        <p class="span1">
                            <span>
                                {{ $t('aboutCompany.text7') }}
                            </span>
                        </p>
                        <br>
                        <p class="span1">
                            <span>
                                {{ $t('aboutCompany.text8') }}
                            </span>
                        </p>
                        <br>
                        <p class="span1">
                            <span>
                                {{ $t('aboutCompany.text9') }}
                            </span>
                        </p>
                        <br>
                        <p class="span1">
                            <span>
                                {{ $t('aboutCompany.text10') }}
                            </span>
                        </p>
                        <br>
                        <p class="span1">
                            <b>
                                {{ $t('aboutCompany.text11') }}
                            </b>
                        </p>
                        <br>
                        <p class="span1">
                            <span>
                                {{ $t('aboutCompany.text12') }}
                            </span>
                        </p>
                        <br>
                        <img src="~/static/company/images.jpg" class="firstImg" alt="">
                        <br>

                    </div>
                </div>
            </div>
            <news />
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
</style>