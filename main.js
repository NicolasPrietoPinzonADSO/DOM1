addEventListener("DOMContentLoaded", (e) =>{
    let horaTrabajada = document.querySelector('#horaTrabajada')
    let pago = document.querySelector('#pago')
    horaTrabajada.addEventListener('submit', (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
        let valorHora = 5208.33
        let hora = dataInput.hora
        hora *= valorHora
        pago.innerHTML = 'Su pago es de '+ hora;
        let myStyle = {
            opacity: 1,
            transition: "all 0.5s"
        }
        Object.assign(document.querySelector("#pago").style, myStyle);
    })
})

