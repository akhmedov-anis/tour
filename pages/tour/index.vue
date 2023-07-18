<template>
    <div id="uzbekistan">
        <div class="infoMain">
            <div class="infoGrids">
                <div class="mid">
                    <div class="mainBox">
                        <div class="top">
                            <ul>
                                <li @click="whichShow = 1" :class="whichShow == 1 ? 'active' : ''">{{ $t('tourPage.title1')
                                }}</li>
                                <li @click="whichShow = 2" :class="whichShow == 2 ? 'active' : ''">{{ $t('tourPage.title2')
                                }}</li>
                                <li @click="whichShow = 3" :class="whichShow == 3 ? 'active' : ''">{{ $t('tourPage.title3')
                                }}</li>
                            </ul>
                            <div class="otherInfo">
                                <div>
                                    <p>Route:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <news />
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            whichShow: 1,
            arr: [
                {
                    mainTitle: {
                        en: 'en',
                        uz: 'uz',
                        ru: 'ru',
                    }, //require
                    days: 2, //require
                    allInfo: {
                        route: {
                            a1: 'samarkand',
                            a2: 'tashkent',
                            a3: 'bukhara',
                            a4: 'Navoi'
                        }, // require
                        duration: {
                            days: 3,
                            night: 2
                        }, // require
                        days: [
                            {
                                title: {
                                    en: 'en',
                                    uz: 'uz',
                                    ru: 'ru'
                                }, // require
                                description: {
                                    en: 'lorem',
                                    uz: 'lorem',
                                    ru: 'лорем'
                                }, // require
                                img: '',
                            }
                        ]
                    },
                    secondInfo: {
                        numPerson: [
                            {
                                num: 4,
                                price: 547
                            }
                        ], // require
                        singleRoom: {
                            en: 'lorem',
                            uz: 'lorem',
                            ru: 'лорем'
                        }, // require
                        hotels: [
                            {
                                title: {
                                    en: 'lorem',
                                    uz: 'lorem',
                                    ru: 'лорем'
                                },
                                place: {
                                    en: 'place',
                                    uz: 'place',
                                    ru: 'место'
                                },
                                night: '1+1'

                            }
                        ], // require
                        priceInclude: [
                            {
                                en: 'lorem',
                                uz: 'lorem',
                                ru: 'лорем'
                            },
                            {
                                en: 'lorem1',
                                uz: 'lorem1',
                                ru: 'лорем1'
                            },
                            {
                                en: 'lorem2',
                                uz: 'lorem2',
                                ru: 'лорем2'
                            }
                        ],
                        priceUnInclude: [
                            {
                                en: 'lorem',
                                uz: 'lorem',
                                ru: 'лорем'
                            },
                            {
                                en: 'lorem1',
                                uz: 'lorem1',
                                ru: 'лорем1'
                            },
                            {
                                en: 'lorem2',
                                uz: 'lorem2',
                                ru: 'лорем2'
                            }
                        ]
                    }
                },
                {
                    mainTitle: {
                        en: 'en',
                        uz: 'uz',
                        ru: 'ru',
                    }, //require
                    days: 2, //require
                    allInfo: {
                        route: {
                            a1: 'samarkand',
                            a2: 'tashkent',
                            a3: 'bukhara',
                            a4: 'Navoi'
                        }, // require
                        duration: {
                            days: 3,
                            night: 2
                        }, // require
                        days: [
                            {
                                title: {
                                    en: 'en',
                                    uz: 'uz',
                                    ru: 'ru'
                                }, // require
                                description: {
                                    en: 'lorem',
                                    uz: 'lorem',
                                    ru: 'лорем'
                                }, // require
                                img: '',
                            }
                        ]
                    },
                    secondInfo: {
                        numPerson: [
                            {
                                num: 4,
                                price: 547
                            }
                        ], // require
                        singleRoom: {
                            en: 'lorem',
                            uz: 'lorem',
                            ru: 'лорем'
                        }, // require
                        hotels: [
                            {
                                title: {
                                    en: 'lorem',
                                    uz: 'lorem',
                                    ru: 'лорем'
                                },
                                place: {
                                    en: 'place',
                                    uz: 'place',
                                    ru: 'место'
                                },
                                night: '1+1'

                            }
                        ], // require
                        priceInclude: [
                            {
                                en: 'lorem', 
                                uz: 'lorem',
                                ru: 'лорем'
                            },
                            {
                                en: 'lorem1',
                                uz: 'lorem1',
                                ru: 'лорем1'
                            },
                            {
                                en: 'lorem2',
                                uz: 'lorem2',
                                ru: 'лорем2'
                            }
                        ],
                        priceUnInclude: [
                            {
                                en: 'lorem',
                                uz: 'lorem',
                                ru: 'лорем'
                            },
                            {
                                en: 'lorem1',
                                uz: 'lorem1',
                                ru: 'лорем1'
                            },
                            {
                                en: 'lorem2',
                                uz: 'lorem2',
                                ru: 'лорем2' 
                            }
                        ]
                    }
                },
                {
                    mainTitle: {
                        en: 'en',
                        uz: 'uz',
                        ru: 'ru',
                    }, //require
                    days: 2, //require
                    allInfo: {
                        route: {
                            a1: 'samarkand',
                            a2: 'tashkent',
                            a3: 'bukhara',
                            a4: 'Navoi'
                        }, // require
                        duration: {
                            days: 3,
                            night: 2
                        }, // require
                        days: [
                            {
                                title: {
                                    en: 'en',
                                    uz: 'uz',
                                    ru: 'ru'
                                }, // require
                                description: {
                                    en: 'lorem',
                                    uz: 'lorem',
                                    ru: 'лорем'
                                }, // require
                                img: '',
                            }
                        ]
                    },
                    secondInfo: {
                        numPerson: [
                            {
                                num: 4,
                                price: 547
                            }
                        ], // require
                        singleRoom: {
                            en: 'lorem',
                            uz: 'lorem',
                            ru: 'лорем'
                        }, // require
                        hotels: [
                            {
                                title: {
                                    en: 'lorem',
                                    uz: 'lorem',
                                    ru: 'лорем'
                                },
                                place: {
                                    en: 'place',
                                    uz: 'place',
                                    ru: 'место'
                                },
                                night: '1+1'

                            }
                        ], // require
                        priceInclude: [
                            {
                                en: 'lorem',
                                uz: 'lorem',
                                ru: 'лорем'
                            },
                            {
                                en: 'lorem1',
                                uz: 'lorem1',
                                ru: 'лорем1'
                            },
                            {
                                en: 'lorem2',
                                uz: 'lorem2',
                                ru: 'лорем2'
                            }
                        ],
                        priceUnInclude: [
                            {
                                en: 'lorem',
                                uz: 'lorem',
                                ru: 'лорем'
                            },
                            {
                                en: 'lorem1',
                                uz: 'lorem1',
                                ru: 'лорем1'
                            },
                            {
                                en: 'lorem2',
                                uz: 'lorem2',
                                ru: 'лорем2'
                            }
                        ]
                    }
                }
            ]
        }
    }
}

</script>

<style></style>