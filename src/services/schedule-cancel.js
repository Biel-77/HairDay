import {apiConfig} from '../config/api.js'

export async function scheduleCancel(id){
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`,{
            method: 'DELETE',
        })
        alert("Agendamento cancelado com sucesso.")
    } catch (error) {
        alert("Não foi possível cancelar o agendamento.")
    }

}