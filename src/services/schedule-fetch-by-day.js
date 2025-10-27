import dayjs from 'dayjs';
import{apiConfig} from '../config/api-config.js'

export async function SchedulesFetchByDay(date) {

    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`);
        const data = await response.json();
        //filtrando os agendamenstos pelos dias selecionado
        const dailySchedules = data.filter((schedule) => 
            dayjs(date).isSame(schedule.when, 'day')
        )
    } catch (error) {
        console.log(error)
        alert("Erro ao buscar agendamentos: " )
        
    }
}