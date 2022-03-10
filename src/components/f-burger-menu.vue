<template>
<div class='f-burger-menu'>
    <transition name="fade" mode="out-in">
        <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu">menu</i>
        <i class="material-icons clear" v-else @click="show = !show" key="clear">clear</i>
    </transition>
    <transition name="fade">
        <ul v-if="show">
            <li><router-link to="/competitions">Список лиг/соревнований</router-link></li>
            <li><router-link to="/teams">Список команд</router-link></li>
        </ul>
    </transition>
</div>
</template>

<script>

export default {
    name:'f-burger-menu',
    data(){
        return{
           show:false
        }
    },
    methods:{
        active(){

        }
    }
}
</script>

<style scoped>
a{
color:#fff;
transition: 0.5s linear;
text-decoration: none;
}

a:hover {
    color: #3791d6;
    
}

.f-burger-menu{
    background: #00508d;
    width: 100%;
    height: 35px;
    z-index: 100;
    
}
/* fallback */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v121/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  position: absolute;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 32px;
  color:#fff;
  cursor: pointer;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  margin-left: 10px;
  -webkit-font-smoothing: antialiased;
  z-index: 101;
}

ul{
    align-self: flex-start;
    background: #00508d;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    height: 92px;
    z-index: 100;
    min-width: 500px;
}

li{
    align-items: center;
    display:flex;
    justify-content: center;
    font-size: 20px;
    height: 45px;
    list-style-type: none;
}

</style>