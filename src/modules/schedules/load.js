import{hoursLoad} from '../form/hours-load.js'
import { schedulesShow } from '../schedules/show.js'
import{scheduleFetchByDay} from '../../services/schedule-fetch-by-day.js'
const selectedDate = document.getElementById('date')

export async function schedulesDay() {
    const date = selectedDate.value 

    //busca na api os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})

    //metodo para exibir os agendamentos
    schedulesShow({dailySchedules})
    //carrega as horas disponiveis
    hoursLoad({date})
}