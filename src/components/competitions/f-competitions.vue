<template>
    <div class="f-competitions">
        <f-search-competition />
        <f-error-notification v-if='errorState'/>
        <div v-else>
        <f-competition-item 
            v-for="competition in filteredCompetitions"
            :key="competition.id"
            :competition_data="competition"
            @competitionClick="competitionClick"
        />
        </div>
    </div>
</template>

<script>
import fCompetitionItem from './f-competition-item.vue'
import fSearchCompetition from './f-search-competition.vue'
import {mapActions, mapGetters} from 'vuex'
import fErrorNotification from '../f-error-notification.vue'

export default {
    name: 'f-competitions',
    components: {
        fCompetitionItem,
        fSearchCompetition,
        fErrorNotification
        
    },
    data(){
        return {
            filterCompetitions: []
        }
    },
    computed:{
        ...mapGetters([
            'COMPETITIONS',
            'SEARCH_VALUE',
            'MATCHES',
            'ERROR_STATE'
        ]),

        errorState(){
            return this.ERROR_STATE
        },
        
        filteredCompetitions(){
            if (this.filterCompetitions.length){
                return this.filterCompetitions
            }
            else{
                return this.COMPETITIONS
            }
        }
    },
    methods: {
        ...mapActions([
            'GET_COMPETITIONS_FROM_API',
            'GET_SEARCH_VALUE',
            'GET_COMPETITIONS_MATCHES_FROM_API',
            'CLEAR_SEARCH_VALUE',
            'CLEAR_ERROR'
        ]),

        competitionClick(id){ 
            this.$router.push( {name:'competition',query: {'competition': id }})
        },
        
        searchCompetitions(value){
            if (value) {
                this.filterCompetitions = this.COMPETITIONS.filter(function (item){
                    return item.name.toLowerCase().includes(value.toLowerCase())
                })
            } else {
                this.filterCompetitions = this.COMPETITIONS
            }
    }
    },

    watch:{
        SEARCH_VALUE() {
            this.searchCompetitions(this.SEARCH_VALUE)
        }
    },

    mounted() {
        this.GET_COMPETITIONS_FROM_API()   
    },
    
    beforeDestroy() {
        this.CLEAR_SEARCH_VALUE()
        this.CLEAR_ERROR()
    }
}
</script>

<style scoped>
    @media (min-width: 768px) {
    .f-competitions{
        margin-left: 20%;
        margin-right: 20%;
    }
    }
    @media (max-width: 767px){
    .f-competitions{
        margin-left: 5%;
        margin-right: 5%;
    }
    }
</style>