<template>
    <tr>
        <td>{{ matches_data.status }}</td>
        <td>{{ matches_data.utcDate.substring(0,16).replace(/[A-Z]/gi,'  ') }} </td>
        <td>{{ matches_data.homeTeam.name }} </td>
        <td>{{ matches_data.awayTeam.name }} </td>
        <td>{{ matches_data.score.fullTime.homeTeam}}:{{ matches_data.score.fullTime.awayTeam}} </td>
    </tr>
</template>

<script>
export default {
    name: 'f-teams-matches',
    props: {
        matches_data: {
            default(){
                return {}
            }
        }
    },
}
</script>

<style scoped>
.f-teams-matches{
    position: relative;
    border: 1px solid #000000;
    background: #ffffff;
    color: #000000;
    font-size: 15px;
    padding:12px 16px 12px 16px;
    font-family: 'Montserrat Alternates', sans-serif;
    cursor:pointer;
}
</style>