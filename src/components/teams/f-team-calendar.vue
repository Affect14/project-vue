<template>
    <div class="f-team-calendar">
       <div class='team'> <img :src="team.crestUrl" /> {{ team.name }} </div>
       Дата от:
            <input 
                type="date" 
                v-model="dateFromValue"/>
        Дата до:
            <input 
                type="date"
                v-model="dateToValue"/>
            <button @click='link'><i class="fa fa-search"></i></button>
             <f-error-notification v-if='errorState'/>
        <table v-else>
            <thead>
            <th>Status</th>
            <th>Date</th>
            <th>Home team </th>
            <th>Away team </th>
            <th>Score </th>
            </thead>
            <tbody>
        <f-teams-matches
            v-for="match in MATCHES"
            :key="match.id"
            :matches_data="match" />
            </tbody>
        </table>
    </div> 
</template>

<script>

import fTeamsMatches from './f-teams-matches.vue'
import {mapActions,mapGetters} from 'vuex'
import fErrorNotification from '../f-error-notification.vue'

export default {
    name: 'f-team-calendar',
    components:{
        fTeamsMatches,
        fErrorNotification
    },

    data(){
        return {
            dateFromValue: '',
            dateToValue: '',
        }
     },

    computed:{    
        ...mapGetters([
            'TEAMS',
            'MATCHES'
        ]),

        errorState(){
            return this.ERROR_STATE
        },

        team() {
            let result = {}
            let vm = this;
            this.TEAMS.map(function(item){
                if (item.id == vm.$route.query.team){
                    result = item
                }
            })
            return result
        }
    },

     methods:{
        ...mapActions([
            'GET_TEAMS_FROM_API',
            'GET_TEAMS_MATCHES_FROM_API',
            'GET_TEAMS_MATCHES_FROM_API_DATE',
            'CLEAR_MATCHES',
            'CLEAR_ERROR'
        ]),
        link(){
             if (this.$route.query.dateFrom != this.dateFromValue 
                && this.$route.query.dateTo != this.dateToValue)
                {
            this.$router.push( {name:'team',
                                query: {'team': this.$route.query.team , 
                                        'dateFrom': this.dateFromValue, 
                                        'dateTo': this.dateToValue }})
            }
        }
        
    },

    watch:{
        $route: function (){
            this.GET_TEAMS_MATCHES_FROM_API_DATE(this.$route)
        }
    },
    
    mounted(){
        this.GET_TEAMS_FROM_API() 
        let vm = this
        if (this.$route.query.dateFrom && this.$route.query.dateTo){
            this.GET_TEAMS_MATCHES_FROM_API_DATE(vm.$route)
        }
        else {this.GET_TEAMS_MATCHES_FROM_API(this.$route.query.team) }
        },

    beforeDestroy(){
        this.CLEAR_MATCHES()
        this.CLEAR_ERROR()
    }
}
</script>

<style scoped>
table{
     border-collapse: collapse;
     width: 100%;
 }
 thead{
     background-color: #00508d ;
     color: #fff;
 }

 tbody tr:nth-child(odd){
     background-color:  #C9E4F6;
 }
 tbody tr:nth-child(even){
     background-color:  #B4DAF2;
 }
 .inlineBox{
     display: inline-block;
 }
 .inputDate{
     display: block;
 }
 @media (min-width: 768px) {
    .f-team-calendar{
        margin-left: 20%;
        margin-right: 20%;
    }
    }

@media (max-width: 767px){
    .f-team-calendar{
        margin-left: 5%;
        margin-right: 5%;
    }
    }

.f-team-calendar{
    position: relative;
    border: 1px solid #000000;
    background: #ffffff;
    color: #000000;
    font-size: 15px;
    padding:12px 16px 12px 16px;
    font-family: 'Montserrat Alternates', sans-serif;
}
img{
    max-width: 80px;
    
}
.team{
    height: 100px;
    color:#ffffff;
    border: 1px solid #000000;
    margin-bottom: 10px;
    background-color: #3791d6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif; 
}



input[type=date] {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  border: 1px solid rgb(0, 0, 0);
  background: #ffffff;
}

button {
  margin-top: 10px;
  width: 50px;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; 
  cursor: pointer;
}

::after {
  content: "";
  clear: both;
  display: table;
}
</style>