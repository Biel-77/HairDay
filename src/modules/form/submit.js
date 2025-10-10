import dayjs from "dayjs"

const form = document.querySelector('form')
const selectedDate = document.getElementById("date")

//data arual para o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

//carrega a data atuale define a data minima sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

//previne o comportamento padrao do formulario de carregar a pagina 
form.onsubmit = (event) => {
    event.preventDefault()
    console.log("enviado!   ")

}
