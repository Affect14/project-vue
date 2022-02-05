import Vue from 'vue'
import Router from 'vue-router'

import fCompetitions from '../components/competitions/f-competitions'
import fTeams from '../components/teams/f-teams'
import fCompetitionCalendar from '../components/competitions/f-competition-calendar'
import fTeamCalendar from '../components/teams/f-team-calendar'
import f404 from '../components/f-404'

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path:'*',
            component: f404
        },
        {
            path: '/',
            redirect: '/competitions'
        },
        {
            path: '/competitions',
            name: 'competitions',
            component: fCompetitions
        },
        {
            path: '/teams',
            name: 'teams',
            component: fTeams
        },
        {
            path: '/competition',
            name: 'competition',
            component: fCompetitionCalendar,
        },
        {
            path: '/team',
            name: 'team',
            component: fTeamCalendar
        }
]
})

export default router;