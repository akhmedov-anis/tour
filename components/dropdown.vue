<template>
    <div id="dropdown">
        <nav>
            <ul>
                <li class="liDrop">
                    <span>
                        {{ $t("uzbekistan.title") }}
                    </span>
                    <ul>
                        <a href="#" @click="$router.push(localePath('/country'))">
                            <li>
                                {{ $t("uzbekistan.country") }}
                            </li>
                        </a>
                        <a href="#" @click="$router.push(localePath('/culture'))">
                            <li>
                                {{ $t('uzbekistan.culture') }}
                            </li>
                        </a>
                        <!-- <a  @click="$router.push(localePath(/cities">
                            <li>
                                {{ $t('uzbekistan.cities') }}
                            </li>
                        </a > -->
                    </ul>
                </li>
                <li class="liDrop">
                    <span>
                        <a href="#" @click="$router.push(localePath('/tour'))">
                            {{ $t("tours.title") }}
                        </a>
                    </span>
                    <ul>
                        <li>
                            <a href="#" @click="$router.push(localePath('/guaranteed-departures-2023'))">
                                {{ $t("tours.departures") }}
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="$router.push(localePath('/cultural-tours'))">
                                {{ $t('tours.cultural_tours') }}
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="$router.push(localePath('/adventure-tours'))">
                                {{ $t('tours.adventure_tours') }}
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="$router.push(localePath('/combined-tours-along-central-asia-and-Iran'))">
                                {{ $t('tours.combined_tours') }}
                            </a>
                        </li>
                        <li>
                            <a @click="$router.push(localePath('/short-tours-and-extensions'))">
                                {{ $t('tours.short_tours') }}
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="liDrop">
                    <span>
                        {{ $t("our_brands.title") }}
                    </span>
                    <ul>
                        <a href="#" @click="$router.push(localePath('/orient-bus'))">
                            <li>
                                {{ $t("our_brands.Orient_bus") }}
                            </li>
                        </a>
                        <a href="#" @click="$router.push(localePath('/orient-star-hotels'))">
                            <li>
                                {{ $t('our_brands.Star_Hotels') }}
                            </li>
                        </a>
                    </ul>
                </li>
                <li class="liDrop">
                    <span>
                        {{ $t("central_asia.title") }}
                    </span>
                    <ul>
                        <div @click="$router.push(localePath('/Kazakhstan'))">
                            <li>
                                {{ $t("central_asia.Kazakhstan") }}
                            </li>
                        </div>
                        <div @click="$router.push(localePath('/kyrgyzstan'))">
                            <li>
                                {{ $t('central_asia.Kyrgyzstan') }}
                            </li>
                        </div>
                        <div @click="$router.push(localePath('/Tajikistan'))">
                            <li>
                                {{ $t('central_asia.Tajikistan') }}
                            </li>
                        </div>
                        <div @click="$router.push(localePath('/Turkmenistan'))">
                            <li>
                                {{ $t('central_asia.Turkmeniston') }}
                            </li>
                        </div>
                        <div @click="$router.push(localePath('/the-history-of-the-peoples-of-central-asia'))">
                            <li>
                                {{ $t('central_asia.The_history') }}
                            </li>
                        </div>
                        <div @click="$router.push(localePath('/the-great-silk-road'))">
                            <li>
                                {{ $t('central_asia.The_Great') }}
                            </li>
                        </div>
                    </ul>
                </li>
                <!-- <li class="liDrop">
                    <a  @click="$router.push(localePath(services">
                        {{ $t("services.title") }}
                    </a >
                    <ul>
                        <a  @click="$router.push(localePath(/visa-formalties">
                            <li>
                                {{ $t("services.visa_formalities") }}
                            </li>
                        </a >
                        <a  @click="$router.push(localePath(/uzbekistan-airways">
                            <li>
                                {{ $t('services.uzbekistan_airways') }}
                            </li>
                        </a >
                        <a  @click="$router.push(localePath(/uzrailpass">
                            <li>
                                {{ $t('services.Uzrailpass') }}
                            </li>
                        </a >
                    </ul>
                </li> -->
                <li class="liDrop">
                    <span>
                        {{ $t("services.title") }}
                    </span>
                    <ul>
                        <a href="#" @click="$router.push(localePath('/visa-formalties'))">
                            <li>
                                {{ $t("services.visa_formalities") }}
                            </li>
                        </a>
                        <a href="#" @click="$router.push(localePath('/uzbekistan-airways'))">
                            <li>
                                {{ $t("services.uzbekistan_airways") }}
                            </li>
                        </a>
                        <a href="#" @click="$router.push(localePath('/uzrailpass'))">
                            <li>
                                {{ $t('services.Uzrailpass') }}
                            </li>
                        </a>
                    </ul>
                </li>
                <li class="liDrop">
                    <span>
                        {{ $t("about_us.title") }}
                    </span>
                    <ul>
                        <a href="#" @click="$router.push(localePath('/gallery'))">
                            <li>
                                {{ $t("useful.Gallery") }}
                            </li>
                        </a>
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
                        <a href="#" @click="$router.push(localePath('/contacts'))">
                            <li>
                                {{ $t('about_us.Contacts') }}
                            </li>
                        </a>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    data() {
        return {
            dataDropDown: [
                {
                    title: "Uzbekistan",
                    path: "uzbekistan",
                    arr: [
                        {
                            name: "Country",
                            path: 'country'
                        },
                        {
                            name: "Culture",
                            path: 'culture'
                        },
                        {
                            name: "Cities",
                            path: 'cities'
                        }
                    ]
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
                    arr: ["Visa formalities", "Uzbekistan Airways", "Uzrailpass"]
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
    },
    mounted() {
        for (let item of this.dataDropDown) {
            console.log(item.arr);
            item.isOpen = false
            item.id = Math.random().toString().split('.')[1]
        }
    }
}
</script>

<style>
nav {
    width: 100%;
    display: flex;
}

.liDrop {
    padding: 5px 20px;
}

nav ul {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #293642;
    list-style-type: none;
}

nav ul ul {
    display: none;
    position: absolute;
    left: 0;
}

nav ul li:hover>ul {
    display: inherit;
}



nav ul ul ul li {
    position: relative;
    top: -60px;
    left: 170px;
}

nav ul ul li {
    padding: 10px;
}

ul ul li:hover {
    cursor: pointer;
    color: black;
    background: rgb(209, 230, 255);
}
</style>