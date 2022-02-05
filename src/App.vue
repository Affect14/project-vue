<template>
  <div id="app">
    <f-main-wrapper/>
  </div>
</template>

<script>
import fMainWrapper from './components/f-main-wrapper.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    fMainWrapper
  },
  data(){
    return{}
  },

  computed:{
    ...mapGetters([
      'IS_MOBILE',
      'IS_DESKTOP'
    ])
  },

  mounted(){ 
    this.sizeCheck()
    let vm = this
    window.addEventListener('resize', function () {
      if (window.innerWidth > 767){
          vm.SET_DESKTOP()
        } else {
          vm.SET_MOBILE()
        }
    })
    },
  
  methods:{
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ]),

    sizeCheck(){
      if (window.innerWidth > 767){
          this.SET_DESKTOP()
        } else {
          this.SET_MOBILE()
        }
   }
  },
  }

</script>

<style>
.body{
    background-color: #39383F;
}
</style>
