import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = () => ({
    arr: [
        {
            id: '',
            mainTitle: {
                ru: '',
                uz: '',
                en: '',
            }, 
            days: String, 
            allInfo: {
                route: {
                    ru: '',
                    uz: '',
                    en: '',
                }, 
                duration: {
                    ru: '',
                    uz: '',
                    en: '',
                }, 
                days: [
                    {
                        title: {
                            ru: '',
                            uz: '',
                            en: '',
                        }, 
                        description: {
                            ru: '',
                            uz: '',
                            en: '',
                        }, 
                        img: '',
                    }
                ]
            },
            secondInfo: {
                numPerson: [
                    {

                    }
                ], 
                singleRoom: [
                    {

                    }
                ], 
                hotels: [
                    {

                    }
                ], 
                priceInclude: [
                    {

                    }
                ],
                priceUnInclude: [
                    {

                    }
                ]
            }
        }
    ]
})

const getters = {
	Tours: state => state.arr
}

const mutations = {
}


const actions = {
}

const modules = {
	Me,
	Modals,
	UI,
	Data,
}

export default {
	state,
	getters,
	actions,
	mutations,
	modules
}
