<template>
<div class="f-competition-item" @click="competitionClick">
        {{ competition_data.name}} 
    </div>
</template>

<script>

export default {
    
    name: 'f-competition-item',
    props: {
        competition_data: {
            default(){
                return {}
            }
        }
    },
    data(){
        return {}
    },
    methods:{
        competitionClick(){
            this.$emit('competitionClick', this.competition_data.id)
        }
    }

}
</script>

<style scoped>
.f-competition-item{
    position: relative;
    border: 1px solid #000000;
    background: #ffffff;
    color: #000000;
    font-size: 15px;
    padding:12px 16px 12px 16px;
    font-family: 'Montserrat Alternates', sans-serif;
    cursor:pointer;
}
.f-competition-item:hover{
   background: #d1d1d1;
}
</style>