<template>
    <div class="f-header">
         <div class="header__section">
             <img src="../assets/1xVueLogo.png" />
                 <div class="header__item headerButton">
                     <router-link to="/competitions">Список лиг/соревнований</router-link>
                 </div>
                 <div class="header__item headerButton">
                    <router-link to="/teams">Список команд</router-link></div>
         </div>
     </div>
</template>

<script>
export default {
    name:'f-header'
}
</script>

<style scoped>
  a {
    color: #ffffff;
    text-decoration: none;
    
}
.f-header {
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 10px;
    margin:10px 0 10px 8px;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    background-color: #0c314d;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif; 
    
}

.header__section {
    display: flex;
    flex-direction:row;
    position:center;
}

.header__item {
    padding: 10px 15px;
    font-size: 20px;
    margin-left: 5px;
    
}
a{
color:#fff;
transition: 0.5s linear;
}

a:hover {
    color: #3791d6;
    
}

img{
    width: 50px;
    height: 45px;
}
</style>