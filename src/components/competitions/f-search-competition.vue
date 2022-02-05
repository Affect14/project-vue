<template>
    <div class="f-search-competition">

            <input 
                    type="text"
                    placeholder="Поиск лиги" 
                    v-model="searchValue">
            <button @click='search(searchValue)'><i class="fa fa-search"></i></button>

    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'f-search-competition',
    props: {},
    data() {
        return {
            searchValue: ''
        }
    },
    computed: {
      ...mapGetters([
          "SEARCH_VALUE"
      ])
    },

    methods:{
    ...mapActions([
        'GET_SEARCH_VALUE'

    ]),
        search(searchValue){
            this.GET_SEARCH_VALUE(searchValue);
        }
    }
}
</script>

<style scoped>
b* {
  box-sizing: border-box;
}


 input[type=text] {
  padding: 10px;
  width: 30%;
  margin-top: 10px;
  margin-bottom: 16px;
  font-size: 17px;
  border: 1px solid rgb(0, 0, 0);
  float: left;
  background: #ffffff;
}


 button {
  float: left;
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

 button:hover {
  background: #0b7dda;
}


::after {
  content: "";
  clear: both;
  display: table;
}
</style>