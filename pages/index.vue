<template>
  <div id="app">
    <div class="bg"></div>
    <div class="container">

      <div class="infoMain">
        <div class="infoGrids">
          <div class="top">
            <p>{{ $t('mainPage.popularTours') }}</p>
            <div>
              <p>{{ $t('mainPage.allTours') }}</p>
            </div>
          </div>

          <div class="mid">
            <div id="grid">
              <nuxt-link to="tours">
                <div class="item">
                  <div class="text">
                    {{ $t('toursMain.tour1.title') }}
                  </div>
                  <div class="bottom">
                    <span>
                      {{ $t('toursMain.tour1.days') }}
                    </span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="tours">
                <div class="item">
                  <div class="text">
                    {{ $t('toursMain.tour2.title') }}
                  </div>
                  <div class="bottom">
                    <span>
                      {{ $t('toursMain.tour2.days') }}
                    </span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="tours">
                <div class="item">
                  <div class="text">
                    {{ $t('toursMain.tour3.title') }}
                  </div>
                  <div class="bottom">
                    <span>
                      {{ $t('toursMain.tour3.days') }}
                    </span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="tours">
                <div class="item">
                  <div class="text">
                    {{ $t('toursMain.tour4.title') }}
                  </div>
                  <div class="bottom">
                    <span>
                      {{ $t('toursMain.tour4.days') }}
                    </span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="tours">
                <div class="item">
                  <div class="text">
                    {{ $t('toursMain.tour5.title') }}
                  </div>
                  <div class="bottom">
                    <span>
                      {{ $t('toursMain.tour5.days') }}
                    </span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="tours">
                <div class="item">
                  <div class="text">
                    {{ $t('toursMain.tour6.title') }}
                  </div>
                  <div class="bottom">
                    <span>
                      {{ $t('toursMain.tour6.days') }}
                    </span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="tours">
                <div class="item">
                  <div class="text">
                    {{ $t('toursMain.tour7.title') }}
                  </div>
                  <div class="bottom">
                    <span>
                      {{ $t('toursMain.tour7.days') }}
                    </span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="tours">
                <div class="item">
                  <div class="text">
                    {{ $t('toursMain.tour8.title') }}
                  </div>
                  <div class="bottom">
                    <span>
                      {{ $t('toursMain.tour8.days') }}
                    </span>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="tours">
                <div class="item">
                  <div class="text">
                    {{ $t('toursMain.tour9.title') }}
                  </div>
                  <div class="bottom">
                    <span>
                      {{ $t('toursMain.tour9.days') }}
                    </span>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>

        <news />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      arr: [
        {
          title: 'title',
          days: "days",
          path: "tours1",
          img: '483.jpg'
        },
        {
          title: 'title',
          days: "days",
          path: "tours2",
          img: '484.jpg'
        },
        {
          title: 'title',
          days: "days",
          path: "tours3",
          img: '499.jpg'
        },
        {
          title: 'title',
          days: "days",
          path: "tours4",
          img: '514.jpg'
        },
        {
          title: 'title',
          days: "days",
          path: "tours5",
          img: '500.jpg'
        },
        {
          title: 'title',
          days: "days",
          path: "tours6",
          img: '213.jpg'
        },
        {
          title: 'title',
          days: "days",
          path: "tours7",
          img: '402.jpg'
        },
        {
          title: 'title',
          days: "days",
          path: "tours3",
          img: '400.jpg'
        },
        {
          title: 'title',
          days: "days",
          path: "tours3",
          img: '45.jpg'
        },
      ]
    }
  }
}
</script>
