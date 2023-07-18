<template>
    <div id="uzbekistan">
        <div class="infoMain">
            <div class="infoGrids">
                <div class="mid">
                    <p class="title">
                        {{ $t('centralAsia.history.title') }}
                    </p>
                    <br>
                    <br>
                    <div class="allText">
                        <p class="mainTitle">
                            {{ $t('centralAsia.history.text.title') }}
                        </p>
                        <br>
                        <p class="span1">
                            <span>
                                {{ $t('centralAsia.history.text.text1') }}
                            </span>
                        </p>
                        <br>
                        <p class="span2">
                            <span>
                                {{ $t('centralAsia.history.text.text2') }}
                            </span>
                        </p>
                        <br>
                        <p class="span3">
                            <span>
                                {{ $t('centralAsia.history.text.text3') }}
                            </span>
                        </p>
                        <br>
                        <p class="span4">
                            <span>
                                {{ $t('centralAsia.history.text.text4') }}
                            </span>
                        </p>
                        <br>
                        <p class="span5">
                            <span>
                                {{ $t('centralAsia.history.text.text5') }}
                            </span>
                        </p>
                        <br>
                        <p class="span6">
                            <span>
                                {{ $t('centralAsia.history.text.text6') }}
                            </span>
                        </p>
                        <br>
                        <p class="span7">
                            <span>
                                {{ $t('centralAsia.history.text.text7') }}
                            </span>
                        </p>
                        <br>
                        <p class="span8">
                            <span>
                                {{ $t('centralAsia.history.text.text8') }}
                            </span>
                        </p>
                        <br>
                        <p class="span9">
                            <span>
                                {{ $t('centralAsia.history.text.text9') }}
                            </span>
                        </p>
                        <br>
                        <p class="span10">
                            <span>
                                {{ $t('centralAsia.history.text.text10') }}
                            </span>
                        </p>
                        <br>
                        <p class="span11">
                            <span>
                                {{ $t('centralAsia.history.text.text11') }}
                            </span>
                        </p>
                        <br>
                        <p class="span12">
                            <span>
                                {{ $t('centralAsia.history.text.text12') }}
                            </span>
                        </p>
                        <br>
                        <p class="span13">
                            <span>
                                {{ $t('centralAsia.history.text.text13') }}
                            </span>
                        </p>
                        <br>
                        <p class="span14">
                            <span>
                                {{ $t('centralAsia.history.text.text14') }}
                            </span>
                        </p>
                        <br>
                        <p class="span15">
                            <span>
                                {{ $t('centralAsia.history.text.text15') }}
                            </span>
                        </p>
                        <br>
                        <p class="span16">
                            <span>
                                {{ $t('centralAsia.history.text.text16') }}
                            </span>
                        </p>
                        <br>
                        <p class="span17">
                            <span>
                                {{ $t('centralAsia.history.text.text17') }}
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