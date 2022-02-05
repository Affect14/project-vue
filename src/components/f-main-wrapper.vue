<template>
    <div class='f-main-wrapper'>
        <f-header v-if="IS_DESKTOP"/>
        <f-burger-menu v-else/>
        <router-view></router-view>
    </div>
</template>

<script>
import fHeader from './f-header.vue'
import fBurgerMenu from './f-burger-menu.vue'
import { mapGetters } from 'vuex'
export default {
    name:'f-main-wrapper',
    components:{
        fHeader,
        fBurgerMenu
    },
    props:{
        isShow:{
            type: Boolean,
            default: false
        }
    },

    data(){
        return {
        }
    },

    computed: {
        ...mapGetters([
            'IS_MOBILE',
            'IS_DESKTOP'
        ])
    },
    methods: {},
    watch: {},
}
</script>

<style>
</style>
