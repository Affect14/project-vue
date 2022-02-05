import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutatuions/mutations'
import actions from './actions/actions'
import getters from './getters/getters'

Vue.use(Vuex);

const storage = new Vuex.Store({
    state: {
        searchValue: '',
        competitions: [],
        teams: [],
        isMobile: false,
        isDesktop: true,
        matches: [],
        error: ''
    },

    mutations,
    actions,
    getters,

})

export default storage;