import axios from 'axios'

export default{

    GET_SEARCH_VALUE({commit}, value){
        commit('SET_SEARCH_VALUE', value)
    },

    CLEAR_SEARCH_VALUE({commit}){
        commit('CLEAR_SEARCH_VALUE')
    },

    CLEAR_MATCHES({commit}){
        commit('CLEAR_MATCHES')
    },

    CLEAR_ERROR({commit}){
        commit('SET_ERROR', '')
    },

    SET_MOBILE({commit}){
        commit('SWITCH_MOBILE')
    },
    
    SET_DESKTOP({commit}){
        commit('SWITCH_DESKTOP')
    },



    async GET_COMPETITIONS_FROM_API({commit}){
        try {
            const competitions = await axios.get(process.env.VUE_APP_URL + 'competitions/', { headers: { 'X-Auth-Token': process.env.VUE_APP_TOKEN } });
            commit('SET_COMPETITIONS_TO_STATE', competitions);
            return competitions;
        } catch (error) {
            commit('SET_ERROR', error);
            return error;
        }
    },


    async GET_TEAMS_FROM_API({commit}){
        try {
            const teams = await axios.get(process.env.VUE_APP_URL + 'teams', { headers: { 'X-Auth-Token': process.env.VUE_APP_TOKEN } });
            commit('SET_TEAMS_TO_STATE', teams);
            return teams;
        } catch (error) {
            commit('SET_ERROR', error);
            return error;
        }
        },
    

    async GET_COMPETITIONS_MATCHES_FROM_API({commit}, id){
        try {
            const matches = await axios.get(process.env.VUE_APP_URL + 'competitions/' + id + '/matches', { headers: { 'X-Auth-Token': process.env.VUE_APP_TOKEN } });
            commit('SET_COMPETITIONS_MATCHES_TO_STATE', matches);
            return matches;
        } catch (error) {
            commit('SET_ERROR', error)
            return error;
        }
        },
    async GET_COMPETITIONS_MATCHES_FROM_API_DATE({commit}, route){
        try {
            const matches = await axios.get(process.env.VUE_APP_URL + 'competitions/' + route.query.competition + '/matches?dateFrom=' + route.query.dateFrom + '&dateTo=' + route.query.dateTo, { headers: { 'X-Auth-Token': process.env.VUE_APP_TOKEN } });
            commit('SET_COMPETITIONS_MATCHES_TO_STATE', matches);
            return matches;
        } catch (error) {
            commit('SET_ERROR', error)
            return error;
        }
        },
    async GET_TEAMS_MATCHES_FROM_API({commit}, id){
        try {
            const matches = await axios.get(process.env.VUE_APP_URL + 'teams/' + id + '/matches', { headers: { 'X-Auth-Token': process.env.VUE_APP_TOKEN } });
            commit('SET_COMPETITIONS_MATCHES_TO_STATE', matches);
            return matches;
        } catch (error) {
            commit('SET_ERROR', error)
            return error;
        }
        },
    async GET_TEAMS_MATCHES_FROM_API_DATE({commit}, route){
        try {
            const matches = await axios.get(process.env.VUE_APP_URL + 'teams/' + route.query.team + '/matches?dateFrom=' + route.query.dateFrom + '&dateTo=' + route.query.dateTo, { headers: { 'X-Auth-Token': process.env.VUE_APP_TOKEN } });
            commit('SET_COMPETITIONS_MATCHES_TO_STATE', matches);
            return matches;
        } catch (error) {
            commit('SET_ERROR', error)
            return error;
        }
        }
    }
