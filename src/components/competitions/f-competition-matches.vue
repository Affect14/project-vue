<template>
<tr class='f-competition-matches'>
     <td>{{ matches_data.status }} </td>
     <td>{{ matches_data.utcDate.substring(0,16).replace(/[A-Z]/gi,'  ') }} </td>
     <td>{{ matches_data.homeTeam.name }}</td>
     <td>{{ matches_data.awayTeam.name }}</td>
     <td>{{ matches_data.score.fullTime.homeTeam}}:{{ matches_data.score.fullTime.awayTeam}} </td>
</tr>
</template>

<script>
export default {
    name: 'f-competition-matches',
    props: {
        matches_data: {
            default(){
                return {}
            }
        }
    },
    
}
</script>

<style>
td{
    text-align: center;
    border: 1px solid #000;
}

</style>