<template>
        <div class="f-teams">
        <f-search-team />
        <f-error-notification v-if='errorState'/>
        <div v-else>
        <f-team-item
            v-for="team in filteredTeams"
            :key="team.id"
            v-bind:team_data="team"
            @teamClick="teamClick"       
        />
        </div>
    </div>
</template>

<script>
import fTeamItem from './f-team-item.vue'
import fSearchTeam from './f-search-team.vue'
import {mapActions, mapGetters} from 'vuex'
import fErrorNotification from '../f-error-notification.vue'


export default {
    name: 'f-teams',
    components:{
        fTeamItem,
        fSearchTeam,
        fErrorNotification
    },
    data(){
        return {
            filterTeams: []
        }
    },
    computed:{
         ...mapGetters([
            'TEAMS',
            'SEARCH_VALUE',
            'ERROR_STATE'
        ]),
        
        filteredTeams(){
            if (this.filterTeams.length){
                return this.filterTeams
            }
            else{
                return this.TEAMS
            }
        },
        errorState(){
            return this.ERROR_STATE
        },
    },
    methods: {
        ...mapActions([
            'GET_TEAMS_FROM_API',
            'GET_SEARCH_VALUE',
            'CLEAR_SEARCH_VALUE',
            'CLEAR_ERROR'
        ]),
        teamClick(id){ 
            this.$router.push( {name:'team', query: {'team': id }})
        },

        searchTeams(value){
            if (value) {
                this.filterTeams = this.TEAMS.filter(function (item){
                    return item.name.toLowerCase().includes(value.toLowerCase())
                    
                }) 
            } else {
                this.filterTeams = this.TEAMS
            }
    }
    },
     watch:{
        SEARCH_VALUE() {
            this.searchTeams(this.SEARCH_VALUE);
        }
    },
    mounted() {
        this.GET_TEAMS_FROM_API()
       
    },

    beforeDestroy() {
        this.CLEAR_SEARCH_VALUE()
        this.CLEAR_ERROR()
    }
}
</script>

<style scoped>
    @media (min-width: 768px) {
    .f-teams{
        margin-left: 20%;
        margin-right: 20%;
    }
    }
    @media (max-width: 767px){
    .f-teams{
        margin-left: 5%;
        margin-right: 5%;
    }
    }
</style>