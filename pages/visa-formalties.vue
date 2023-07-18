<template>
    <div id="uzbekistan">
        <div class="infoMain">
            <div class="infoGrids">
                <div class="mid">
                    <p class="title">
                        {{ $t('visa.title') }}
                    </p>
                    <h5 style="margin-top: -10px;">
                        <b>
                            {{ $t('visa.text1') }}
                        </b>
                    </h5>
                    <br>
                    <div class="allText">
                        <p class="span1">
                            <span>
                                {{ $t('visa.text2') }}
                            </span>
                        </p>
                        <br>
                        <p class="span2">
                            <span>
                                {{ $t('visa.text3') }}
                            </span>
                        </p>
                        <br>
                        <p class="span2">
                            <span>
                                {{ $t('visa.text4') }}
                            </span>
                        </p>
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