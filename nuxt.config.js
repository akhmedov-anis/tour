export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tour orient & Travel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/static/icon/logo.png' }
    ]
  },

  router: {
    middleware: ['redirect']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  target: 'static',

  ssr: false,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: ['uz', 'en', 'ru'],
    parsePages: false,
    defaultLocale: 'uz',
    vueI18n: {
      fallbackLocale: 'uz',
      messages: {
        en: {
          localTime: 'Local time',
          language: 'Language',
          welcome: 'Welcome',
          contactUs: 'Contact us',
          request: {
            name: 'Initials',
            email: 'Email',
            phone: 'Phone',
            date: 'Dates',
            rezident: 'Citizenship',
            value: 'Adults',
            disc: 'Your message',
            send: 'Send'
          },
          uzbekistan: {
            title: 'Uzbekistan',
            country: 'Country',
            culture: 'Culture',
            cities: 'Cities',
            Tashkent: 'Tashkent',
            Samarkand: 'Samarkand',
            Bukhara: 'Bukhara',
            Khorezm: 'Khorezm',
            Shakhrisabz: 'Shakhrisabz',
            Karakalpakstan: 'Karakalpakstan',
            Termez: 'Termez',
            Fergana: 'Fergana',
          },
          tours: {
            title: 'Tours',
            departures: 'Guaranteed departures 2023',
            cultural_tours: 'Cultural tours',
            adventure_tours: 'Adventure tours',
            combined_tours: 'Combined tours along Central Asia & Iran',
            short_tours: 'Short tours & extensions',
          },
          our_brands: {
            title: 'Our brands',
            Orient_bus: 'Orient bus',
            Star_Hotels: 'Orient Star Hotels',
            cities: 'cities',
          },
          central_asia: {
            title: 'Central Asia',
            Kazakhstan: 'Kazakhstan',
            Kyrgyzstan: 'Kyrgyzstan',
            Tajikistan: 'Tajikistan',
            Turkmeniston: 'Turkmenistan',
            The_history: 'The history of the peoples of Central Asia',
            The_Great: 'The Great Silk Road',
          },
          services: {
            title: 'Services',
            visa_formalities: 'Visa formalities',
            uzbekistan_airways: 'Uzbekistan Airways',
            Uzrailpass: 'Uzrailpass',
          },
          useful: {
            title: 'Useful',
            Gallery: 'Gallery',
          },
          about_us: {
            title: 'About Us',
            Company: 'Company',
            Review: 'Review',
            Contacts: 'Contacts',
          },
          some: {
            title1_Uzbekistan_country: 'Ancient Blessed Land Of Uzbekistan',
            title1_text1: `On our planet, there are many countries of interest to travel. One of such countries is Uzbekistan.
          <br>
          Our country is located in the heart of Central Asia, between the rivers Amu Darya and Syr Darya, and is bordered by four other Central Asian republics: Kazakhstan - in the north, Turkmenistan - in the south-west, Kyrgyzstan - in the east, Tajikistan - in the south-east. In the south, there is a small section of the border (600 km) with Afghanistan.
          <br>
          Uzbekistan gained its current borders in 1924, after the national-territorial demarcation, when the whole of Central Asia became a part of the USSR. August 31, 1991, after the collapse of the Soviet Union, Uzbekistan became an independent state.
          <br>
          Compared with European countries, Uzbekistan is very big country - 447 thousand square km. Italy, for instance, occupies 301 thousand square km. Of European countries only France (551), Spain (505) and Sweden (450) are bigger than Uzbekistan in area.`,
          },
          mainPage: {
            popularTours: 'Popular tours',
            allTours: 'All Tours',
            gallery: 'Gallery',
            review: 'Review',
            reviewBig: 'Dear Ms. Movsesyan, Greetings and Best Wishes from my wife, Nancy, myself and our tour group from July-August 2014. We are writing for two reasons. First, we want ...',
            allReview: 'All reviews'
          },
          toursMain: {
            tour1: {
              title: 'Guaranteed departure to Uzbekistan: Golden Road to Samarkand',
              days: '9 days'
            },
            tour2: {
              title: 'Guaranteed Departure to Uzbekistan: The Silk Road Tour',
              days: '11 days'
            },
            tour3: {
              title: 'Guaranteed tour to Turkmenistan',
              days: '5 days'
            },
            tour4: {
              title: 'Uzbekistan - Pearl of Magic East',
              days: '10 days'
            },
            tour5: {
              title: 'Tour to Kazakhstan & Turkmenistan',
              days: '10 days'
            },
            tour6: {
              title: 'Discover Uzbekistan',
              days: '11 days'
            },
            tour7: {
              title: 'After the traces of Alexander the Great: Turkmenistan - Uzbekistan-Tajikistan',
              days: '16 days'
            },
            tour8: {
              title: 'Uzbekistan – Silk, Mosaics and Deserts',
              days: '12 days'
            },
            tour9: {
              title: 'On the Traces of Tamerlane: Uzbekistan - Tajikistan (with 5-day trekking)',
              days: '16 days'
            }
          },
          uzbekistanPage: {
            uzbekistan: {
              title: 'Ancient Blessed Land Of Uzbekistan',
              discription: {
                span1: {
                  first: `There are many countries on our planet that are interesting for travel. One of these countries is Uzbekistan.`,
                  second: "Our country is located in the heart of Central Asia, between the Amu Darya and Syr Darya rivers, and borders on four other Central Asian republics: Kazakhstan - in the north, Turkmenistan - in the southwest, Kyrgyzstan - in the east, Tajikistan - in the southeast. In the south there is a small section of the border (600 km) with Afghanistan.",
                  third: "Uzbekistan acquired its current borders in 1924, after the national-territorial delimitation, when the whole of Central Asia became part of the USSR. On August 31, 1991, after the collapse of the Soviet Union, Uzbekistan became an independent state.",
                  // fourth: "По сравнению с европейскими странами Узбекистан очень большая страна - 447 тысяч квадратных километров. Италия, например, занимает 301 тыс. кв. км. Из европейских стран только Франция (551), Испания (505) и Швеция (450) больше Узбекистана по площади."
                },
                span2: `The capital of Uzbekistan - Tashkent is located in the oasis of the Chirchik River in the foothills of the Tien Shan. The city of Chach (Shash), now Tashkent, was known as one of the ancient cities of the Great Silk Road. Today it is a modern fast-growing, annually changing city. It is the only one in Central Asia where the subway operates. The city has many ancient monuments, museums, theaters, universities, palaces and parks. Tashkent is famous for its bazaars. The largest and most picturesque is the Eski-Zhuva bazaar, located in the old town part of the capital.
                `,
                span3: {
                  first: 'Uzbekistan, like thousands of years ago, continues to occupy a favorable geographical position at the crossroads connecting Europe with East and Southeast Asia. Tashkent has the largest international airport in Central Asia. Rail and road routes connect Uzbekistan with neighboring countries. We can say that this is a new level of revival of the Great Silk Road.',
                  second: 'Uzbekistan is one of the few countries on the Eurasian continent with the most sunny days per year, about 300 days. The climate of Uzbekistan is sharply continental. The average temperature in January is from +4°С to -8°С, in July - from +22°С to +42°С. Speaking about soil fertility, it should be noted the valleys of Zerafshan, Amudarya and Syr. Daria and the breadbasket of the country - the Ferghana Valley. Another thing is that not all land is suitable for life. A huge territory in the center of the country is occupied by the Kyzylkum desert, to the north-west of the Aral Sea - the arid Ustyurt plateau, characterized by a harsh climate; in the southeast and east - the spurs of the Pamir and Tien Shan. Life, as well as gather years ago, is concentrated in the valleys of the Amu Darya, Syr Darya and their tributaries, where in the VIII-VII centuries. BC, the first reports of education appeared: Bactria, Sogd (Sogdiana), Khorezm.'
                },
                span4: {
                  first: 'Like thousands of years ago, the oases of Uzbekistan are buried in gardens and fields, where peaches, apricots, cherries, and many other fruits grow in abundance. Various varieties of vegetables and cereals are grown on artificially irrigated fields. Uzbekistan is also called the country of "white gold" - cotton. Well, in the desert and mountainous regions of the country, huge deposits of oil, gas, minerals, including gold, are being explored and developed.'
                },
                span5: {
                  first: 'Uzbekistan is the only country in Central Asia with the living ancient cities of Bukhara, Samarkand, Khiva, Karshi, Shakhrisabz, Termez, Margilan, Tashkent... The routes of the Great Silk Road went through all these cities, contributing to their centuries-old prosperity. Only due to their favorable geographical position, they will not sink into oblivion, like their contemporaries Babylon, Thebes and Persepolis...',
                  second: 'Time and numerous wars, religious intolerance and earthquakes did not spare magnificent palaces, temples and city buildings with ceramic water pipes, unique irrigation facilities, traces of which are found everywhere by archaeologists. Especially many of them were destroyed during the Arab VII-VIII centuries. and Mongol (XIII century) invasions. Nevertheless, there are more than 1,400 historical and architectural monuments on the territory of Uzbekistan, many of them are unique and are included in the UNESCO World Heritage List.'
                },
                span6: `
                Of course, the most attractive city for any tourist is the city of Samarkand (in ancient times - Marakanda or Marakand). This city is the eighth wonder of the world, the historical pride of Samarkand - Registan Square, the tomb of the Timurid dynasty - the Gur-Emir mausoleum, the Bibi Khanym mosque and, of course, the complex of Shakhi-Zinda mausoleums, located on the slope of Afrosiab. The beginning of its construction dates back to the XII century, but basically it was formed in the XIV-XV centuries. under Amir Temur. The city of Samarkand bears the title of "Pearl of the East".
                `,
                span7: ` And the city-museum under the open sky - Bukhara includes the Ark citadel (the time of its construction dates back to the 3rd century BC), the Poyikalon complex with the majestic Kalyan mosque (16th century), the 47-meter Kalyan minaret and the Mir-Arab madrasah (now an Islamic seminary), the mausoleum of Ismail Samani (the end of the 9th century), as well as the trading domes of the XV-XVI centuries Tak-i-Sarrafon (the dome of the money-changers), Tak-i-Telpak-Furushon (the dome of the sellers of headdresses) and Tak- i-Zargaron (the dome of jewelers), which are still in operation.`,
                span8: ` The city of Khiva bears the title of "fairy tale city", the magical mirage of the city is represented by the architectural complex of Ichan-Kala, which is surrounded by powerful fortress walls with four gates. At the western gate is the most ancient part of the city with the remains of the Akshik-bobo castle, nearby - conceived as the largest in the world, but, alas, the unfinished Kalta-Minor (short) minaret, the majestic madrasah of Muhammad Amin-khan, the Tash-khauli Khan's palace , the amazing beauty of the Juma mosque, and of course the tallest building in Khiva, the Islam-Khoja minaret (56 m.).
                `,
              },
              reference: {
                title: 'REFERENCE',
                ref1: {
                  title: 'State system of Uzbekistan',
                  dusc: 'State system of Uzbekistan is a presidential republic, which includes the Karakalpak Autonomous Republic and 12 provinces. Legislative - bicameral Parliament (Majlis). Currency - sum.'
                },
                ref2: {
                  title: 'Administrative division of Uzbekistan',
                  dusc: "12 areas: Andijan, Bukhara, Jizzakh, Kashkadarya, Navoi, Namangan, Samarkand, Surkhandarya, Syrdarya, Tashkent, Fergana, Khorezm and Karakalpakstan."
                },
                ref3: {
                  title: 'Economy of Uzbekistan',
                  dusc: `Uzbekistan is the agro-industrial state. The agricultural sector is diversified. In planting is developed cotton, large areas are occupied by crops of kenaf, oily cultures, as well as cereals (rice, wheat, maize). Fruit and vegetables, melon, grapes cultivation is well developed. The main livestock industry is dairy and meat cattle breeding and Karakul (astrakhan) sheep.
                  <br>
                  <br>
                  Major industries: oil production and refining, chemical and mechanical engineering.`
                },
                ref4: {
                  title: '<b>Population:</b> Over 29 million people. (2011)',
                  dusc: ''
                },
                ref5: {
                  title: 'Religion',
                  dusc: 'According to official figures, Muslims - 88% (mostly Sunnis), Eastern Orthodox - 9%. In total there were registered 16 religious confessiions.'
                },
                ref6: {
                  title: 'Language',
                  dusc: 'The state language of the Republic of Uzbekistan is Uzbek.'
                },
                ref7: {
                  title: 'Public holidays',
                  dusc: `
                  January 1 - New Year
                  <br>
                  March 8 - International Women's Day
                  <br>
                  March 21 - Navruz
                  <br>
                  May 9- Memorial Day
                  <br>
                  September 1 - Independence Day
                  <br>
                  October 1 - Teacher's Day
                  <br>
                  December 8 - Constitution Day
                  <br>
                  The first days of religious holidays Ruza Fitr and Eid al Adha
                  `
                },
                ref8: {
                  title: 'Visa',
                  dusc: 'For CIS citizens visa-free entry to Uzbekistan. Foreign citizens and stateless persons may enter and transit through its territory only if there is an entry visa.'
                },
                ref9: {
                  title: 'Customs',
                  dusc: 'We recommend visitors to familiarize with customs regulations. <a href="http://www.customs.uz/rus/informaiya_dlya_svedeniya">http://www.customs.uz/rus/informaiya_dlya_svedeniya</a>'
                },
                ref10: {
                  title: 'Passport system',
                  dusc: 'According to the Resolution of the Cabinet of Ministers of 16.04.1999 № 178, temporarily residing in Uzbekistan, foreign citizens must apply for registration on arrival at the place of stay for three days, excluding holidays and weekends. If staying in a hotel - the registration is done by the hotel itself.'
                },
                ref11: {
                  title: 'Helpful information',
                  dusc: `Internet domain - uz
                  <br>
                  Telephone code - 998
                  <br>
                  Voltage - 220 V AC, 50 A, standard-pin plug socket
                  <br>
                  Time: GMT + 5:00`
                },
              }
            }
          },
          culturePage: {
            title: 'Culture - Soul Of People',
            span1: {
              first: 'To get an idea of the history and culture of the country, you can visit its museums. In Uzbekistan, there are now more than a hundred museums. Very large number of them is located in Tashkent. It is, first of all, Amir Temur Museum, the Museum of History of Uzbekistan, State Museum of Art, the Museum of Applied Arts and dozens of others. Interesting are museums of ancient Uzbek cities of Samarkand, Bukhara, Khiva, Termez. One of the most famous museums of Uzbekistan, and, perhaps, the whole of Central Asia - Museum of Arts named after Savitsky is located in the capital of the Republic of Karakalpakstan, Nukus.',
              second: 'Uzbekistan is famous in the world not only for its museums, architectural monuments of the ancient cities, but also for prominent scientists, educators and poets - Al Khwarizmi, Ibn Sina (Avicenna), Alisher Navoi, Omar Khayyam, Ulugbek. The production of applied arts of Uzbek skilled craftsmen are known all over the world. Many museums keep amazingly beautiful engraved products, jewelry, weapons, medieval miniatures created by the masters of our ancient land.'
            },
            span2: {
              first: 'Modern Uzbekistan is very careful towards the traditional cultural values, with the support of the state people revive and develop dozens of ancient crafts. So was revived, for example, an old Rishtan ceramics with blue frosting, which enjoyed an unusually high demand all over the Great Silk Road. In the XX century, it was almost completely gone, unable to compete with cheap factory dishes, as well as other centers of ceramics in Samarkand, Bukhara, Khiva, Gijduvan also now restored.',
              second: 'Today, the colorful bazaars of towns and cities of Uzbekistan are full of handmade pottery - all kinds of dishes, small plastic products and toys; and each region has its own unique style.',
            },
            span3: {
              first: 'Here carvers offer elaborately carved boxes, pencil boxes, tables and chairs, screens, window bars, chandeliers, doors and pillars, amazing laukhs. Laukh is folding in several levels book holder, made from one piece of wood without a single attachment. Miniaturists exhibit different sizes and shapes of boxes of wood and papier-mache, covered with delicate ornamental paintings and miniatures. Weavers demonstrate their amazing beauty products, continuing the tradition of their ancestors. Since ancient times Bukhara and Khiva carpets have been famous all over the world. Jewellers offer dozens, if not hundreds of ornaments. And who knows, maybe, Bukhara women wore a thousand years ago the same jewelry, which can be seen today, for example, under the trade dome Tak-i-Zargaron in Bukhara...'
            },
            span4: {
              first: 'In all ages, artisans of the area between the rivers Amu Darya and Syr Darya, Ferghana valley were famous for their mastery of metal working. And how else, as the local mountains from time immemorial, were full of gold, silver, copper, iron and tin. According to Arab historian of the X century Ibn Haukal "iron weapons from Ferghana was in general use from Khorasan to Baghdad." Some researchers argue that the birthplace of Damascus steel was Ferghana. Europeans just saw this steel in Damascus, where it came from Central Asia along the Silk Road.',
              second: "Arab geographer and traveler of the  X century, Al-Muqaddasi, telling about the goods exported from the Samanid state, mentions precious silverware and brass lamps from Bukhara, intricately carved and decorated with Arabic inscriptions. Modern engravers on metal manufacture products of the same amazing beauty as masters of the Samanid or Timurid epoch, and that's were periods of unprecedented flowering of culture and the arts."
            },
            span5: {
              first: 'In recent years, Uzbek abr fabrics are in great demand in many countries. Pattern "abr" - "cloud" is one of the oldest and most beloved in Uzbekistan. The secret of its manufacture is that threads are dyed and not the ready fabrics.',
              second: 'Coils of threads of silk, wool, cotton, before diving into the staining solution, are tied in the special way. The result is a bright shimmering with iridescent paints silk khan-atlas, semi-silk fabric called adras, fabric shoyi. Elegant striped gown is produced by a traditional technology.'
            },
            span6: {
              first: 'In Uzbekistan, there are dozens of crafts such as embroidery, famous Bukhara gold embroidery, painting on skin, pumpkin carving on alabaster and  stone, production of dolls, puppets and musical instruments, boxes and cradles for babies - beshik ... All of crafts can be found right in the workshops located in the bazaars, in the old madrassahs, in the streets of ancient cities.'
            },
            span6: {
              first: 'However the most vivid picture of Uzbekistan is available during the holidays and folk festivals, for example, during the celebration of Navruz, when the streets and squares of towns and cities face numerous folk groups in traditional costumes, and costumes of each region may be very different from each other . During these festivals everywhere you will hear traditional music and songs, you can see the hot dances, folk games, contests, singers and strong men (palvans), cock and ram fights, tightrope walkers and puppeteers performances and, of course, theatrical performances at the legendary stories on everyday topics, telling about national traditions and customs. Perhaps that is why Uzbekistan citizens love theater, theatres so much. There are theatres in every city, a total of 35 professional theatres in the country - drama, music, puppetry, opera (in Tashkent and Samarkand), and many amateur ones.'
            }
          },
          orientBus: {
            title: 'Orient Bus',
            discription: {
              span1: `"Orient Bus" is a subsidiary of our company and since 1999 has been successfully engaged in passenger transportation throughout Uzbekistan. During this time, the company has established itself as a reliable and responsible partner in the transport services market. The safety of our services and the quality of service are highly appreciated by customers.`,
              span2: `More than 13 years of successful history of the company, the leading position in the transport services market, the growth in the number of our regular customers are the best arguments in favor of choosing Orient Bus.`,
              span3: `Constantly improving, we offer our customers transport services at the highest level.`,
              span4: `Our customers are our pride!`,
              auto: {
                auto1: {
                  value: 'Quantity: 3',
                  place: '45 places',
                  tv: 'TV +',
                  cd: 'CD player +',
                  micro: 'Microphone +',
                  cold: 'Refrigerator +',
                  cond: 'Conditioner +',
                  toilet: 'Toilet +',
                  bagage: 'Trunk: 10 m3',
                },
                auto2: {
                  value: 'Quantity: 7',
                  place: '45 places',
                  tv: 'ТV +',
                  radio: '',
                  cd: 'CD player +',
                  micro: 'Microphone +',
                  cold: 'Refrigerator +',
                  cond: 'A/C +',
                  toilet: 'toilet +',
                  bagage: 'Trunk: 9 m3',
                },
                auto3: {
                  value: 'Quantity: 3',
                  place: '30 places',
                  tv: 'ТV +',
                  radio: '',
                  cd: 'CD player +',
                  micro: 'Microphone +',
                  cold: 'Refrigerator +',
                  cond: 'Conditioner +',
                  toilet: '',
                  bagage: 'Trunk: 3.3 m3',
                },
                auto4: {
                  value: 'Quantity: 2',
                  place: '6 places',
                  tv: 'ТV +',
                  radio: 'Radio +',
                  cd: 'CD player +',
                  cold: 'Refrigerator +',
                  micro: 'Microphone +',
                  cond: 'Conditioner +',
                  toilet: '',
                  bagage: 'Trunk: 0.4 m3',
                },
                auto5: {
                  value: 'Quantity: 8',
                  place: '3 places',
                  cd: 'CD player +',
                  radio: 'Radio +',
                  cond: 'Conditioner +',
                  bagage: 'Trunk: 0.4 m3',
                },
                auto6: {
                  value: 'Quantity: 2',
                  place: '6 places',
                  radio: 'Radio +',
                  cd: 'CD player +',
                  cond: 'Conditioner +',
                  bagage: 'Trunk: 0.4 m3',
                },
                auto7: {
                  value: 'Quantity: 8',
                  place: '3 places',
                  cd: 'CD player +',
                  radio: 'Radio +',
                  cond: 'Conditioner +',
                  bagage: 'Trunk: 0.3 m3',
                },
                auto8: {
                  value: 'Quantity: 8',
                  place: '3 places',
                  cd: 'CD player +',
                  radio: 'Radio +',
                  cond: 'Conditioner +',
                  bagage: 'Trunk: 0.3 m3',
                },
              }
            }
          },
          orientStarHotels: {
            title: 'Orient Star Hotels',
            item1: 'Orient Star Samarkand',
            item2: 'Orient Star Khiva',
            item3: 'Orient Star Varaxsha',
          },
          centralAsia: {
            kirgiz: {
              title: 'Kyrgyzstan',
              span1: `A diamond in the Asian crown of ancient empires, Kyrgyzstan is still little explored by tourists. And it’s completely in vain - in terms of the abundance of natural and historical attractions, opportunities for beach holidays, treatment and skiing, this country is truly unmatched. On the territory of Kyrgyzstan there are the “heavenly mountains” of the Tien Shan and the Pamir ranges, here the purest high-mountain lake Issyk-Kul conceals the wealth of Genghis Khan, relic walnut forests grow and hot sulfur springs beat. However, Kyrgyzstan has prepared a lot of surprises for the idle “caretaker”: colorful yurts and felt carpets, koumiss and Osh pilaf, traditional horse races, chants, fairy tales and legends. In a word, Asia in all its glory - that's what Kyrgyzstan is!
              `,
              span2: `The state is located in the east of Central Asia, mainly within the western and central parts of the Tien Shan and the northern part of the Pamirs. It borders on Kazakhstan in the north, Uzbekistan in the west, Tajikistan in the southwest, and China in the southeast and east.
              `,
              span3: `According to the national-state demarcation of the Soviet republics of Central Asia, on October 14, 1924, the Kara-Kyrgyz Autonomous Okrug was formed (since May 25, 1925 it was renamed the Kirghiz Autonomous Okrug) - an autonomous region within the RSFSR, which on February 1, 1926 was transformed into the Kirghiz Autonomous Soviet Socialist Republic, and December 5, 1936 - to the Kirghiz SSR. During the collapse of the USSR, on August 31, 1991, during the collapse of the USSR, the independence of Kyrgyzstan was proclaimed.`,
              span4: `The capital of Kyrgyzstan, Bishkek, is the largest city in the country. It is a special administrative unit and is a city of republican subordination. Old names - Pishpek, Frunze. Population - 860700 inhabitants (2012). Unlike the southern regions of the republic, a high percentage of the population is made up of Russians and Russian-speaking residents. The city is located in the north of Kyrgyzstan, in the Chui valley, at the foothills of the Tien Shan, 40 km north of the Kyrgyz Range at an altitude of 700-900 m above sea level, 25 km from the border with Kazakhstan. The city of Bishkek is a regional center of trade. Bishkek has the largest clothing market in Central Asia: Dordoi, the largest auto market: Azamat.`,
              span5: `Manas International Airport is located 23 km from the city limits of Bishkek. According to the ICAO classification, Manas is a class 4E airport. Its 4.2 km long runway allows it to receive aircraft of all types, including in adverse weather conditions. The airport has 38 parking lots and two air bridges.`,
              span6: `Kyrgyzstan has a sharply continental climate with a transition to a continental climate. Precipitation is comparatively low; there are about 250 sunny days a year. On the plains and lowlands, the average temperature in January is -4 -6°C, in July - +18 +24°C. It is cooler in the highlands both in winter and in summer due to constantly blowing winds from Siberia: -14 -20°C in January and +8 +12°C in July. In the Ferghana Valley, in summer, the thermometer, as a rule, rises above +35°C. The most favorable time to visit Kyrgyzstan is September, when pleasant autumn warmth reigns throughout the country. You can go to the high mountain pastures "jailoo" from mid-May to early October, hiking and horse riding tours are comfortable from March to November in the south and from April to October in the north. Trekking and climbing are available throughout the year, while high mountain climbs are best done from late June to October.`,
              span7: `Unique natural attractions and ancient cities of the Great Silk Road - these are the two trump cards of Kyrgyzstan in attracting tourists. The Tien Shan and Pamir ranges lie on the territory of the state, one of the largest and deepest lakes of the planet is located here - Issyk-Kul, sung by the poets of the East, relict walnut forests of the Arslanbob high-mountain oasis, Jety Oguz gorge and radon-hydrogen sulfide thermal springs, the legendary Son-Kul lakes. Kul and Sary-Chelek, the giant Inylchek glacier and many other wonders of nature. Mountain lovers climb the peaks of Lenin, Pobeda and Khan-Tengri, trekking fans explore the Turkestan Range and the lakes of the Western Tien Shan, and skiers are waiting - they can’t wait for the opening of the season to be the first to cut the snow on the slopes of Kashka-Suu, Norus and Too Ashuu . By the way, skiing Kyrgyzstan offers rich opportunities for heliskiing and paragliding.`,
              span8: `Sights of Bishkek: the ancient and colorful Osh Bazaar, Ala-Too Square, the Independence Monument and the Parliament building, the Museum of National History and the Museum of Art, the historical oak forest and the Erkindik Gallery. In the vicinity of the city, it is worth visiting the natural park "Baityk Valley" and climbing Mount Boz-Peldek, which offers a beautiful view of Bishkek. At the southern slope of the mountain there is a cemetery "Khan's graves", where the legendary ruler of the valley is buried. Pay attention to the forged tower with a magnificent dome. You can see rare plants in the Chon-Aryk botanical reserve, and improve your health at the peat mud deposit in the village of Kamyshanovka.`,
              span9: `The city of Osh is located in a foothill oasis, which has long been inhabited by people long before the arrival of the Kyrgyz people from the Yenisei (about 800 years ago). The settlement of farmers of the Bronze Age was discovered on the southern slope of Sulaiman-Too mountain. Osh was one of the oldest villages in Kyrgyzstan, now it is officially proposed to consider that the history of the city has about 3 thousand years, however, in historical science it is customary to count the age of cities from the earliest mention in historical acts; The earliest mention of the city in chronicles dates back to the 9th century AD. e., which still allows us to consider it the oldest city in the country. In the 10th century, Osh was considered the third largest city in Ferghana, being the crossing point of caravan routes from India and China to Europe (see the Great Silk Road). In Osh, there are wonderful monuments of Islamic architecture of the Fergana style: Alymbek Paravanchi madrasah and Mukhamedboy Turk hal Muratbaev, Sadykbay and Shahid-Tepa mosques. It is worth visiting the Russian Orthodox Mikhailo-Arkhangelsk Church (beginning of the 20th century). Among the historical sights are an ancient cemetery, a complex of medieval baths, ancient petroglyphs. In addition, Osh is the “gateway to the mountains”: from here you can climb the Pamirs and the Tien Shan, see the Chil-Ustun and Chil-Mayram caves, as well as the unique karst source, the Abshir-sai waterfall. Airport "Osh" is actively working, accepting and sending local and international flights.`,
              span10: `Lake Issyk-Kul is the second largest in the world and, perhaps, the first in terms of amazing color of water - rich blue, almost ultramarine. The water of Issyk-Kul is exceptionally clear and slightly salty in taste, as about 80 rivers flow into it, and not a single one flows out. In the vicinity of the lake there are hot springs and there are deposits of therapeutic mud.`,
              span11: `You can live the nomadic life of a real Kyrgyz by going to the high mountain pastures "jailoo" - a healthy sleep under the canopy of a yurt, a cup of koumiss in the morning and all day in the fresh air - this is the guarantee of health in Asian style.`,
              spravka: {
                span1: {
                  title: `REFERENCE INFORMATION`,
                  text: `The state structure of Kyrgyzstan is a sovereign, unitary, democratic republic built on the principles of a legal, secular state, which includes 7 regions and 2 cities of republican significance. The Parliament of the Republic - the Jogorku Kenesh has the priority of deciding and determining the most important decisions and policies of the state, is unicameral, and consists of 120 deputies elected for a period of five years on party lists. The monetary unit is the Kyrgyz som.`
                },
                span2: {
                  title: `Administrative division of Kyrgyzstan`,
                  text: {
                    text1: `Kyrgyzstan includes 7 regions and 2 cities of republican significance:`,
                    text2: `Batken region`,
                    text3: `Chuy region`,
                    text4: `Jalal-Abad region`,
                    text5: `Naryn region`,
                    text6: `Osh region`,
                    text7: `Talas region`,
                    text8: `Issyk-Kul region`,
                    text9: `the cities of Bishkek and Osh`
                  }
                },
                span3: {
                  title: `Economy of Uzbekistan`,
                  text: {
                    text1: `The economy of Kyrgyzstan consists mainly of industry and agriculture, and more than half of the able-bodied population is employed in agriculture. About half a million residents of Kyrgyzstan go abroad to work. In 2011, migrant remittances amounted to 29% of the country's GDP.`,
                    text2: `ʻIndustry is represented by energy and extractive industries. A significant part of agricultural products is exported. An important source of income for Kyrgyzstan is tourism. The Kyrgyz budget also receives $ 63 million from the United States as a lease of the Manas base.`
                  }
                },
                span4: {
                  title: `Population:`,
                  text: `More than 5.5 million people. (2013)`
                },
                span5: {
                  title: `Religion`,
                  text: `Muslim 75%, Russian Orthodox 20%, other 5%`
                },
                span6: {
                  title: `Language`,
                  text: `Kyrgyz is the state language of the Kyrgyz Republic.`
                },
                span7: {
                  title: `Государственные праздники`,
                  text: {
                    text1: `January 1 - New Year`,
                    text2: `January 7th is Christmas`,
                    text3: `February 23 - Defender of the Fatherland Day`,
                    text4: `March 8 is International Women's Day`,
                    text5: `March 21 - Nooruz`,
                    text6: `May 1 is the Holiday of Spring and Labor`,
                    text7: `May 5 is Constitution Day of Kyrgyzstan`,
                    text8: `May 9 is Victory Day`,
                    text9: `June 7 is the Day of Financial and Economic Workers`,
                    text10: `August 31 is Independence Day`,
                    text11: `November 7 is the Day of the Great October Socialist Revolution`,
                    text12: `Orozo-ait and Kurman-ait are determined by the lunar calendar.`,
                  }
                },
                span8: {
                  title: `Виза`,
                  text1: `Under the Law of the Kyrgyz Republic No. 121 dated 21.07.2012, for citizens of the following countries there is a visa-free entry to the Kyrgyz Republic for up to 60 days: Australia, the Republic of Austria, the Kingdom of Bahrain, the Kingdom of Belgium, Bosnia and Herzegovina, the State of Brunei Darussalam , Vatican City, United Kingdom of Great Britain and Northern Ireland, Republic of Hungary, Federal Republic of Germany, Hellenic Republic, Kingdom of Denmark, Ireland, Republic of Iceland, Kingdom of Spain, Republic of Italy, Canada, State of Qatar, Republic of Korea, State of Kuwait, Republic of Latvia, Republic of Lithuania , Principality of Liechtenstein, Grand Duchy of Luxembourg, Republic of Malta, Principality of Monaco, Kingdom of the Netherlands, Kingdom of Norway, New Zealand, United Arab Emirates, Republic of Poland, Portuguese Republic, Kingdom of Saudi Arabia, Republic of Singapore, Slovak Republic, Republic of Slovenia, United States of America, Republic of Finland, French Republic, Republic of Croatia, Czech Republic, Swiss Confederation, Kingdom of Sweden, Republic of Estonia.`,
                  text2: `In accordance with the Decrees of the Government of the Kyrgyz Republic No. 735 of 31.12.1999 and No. 262 of 04.06.2001. for citizens of Japan there is a visa-free regime for entry into the Kyrgyz Republic unilaterally for an unlimited period.`
                },
                span9: {
                  title: `Таможня`,
                  text: {
                    text1: `There are no restrictions on the import and export of national and foreign currency (all money and jewelry must be declared). The declaration must be kept before leaving the country.`,
                    text2: `Up to 1000 cigarettes or up to 1000 g of tobacco products, up to 1.5 liters of strong alcoholic beverages and up to 2 liters of wine can be brought into Kyrgyzstan duty-free. You will be able to bring in a reasonable amount of perfumes for personal use, as well as other goods worth up to $5,000. Customs inspection is sometimes lengthy and detailed.`,
                    text3: `The importation of drugs and strong medicines (without a prescription confirming the need for their use), weapons and ammunition, combustible and explosives, printed materials and video materials directed against the state system of Kyrgyzstan, as well as animals, fruits and vegetables without an appropriate permission of the Sanitary and Veterinary Service of the country.`,
                    text4: `ʻIt is forbidden to export certain foodstuffs, minerals and rocks without the permission of the relevant authorities, gold (declared) and precious stones. `
                  }
                },
                span10: {
                  title: `Passport Regime`,
                  text: `All foreigners who have visited the country, regardless of the purpose of their arrival, are required to declare their arrival to the bodies of the Ministry of Internal Affairs of the Kyrgyz Republic within 24 hours and receive a so-called temporary registration coupon. Without it, individuals are subject to a fine, up to imprisonment in a pre-trial detention center for violation of the passport regime.`,
                },
                span11: {
                  title: `Useful information`,
                  text: {
                    text1: `Internet domain - kg`,
                    text2: `Telephone code - +996`,
                    text3: `Network voltage - 220 V AC, 50 A; standard double plug socket`,
                    text4: `Time: GMT +6 hours`,

                  }
                }
              }
            },
            tadjik: {
              title: `Tajikistan`,
              disc: {
                span1: `Tajikistan is a unique tourist attraction of our time, because it has a great cultural and historical heritage, original culture, advantageous geographical location, variety of natural landscapes, recreational areas, flora and fauna.`,
                span2: `Tajikistan is a mountainous country with absolute heights from 300 to 7495 meters above sea level. 93% of the country's territory is made up of mountain ranges belonging to the Pamir, Gissar-Alai and Tien Shan mountain systems. These ranges are separated by the rich and fertile lands of the Ferghana, Zerafshan, Vakhsh and Gissar valleys. The complexity of the relief and the large amplitude of the heights of the mountain systems determine the exceptional diversity of flora and fauna.`,
                span3: `Tajikistan is the land of the highest peaks, mighty glaciers, fast-moving turbulent rivers, lakes of unique beauty, unique vegetation and rare animals. It is the mountainous, floor-by-story landscape that determines the originality and originality of the nature of Tajikistan, the richness of its forms, brought to life by the diversity of climatic zones. In the republic, in an hour and a half flight from the sultry heat of the Vakhsh valley, you can get into the arctic cold of the eternal snows of the Pamirs.`,
                span4: `The Tajik Sea is called the Kairakkum reservoir, located east of Khujand, formed as a result of the construction of a hydroelectric power station on the Syrdarya River, which has become a wonderful place for tourists to relax. Sanatoriums, rest houses, campsites located in magnificent orchards appeared on its banks.`,
                span5: `On the basis of 13 existing state natural reserves and reserves "Zorkul", "Romit", "Mozkul", "Dashti Jum", as well as the Tajik National Park, unique ecology, landscapes and natural monuments have been preserved in their original form. Rare endangered species of plants and animals listed in the Red Book are also preserved, including markhoor goat (morkhur), mountain argali (Marco Polo), Bukhara mountain sheep (Ureal), Bukhara spotted deer, snow leopard,`,
                span6: ` Tien Shan brown bear, striped hyena, Indian mountain goose. 84 species of mammals, over 365 species of birds, 49 species of reptiles, about 52 species of fish and more than 10,000 species of insects inhabit the territory of the republic. The flora of Tajikistan has over 5,000 species of higher plants, many of which are endemic. The territory of the Tajik National Park is 2.6 million hectares, which covers 18 percent of the country's territory and 60 percent of the Gorno-Badakhshan Autonomous Region of the republic. In recent years, the Directorate of the National Park has been actively implementing measures to develop the infrastructure of ecological tourism and improve the environmental situation in the high mountainous regions of the Pamirs.`,
                span7: `There are 125 tourist and sanatorium-resort facilities in the republic, including 51 hotels, 9 sanatoriums, the rest are houses and recreation areas, tourist bases, health camps. Most of the hotels are located in Dushanbe, Khujand, Kurgan-Tyube, Kulyab, and Khorog.`,
                span8: `Tajikistan has 3 international airports in Dushanbe, Khujand and Kulyab. The territory of the republic from west to east is crossed by 3 branches of railways that connect the central, northern and southern regions of the republic through the territories of the neighboring states of Turkmenistan and Uzbekistan.`,
                span9: `The natural and recreational resources of the republic, the presence of historical and cultural monuments predetermine the features of the formed national tourism product, the promotion and implementation of which in the world markets of tourism services, ensures the flow of foreign tourists to Tajikistan. In this regard, the priority types of international tourism in the country are:`,
                span10: {
                  text1: `- mountaineering, mountain sports and ecological tourism;`,
                  text2: `- rafting, paragliding, skiing;`,
                  text3: `- interhunt;`,
                  text4: `- historical, educational and ethnographic tourism;`,
                  text5: `- spa treatment and recreation.`,
                },
                span11: `On the territory of Tajikistan is the majestic Pamir - one of the famous uplands of the globe with absolute heights from 2800 to 7495 m above sea level, known throughout the world as the "roof of the world". Here, the tourist resources are climbing routes to the highest mountain peaks - Ismoili Somoni and Evgenia Korzhenevskaya, located at an altitude of more than 7,000 thousand meters, hunting farms, natural landscapes, caves and mineral springs of thermal and cold, carbonic and silicic waters. Every year in Tajikistan, international climbing expeditions are held, during which climbers from around the world climb the highest mountain peaks of the country. Climbers from all continents strive to conquer the peak of Ismoil Somoni (7.495 meters) - the high-altitude pole of the Pamirs. The unique relief of this region favors the development of hiking and trekking of various categories of complexity, engaging in special sports such as rock climbing, mountaineering, skiing, mountain tourism combined with hunting and photo hunting, rafting, paragliding, snowboarding, caving and other types of extreme tourism .`,
                span12: `Tajikistan is the richest country in terms of fresh water resources. Almost half of the water resources of the countries of the Central Asian region are formed in the high mountain rivers, lakes and glaciers of the country. The Republic of Tajikistan ranks eighth in the world in terms of hydropower resources. Especially the Gorno-Badakhshan Autonomous Region of the Republic is very rich in lakes of various origins. The largest of them are Karakul, Zorkul, Rangkul, Shorkul, Bulunkul, as well as Lake Sarez, which was formed as a result of an earthquake in 1911. In general, in the Pamir region, in the altitude range from 3200 to 5000 meters, 1450 lakes and 220 rivers are concentrated, or 83% of the total area of the mirror of lakes in Tajikistan. The largest lake in the Pamirs is the salty unique lake Karakul, located at an altitude of 3914 meters above sea level. Its greatest depth is 236 meters. It is believed that it was formed during the ice age and the bottom of the lake, as well as some of its shores, are covered with permafrost for many kilometers.`,
                span13: `There are about 200 sources of mineral and thermal waters on the territory of Tajikistan, on the basis of which the sanatorium and resort tourism is developing. The most famous of them are the resort "Khoja Obi Garm", the sanatoriums "Shaambary", "Obi Garm", "Zumrad", "Khavatag". Sanatoriums and resorts in Tajikistan provide services for the treatment of diseases of the cardiovascular system, respiratory organs, musculoskeletal system, urinary system, gynecological diseases, gastrointestinal tract, liver and biliary tract, as well as skin diseases. On the hot carbonic springs of the sanatoriums "Garmchashma", "Bashor" and "Shakhdara" travertines are formed - lime deposits of the sinter form. They are especially beautiful at the Garmchashma spring, located 35 km from the city of Khorog. The Garmchashma spring is located at an altitude of 2325m above sea level and is visible from afar due to the exceptional whiteness of travertines. The travertines represent a long shaft descending to the river in openwork ledges. As if fused stalactites hang down its slopes, giving the impression of frozen cascades and stone bowls. On the ledges, natural baths with water of various temperatures (up to 62 * C) are formed.`,
                span14: `The Pamir Botanical Garden, located at an altitude of 2320m above sea level, near the city of Khorog, is a man-made unique monument of nature in the Pamirs. This garden against the backdrop of barren slopes is a real green miracle, which contains over 20 thousand plants from all continents. Among them are such rare and outlandish specimens of plants as Amur velvet, cork tree, Austrian black pine and a unique collection of roses with the purest tones and incomparable aroma.`,
                span15: `Particularly popular among tourists and climbers are the Fann Mountains, which are located between the Zerafshan and Gissar ranges from Kshtutdarya to Fandarya. Today, the Fann Mountains are the most accessible of the country's high mountains for tourists. In the stone thicket of these mountains there is a mirror of bluish-green water - Lake Iskanderkul, the largest lake in the Fann Mountains, located in northern Tajikistan. It spreads widely at an altitude of 2200 meters. Here, tourists can watch the twinkling stars and mist rising from the surface of the lake. On the shore of the lake, 160 km from Dushanbe, there is a camp site "Iskanderkul". Tourists make this way by car through the amazing gorges of Fandarya, Yagnob and Iskanderdarya. The mountains around seem multicolored, as they are dominated by bluish, red and lilac tones. The Iskandardarya gorge is sometimes called the gorges of colored rocks, and the forces of the winds turned them into bizarre fortress walls and castles.`,
                span16: `A lot of interesting things are waiting for travel lovers in the south of Tajikistan. One of the oldest cities in Central Asia, the city of Kulyab celebrated its 2700th anniversary in 2006, which became a significant event for the country. In the loess strata near the Baldzhuvan region, Tajik archaeologists unearthed stone tools, the oldest found in Central Asia - their age is 850 thousand years. Unique sites of Neanderthals were also discovered here in the Dangara region near the Ogizkichik cave with hearths, near which 15 thousand charred turtle shells were found.`,
                span17: `Sights of the beautiful surroundings of the ancient Khutal, now the city of Kulyab, are of great interest to foreign tourists. Mount Khoja Mumin is especially attractive, a unique natural monument, which consists entirely of pure salt of different colors, fawn and gray, bluish green and pink. The salt reserves of this mountain can provide all mankind for many hundreds of years. Another miracle of Khoja Mumin is its caves, which are famous for their musicality. It turns out that wonderful sounds are generated by the wind, sorting out, like keys, long and thin glass icicles-stalactites hanging at the entrance to the caves. A unique monument of history and architecture is the mausoleum of the outstanding thinker and religious figure of the 4th century Mir Said Ali Hamadoni in the city of Kulyab, where many followers who revere his Sufi teaching make a religious pilgrimage.`,
                span2: `The climate is subtropical with significant daily and seasonal fluctuations in air temperature, low rainfall, dry air and little cloudiness. The average January temperature ranges from +2...?2°C in the valleys and foothills of the southwest and north of the republic to -20°C and drops lower in the Pamirs. The absolute minimum temperature reaches -63°C in the Pamirs (Bulunkul). The average temperature in July is from 30°C in the low valleys of the southwest to 0°C and lower in the Pamirs. The absolute maximum temperature is 48 °C (Nizhny Pyanj). In rare cases, the temperature reaches 60°C.`,
              },
              disc2: {
                title: `REFERENCE INFORMATION`,
                text: {
                  text1: {
                    title: `State Structure of Tajikistan`,
                    disc: `The government of Tajikistan is a presidential republic. Legislative power is exercised by the Parliament - Majlisi Oli. Monetary unit - somoni.`
                  },
                  text2: {
                    title: `Administrative division of Tajikistan`,
                    disc: `According to the law of the Republic of Tajikistan dated November 4, 1995 No. 101 "On the procedure for resolving issues of the administrative-territorial structure of the Republic of Tajikistan" the state consists of the city of Dushanbe, which has the status of a separate administrative-territorial unit of the first order, the Gorno-Badakhshan Autonomous Region, the Sughd and Khatlon regions, and a group of thirteen districts of republican subordination.`
                  },
                  text3: {
                    title: `Economy of Tajikistan`,
                    disc1: `Tajikistan is an industrial-agrarian state with considerable tourism and economic potential. The long war, the resulting destruction and loss of life led to a sharp decline in the economy. But in recent peaceful years, the economy and living standards have risen significantly. Aluminum exports provide half of export earnings. In second place is the export of cotton.`,
                    disc2: `The country has significant hydropower potential. The total volume of hydropower resources is estimated at 527 billion. This makes the state one of the most endowed with this renewable energy source in the world (eighth place in terms of absolute generation potential).`
                  },
                  text4: {
                    title: `Population:`,
                    disc: `More than 8 million people. (2014)`
                  },
                  text5: {
                    title: `Religion`,
                    disc: `The vast majority of the population of Tajikistan (95-99%) are Sunnis of the Hanafi madhhab (which has been given official status since April 2, 2009).`
                  },
                  text6: {
                    title: `Language`,
                    disc: `The state language of the Republic of Tajikistan is Tajik, Russian is the language of interethnic communication.`
                  },
                  text7: {
                    title: `State holidays`,
                    disc1: `January 1 - New Year
                    `,
                    disc2: `March 8 - Mother's Day
                    `,
                    disc3: `March 21-24 - Navruz (international holiday)
                    `,
                    disc4: `May 1 - International Day of Solidarity of Workers
                    `,
                    disc5: `May 9 - Victory Day
                    `,
                    disc6: `June 27 - National Unity Day
                    `,
                    disc7: `September 9 - Independence Day of the Republic of Tajikistan
                    `,
                    disc8: `November 6 - Constitution Day of the Republic of Tajikistan
                    `,
                    disc9: `Eid al-Fitr celebration of the end of the month of Ramadan
                    `,
                    disc10: `Eid al-Adha is celebrated 70 days after the end of the month of Ramadan
                    `,
                  },
                  text8: {
                    title: `Visa`,
                    disc: `Foreign citizens can enter the Republic of Tajikistan with valid foreign passports or documents replacing them if they have an entry visa issued by the competent authorities of the Republic of Tajikistan represented by the Ministry of Foreign Affairs and its foreign departments, as well as embassies and consulates of foreign countries with which the Republic of Tajikistan has relevant agreements. The term for issuing a tourist visa does not exceed 3 working days, not counting the day of submission of documents.
                    `
                  },
                  text9: {
                    title: `Customs`,
                    disc: `Amounts over 500 USD or their currency equivalent must be declared upon arrival. The maximum amount allowed for import is 5000 USD. Import and export of the national currency is prohibited. It is also prohibited to import drugs, weapons and ammunition, poisonous and explosive substances, pornography and any printed materials, photo and video materials that are contrary to the norms of Islamic morality. Precious metals and stones can only be exported if there is a document confirming their purchase in a Tajik store.
                    `
                  },
                  text10: {
                    title: `Passport Regime
                    `,
                    disc: `Foreign citizens temporarily staying in the Republic of Tajikistan are required to register their national passports or documents replacing them within three days in accordance with the established procedure and leave the Republic of Tajikistan after the expiration of the period of stay. (Law No. 33 of 6.08.01)
                    `
                  },
                  text11: {
                    title: `Useful information`,
                    disc1: `Internet domain - tj`,
                    disc2: `Telephone code - +992`,
                    disc3: `Main voltage - 220 V AC, 50 A; standard double plug socket`,
                    disc4: `Time: GMT + 5 hours`,
                  }
                }
              }
            },
            turk: {
              title: `Turkmenistan`,
              disc: {
                text1: `The country is located in the southwest of Central Asia, borders on Afghanistan and Iran in the south, Kazakhstan and Uzbekistan in the north, is washed by the inland Caspian Sea in the west, has no access to the oceans. Member of the UN since March 2, 1992. The capital of the country is the city of Ashgabat.`,
                text2: `October 27, 1924, according to the national-state delimitation of the Soviet republics of Central Asia, it was transformed into the Turkmen SSR. On October 27, 1991, the Supreme Council of the Republic adopted the Declaration of Independence, approved the new name of the country - Turkmenistan.
                `,
                text3: `The capital of Turkmenistan is Ashgabat, the largest administrative, political, industrial, scientific and cultural center of the state. Ashgabat is a separate administrative unit - a city with the rights of a velayat (region). is located in the south of Turkmenistan, 25 km north of the border with Iran on the Turan lowland.`,
                text4: `The city is located in the Akhal oasis on the Kopetdag foothill plain. According to official estimates, about 12.5% of the population of Turkmenistan lives in Ashgabat. Buildings in Ashgabat are mostly built in oriental architectural style. Almost all houses, skyscrapers, mosques and sidewalks are decorated with beautiful marble. The famous oriental bazaar "Jygyllyk" (Tolkuchka) is located 5 km north of Ashgabat. Ashkhabad, the capital of Turkmenistan since October 1924. It is located on the Kopetdag foothill plain, at an altitude of 214-240 m. The city is located in the Akhal oasis. With the formation of the Turkmen SSR on October 27, 1924, the city became the capital of the republic, and in 1927 it was given the national name Ashgabat.
                `,
                text5: `There are 3 international airports in the country in the cities of Ashgabat (named after Saparmurat Turkmenbashi the Great), Mary and Turkmenbashi. The state-owned airline transports more than 2,000 passengers daily within the country. More than half a million people are transported annually on international airlines. The total length of railways is 3181 km. There are no electrified roads. The passenger traffic of the railways of Turkmenistan is limited by the state borders of the country, with the exception of sections along which the transit of trains from Tajikistan to Uzbekistan and beyond passes. At the moment, the construction of the Kazakhstan-Turkmenistan-Iran railway is underway.
                `,
                text6: `Turkmenistan is characterized by a continental climate of temperate deserts: long dry hot summers, cool wet autumns and cold winters with little snow. The duration of the winter period in the extreme northeast and southwest is minimal - a month, and in the extreme north and northeast - more than 4 months. The average January temperature in the northeast is below -6°С, in the southeast and southwest from +3°С to +5°С. In July it varies within +25°, +32°. Turkmenistan belongs to the area of insufficient moisture. On the flat territory, the annual precipitation does not exceed 150 mm, in the Aral Sea and Karabogazgol - less than 100, and in mountainous areas - 350 mm. The development of agriculture in arid conditions is based solely on artificial irrigation.
                `,
                text6: `Tourism is an industry that has been developing rapidly in recent years. Medical tourism is developing especially intensively. First of all, this is due to the creation of the Avaza tourist zone on the coast of the Caspian Sea. Every tourist must obtain a visa before entering Turkmenistan. To obtain a tourist visa, citizens of most countries need visa support from a local travel agency.
                `,
                text7: `For tourists visiting Turkmenistan, excursion tours are organized with visits to historical sights of Dashoguz, Kunya-Urgench, Ashgabat, Nisa, Merv, Mary, beach tours to Avaza and medical tours and recreation in Mollakar (a sanatorium located in the Karakum desert), Yyly Suva, Archmane (a resort in the Akhalta region known for its sulfur-sulfate-lime springs).
                `,
                text8: `On the territory of Turkmenistan there are three objects included in the list of UNESCO World Heritage Sites: Nisa, Ancient Merv and Kunya-Urgench.
                `,
                text9: `Nisa is an ancient and medieval city founded at the foot of the Kopetdag by the Parthians in the 3rd century BC. BC e. and over the next six centuries served as the primary stronghold of the Arshakid dynasty, and sometimes the capital of Parthia (under the name "Mihridatkirt", in honor of King Mithridates I). After the Sassanids came to power, it fell into decay, revived in the Middle Ages as a trading center on the Silk Road. In the 10th century, Nisa was granted by the Samanid Nuh II to the ruler of Khorezm, Mamun. The city was under the rule of the Mamunids until the conquest of Khorezm by Mahmud Ghazni in 1017. The son of Mahmud Masud in 1035 was forced to give Nisa to the Seljuks who invaded Khorasan. From the 12th century, the city came under the rule of a new dynasty of Khorezmshahs - the Anushteginids, in whose hands it remained until the Mongol conquest in 1220. From the 16th century, Nisa steadily fell into decay and by the 1820s was a ruin. Excavations conducted in Nisa by M. E. Masson in 1946-1960 revealed the ruins of a columned hall, sanctuaries and fortifications, documents written in Aramaic script in the Parthian language, rich evidence of the everyday life of the Parthians, their Hellenistic art (for example, decorated monumental statues made of baked clay). In 2007, the ruins of the Parthian fortress were included in the UNESCO World Heritage List.
                `,
                text10: `Merv is the oldest known city of Central Asia, standing on the banks of the Murgab River in the southeastern part of Turkmenistan, 30 km east of the modern city of Mary. Originated in the middle of the 1st millennium BC. e. Merv reached its peak in the middle of the 12th century, when Sultan Sanjar made it the capital of the Seljuk state. At this time, Merv amazed contemporaries with the scale of its buildings and huge population, which, according to some estimates, was larger than the population of Constantinople and Baghdad. It continued to be the largest center of Central Asia under the Khorezmshahs. In 1221, Merv was destroyed by the Mongols and did not revive until the 15th century, when the Timurids finally put its irrigation facilities in order, but Merv could not achieve its former greatness, over time the settlement was moved to the site of the modern city of Mary. With the arrival in the 1880s. The Russian army began an archaeological study of the territory of the Merv oasis, which acquired a systematic character in the post-war period thanks to the activities of M. E. Masson. The ruins of Merv are a monument of the World Heritage of Humanity.
                `,
                text11: `Kunya-Urgench was the capital of Khorezm in the X—XIII and XIV centuries. The date of its foundation is unknown, but the remains of the oldest fortress of the city "Kyrkmolla" belong to the ancient period (V-II centuries BC). The city is mentioned in the sacred book of the Zoroastrians - Avesta under the name "Urva", "Urga". In the Kangyui period, the city was known as "Khangird", "Khajird". At the end of the 10th century, after the annexation of southern Khorezm to the northern one, Urgench became the capital of the united Khorezm state. In 1221 the city was taken and destroyed by the Mongols. In 1224 it entered the possession of Khan Jochi and was soon restored. From the middle of the 13th century - as part of the Golden Horde, retained the importance of a trade, craft and administrative center. In the middle of the 14th century Khorezm was freed from the power of the Golden Horde, and Urgench again became its capital. In 1388 it was destroyed by Timur. In 1391 it was partially restored, but did not reach its former significance; in the 17th century ceased to exist. In Urgench, the mausoleum of Fakhraddin-Razi (2nd half of the 12th century), the mausoleum of Tekesh (end of the 12th - beginning of the 13th centuries), the minaret of Kutlug-Timur (1321-1333), the khanaka - a three-domed portal structure with the mausoleum of Najmeddin Kubra (1st third of the 14th century), the portal of the caravanserai of the 14th century. In 2005, the monuments of the city were included in the UNESCO World Heritage List.
                `,
                text12: `Margiana (Greek Margiane, other Persian Margush) is the name of an ancient region in Central Asia, along the Murghab River (now southeast of Turkmenistan and north of Afghanistan). The earliest mentions of Margiana are in the Avesta and the Behistun inscription. Margiana bordered Parthia in the west, Sogd in the northeast, Bactria in the east, and Areia in the south. The capital of Margiana was located in the region of Ancient Merv. In 522 BC e. in Margiana there was a popular uprising against the power of the Achaemenids, suppressed by King Darius I (521). Later, Margiana was successively part of the state of Alexander the Great, the Seleucid state and the Parthian kingdom. In the Middle Ages, the lands of Margian entered Khorasan.
                `,
                text13: `In the 1st third of the 1st millennium BC. e. urban-type settlements (Yaz-depe) appear in Margiana. In the middle of the 1st millennium BC. e. cities are surrounded by fortress walls (Merv). In the III century BC. e. the influence of Hellenistic culture penetrates into the art of Margiana. During the heyday (II century BC - III century AD), the cities and fortresses of Margiana were built according to a regular plan, sometimes with "corrugated" walls (Chilburdzh); a residential building is characterized by the combination of several dwellings in one yard (Jin-depe); terracotta figurines are widespread, ossuaries in the form of architectural structures are found. Monuments of Buddhist architecture and sculpture date back to the 3rd century. The artistic traditions of Margiana are developed in the art of Merv.
                `,
                text14: `The famous "fast as the wind" Akhal-Teke horses glorified the country all over the world, even the Akhal-Teke horse is depicted on the coat of arms of the state. This is a truly unique breed - fast, graceful, with a chiseled "swan" neck and thin "dry" legs, these horses are also surprisingly hardy. For centuries Turkmens highly valued good horses and considered them their friends. This "passion" has survived to this day and now horses are one of the main attractions of the country.
                `
              },
              disc2: {
                title: `REFERENCE INFORMATION`,
                text: {
                  span1: {
                    title: `State Structure of Turkmenistan
                    `,
                    text1: `The state structure of Turkmenistan is a presidential republic with a one-party system, which includes 5 velayats and Ashgabat - a city with the rights of a velayat. The legislative body is the Mejlis (parliament, 125 members). The monetary unit is the manat.
                    `,
                  },
                  span2: {
                    title: `Administrative division of Turkmenistan
                    `,
                    text1: `In administrative terms, Turkmenistan consists of 6 administrative-territorial units, 5 of which are velayats, 1 is a city with the rights of a velayat:
                    `,
                    text2: `Ahal velayat. The capital is Anau.
                    `,
                    text3: `Balkan velayat. The capital is Balkanabad (Nebit-Dag).
                    `,
                    text4: `Dashoguz velayat. The capital is Dashoguz (Tashauz).
                    `,
                    text5: `Lebap velayat. The capital is Turkmenabad (Chardzhou).
                    `,
                    text6: `Mary velayat. The capital is Mary.
                    `,
                    text7: `The city of Ashgabat.
                    `,
                  },
                  span3: {
                    title: `Economy of Turkmenistan
                    `,
                    text1: `Having large reserves of natural gas (15-20 trillion cubic meters) and oil (1.5-2.0 billion tons), Turkmenistan is one of the important exporters of fuel resources. This sector of the economy forms approximately 70% of the gross national product. Major industries include oil and natural gas refining and processing; production of glass, fabrics (mainly cotton) and clothing; food industry.
                    `,
                  },
                  span4: {
                    title: `Population:`,
                    text1: `More than 5 million people. (2012)`,
                  },
                  span5: {
                    title: `Religion`,
                    text1: `The vast majority of the population of Turkmenistan are Muslims (mostly Sunnis) - 89%. Christians make up about 9% of the population, other denominations - 2%.
                    `,
                  },
                  span6: {
                    title: `Language`,
                    text1: `The state language of Turkmenistan is the Turkmen language.
                    `,
                  },
                  span7: {
                    title: `State holidays
                    `,
                    text1: `New Year - January 1st
                    `,
                    text2: `Remembrance Day is January 12th
                    `,
                    text3: `Day of the State Flag of Turkmenistan - February 19
                    `,
                    text4: `International Women's Day - March 8
                    `,
                    text5: `National Spring Festival - March 21-22
                    `,
                    text6: `Victory Day in the Great Patriotic War of 1941-1945 - May 9
                    `,
                    text7: `The Day of Revival, Unity and Poetry of Magtymguly Fragi - May 18
                    `,
                    text8: `National Remembrance Day - October 6
                    `,
                    text9: `Independence Day of Turkmenistan - October 27-28
                    `,
                    text10: `National holiday of Turkmenistan - Day of Neutrality - December 12
                    `,
                    text11: `Eid al-Adha and Oraza Bayram
                    `
                  },
                  span8: {
                    title: `Visa`,
                    text1: `Every tourist must obtain a visa before entering Turkmenistan. To obtain a tourist visa, citizens of most countries need visa support from a local travel agency.
                    `,
                  },
                  span9: {
                    title: `Customs`,
                    text1: `The import and export of local currency is prohibited. The import of foreign currency is not limited (the amount must be indicated in the declaration). You can export the amount not exceeding that specified in the declaration.
                    `,
                    text2: `Passengers over the age of 16 are allowed duty free import of up to 200 cigarettes or 200 gr. tobacco; up to 2 liters of any alcoholic beverages (for persons over 21 years old); as well as personal items in reasonable quantities.
                    `,
                    text3: `When entering the country, a customs declaration must be completed, which must be kept until departure. This facilitates the subsequent export of items and things intended for personal use, including currency and jewelry, which must be indicated in the declaration. Customs inspection is usually quite lengthy and detailed. It is recommended to keep currency exchange receipts and checks from shops. This will facilitate the export of goods purchased in the country, especially if they were paid for in foreign currency.
                    `,
                    text4: `The import and export of weapons, ammunition and drugs is prohibited. Works of art and antiques can be imported and exported only with the permission of the Ministry of Culture. The export of carpets, jewelry, musical instruments, art and archaeological exhibits, etc. is possible only if there are documents confirming the legality of their acquisition. To export carpets from Turkmenistan, it is also necessary to obtain a certificate from the Carpet Museum in Ashgabat that the carpet has no historical value. In addition, you will have to pay a tax depending on the size of the carpet.
                    `,
                  },
                  span10: {
                    title: `Passport Regime
                    `,
                    text1: `Based on the Law "On Migration" of 2005, foreign citizens upon arrival at their destination in Turkmenistan are required to register within three working days on the basis of received visas in the manner prescribed by this Law. Registration is carried out on the basis of written requests from the host legal entities and individuals of Turkmenistan.
                    `,
                  },
                  span11: {
                    title: `Useful information
                    `,
                    text1: `Internet domain - tm`,
                    text2: `Telephone code - +993`,
                    text3: `Network voltage - 220 V AC, 50 A; standard double plug socket
                    `,
                    text4: `Time: GMT + 5 hours
                    `,
                  },
                }
              }
            },
            history: {
              title: `History of the Peoples of Central Asia`,
              text: {
                title: `CENTRAL ASIA - THE ARENA OF GREAT BATTLE`,
                text1: `Modern Central Asia consists of five independent states after the collapse of the USSR in 1991: Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan and Uzbekistan, occupying the territory from the Caspian Sea in the west to the borders of China in the East.
                `,
                text2: `History of the peoples of Central Asia until the VI century BC. e. known only from fragmentary information from the folk epos and legends. We find more reliable information from ancient authors.
                `,
                text3: `The rich and fertile lands of the oases of Central Asia, with their very favorable geographical position, have always been a tasty morsel for conquerors. In 540 BC, Bactria, which occupied the territory from the Gissar Range in Uzbekistan to the Hindu Kush in Afghanistan, became a satrapy of the Achaemenid state with Cyrus II the Great (559-530 BC), then he subjugated the Saks, as well as Sogdiana, Khorezm and Parthia, mentioned in the text of the Behistun inscription of Darius I (522-486 BC). Sakas and Massagets (nomadic and semi-nomadic tribes) lived on the territory of Central and Eastern Kazakhstan, Aral Sea, Semirechye and Pamir. From Herodotus we know about the Massagetae queen Tomiris, who defeated Cyrus II. Sogdiana (Sogd) occupied the territory of modern Tajikistan (without the Pamirs) and Uzbekistan (without Khorezm and northern Bactria) with the capital Marakanda, founded in the 8th century. BC. Khorezm is a state in the lower reaches of the Amu Darya. One of the most ancient historical and cultural regions of Central Asia. Many researchers identify it with the country of the Aryans - the Avestan Aryanam Voichach, the first Zoroastrian country. Parthia included the Kopetdag Mountains and adjacent valleys of southwestern Turkmenistan and northeastern Iran.
                `,
                text4: `The Central Asian peoples were drawn into the rivalry between the strongest powers of that time, Persia and Greece. Together with the Persians, they participated in campaigns against the Athenian Greek state. We also know that in the Battle of Gaugamela (331 BC), Alexander the Great defeated the last Achaemenid Darius III on his head, putting an end to the rule of the Achaemenids over the peoples of Central Asia. Alexander united Sogdiana and Bactria into one satrapy, which was later transformed by Diodotus into the Greco-Bactrian state, which lasted until the 2nd century BC. BC e.
                `,
                text5: `The ancient Greek historian Strabo reports that Bactriana was taken away from the Hellenes by nomadic peoples who came from the country of the Saks. Chinese sources speak of the conquest of Dakhya - Bactria by the Yue-Chzhami, who were ousted from Eastern Turkestan by the Huns. After the victory over the Greco-Bactrian rulers, the Yue-chi settled on the right bank of the Amu Darya. Ancient authors identify the Yue-chih with the Tocharians. Hence the later name of these regions - Tokharistan.
                `,
                text6: `Based on the report of the Chinese ambassador Zhang Qian, the Chinese historian mentions the nomadic (possibly Scythian) state of Kangyu, where customs are similar to the Yue-zhi. The history of Kangyu in the legend dates back to the time of the Avesta, where Kangkha is mentioned as the capital of Turan. Both the Avesta and the Indian epic Mahabharata, which finally took shape by the 4th century BC, mention the state of Kangha. n. e. It existed in the lower and middle reaches of the Syr Darya from the 2nd century BC. BC e. until the 4th c. n. According to later references by Chinese historians, Bukhara, Shakhrisabz, Kattakurgan, the Tashkent oasis and the northern part of Khorezm were subordinate to Kangkha.
                `,
                text7: `In the same period, according to Zhang Qiang, the state of Davan (Fergana) existed on the territory of Central Asia, uniting 70 cities, its ruler sat in the city of Gushan (Yu-chen), possibly the current Uzgen.
                `,
                text8: `Chinese chronicles report that in Dahya-Bactria in the 1st century A.D. e. one of the five Yue-Chzhi clans, Guishuang (Kushan), rose. The Kushan prince Kadfiz declared himself sovereign, started a war, culminating in the creation of the territorial core of the Kushan kingdom. His successors completed the creation of the great Kushan Empire, which included the territories of Central Asia, Afghanistan, partly India and Pakistan, and which was equal in size and power to the Roman and Chinese empires. In the Kushan period of history, Buddhism became one of the world religions and the Great Silk Road flourished.
                `,
                text9: `In the 5th-6th centuries, the Kushan Empire was replaced by the state of the Hephthalites. According to the historian Lev Gumilyov, the Ephthalites (White Huns) as a people formed in the mountainous region of the Pamirs. The Ephtalite state included the territories of Central Asia, except for Khorezm (Sogdiana, Bactria-Tokharistan, Fergana), as well as Afghanistan and Eastern Iran. During the wars, the Hephthalites destroyed the Gupta state in India. They themselves fell under the blows of the Indian, Sasanian and Turkic rulers.
                `,
                text10: `In the 6th-7th centuries, the peoples of Central Asia entered the vast state of nomads - the Turkic Khaganate, which controlled a vast territory from the Pacific Ocean to the Black Sea (in 630 and to the Indian Ocean), and with it the Great Silk Road. China was forced to pay tribute to him in the amount of 1,000 pieces of silk. However, only until 630, when the Chinese defeated the Turks.
                `,
                text11: `In the 7th c. a new threat hung over the Central Asian peoples - the invasion of the Arabs, who had already captured Syria, Palestine, and Iran. In 651 they approached prosperous Merv and took it without a fight. At the beginning of the 8th century, Arab troops under the command of Kuteiba ibn Muslim completed the conquest of most of Central Asia. According to the historian Ibn al-Asir, Kuteiba brought up to 100,000 captive slaves from Central Asia. In the ninth century in the process of disintegration of the Arab Caliphate in Central Asia, which had already adopted Islam from the Arabs, the local Samanid dynasty (819-999) was established.
                `,
                text12: `In 999, Bukhara, the capital of the Samanids, was captured by the troops of the Karakhanid state, formed by the Turkic tribes of Semirechye and Kashgar, and which had already conquered Shash, Ferghana and the lands of ancient Sogd.
                `,
                text13: `In 1141, Kara-Kitais appeared in Maverranakhr. They organized raids from the territory of Semirechie, where they formed their own state. Taking advantage of the feudal fragmentation of the territory, they first captured Samarkand, then Bukhara. But they were only interested in tribute.
                `,
                text14: `Khorezm stood up to fight against the Kara-Khitai, having strengthened itself after the fall of the Seljuk dynasty in Iran in 1194 and did not want to pay tribute. Khorezmshah Mohammed in 1210 took Bukhara and, in alliance with the Samarkand khan from the Karakhanids, Osman, moved to Semirechye. In the valley of the Talas River, the Khorezmshah captured Tayangu, the commander of the Kara-Chinese troops. On the eve of the Mongol invasion, Khorezmshah Muhammad united the lands of Maverannahr, conquering them one by one and including them in the Khorezm state.
                `,
                text15: `Genghis Khan did not want to attack Central Asia at all, but Muhammad, not wanting to become a vassal, killed the Mongol ambassadors. This tragically sealed the fate of Central Asia. Even before the summer of 1220, the eastern and central parts of the territory of Maverannahr were captured by the Mongols. Many cities lay in ruins. The cities of Samarkand, Merv, Termez, and Urgench were especially hard hit. The one and a half century rule of the Mongols in Central Asia brought innumerable disasters to its peoples and was accompanied by widespread decline.
                `,
                text16: `Amir Temur (1336-1405) united disparate lands into a single state, making Samarkand its capital in 1370. He united Maverannahr, Fergana and the Shash region without difficulty, but he managed to annex the obstinate Khorezm only in 1380. By the mid-80s of the XIV century, Temur already owned Khorasan, and then all of Iran. To weaken the Golden Horde, he undertook three campaigns against the Golden Horde Khan Tokhtamysh (in 1387, 1391 and 1394-95). In 1392 he conquered Armenia and Georgia, in 1397 - Azerbaijan. In 1398-99. Temur captured Delhi and the nearby regions of India. In 1400, he entered into a struggle with the Turkish sultan Bayazet I and the Egyptian sultan Faraj. Captured Sivas in Asia Minor and Aleppo in Syria. In 1402, in the battle of Ankara, he defeated and captured the powerful Sultan of the Ottoman Empire. Only death in 1405 prevented his campaign against China. Temur's goal was to dominate the world caravan trade routes connecting the countries of Europe and Asia Minor with the Far East. He sought to direct trade along the old route through Central Asia, destroying the northern highway, which was controlled by the Golden Horde. Therefore, in 1395 he completely destroyed the Golden Horde cities of Azov, Saray, Urgench.
                `,
                text17: `In the XV century. feudal fragmentation and internecine wars weakened the power of the Temurid state. One after another, the Uzbek dynasties of Sheibanids (XVI century), Ashtarkhanids (XVII-XVIII centuries), Mangyts ruled on its lands. Their reign was also accompanied by endless internecine wars that devastated cities and devastated lands. As a result, three khanates were formed - Bukhara, Khiva and Kokand, a fierce struggle between which for predominance in Central Asia continued until they were annexed to Russia in the second half of the 19th century.
                `
              }
            },
            silkRoad: {
              title: `The Great Silk Road`,
              text1: `The Great Silk Road, which connected the western and eastern parts of the world's largest continent for more than one and a half thousand years, has become one of the greatest achievements of mankind. In it, as in a giant retort, life was seething, there was a rapid development not only of trade, but also of various branches of the production of goods, which were required more and more. Along with this, there was a grandiose mixing and enrichment of cultures, the development of sciences, arts, and crafts.
              `,
              text2: `The Great Silk Road was a giant road system, it would even be more correct to say two gigantic road systems, separated until the 2nd century BC. e. as a watershed by the mountain ranges of the Tien Shan, Kun-Lun, Karakoram, Hindu Kush, Himalayas. Until that time, the inhabitants of Europe, Egypt, Arabia, Mesopotamia (modern Iraq and Iran), Western and Central Asia, the Greco-Roman world, interconnected by caravan routes for many millennia, did not even suspect the existence of a huge Chinese empire, one of oldest in the world.
              `,
              text3: `In the Celestial Empire, closed to the entire Western world, but also possessing an extensive network of roads, they also did not suspect the existence of the richest lands with many prosperous cities literally nearby. The first to see them was the Chinese ambassador Zhang Qian, who began his journey in 138 BC. e. and after many years of ordeals ended up in Central Asia. On his stay in Davan (Fergana Valley), Kangyui, Sogd, Bactria, he compiled a detailed report to the Chinese emperor, who was most of all seduced by the famous Davan horses, which in China began to be called "heavenly", they were very different from the squat local horses. The Chinese emperor, according to legend, it was on such horses that he could ascend to heaven and become immortal.
              `,
              text4: `In exchange, the Chinese offered their goods. According to historians, the first caravan with silk, a very compact and expensive commodity, as well as with bronze (and not only!) mirrors, left China for the Ferghana Valley in 121 BC. e. He moved through the Turfan depression along the Fiery Mountains and the spurs of the Tien Shan. In this regard, the find of the Uzbek-French expedition, 35 km from Samarkand, of the burial of the so-called "Sogdian princess", which is two thousand years old, is interesting. Among the many gold jewelry in the burial, a Chinese mirror made of a mysterious alloy was found. Most likely, the "princess" was also covered with silks, but this fabric is too ephemeral to be preserved underground for twenty centuries.
              `,
              text5: `Unprecedented hitherto Chinese goods, especially silk, quickly gained popularity outside of Central Asia: first in Persia, and then throughout the western part of the Great Silk Road, which, by the way, began to be called so only from 1877 with a slight the hands of the German geographer, Chinese explorer Ferdinand Richthofen.
              `,
              text6: `The Romans called silk Chinese veil, they paid fabulous money for it, in particular for the fact that silk was practically the only protection against parasitic insects. The Chinese kept the secret of making silk a secret for a long time, the Europeans even believed that silk grows on trees. But, as they would say now, as a result of industrial espionage, the secret ceased to be a secret.
              `,
              text7: `Silk is not the only thing that the Western world received as a result of contacts with China. Chinese porcelain tableware of the finest work with elegant drawings, bronze and lacquerware, medicines, perfumery, tea, rice and, of course, paper, the manufacturing technology of which the Chinese were the first to master, as well as the production of gunpowder, were in great demand in the West. The compass, by the way, was also invented by the Chinese.
              `,
              text8: `China itself did not lose out either. Together with the horses, food for them, alfalfa, also came to China. In addition to the "heavenly horses", camels, fat-tailed sheep, hunting dogs, and even lions and cheetahs were subsequently imported to China.
              `,
              text9: `Cotton that came with caravans began to be cultivated here, as well as beans, onions, cucumbers, carrots, walnuts, pomegranates, figs, peaches, watermelons, melons, and grapes. The Chinese also appreciated grape wine ... `,
              text10: `ʻIn addition, Central Asia supplied China with wool products, which they did not know there - fabrics, carpets, rugs, as well as military equipment, gold, silver, semi-precious stones, Samarkand glass products, leather, cotton and gold-embroidered fabrics ... Through Goods from Western and Eastern Europe, the Mediterranean, Western Asia, Transcaucasia went from Central Asia to China ... `,
              text11: `The Great Silk Road has become a conductor of not only material values, but also spiritual ones. Together with merchant caravans, wandering Buddhist monks carried their religion first from India to Central Asia (I-III centuries), from there to China (IV-VI centuries) and further to Japan. `,
              text12: `A large Quantity of Buddhist monuments have been discovered on the territory of Uzbekistan. The ancient settlement of Dalverzintepa (60 km from Termez) is world-famous – a monument of the era of the Kushan Empire, near which the ruins of a Buddhist sanctuary, richly decorated with sculptures and dating from the 1st century BC, were found. n. e. A sculptural image of the head of a Kushan prince in a pointed headdress was also found there. Nearby, in the second Buddhist complex, statues of Buddha and bodhisattvas were found. An Uzbek-Japanese archaeological expedition unearthed the dwellings of Buddhist monks at the site of Karatepa, and at some distance from them a Buddhist monastery with a well-preserved stupa.
              `,
              text13: `Manichaeism (an alloy of Zoroastrianism and Christianity) spread along the Great Silk Road in the 3rd century, then Nestorianism and Christianity, and from the 8th century - Islam. In the 14th century, Buddhism was forced out to Islam from East Turkestan (now the Xinjiang Uygur region)
              `,
              text14: `The Great Silk Road is not only countless caravans of several hundred or even thousands of camels and horses (it was too dangerous to move in small groups), but also a huge Quantity of “related enterprises”: caravanserais that combine the functions of hotels for merchants and their attendants, as well as warehouses and premises for pack animals, fodder and provisions; wells; customs; money exchange points. Going on a long journey, merchants were afraid to take large amounts of cash with them, so from the 10th century, when Muslims and Jews began to control trade on the Silk Road, they began to hand over money to money changers, receiving in return a receipt, in Persian “check”, which was exchanged for money in those cities of the Silk Road, where the proxies of these money changers were located.
              `,
              text15: `The Great Silk Road provided a livelihood for a huge mass of people living in nearby territories along its entire length from the Atlantic to the Pacific Ocean, including nomadic peoples who equipped detachments for the protection of caravans for a reward, sometimes from their own less fortunate relatives , as well as supplying merchants with pack animals and provisions. The rulers of the states through which the caravans passed were interested in receiving income from customs duties, therefore they adopted special laws that protected merchants. In the time of Amir Temur, for example, the ruler of the land on which the caravan was robbed had to double the loss to the merchants or their heirs, and contribute five times more to the state treasury. That's what had to be protected.
              `,
              text16: `New cities grew up along the entire route of the caravans and old ones grew rich, crafts flourished in the cities, arts and sciences developed, enriched with more and more new ideas and knowledge. Architecture and urban planning developed, in Central Asia, as an example, we can name the tomb of the Temurids Gur-Emir in Samarkand, the Ak-Saray palace in Shakhrisabs, the mosque of Khoja Ahmad Yassawi in Yassy, where architectural styles, forms, building techniques of various countries and cultures are combined. Suffice it to say that craftsmen from Azerbaijan, Armenia, Georgia, India, Iraq, Iran, Syria took part in their construction together with Central Asian architects...
              `,
              text17: `The largest centers, a kind of hubs of that time, were the ancient cities and lands of Uzbekistan - Davan, Samarkand, Bukhara, Khorezm, Termez ... Here was the center of not only economic but also cultural life. The pulse of this life was especially noticeable in the crowded and multilingual bazaars, where citizens and visitors learned news, prices for goods, listened to performances by artists, musicians, singers, storytellers, admired the art of tightrope walkers and dancers. Here, merchants could exchange their goods, because few of them traveled all the way, which had a length of no less than 12 thousand km. Almost none of those traveling along the Great Silk Road had any idea about the grandeur of this transcontinental highway, everyone knew only their own specific section, at best, half of the entire route.
              `,
              text18: `It is believed that one of the first who opened the eyes of Europeans to the size of the Eurasian continent and described the eastern countries was Marco Polo, who at the turn of the 13th and 14th centuries traveled the entire Silk Road from beginning to end.
              `,
              text19: `During its existence, the Great Silk Road has experienced periods of prosperity and decline more than once. Like a wayward river, it often changed its main channels, bending around dangerous sections of the path.
              `,
              text20: `In the XIII-XIV centuries the Great Silk Road experienced its last rise. The Mongols, led by Genghis Khan, conquered in 1210-1250. all countries from China to Iran and Rus' took almost the entire Eurasian trade route under their control for a century and a half. But already in the second half of the 14th century, the highway, which had a history of one and a half thousand years, fell into decay, despite the attempt of Amir Temur in 1370-1380. to reunite all Eurasian routes, which gave only a temporary result.
              `,
              text21: `The fault was the development in the XIV-XV centuries of merchant shipping along the coasts of the Middle East, South and Southeast Asia. Judge for yourself: the sea route from the Persian Gulf to China took about 150 days, and the caravan route from Azov to Beijing took about 300 days. Moreover, one ship could carry as much cargo as a thousand pack animals.
              `,
              text22: `The section of the Great Silk Road that connected China with Central Asia existed the longest. Caravan trade between them ceased only in the 18th century.
              `
            }
          },
          visa: {
            title: `Visa support
            `,
            text1: `Visa formalities
            `,
            text2: `Visa-free regime in the Republic of Uzbekistan is valid for citizens of Kyrgyzstan (up to 60 days), Armenia, Azerbaijan, Belarus, Georgia, Kazakhstan, Moldova, Russia and Ukraine.

            `,
            text3: `In 2018, a visa-free regime was established for a period of 30 days for citizens of: Japan, the Republic of Korea, Singapore, Israel, Tajikistan, Turkey, Indonesia, Malaysia and France. The visa-free regime is valid for 30 days from the date of entry into Uzbekistan.
            `,
            text4: `In 2019, this list was replenished with 46 more countries. The list includes Australia, Austria, Argentina, Andorra, Belgium, Bulgaria, Brazil, Brunei Darussalam, Bosnia and Herzegovina, Great Britain, Vatican City, Hungary, Greece, Germany, Denmark, Spain, Ireland, Iceland, Italy, Canada, Luxembourg, Liechtenstein , Latvia, Lithuania, Monaco, Mongolia, Malta, Netherlands, Norway, New Zealand, Portugal, Poland, Republic of Cyprus, Romania, San Marino, Serbia, Slovenia, Slovakia, Finland, Croatia, Chile, Montenegro, Czech Republic, Switzerland, Sweden , Estonia.

            `,
          },
          aboutCompany: {
            title: `Company`,
            text1: `Travel agency "Orient Voyage" is a leading tour operator for inbound tourism to Uzbekistan, with its head office in Samarkand and a representative office in Tashkent.
            `,
            text2: `The company was founded in December 1992 and became one of the first private companies in the tourism market of independent Uzbekistan. The purpose of the company was to provide a wide range of tourist services for individual and group tourists staying in Uzbekistan and other countries of Central Asia.
            `,
            text3: `Over many years of work, we have developed strong partnerships with travel service providers (hotels, restaurants, museums, railways, airlines, etc.), which allows us to offer our customers competitive prices and high quality service. An important factor in providing quality services is that Orient Voyage has its own staff of highly qualified guides and interpreters.
            `,
            text4: `The list of our partners includes major travel companies in Europe and the Middle East, Australia and Southeast Asia. We are proud of our many years of cooperation with them.
            `,
            text5: `Over the years, the company has expanded its activities and today has a well-developed infrastructure. We have created a network of hotels "Orient Star" in the main tourist centers of the country - Khiva, Bukhara and Samarkand, our own fleet of modern buses and minibuses "Orient Bus".
            `,
            text6: `Several years ago, we reconstructed an old caravanserai in Samarkand, where various events are now held for our tourists: evenings with folklore performances, traditional tea parties, acquaintance of tourists with recipes for cooking oriental sweets and national dishes.
            `,
            text7: `ʻOrient Voyage is a regular participant of various travel fairs - ITB (Germany), Top Resa (France), TTG Incontri (Italy), ITB Asia (Singapore), WTM (UK), FITUR (Spain).
            `,
            text8: `ʻOur experienced and professional team, speaking many languages, will always help to make (develop) the correct, optimal travel route, taking into account your wishes and travel dates.
            `,
            text9: `We will provide all the necessary information to each client: from the rules for issuing visa support to organizing the most diverse and interesting tours in Uzbekistan and other countries of Central Asia.
            `,
            text10: `A trip to Uzbekistan is an acquaintance with another world, rich in turquoise domes and grandiose landscapes, carefully preserved traditions and open hospitable people.
            `,
            text11: `Welcome to Uzbekistan!!!
            `,
            text12: `Team "Orient Voyage"
            `,
          },
          tourPage: {
            title1: `Itinerary`,
            title2: `Cost`,
            title3: `Request a tour`,
            day: `Day`,
          }

        },
        uz: {
          localTime: 'Mahalliy vaqt',
          language: 'Til',
          welcome: 'Xush kelibsiz',
          contactUs: 'Aloqa',
          request: {
            name: 'Initials',
            email: 'Email',
            phone: 'Telefon',
            date: 'Sana',
            rezident: 'Fuqarolik',
            value: 'Kattalar',
            disc: 'Sizning xabaringiz',
            send: 'Yuborish'
          },
          tourPage: {
            title1: `Yo'nalish`,
            title2: `Narxi`,
            title3: `Ekskursiyani talab qiling`,
            day: `Kun`,
          },
          uzbekistan: {
            title: 'Uzbekistan',
            country: 'Bir mamlakat',
            culture: 'Madaniyat',
            cities: 'Shaharlar',
            citiesName: {
              Tashkent: 'Toshkent',
              Samarkand: 'Samarqand',
              Bukhara: 'Bukhara',
              Khorezm: 'Xorazm',
              Shakhrisabz: 'Shahrisabz',
              Karakalpakstan: "Qoraqalpog'iston",
              Termez: "Termiz",
              Fergana: "Farg'ona",
            }
          },
          tours: {
            title: 'Ekskursiyalar',
            departures: "Kafolatlangan jo'nab ketishlar 2023",
            cultural_tours: "Madaniy sayohatlar",
            adventure_tours: "Sarguzashtli sayohatlar",
            combined_tours: "Markaziy Osiyo va Eron bo'ylab qo'shma sayohatlar",
            short_tours: "Qisqa turlar va kengaytmalar",
          },
          our_brands: {
            title: "Bizning brendlarimiz",
            Orient_bus: "Sharqiy avtobus",
            Star_Hotels: "Mehmonxonalar Orient Star",
            cities: 'Shaharlar',
          },
          central_asia: {
            title: "Markaziy Osiyo",
            Kazakhstan: "Qozog'iston",
            Kyrgyzstan: "Qirg'iziston",
            Tajikistan: "Tojikiston",
            Turkmeniston: "Turkmeniston",
            The_history: "Markaziy Osiyo xalqlari tarixi",
            The_Great: "Buyuk Ipak yo'li",
          },
          services: {
            title: "Xizmatlar",
            visa_formalities: "Viza rasmiylashtirishlari",
            uzbekistan_airways: "O‘zbekiston havo yo‘llari",
            Uzrailpass: "O‘zbekiston temir yo‘llari",
          },
          useful: {
            title: "Foydali",
            Gallery: "Galereya",
          },
          about_us: {
            title: "Biz haqimizda",
            Company: 'Kompaniya',
            Review: "Ko‘rib chiqish",
            Contacts: "Kontaktlar",
          },
          some: {
            title1_Uzbekistan_country: "O‘zbekistonning qadimiy muborak zamini",
            title1_text1: `Sayyoramizda sayohat qilish uchun qiziqarli bo'lgan ko'plab mamlakatlar mavjud. Bu davlatlardan biri O‘zbekistondir.
          <br>
          Mamlakatimiz Markaziy Osiyoning qoq markazida, Amudaryo va Sirdaryo oralig‘ida joylashgan bo‘lib, Markaziy Osiyoning boshqa to‘rt respublikasi: shimolda Qozog‘iston, janubi-g‘arbda Turkmaniston, sharqda Qirg‘iziston, sharqda Tojikiston bilan chegaradosh. janubi-sharqiy. Janubda Afgʻoniston bilan chegaraning kichik qismi (600 km) joylashgan.
          <br>
          O‘zbekiston o‘zining hozirgi chegaralarini 1924-yilda, milliy-hududiy delimitatsiyadan so‘ng, butun O‘rta Osiyo SSSR tarkibiga kirgandan so‘ng egalladi. 1991-yil 31-avgustda Sovet Ittifoqi parchalanganidan keyin Oʻzbekiston mustaqil davlat boʻldi.
          <br>
          Yevropa davlatlari bilan solishtirganda O‘zbekiston juda katta davlat – 447 ming kvadrat kilometr. Masalan, Italiya 301 ming kvadrat metr maydonni egallaydi. km. Yevropa davlatlaridan faqat Fransiya (551), Ispaniya (505) va Shvetsiya (450) O‘zbekistondan kattaroqdir."`,
          },
          mainPage: {
            popularTours: 'Mashhur sayohatlar',
            allTours: 'Barcha turlar',
            gallery: 'Galereya',
            review: 'Ko‘rib chiqish',
            reviewBig: "Hurmatli Movsesyan xonim, rafiqam Nensi, men va bizning sayyohlik guruhimiz 2014-yilning iyulidan avgustigacha salom va eng yaxshi tilaklarimni yo‘lladi. Biz ikkita sababga ko'ra yozamiz. Birinchidan, biz xohlaymiz ...",
            allReview: 'Barcha sharhlar'
          },
          toursMain: {
            tour1: {
              title: 'O‘zbekistonga kafolatli jo‘nab ketish: Samarqandga oltin yo‘l',
              days: '9 kunlar'
            },
            tour2: {
              title: "O'zbekistonga kafolatlangan jo'nab ketish: Ipak yo'li sayohati",
              days: '11 kunlar'
            },
            tour3: {
              title: 'Turkmanistonga kafolatli tur',
              days: '5 kunlar'
            },
            tour4: {
              title: "O'zbekiston - sehrli Sharqning durdonasi",
              days: '10 kunlar'
            },
            tour5: {
              title: "Qozog'iston va Turkmanistonga sayohat",
              days: '10 kunlar'
            },
            tour6: {
              title: "O'zbekistonni kashf et",
              days: '11 kunlar'
            },
            tour7: {
              title: "Iskandar Zulqarnayn izidan: Turkmaniston-O‘zbekiston-Tojikiston",
              days: '16 kunlar'
            },
            tour8: {
              title: "O'zbekiston - ipak, mozaika va cho'llar",
              days: '12 kunlar'
            },
            tour9: {
              title: "Tamerlan izidan: O'zbekiston - Tojikiston (5 kunlik trekking bilan)",
              days: '16 kunlar'
            }
          },
          uzbekistanPage: {
            uzbekistan: {
              title: 'Qadimiy muborak O‘zbekiston zamini',
              discription: {
                span1: {
                  first: `Sayyoramizda sayohat qilish uchun qiziqarli bo'lgan ko'plab mamlakatlar mavjud. Bu davlatlardan biri O‘zbekistondir`,
                  second: "Mamlakatimiz Markaziy Osiyoning qoq markazida, Amudaryo va Sirdaryo oralig‘ida joylashgan bo‘lib, Markaziy Osiyoning boshqa to‘rt respublikasi: shimolda Qozog‘iston, janubi-g‘arbda Turkmaniston, sharqda Qirg‘iziston, sharqda Tojikiston bilan chegaradosh. janubi-sharqiy. Janubda Afgʻoniston bilan chegaraning kichik qismi (600 km) joylashgan.",
                  third: "Oʻzbekiston oʻzining hozirgi chegaralarini 1924-yilda, milliy-hududiy delimitatsiyadan soʻng, butun Oʻrta Osiyo SSSR tarkibiga kirganidan soʻng egalladi. 1991-yil 31-avgustda Sovet Ittifoqi parchalanganidan keyin Oʻzbekiston mustaqil davlat boʻldi.",
                  // fourth: "По сравнению с европейскими странами Узбекистан очень большая страна - 447 тысяч квадратных километров. Италия, например, занимает 301 тыс. кв. км. Из европейских стран только Франция (551), Испания (505) и Швеция (450) больше Узбекистана по площади."
                },
                span2: `
                Oʻzbekiston poytaxti – Toshkent Tyan-Shan togʻ etaklarida Chirchiq daryosi vohasida joylashgan. Choch (Shash), hozirgi Toshkent shahri Buyuk ipak yoʻlining qadimiy shaharlaridan biri sifatida tanilgan. Bugungi kunda bu zamonaviy tez rivojlanayotgan, har yili o'zgarib turadigan shahar. Bu Markaziy Osiyodagi yagona metropolitendir. Shaharda ko'plab qadimiy obidalar, muzeylar, teatrlar, universitetlar, saroylar va bog'lar mavjud. Toshkent bozorlari bilan mashhur. Eng katta va eng go'zal bozor - Eski-Juva bozori, poytaxtning eski shahar qismida joylashgan.
                `,
                span3: {
                  first: "O‘zbekiston ming yillar avvalgidek Yevropani Sharqiy va Janubi-Sharqiy Osiyo bilan bog‘lovchi chorrahadagi qulay geografik o‘rinni egallashda davom etmoqda. Toshkent Markaziy Osiyodagi eng yirik xalqaro aeroportga ega. Oʻzbekistonni qoʻshni davlatlar bilan temir yoʻl va avtomobil yoʻllari bogʻlaydi. Aytishimiz mumkinki, bu Buyuk ipak yo‘lining tiklanishining yangi bosqichidir.",
                  second: "Oʻzbekiston Yevroosiyo qitʼasida yiliga eng quyoshli kunlar, taxminan 300 kun boʻlgan kam sonli davlatlardan biridir. Oʻzbekiston iqlimi keskin kontinental. Yanvarning oʻrtacha harorati +4°S dan -8°S gacha, iyulniki +22°S dan +42°S gacha. Tuproq unumdorligi haqida gap ketganda, Zarafshon, Amudaryo va Sir vodiylarini ta’kidlash lozim. Dariya va mamlakatning non savati - Farg'ona vodiysi. Yana bir narsa shundaki, hamma er ham yashash uchun mos emas. Mamlakat markazidagi ulkan hududni Qizilqum cho'li, Orol dengizining shimoli-g'arbida - qattiq iqlimi bilan ajralib turadigan qurg'oqchil Ustyurt platosi egallaydi; janubi-sharqda va sharqda - Pomir va Tyan-Shan tizmalari. Hayot yillar oldingi kabi Amudaryo, Sirdaryo va ularning irmoqlari vodiylarida VIII-VII asrlarda jamlangan. Miloddan avvalgi maorif haqidagi ilk maʼlumotlar: Baqtriya, Soʻgʻd (Soʻgʻdiyona), Xorazm paydo boʻlgan."
                },
                span4: {
                  first: "O‘zbekiston vohalari ming yillar avvalgidek shaftoli, o‘rik, gilos va boshqa ko‘plab mevalar mo‘l-ko‘l o‘sadigan bog‘ va dalalarga ko‘milgan. Sun'iy sug'oriladigan dalalarda turli xil sabzavot va boshoqli ekinlar yetishtiriladi. O‘zbekistonni “oq oltin” – paxta mamlakati deb ham atashadi. Xo‘sh, mamlakatimizning cho‘l va tog‘li hududlarida neft, gaz, foydali qazilmalar, jumladan, oltinning ulkan konlari o‘rganilib, o‘zlashtirilmoqda."
                },
                span5: {
                  first: "O‘zbekiston Markaziy Osiyoda qadimiy Buxoro, Samarqand, Xiva, Qarshi, Shahrisabz, Termiz, Marg‘ilon, Toshkent kabi qadimiy shaharlarga ega yagona davlatdir... Buyuk Ipak yo‘lining yo‘nalishlari bu shaharlarning barchasidan o‘tgan va ularning asrlar osha- eski farovonlik. Faqat qulay geografik joylashuvi tufayli ular o'zlarining zamondoshlari Bobil, Fiva va Persepolis kabi unutilmaydi ...",
                  second: "Vaqt va ko‘p sonli urushlar, diniy murosasizlik va zilzilalar arxeologlar izlari hamma joyda topilgan sopol suv quvurlari, noyob sug‘orish inshootlari bilan jihozlangan muhtasham saroylar, ibodatxonalar va shahar binolarini ayamadi. Ayniqsa, ularning ko'plari VII-VIII asrlarda arablar tomonidan vayron qilingan. va moʻgʻullar (XIII asr) bosqinlari. Shunga qaramay, Oʻzbekiston hududida 1400 dan ortiq tarixiy va meʼmoriy yodgorliklar mavjud boʻlib, ularning aksariyati noyob boʻlib, YuNESKOning Butunjahon merosi roʻyxatiga kiritilgan."
                },
                span6: `
                Albatta, har qanday sayyoh uchun eng jozibador shahar Samarqand shahridir (qadimda Marakanda yoki Maroqand). Bu shahar dunyoning sakkizinchi mo‘jizasi, Samarqandning tarixiy faxri – Registon maydoni, Temuriylar sulolasi qabri – Gur-Amir maqbarasi, Bibi Xonim masjidi va, albatta, Shoxi-Zinda maqbaralari majmuasi joylashgan. Afrosiyob etagida. Uning qurilishining boshlanishi XII asrga to'g'ri keladi, lekin u asosan XIV-XV asrlarda shakllangan. Amir Temur davrida. Samarqand shahri “Sharq gavhari” unvoniga ega.
                `,
                span7: `
                Ochiq osmon ostidagi shahar-muzeyi esa – Buxoro Ark qal’asi (uning qurilgan vaqti miloddan avvalgi 3-asrga to‘g‘ri keladi), muhtasham Kalyan masjidi (16-asr) joylashgan Poyikalon majmuasi, 47 metrli Kalyan minorasi va Mir-Arab madrasasi (hozirgi islom dini seminariyasi), Ismoil Somoniy maqbarasi (IX asr oxiri), shuningdek, XV-XVI asrlarga oid Tak-i Sarrofon (pul gumbazi) savdo gumbazlari. sarroflar), Tak-i-Telpak-Furushon (bosh kiyim sotuvchilar gumbazi) va Tak-i-Zargaron (zargarlar gumbazi) hozirgacha faoliyat koʻrsatmoqda.
                `,
                span8: `
                Xiva shahri "ertak shahar" unvoniga ega, shaharning sehrli sarobi to'rtta darvozali kuchli qal'a devorlari bilan o'ralgan Ichan-qal'a me'moriy majmuasi bilan ifodalanadi. G‘arbiy darvozada shaharning eng qadimiy qismi joylashgan bo‘lib, uning yonida Oqshik bobo qal’asi qoldiqlari joylashgan bo‘lib, u yerda dunyodagi eng kattasi hisoblangan, ammo, afsuski, qurilishi tugallanmagan Kalta-Minor (qisqa) minorasi, ulug‘vor madrasasi. Muhammad Aminxon, Toshxaulixon saroyi, Juma masjidining hayratlanarli go'zalligi va albatta Xivadagi eng baland bino Islom Xo'ja minorasi (56 m.).
                `,
              },
              reference: {
                title: "MA'LUMOT MA'LUMOTLARI",
                ref1: {
                  title: "O'zbekistonning davlat tuzilishi",
                  dusc: "Oʻzbekistonning davlat tuzilmasi prezidentlik respublikasi boʻlib, uning tarkibiga Qoraqalpogʻiston Muxtor Respublikasi va 12 viloyat kiradi. Qonun chiqaruvchi hokimiyat ikki palatali parlament (mejlis). Valyuta - so'm."
                },
                ref2: {
                  title: "O'zbekistonning ma'muriy bo'linmalari",
                  dusc: "12 ta viloyat: Andijon, Buxoro, Jizzax, Qashqadaryo, Navoiy, Namangan, Samarqand, Surxondaryo, Sirdaryo, Toshkent, Farg‘ona, Xorazm va Qoraqalpog‘iston."
                },
                ref3: {
                  title: "O'zbekiston iqtisodiyoti",
                  dusc: `ʻOʻzbekiston agrosanoat davlatidir. Qishloq xoʻjaligi koʻp tarmoqli. Paxta ekinlarda rivojlangan, katta maydonlarni kenaf, moyli oʻsimliklar, shuningdek, boshoqli (sholi, bugʻdoy, makkajoʻxori) ekinlari egallaydi. Bogʻdorchilik, polizchilik, uzumchilik yaxshi rivojlangan. Chorvachilikning asosiy tarmogʻi sut va goʻsht chorvachiligi va qorakoʻl (Qorakoʻl) qoʻychiligi.
                  <br>
                  <br>
                  Sanoatning asosiy tarmoqlari: neft qazib olish va qayta ishlash, kimyo va mashinasozlik.`
                },
                ref4: {
                  title: '<b>Aholi:</b> 29 milliondan ortiq kishi. (2011)',
                  dusc: ''
                },
                ref5: {
                  title: 'Din',
                  dusc: "Rasmiy ma'lumotlarga ko'ra, musulmonlar - 88% (asosan sunniylar), pravoslavlar - 9%. Jami 16 ta diniy konfessiya roʻyxatga olingan."
                },
                ref6: {
                  title: 'Til',
                  dusc: 'Oʻzbekiston Respublikasining davlat tili oʻzbek tilidir.'
                },
                ref7: {
                  title: 'Bayramlar',
                  dusc: `
                  1 yanvar - Yangi yil
                  <br>
                  8 mart – Xalqaro xotin-qizlar kuni
                  <br>
                  21 mart - Navro'z
                  <br>
                  9-may - Xotira kuni
                  <br>
                  1 sentyabr - Mustaqillik kuni
                  <br>
                  1 oktyabr - O'qituvchilar kuni
                  <br>
                  8 dekabr - Konstitutsiya kuni
                  <br>
                  Ruza-Fitr va Qurbon hayitlarining birinchi kunlari
                  `
                },
                ref8: {
                  title: 'Viza',
                  dusc: "MDH fuqarolari uchun Oʻzbekistonga vizasiz kirish. Chet el fuqarolari va fuqaroligi bo'lmagan shaxslar faqat kirish vizasi bo'lgan taqdirdagina uning hududiga kirishlari va tranzit o'tishlari mumkin."
                },
                ref9: {
                  title: 'Bojxona',
                  dusc: 'Biz tashrif buyuruvchilarga bojxona qoidalari bilan tanishishni tavsiya qilamiz. <a href="http://www.customs.uz/rus/informaiya_dlya_svedeniya">http://www.customs.uz/rus/informaiya_dlya_svedeniya</a>'
                },
                ref10: {
                  title: 'Pasport tizimi',
                  dusc: "Vazirlar Mahkamasining 1999-yil 16-apreldagi 178-sonli qaroriga asosan O‘zbekistonda vaqtincha istiqomat qiluvchi xorijiy fuqarolar bayram va dam olish kunlari bundan mustasno, uch kunlik muddat ichida bo‘lgan joyiga kelib ro‘yxatdan o‘tishlari shart. Mehmonxonada bo'lganingizda, ro'yxatdan o'tish mehmonxonaning o'zi tomonidan amalga oshiriladi."
                },
                ref11: {
                  title: "Foydali ma'lumot",
                  dusc: `Internet domeni - uz
                  <br>
                  Telefon kodi - 998
                  <br>
                  Voltaj - 220 V AC, 50 A, standart rozetka
                  <br>
                  Vaqt: GMT+5:00`
                },
              }
            }
          },
          culturePage: {
            title: 'MADANIYAT - XALQNING RONI',
            span1: {
              first: "Muzeylarga tashrif buyurib, mamlakat tarixi va madaniyati haqida tasavvurga ega bo'lishingiz mumkin. Bugungi kunda O‘zbekistonda yuzdan ortiq muzeylar mavjud. Ularning eng ko‘pi Toshkent shahriga to‘g‘ri keladi. Bular, birinchi navbatda, Amir Temur muzeyi, O‘zbekiston tarixi muzeyi, Davlat san’at muzeyi, amaliy san’at muzeyi va boshqa o‘nlab muzeylardir. O‘zbekistonning qadimiy shaharlari Samarqand, Buxoro, Xiva, Termiz muzeylari qiziq. O‘zbekistondagi, balki butun Markaziy Osiyodagi eng mashhur muzeylardan biri – I.Savitskiy nomidagi san’at muzeyi Qoraqalpog‘iston Respublikasi poytaxti Nukus shahrida joylashgan.",
              second: "O‘zbekiston nafaqat o‘zining muzeylari, qadimiy shaharlarning me’moriy yodgorliklari, al-Xorazmiy, Ibn Sino (Avitsenna), Alisher Navoiy, Umar Xayyom, Ulug‘bek kabi taniqli olimlar, pedagog va shoirlar nomlari bilan dunyoga mashhur. amaliy san'at ustalarining mahsulotlari. Dunyoning ko‘plab muzeylarida qadimiy zaminimiz ustalari tomonidan yaratilgan hayratlanarli darajada go‘zal naqshinkor buyumlar, zargarlik buyumlari, qurol-yarog‘lar, o‘rta asr miniatyuralari saqlanadi."
            },
            span2: {
              first: `Zamonaviy O‘zbekistonda an’anaviy madaniy qadriyatlarga g‘oyat ehtiyotkorlik bilan munosabatda bo‘lib, davlat ko‘magida o‘nlab qadimiy hunarmandchilik turlari tiklanib, rivojlantirilmoqda. Shunday qilib, masalan, Buyuk Ipak yo‘li bo‘ylab noodatiy darajada yuqori talabga ega bo‘lgan ko‘k jonus rangdagi qadimiy Rishton kulollari qayta tiklandi. Samarqand, Buxoro, Xiva, G‘ijduvondagi kulolchilikning boshqa markazlari singari, XX asrda arzon zavod idishlari bilan raqobatga dosh berolmay, deyarli yo‘q bo‘lib ketdi.`,
              second: `Bugun O‘zbekistonning katta-kichik shaharlaridagi rang-barang bozorlar qo‘lda yasalgan kulolchilik bilan to‘la – bular har xil idish-tovoqlar, mayda plastmassa buyumlar, o‘yinchoqlar va har bir hududning o‘ziga xos uslubi bor.`,
            },
            span3: {
              first: `Bu erda yog'och o'ymakorlari qutilar, qalam qutilari, stol va stullar, ekranlar, deraza panjaralari, qandillar va shift lampalari, eshiklar va ustunlar, eng mohir o'ymakorlik bilan qoplangan ajoyib lavhalar - bir bo'lakdan yasalgan bir necha darajalarga ochiladigan kitob daftarlarini taklif qilishadi. bitta mahkamlashsiz yog'och. Miniatyura rassomlari turli o'lcham va shakldagi yog'och va papier-mache qutilarini namoyish etadilar, ular nafis bezakli rasm va miniatyuralar bilan qoplangan. Gilamdo'stlar - Buxoro va Xiva gilamlarini butun dunyoga tarannum etgan ajdodlari an'analarini davom ettirib, ularning ajoyib go'zallikdagi mahsulotlari. Zargarlar o'nlab, hatto yuzlab turdagi zargarlik buyumlarini taklif qilishadi. Kim biladi deysiz, balki bugungi kunda, masalan, Buxorodagi Taq-i Zargaron savdo gumbazi ostida ko‘rinib turgan o‘sha zargarlik buyumlarini bundan ming yil avval buxorolik ayollar kiyib yurgandir...`
            },
            span4: {
              first: `Amudaryo va Sirdaryo oraligʻidagi Fargʻona vodiysi hunarmandlari butun asrlar davomida metallga ishlov berish mahorati bilan mashhur boʻlgan. Boshqa qanday qilib, chunki mahalliy tog'larda azaldan oltin, kumush, mis, temir va qalay qazib olingan. 10-asr arab tarixchisi Ibn-Xaukalning yozishicha, “Fargʻonadan temir qurollar Xurosondan Bagʻdodgacha umumiy foydalanilgan”. Ayrim tadqiqotchilar Farg‘onani Damashq po‘latining vatani bo‘lganini ta’kidlaydilar. Shunchaki, yevropaliklar uni Damashqda kutib olishgan, u Buyuk Ipak yo‘li bo‘ylab Markaziy Osiyodan kelgan.`,
              second: "10-asr arab geografi va sayohatchisi. Al-Muqaddasiy Somoniylar davlatidan olib kelingan mol-mulk haqida gapirar ekan, Buxorodan murakkab o‘ymakorlik va arab yozuvlari bilan bezatilgan qimmatbaho kumush idishlar va mis lampalarni tilga oladi, ammo bu davrlar madaniyat va san’atning misli ko‘rilmagan gullab-yashnagan davrlari bo‘lgan."
            },
            span5: {
              first: `So‘nggi yillarda o‘zbek abr matolari ko‘plab mamlakatlarda juda mashhur. alt "abr" - "bulut" naqsh - O'zbekistonda eng qadimiy va sevimli naqshlardan biri. Uni ishlab chiqarish siri bo'yalgan tayyor mato emas, balki iplar bo'lishidadir. Ipak, jun, paxta iplari bo'yoq eritmasiga botirilishidan oldin, maxsus tarzda bog'lanadi. Natijada yorqin kamalak ranglari, yarim ipak adras, shoyi matolari bilan yaltirab turgan ipak xon-atlas. Nafis chiziqli snayplar ham an'anaviy texnologiyalar yordamida tayyorlanadi.`,
              second: `Ipak, jun, paxta iplari bo'yoq eritmasiga botirilishidan oldin, maxsus tarzda bog'lanadi. Natijada yorqin kamalak ranglari, yarim ipak adras, shoyi matolari bilan yaltirab turgan ipak xon-atlas. Nafis chiziqli snayplar ham an'anaviy texnologiyalar yordamida tayyorlanadi.`
            },
            span6: {
              first: `O‘zbekistonda yana o‘nlab hunarmandchilik turlari mavjud: kashtachilik, mashhur Buxoro zardo‘zligi, charm, qovoqqa rasm chizish, ganch va toshga o‘ymakorlik, qo‘g‘irchoq va cholg‘u asboblari yasash, sandiq va beshik – beshik... Hammasi bilan tanishishingiz mumkin. hunarmandchilik bevosita bozorlarda, qadimiy madrasalarda, qadimiy shaharlar ko‘chalarida joylashgan ustaxonalarda.`
            },
            span6: {
              first: 'Biroq, O‘zbekistonning eng yorqin manzarasini bayramlar va xalq sayillarida, masalan, Navro‘z bayramida, katta-kichik shaharlarning ko‘cha va maydonlariga milliy liboslarda ko‘plab folklor jamoalari chiqishlari, har birining liboslarini olish mumkin. mintaqa bir-biridan juda farq qilishi mumkin. Bunday bayramlarda hamma joyda milliy musiqa va kuy-qo‘shiqlar tinglanadi, qizg‘in raqslar, xalq o‘yinlari, xonandalar va palvon qahramonlar musobaqalari, xo‘roz va qo‘chqor janglari, arqon va qo‘g‘irchoqbozlarning chiqishlari va, albatta, afsonaviy hikoyalar bo‘yicha teatrlashtirilgan tomoshalarni tomosha qilish mumkin. , kundalik mavzularda milliy urf-odatlar va marosimlar haqida gapirib berish. Shuning uchundirki, O‘zbekistonda teatr san’atiga mehr qo‘yilgan, har bir shaharda teatrlar bor. Respublikada jami 35 ta professional teatr – drama, musiqa, qoʻgʻirchoq, opera (Toshkent va Samarqandda) va koʻplab havaskor teatrlar mavjud.'
            }
          },
          orientBus: {
            title: 'Orient Bus',
            discription: {
              span1: `“Orient Bus” kompaniyamizning sho‘ba korxonasi bo‘lib, 1999 yildan buyon O‘zbekiston bo‘ylab yo‘lovchi tashish bilan muvaffaqiyatli shug‘ullanib kelmoqda. Shu vaqt ichida kompaniya transport xizmatlari bozorida ishonchli va mas’uliyatli hamkor sifatida o‘zini namoyon qildi. Xizmatlarimiz xavfsizligi va xizmat sifati mijozlar tomonidan yuqori baholanadi.`,
              span2: `Kompaniyaning 13 yildan ortiq muvaffaqiyatli tarixi, transport xizmatlari bozoridagi yetakchi mavqei, doimiy mijozlarimiz sonining o'sishi Orient Busni tanlash foydasiga eng yaxshi dalildir.".`,
              span3: `Doimiy takomillashib, biz mijozlarimizga eng yuqori darajada transport xizmatlarini taklif etamiz..`,
              span4: `Bizning mijozlarimiz bizning faxrimizdir!`,
              auto: {
                auto1: {
                  value: 'Soni: 3',
                  place: `45 o'rin`,
                  tv: 'TV+',
                  cd: 'CD pleer +',
                  micro: 'Mikrofon +',
                  cold: 'Sovutgich +',
                  cond: 'Konditsioner +',
                  toilet: 'Hojatxona +',
                  bagage: 'Magistral: 10 m3',
                },
                auto2: {
                  value: 'Soni: 7',
                  place: `45 o'rin`,
                  tv: 'TV+',
                  radio: 'Radio +',
                  cd: 'CD pleer +',
                  micro: 'Mikrofon +',
                  cold: 'Sovutgich +',
                  cond: 'Konditsioner +',
                  toilet: 'Hojatxona +',
                  bagage: 'Magistral: 9 m3',
                },
                auto3: {
                  value: 'Soni: 3',
                  place: `30 o'rin`,
                  tv: 'TV+',
                  radio: 'Radio +',
                  cd: 'CD pleer +',
                  micro: 'Mikrofon +',
                  cold: 'Sovutgich +',
                  cond: 'Konditsioner +',
                  toilet: 'Hojatxona +',
                  bagage: 'Magistral: 9 m3',
                },
                auto4: {
                  value: 'Soni: 2',
                  place: `6 o'rin`,
                  tv: 'TV+',
                  radio: 'Radio +',
                  cd: 'CD pleer +',
                  cold: 'Sovutgich +',
                  micro: 'Mikrofon +',
                  cond: 'Konditsioner +',
                  toilet: 'Hojatxona +',
                  bagage: 'Magistral: 0.4 m3',
                },
                auto5: {
                  value: 'Soni: 8',
                  place: `3 o'rin`,
                  cd: 'CD pleer +',
                  radio: 'Radio +',
                  cond: 'Konditsioner +',
                  tv: 'TV+',
                  cold: 'Sovutgich +',
                  micro: 'Mikrofon +',
                  toilet: 'Hojatxona +',
                  bagage: 'Magistral: 0.4 m3',
                },
                auto6: {
                  value: 'Soni: 2',
                  place: `6 o'rin`,
                  radio: 'Radio +',
                  cd: 'CD pleer +',
                  cond: 'Konditsioner +',
                  tv: 'TV+',
                  cold: 'Sovutgich +',
                  micro: 'Mikrofon +',
                  toilet: 'Hojatxona +',
                  bagage: 'Magistral: 0.4 m3',
                },
                auto7: {
                  value: 'Soni: 8',
                  place: `3 o'rin`,
                  cd: 'CD pleer +',
                  radio: 'Radio +',
                  cond: 'Konditsioner +',
                  tv: 'TV+',
                  cold: 'Sovutgich +',
                  micro: 'Mikrofon +',
                  toilet: 'Hojatxona +',
                  bagage: 'Magistral: 0.3 m3',
                },
                auto8: {
                  value: 'Soni: 8',
                  place: `3 o'rin`,
                  cd: 'CD pleer +',
                  radio: 'Radio +',
                  cond: 'Konditsioner +',
                  tv: 'TV+',
                  cold: 'Sovutgich +',
                  micro: 'Mikrofon +',
                  toilet: 'Hojatxona +',
                  bagage: 'Magistral: 0.3 m3',
                },
              }
            }
          },
          orientStarHotels: {
            title: 'Orient Star Hotels',
            item1: 'Ориент Стар Samarqand',
            item2: 'Orient Star Khiva',
            item3: 'Orient Star Varaxsha',
          },
          centralAsia: {
            kirgiz: {
              title: `Qirg'iziston`,
              span1: `Qadimgi imperiyalarning Osiyo tojidagi olmos, Qirg'iziston sayyohlar tomonidan hali kam o'rganilgan. Va mutlaqo behuda — tabiiy va tarixiy diqqatga sazovor joylarning ko'pligi, plyajda dam olish, davolanish va chang'i sporti imkoniyatlari jihatidan bu mamlakat haqiqatan ham tengsiz. Qirg'iziston hududida Tyan-Shanning "samoviy tog'lari" mavjud va Pomir tizmalari cho'zilgan, bu erda Chingizxonning boyligi Issiqko'lning eng toza tog'li ko'lidir, relikt yong'oq o'rmonlari o'sadi va issiq oltingugurt kalitlari uriladi. Biroq, beparvo "nazoratchi" uchun Qirg'iziston ko'plab kutilmagan hodisalar tayyorladi: rang-barang uylar va kigiz gilamlari, Kumis va osh palovi, an'anaviy ot musobaqalari, ashulalar, ertaklar va afsonalar. Bir so'z bilan aytganda, Osiyo butun shon — shuhratida-bu Qirg'iziston!
              `,
              span2: `Davlat o'rta Osiyoning sharqida, asosan Tyan-Shanning g'arbiy va Markaziy qismida va Pomirning Shimoliy qismida joylashgan. Shimolida Qozog'iston, g'arbda O'zbekiston, Janubi — g'arbda Tojikiston, janubi-Sharq va Sharqda Xitoy bilan chegaradosh.
              `,
              span3: `O'rta Osiyo sovet respublikalarining milliy-davlat chegaralanishi bo'yicha 1924 yil 14 oktyabrda qara-qirg'iz AJ (1925 yil 25 maydan boshlab qirg'iz AJ deb qayta nomlandi) RSFSR tarkibidagi avtonom viloyat tashkil etildi, 1926 yil 1 fevral Qirg'iziston ASSRga, 1936 yil 5 dekabrda esa qirg'iz SSRga aylantirildi.  SSSR parchalanishi paytida, 1991 yil 31 avgustda SSSR parchalanishi davomida Qirg'iziston mustaqilligi e'lon qilindi.`,
              span4: `Qirg'izistonning poytaxti Bishkek mamlakatning eng yirik shahri hisoblanadi. Maxsus ma'muriy birlikni tashkil etadi va respublika bo'ysunuvidagi shahar hisoblanadi. Eski nomlari Pishpek, Frunze. Aholisi 860700 kishi (2012). Respublikaning Janubiy viloyatlaridan farqli o'laroq, aholining yuqori foizini rus va rus tilida so'zlashuvchi aholi tashkil etadi. Shahar Qirg'izistonning shimolida, Chuy vodiysida, Tyan-Shan tog ' etaklarida, qirg'iz tizmasidan 40 km shimolda dengiz sathidan 700-900 m balandlikda, Qozog'iston chegarasidan 25 km uzoqlikda joylashgan. Bishkek shahri mintaqaviy savdo markazi hisoblanadi. Bishkekda O'rta Osiyodagi eng yirik kiyim-kechak bozori: Dordoy, eng yirik avtomobil bozori: Azamat faoliyat ko'rsatmoqda.`,
              span5: `Bishkek shahar chegarasidan 23 km uzoqlikda Manas xalqaro aeroporti joylashgan. ICAO tasnifiga ko'ra, Manas 4e sinfidagi aeroportdir. uning 4,2 km uzunlikdagi uchish — qo'nish yo'li barcha turdagi samolyotlarni, shu jumladan qiyin ob-havo sharoitida ham qabul qilishga imkon beradi. Aeroportda 38 ta to'xtash joyi va ikkita teleskopik trapa mavjud.`,
              span6: `Qirg'izistonda keskin kontinental, kontinental iqlimga o'tish. Yomg'ir miqdori nisbatan kam; yiliga taxminan 250 kun quyoshli. Tekisliklar va pasttekisliklarda yanvar oyida o'rtacha harorat -4 -6°C, iyulda - +18 +24°C. Sibirdan doimiy esayotgan shamollar tufayli baland tog'larda qishda ham, yozda ham sovuqroq bo'ladi: yanvarda -14 -20°C va iyulda +8 +12°C. Farg'ona vodiysida yozgi davrda termometr ustuni odatda +35°C dan oshadi.Qirg'izistonga tashrif buyurish uchun eng qulay vaqt — sentyabr, butun mamlakat bo'ylab yoqimli kuzgi iliqlik hukm suradi. "Jayloo" baland yaylovlariga may oyining o'rtalaridan oktyabr oyining boshigacha borish mumkin, piyoda va otda sayohatlar martadan noyabrgacha janubda va apreldan oktyabrgacha shimolda qulay tarzda amalga oshiriladi. Trekking va toqqa chiqish yil davomida mavjud bo'lib, baland tog'larga chiqish eng yaxshi iyun oxiridan oktyabrgacha amalga oshiriladi.`,
              span7: `Buyuk ipak yo'lining noyob tabiiy diqqatga sazovor joylari va qadimiy shaharlari sayyohlarni jalb qilishda Qirg'izistonning ikkita karnayidir. Tyan-Shan va Pomir tizmalari davlat hududida joylashgan bo'lib, sayyoramizning eng katta va eng chuqur ko'llaridan biri — Sharq shoirlari tomonidan kuylangan Issiqko'l, baland tog ' vohasining relikt yong'oq o'rmonlari Arslanbob, Jet Oguz darasi va rodon-vodorod sulfidli termal buloqlar, afsonaviy ko'llar Song-kul va sari-Chelek, ulkan muzlik inilchek va boshqa ko'plab tabiiy mo " jizalar. Tog'larni sevuvchilar Lenin, g'alaba va Xon Tengri cho'qqilariga chiqishadi, trekking muxlislari Turkiston tizmasi va G'arbiy Tyan-Shan ko'llarini o'rganishadi, ammo tog ' chang'ichilari mavsum ochilishini kutishmaydi — Kashka-Suu, Norusa va Too Ashuu yon bag'irlarida birinchi bo'lib qor yog'ishini kutishmaydi. Aytgancha, Qirg'iziston chang'i chang'i chang'i va paraplan parvozi uchun boy imkoniyatlarni taqdim etadi.`,
              span8: `Bishkekning diqqatga sazovor joylari: qadimiy va rang-barang osh bozori, ala-Too maydoni, Mustaqillik yodgorligi va parlament binosi, Milliy tarix muzeyi va san'at muzeyi, tarixiy Dubrava va Erkindik galereyasi. Shahar atrofida Baytiq vodiysi tabiiy bog'iga tashrif buyurib, Bishkekning ajoyib manzaralarini taqdim etadigan boz-Peldek tog'iga chiqishga arziydi. Tog'ning Janubiy yonbag'ida "Xon qabrlari" qabristoni joylashgan bo'lib, u yerda vodiyning afsonaviy hokimi dafn etilgan. Ajoyib gumbazli soxta minoraga e'tibor bering. Siz noyob o'simliklarni Chon-Arik botanika qo'riqxonasida ko'rishingiz va sog'lig'ingizni yaxshilashingiz mumkin — Qamishanovka qishlog'idagi torf loy konida.`,
              span9: `Osh shahri Yeniseydan (taxminan 800 yil oldin) qirg'iz xalqi kelishidan ancha oldin odamlar yashagan tog ' oldi vohasida joylashgan. Sulaymon Too tog'ining Janubiy yonbag'rida bronza davri dehqonlarining turar joyi topilgan. Osh Qirg'izistonning eng qadimgi qishloqlaridan biri bo'lgan, hozirda rasmiy ravishda shahar tarixi taxminan 3 ming yilni tashkil etadi deb taxmin qilish taklif qilingan, ammo tarix fanida shaharlarning yoshini tarixiy hujjatlarda eng qadimgi eslatishdan hisoblash odat tusiga kirgan; xronikalarda shahar haqida eng qadimgi eslatma milodiy IX asrga to'g'ri keladi. E., bu hali ham uni mamlakatning eng qadimgi shahri deb hisoblashga imkon beradi. X asrda osh Farg'onadagi uchinchi yirik shahar deb hisoblangan, u Hindiston va Xitoydan Yevropaga karvon yo'llari kesishgan joy bo'lgan (qarang: buyuk ipak yo'li). Oshda Farg'ona uslubidagi Islom me'morchiligining ajoyib yodgorliklari mavjud: Alymbek Paravanchi madrasasi va Muhammadboy Turk xol Muratboyev, Sodiqboy va shahid-tepa masjidlari. Rus pravoslav Mixaylo-Arxangel cherkovini ziyorat qilish kerak (20-asr boshlarida). Tarixiy diqqatga sazovor joylar orasida qadimiy qabriston, o'rta asr hammomlari majmuasi, qadimiy petrogliflar mavjud. Bundan tashqari, osh "tog'larga kirish eshigi" dir: bu erdan siz Pomir va Tyan — shanga ko'tarilishingiz, chil-ustun va chil-Mayram g'orlarini, shuningdek noyob karst bulog'ini-Abshir-say sharsharasini ko'rishingiz mumkin. Osh aeroporti faol ishlaydi, mahalliy va xalqaro reyslarni qabul qiladi va jo'natadi.`,
              span10: `Issiqko'l ko'li dunyodagi ikkinchi eng katta va, ehtimol, suvning ajoyib rangi bo'yicha birinchi-boy ko'k, deyarli ultramarin. Issiqko'l suvi juda shaffof va ozgina sho'r ta'mga ega, chunki unga 80 ga yaqin Daryo quyiladi va hech biri oqmaydi. Ko'l atrofida issiq buloqlar va shifobaxsh loy konlari mavjud.`,
              span11: `Siz "jayloo" baland yaylovlariga borib, haqiqiy Qirg'izistonning ko'chmanchi hayotini yashashingiz mumkin — uyning soyaboni ostida sog'lom uxlash, ertalab va kun bo'yi toza havoda bir chashka Qumis — bu Osiyo sog'lig'ining kalitidir.`,
              spravka: {
                span1: {
                  title: `MA'LUMOT`,
                  text: `Qirg'izistonning davlat tuzilishi-7 viloyat va 2 respublika ahamiyatiga molik shaharlarni o'z ichiga olgan huquqiy, dunyoviy davlat asosida qurilgan suveren, unitar, demokratik respublika. Respublika parlamenti — Jogorku Kengesi davlatning eng muhim qarorlari va siyosatini hal qilish va belgilash ustuvorligiga ega, bir palatali bo'lib, partiya ro'yxati bo'yicha besh yil muddatga saylanadigan 120 deputatdan iborat. Pul birligi-qirg'iz baliqlari.`
                },
                span2: {
                  title: `Qirg'izistonning ma'muriy bo'linishi`,
                  text: {
                    text1: `Qirg'iziston tarkibiga 7 viloyat va 2 respublika ahamiyatiga molik shaharlar kiradi:`,
                    text2: `Batken viloyati`,
                    text3: `Chuy viloyati`,
                    text4: `Jalolobod viloyati`,
                    text5: `Narin viloyati`,
                    text6: `Osh viloyati`,
                    text7: `Talas viloyati`,
                    text8: `Issiqko'l viloyati`,
                    text9: `Bishkek va Osh shaharlari`
                  }
                },
                span3: {
                  title: `O'zbekiston Iqtisodiyoti`,
                  text: {
                    text1: `Qirg'iziston iqtisodiyoti asosan sanoat va qishloq xo'jaligidan iborat bo'lib, qishloq xo'jaligida mehnatga layoqatli aholining yarmidan ko'pi band. Qirg'izistonning yarim millionga yaqin aholisi chet elga ishlash uchun ketmoqda. 2011 yilda migrantlarning pul o'tkazmalari hajmi mamlakat yalpi ichki mahsulotining 29 foizini tashkil etdi.`,
                    text2: `Sanoat energetika va qazib olish sanoati bilan ifodalanadi. Qishloq xo'jaligi mahsulotlarining katta qismi eksport qilinadi. Qirg'iziston daromadlarining muhim moddasi turizmdir. Qirg'iz byudjeti, shuningdek, Manas bazasini ijaraga olish uchun AQShdan 63 million dollar oladi`
                  }
                },
                span4: {
                  title: `Aholisi:`,
                  text: `5,5 milliondan ortiq kishi (2013)`
                },
                span5: {
                  title: `Din`,
                  text: `Musulmonlar 75%, rus Pravoslavlari 20%, boshqalar 5%`
                },
                span6: {
                  title: `Til`,
                  text: `Qirg'iziston Respublikasining davlat tili qirg'iz tili hisoblanadi.`
                },
                span7: {
                  title: `Davlat bayramlari`,
                  text: {
                    text1: `1 yanvar - Yangi yil`,
                    text2: `7 yanvar — Rojdestvo`,
                    text3: `23 fevral-Vatan himoyachilari kuni`,
                    text4: `8 marta — Xalqaro xotin-qizlar kuni`,
                    text5: `21 marta — Nooruz`,
                    text6: `1 may — Bahor va mehnat bayrami`,
                    text7: `5 may — Qirg'iziston Konstitutsiyasi Kuni`,
                    text8: `9 may — G'alaba Kuni`,
                    text9: `7 iyun-moliyaviy va iqtisodiy ishchilar kuni`,
                    text10: `31 avgust — mustaqillik kuni`,
                    text11: `7 noyabr-Buyuk oktyabr sotsialistik inqilobi kuni`,
                    text12: `Orozo-ayt va Qurman-ayt oy taqvimi bo'yicha aniqlanadi.`,
                  }
                },
                span8: {
                  title: `Viza`,
                  text1: `2012 yil 21 iyuldagi 121-sonli kr Qonuni doirasida quyidagi mamlakatlar fuqarolari uchun Qirg'iziston Respublikasiga 60 kungacha vizasiz kirish rejimi amal qiladi: Avstraliya, Avstriya Respublikasi, Bahrayn Qirolligi, Belgiya Qirolligi, Bosniya va Gertsegovina, Bruney-Darussalam davlati, Vatikan, Buyuk Britaniya va Shimoliy Irlandiya Birlashgan Qirolligi, Vengriya Respublikasi, Federal Respublika Germaniya, Gretsiya Respublikasi, Daniya Qirolligi, Irlandiya, Islandiya Respublikasi, Ispaniya Qirolligi, Italiya Respublikasi, Kanada, Qatar Davlati, Koreya Respublikasi, Quvayt Davlati, Latviya Respublikasi, Litva Respublikasi, Lixtenshteyn Knyazligi, Lyuksemburg Buyuk Knyazligi, Malta Respublikasi, Monako Knyazligi, Niderlandiya Qirolligi, Norvegiya Qirolligi, Yangi Zelandiya, Birlashgan Arab Amirliklari, Polsha Respublikasi, Portugaliya Respublikasi, Saudiya Arabistoni Qirolligi, Singapur Respublikasi, Slovakiya Respublikasi, Sloveniya Respublikasi, Amerika Qo'shma Shtatlari, Finlyandiya Respublikasi, Frantsiya Respublikasi, Xorvatiya Respublikasi, Chexiya Respublikasi, Shveytsariya Konfederatsiyasi, Shvetsiya Qirolligi, Estoniya Respublikasi.`,
                  text2: `Kr hukumatining 1999 yil 31 dekabrdagi 735-son va 2001 yil 4 iyundagi 262-son qarorlariga muvofiq Yaponiya fuqarolari uchun Qirg'iziston Respublikasiga bir tomonlama vizasiz kirish rejimi cheksiz muddatga amal qiladi.`
                },
                span9: {
                  title: `Bojxona`,
                  text: {
                    text1: `Milliy va xorijiy valyutani olib kirish va eksport qilishda cheklovlar yo'q (barcha pul va zargarlik buyumlari majburiy ravishda e'lon qilinadi). Deklaratsiya mamlakatni tark etishdan oldin saqlanishi kerak.`,
                    text2: `Qirg'izistonga bojsiz 1000 tagacha sigaret yoki 1000 g gacha tamaki mahsulotlari, 1,5 litrgacha kuchli alkogolli ichimliklar va 2 litrgacha sharob olib borish mumkin. Siz shaxsiy foydalanish uchun o'rtacha miqdordagi atirni, shuningdek, 5000 dollardan oshmaydigan boshqa mahsulotlarni olib kelishingiz mumkin. Bojxona tekshiruvi ba'zan uzoq va batafsil bo'lishi mumkin.`,
                    text3: `Qirg'izistonga giyohvand moddalar va kuchli dori-darmonlarni (ulardan foydalanish zarurligini tasdiqlovchi retseptisiz), qurol-yarog ' va o'q-dorilar, yonuvchi va portlovchi moddalar, Qirg'iziston davlat tizimiga qarshi qaratilgan bosma mahsulotlar va videofilmlarni, shuningdek hayvonlar, mevalar va sabzavotlarni mamlakat sanitariya-veterinariya xizmatining tegishli ruxsatisiz olib kirish taqiqlanadi.`,
                    text4: `Ba'zi oziq-ovqat, minerallar va jinslarni tegishli instansiyalar, oltin (deklaratsiya qilingan) va qimmatbaho toshlar ruxsatisiz olib chiqish taqiqlanadi.`
                  }
                },
                span10: {
                  title: `Pasport rejimi`,
                  text: `Mamlakatga tashrif buyurgan barcha chet elliklar, kelish maqsadidan qat'i nazar, 24 soat ichida kr ichki ishlar vazirligiga kelganliklarini e'lon qilishlari va vaqtinchalik ro'yxatdan o'tish talonini olishlari shart. Uning mavjudligisiz jismoniy shaxslar pasport rejimini buzganlik uchun SIZOda qamoqqa olinmaguncha pul jarimasiga tortiladilar.`,
                },
                span11: {
                  title: `Foydali ma'lumotlar`,
                  text: {
                    text1: `Internet domeni-kg`,
                    text2: `Telefon kodi +996`,
                    text3: `Tarmoq kuchlanishi-220 V AC, 50 A; standart er-xotin vilka rozetkasi`,
                    text4: `Vaqt: GMT + 6 soat`,

                  }
                }
              }
            },
            tadjik: {
              title: `Tojikiston`,
              disc: {
                span1: `Tojikiston bizning davrimizning noyob sayyohlik diqqatga sazovor joyidir, chunki u buyuk madaniy va tarixiy merosga, o'ziga xos madaniyatga, foydali geografik joylashuvga, turli xil tabiiy landshaftlarga, dam olish zonalariga, flora va faunaga ega.`,
                span2: `Tojikiston dengiz sathidan mutlaq balandligi 300 dan 7495 metrgacha bo'lgan tog'li mamlakatdir. Mamlakat hududining 93 foizini Pomir, Gissaro-Alay va Tyan-Shan tog 'tizimlariga tegishli tog' tizmalari tashkil etadi. Ushbu silliqliklar Farg'ona, Zeravshan, Vaxsh va Hisor vodiylarining boy va serhosil yerlari bilan ajralib turadi. Relyefning murakkabligi va tog ' tizimlarining balandliklarining katta amplitudasi o'simlik va hayvonot dunyosining ajoyib xilma-xilligini belgilaydi.`,
                span3: `Tojikiston-eng baland cho'qqilar, kuchli muzliklar, tezkor bo'ronli daryolar, noyob ko'llar, noyob o'simliklar va noyob hayvonlar. Tojikiston tabiatining o'ziga xosligi va o'ziga xosligini, iqlim zonalarining xilma-xilligi tufayli hayotga olib keladigan shakllarining boyligini belgilaydigan tog', zamin landshafti. Respublikada Vaxsh vodiysining jazirama jaziramasidan bir yarim soatlik parvozda siz Pomirning abadiy qorlarining Arktika sovuqiga kirishingiz mumkin.`,
                span4: `Tojikiston dengizi-Xujandning sharqida joylashgan, Sirdaryo daryosida gidroelektrostantsiya qurilishi natijasida hosil bo'lgan Qayrakkum suv ombori, bu sayyohlar uchun ajoyib dam olish maskaniga aylandi. Uning qirg'og'ida sanatoriylar, dam olish uylari, ajoyib bog'larda joylashgan lagerlar paydo bo'ldi.`,
                span5: `Zorkul, Romit, Mozkul, Dashti Jum mavjud 13 ta davlat tabiat qo'riqxonalari va qo'riqxonalari, shuningdek Tojikiston milliy bog'i negizida noyob ekologiya, landshaftlar va tabiiy yodgorliklar asl shaklida saqlanib qolgan. Shuningdek, qizil kitobga kiritilgan noyob yo'qolib ketish xavfi ostida turgan o'simliklar va hayvonlar turlari, shu jumladan shoxli echki (morxur), tog 'arxari (Marko Polo), Buxoro tog' qo'chqori (urealus), dog'li Buxoro kiyiklari, qor qoploni saqlanib qolgan,`,
                span6: ` Tyan-Shan jigarrang ayiq, chiziqli giena, hind tog ' G'ozi. Respublika hududida sutemizuvchilarning 84 turi, qushlarning 365 dan ortiq turi, sudralib yuruvchilarning 49 turi, baliqlarning 52 ga yaqin turi va hasharotlarning 10000 dan ortiq turlari yashaydi. Tojikiston florasida 5000 mingdan ortiq yuqori o'simlik turlari mavjud, ular orasida ko'plab endemiklar mavjud. Tojikiston milliy bog'i hududi 2,6 million gektarni tashkil etadi, bu mamlakat hududining 18 foizini va respublikaning tog'li Badaxshon avtonom viloyatining 60 foizini qamrab oladi. So'nggi yillarda Milliy bog ' direksiyasi tomonidan Pamirning baland tog'li hududlarida ekologik turizm infratuzilmasini rivojlantirish va ekologik vaziyatni yaxshilash bo'yicha chora-tadbirlar faol amalga oshirilmoqda.`,
                span7: `Respublikada 125 ta turistik va sanatoriy-kurort yo'nalishidagi obyektlar, shu jumladan 51 ta mehmonxona, 9 ta sanatoriy faoliyat ko'rsatmoqda, qolganlari uylar va dam olish zonalari, turistik bazalar, sog'lomlashtirish oromgohlarini tashkil etadi. Mehmonxonalarning aksariyati Dushanbe, Xujand, qo'rg'on-Tube, Kulyab va Xorog shaharlarida joylashgan.`,
                span8: `Tojikistonda Dushanbe, Xujand va Kulyab shaharlarida 3 ta xalqaro aeroport mavjud. Respublika hududini g'arbdan sharqqa temir yo'llarning 3 tarmog'i kesib o'tadi, ular respublikaning Markaziy, Shimoliy va Janubiy mintaqalarini Turkmaniston va O'zbekiston bilan chegaradosh davlatlar hududlari orqali bog'laydi.`,
                span9: `Respublikaning tabiiy-rekreatsion resurslari, tarix va madaniyat yodgorliklarining mavjudligi shakllantirilgan milliy turistik mahsulotning o'ziga xos xususiyatlarini belgilaydi, uning jahon sayyohlik xizmatlari bozorlarida targ'ib qilinishi va sotilishi Tojikistonga xorijiy sayyohlar oqimini ta'minlaydi. Shu munosabat bilan mamlakatda xalqaro turizmning ustuvor turlari ko'rib chiqiladi:`,
                span10: {
                  text1: `- alpinizm, tog ' - sport va ekologik turizm;`,
                  text2: `- - rafting, paraplan parvozi, chang'i sporti;`,
                  text3: `- interoxot;`,
                  text4: `- tarixiy, kognitiv va etnografik turizm;`,
                  text5: `- kurortda davolanish va dam olish.`,
                },
                span11: `Tojikiston hududida ulug'vor Pomir bor-dunyodagi mashhur tog'lardan biri, mutlaq balandligi 2800 dan 7495 m gacha.dengiz sathidan, butun dunyoga "dunyoning tomi"nomi bilan tanilgan. Bu erda sayyohlik resurslari eng baland tog ' cho'qqilariga chiqish yo'llari - 7000 ming metrdan ortiq balandlikda joylashgan Ismoil somoni va Evgeniya Korjenevskaya, ovchilik fermalari, tabiiy landshaftlar, g'orlar va termal va sovuq, karbonat angidrid va kremniy suvlarining mineral manbalari. Har yili Tojikistonda xalqaro alpinizm ekspeditsiyalari o'tkaziladi, ular davomida dunyoning turli mamlakatlaridan kelgan alpinistlar mamlakatning eng baland tog ' cho'qqilariga chiqishadi. Ismoil somoni cho'qqisini (7.495 metr) - Pomirning baland qutbini zabt etish uchun barcha qit'alardan alpinistlar harakat qilishadi. Ushbu mintaqaning noyob relyefi turli xil toifadagi turistik sayohatlar va trekkinglarni rivojlantirishga, toqqa chiqish, alpinizm, tog 'chang'i sporti, tog' turizmi kabi maxsus sport turlari bilan ov va fotosurat ovi, rafting, paraplan parvozi, snoubord, speleoturizm va boshqa ekstremal turizm turlari bilan birgalikda yordam beradi.`,
                span12: `Tojikiston toza suv resurslari zaxiralari bo'yicha eng boy mamlakat hisoblanadi. Markaziy Osiyo mintaqasidagi mamlakatlarning suv resurslarining deyarli yarmi mamlakatning baland tog'li daryolari, ko'llari va muzliklarida hosil bo'ladi. Tojikiston Respublikasi gidroenergetika resurslari zaxiralari bo'yicha dunyoda sakkizinchi o'rinni egallaydi. Ayniqsa, respublikaning tog'li Badaxshon avtonom viloyati turli xil kelib chiqishi bo'lgan ko'llarga juda boy. Ulardan eng yiriklari-Qorako'l, Zorkul, Rangkul, Shorkul, Bulunkul, shuningdek, 1911 yildagi zilzila natijasida hosil bo'lgan Sarez ko'li. Umuman olganda, Pamir mintaqasida 3200 dan 5000 metrgacha bo'lgan balandlik oralig'ida 1450 ta ko'l va 220 ta Daryo yoki Tojikistondagi ko'llarning umumiy ko'zgu maydonining 83 foizi to'plangan. Pamirning eng katta ko'li-dengiz sathidan 3914 metr balandlikda joylashgan noyob Qorako'l ko'li. Uning eng katta chuqurligi 236 metrni tashkil qiladi. U muzlik davrida va ko'l tubida, shuningdek, uning ba'zi qirg'oqlari ko'p kilometrlarda abadiy muzlik bilan qoplangan deb ishoniladi.`,
                span13: `Tojikiston hududida 200 ga yaqin mineral va termal suv manbalari faoliyat ko'rsatmoqda, ularning negizida turizmning sanatoriy-kurot yo'nalishi rivojlanmoqda. Ulardan eng mashhurlari "Xo'ja Obi garm" kurorti, "Shaambara", "Obi garm", "Zumrad", "Havatag"sanatoriylari. Tojikistonning sanatoriylari va kurortlarida yurak-qon tomir tizimi, nafas olish tizimi, mushak-skelet tizimi, siydik tizimi, ginekologik kasalliklar, oshqozon-ichak trakti, jigar va o't yo'llari kasalliklari, shuningdek teri kasalliklarini davolash bo'yicha xizmatlar ko'rsatilmoqda. Garmchashma, Bashor va Shahdar sanatoriylarining issiq karbonat buloqlarida travertinlar hosil bo'ladi. Ular, ayniqsa, Xorog shahridan 35 km uzoqlikda joylashgan Garmchashma manbasida juda chiroyli. Garmchashma manbai dengiz sathidan 2325 m balandlikda joylashgan va travertinlarning ajoyib oqligi tufayli uzoqdan ko'rinadi. Travertinlar daryoga tushadigan uzun o'qni ifodalaydi. Uning yon bag'irlarida, go'yo birlashtirilgan stalaktitlar osilgan bo'lib, ular muzlatilgan kaskadlar va tosh kosalar taassurotini beradi. Bermalarda har xil haroratda (62*s gacha) suv bilan tabiiy vannalar hosil bo'ladi.`,
                span14: `Pomirda inson tomonidan yaratilgan noyob tabiat yodgorligi-Xorog shahri yaqinida dengiz sathidan 2320 metr balandlikda joylashgan Pomir botanika bog'i. Ushbu bog 'bepusht yon bag'irlari fonida haqiqiy yashil mo" jiza bo'lib, unda barcha qit'alardan 20 mingdan ortiq o'simliklar to'plangan. Ular orasida Amur Baxmal, Mantar daraxti, qora avstriyalik qarag'ay va eng toza ohanglar va beqiyos hidga ega noyob atirgullar to'plami kabi noyob va g'alati o'simlik namunalari mavjud.`,
                span15: `Kstutdaryodan Fandaryagacha bo'lgan Zeravshan va Gissar tizmalari o'rtasida joylashgan fan tog'lari sayyohlar va alpinistlar orasida ayniqsa mashhur. Bugungi kunda fan tog'lari sayyohlar uchun mamlakatning eng baland tog'lari hisoblanadi. Ushbu tog'larning tosh qismida ko'pincha ko'k-yashil suv oynasi - Iskanderkul ko'li, Shimoliy Tojikistonda joylashgan fan tog'larining eng katta ko'li joylashgan. U 2200 metr balandlikda keng tarqaldi. Bu erda sayyohlar ko'l yuzasidan ko'tarilgan yulduzlar va tumanlarning miltillashini tomosha qilishlari mumkin. Dushanbe shahridan 160 km uzoqlikda ko'l qirg'og'ida Iskanderkul turbaza joylashgan. Sayyohlar bu yo'lni fandarya, Yagnob va Iskandardaryoning ajoyib daralari bo'ylab avtoulovlarda bosib o'tishadi. Atrofdagi tog'lar ko'p rangli ko'rinadi, chunki ularda mavimsi, qizil va lilac ohanglari ustunlik qiladi. Iskandardarya darasi ba'zan rangli qoyalar darasi deb ataladi va shamol kuchlari ularni g'alati qal'a devorlari va qal'alariga aylantirdi.`,
                span16: `Tojikiston janubida sayohat ixlosmandlarini juda ko'p qiziqarli narsalar kutmoqda. Markaziy Osiyoning eng qadimiy shaharlaridan biri bo'lgan Kulyab shahri 2006 yilda o'zining 2700 yilligini nishonladi, bu mamlakat uchun muhim voqea bo'ldi. Baljuvon tumani yaqinidagi less qatlamlarida tojik arxeologlari o'rta Osiyoda topilgan eng qadimgi tosh asboblarni - ularning yoshi 850 ming yilni qazishgan. Shuningdek, bu yerda dangarin tumanidagi Ogizkichik g'oridagi neandertallarning noyob turar joylari ochilgan, ularning atrofida 15 mingta charxlangan toshbaqa qobig'i topilgan.`,
                span17: `Chet ellik sayyohlar uchun qadimgi Xutalning hozirgi Kulaba shahrining go'zal atrofidagi diqqatga sazovor joylar katta qiziqish uyg'otmoqda. Xoja Mo'min tog'i ayniqsa jozibali bo'lib, u butunlay turli xil rangdagi sof tuz, och va kulrang, mavimsi yashil va pushti ranglardan iborat noyob tabiiy yodgorlikdir. Ushbu tog'ning tuz zaxiralari butun insoniyatni yuzlab yillar davomida ta'minlashi mumkin. Xodja muminning yana bir mo " jizasi - bu musiqiyligi bilan mashhur bo'lgan g'orlari. Ma'lum bo'lishicha, g'orlarning kirish qismida osilgan kalitlar, uzun va ingichka shisha stalaktit muzlari kabi shamol ajoyib tovushlarni keltirib chiqaradi. IV asrning taniqli mutafakkiri va diniy arboblari Mir Said Ali Hamadoni maqbarasi, uning sufilik ta'limotini hurmat qiladigan ko'plab izdoshlari diniy ziyorat qiladigan kulba shahrida tarix va me'morchilikning noyob yodgorligi hisoblanadi.`,
                span2: `Iqlim subtropik bo'lib, havo haroratining kunlik va mavsumiy o'zgarishi, kam yog'ingarchilik, quruq havo va kam bulutli. Yanvar oyining o'rtacha harorati +2...?Respublikaning janubi-g'arbiy va shimolidagi vodiylar va tog ' etaklarida 2°C gacha ?20 °C va Pamirda pastga tushadi. Mutlaq minimal harorat yetadimi?Pamirda 63°C (Bulunkul). Iyul oyining o'rtacha harorati janubi-g'arbiy vodiylarda 30°C dan 0°C gacha va Pamirda pastroq. Haroratning mutlaq maksimal darajasi 48 °C (quyi Panj) ni tashkil qiladi. Kamdan kam hollarda harorat 60°C ga etadi.`,
              },
              disc2: {
                title: `MA'LUMOT`,
                text: {
                  text1: {
                    title: `Tojikistonning davlat tuzilishi`,
                    disc: `Tojikistonning davlat tuzilishi-prezident Respublikasi. Qonun chiqaruvchi hokimiyatni parlament-Majlisi Oli amalga oshiradi. Pul birligi somoni.`
                  },
                  text2: {
                    title: `Tojikistonning ma'muriy bo'linishi`,
                    disc: `Tojikiston Respublikasining 1995 yil 4 noyabrdagi 101-sonli "Tojikiston Respublikasining ma'muriy-hududiy tuzilishi masalalarini hal qilish tartibi to'g'risida" gi qonuniga muvofiq davlat boshqaruvi birinchi darajali alohida ma'muriy-hududiy birlik maqomiga ega bo'lgan Dushanbe shahridan, tog'li Badaxshon avtonom viloyati, So'g'di va Xatlon viloyatlaridan va o'n uchta respublika bo'ysunuvidagi tumanlardan iborat guruhdan iborat.`
                  },
                  text3: {
                    title: `Tojikiston Iqtisodiyoti`,
                    disc1: `Tojikiston-bu katta sayyohlik va iqtisodiy salohiyatga ega bo'lgan sanoat-agrar davlat. Uzoq davom etgan urush, u bilan bog'liq vayronagarchilik va odamlarning yo'qotishlari iqtisodiyotning keskin pasayishiga olib keldi. Ammo so'nggi tinchlik yillarida iqtisodiyot va turmush darajasi sezilarli darajada oshdi. Alyuminiy eksporti eksport tushumining yarmini ta'minlaydi. Ikkinchi o'rinda paxta eksporti.`,
                    disc2: `Mamlakat gidroenergetika sohasida katta salohiyatga ega. Gidroenergetika resurslarining umumiy hajmi 527 mlrd.bu davlatni dunyodagi ushbu qayta tiklanadigan energiya manbai bilan eng yaxshi ta'minlangan davlatlardan biriga aylantiradi (mutlaq ishlab chiqarish salohiyati bo'yicha sakkizinchi o'rin).`
                  },
                  text4: {
                    title: `Aholisi:`,
                    disc: `8 milliondan ortiq kishi (2014)`
                  },
                  text5: {
                    title: `Din`,
                    disc: `Tojikiston aholisining katta qismini (9599%) hanafiy mazhabining sunniylari tashkil etadi (2009 yil 2 apreldan rasmiy maqom berilgan).`
                  },
                  text6: {
                    title: `Til`,
                    disc: `Davlat tili-Tojikiston Respublikasi, rus tili-millatlararo jamiyat tili.`
                  },
                  text7: {
                    title: `Davlat bayramlari`,
                    disc1: `1 yanvar-yangi yil
                              `,
                    disc2: `8 mart - onalar kuni
                              `,
                    disc3: `21-24 mart - Navro'z (xalqaro bayram)
                              `,
                    disc4: `1 may-xalqaro mehnat birdamligi kuni
                              `,
                    disc5: `9 may - g'alaba kuni
                              `,
                    disc6: `27 iyun-milliy birlik kuni
                              `,
                    disc7: `9 sentyabr - Tojikiston Respublikasi mustaqillik kuni
                              `,
                    disc8: `6 noyabr - Tojikiston Respublikasi Konstitutsiyasi kuni
                              `,
                    disc9: `Uraza-bayram Ramazon oyining tugashini nishonlash
                              `,
                    disc10: `Qurbon hayiti Ramazon oyi tugaganidan 70 kun o'tgach nishonlanadi
                              `,
                  },
                  text8: {
                    title: `Viza`,
                    disc: `Tojikiston Respublikasiga Tojikiston Respublikasining vakolatli organlari tomonidan tashqi ishlar vazirligi va uning xorijiy bo'linmalari, shuningdek Tojikiston Respublikasi bilan tegishli kelishuvlarga ega bo'lgan xorijiy mamlakatlarning elchixonalari va konsulliklari tomonidan berilgan kirish vizasi mavjud bo'lgan taqdirda xorijiy fuqarolar haqiqiy xorijiy pasportlar yoki ularning o'rnini bosuvchi hujjatlar orqali kirishlari mumkin. Turistik vizani olish muddati hujjatlarni topshirish kunini hisobga olmaganda, 3 ish kunidan oshmaydi.
                              `
                  },
                  text9: {
                    title: `Bojxona`,
                    disc: `500 AQSh dollaridan yuqori summalar yoki ularning boshqa valyutadagi ekvivalentlari kelganda deklaratsiya qilinishi kerak. Import uchun ruxsat etilgan maksimal miqdor — 5000 AQSh dollari. Milliy valyutani olib kirish va olib chiqish taqiqlanadi. Shuningdek, Islom axloqi normalariga zid bo'lgan giyohvand moddalar, qurol - yarog ' va o'q-dorilar, zaharli va portlovchi moddalar, pornografiya va har qanday bosma mahsulotlar, foto va video materiallarni olib kirish taqiqlanadi. Qimmatbaho metallar va toshlarni faqat Tojikiston do'konida sotib olinganligini tasdiqlovchi hujjat mavjud bo'lganda eksport qilish mumkin.
                              `
                  },
                  text10: {
                    title: `Pasport rejimi
                              `,
                    disc: `Tojikiston Respublikasida vaqtincha bo'lgan chet el fuqarolari belgilangan tartibda uch kun ichida o'zlarining milliy pasportlarini yoki ularning o'rnini bosuvchi hujjatlarini ro'yxatdan o'tkazishlari va yashash muddati tugaganidan keyin Tojikiston Respublikasidan chiqib ketishlari shart. (6.08.01 yildagi 33-sonli qonun)
                              `
                  },
                  text11: {
                    title: `Foydali ma'lumotlar`,
                    disc1: `Internet domeni-tj`,
                    disc2: `Telefon kodi +992`,
                    disc3: `Tarmoq kuchlanishi-220 V AC, 50 A; standart er-xotin vilka rozetkasi`,
                    disc4: `Vaqt: GMT + 5 soat`,
                  }
                }
              }
            },
            turk: {
              title: `Туркменистан`,
              disc: {
                text1: `Mamlakat O'rta Osiyoning janubi-g'arbiy qismida joylashgan bo'lib, janubda Afg'oniston va Eron, shimolda Qozog'iston va O'zbekiston bilan chegaradosh, g'arbda ichki Kaspiy dengizi bilan yuviladi, jahon okeaniga kirish imkoni yo'q. 1992 yil 2 martdan BMT a'zosi. Mamlakat poytaxti Ashxobod shahri.`,
                text2: `1924 yil 27 oktyabrda o'rta Osiyo sovet respublikalarini milliy-davlat chegaralash bo'yicha Turkman SSRga aylantirildi. 1991 yil 27 oktyabrda respublika Oliy Kengashi mustaqillik deklaratsiyasini qabul qildi, mamlakatning yangi nomi Turkmanistonni tasdiqladi.
                          `,
                text3: `Turkmanistonning poytaxti Ashxobod, davlatning eng yirik ma'muriy siyosiy, sanoat, ilmiy va madaniy markazi. Ashxobod alohida ma'muriy birlik — velayat (viloyat) huquqiga ega shahar. Turkmanistonning janubida, Eron chegarasidan 25 km shimolida Turon pastligida joylashgan.`,
                text4: `Shahar Axal vohasida, Prekopetdag tog ' oldi tekisligida joylashgan. Rasmiy hisob-kitoblarga ko'ra, Ashxobodda Turkmaniston aholisining taxminan 12,5 foizi yashaydi. Ashxoboddagi binolar asosan Sharqiy me'moriy uslubda qurilgan. Deyarli barcha uylar, osmono'par binolar, masjidlar va piyodalar yo'laklari chiroyli marmar bilan bezatilgan.Ashxoboddan 5 km shimoliyda mashhur Sharqiy bozor Jigilliq (Tolkuchka) joylashgan. Ashxobod, 1924 yil oktyabrdan Turkmaniston poytaxti. Prikopetdag tog ' oldi tekisligida, 214240 metr balandlikda joylashgan.shahar Axal oazisida joylashgan. 1924 yil 27 oktyabrda Turkman SSR tashkil etilgandan so'ng shahar respublikaning poytaxti bo'ldi va 1927 yilda unga "Ashxobod"milliy nomi berildi.
                          `,
                text5: `Mamlakatda Ashxobod (im. Buyuk Turkmanboshi saparmurati), Mara va Turkmanboshi. Davlat aviakompaniyasi har kuni mamlakat ichida ikki mingdan ortiq yo'lovchini tashiydi. Xalqaro aviakompaniyalarda har yili yarim milliondan ortiq odam tashiladi. Temir yo'llarning umumiy uzunligi 3181 km. elektrlashtirilgan yo'llar yo'q. Turkmaniston temir yo'llarining yo'lovchi qatnovi mamlakatning davlat chegaralari bilan cheklangan, Tojikistondan O'zbekistonga va undan keyingi poyezdlar tranzit o'tadigan uchastkalar bundan mustasno. Hozirgi vaqtda Qozog'iston Turkmaniston Eron temir yo'li qurilmoqda.
                          `,
                text6: `Turkmaniston uchun o'rtacha tipdagi cho'llarning kontinental iqlimi xosdir: uzoq quruq, issiq yoz, salqin, nam kuz va sovuq, kam qorli qish. Uzoq shimoli-Sharqda va janubi-g'arbda qish davrining davomiyligi minimal - bir oy, uzoq shimol va shimoli-Sharqda - 4 oydan ortiq. Yanvar oyida shimoli-Sharqda o'rtacha harorat 6°C dan past, janubi - Sharqda va janubi-g'arbda +3°C dan +5°C gacha.iyulda u +25°, +32°oralig'ida o'zgaradi. Turkmaniston namlik yetarli bo'lmagan hududga tegishli. Tekislik hududida yillik yog'ingarchilik miqdori 150 mm dan oshmaydi, Orolbo'yi va qara Bogaz golda 100 dan kam, tog'li hududlarda esa 350 mm.arid sharoitida dehqonchilikning rivojlanishi faqat sun'iy sug'orishga asoslangan.
                          `,
                text6: `Turizm so'nggi yillarda jadal rivojlanayotgan sohadir. Terapevtik turizm ayniqsa jadal rivojlanmoqda. Bu, birinchi navbatda, Kaspiy dengizi sohilida Avaza sayyohlik zonasini yaratish bilan bog'liq. Har bir sayyoh Turkmanistonga kirishdan oldin viza olishi kerak. Turistik vizani olish uchun aksariyat mamlakatlar fuqarolari mahalliy sayyohlik agentligining viza yordamiga muhtoj.
                          `,
                text7: `Turkmanistonga tashrif buyurgan sayyohlar uchun Dashoguz, Keneurgench, Ashxobod, Nisa, merva, Maraning tarixiy diqqatga sazovor joylari, Avazaga plyaj sayohatlari va mollakarda (Qorakum cho'lida joylashgan sanatoriya), yily suve, Archmanda (Axalt tumanidagi kurort) sayyohlik sayohatlari tashkil etiladi. oltingugurt-sulfat-ohak bilan mashhur manbalar).
                          `,
                text8: `Turkmaniston hududida YUNESKOning Jahon merosi ob'ektlari ro'yxatiga kiritilgan uchta obyekt joylashgan: Nisa, qadimgi Merv va Keneurgench.
                          `,
                text9: `Nisa-miloddan avvalgi III asrda parfiyaliklar tomonidan Kopetdag etagida tashkil etilgan qadimiy va o'rta asr shahri.e. va keyingi olti asr davomida Arshakidlar sulolasining asosiy qal'asi va ba'zan Parfiyaning poytaxti bo'lib xizmat qilgan ("Mihridatkirt" nomi bilan, qirol Mitridat i sharafiga). Sosoniylar hokimiyatga kelganidan so'ng, O'rta asrlarda Ipak yo'lidagi savdo markazi sifatida qayta tiklangan. X asrda Nisa Samanid Nuh II tomonidan Xorazm hokimi Mamunga berilgan. 1017 yilda Mahmud G'aznevi Xorazmni zabt etguniga qadar shahar Mamunidlar hukmronligi ostida bo'lgan. Mahmudning o'g'li Masud 1035 yilda Nisani Xurosonga bostirib kirgan saljuqiylarga berishga majbur bo'ldi. XII asrdan shahar yangi Xorazmshohlar sulolasi — Anushteginidlar hukmronligi ostiga o'tdi, ular 1220 yilda mo'g'ullar istilosiga qadar uning qo'lida qoldi. XVI asrdan boshlab Nisa barqaror ravishda pasayib bordi va 1820-yillarga kelib xarobalar edi. M. E. nisda olib borilgan qazishmalar. 1946-1960 yillarda Masson tomonidan ustunlar zali, muqaddas joylar va mustahkamliklar xarobalari, Parfiya tilida oromiy yozuvi bilan yozilgan hujjatlar, parfiyaliklarning kundalik hayoti, ularning ellinistik san'atining boy guvohliklari topilgan (masalan,, pishirilgan loydan yasalgan monumental haykallar). 2007 yilda Parfiya qal'asi xarobalari YUNESKOning Jahon merosi ro'yxatiga kiritilgan.
                          `,
                text10: `Merv-O'rta Osiyodagi eng qadimgi mashhur shahar, Turkmanistonning janubi-Sharqiy qismidagi Murg'ab daryosi sohilida, hozirgi Mara shahridan 30 km Sharqda joylashgan. Miloddan avvalgi 1-ming yillikning o'rtalarida paydo bo'lgan.E. Merv o'zining eng yuqori cho'qqisiga XII asr o'rtalarida, Sulton Sanjar uni Saljuqiylar davlatining poytaxtiga aylantirganda erishdi. Bu vaqtda Merv o'z zamondoshlarini o'zining binolari va katta aholisi bilan hayratda qoldirdi, ba'zi hisob-kitoblarga ko'ra Konstantinopol va Bag'dod aholisidan ko'proq edi. Xorazmshohlar davrida ham O'rta Osiyoning eng yirik markazi bo'lib qolishda davom etdi. 1221 yilda Merv mo'g'ullar tomonidan vayron qilingan va XV asrga qadar qayta tiklanmagan, timuridlar nihoyat uning sug'orish inshootlarini tartibga solishgan, ammo Merv avvalgi buyukligiga erisha olmagan, vaqt o'tishi bilan aholi punkti hozirgi Mara shahri o'rniga ko'chirilgan. 1880-yillarda rus armiyasi kelishi bilan M. E. Masson faoliyati tufayli urushdan keyingi davrda tizimli xususiyatga ega bo'lgan merva oazisi hududini arxeologik o'rganish boshlandi. Merva xarobalari insoniyatning Jahon merosi yodgorligi.
                          `,
                text11: `Kunya-Urganch X—XIII va XIV asrlarda Xorazm poytaxti. uning tashkil etilgan sanasi noma'lum, ammo "Qirkmolla" shahrining eng qadimgi qal'asi qoldiqlari antik davrga (AVV. Shahar zardushtiylarning muqaddas kitobida-Avestoda "Urva", "Urga" deb nomlangan. Kangyu davrida shahar "Xangird", "Xadjird"nomi bilan mashhur. X asr oxirida, Janubiy Xorazm shimolga qo'shilgandan so'ng, Urganch Birlashgan Xorazm davlatining poytaxtiga aylandi. 1221 yilda shahar mo'g'ullar tomonidan bosib olingan va vayron qilingan. 1224 yilda xon Juchi egaligiga kirdi va tez orada tiklandi. 13-asr o'rtalaridan.  Oltin orda tarkibida savdo-hunarmandchilik va ma'muriy markazning ahamiyatini saqlab qoldi. Xorazm Oltin O'rda hokimiyatidan ozod bo'ldi va Urganch yana uning poytaxtiga aylandi. 1388 yilda Timur tomonidan yo'q qilingan. 1391 yilda qisman tiklangan, ammo avvalgi ahamiyatiga erishmagan; 17 asrda mavjud bo'lmay qoldi. Urganchda Faxraddin-razi maqbarasi (2-qavat) saqlanib qolgan. XII asr), Tekesh maqbarasi (kon. XII-XIII asr boshlari), qutlug ' Timur minorasi (1321-1333), xanaka — Najmeddin Kubra maqbarasi bilan uch gumbazli Portal inshooti (XIV asrning 1-uchdan bir qismi), XIV asr karvonsaroy portali. 2005 yilda shahar yodgorliklari YUNESKOning jahon merosi ro'yxatiga kiritilgan.
                          `,
                text12: `Margiana (yunon. Margiane, boshqa fors. Margush) - O'rta Osiyodagi qadimgi viloyat nomi, Murg'ab daryosi oqimi bo'yicha (hozirgi Turkmanistonning janubi-sharqida va Afg'onistonning shimolida). Margian haqida eng qadimgi eslatmalar Avest va Behistun yozuvlarida. Margiana G'arbda Parfiya, shimoli-Sharqda So'g'd, Sharqda Baqtriya, janubda Areya bilan chegaralangan. Margana poytaxti qadimgi merva hududida joylashgan. Miloddan avvalgi 522 yilda Margianada axemenidlar hokimiyatiga qarshi xalq isyoni sodir bo'ldi, uni Shoh dariy I (521) bostirdi. Keyinchalik Margiana ketma-ket Aleksandr Makedonskiy davlati, Salavkiylar davlati va Parfiya qirolligi tarkibiga kirdi. O'rta asrlarda Margian erlari Xurosonga kirdi.
                          `,
                text13: `Miloddan avvalgi 1-ming yillikning 1-uchdan birida Margianada shahar tipidagi aholi punktlari (yaz-depe) paydo bo'ladi. Miloddan avvalgi 1-ming yillikning o'rtalarida.e. shaharlar qal'a devorlari bilan o'ralgan (Merv). Miloddan avvalgi III asrda ellinistik madaniyatning ta'siri Margiana san'atiga kirib boradi. O'zining gullab — yashnagan davrida (miloddan avvalgi II asr-milodiy III asr) Margiana shaharlari va qal'alari muntazam rejaga muvofiq, ba'zan "gofrirovka qilingan" devorlar (Chilburg) bilan qurilgan; turar-joy binosi uchun bir nechta uylarning bitta hovli (Jin-depe) bilan birlashishi xarakterlidir; terakota haykalchalari keng tarqalgan, me'moriy inshootlar ko'rinishidagi ossuariylar mavjud. III asrga kelib buddaviy arxitektura va haykaltaroshlik yodgorliklari paydo bo'ldi. Margiananing badiiy an'analari merva san'atida rivojlanishni topadi.
                          `,
                text14: `Mashhur" shamol kabi tez " axaltekaliklar mamlakatni butun dunyoga mashhur qildilar, davlat gerbida hatto axaltekalik ot tasvirlangan. Bu haqiqatan ham noyob zotdir – tez, oqlangan, kesilgan "oqqush" bo'yni va ingichka" quruq " oyoqlari bilan, bu otlar ham hayratlanarli darajada bardoshlidir. Turkmanlar asrlar davomida yaxshi otlarni juda qadrlashdi va ularni do'stlari deb hisoblashdi. Ushbu" ehtiros " bugungi kungacha saqlanib qolgan va hozirda otlar mamlakatning asosiy diqqatga sazovor joylaridan biridir.
                          `
              },
              disc2: {
                title: `MA'LUMOT`,
                text: {
                  span1: {
                    title: `Turkmanistonning davlat tuzilishi
                              `,
                    text1: `Turkmanistonning davlat tuzilishi 5 velayat va Ashgabatni o'z ichiga olgan bir partiyali tizimga ega Prezident Respublikasi velayat huquqiga ega shahar. Qonun chiqaruvchi organ Majlis (parlament, 125 a'zo). Pul birligi-manat.
                              `,
                  },
                  span2: {
                    title: `Turkmanistonning ma'muriy bo'linishi
                              `,
                    text1: `Ma'muriy jihatdan Turkmaniston 6 ta ma'muriy-hududiy birlikdan iborat bo'lib, ulardan 5 tasi velayatlar, 1 tasi velayat huquqiga ega shahar:
                              `,
                    text2: `Axal viloyati. Poytaxti Annau.
                              `,
                    text3: `Bolqon viloyati. Poytaxti Balkanobod (Nebit-Dag).
                              `,
                    text4: `Dashog'uz viloyati. Poytaxti Dashog'uz (Tashauz).
                              `,
                    text5: `Lebap viloyati. Poytaxti Turkmanobod (Charjou).
                              `,
                    text6: `Mariya viloyati. Poytaxti — Mara.
                              `,
                    text7: `Ashxobod Shahri.
                              `,
                  },
                  span3: {
                    title: `Turkmaniston Iqtisodiyoti
                              `,
                    text1: `Tabiiy gaz (15-20 trillion kub metr) va neft (1,5-2,0 milliard tonna) ning katta zaxiralariga ega bo'lgan Turkmaniston yoqilg'i resurslarining muhim eksportchilaridan biridir. Iqtisodiyotning ushbu sektori yalpi milliy mahsulotning taxminan 70 foizini tashkil etadi. Sanoatning asosiy tarmoqlariga neft va tabiiy gazni tozalash va qayta ishlash; shisha, mato (asosan paxta) va kiyim-kechak ishlab chiqarish; oziq-ovqat sanoati.
                              `,
                  },
                  span4: {
                    title: `Aholisi:`,
                    text1: `5 milliondan ortiq kishi (2012)`,
                  },
                  span5: {
                    title: `Din`,
                    text1: `Turkmaniston aholisining aksariyat qismini musulmonlar (asosan sunniy) tashkil etadi 89%. Xristianlar aholining 9 foizini, qolgan konfessiyalar esa 2 foizini tashkil etadi.
                              `,
                  },
                  span6: {
                    title: `Til`,
                    text1: `Turkmanistonning davlat tili turkman tili hisoblanadi.
                              `,
                  },
                  span7: {
                    title: `Davlat bayramlari
                              `,
                    text1: `Yangi yil-1 yanvar
                              `,
                    text2: `Xotira kuni 12 yanvar
                              `,
                    text3: `Turkmaniston davlat bayrog'i kuni 19 fevral
                              `,
                    text4: `Xalqaro xotin-qizlar kuni - 8 mart
                              `,
                    text5: `Milliy bahor bayrami-21-22 mart
                              `,
                    text6: `1941-1945 yillardagi Buyuk Vatan urushidagi g'alaba kuni 9 may
                              `,
                    text7: `Maxtumquli Fraga uyg'onish, birlik va she'riyat kuni - 18 may
                              `,
                    text8: `Milliy xotira kuni - 6 oktyabr
                              `,
                    text9: `Turkmaniston mustaqillik kuni 27-28 oktyabr
                              `,
                    text10: `Turkmaniston milliy bayrami neytrallik kuni 12 dekabr
                              `,
                    text11: `Qurbon bayrami va Uraza bayrami
                              `
                  },
                  span8: {
                    title: `Viza`,
                    text1: `Har bir sayyoh Turkmanistonga kirishdan oldin viza olishi kerak. Turistik vizani olish uchun aksariyat mamlakatlar fuqarolari mahalliy sayyohlik agentligining viza yordamiga muhtoj.
                              `,
                  },
                  span9: {
                    title: `Bojxona`,
                    text1: `Mahalliy valyutani olib kirish va olib chiqish taqiqlanadi. Chet el valyutasini olib kirish cheklanmagan (miqdori deklaratsiyada ko'rsatilishi kerak). Siz deklaratsiyada ko'rsatilganidan oshmaydigan miqdorni eksport qilishingiz mumkin.
                              `,
                    text2: `16 yoshdan oshgan yo'lovchilarga 200 tagacha sigaret yoki 200 gramm bojsiz olib kirishga ruxsat beriladi. tamaki; 2 litrgacha har qanday alkogolli ichimliklar (21 yoshdan oshganlar uchun); shuningdek, shaxsiy buyumlar oqilona miqdorda.
                              `,
                    text3: `Mamlakatga kirishda bojxona deklaratsiyasini to'ldirish kerak, u ketishdan oldin saqlanishi kerak. Bu shaxsiy foydalanish uchun mo'ljallangan narsalar va narsalarni, shu jumladan deklaratsiyada ko'rsatilishi kerak bo'lgan valyuta va zargarlik buyumlarini keyinchalik olib tashlashni osonlashtiradi. Bojxona tekshiruvi odatda ancha uzoq va batafsil. Valyuta ayirboshlash kvitansiyalari va do'konlardan cheklarni saqlash tavsiya etiladi. Bu mamlakatda sotib olingan tovarlarni eksport qilishni osonlashtiradi, ayniqsa ular uchun chet el valyutasida to'langan bo'lsa.
                              `,
                    text4: `Qurol, o'q-dorilar va giyohvand moddalarni olib kirish va olib chiqish taqiqlanadi. San'at asarlari va antiqa buyumlarni faqat madaniyat vazirligining ruxsati bilan olib kirish va olib chiqish mumkin. Gilamlar, zargarlik buyumlari, musiqa asboblari, badiiy va arxeologik eksponatlar va boshqalarni olib chiqish faqat ularni sotib olishning qonuniyligini tasdiqlovchi hujjatlar mavjud bo'lganda mumkin. Turkmanistondan gilamlarni olib chiqish uchun Ashxoboddagi gilam muzeyidan gilamning tarixiy ahamiyati yo'qligi to'g'risida guvohnoma olish kerak. Bundan tashqari, siz gilamning o'lchamiga qarab soliq to'lashingiz kerak bo'ladi.
                              `,
                  },
                  span10: {
                    title: `Pasport rejimi
                              `,
                    text1: `2005-yildagi "migratsiya to' g 'risida" gi qonun asosida Turkmanistondagi manziliga yetib kelgan chet el fuqarolari ushbu qonunda belgilangan tartibda olingan vizalar asosida uch ish kuni ichida ro 'yxatdan o' tkazishlari shart. Ro'yxatdan o'tish Turkmanistonning qabul qiluvchi yuridik va jismoniy shaxslarining yozma murojaatlari asosida amalga oshiriladi.
                              `,
                  },
                  span11: {
                    title: `Foydali ma'lumotlar
                              `,
                    text1: `Internet domeni-tm`,
                    text2: `Telefon kodi +993`,
                    text3: `Tarmoq kuchlanishi-220 V AC, 50 A; standart er-xotin vilka rozetkasi
                              `,
                    text4: `Vaqt: GMT + 5 soat
                              `,
                  },
                }
              }
            },
            history: {
              title: `O'rta Osiyo xalqlari tarixi`,
              text: {
                title: `O'RTA OSIYO-BUYUK JANGLAR MAYDONI`,
                text1: `Zamonaviy O'rta Osiyo 1991 yilda SSSR qulaganidan keyin beshta mustaqil davlat: Qozog'iston, Qirg'iziston, Tojikiston, Turkmaniston va O'zbekiston, g'arbda Kaspiy dengizidan Sharqda Xitoy chegaralarigacha bo'lgan hududni egallaydi.
                          `,
                text2: `Miloddan avvalgi VI asrgacha O'rta Osiyo xalqlari tarixi.e. faqat xalq dostoni va afsonalaridan olingan parcha ma'lumotlarga ko'ra ma'lum. Qadimgi mualliflarda yanada ishonchli ma'lumotlarni topamiz.
                          `,
                text3: `O'rta Osiyo vohalarining boy va unumdor erlari, juda qulay geografik joylashuvi bilan, har doim bosqinchilar uchun yangilik bo'lib kelgan. Miloddan avvalgi 540 yilda O'zbekistondagi Gissar tizmasidan Afg'onistondagi Hindukushgacha bo'lgan hududni egallagan Baqtriya Axemen davlatining Buyuk kir II (miloddan avvalgi 559-530 yillar) bilan satrapiyasiga aylandi, keyin u saklarni, shuningdek So'g'diyona, Xorazm va Parfiyani bo'ysundirdi. miloddan avvalgi). Saki va massagetlar (ko'chmanchi va yarim ko'chmanchi qabilalar) Markaziy va Sharqiy Qozog'iston, Orolbo'yi, yetti Daryo va Pamir hududlarida yashagan. Gerodotdan biz kir II ni mag'lub etgan massaget malikasi Tomiris haqida bilamiz. So'g'diyona (So'g'd) hozirgi Tojikiston (Pomirsiz) va O'zbekiston (Xorazm va Shimoliy Baqtriyasiz) hududini egallab, Marakand poytaxti miloddan avvalgi VIII asrda tashkil etilgan. O'rta Osiyoning eng qadimiy tarixiy va madaniy mintaqalaridan biri. Ko'pgina tadqiqotchilar uni ariylar mamlakati - avestiya Aryanam-voychax, birinchi zardushtiylik mamlakati bilan tenglashtiradilar. Parfiya tarkibiga Janubi-G'arbiy Turkmaniston va shimoli-Sharqiy Eronning Kopetdag tog'lari va unga tutash vodiylari kirgan.
                          `,
                text4: `O'rta Osiyo xalqlari Fors va Gretsiyaning o'sha davrdagi eng kuchli kuchlari o'rtasidagi raqobatga jalb qilingan. Ular forslar bilan birgalikda Afina yunon davlatiga qarshi kampaniyalarda qatnashdilar.  Shuningdek, biz bilamizki, Gavgamela jangida (miloddan avvalgi 331 yil) Aleksandr Makedonskiy O'rta Osiyo xalqlari ustidan Axamoniylar hukmronligini tugatib, oxirgi axamoniy Doro III ni boshiga urdi. Aleksandr So'g'diyona va Baqtriyani bitta satrapiyaga birlashtirdi, keyinchalik u Diodot tomonidan miloddan avvalgi II asrgacha mavjud bo'lgan Yunon-Baqtriya davlatiga aylantirildi.
                          `,
                text5: `Qadimgi yunon tarixchisi Strabonning xabar berishicha, baqtrianani ellinlardan saklar mamlakatidan kelgan ko'chmanchi odamlar olib ketishgan. Xitoy manbalarida xunlar tomonidan Sharqiy Turkistondan quvib chiqarilgan Yuechlar tomonidan Dahya - Baqtriyani bosib olish haqida gap boradi.  Yunon-Baqtriya hukmdorlari ustidan g'alaba qozonganidan so'ng, yuechji Amudaryoning o'ng qirg'og'ida joylashdi. Qadimgi mualliflar yu-chini toxarlar bilan tenglashtiradilar. Shuning uchun bu hududlarning keyingi nomi Toxariston.
                          `,
                text6: `Xitoy elchisi Chjan Qianning hisobotiga asoslanib, xitoylik tarixchi urf-odatlar yu-chiga o'xshash ko'chmanchi (ehtimol skif) Kangyu davlatini eslatib o'tadi. Afsonadagi Kangyu tarixi "Avesta" davriga borib taqaladi, u erda kangha Turanning poytaxti deb ataladi. Kangha davlati haqida "Avesta" ham, "Mahabharata" hind eposi ham eslatib o'tilgan, u milodiy IV asrga kelib shakllangan. u Sirdaryoning quyi va o'rta oqimida miloddan avvalgi II asrdan IV asrgacha mavjud bo'lgan. keyinchalik Xitoy tarixchilarining eslatmalariga ko'ra, Buxoro, Shahrisabz, Kattaqo'rg'on, Toshkent oazisi va Shimoliy Xorazmning bir qismi.
                          `,
                text7: `Shu davrda, Chjan Tsianning guvohligiga ko'ra, O'rta Osiyo hududida 70 ta shaharni birlashtirgan Davan (Farg'ona) davlati mavjud bo'lgan, uning hokimi Gushan (yu-Chen) shahrida o'tirgan, ehtimol hozirgi Uzgen.
                          `,
                text8: `Xitoy xronikalarida miloddan avvalgi i asrda Dahya - Baqtriyada yu-Chjining beshta naslidan biri – Guyshuan (Kushon) ko'tarilganligi haqida xabar berilgan. Kushon shahzodasi Kadfiz o'zini suveren deb e'lon qildi, Kushon Qirolligining hududiy yadrosi yaratilishi bilan yakunlangan urushni boshladi. Uning vorislari O'rta Osiyo, Afg'oniston, qisman Hindiston va Pokiston hududlarini o'z ichiga olgan va Rim va Xitoy imperiyalariga teng bo'lgan Buyuk Kushon imperiyasini yaratishni yakunladilar. Tarixning Kushon davrida buddizmning dunyo dinlaridan biriga aylanishi va buyuk ipak yo'lining gullab-yashnashi sodir bo'ldi.
                          `,
                text9: `V-VI asrlarda Kushon imperiyasi o'rniga eftalitlar davlati keldi. Tarixchi Lev Gumilyovning fikricha, Eftalitlar (oq xunlar) Pomir tog'li hududida xalq sifatida shakllangan. Eftalit davlatiga o'rta Osiyo hududlari, Xorazm (So'g'diyona, Baqtriya-Toxariston, Farg'ona), shuningdek Afg'oniston va Sharqiy Eron kiradi. Urushlar davomida eftalitlar Hindistondagi Gupta davlatini yo'q qildilar. O'zlari hind, sosoniylar va turkiy hukmdorlarning zarbalari ostida yiqildilar.
                          `,
                text10: `VI-VII asrlarda O'rta Osiyo xalqlari ulkan ko'chmanchilar davlatiga - tinch okeanidan qora dengizgacha (630 yilda Hind okeanigacha) va shu bilan birga buyuk ipak yo'lini boshqargan turkiy xoqonlikka kirishdi. Xitoy unga 1000 dona ipak o'lpon to'lashga majbur bo'ldi. Biroq, faqat 630 yilgacha, xitoyliklar turklarni mag'lubiyatga uchratgan paytgacha.
                          `,
                text11: `VII asrda.O'rta Osiyo xalqlari ustidan yangi tahdid paydo bo'ldi – Suriya, Falastin va Eronni bosib olgan arablarning bosqini. 651 yilda ular gullab-yashnayotgan Mervga yaqinlashdilar va uni jangsiz olib ketishdi. VIII asr boshida Arab qo'shinlari Quteyba ibn Muslim qo'mondonligi ostida O'rta Osiyoning katta qismini zabt etishni yakunladilar. Tarixchi Ibn Al-Asirning so'zlariga ko'ra, Kuteyba O'rta Osiyodan 100 mingga yaqin qul-asirlarni olib kelgan. IX asrda. arablardan Islomni qabul qilgan O'rta Osiyoda Arab xalifaligining parchalanishi jarayonida mahalliy Somoniylar sulolasi (819-999) o'rnatildi.
                          `,
                text12: `999 yilda Samanidlar poytaxti Buxoroni yetti Daryo va Qashqar turk qabilalari tomonidan tashkil etilgan va shash, Farg'ona va qadimgi sog'da yerlarini zabt etgan Qaraxoniylar davlati qo'shinlari egallab olishdi.
                          `,
                text13: `1141 yilda Maverranaxrada karakitaylar paydo bo'ldi. Ular o'z davlatlarini tashkil etgan yetti Daryo hududidan hujumlar uyushtirishdi. Hududning feodal parchalanishidan foydalanib, ular avval Samarqandni, keyin Buxoroni egallab olishdi. Ammo ular faqat o'lpon bilan qiziqishdi.
                          `,
                text14: `Xorazm 1194 yilda Eronda Saljuqiylar sulolasi qulaganidan keyin mustahkamlangan va o'lpon to'lashni istamagan karakitlarga qarshi kurashga kirishdi. Xorazmshoh Muhammad 1210 yilda Buxoroni egallab oldi va qoraqalpog'istonlik Samarqand xoni Usmon bilan ittifoqda yetti daryoga harakat qildi. Talas daryosi vodiysida Xorazmshoh Qaraqitoy qo'shinlari qo'mondoni Tayanguni asirlikka oldi. Mo'g'ullar istilosi arafasida Xorazmshoh Muhammad Maverannaxr erlarini birlashtirib, ularni birma-bir bosib oldi va Xorazm davlati tarkibiga kiritdi.
                          `,
                text15: `Chingizxon umuman O'rta Osiyoga hujum qilishni xohlamadi, lekin Muhammad vassal bo'lishni xohlamadi, mo'g'ul elchilarini o'ldirdi. Bu Markaziy Osiyo taqdirini fojiali tarzda hal qildi. 1220 yil yozidan oldin ham Maverannaxr hududining Sharqiy va Markaziy qismlari mo'g'ullar tomonidan bosib olingan. Ko'plab shaharlar vayronaga aylandi. Ayniqsa, qattiq qarshilik ko'rsatgan Samarqand, Merv, Termiz, Urganch shaharlari zarar ko'rdi. O'rta Osiyoda mo'g'ullarning bir yarim asrlik hukmronligi o'z xalqlariga behisob ofatlarni keltirib chiqardi va keng tarqalgan tanazzul bilan birga keldi.
                          `,
                text16: `Tarqoq yerlarni yagona Amir Temur davlatiga (1336-1405) birlashtirib, 1370 yilda Samarqandni uning poytaxti qildi. U Maverannaxr, Farg'ona va shash viloyatlarini qiyinchiliksiz birlashtirdi, ammo shrew Xorazmni faqat 1380 yilda qo'shib olish mumkin edi. XIV asrning 80-yillari o'rtalariga kelib Temur allaqachon Xurosonga, keyin esa butun Eronga tegishli edi. Oltin O'rdani zaiflashtirish uchun u Oltin O'rda xoni To'xtamishga qarshi uchta yurish qildi (1387, 1391 va 1394-95 yillarda ). 1392 yilda u Armaniston va Gruziyani, 1397 yilda Ozarbayjonni zabt etdi. 1398-99 yillarda Temur Dehli va Hindistonning yaqin hududlarini egallab oldi. 1400 yilda turk sultoni Bayezet I va Misr sultoni Faraj bilan kurashga kirdi. Kichik Osiyoda Sivasni va Suriyadagi Halab shahrini egallab oldi. 1402 yilda Anqara yaqinidagi jangda Usmonli imperiyasining qudratli sultonini mag'lub qildi va asirlikka oldi. Faqat 1405 yilda o'lim uning Xitoyga yurishiga to'sqinlik qildi. Temurning maqsadi Yevropa va Old Osiyo mamlakatlarini uzoq Sharq bilan bog'laydigan jahon karvon savdosi yo'llari ustidan hukmronlik qilish edi.U oltin O'rda boshqargan Shimoliy magistralni yo'q qilib,o'rta Osiyo bo'ylab eski yo'l bo'ylab savdo-sotiqni yo'naltirishga intildi. Shuning uchun 1395 yilda Oltin O'rda Azov, Saray, Urganch shaharlarini butunlay vayron qildi.
                          `,
                text17: `XV asrda. feodal parchalanishi va ichki urushlar Temuriylar davlatining kuchini zaiflashtirdi. Uning yerlarida birin-ketin O'zbek Shayboniylar (XVI asr), Ashtarxoniylar (XVII-XVIII asrlar), Mangitlar dinastiyalari hukmronlik qilmoqda. Ularning hukmronligi, shuningdek, erlarni vayron qilgan shaharlarni vayron qilgan cheksiz ichki urushlar bilan birga bo'lgan. Natijada uchta xonlik – Buxoro, Xiva va Qo'qon xonliklari tashkil topdi, ular o'rtasida O'rta Osiyoda ustunlik uchun qattiq kurash XIX asrning ikkinchi yarmida Rossiyaga qo'shilgunga qadar davom etdi.
                          `
              }
            },
            silkRoad: {
              title: `Buyuk Ipak Yo'li
                        `,
              text1: `Dunyodagi eng katta qit'aning g'arbiy va Sharqiy qismlarini bir yarim ming yildan ko'proq vaqt davomida bog'lab turgan buyuk ipak yo'li insoniyatning eng katta yutuqlaridan biriga aylandi. Unda, ulkan retortda bo'lgani kabi, hayot portladi, nafaqat savdo-sotiq, balki tobora ko'proq talab qilinadigan tovarlar ishlab chiqarishning turli sohalari jadal rivojlandi. Shu bilan birga, madaniyatlarning ulkan aralashmasi va boyitilishi, fanlar, san'at va hunarmandchilikning rivojlanishi sodir bo'ldi.
                        `,
              text2: `Buyuk ipak yo'li ulkan yo'llar tizimi edi, hatto miloddan avvalgi II asrgacha Tyan-Shan, kun-Lun, Qorakorum, Hindukush, Himalaya tog ' tizmalari tomonidan suv havzasi sifatida ajratilgan ikkita Gigat yo'l tizimini aytish to'g'ri bo'ladi. Bu vaqtga qadar Yevropa, Misr, Arabiston, Interrechye (zamonaviy. Iroq va Eron), G'arbiy va o'rta Osiyo, yunon-Rim dunyosi, ko'p ming yillar davomida karvon yo'llari bilan bir-biriga bog'langan, dunyodagi eng qadimiylardan biri bo'lgan ulkan Xitoy imperiyasining mavjudligini hatto bilmagan.
                        `,
              text3: `Butun G'arb dunyosi uchun yopiq, ammo keng yo'llar tarmog'iga ega bo'lgan samoviy imperiyada ular tom ma'noda yonma-yon ko'plab gullab-yashnayotgan shaharlarga ega bo'lgan eng boy erlar mavjudligini bilishmagan. Ularni birinchi bo'lib miloddan avvalgi 138 yilda sayohatini boshlagan va ko'p yillik sinovlardan so'ng o'rta Osiyoda bo'lgan Xitoy elchisi Chjan Qian ko'rgan. U Davani (Farg'ona vodiysi), Kangyu, So'g'da, Baqtriyada bo'lganligi haqida Xitoy imperatoriga batafsil ma'ruza qildi, uni Xitoyda "samoviy" deb nomlana boshlagan mashhur Davani otlari eng ko'p jalb qilishgan, ular mahalliy otlardan juda farq qilishgan. Xitoy imperatori, afsonaga ko'ra, aynan shunday otlarda osmonga ko'tarilib, o'lmas bo'lib qolishi mumkin edi.
                        `,
              text4: `Buning evaziga xitoyliklar o'z mahsulotlarini taklif qilishdi. Tarixchilarning guvohliklariga ko'ra, ipak bilan birinchi karvon juda ixcham va qimmat tovar, shuningdek bronza (va nafaqat!) miloddan avvalgi 121 yilda Xitoydan Farg'ona vodiysiga ko'zgular bilan jo'nab, Turfan vodiysi orqali Tyan-Shanning olovli tog'lari va shoxlari bo'ylab harakatlanardi. Shu munosabat bilan Samarqanddan 35 km uzoqlikda ikki ming yillik "so'g'diy Malika" deb nomlangan dafn etilgan O'zbekiston-Fransiya ekspeditsiyasining topilishi qiziq. Dafn marosimidagi ko'plab oltin zargarlik buyumlari orasida sirli qotishmadan yasalgan Xitoy oynasi topilgan. Ehtimol, "Malika" ipak bilan ham olib tashlangan, ammo bu mato yigirma asr davomida er ostida qolish uchun juda vaqtinchalik.
                        `,
              text5: `Misli ko'rilmagan Xitoy tovarlari, ayniqsa ipak, Markaziy Osiyodan tashqarida tezda mashhurlikka erishdi: avval Forsda, so'ngra Buyuk ipak yo'lining g'arbiy qismida, aytmoqchi, faqat 1877 yildan beri nemis geografi, Xitoy tadqiqotchisi Ferdinand Rixtofenning engil qo'li bilan shunday nomlana boshladi.
                        `,
              text6: `Rimliklar ipakni Xitoy pardasi deb atashgan, buning uchun ajoyib pul to'langan, xususan, ipak parazit hasharotlardan amaliy yagona himoya bo'lganligi uchun. Xitoyliklar ipak yasash sirini uzoq vaqt sir tutishgan, evropaliklar hatto ipak daraxtlarda o'sadi deb ishonishgan. Ammo, hozir aytilganidek, sanoat josusligi natijasida sir sir bo'lib qoldi.
                        `,
              text7: `Ipak G'arb dunyosi Xitoy bilan aloqa qilish natijasida olgan yagona narsa emas. G'arbda eng nozik ishlangan Xitoy chinni buyumlari, bronza va laklangan buyumlar, dori-darmonlar, parfyumeriya, choy, guruch va, albatta, qog'oz katta talabga ega edi, uni ishlab chiqarish texnologiyasi xitoyliklar tomonidan birinchi bo'lib o'zlashtirildi, shuningdek porox ishlab chiqarish. Aytgancha, kompas ham xitoyliklar tomonidan ixtiro qilingan.
                        `,
              text8: `Xitoyning o'zi ham hisob-fakturada qolmadi. Otlar bilan birga ular uchun oziq – ovqat-beda ham Xitoyga keldi. Keyinchalik Xitoyga" samoviy otlar " dan tashqari tuyalar, semiz dumli qo'ylar, ovchi itlar va hatto sherlar va gepardlar ham olib kelindi.
                        `,
              text9: `Bu yerda karvonlar bilan tushgan paxta, shuningdek, loviya, piyoz, bodring, sabzi, yong'oq, anor, anjir, shaftoli, tarvuz, qovun, uzum yetishtirildi. Xitoyliklar va uzum sharobini qadrlashdi…
                        `,
              text10: `Bundan tashqari, O'rta Osiyo Xitoyga u erda bilmagan jun mahsulotlarini - matolar, gilamlar, saroylar, shuningdek harbiy jihozlar, oltin, kumush, yarim qimmatbaho toshlar, Samarqand shisha buyumlari, charm, paxta va oltin kashta tikilgan matolarni etkazib berdi ... , Old Osiyo, Kavkaz Orti…
                        `,
              text11: `Buyuk ipak yo'li nafaqat moddiy boyliklar, balki ma'naviy qadriyatlar uchun ham qo'llanma bo'ldi. Savdogar karvonlari bilan bir qatorda adashgan buddist rohiblar o'z dinlarini avval Hindistondan O'rta Osiyoga (I-III asrlar), u erdan Xitoyga (IV-VI asrlar) va undan keyin Yaponiyaga olib borishdi.
                        `,
              text12: `O'zbekiston hududida ko'plab buddaviy yodgorliklar ochilgan. Dalverzintepa shaharchasi (Termiz shahridan 60 km uzoqlikda) dunyoga mashhur Kushon imperiyasi davridagi yodgorlik, uning yonida buddaviy muqaddas joy xarobalari topilgan, u haykaltaroshlik bilan boyitilgan va milodiy i asrga tegishli.u yerda Qo'shon shahzodasi boshining o'tkir uchli kiyimdagi haykal tasviri ham topilgan. Yaqin atrofda ikkinchi buddistlar majmuasida Budda va bodhisatv haykallari topilgan. Karatepa shaharchasida O'zbekiston-Yaponiya arxeologik ekspeditsiyasi buddaviy monaxlarning uylarini, ulardan biroz uzoqlikda esa yaxshi saqlanib qolgan Stupa bilan buddaviy monastirini qazdi.
                        `,
              text13: `Buyuk ipak yo'li bo'ylab III asrda manixeizm (zardushtiylik va nasroniylikning birlashishi), keyin nestorianizm va nasroniylik va VIII asrdan boshlab Islom tarqaldi. XIV asrda Islom buddizmni Sharqiy Turkistondan (hozirgi Shinjon-Uyg'ur tumani) quvib chiqardi.
                        `,
              text14: `Buyuk ipak yo'li nafaqat bir necha yuz, hatto minglab tuya va otlarning son-sanoqsiz karvonlari (kichik guruhlarda harakat qilish juda xavfli edi), balki juda ko'p sonli "tegishli korxonalar": savdogarlar va ularga xizmat ko'rsatuvchi xodimlar uchun mehmonxonalar funktsiyalarini birlashtirgan karvonsaroylar, shuningdek tovarlar omborlari va yuk tashish uchun xonalar. hayvonlar, em-xashak va oziq-ovqat; quduqlar; bojxona; pul almashtirish punktlari. Uzoq safarga borganlarida, savdogarlar o'zlari bilan katta miqdordagi naqd pul olishdan qo'rqishgan, Shuning uchun X asrdan boshlab, musulmonlar va yahudiylar Ipak yo'lidagi savdoni nazorat qila boshlaganlarida, ular pul almashtiruvchilarga pul berishni boshladilar, buning evaziga fors tilida "chek" oldilar. ishonchli shaxslar joylashgan Ipak yo'li shaharlarida pulga almashtirildi bu o'zgarishlar.
                        `,
              text15: `Buyuk ipak yo'li Atlantika okeanidan tinch okeanigacha bo'lgan yaqin hududlarda yashovchi ko'plab odamlarning, shu jumladan karvonlarni himoya qilish uchun otryadlarni haq evaziga jihozlagan ko'chmanchi xalqlarga, ba'zan o'zlarining omadsiz qarindoshlaridan, shuningdek savdogarlarni hayvonlar va oziq-ovqat bilan ta'minlagan. Karvonlar hududidan o'tgan davlatlar hukmdorlari bojxona to'lovlaridan daromad olishdan manfaatdor edilar, shuning uchun ular savdogarlarni himoya qiladigan maxsus qonunlar qabul qildilar. Masalan, Amir Temur davrida karvon o'g'irlangan erning hukmdori savdogarlar yoki ularning merosxo'rlariga etkazilgan zararni ikki baravar qoplashi va davlat xazinasiga besh baravar ko'p hissa qo'shishi kerak edi.  Shunday qilib, men qo'riqlashim kerak edi.
                        `,
              text16: `Karvonlarning butun yo'li bo'ylab yangi shaharlar va eski boylar o'sdi, shaharlarda hunarmandchilik rivojlandi, san'at, ilm-fan rivojlanib, tobora ko'proq yangi g'oyalar va bilimlar bilan boyitildi. Arxitektura va shaharsozlik rivojlandi, O'rta Osiyoda bunga misol sifatida Samarqanddagi gur-Amir Temuriylar maqbarasi, Shahrisabsdagi AK-Saray saroyi, turli mamlakatlar va madaniyatlarning me'moriy uslublari, shakllari, qurilish texnikasi birlashtirilgan Yassa shahridagi Xo'ja Ahmad Yassaviy masjidini keltirish mumkin. Ularning qurilishida O'rta Osiyo me'morlari bilan birgalikda Ozarbayjon, Armaniston, Gruziya, Hindiston, Iroq, Eron, Suriyadan kelgan ustalar ishtirok etganini aytish kifoya…
                        `,
              text17: `O'sha davrning eng yirik markazlari, o'ziga xos markazlari O'zbekistonning qadimiy shaharlari va erlari - Davan, Samarqand, Buxoro, Xorazm, Termiz... bu erda nafaqat iqtisodiy, balki madaniy hayotning ham diqqat markazida bo'lgan. Bu hayotning zarbasi, ayniqsa, gavjum va ko'p tilli bozorlarda yaqqol namoyon bo'ldi, u erda shahar aholisi va tashrif buyuruvchilar yangiliklarni, tovarlarning narxlarini bilib olishdi, rassomlar, musiqachilar, qo'shiqchilar, hikoyachilarning chiqishlarini tinglashdi, arqonchilar va raqqoslarning san'atiga qoyil qolishdi. Bu erda savdogarlar o'z tovarlarini almashtirishlari mumkin edi, chunki ularning bir nechtasi uzunligi 12 ming km bo'lgan butun yo'lni bosib o'tdi. Buyuk ipak yo'li bo'ylab sayohat qilganlarning deyarli hech biri ushbu transkontinental magistralning ulug'vorligi haqida tasavvurga ega emas edi, ularning har biri faqat o'zlarining ma'lum bir qismini, eng yaxshi holatda, butun yo'lning yarmini bilar edi.
                        `,
              text18: `Evropaliklarning ko'zlarini Evroosiyo qit'asining kattaligiga ochib bergan va Sharqiy mamlakatlarni tasvirlab bergan birinchilardan biri Marko Polo bo'lib, u 13-14 asrlarning boshlarida boshidan oxirigacha butun Ipak yo'lini bosib o'tgan.
                        `,
              text19: `Buyuk ipak yo'li o'z faoliyati davomida bir necha bor gullab-yashnagan va tanazzulga uchragan davrlarni boshdan kechirgan. Yo'ldan ozgan Daryo sifatida u tez-tez asosiy kanallarini o'zgartirib, yo'lning xavfli qismlarini aylanib chiqdi.
                        `,
              text20: `XIII-XIV asrlarda buyuk ipak yo'li o'zining so'nggi parvozini boshdan kechirgan. Chingizxon boshchiligidagi mo'g'ullar 1210-1250 yillarda Xitoydan Eron va rusgacha bo'lgan barcha davlatlar deyarli butun Evroosiyo savdo yo'lini bir yarim asr davomida o'z nazoratiga olishdi. Ammo XIV asrning ikkinchi yarmida Amir Temurning 1370-1380 yillarda barcha Yevroosiyo yo'nalishlarini qayta birlashtirishga urinishiga qaramay, bir yarim ming yillik tarixga ega bo'lgan magistral qulab tushdi, bu esa vaqtinchalik natija berdi.
                        `,
              text21: `XIV-XV asrlarda yaqin Sharq, Janubiy va Janubi-Sharqiy Osiyo qirg'oqlari bo'ylab savdo navigatsiyasining rivojlanishi aybdor edi. O'zingiz uchun hukm qiling: Fors ko'rfazidan Xitoyga dengiz yo'li taxminan 150 kun, Azovdan Pekinga karvon yo'li esa 300 kun davom etdi. Bundan tashqari, bitta kemada ming yuk hayvonidagi kabi ko'p yuklarni tashish mumkin edi.
                        `,
              text22: `Xitoyni Markaziy Osiyo bilan bog'laydigan buyuk ipak yo'lining eng uzoq qismi mavjud edi. Ular o'rtasidagi karvon savdosi faqat XVIII asrda to'xtadi.
                        `
            }
          },
          visa: {
            title: `Viza yordami
                      `,
            text1: `Viza rasmiyatchiliklari
                      `,
            text2: `O'zbekiston Respublikasida vizasiz rejim Qirg'iziston (60 kungacha), Armaniston, Ozarbayjon, Belarus, Gruziya, Qozog'iston, Moldova, Rossiya va Ukraina fuqarolari uchun amal qiladi.
          
                      `,
            text3: `2018 yilda Yaponiya, Koreya Respublikasi, Singapur, Isroil, Tojikiston, Turkiya, Indoneziya, Malayziya va Fransiya fuqarolari uchun 30 kunlik vizasiz rejim o'rnatildi. Vizasiz rejim O'zbekistonga kirgan kundan boshlab 30 kun ichida amal qiladi.
                      `,
            text4: `2019 yilda ushbu ro'yxat yana 46 mamlakat bilan to'ldirildi. Ro'yxatga Avstraliya, Avstriya, Argentina, Andorra, Belgiya, Bolgariya, Braziliya, Bruney-Darussalam, Bosniya va Gersegovina, Buyuk Britaniya, Vatikan, Vengriya, Gretsiya, Germaniya, Daniya, Ispaniya, Irlandiya, Islandiya, Italiya, Kanada, Lyuksemburg, Lixtenshteyn, Latviya, Litva, Monako, Mo'g'uliston, Malta, Niderlandiya, Norvegiya, Yangi Zelandiya, Portugaliya, Polsha, Kipr Respublikasi, Ruminiya, San-Marino, Serbiya, Sloveniya, Slovakiya, Finlyandiya, Xorvatiya, Chili, Chernogoriya, Chexiya, Shveytsariya, Shvetsiya, Estoniya.
          
                      `,
          },
          aboutCompany: {
            title: `Kompaniya`,
            text1: `Туристическое агентство «Ориент Вояж» - ведущий туроператор по въездному туризму в Узбекистан, с головным офисом в Самарканде и представительством в Ташкенте. 
                      `,
            text2: `Kompaniya 1992 yil dekabr oyida tashkil etilgan va mustaqil O'zbekiston turizm bozoridagi birinchi xususiy kompaniyalardan biri bo'lgan. Kompaniyani tashkil etishdan maqsad O'zbekiston va Markaziy Osiyoning boshqa mamlakatlariga kelgan individual va guruhli sayyohlar uchun keng turdagi turistik xizmatlarni taqdim etish edi.
                      `,
            text3: `Ko'p yillar davomida biz sayyohlik xizmatlarini etkazib beruvchilar (mehmonxonalar, restoranlar, muzeylar, temir yo'l va aviakompaniyalar va boshqalar) bilan kuchli hamkorlikni rivojlantirdik , bu bizning mijozlarimizga raqobatbardosh narxlar va yuqori sifatli xizmatlarni taklif qilish imkonini beradi. Sifatli xizmatlarni taqdim etishning muhim omili shundaki, Orient Voyage o'zining yuqori malakali tarjimon qo'llanmalariga ega.
                      `,
            text4: `Hamkorlarimiz ro'yxatiga Yevropa va yaqin Sharq, Avstraliya va Janubi-Sharqiy Osiyodagi yirik sayyohlik kompaniyalari kiradi. Biz ular bilan ko'p yillik hamkorlikdan faxrlanamiz.
                      `,
            text5: `Ko'p yillar davomida kompaniya o'z faoliyatini kengaytirdi va bugungi kunda yaxshi rivojlangan infratuzilmaga ega. Biz mamlakatning asosiy sayyohlik markazlari - Xiva, Buxoro va Samarqandda "Orient Star" mehmonxonalar tarmog'ini, "Orient bas"zamonaviy avtobuslar va mikroavtobuslarning o'z parkini yaratdik.
                      `,
            text6: `Bir necha yil oldin biz Samarqandda qadimiy karvonsaroyni qayta qurdik, u erda endi sayyohlarimiz uchun turli tadbirlar o'tkaziladi: folklor tomoshalari bilan kechalar, an'anaviy choy ziyofatlari, sayyohlarni sharqona shirinliklar va milliy taomlarni tayyorlash retseptlari bilan tanishtirish.
                      `,
            text7: `Orient Voyage turli sayyohlik yarmarkalarining doimiy ishtirokchisi hisoblanadi ITB (Germaniya), Top Resa (France), TTG Incontri (Italiya), ITB Asia (Singapur), WTM (UK), FITUR (Ispaniya).
                      `,
            text8: `Ko'p tillarda so'zlashadigan tajribali va professional jamoamiz har doim sizning xohishingiz va sayohat vaqtini hisobga olgan holda to'g'ri, maqbul sayohat marshrutini tuzishda (ishlab chiqishda) yordam beradi.
                      `,
            text9: `Biz har bir mijozga vizani qo'llab-quvvatlash qoidalaridan tortib, O'zbekiston va Markaziy Osiyoning boshqa mamlakatlari bo'ylab eng xilma-xil va qiziqarli sayohatlarni tashkil etishgacha bo'lgan barcha kerakli ma'lumotlarni taqdim etamiz.
                      `,
            text10: `O'zbekistonga sayohat-bu Turkuaz gumbazlar va ulug'vor manzaralarga boy, urf-odatlar bilan ehtiyotkorlik bilan saqlanadigan va ochiq mehmondo'st xalq bilan tanishishdir.
                      `,
            text11: `O'zbekistonga xush kelibsiz!!!
                      `,
            text12: `"Orient Voyage"Jamoasi
                      `,
          }
        },
        ru: {
          welcome: 'Добро пожаловать',
          language: 'Язык',
          localTime: 'Локальное время',
          contactUs: 'Связаться с нами',
          request: {
            name: 'Initials',
            email: 'Email',
            phone: 'Телефон',
            date: 'Дата',
            rezident: 'Гражданство',
            value: 'Взрослые',
            disc: 'Ваше сообщение',
            send: 'Отправить'
          },
          tourPage: {
            title1: `Маршрут`,
            title2: `Стоимость`,
            title3: `Запрос тура`,
            day: `День`,
          },
          uzbekistan: {
            title: 'Узбекистан',
            country: 'Страна',
            culture: 'Культура',
            cities: 'Города',
            Tashkent: 'Ташкент',
            Samarkand: 'Самарканд',
            Bukhara: 'Бухара',
            Khorezm: 'Хорезм',
            Shakhrisabz: 'Шахрисабз',
            Karakalpakstan: 'Каракалпстан',
            Termez: 'Термез',
            Fergana: 'Фергана',
          },
          tours: {
            title: 'Туры',
            departures: 'Гарантированные вылеты 2023',
            cultural_tours: 'Культурные туры',
            adventure_tours: 'Приключенческие туры',
            combined_tours: 'Комбинированные туры по Средней Азии и Ирану',
            short_tours: 'Короткие туры и продления',
          },
          our_brands: {
            title: 'Наши бренды',
            Orient_bus: 'Автобус Ориент Стар',
            Star_Hotels: 'Отели Ориент Стар',
            cities: 'Города',
          },
          central_asia: {
            title: 'Центральная Азия',
            Kazakhstan: 'Казахстан',
            Kyrgyzstan: 'Кыргызстан',
            Tajikistan: 'Таджикистан',
            Turkmeniston: 'Туркменистан',
            The_history: 'История народов Средней Азии',
            The_Great: 'Великий шелковый путь',
          },
          services: {
            title: 'Услуги',
            visa_formalities: 'Визовые формальности',
            uzbekistan_airways: 'Узбекские авиалинии',
            Uzrailpass: 'Узбекские железные дороги',
          },
          useful: {
            title: 'Полезное',
            Gallery: 'Галерея',
          },
          about_us: {
            title: 'О нас',
            Company: 'Компания',
            Review: 'Обзор',
            Contacts: 'Контакты',
          },
          some: {
            title1_Uzbekistan_country: 'Древняя благословенная земля Узбекистана',
            title1_text1: `На нашей планете есть много стран, интересных для путешествий. Одной из таких стран является Узбекистан.
          <br>
          Наша страна расположена в самом сердце Центральной Азии, между реками Амударья и Сырдарья, и граничит с четырьмя другими среднеазиатскими республиками: Казахстаном - на севере, Туркменистаном - на юго-западе, Кыргызстаном - на востоке, Таджикистан - на юго-востоке. На юге проходит небольшой участок границы (600 км) с Афганистаном.
          <br>
          Нынешние границы Узбекистан обрел в 1924 году, после национально-территориального размежевания, когда вся Средняя Азия вошла в состав СССР. 31 августа 1991 года, после распада Советского Союза, Узбекистан стал независимым государством.
          <br>
          По сравнению с европейскими странами Узбекистан очень большая страна - 447 тысяч квадратных километров. Италия, например, занимает 301 тыс. кв. км. Из европейских стран только Франция (551), Испания (505) и Швеция (450) больше Узбекистана по площади.'`,
          },
          mainPage: {
            popularTours: 'Популярные туры',
            allTours: 'Все туры',
            gallery: 'Галерея',
            review: 'Обзор',
            reviewBig: 'Уважаемая госпожа Мовсесян, привет и наилучшие пожелания от моей жены Нэнси, меня и нашей туристической группы с июля по август 2014 года. Мы пишем по двум причинам. Во-первых, мы хотим...',
            allReview: 'Все отзывы'
          },
          toursMain: {
            tour1: {
              title: 'Гарантированный выезд в Узбекистан: Золотая дорога в Самарканд',
              days: '9 дней'
            },
            tour2: {
              title: 'Гарантированный выезд в Узбекистан: тур по Шелковому пути',
              days: '11 дней'
            },
            tour3: {
              title: 'Гарантированный тур в Туркменистан',
              days: '5 дней'
            },
            tour4: {
              title: 'Узбекистан - жемчужина волшебного Востока',
              days: '10 дней'
            },
            tour5: {
              title: 'Тур в Казахстан и Туркменистан',
              days: '10 дней'
            },
            tour6: {
              title: 'Откройте для себя Узбекистан',
              days: '11 дней'
            },
            tour7: {
              title: 'По следам Александра Македонского: Туркменистан – Узбекистан-Таджикистан',
              days: '16 дней'
            },
            tour8: {
              title: 'Узбекистан – шелк, мозаика и пустыни',
              days: '12 дней'
            },
            tour9: {
              title: 'По следам Тамерлана: Узбекистан - Таджикистан (с 5-дневным трекингом)',
              days: '16 дней'
            }
          },
          uzbekistanPage: {
            uzbekistan: {
              title: 'Древняя благословенная земля Узбекистана',
              discription: {
                span1: {
                  first: `На нашей планете есть много стран, интересных для путешествий. Одной из таких стран является Узбекистан.`,
                  second: "Наша страна расположена в самом сердце Центральной Азии, между реками Амударья и Сырдарья, и граничит с четырьмя другими среднеазиатскими республиками: Казахстаном - на севере, Туркменистаном - на юго-западе, Кыргызстаном - на востоке, Таджикистан - на юго-востоке. На юге проходит небольшой участок границы (600 км) с Афганистаном.",
                  third: "Нынешние границы Узбекистан обрел в 1924 году, после национально-территориального размежевания, когда вся Средняя Азия вошла в состав СССР. 31 августа 1991 года, после распада Советского Союза, Узбекистан стал независимым государством.",
                  // fourth: "По сравнению с европейскими странами Узбекистан очень большая страна - 447 тысяч квадратных километров. Италия, например, занимает 301 тыс. кв. км. Из европейских стран только Франция (551), Испания (505) и Швеция (450) больше Узбекистана по площади."
                },
                span2: `
                Столица Узбекистана  - Ташкент расположен в оазисе реки Чирчик в предгорьях Тянь-Шаня. Город Чач (Шаш), ныне Ташкент, был известен как один из древних городов Великого Шелкового Пути. Сегодня это современный быстрорастущий, ежегодно изменяющийся город. Он является единственным в Средней Азии, где функционирует метрополитен. В городе много старинных памятников, музеев, театров, университетов, дворцов и парков. Ташкент славится своими базарами. Самым крупным и живописным является базар Эски-Жува, расположенный  в старо городской части столицы.
                `,
                span3: {
                  first: 'Узбекистан, как и тысячи лет назад, продолжает занимать выгодное географическое положение на перекрестке путей, связывающих Европу с Восточной и Юго-Восточной Азией. В Ташкенте находится крупнейший в Центральной Азии международный аэропорт. Железнодорожные и автомобильные маршруты связывают Узбекистан с соседними странами. Можно сказать, что это новый уровень возрождения Великого шелкового пути.',
                  second: 'Узбекистан – одна из немногих стран Евразийского континента, где больше всего солнечных дней в году, около 300 дней. Климат Узбекистана резко континентальный. Средняя температура января от +4°С до -8°С, июля - от +22°С до +42°С. Говоря о плодородии почв, следует отметить долины Зерафшана, Амударьи и Сыра. Дарья и житница страны - Ферганская долина. Другое дело, что не вся земля пригодна для жизни. Огромную территорию в центре страны занимает пустыня Кызылкум, к северо-западу от Аральского моря — безводное плато Устюрт, отличающееся суровым климатом; на юго-востоке и востоке - отроги Памира и Тянь-Шаня. Жизнь, как и собраться лет назад, сосредоточена в долинах Амударьи, Сырдарьи и их притоков, где еще в VIII–VII вв. до нашей эры появились первые сообщения образования: Бактрия, Согд (Согдиана), Хорезм.'
                },
                span4: {
                  first: "Как и тысячи лет назад оазисы Узбекистана утопают в садах и полях, где в изобилии растут персики, абрикосы, черешня, множество других фруктов. На искусственно орошаемых полях выращивают разнообразные сорта овощей и злаковых культур. Узбекистан также называют страной «белого золота» - хлопка. Ну, а в пустынных и горных районах страны разведываются и разрабатываются огромные месторождения нефти, газа, полезных испокаемых, в том числе золота."
                },
                span5: {
                  first: 'Узбекистан - единственная страна в Средней Азии, с живыми древними городами Бухара, Самарканд, Хива, Карши, Шахрисабз, Термез, Маргилан, Ташкент... Через все эти города шли маршруты Великого шелкового пути, способствуя их многовековому процветание. Только благодаря своему выгодному географическому положению они не канут в Лету, как их современники Вавилон, Фивы и Персеполь...  ',
                  second: 'Время и многочисленные войны, религиозная нетерпимость и землятрясения не пощадили великолепных дворцов, храмов и городских построек с керамическими водопроводами, уникальных ирригационных сооружений, следы которых повсюду находят археологи. Особенно много их было уничтожено во время арабского VII-VIII вв. и монгольского (XIII в.) нашествий. И тем не менее на территории Узбекистана насчитывается более 1400 историко-архитектурных памятников, многие из них уникальны и занесены в Список всемирного наследия ЮНЕСКО.'
                },
                span6: `
                Конечно же, самым притягательным городом для любого туриста является г. Самарканд (в древности – Мараканда или Мараканд). В этом городе располагается  восьмое чудо света, историческая гордость Самарканда - площадь Регистан, усыпальница династии Тимуридов -  мавзолей Гур-Эмир, мечеть Биби Ханым и, конечно, комплекс мавзолеев Шахи-Зинда, расположенный на склоне Афросиаба. Начало его застройки датируется XII веком, в основном же он сформировался в XIV-XV вв. при Амире Темуре. Город Самарканд носит титул «Жемчужины Востока».
                `,
                span7: `
                А город-музей под открытым небом - Бухара включает цитадель  Арк (время ее строительства относят к III в. до н. э.), комплекс Пойикалон с величественной мечетью Калян (XVI в.), 47-метровым минаретом Калян и медресе Мир-Араб (ныне исламская семинария), мавзолей Исмаила Самани (конец IX в.), а также  торговые купола XV-XVI веков Так-и-Саррафон (купол менял), Так-и-Тельпак-Фурушон (купол продавцов головных уборов) и Так-и-Заргарон (купол ювелиров), которые действуют и поныне.
                `,
                span8: `
                Город Хива носит титул «города-сказки», волшебный мираж  города представлен архитектурным комплексом Ичан-Кала, который  обнесен мощными крепостными стенами с четырьмя воротами. У западных ворот находится самая древняя часть города с остатками замка Акшик-бобо, рядом – задуманный как самый большой в мире, но, увы так и недостроенный минарет Кальта-Минор (короткий), величественное медресе Мухаммад Амин-хана, ханский дворец Таш-хаули, удивительная по красоте мечеть Джума, и конечно самое высокое сооружение Хивы минарет Ислам-Ходжа (56 м.).
                `,
              },
              reference: {
                title: 'СПРАВОЧНАЯ ИНФОРМАЦИЯ',
                ref1: {
                  title: 'Государственное устройство Узбекистана',
                  dusc: 'Государственное устройство Узбекистана – президентская республика, в состав которой входят Каракалпакская Автономная Республика и 12 областей. Законодательная власть – двухпалатный парламент (меджлис). Валюта - сум.'
                },
                ref2: {
                  title: 'Административное деление Узбекистана',
                  dusc: "12 областей: Андижанская, Бухарская, Джизакская, Кашкадарьинская, Навоийская, Наманганская, Самаркандская, Сурхандарьинская, Сырдарьинская, Ташкентская, Ферганская, Хорезмская и Каракалпакская."
                },
                ref3: {
                  title: 'Экономика Узбекистана',
                  dusc: `Узбекистан является аграрно-индустриальной державой. Сельскохозяйственный сектор диверсифицирован. В посевах развит хлопчатник, большие площади заняты посевами кенафа, масличных культур, а также зерновых (рис, пшеница, кукуруза). Хорошо развито плодоовощное, бахчеводство, виноградарство. Основная отрасль животноводства — молочно-мясное скотоводство и каракульское (каракульское) овцеводство.
                  <br>
                  <br>
                  Основные отрасли промышленности: добыча и переработка нефти, химическое и машиностроение.`
                },
                ref4: {
                  title: '<b>Население:</b> Более 29 миллионов человек. (2011)',
                  dusc: ''
                },
                ref5: {
                  title: 'Религия',
                  dusc: 'По официальным данным, мусульмане - 88% (в основном сунниты), православные - 9%. Всего было зарегистрировано 16 религиозных конфессий.'
                },
                ref6: {
                  title: 'Язык',
                  dusc: 'Государственный язык Республики Узбекистан – узбекский.'
                },
                ref7: {
                  title: 'Праздничные дни',
                  dusc: `
                  1 января - Новый год
                  <br>
                  8 марта - Международный женский день
                  <br>
                  21 марта - Навруз
                  <br>
                  May 9- Memorial Day
                  <br>
                  1 сентября - День Независимости
                  <br>
                  1 октября - День учителя
                  <br>
                  8 декабря - День Конституции
                  <br>
                  Первые дни религиозных праздников Руза Фитр и Курбан-Байрам
                  `
                },
                ref8: {
                  title: 'Виза',
                  dusc: 'Для граждан СНГ безвизовый въезд в Узбекистан. Иностранные граждане и лица без гражданства могут въезжать и транзитом через ее территорию только при наличии въездной визы.'
                },
                ref9: {
                  title: 'Таможня',
                  dusc: 'Рекомендуем посетителям ознакомиться с таможенными правилами. <a href="http://www.customs.uz/rus/informaiya_dlya_svedeniya">http://www.customs.uz/rus/informaiya_dlya_svedeniya</a>'
                },
                ref10: {
                  title: 'Паспортная система',
                  dusc: 'Согласно Постановлению Кабинета Министров от 16.04.1999 № 178, временно проживающие в Узбекистане иностранные граждане должны оформить регистрацию по прибытии в место пребывания в течение трех суток, исключая праздничные и выходные дни. При проживании в отеле - регистрацию производит сам отель.'
                },
                ref11: {
                  title: 'Полезная информация',
                  dusc: `Интернет-домен - uz
                  <br>
                  Телефонный код - 998
                  <br>
                  Напряжение сети – 220 V AC, 50 А; стандартное гнездо двойного штепселя
                  <br>
                  Время: GMT + 5:00`
                },
              }
            }
          },
          culturePage: {
            title: 'КУЛЬТУРА – ДУША НАРОДА',
            span1: {
              first: 'Получить представление об истории и культуре страны, можно посетив ее музеи. В Узбекистане сегодня насчитывается более ста музеев. Самое большое их количество находится в Ташкенте. Это, прежде всего, Музей Амира Темура, Музей истории Узбекистана, Государственный музей искусств, Музей прикладного искусства и десятки других. Интересны музеи древних городах Узбекистана Самарканда, Бухары, Хивы, Термеза. Один из самых знаменитых музеев Узбекистана, да, пожалуй, и всей Средней Азии – Музей искусств имени И. Савицкого – находится в столице Республики Каракалпакстан, Нукусе.',
              second: 'Узбекистан известен в мире не только музеями, памятниками зодчества древних городов, именами выдающихся ученых, просветителей и поэтов – аль Хорезми, Ибн Сино (Авиценна), Алишер Навои, Омар Хайям, Улугбек, но и искусными изделиями мастеров прикладного искусства. Во многих музеях мира хранятся удивительной красоты чеканные изделия, ювелирные украшения, оружие, средневековые миниатюры, созданные мастерами нашей древней земли.'
            },
            span2: {
              first: 'В современном Узбекистане очень бережно относятся к традиционным культурным ценностям, при поддержке государства возрождаются и развиваются десятки древних ремесел. Так была возрождена, например, старинная риштанская керамика с голубой лазурью, пользовавшаяся необычайно высоким спросом на всем протяжении Великого шелкового пути. В XX веке она чуть было не исчезла совсем, не выдержав конкуренции с дешевой фабричной посудой, так же как и другие центры керамики в Самарканде, Бухаре, Хиве, Гиждуване, тоже ныне возрожденные.',
              second: 'Сегодня красочные восточные базары больших и малых городов Узбекистана полны гончарных изделий ручной работы – это и всевозможные виды посуды, и изделия мелкой пластики, и игрушки, причем у каждого региона свой неповторимый почерк. ',
            },
            span3: {
              first: 'Здесь же резчики по дереву предлагают покрытые искуснейшей резьбой шкатулки, пеналы, столики и стулья, ширмы, оконные решетки, люстры и плафоны, двери и колонны, удивительные лаухи – раскладывающиеся в несколько уровней подставки для книг, выполненнные из цельного куска дерева без единого крепления. Художники-миниатюристы выставляют разных размеров и форм шкатулки из дерева и папье-маше, покрытые изысканной орнаментальной росписью и миниатюрой. Ковроделы – свои удивительной красоты изделия, продолжая традиции своих предков, прославивших во всем мире бухарские и хивинский ковры. Ювелиры предлагают десятки, а то и сотни видов украшений. И как знать, может быть такие же ювелирные украшения, какие сегодня можно увидеть, например, под торговым куполом Так-и-Заргарон в Бухаре, носили бухарские женщины тысячу лет назад…'
            },
            span4: {
              first: 'Во все века ремесленники междуречья Амударьи и Сырдарьи, Ферганской долины славились мастерством обработки металла. Да и как иначе, ведь в здешних горах с незапамятных времен добывалось золото, серебро, медь, железо,олово. По свидетельству арабского историка X века Ибн-Хаукаля «железное оружие из Ферганы было во всеобщем употреблении от Хорасана до Багдада». Некоторые исследователи утверждают, что родиной дамасской стали была Фергана. Просто европейцы с ней познакомились в Дамаске, куда она попала из Средней Азии по Великому шелковому пути.',
              second: "Арабский географ и путешественник X в. Ал-Мукаддаси, рассказывая о товарах, вывозимых из государства Саманидов, упоминает драгоценные серебряные сосуды и медные лампы из Бухары, украшенные затейливой резьбой и арабскими надписями.. Современные чеканщики по металлу изготавливают изделия, ничуть не уступающие по красоте исполнения ни саманидским, ни темуридским, а ведь это были периоды небывалого расцвета культуры и искусств."
            },
            span5: {
              first: 'В последние годы огромной популярностью во многих странах пользуются узбекские абровые ткани. altУзор «абр» – «облако» –  один из самых древних и любимых в Узбекистане. Секрет его изготовления заключается в том, что окрашивается не готовая ткань, а нити. Мотки нитей из шелка, шерсти, хлопка, прежде чем погрузить в красящий раствор, особым способом перевязывают. В результате получается переливающийся яркими радужными красками шелковый хан-атлас, полушелковый адрас, ткань шойи. По традиционным технологиям изготавливается и нарядный полосатый бекасам.',
              second: 'Мотки нитей из шелка, шерсти, хлопка, прежде чем погрузить в красящий раствор, особым способом перевязывают. В результате получается переливающийся яркими радужными красками шелковый хан-атлас, полушелковый адрас, ткань шойи. По традиционным технологиям изготавливается и нарядный полосатый бекасам.'
            },
            span6: {
              first: 'В Узбекистане существуют еще десятки ремесел: вышивка, знаменитое бухарское золотое шитье, роспись по коже, тыкве, резьба по ганчу и по камню, изготовление кукол и музыкальных инструментов, сундуков и детских люлек - бешик… Со всеми ремеслами можно познакомиться прямо в мастерских, расположенных на базарах, в старинных медресе, на улицах древних городов.'
            },
            span6: {
              first: 'Однако самое яркое представление об Узбекистане можно получить во время праздников и народных гуляний, например, во время празднования Навруза, когда на улицы и площади больших и малых городов выходят многочисленные фольклорные коллективы в национальных костюмах, причем костюмы каждого региона могут очень сильно отличаться друг от друга. Во время таких праздников повсюду слышна национальная музыка и песни, можно увидеть зажигательные танцы, народные игры, состязания певцов и богатырей-палванов, петушиные и бараньи бои, выступления канатоходцев и кукловодов и, конечно, театрализованные представления на легендарные сюжеты, на бытовые темы, рассказывающие о национальных традициях и обрядах. Наверное поэтому в Узбекистане так любят театральное искусство, театры есть в каждом городе. Всего в стране 35 профессиональных театров - драматических, музыкальных, кукольных, оперных (в Ташкенте и Самарканде) и множество любительских.'
            }
          },
          orientBus: {
            title: 'Orient Bus',
            discription: {
              span1: `"Orient Bus" является дочерним предприятием нашей компании и с 1999 года успешно занимается пассажирскими перевозками по всему Узбекистану. За это время компания зарекомендовала себя как надежный и ответственный партнер на рынке транспортных услуг. Безопасность наших услуг и качество обслуживания  высоко оценено клиентами.`,
              span2: `Более чем 13-летняя успешная  история компании, лидирующие позиции на рынке транспортных услуг, рост числа наших постоянных клиентов являются лучшими аргументами в пользу выбора "Orient Bus".`,
              span3: `Постоянно совершенствуясь мы предлагаем своим клиентам транспортные услуги на самом высоком уровне.`,
              span4: `Наши клиенты - наша гордость!`,
              auto: {
                auto1: {
                  value: 'Кол-во: 3',
                  place: '45 мест',
                  tv: 'ТВ +',
                  cd: 'CD-плейер +',
                  micro: 'Микрофон +',
                  cold: 'Холодильник +',
                  cond: 'Кондиционер +',
                  toilet: 'Туалет +',
                  bagage: 'Багажник: 10 m3',
                },
                auto2: {
                  value: 'Кол-во: 7',
                  place: '45 мест',
                  tv: 'ТВ +',
                  radio: '',
                  cd: 'CD-плейер +',
                  micro: 'Микрофон +',
                  cold: 'Холодильник +',
                  cond: 'Кондиционер +',
                  toilet: 'Туалет +',
                  bagage: 'Багажник: 9 m3',
                },
                auto3: {
                  value: 'Кол-во: 3',
                  place: '30 мест',
                  tv: 'ТВ +',
                  radio: '',
                  cd: 'CD-плейер +',
                  micro: 'Микрофон +',
                  cold: 'Холодильник +',
                  cond: 'Кондиционер +',
                  toilet: '',
                  bagage: 'Багажник: 3,3 m3',
                },
                auto4: {
                  value: 'Кол-во: 2',
                  place: '6 мест',
                  tv: 'ТВ +',
                  radio: 'Радио +',
                  cd: 'CD-плейер +',
                  cold: 'Холодильник +',
                  micro: 'Микрофон +',
                  cond: 'Кондиционер +',
                  toilet: '',
                  bagage: 'Багажник: 0.4 m3',
                },
                auto5: {
                  value: 'Кол-во: 8',
                  place: '3 мест',
                  cd: 'CD-плейер +',
                  radio: 'Радио +',
                  cond: 'Кондиционер +',
                  tv: '',
                  cold: '',
                  micro: '',
                  toilet: '',
                  bagage: 'Багажник: 0.4 m3',
                },
                auto6: {
                  value: 'Кол-во: 2',
                  place: '6 мест',
                  radio: 'Радио +',
                  cd: 'CD-плейер +',
                  cond: 'Кондиционер +',
                  tv: '',
                  cold: '',
                  micro: '',
                  toilet: '',
                  bagage: 'Багажник: 0.4 m3',
                },
                auto7: {
                  value: 'Кол-во: 8',
                  place: '3 мест',
                  cd: 'CD-плейер +',
                  radio: 'Радио +',
                  cond: 'Кондиционер +',
                  tv: '',
                  cold: '',
                  micro: '',
                  toilet: '',
                  bagage: 'Багажник: 0.3 m3',
                },
                auto8: {
                  value: 'Кол-во: 8',
                  place: '3 мест',
                  cd: 'CD-плейер +',
                  radio: 'Радио +',
                  cond: 'Кондиционер +',
                  tv: '',
                  cold: '',
                  micro: '',
                  toilet: '',
                  bagage: 'Багажник: 0.3 m3',
                },
              }
            }
          },
          orientStarHotels: {
            title: 'Orient Star Hotels',
            item1: 'Ориент Стар Самарканд',
            item2: 'Orient Star Khiva',
            item3: 'Orient Star Varaxsha',
          },
          centralAsia: {
            kirgiz: {
              title: 'Кыргызстан',
              span1: `Бриллиант в азиатской короне древних империй, Киргизия пока мало изучена туристами. И совершенно напрасно — по обилию природных и исторических достопримечательностей, возможностям для пляжного отдыха, лечения и горнолыжного спорта эта страна поистине не имеет себе равных. На территории Киргизии находятся «небесные горы» Тянь-Шань и простираются хребты Памира, здесь таит богатства Чингисхана чистейшее высокогорное озеро Иссык-Куль, растут реликтовые ореховые леса и бьют горячие серные ключи. Впрочем, и для праздношатающегося «смотрителя» Киргизия приготовила массу сюрпризов: колоритные юрты и войлочные ковры, кумыс и ошский плов, традиционные конные состязания, песнопения, сказки и легенды. Словом, Азия во всей красе — вот что такое Киргизия!
              `,
              span2: `Государство расположено на востоке Средней Азии, главным образом в пределах западной и центральной части Тянь-Шаня и северной части Памира. Граничит на севере с Казахстаном, на западе — с Узбекистаном, на юго-западе — с Таджикистаном, на юго-востоке и востоке — с Китаем.
              `,
              span3: `По национально-государственному размежеванию советских республик Средней Азии 14 октября 1924 была образована Кара-Киргизская АО (с 25 мая 1925 переименована в Киргизскую АО) — автономная область в составе РСФСР, которая 1 февраля 1926 года была преобразована в Киргизскую АССР, а 5 декабря 1936 — в Киргизскую ССР.  Во время распада СССР, 31 августа 1991 года в ходе распада СССР провозглашена независимость Киргизии.`,
              span4: `Столица Киргизии, Бишкек, является крупнейшим городом страны. Составляет особую административную единицу и является городом республиканского подчинения. Старые названия — Пишпек, Фрунзе. Население — 860700 жителей (2012). В отличие от южных районов республики, высокий процент населения составляют русские и русскоязычные жители. Город расположен на севере Киргизии, в Чуйской долине, у предгорьев Тянь-Шаня, в 40 км севернее Киргизского хребта на высоте 700—900 м над уровнем моря, в 25 км от границы с Казахстаном. Город Бишкек является региональным центром торговли. В Бишкеке функционирует крупнейший в Средней Азии вещевой рынок: «Дордой», крупнейший авто-рынок: «Азамат».`,
              span5: `В 23 км от городской черты Бишкека, находится международный аэропорт «Манас». Согласно классификации ИКАО, Манас — аэропорт класса 4Е. Его взлётно-посадочная полоса длиной 4,2 км позволяет принимать самолеты всех типов, в том числе и в сложных метеоусловиях. Аэропорт располагает 38 стоянками и двумя телескопическими трапами.`,
              span6: `В Киргизии резко континентальный с переходом к континентальному климат. Количество осадков сравнительно небольшое; в году около 250 солнечных дней. На равнинах и в низинах средняя температура января -4 -6°C, июля -  +18 +24°C. В высокогорьях и зимой, и летом более прохладно из-за постоянно дующих ветров из Сибири: -14 -20°C в январе и +8 +12°C в июле. В Ферганской долине в летней период столбик термометра, как правило, поднимается выше +35°C. Наиболее благоприятное время для посещения Киргизии — сентябрь, когда на всей территории страны царит приятное осеннее тепло. На высокогорные пастбища «джайлоо» можно отправляться с середины мая по начало октября, пешие и конные туры комфортно проводить с марта по ноябрь на юге и с апреля по октябрь на севере. Треккинг и восхождения доступны на протяжении всего года, при этом высокогорные восхождения лучше совершать с конца июня до октября.`,
              span7: `Уникальные природные достопримечательности и древние города Великого шёлкового пути — вот два козыря Киргизии в деле привлечения туристов. На территории государства пролегают хребты Тянь-Шаня и Памира, здесь находится одно из крупнейших и самых глубоких озёр планеты — воспетый поэтами Востока Иссык-Куль, реликтовые ореховые леса высокогорного оазиса Арсланбоб, ущелье Джеты Огуз и родоново-сероводородные термальные источники, легендарные озёра Сон-Куль и Сары-Челек, гигантский ледник Иныльчек и многие другие чудеса природы. Любители гор совершают восхождения на пики Ленина, Победы и Хан-Тенгри, поклонники трекинга исследуют Туркестанский хребет и озёра Западного Тянь-шаня, ну а горнолыжники ждут — не дождутся открытия сезона, чтобы первыми взрезать снег на склонах Кашка-Суу, Норуса и Тоо Ашуу. Кстати, горнолыжная Киргизия предлагает богатые возможности для хелиски и парапланеризма.`,
              span8: `Достопримечательности Бишкека: древний и колоритный базар Ош, площадь Ала-Тоо, памятник Независимости и здание Парламента, Музей национальной истории и Музей искусств, историческая дубрава и галерея «Эркиндик». В окрестностях города стоит посетить природный парк «Байтыкская долина» и взойти на гору Боз-Пельдек, с которой открывается прекрасный вид на Бишкек. У южного склона горы расположено кладбище «Ханские могилы», где похоронен легендарный правитель долины. Обратите внимание на кованую башню с великолепным куполом. Увидеть редкие растения можно в ботаническом заказнике Чон-Арык, а поправить здоровье — на месторождении торфяных грязей в селе Камышановка.`,
              span9: `Город Ош расположен в предгорном оазисе, который издавна был населён людьми ещё задолго до прихода туда народа кыргызов с Енисея (примерно 800 лет назад). Поселение земледельцев эпохи бронзы было обнаружено на южном склоне горы Сулайман-Тоо. Ош являлся одним из старейших селений Киргизии, ныне официально предложено считать, что история города насчитывает около 3 тысяч лет, однако в исторической науке принято вести отсчёт возраста городов от самого раннего упоминания в исторических актах; самое раннее упоминание города в летописях относится к IX веку н. э., что всё равно позволяет считать его старейшим городом страны. В X веке Ош считался третьим по величине городом Ферганы, являясь точкой пересечения караванных путей из Индии и Китая в Европу (см. Великий шёлковый путь). В Оше находятся замечательные памятники исламской архитектуры ферганского стиля: медресе Алымбека Параванчи и Мухамедбой Тюрка халь Муратбаева, мечети Садыкбая и Шахид-Тепа. Стоит посетить русскую православную Михайло-Архангельскую церковь (нач. 20 в). Среди исторических достопримечательностей — старинное кладбище, комплекс средневековых бань, древние петроглифы. Кроме этого, Ош — это «ворота в горы»: отсюда можно совершить восхождение на Памир и Тянь-Шань, увидеть пещеры Чиль-Устун и Чиль-Майрам, а также уникальный карстовый источник-водопад Абшир-сай. Аэропорт «Ош» активно работает, принимая и отправляя местные и международные рейсы.`,
              span10: `Озеро Иссык-Куль — второе в мире по величине и, пожалуй, первое по удивительного цвета воде — насыщенно синей, почти ультрамариновой. Вода Иссык-Куля исключительно прозрачная и слегка солёная на вкус, так как в него впадает около 80 рек, и ни одной не вытекает. В окрестностях озера бьют горячие источники и имеются месторождения лечебных грязей.`,
              span11: `Пожить кочевой жизнью настоящего киргиза можно, отправившись на высокогорные пастбища «джайлоо» — здоровый сон под пологом юрты, чашка кумыса с утра и весь день на свежем воздухе — вот залог здоровья по-азиатски.`,
              spravka: {
                span1: {
                  title: `СПРАВОЧНАЯ ИНФОРМАЦИЯ`,
                  text: `Государственное устройство Кыргызстана – суверенная, унитарная, демократическая республика, построенная на началах правового, светского государства, в которую входят 7 областей и 2 города республиканского значения. Парламент Республики — Жогорку Кенеш имеет приоритет решения и определения самых важных решений и политики государства, является однопалатным, и состоит из 120 депутатов, избираемых сроком на пять лет по партийным спискам. Денежная единица – киргизский сом.`
                },
                span2: {
                  title: `Административное деление Кыргызстана`,
                  text: {
                    text1: `В состав Киргизии входят 7 областей и 2 города республиканского значения:`,
                    text2: `Баткенская область`,
                    text3: `Чуйская область`,
                    text4: `Джалал-Абадская область`,
                    text5: `Нарынская область`,
                    text6: `Ошская область`,
                    text7: `Таласская область`,
                    text8: `Иссык-Кульская область`,
                    text9: `города Бишкек и Ош`
                  }
                },
                span3: {
                  title: `Экономика Узбекистана`,
                  text: {
                    text1: `Экономика Киргизии состоит преимущественно из промышленности и сельского хозяйства, причём в сельском хозяйстве занято свыше половины трудоспособного населения. Около полумиллиона жителей Киргизии выезжают на заработки заграницу. В 2011 году объем денежных переводов мигрантов составил 29% ВВП страны.`,
                    text2: `Промышленность представлена энергетикой и добывающей отраслью. Значительная часть продуктов сельского хозяйства идёт на экспорт. Немаловажную статью доходов Киргизии составляет туризм. Киргизский бюджет также получает 63 млн. $ от США в качестве аренды базы Манас`
                  }
                },
                span4: {
                  title: `Население:`,
                  text: `Свыше 5,5 млн чел. (2013 г.)`
                },
                span5: {
                  title: `Религия`,
                  text: `Мусульмане 75%, Русские Православные 20%, другие 5%`
                },
                span6: {
                  title: `Язык`,
                  text: `Государственным языком Кыргызской Республики является киргизский язык.`
                },
                span7: {
                  title: `Государственные праздники`,
                  text: {
                    text1: `1 января — Новый год`,
                    text2: `7 января — Рождество`,
                    text3: `23 февраля — День защитника Отечества`,
                    text4: `8 марта — Международный женский день`,
                    text5: `21 марта — Нооруз`,
                    text6: `1 мая — Праздник весны и труда`,
                    text7: `5 мая — День Конституции Киргизии`,
                    text8: `9 мая — День Победы`,
                    text9: `7 июня — День финансовых и экономических работников`,
                    text10: `31 августа — День независимости`,
                    text11: `7 ноября — День Великой Октябрьской социалистической революции`,
                    text12: `Орозо-айт и Курман-айт определяются по лунному календарю.`,
                  }
                },
                span8: {
                  title: `Виза`,
                  text1: `В рамках Закона КР №121 от 21.07.2012 года, для граждан нижеследующих стран действует безвизовый режим въезда в Кыргызскую Республику сроком до 60 дней: Австралия, Австрийская Республика, Королевство Бахрейн, Королевство Бельгия, Босния и Герцеговина, Государство Бруней-Даруссалам, Ватикан, Соединенное Королевство Великобритании и Северной Ирландии, Венгерская Республика, Федеративная Республика Германия, Греческая Республика, Королевство Дания, Ирландия, Республика Исландия, Королевство Испания, Итальянская Республика, Канада, Государство Катар, Республика Корея, Государство Кувейт, Латвийская Республика, Литовская Республика, Княжество Лихтенштейн, Великое Герцогство Люксембург, Республика Мальта, Княжество Монако, Королевство Нидерланды, Королевство Норвегия, Новая Зеландия, Объединенные Арабские Эмираты, Республика Польша, Португальская Республика, Королевство Саудовская Аравия, Республика Сингапур, Словацкая Республика, Республика Словения, Соединенные Штаты Америки, Финляндская Республика, Французская Республика, Республика Хорватия, Чешская Республика, Швейцарская Конфедерация, Королевство Швеция, Эстонская Республика.`,
                  text2: `В соответствии с Постановлениями Правительства КР №735 от 31.12.1999 г. и №262 от 04.06.2001г. для граждан Японии действует безвизовый режим въезда в Кыргызскую Республику в одностороннем порядке на неограниченный срок.`
                },
                span9: {
                  title: `Таможня`,
                  text: {
                    text1: `Ограничений на ввоз и вывоз национальной и иностранной валюты нет (все деньги и драгоценности в обязательном порядке декларируются). Декларация должна быть сохранена до отъезда из страны.`,
                    text2: `В Киргизию можно беспошлинно провезти до 1000 сигарет или до 1000 г табачных изделий, до 1,5 л крепких алкогольных напитков и до 2 л вина. Вы сможете ввезти разумное количество парфюмерии для личного использования, а также других товаров на сумму не более $5000. Таможенный досмотр бывает иногда длительным и детальным.`,
                    text3: `В Киргизию запрещен ввоз наркотиков и сильнодействующих медикаментов (без рецепта, подтверждающего необходимость их применения), оружия и боеприпасов, горючих и взрывчатых веществ, печатной продукции и видеоматериалов, направленный против государственного строя Киргизии, а также животных, плодов и овощей без соответствующего разрешения Санитарно-ветеринарной службы страны.`,
                    text4: `Запрещен вывоз некоторых продуктов питания, минералов и горных пород без разрешения соответствующих инстанций, золота (декларируется) и драгоценных камней.`
                  }
                },
                span10: {
                  title: `Паспортный режим`,
                  text: `Все иностранцы, посетившие страну, независимо от цели прибытия обязаны в течение 24 часов заявить о своем приезде в органы МВД КР и получить так называемый временный регистрационный талон. Без его наличия физические лица подвергаются денежному штрафу вплоть до заключения в СИЗО за нарушение паспортного режима.`,
                },
                span11: {
                  title: `Полезная информация`,
                  text: {
                    text1: `Интернет-домен – kg`,
                    text2: `Телефонный код – +996`,
                    text3: `Напряжение сети – 220 V AC, 50 А; стандартное гнездо двойного штепселя`,
                    text4: `Время: по Гринвичу +6 часов`,

                  }
                }
              }
            },
            tadjik: {
              title: `Таджикистан`,
              disc: {
                span1: `Таджикистан представляет собой уникальную туристскую достопримечательность современности, поскольку обладает великим культурно-историческим наследием, самобытной культурой, выгодным географическим расположением, многообразием природных ландшафтов, рекреационных зон, флорой и фауной.`,
                span2: `Таджикистан - это горная страна с абсолютными высотами от 300 до 7495 метров над уровнем моря. 93% территории страны составляют горные хребты, относящиеся к Памирской, Гиссаро-Алайской и Тянь-шаньской горным системам. Указанные хребты разделены богатыми и плодородными землями Ферганской, Зерафшанской, Вахшской и Гиссарской долинами. Сложность рельефа и большая амплитуда высот горных систем обуславливает исключительное разнообразие растительного и животного мира.`,
                span3: `Таджикистан - край высочайших вершин, мощных ледников, стремительных бурных рек, неповторимых по своей красоте озёр, уникальной растительности и редких животных. Именно горный, поэтажный ландшафт определяет своеобразие и неповторимость природы Таджикистана, богатство её форм, вызванных к жизни разнообразием климатических зон. В республике за полтора часа полёта из знойной жары Вахшской долины можно попасть в арктический холод вечных снегов Памира.`,
                span4: `Таджикским морем называют Кайраккумское водохранилище, расположенное восточнее Худжанда, образованное в результате строительства на реке Сырдарьи гидроэлектростанции, которое стало прекрасным местом отдыха туристов. На его берегах появились санатории, дома отдыха, кемпинги, расположенные в великолепных фруктовых садах.`,
                span5: `На базе 13 существующих государственных природных заказников и заповедников «Зоркул», «Ромит», «Мозкул», «Дашти Джум», а также Таджикского национального парка сохранены в первозданном виде уникальная экология, ландшафты и природные памятники. Сохранены также редкие исчезающие виды растений и животных занесенные в Красную книгу, в числе которых винторогий козел (морхур), горный архар (Марко Поло), бухарский горный баран (уреал), пятнистый бухарский олень, снежный барс,`,
                span6: ` Тянь-шаньский бурый медведь, полосатая гиена, индийский горный гусь. На территории республики обитает 84 вида млекопитающих, свыше 365 видов птиц, 49 видов рептилий, около 52 видов рыб и более 10000 видов насекомых. Флора Таджикистана насчитывает свыше 5000 тысяч видов высших растений, среди которых немало эндемиков. Территория Таджикского национального парка составляет 2,6 миллиона гектар, которая охватывает 18 процентов территории страны и 60 процентов Горно-Бадахшанской автономной области республики. За последние годы Дирекцией Национального парка активно реализуются меры по развитию инфраструктуры экологического туризма и улучшению экологической обстановки в высокогорных районах Памира.`,
                span7: `В республике функционирует 125 объектов туристской и санаторно-курортной направленности, в том числе 51 гостиница, 9 санаториев, оставшиеся составляют дома и зоны отдыха, туристские базы, оздоровительные лагеря. Большинство гостиниц размещено в г. Душанбе, Худжанде, Курган-Тюбе, Кулябе, и Хороге.`,
                span8: `Таджикистан располагает 3 международными аэропортами в г. Душанбе, Худжанде и Кулябе. Территорию республики с запада на восток пересекают 3 ветви железных дорог, которые связывают центральную, северную и южную регионы республики через территории сопредельных государств Туркменистана и Узбекистана.`,
                span9: `Природно-рекреационные ресурсы республики, наличие памятников истории и культуры предопределяют особенности сформированного национального туристского продукта, продвижение и реализация которого на мировых рынках туристских услуг, обеспечивает поток иностранных туристов в Таджикистан. В этом плане приоритетными видами международного туризма в стране рассматриваются:`,
                span10: {
                  text1: `- альпинизм, горно-спортивный и экологический туризм;`,
                  text2: `- рафтинг, пара планеризм, горнолыжный спорт;`,
                  text3: `- интерохота;`,
                  text4: `- историко-познавательный и этнографический туризм;`,
                  text5: `- санаторно-курортное лечение и отдых.`,
                },
                span11: `На территории Таджикистана находится величественный Памир - одно из знаменитых нагорий земного шара с абсолютными высотами от 2800 до 7495 м. над уровнем моря, известный во всем мире как «крыша мира». Здесь туристскими ресурсами являются альпинистские маршруты на высочайшие горные пики - Исмоили Сомони и Евгении Корженевской, расположенные на высоте более 7000 тысяч метров, охотничьи хозяйства, природные ландшафты, пещеры и минеральные источники термальных и холодных, углекислых и кремнекислых вод. Ежегодно в Таджикистане, проводятся Международные альпинистские экспедиции, в ходе которых альпинисты из разных стран мира совершают восхождения на высочайшие горные вершины страны. Покорить пик Исмоила Сомони (7.495 метров) - высотный полюс Памира - стремятся альпинисты со всех континентов. Уникальный рельеф данного региона благоприятствует развитию туристских походов и треккингов различной категории сложности, занятию специальными видами спорта, такими как скалолазание, альпинизм, горнолыжный спорт, горный туризм в сочетании с охотой и фото охотой, рафтингом, парапланеризмом, сноубордингом, спелеотуризмом и другими видами экстремального туризма.`,
                span12: `Таджикистан является наиболее богатой страной по запасам пресных водных ресурсов. Практически половина водных ресурсов стран центральноазиатского региона формируются в высокогорных реках, озерах и ледниках страны. Республика Таджикистан по запасам гидроэнергоресурсов занимает восьмое место в мире. Особенно Горно-Бадахшанская автономная область республики очень богата озерами, имеющими самое различное происхождение. Наиболее крупными из них являются Каракул, Зоркул, Рангкул, Шоркул, Булункул, а также озеро Сарез, которое образовалось в результате землетрясения в 1911 году. В целом в Памирском регионе в интервале высот от 3200 до 5000 метров, сосредоточены 1450 озер и 220 рек, или же 83 % общей площади зеркала озер по Таджикистану. Самым большим озером Памира является соленое уникальное озеро Каракул, расположенное на высоте 3914 метров над уровнем моря. Его наибольшая глубина -236 метров. Считается, что оно образовалось в ледниковый период и дно озера, а также некоторые его берега на многие километры покрыты вечной мерзлотой.`,
                span13: `На территории Таджикистана функционируют около 200 источников минеральных и термальных вод, на базе которых развивается санаторно-куротное направление туризма. Наиболее известные из них курорт «Ходжа Оби Гарм», санатории «Шаамбары», «Оби гарм», «Зумрад», «Хаватаг». В санаториях и курортах Таджикистана предоставляются услуги по лечению болезней сердечно-сосудистой системы, органов дыхания, костно-мышечной системы, мочевыводящей системы, гинекологических заболеваний, желудочно-кишечного тракта, печени и желчевыводящих путей, а также кожных заболеваний. На горячих углекислых источниках санаториев «Гармчашма», «Башор» и «Шахдара» образуются травертины - известковые отложения натечной формы. Особенно красивы они на источнике Гармчашма, расположенном в 35 км от г.Хорога. Источник Гармчашма находится на высоте 2325м над уровнем моря и заметен издалека благодаря исключительной белизне травертинов. Травертины представляют длинный вал, ажурными уступами спускающийся к реке. По склонам его свешиваются как бы сросшиеся сталактиты, производящие впечатление застывших каскадов и каменных чаш. На уступах образуются естественные ванны с водой различной температуры (до 62*С).`,
                span14: `Рукотворным уникальным памятником природы на Памире является Памирский ботанический сад, расположенный на высоте 2320м над уровнем моря в близи г.Хорога. Этот сад на фоне бесплодных склонов является настоящим зеленым чудом, в котором собрано свыше 20 тысяч растений со всех континентов. Среди них такие редкие и диковинные экземпляры растений, как амурский бархат, пробковое дерево, черная австрийская сосна и уникальная коллекция роз с чистейшими тонами и несравненным ароматом.`,
                span15: `Особенно популярны среди туристов и альпинистов Фанские горы, которые расположены между Зерафшанским и Гиссарскими хребтами от Кштутдарьи до Фандарьи. Сегодня Фанские горы, наиболее доступные из высоких гор страны для туристов. В каменной чаще этих гор разместилось зеркало голубовато-зеленой воды - озера Искандеркуль, самого большого озера Фанских гор, расположенного в северном Таджикистане. Широко раскинулось оно на высоте 2200 метров. Здесь туристы могут наблюдать мерцание звезд и тумана поднимающегося с поверхности озера. На берегу озера в 160 км от Душанбе расположена турбаза «Искандеркуль». Путь этот туристы совершают на автомашинах по удивительным ущельям Фандарьи, Ягноба и Искандердарьи. Горы вокруг кажутся многоцветными, так как в них преобладают синеватые, красные и сиреневые тона. Ущелье Искандардарьи иногда называют ущельями цветных скал, а силы ветров превратили их в причудливые крепостные стены и замки.`,
                span16: `Много интересного ожидает любителей путешествий и на юге Таджикистана. Один из древнейших городов Центральной Азии город Куляб в 2006 году отметил свой юбилей 2700-летие, который стал знаменательным событием для страны. В лессовых толщах вблизи Бальджуванского района таджикские археологи раскопали каменные орудия, древнейшие из найденных в Центральной Азии, - их возраст 850 тысяч лет. Здесь также открыты уникальные стоянки неандертальцев в Дангаринском районе у пещеры Огизкичик с очагами, около которых обнаружено 15 тысяч обуглившихся панцирей черепах.`,
                span17: `Большой интерес представляют для иностранных туристов достопримечательности красивых окрестностей древнего Хуталя ныне города Куляба. Особенно привлекательна гора Ходжа Мумин, уникальный природный памятник, который сплошь состоит из чистой соли разных цветов, палевых и серых, голубовато зелённых и розовых. Запасы соли этой горы могут обеспечить все человечество на многие сотни лет. Еще одно чудо Ходжа Мумина - его пещеры, которые славятся своей музыкальностью. Оказывается, чудесные звуки порождает ветер, перебирающий, словно клавиши, длинные и тонкие стеклянные сосульки-сталактиты, висящие у входа в пещеры. Уникальным памятником истории и архитектуры является мавзолей выдающегося мыслителя и религиозного деятеля IV века Мир Саида Али Хамадони в городе Кулябе, куда совершают религиозное паломничество многие последователи почитающие его суфистское учение.`,
                span2: `Климат субтропический со значительными суточными и сезонными колебаниями температуры воздуха, малым количеством осадков, сухостью воздуха и малой облачностью. Средняя температура января колеблется от +2…?2°C в долинах и предгорьях юго-запада и севера республики до ?20 °C и опускается ниже на Памире. Абсолютный минимум температуры достигает ?63°C на Памире (Булункуль). Средняя температура июля от 30°C в пониженных долинах юго-запада до 0°C и ниже на Памире. Абсолютный максимум температуры составляет 48 °C (Нижний Пяндж). В редких случаях температура доходит до 60°C.`,
              },
              disc2: {
                title: `СПРАВОЧНАЯ ИНФОРМАЦИЯ`,
                text: {
                  text1: {
                    title: `Государственное устройство Таджикистана`,
                    disc: `Государственное устройство Таджикистана –  президентская республика. Законодательную власть осуществляет парламент — Маджлиси Оли. Денежная единица – сомони.`
                  },
                  text2: {
                    title: `Административное деление Таджикистана`,
                    disc: `Согласно закону Республики Таджикистан от 4 ноября 1995 года № 101 «О порядке решения вопросов административно-территориального устройства Республики Таджикистан» госурадрство состоит из города Душанбе, который имеет статус отдельной административно-территориальной единицы первого порядка, Горно-Бадахшанской автономной области, Согдийской и Хатлонской областей, и группы из тринадцати районов республиканского подчинения.`
                  },
                  text3: {
                    title: `Экономика Таджикистана`,
                    disc1: `Таджикистан — индустриально-аграрное государство, который немалый туристический и экономический потенциал. Длительная война, связанные с ней разрушения и людские потери привели к резкому спаду в экономике. Но за последние мирные годы экономика и уровень жизни значительно поднялись. Экспорт алюминия обеспечивает половину экспортных поступлений. На втором месте — экспорт хлопка.`,
                    disc2: `Страна обладает значительным потенциалом области гидроэнергетики. Общий объём гидроэнергоресурсов оценивается в 527 млрд. Это делает государство одним из самых обеспеченных этим возобновимым источником энергии в мире (восьмое место по абсолютному потенциалу выработки).`
                  },
                  text4: {
                    title: `Население:`,
                    disc: `Свыше 8 млн чел. (2014 г.)`
                  },
                  text5: {
                    title: `Религия`,
                    disc: `Подавляющее большинство населения Таджикистана (95-99%) составляют сунниты ханафитского мазхаба (которому с 2 апреля 2009 года придан официальный статус).`
                  },
                  text6: {
                    title: `Язык`,
                    disc: `Государственным языком Республики Таджикистан является таджикский, русский — язык межнационального общения.`
                  },
                  text7: {
                    title: `Государственные праздники`,
                    disc1: `1 января - Новый год
                    `,
                    disc2: `8 марта - День матери
                    `,
                    disc3: `21-24 марта - Навруз (международный праздник)
                    `,
                    disc4: `1 мая - Международный день солидарности трудящихся
                    `,
                    disc5: `9 мая - День Победы
                    `,
                    disc6: `27 июня - День национального единства
                    `,
                    disc7: `9 сентября - День независимости Республики Таджикистан
                    `,
                    disc8: `6 ноября - День Конституции Республики Таджикистана
                    `,
                    disc9: `Ураза-байрам празднование завершения месяца Рамадана
                    `,
                    disc10: `Курбан-байрам празднуется спустя 70 дней после окончания месяца Рамадана
                    `,
                  },
                  text8: {
                    title: `Виза`,
                    disc: `Иностранные граждане могут въезжать в Республику Таджикистан по действительным заграничным паспортам или заменяющим их документам при наличии въездной визы, выданной компетентными органами Республики Таджикистан в лице Министерства иностранных дел и его заграничных подразделений, а также посольств и консульств зарубежных стран, с которыми Республика Таджикистан имеет соответствующие соглашения. Срок оформления туристической визы не превышает 3-х рабочих дней, не считая дня подачи документов.
                    `
                  },
                  text9: {
                    title: `Таможня`,
                    disc: `Суммы свыше 500 USD или их эквиваленты в другой валюте должны быть задекларированы по прибытии. Максимально разрешенная к ввозу сумма — 5000 USD. Ввоз и вывоз национальной валюты запрещен. Также запрещены к ввозу наркотики, оружие и боеприпасы, отравляющие и взрывчатые вещества, порнография и любая печатная продукция, фото- и видеоматериалы, противоречащие нормам исламской морали. Драгоценные металлы и камни можно вывозить только при наличии документа, подтверждающего их покупку в магазине Таджикистана.
                    `
                  },
                  text10: {
                    title: `Паспортный режим
                    `,
                    disc: `Иностранные граждане, временно пребывающими в Республике Таджикистан обязаны в установленном порядке зарегистрировать свои национальные паспорта или заменяющие их документы в течение трех суток и выехать из Республики Таджикистан по истечении срока пребывания. (Закон №33 от 6.08.01г.)
                    `
                  },
                  text11: {
                    title: `Полезная информация`,
                    disc1: `Интернет-домен – tj`,
                    disc2: `Телефонный код – +992`,
                    disc3: `Напряжение сети – 220 V AC, 50 А; стандартное гнездо двойного штепселя`,
                    disc4: `Время: по Гринвичу + 5 часов`,
                  }
                }
              }
            },
            turk: {
              title: `Туркменистан`,
              disc: {
                text1: `Страна расположена на юго-западе Средней Азии, Граничит с Афганистаном и Ираном на юге, Казахстаном и Узбекистаном на севере, омывается внутренним Каспийским морем на западе, выхода к мировому океану не имеет. Член ООН со 2 марта 1992 года. Столица страны — город Ашхабад.`,
                text2: `27 октября 1924 года по национально-государственному размежеванию советских республик Средней Азии преобразована в Туркменскую ССР. 27 октября 1991 года Верховный Совет республики принял Декларацию о независимости, утвердил новое название страны — Туркменистан.
                `,
                text3: `Столица Туркменистана — Ашхабад, крупнейший административно политический, промышленный, научный и культурный центр государства. Ашхабад является отдельной административной единицей — город с правами велаята (области). расположен на юге Туркмении, в 25 км к северу от границы с Ираном на Туранской низменности.`,
                text4: `Город находится в Ахалском оазисе на Прикопетдагской предгорной равнине. Согласно официальным оценкам в Ашхабаде проживает около 12,5 % населения Туркмении. Здания в Ашхабаде построены по большей части в восточном архитектурном стиле. Почти все дома,небоскребы, мечети и тротуары украшены красивым мрамором.В 5 км к северу от Ашхабада расположен знаменитый восточный базар «Джыгыллык» (Толкучка). Ашхабад, столица Туркмении с октября 1924. Расположен на Прикопетдагской предгорной равнине, на высоте 214—240 м. Город находится в Ахальском оазисе. С образованием 27 октября 1924 Туркменской ССР город стал столицей республики и ему в 1927 дано национальное название «Ашхабад».
                `,
                text5: `В стране действует 3 аэропорта международного уровня в городах Ашхабад (им. Сапармурата Туркменбаши Великого), Мары и Туркменбаши. Государственная авиакомпания ежедневно перевозит внутри страны более двух тысяч пассажиров. На международных авиалиниях ежегодно перевозятся более полумиллиона человек. Общая протяженность железных дорог — 3181 км. Электрифицированных дорог нет. Пассажирское сообщение железных дорог Туркмении ограничено государственными границами страны, за исключением участков, по которым проходит транзит поездов, следующих из Таджикистана в Узбекистан и далее. На данный момент ведется строительство железной дороги Казахстан-Туркменистан-Иран.
                `,
                text6: `Для Туркменистана характерен континентальный климат пустынь умеренного типа: продолжительное сухое знойное лето, прохладная влажная осень и нехолодная малоснежная зима. Продолжительность зимнего периода на крайнем северо-востоке и юго-западе минимальная - месяц, а на крайнем севере и северо-востоке - более 4 месяцев. Средняя температура января на северо-востоке ниже - 6°С, на юго-востоке и юго-западе от +3°С до +5°С. В июле она изменяется в пределах +25°, +32°. Туркменистан относится к области недостаточного увлажнения. На равнинной территории годовое количество осадков не превышает 150 мм, в Приаралье и Карабогазголе - менее 100, а в горных районах - 350 мм. Развитие земледелия в аридных условиях базируется исключительно на искусственном орошении.
                `,
                text6: `Туризм – отрасль, которая стремительно развивается в последние годы. Особенно интенсивно развивается лечебный туризм. В первую очередь это связано с созданием туристической зоны Аваза на побережье Каспийского моря. Каждый турист должен получить визу перед въездом в Туркменистан. Чтобы получить туристскую визу, граждане большинства стран нуждаются в визовой поддержке местного туристического агентства.
                `,
                text7: `Для туристов, посещающих Туркменистан, организовываются экскурсионные туры с посещением исторических достопримечательностей Дашогуза, Кёнеургенча, Ашхабада, Нисы, Мерва, Мары, пляжные туры на Авазу и лечебные туры и отдых в Моллакаре (санаторий расположенный в пустыне Каракум), Йылы суве, Арчмане (курорт в Ахалтском районе известный своими серно-сульфатно-известковыми источниками).
                `,
                text8: `На территории Туркмении расположены три объекта, включенных в список объектов Всемирного наследия ЮНЕСКО: Ниса, Древний Мерв и Кёнеургенч.
                `,
                text9: `Ниса – древний и средневековый город, основанный у подножия Копетдага парфянами в III в. до н. э. и на протяжении последующих шести столетий служил первостепенной твердыней династии Аршакидов, а подчас и столицей Парфии (под именем «Михридаткирт», в честь царя Митридата I). После прихода к власти Сасанидов пришёл в упадок, возродился в Средние века как торговый центр на Шелковом пути. В X веке Ниса была пожалована саманидом Нухом II правителю Хорезма Мамуну. Город находился под властью Мамунидов до завоевания Хорезма Махмудом Газневи в 1017 году. Сын Махмуда Масуд в 1035 году был вынужден отдать Нису вторгнувшимся в Хорасан сельджукам. С XII века город перешёл под власть новой династии хорезмшахов — Ануштегинидов, в чьих руках оставался до монгольского завоевания в 1220 году. С XVI века Ниса неуклонно приходила в упадок и к 1820-м годам представляла собой развалины. Раскопками, которые велись в Нисе М. Е. Массоном в 1946—1960 гг., обнаружены руины колонного зала, святилищ и укреплений, документы, написанные арамейским письмом на парфянском языке, богатые свидетельства повседневной жизни парфян, их эллинистического искусства (напр., разукрашенные монументальные статуи из обожжённой глины). В 2007 году руины парфянской крепости внесены в список Всемирного наследия ЮНЕСКО.
                `,
                text10: `Мерв — древнейший известный город Средней Азии, стоявший на берегу реки Мургаб в юго-восточной части Туркменистана, в 30 км к востоку от современного города Мары. Возник в середине 1-го тысячелетия до н. э. Своего наивысшего расцвета Мерв достиг в середине XII века, когда султан Санджар сделал его столицей государства Сельджукидов. В это время Мерв поражал современников размахом своих построек и огромным населением, которое, по некоторым оценкам, было больше, чем население Константинополя и Багдада. Продолжал оставаться крупнейшим центром Средней Азии и при хорезмшахах. В 1221 г. Мерв был разрушен монголами и не возродился до XV века, когда Тимуриды наконец привели в порядок его ирригационные сооружения, но Мерв не смог достичь былого величия, со временем поселение было перенесено на место современного города Мары. С приходом в 1880-е гг. русской армии началось археологическое исследование территории Мервского оазиса, которое приобрело систематический характер в послевоенный период благодаря деятельности М. Е. Массона. Руины Мерва — памятник Всемирного наследия человечества.
                `,
                text11: `Куня-Ургенч столица Хорезма в X—XIII и в XIV вв. Дата его основания неизвестна, но остатки старейшей крепости города «Кыркмолла» относят к античному периоду (V-II вв. до н. э.). Город упоминается в священной книге зороастрийцев — Авесте под названием «Урва», «Урга». В кангюйский период город известен под названием «Хангирд», «Хаджирд». В конце X в., после присоединения южного Хорезма к северному, Ургенч стал столицей объединенного Хорезмского государства. В 1221 город был взят и разрушен монголами. В 1224 вошел во владения хана Джучи и вскоре восстановлен. С середины 13 в. — в составе Золотой Орды, сохранил значение торгово-ремесленного и административного центра. В середине 14 в. Хорезм освободился от власти Золотой Орды, а Ургенч снова стал его столицей. В 1388 был уничтожен Тимуром. В 1391 частично восстановлен, но былого значения не достиг; в 17 в. прекратил существование. В Ургенче сохранились мавзолей Фахраддин-Рази (2-я пол. XII в.), мавзолей Текеша (кон. XII — нач. XIII вв.), минарет Кутлуг-Тимура (1321–1333 гг.), ханака — трехкупольное портальное сооружение с мавзолеем Наджмеддина Кубра (1-я треть XIV в.), портал караван-сарая XIV в. В 2005 года памятники города включены в Список всемирного наследия ЮНЕСКО.
                `,
                text12: `Маргиана (греч. Margiane, др.-перс. Маргуш) – название древней области в Средней Азии, по течению реки Мургаб (ныне юго-восток Туркменистана и север Афганистана). Самые ранние упоминания о Маргиане — в «Авесте» и Бехистунской надписи. Маргиана граничила на западе с Парфией, на северо-востоке — с Согдом, на востоке — с Бактрией, на юге — с Арейей. Столица Маргияны находилась в районе Древнего Мерва. В 522 до н. э. в Маргиане произошло народное восстание против власти Ахеменидов, подавленное царём Дарием I (521). Позднее Маргиана последовательно входила в состав державы Александра Македонского, государства Селевкидов и Парфянского царства. В средние века земли Маргиана вошли в Хорасан.
                `,
                text13: `В 1-й трети 1-го тысячелетия до н. э. в Маргиане возникают поселения городского типа (Яз-депе). В середине 1-го тысячелетия до н. э. города обносятся крепостными стенами (Мерв). В III веке до н. э. в искусство Маргианы проникает влияние эллинистической культуры. В период расцвета (II век до н э. — III век н. э.) города и крепости Маргиана строятся по регулярному плану, иногда с «гофрированными» стенами (Чильбурдж); для жилого дома характерно объединение нескольких жилищ одним двором (Джин-депе); распространены терракотовые статуэтки, встречаются оссуарии в виде архитектурных сооружений. К III веку восходят памятники буддийской архитектуры и скульптуры. Художественные традиции Маргианы находят развитие в искусстве Мерва.
                `,
                text14: `Знаменитые "быстрые как ветер" ахалтекинцы прославили страну на весь мир, на гербе государства даже изображен ахалтекинский скакун. Это действительно уникальная порода – быстрые, грациозные, с точеной "лебединой" шеей и тонкими "сухими" ногами, эти лошади при этом ещё и удивительно выносливы. Туркмены на протяжении веков весьма высоко ценили хороших коней и считали их своими друзьями. Эта "страсть" сохранилась и до наших дней и сейчас лошади – одна из главных достопримечательностей страны.
                `
              },
              disc2: {
                title: `СПРАВОЧНАЯ ИНФОРМАЦИЯ`,
                text: {
                  span1: {
                    title: `Государственное устройство Туркменистана
                    `,
                    text1: `Государственное устройство Туркменистана –  Президентская республика с однопартийной системой, в которую входят 5 велаятов и Ашгабат — город с правами велаята. Законодательный орган –  Меджлис (парламент, 125 членов). Денежная единица –  манат.
                    `,
                  },
                  span2: {
                    title: `Административное деление Туркменистана
                    `,
                    text1: `В административном отношении Туркменистан состоит из 6 административно-территориальных единиц, 5 из которых являются велаятами, 1 — город с правами велаята:
                    `,
                    text2: `Ахалский велаят. Столица — Аннау.
                    `,
                    text3: `Балканский велаят. Столица — Балканабад (Небит-Даг).
                    `,
                    text4: `Дашогузский велаят. Столица — Дашогуз (Ташауз).
                    `,
                    text5: `Лебапский велаят. Столица — Туркменабад (Чарджоу).
                    `,
                    text6: `Марыйский велаят. Столица — Мары.
                    `,
                    text7: `Город Ашхабат.
                    `,
                  },
                  span3: {
                    title: `Экономика Туркмениcтана
                    `,
                    text1: `Располагая большими запасами природного газа (15-20 трлн куб. м) и нефти (1,5-2,0 млрд т), Туркменистан является одним из важных экспортеров топливных ресурсов. Этот сектор экономики, формирует примерно 70 % валового национального продукта. К основным отраслям промышленности относятся очистка и переработка нефти и природного газа; производство стекла, тканей (в основном, хлопчатобумажных) и одежды; пищевая промышленность.
                    `,
                  },
                  span4: {
                    title: `Население:`,
                    text1: `Свыше 5 млн чел. (2012 г.)`,
                  },
                  span5: {
                    title: `Религия`,
                    text1: `Подавляющее большинство населения Туркмении составляют мусульмане (в основном, суннитского толка) - 89%. Христиане составляют около 9% населения, остальные конфессии - 2%.
                    `,
                  },
                  span6: {
                    title: `Язык`,
                    text1: `Государственным языком Туркменистана является туркменский язык.
                    `,
                  },
                  span7: {
                    title: `Государственные праздники
                    `,
                    text1: `Новый год – 1 января
                    `,
                    text2: `День памяти – 12 января
                    `,
                    text3: `День Государственного флага Туркменистана – 19 февраля
                    `,
                    text4: `Международный женский день – 8 марта
                    `,
                    text5: `Национальный праздник весны – 21–22 марта
                    `,
                    text6: `День Победы в Великой Отечественной войне 1941–1945 годов – 9 мая
                    `,
                    text7: `День возрождения, единства и поэзии Махтумкули Фраги – 18 мая
                    `,
                    text8: `Национальный день поминовения – 6 октября
                    `,
                    text9: `День независимости Туркменистана – 27–28 октября
                    `,
                    text10: `Национальный праздник Туркменистана – День Нейтралитета – 12 декабря
                    `,
                    text11: `Курбан байрамы и Ораза байрамы
                    `
                  },
                  span8: {
                    title: `Виза`,
                    text1: `Каждый турист должен получить визу перед въездом в Туркменистан. Чтобы получить туристскую визу, граждане большинства стран нуждаются в визовой поддержке местного туристического агентства.
                    `,
                  },
                  span9: {
                    title: `Таможня`,
                    text1: `Ввоз и вывоз местной валюты запрещен. Ввоз иностранной валюты не ограничен (количество должно быть указано в декларации). Вывозить можно сумму, не превышающую указанную в декларации.
                    `,
                    text2: `Пассажирам в возрасте старше 16 лет разрешен беспошлинный ввоз до 200 сигарет или 200 гр. табака; до 2 л любых алкогольных напитков (для лиц старше 21 года); а также личных вещей в разумных количествах.
                    `,
                    text3: `При въезде в страну необходимо заполнить таможенную декларацию, которая должна быть сохранена до отъезда. Это облегчает последующий вывоз предметов и вещей, предназначенных для личного использования, включая валюту и драгоценности, которые обязательно должны быть указаны в декларации. Таможенный осмотр обычно достаточно продолжителен и детален. Рекомендуется сохранять квитанции об обмене валюты и чеки из магазинов. Это облегчит вывоз приобретенных в стране товаров, особенно, если за них было заплачено в иностранной валюте.
                    `,
                    text4: `Запрещен ввоз и вывоз оружия, боеприпасов и наркотиков. Произведения искусства и антиквариат могут ввозиться и вывозиться только при наличии разрешения Министерства культуры. Вывоз ковров, драгоценностей, музыкальных инструментов, художественных и археологических экспонатов и т. д. возможен только при наличии документов, подтверждающих законность их приобретения. Для вывоза ковров из Туркмении необходимо также получить свидетельство из Музея Ковра в Ашхабаде, что ковер не имеет исторической ценности. Кроме того, придется оплатить налог, зависящий от размеров ковра.
                    `,
                  },
                  span10: {
                    title: `Паспортный режим
                    `,
                    text1: `На основании закона «О миграции» от 2005 года, иностранные граждане по прибытии в пункт назначения в Туркменистане обязаны в течение трех рабочих дней зарегистрироваться на основании полученных виз в порядке, установленном настоящим Законом. Регистрация производится на основании письменных обращений принимающих юридических и физических лиц Туркменистана.
                    `,
                  },
                  span11: {
                    title: `Полезная информация
                    `,
                    text1: `Интернет-домен – tm`,
                    text2: `Телефонный код – +993`,
                    text3: `Напряжение сети – 220 V AC, 50 А; стандартное гнездо двойного штепселя
                    `,
                    text4: `Время: по Гринвичу + 5 часов
                    `,
                  },
                }
              }
            },
            history: {
              title: `История народов Средней Азии`,
              text: {
                title: `СРЕДНЯЯ АЗИЯ – АРЕНА ВЕЛИКИХ СРАЖЕНИЙ`,
                text1: `Современная Средняя Азия – это пять независимых после распада СССР в 1991 году государств: Казахстан, Кыргызстан, Таджикистан, Туркменистан и Узбекистан, занимающих территорию от Каспийского моря на западе до границ Китая на Востоке.
                `,
                text2: `История народов Средней Азии до VI века до н. э. известна только по отрывочным сведениям  из народного эпоса и легенд. Более достоверные сведения мы находим у античных авторов.
                `,
                text3: `Богатые и плодородные земли оазисов Средней Азии при их очень выгодном географическом положении всегда были лакомым куском для завоевателей. В 540 году до нашей эры, Бактрия, занимавшая территорию от Гиссарского хребта в Узбекистане до Гиндукуша в Афганистане, стала сатрапией  ахеменидского государства с Киром II Великим (559-530 гг. до н. э.) , затем он подчинил себе саков,  а также Согдиану, Хорезм и Парфию, упоминаемые в тексте Бехистунской надписи Дария I (522-486 гг. до н. э.). Саки и массагеты (кочевые и полукочевые племена) обитали  на территории Центрального и Восточного Казахстана, Приаралье, Семиречье и Памире. От Геродота мы знаем о массагетской царице Томирис, разгромившей Кира II. Согдиана  (Согд) занимала  территорию современного Таджикистана (без Памира) и Узбекистана (без Хорезма  и северной Бактрии) со столицей Мараканда, основанной в VIII в. до н.э.  Хорезм - государство в нижнем течении Амударьи. Одна из самых древних историко-культурных областей Средней Азии. Многие исследователи отождествляют его со страной ариев - авестийской Арьянам-войчах, первой зороастрийской страной. Парфия включала в себя горы Копетдаг и примыкающие к ним долины Юго-Западной Туркмении и Северо-Восточного Ирана.
                `,
                text4: `Среднеазиатские народы были втянуты в соперничество  сильнейших держав того времени Персии и Греции. Они вместе с персами участвовали в походах против Афинского  греческого государства.  Мы знаем так же, что в битве при Гавгамелах (331 г. до н. э.), Александр Македонский разбил на голову последнего ахеменида Дария III, покончив с владычеством ахеменидов над народами Средней Азии. Александр объединил Согдиану и Бактрию в одну сатрапию, которая позже была преобразована Диодотом в Греко-бактрийское государство, просуществовавшее до II в. до н. э.
                `,
                text5: `Древнегреческий историк Страбон сообщает, что Бактриану у эллинов отняли кочевые народа, пришедшие из страны саков. Китайские источники говорят о завоевании Дахя - Бактрии юе-чжами, которые были вытеснены из Восточного Туркестана хуннами.  После победы над греко-бактрийским правителями юе-чжи поселились на правом берегу Амударьи. Античные авторы отождествляют юе-чжи с тохарами. Отсюда более позднее название этих областей  - Тохаристан.
                `,
                text6: `Основываясь на отчете китайского посла Чжан Цяня, китайский историк упоминает о кочевом (возможно скифском) государстве Кангюй, где обычаи сходны с юе-чжи. История Кангюй в легенде восходит ко временам «Авесты», где Кангха упоминается как столица Турана. О государстве Кангха упоминает и «Авеста», и индийский эпос «Махабхарата», окончательно сложившийся к IV в. н. э.  Оно существовало в нижнем и среднем течении Сырдарьи со II в. до н. э. до IV в. н. По более поздним упоминаниям китайских историков Кангхе были подчинены Бухара, Шахрисабз, Каттакурган, Ташкентский оазис и северная часть Хорезма.
                `,
                text7: `В этот же период  по свидетельству Чжан Цян на территории Средней Азии существовало государств Давань (Фергана), объединявшее 70 городов, его правитель сидел в городе Гушан (Ю-чен), возможно нынешний Узген.
                `,
                text8: `Китайские хроники сообщают, что в Дахя - Бактрии в I веке н. э. возвысился один из пяти юе-чжийских родов – Гуйшуан (Кушан). Кушанский князь Кадфиз объявил себя государем, начал войну, завершивушуюся созданием территориального ядра Кушанского царства. Его преемники завершили создании великой Кушанской империи, куда входили территории Средней Азии, Афганистана, частично Индии и Пакистана, и которая по величине и могуществу была равна Римской и Китайской империям. В кушанский период истории произошло превращение буддизму в одну из мировых религий и бурный расцвет Великого шелкового пути.
                `,
                text9: `В V-VI веках на смену Кушанской империи приходит государство эфталитов. По мнению историка Льва Гумилева эфталиты (белые гунны) как народ сложились в горной области Памира. В эфталитское государство вошли территории Средней Азии, кроме Хорезма (Согдиана, Бактрия-Тохаристан, Фергана), а также Афганистан и Восточный Иран. В ходе войн эфталиты уничтожили государство Гуптов  в Индии. Сами же пали под ударами индийских, сасанидских и тюркских правителей.
                `,
                text10: `В VI-VII веках народы Средней Азии вошли в огромное государство кочевников  - тюркский каганат, контролировавший огромную территорию от Тихого океана до Черного моря (в 630 году и до Индийского океана), а вместе с ней и Великий шелковый путь. Китай был вынужден платить ему дань в размере 1000 кусков шелка. Однако  только до 630 года, когда китайцы нанесли тюркам поражение.
                `,
                text11: `В VII в. над среднеазиатскими народами нависла новая угроза – нашествие арабов, которые уже захватили Сирию, Палестину, Иран. В 651 году они подошли к процветающему  Мерву и взяли его без боя. В начале VIII века арабские войска под командование Кутейбы ибн Муслима завершили завоевание большей части Средней Азии. По сообщению историка Ибн ал-Асира, Кутейба вывел из Средней Азии до 100 тысяч рабов-пленников. В IX в. в процессе распада Арабского халифата в Средней Азии, уже принявшей от арабов ислам, утвердилась местная династия Саманидов (819-999 гг.).
                `,
                text12: `В 999 году Бухару – столицу Саманидов захватили войска Караханидского государства, образованного тюркскими племенами Семиречья и Кашгара, и уже завоевавшего Шаш, Фергану и земли древнего Согда.
                `,
                text13: `В 1141 году в Маверранахре появились каракитаи. Они устраивали набеги с территории Семиречья, где образовали свое государство. Пользуясь феодальной раздробленностью  территории, они захватили сначала Самарканд, потом Бухару. Но их интересовала лишь дань.
                `,
                text14: `На борьбу с каракитаями встал Хорезм, укрепившийся после падения сельджукской династии в Иране в 1194 году и не желавший платить дань. Хорезмшах Мухаммед в 1210 году взял Бухару и в союзе с самаркандским ханом из Караханидов Османом двинулся на Семиречье. В долине реки Талас хорезмшах взял в плен командующего каракитайским войсками Таянгу. Накануне монгольского нашествия хорезмшах Мухаммед объединил земли Мавераннахра, завоевывая их одну за другой и включая в состав Хорезмского государства.
                `,
                text15: `Чингисхан вообще не хотел нападать на Среднюю Азию, но Мухаммед не пожелав стать вассалом, убил монгольских послов. Это трагически решило судьбу Средней Азии. Еще до наступления лета 1220 года восточная и центральная части территории Мавераннахра были захвачены монголами. Многие города лежали в развалинах. Особенно пострадали яростно сопротивлявшиеся города Самарканд, Мерв, Термез, Ургенч. Полуторавековое правление монголов в Средней Азии принесло неисчислимые бедствия его народам и сопровождались повсеместным упадком.
                `,
                text16: `Объединил разрозненные земли в единое государство Амир Темур (1336-1405 гг.), сделав в 1370 году его столицей Самарканд. Мавераннахр, Фергану и Шашскую область он объединил без труда, а вот строптивый Хорезм удалось присоединить лишь в 1380 году. К середине 80-х годов XIV века Темуру уже принадлежал Хорасан, а затем и весь Иран. Чтобы ослабить Золотую орду он предпринял три похода против золотоордынского хана Тохтамыша (в 1387, 1391 и 1394-95 гг. ). В 1392 году он покорил Армению и Грузию, в 1397 г. – Азербайджан. В 1398-99 гг. Темур захватил Дели и близлежащие области Индии. В 1400-м вступил в борьбу с турецким султаном Баязетом I и египетским султаном Фараджем. Захватил Сивас в Малой Азии и Алеппо в Сирии. В 1402 году в битве под Анкарой разбил и взял в плен могущественного султана Османской империи. Только смерть в 1405 году помешала его походу на Китай. Целью Темура было господство над путями мировой караванной торговли, связывающими  страны Европы и Передней Азии с Дальним Востоком.Он стремился направить торговлю по старому пути через Среднюю Азию,уничтожив северную магистраль, которую контролировала Золотая орда. Поэтому в 1395 году полностью разрушил золотоордынские города Азов, Сарай, Ургенч.
                `,
                text17: `В XV в. феодальная раздробленность и междуусобные войны ослабили мощь темуридского государства. Одна за другой на его землях правят узбекские династии Шейбанидов (XVI в.), Аштарханидов (XVII-XVIII вв.), Мангытов. Их правлению так же сопутствовали бесконечные междоусобные войны, разорявшие города, опустошавшие земли. В результате образовались три ханства – Бухарское, Хивинское и Кокандское, ожесточенная борьба между которыми за преобладание в Средней Азии продолжалась до их присоединения к России во второй половине XIX в.
                `
              }
            },
            silkRoad: {
              title: `Великий Шелковый Путь
              `,
              text1: `Великий шелковый путь, более чем на полторы тысячи лет связавший западную и восточную части самого большого в мире континента, стал одним из величайших достижений человечества. В нем как в гигантской реторте бурлила жизнь, шло стремительное развитие не только торговли, но и самых разных отраслей производства товаров, которых требовалось все больше и больше. Наряду с этим происходило грандиозное смешение и обогащение культур, развитие наук, искусств, ремесел.
              `,
              text2: `Великий шелковый путь представлял собой гигантскую систему дорог, даже правильнее будет сказать две гигатские системы дорог, разделенные вплоть до II века до н. э. как водоразделом горными хребтами Тянь-Шаня, Кунь-Луня, Каракорума, Гиндукуша, Гималаев. До этого времени обитатели Европы, Египта, Аравии, Междуречья (совр. Ирак и Иран), Передней и Средней Азии, греко-римского мира, связанные между собой караванными путями на протяжении многих тысячелетий, даже не подозревали о существовании огромной китайской империи, одной из древнейших в мире.
              `,
              text3: `В Поднебесной, закрытой для всего западного мира, но также обладающей разветвленной сетью дорог, тоже не подозревали о существовании буквально под боком богатейших земель со множеством процветающих городов. Первым их довелось увидеть китайскому послу Чжан Цяню, начавшему свое путешествие в 138 г. до н. э. и после многолетних мытарств оказавшемуся в Средней Азии. О своем пребывании в Давани (Ферганской долине), Кангюе, Согде, Бактрии он составил подробный доклад китайскому императору, которого более всего прельстили знаменитые скакуны Давани, которых в Китае стали называть «небесными», уж очень они отличались от приземистых местных лошадок. Китайский император, согласно легенде, именно на таких конях мог вознестись на небо и стать бессмертным.
              `,
              text4: `Взамен китайцы предложили свои товары. По свидетельству историков первый караван с шелком – очень компактным и дорогим товаром, а также с бронзовыми (и не только!) зеркалами отправился из Китая в Ферганскую долину в 121 году до н. э. Он двигался через Турфанскую впадину вдоль Огненных гор и отрогов Тянь-Шаня. В этой связи интересна находка узбекско-французской экспедиции в 35 км от Самарканда захоронения так называемой «согдийской принцессы», которому две тысячи лет. Среди множества золотых украшений в захоронении найдено китайское зеркало из загадочного сплава. Вероятнее всего, «принцесса» была убрана и шелками, но эта ткань слишком эфемерна, чтобы сохраниться под землей в течение двадцати веков.
              `,
              text5: `Невиданные доселе китайские товары, в особенности шелк, быстро завоевывали популярность и за пределами Средней Азии: сначала в Персии, а затем и на всем протяжении западной части Великого шелкового пути, который, кстати, стал называться так только с 1877 года с легкой руки немецкого географа исследователя Китая Фердинанда Рихтгофена.
              `,
              text6: `Римляне называли шелк китайской вуалью, за него платили баснословные деньги, в частности за то, что шелк был практические единственной защитой от насекомых-паразитов. Секрет изготовления шелка китайцы долго держали в секрете, европейцы даже считали, что шелк растет на деревьях. Но, как бы сейчас выразились, в результате промышленного шпионажа секрет перестал быть секретом.
              `,
              text7: `Шелк не единственное, что получил западный мир в результате контактов с Китаем. Большим спросом на Западе пользовалась китайская фарфоровая посуда тончайшей работы с изящными рисунками, бронзовые и лакированные изделия, лекарства, парфюмерия, чай, рис и, конечно, бумага, технологию изготовления которой китайцы освоили первыми, как и производства пороха. Компас, кстати говоря, тоже изобрели китайцы.
              `,
              text8: `Сам Китай тоже не остался в накладе. Вместе со скакунами в Китай попал и корм для них – люцерна. Помимо «небесных скакунов», в Китай впоследствии стали ввозить верблюдов, курдючных овец, охотничьих собак и даже львов и гепардов.
              `,
              text9: `Здесь стали культивировать попавший с караванами хлопок, а также фасоль, лук, огурцы, морковь, грецкий орех, гранат, инжир, персики, арбузы, дыни, виноград. Оценили китайцы и виноградное вино…
              `,
              text10: `Кроме того Средняя Азия поставляла в Китай изделия из шерсти, коих там не знали - ткани, ковры, паласы, а также военное снаряжение, золото, серебро, полудрагоценные камни, изделия из самаркандского стекла, кожу, хлопчатобумажные и золотошвейные ткани…  Через Среднюю Азию в Китай шли товары из Западной и Восточной Европы, Средиземноморья, Передней Азии, Закавказья…
              `,
              text11: `Великий шелковый путь стал проводником не только материальных ценностей, но и духовных. Вместе с купеческим караванами странствующие буддийские монахи несли свою религию сначала из Индии в Среднюю Азию (I-III вв.), оттуда в Китай (IV-VI вв) и дальше в Японию.
              `,
              text12: `На территории Узбекистана открыто большое количество буддийских памятников. Всемирно известно городище Дальверзинтепа (в 60-ти км от Термеза) – памятник эпохи Кушанской империи, вблизи которого обнаружены руины буддийского святилища, богато украшенного скульптурой и датируемого I в. н. э. Там же было найдено скульптурное изображение головы кушанского принца в остроконечном уборе. Рядом во втором буддийском комплексе обнаружены статуи Будды и бодхисатв. На городище Каратепа узбекско-японская археологическая экспедиция раскопала жилища буддийских монахов, а в некотором отдалении от них буддийский монастырь с хорошо сохранившейся ступой.
              `,
              text13: `По Великому шелковому пути в III веке шло распространение манихейства (сплав зороастризма и христианства), затем несторианства и христианства, а с VIII века - ислама. В XIV в ислам вытеснил буддизм из Восточного Туркестана (ныне Синьцзян-Уйгурский район)
              `,
              text14: `Великий шелковый путь – это не только бесчисленные караваны в несколько сотен, а то и тысяч верблюдов и лошадей (двигаться небольшими группами было слишком опасно), но и огромное количество «сопутствуюших предприятий»: караван-сараев, совмещающих функции гостиниц для купцов и обслуживающего их персонала, а также товарных складов и помещений для вьючных животных, фуража и провианта; колодцы; таможни; пункты обмена денег. Отправляясь в дальний путь купцы опасались брать с собой большие суммы наличных, поэтому с X в., когда торговлю на Шелковом пути стали контролировать мусульмане и евреи, стали сдавать деньги менялам, получая взамен расписку, по-персидски «чек», который и обменивали на деньги в тех городах Шелкового пути, где находились доверенные лица этих менял.
              `,
              text15: `Великий шелковый путь давал средства к существованию огромной массе людей, проживающих на близлежащих территориях по всей его протяженности от Атлантического до Тихого океана, в том числе и кочевым народам, снаряжавшим за вознаграждение отряды для охраны караванов, иногда от своих же менее удачливых сородичей, а также снабжавшим купцов вьючными животными и провиантом. Правители государств, по территории которых проходили караваны, были заинтересованы в получении доходов от таможенных пошлин, поэтому принимали специальные законы, охранявшие купцов. Во времена Амира Темура, например, правитель земли, на которой был ограблен караван, должен был в двойном размере компенсировать убыток купцам или их наследникам, и в пять раз больше внести в государственную казну.  Вот и приходилось охранять.
              `,
              text16: `По всему пути следования караванов вырастали новые города и богатели старые, в городах процветали ремесла, развивались искусства, науки, обогащаемые все новыми и новыми идеями и знаниями. Развивались архитектура и градостроительство, в Средней Азии как пример можно назвать усыпальницу темуридов Гур-Эмир в Самарканде, дворец Ак-Сарай в Шахрисабсе, мечеть Ходжи Ахмада Яссави в Яссах, где сочетаются архитектурные стили, формы, строительные приемы самых разных стран и культур. Достаточно сказать, что в их строительстве вместе со среднеазиатскими зодчими принимали участие мастера из Азербайджана, Армении, Грузии, Индии, Ирака, Ирана, Сирии…
              `,
              text17: `Крупнейшими центрами, своего рода хабами того времени, были древние города и земли Узбекистана - Давань, Самарканд, Бухара, Хорезм, Термез… Здесь было средоточие не только экономической но и культурной жизни. Пульс этой жизни особенно был заметен на многолюдных и многоязычных базарах, где горожане и приезжие узнавали новости, цены на товары, слушали выступления артистов, музыкантов, певцов, сказителей, восторгались искусством канатоходцев и танцоров. Здесь купцы могли обменять свои товары, ведь мало кто из них проходил весь путь, который имел протяженность ни много ни мало 12 тыс. км. Практически никто из путешествующих по Великому шелковому пути понятия не имел о грандиозности этой трансконтинентальной магистрали, каждый знал лишь свой определенный участок, в лучшем случае половину всего пути.
              `,
              text18: `Считается, что одним из первых, кто открыл европейцам глаза на размеры евразийского континента и описал восточные страны был Марко Поло, который на рубеже XIII и XIV веков прошел весь Шелковый путь от начала до конца.
              `,
              text19: `За время своего существования Великий шелковый путь не раз переживал периоды расцвета и упадка. Как своенравная река он часто менял свои главные русла, огибая ставшие опасными участки пути.
              `,
              text20: `В XIII - XIV веках Великий шелковый путь переживал свой последний взлет. Монголы под предводительством Чингисхана покорив в 1210-1250 гг. все страны от Китая до Ирана и Руси взяли под свой контроль на целых полтора столетия практически весь евроазиатский торговый путь. Но уже во второй половине XIV века магистраль, имевшая полуторатысячную историю существования, пришла в упадок, несмотря на попытку Амира Темура в 1370-1380 гг. вновь объединить все евразийские маршруты, что дало лишь временный результат.
              `,
              text21: `Виной всему стало развитие в XIV-XV веках торгового мореплавания вдоль побережий Ближнего Востока, Южной и Юго-Восточной Азии. Судите сами: морской путь из Персидского залива в Китай занимал приблизительно 150 дней, а караванный из Азова в Пекин – около 300. Причем на одном корабле можно было перевезти столько же груза, сколько на тысяче вьючных животных.
              `,
              text22: `Дольше всех существовал участок Великого шелкового пути, связывающий Китай со Средней Азией. Караванная торговля между ними прекратилась лишь в XVIII веке.
              `
            }
          },
          visa: {
            title: `Визовая поддержка
            `,
            text1: `Визовые формальности
            `,
            text2: `Безвизовый режим в республики Узбекистан действуетдля граждан Кыргызстана (до 60 дней), Армении, Азербайджана, Беларуси, Грузии, Казахстана, Молдовы, России и Украины.

            `,
            text3: `В 2018 г. был установлен безвизовый режим сроком на 30 дней для граждан: Японии, Республики Корея, Сингапура, Израиля, Таджикистана, Турции, Индонезии, Малайзии и Франции. Безвизовый режим действует в течение 30 дней со дня въезда в Узбекистан.
            `,
            text4: `В 2019 этот список был пополнен ещё 46 странами. В список вошли Австралия, Австрия, Аргентина, Андорра, Бельгия, Болгария, Бразилия, Бруней-Даруссалам, Босния и Герцеговина, Великобритания, Ватикан, Венгрия, Греция, Германия, Дания, Испания, Ирландия, Исландия, Италия, Канада, Люксембург, Лихтенштейн, Латвия, Литва, Монако, Монголия, Мальта, Нидерланды, Норвегия, Новая Зеландия, Португалия, Польша, Республика Кипр, Румыния, Сан-Марино, Сербия, Словения, Словакия, Финляндия, Хорватия, Чили, Черногория, Чехия, Швейцария, Швеция, Эстония.

            `,
          },
          aboutCompany: {
            title: `Компания`,
            text1: `Туристическое агентство «Ориент Вояж» - ведущий туроператор по въездному туризму в Узбекистан, с головным офисом в Самарканде и представительством в Ташкенте. 
            `,
            text2: `Компания была основана в декабре 1992 года и стала одной из первых частных компаний на туристическом рынке независимого Узбекистана. Целью создания компании было предоставление широкого спектра туристических услуг для пребывающих в Узбекистан и другие страны Центральной Азии индивидуальных и групповых туристов.
            `,
            text3: `За многие годы работы у нас сложились крепкие партнерские отношения с поставщиками туристических услуг (гостиницами, ресторанами, музеями, , ж/д- и авиакомпаниями и пр.),  что позволяет предлагать нашим клиентам конкурентные цены и высокое качество обслуживания. Немаловажным фактором предоставления качественных услуг является то, что Ориент Вояж располагает собственным штатом высококвалифицированных гидов-переводчиков.
            `,
            text4: `В список наших партнеров входят  крупные туристические компании Европы и Ближнего Востока, Австралии и Юго-Восточной Азии. Мы гордимся многолетним сотрудничеством с ними.
            `,
            text5: `За многие годы работы компания расширила свою деятельность и на сегодня имеет хорошо развитую инфраструктуру. Мы создали сеть отелей  «Ориент Стар» в основных туристических центрах страны - Хиве, Бухаре и Самарканде, собственный автопарк современных автобусов и микроавтобусов «Ориент Бас».
            `,
            text6: `Несколько лет назад мы провели реконструкцию старинного караван-сарая в Самарканде, где теперь проводятся различные мероприятия для наших туристов: вечера с фольклорными представлениями, традиционные чаепития, знакомство туристов с рецептами приготовления восточных сладостей и национальных блюд.
            `,
            text7: `Ориент Вояж является постоянным участником различных туристических ярмарок – ITB (Germany), Top Resa (France), TTG Incontri (Italy), ITB Asia (Singapore),  WTM (UK), FITUR (Spain).
            `,
            text8: `Наш опытный и профессиональный коллектив,  говорящий на многих языках, всегда поможет составить (разработать)  правильный, оптимальный маршрут путешествия, учитывая  ваши пожелания и сроки путешествий.
            `,
            text9: `Мы предоставим всю необходимую информацию каждому клиенту: от правил оформления визовой поддержки до организации самых разнообразных и интересных туров по Узбекистану и другим странам Центральной Азии.
            `,
            text10: `Путешествие в Узбекистан – это знакомство с другим миром, богатым бирюзовыми куполами и грандиозными пейзажами, бережно хранимыми традициями и открытым гостеприимным народом.
            `,
            text11: `Добро пожаловать в Узбекистан!!!
            `,
            text12: `Коллектив "Ориент Вояж"
            `,
          }
        }
      }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
  }
}
