<template>
    <div class='f-error-notification'>
        <img src='../assets/error.gif'/>
           <p>Произошла ошибка при загрузке данных.
            <br> {{ errorInfo }} </p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'f-error-notification',
    computed:{
         ...mapGetters([
            'ERROR_STATE'
        ]),

        errorInfo(){
            return this.ERROR_STATE
        }
    }
}
</script>

<style scoped>
.f-error-notification{
    padding:0 10px 10px 0;
    text-align: center;
    color:rgb(155, 0, 0);
    font-weight: bold;
    background-color: #fff;
}
img{
    width: 20%;
    height: 20%;
    margin: 10px;
}
</style>