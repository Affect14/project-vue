export default{
    SWITCH_MOBILE: (state) => {
        state.isMobile = true;
        state.isDesktop = false;
    },
    SWITCH_DESKTOP: (state) => {
        state.isDesktop = true;
        state.isMobile = false;
    },

    SET_SEARCH_VALUE: (state,value) =>{
        state.searchValue = value;
    },
    SET_COMPETITIONS_TO_STATE: (state, competitions) => {
        state.competitions = competitions.data.competitions;
    },
    SET_TEAMS_TO_STATE: (state,teams) => {
        state.teams = teams.data.teams;
    },
    SET_COMPETITIONS_MATCHES_TO_STATE: (state,matches) => {
        state.matches = matches.data.matches;
    },
    CLEAR_SEARCH_VALUE: (state) =>{
        state.searchValue = '';
    },
    CLEAR_MATCHES: (state) =>{
        state.matches=[];
    },
    SET_ERROR:(state, is) => {
        state.error = is;
    }
}