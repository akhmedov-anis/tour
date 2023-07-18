<template>
    <div id="Footer">
        <div class="lines">
            <div class="one"></div>
            <div class="two"></div>
        </div>
        <div class="grids">
            <div class="item">
                <a href="#" @click="$router.push(localePath('/uzbekistan'))">
                    <div class="title"> {{ $t("uzbekistan.title") }}</div>
                </a>
                <ul>
                    <a href="#" @click="$router.push(localePath('/uzbekistan/country'))">
                        <li>{{ $t("uzbekistan.country") }}</li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/uzbekistan/culture'))">
                        <li>{{ $t("uzbekistan.culture") }}</li>
                    </a>
                    <!-- <a href="#" @click="$router.push(localePath('/uzbekistan/cities'))">
                        <li>{{ $t("uzbekistan.cities") }}</li>
                    </a> -->
                </ul>
            </div>
            <div class="item">
                <a href="#" @click="$router.push(localePath('/tours'))">
                    <div class="title"> {{ $t("tours.title") }}</div>
                </a>
                <ul>
                    <a href="#" @click="$router.push(localePath('/tours/guaranteed-departures-2023'))">
                        <li>{{ $t("tours.departures") }}</li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/tours/cultural-tours'))">
                        <li>{{ $t("tours.cultural_tours") }}</li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/tours/adventure-tours'))">
                        <li>{{ $t("tours.adventure_tours") }}</li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/tours/combined-tours-along-central-asia-and-Iran'))">
                        <li>{{ $t("tours.combined_tours") }}</li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/tours/short-tours-and-extensions'))">
                        <li>{{ $t("tours.short_tours") }}</li>
                    </a>
                </ul>
            </div>
            <div class="item">
                <a href="#" @click="$router.push(localePath('/our_brands'))">
                    <div class="title">
                        {{ $t("our_brands.title") }}
                    </div>
                </a>
                <ul>
                    <a href="#" @click="$router.push(localePath('/our_brands/orient-bus'))">
                        <li>
                            {{ $t("our_brands.Orient_bus") }}
                        </li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/our_brands/orient-star-hotels'))">
                        <li>
                            {{ $t('our_brands.Star_Hotels') }}
                        </li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/our_brands/cities'))">
                        <li>
                            {{ $t('our_brands.cities') }}
                        </li>
                    </a>
                </ul>
            </div>
            <div class="item">
                <a href="#" @click="$router.push(localePath('/central-asia'))">
                    <div class="title">
                        {{ $t("central_asia.title") }}
                    </div>
                </a>
                <ul>
                    <a href="#" @click="$router.push(localePath('/central-asia'))">
                        <li>
                            {{ $t("central_asia.Kazakhstan") }}
                        </li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/Tajikistan'))">
                        <li>
                            {{ $t('central_asia.Tajikistan') }}
                        </li>
                    </a>
                    <div @click="$router.push(localePath('/kyrgyzstan'))">
                        <li>
                            {{ $t('central_asia.Kyrgyzstan') }}
                        </li>
                    </div>
                    <a href="#" @click="$router.push(localePath('/Turkmenistan'))">
                        <li>
                            {{ $t('central_asia.Turkmeniston') }}
                        </li>
                    </a>
                    <a href="#"
                        @click="$router.push(localePath('/the-history-of-the-peoples-of-central-asia'))">
                        <li>
                            {{ $t('central_asia.The_history') }}
                        </li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/the-great-silk-road'))">
                        <li>
                            {{ $t('central_asia.The_Great') }}
                        </li>
                    </a>
                </ul>
            </div>
            <div class="item">
                <a href="#" @click="$router.push(localePath('/services'))">
                    <div class="title">
                        {{ $t("services.title") }}
                    </div>
                </a>
                <ul>
                    <a href="#" @click="$router.push(localePath('/visa-formalties'))">
                        <li>
                            {{ $t("services.visa_formalities") }}
                        </li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/uzbekistan-airways'))">
                        <li>
                            {{ $t('services.uzbekistan_airways') }}
                        </li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/uzrailpass'))">
                        <li>
                            {{ $t('services.Uzrailpass') }}
                        </li>
                    </a>
                </ul>
            </div>
            <div class="item">
                <a href="#" @click="$router.push(localePath('/about-us'))">
                    <div class="title">
                        {{ $t("about_us.title") }}
                    </div>
                </a>
                <ul>
                    <a href="#" @click="$router.push(localePath('/company'))">
                        <li>
                            {{ $t("about_us.Company") }}
                        </li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/review'))">
                        <li>
                            {{ $t('about_us.Review') }}
                        </li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/gallery'))">
                        <li>
                            {{ $t("useful.Gallery") }}
                        </li>
                    </a>
                    <a href="#" @click="$router.push(localePath('/contacts'))">
                        <li>
                            {{ $t('about_us.Contacts') }}
                        </li>
                    </a>
                </ul>
            </div>
        </div>

        <hr>

        <p class="naming">NAMKO 2011-2023</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataDropDown: [
                {
                    title: "Uzbekistan",
                    arr: ["Country", "Culture", "Cities"]
                },
                {
                    title: "Tours",
                    arr: ["Guaranteed departures 2023", "Cultural tours", "Adventure tours", "Combined tours along Central Asia & Iran", "Short tours & extensions"]
                },
                {
                    title: "Our brands",
                    arr: ["Orient Bus", "Orient Star Hotels", "Cities"]
                },
                {
                    title: "Central Asia",
                    arr: ["Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "The history of the peoples of Central Asia", "The Great Silk Road"]
                },
                {
                    title: "Services",
                    arr: ["Visa formalities", "Uzbekistan Airways", "Uzrailpass", "Uzrailpass"]
                },
                {
                    title: "Useful",
                    arr: ["Covid-19", "Gallery"]
                },
                {
                    title: "About Us",
                    arr: ["Company", "Review", "Contacts"]
                }
            ]
        }
    }
}
</script>

<style></style>