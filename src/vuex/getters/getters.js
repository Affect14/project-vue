export default{
    IS_MOBILE(state){
        return state.isMobile
    },
    IS_DESKTOP(state){
        return state.isDesktop
    },
    SEARCH_VALUE(state){
        return state.searchValue
    },
    COMPETITIONS(state){
        return state.competitions
    },
    TEAMS(state){
        return state.teams
    },
    MATCHES(state){
        return state.matches
    },
    ERROR_STATE(state){
        return state.error
    }
}