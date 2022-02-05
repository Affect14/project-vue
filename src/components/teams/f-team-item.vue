<template>
    <div class="f-team-item" @click='teamClick'>
        <img :src="team_data.crestUrl" /> {{ team_data.name }}
    </div>
</template>

<script>
export default {
    name: 'f-team-item',
    props: {
        team_data: {
            default(){
                return {}
            }
        }
    },
    data(){
        return {}
    },
    methods:{
        teamClick(){
            this.$emit('teamClick', this.team_data.id)
        }
    }
}
</script>

<style scoped>
.f-team-item{
    display: flex;
    align-content: center;
    top: 50%;
    border: 1px solid #000000;
    background: #ffffff;
    color: #000000;
    vertical-align: center;
    font-size: 15px;
    padding:12px 16px 12px 16px;
    font-family: 'Montserrat Alternates', sans-serif;
    cursor:pointer;
}
.f-team-item:hover{
    background: #d1d1d1;
}
img{
    width: 20px;
    margin-right:10px;
}
</style>