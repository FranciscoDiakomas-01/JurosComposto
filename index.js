//pegando as variáveis

const BTNCalcular = document.querySelector("button")

BTNCalcular.addEventListener("click",(e)=>{
    e.preventDefault()
    
    //pegando os dados

    let capital = document.getElementById("capital")
    let taxa = document.getElementById("taxa")
    let mes = document.getElementById("mes")
    let span = document.querySelector("span")

    //validando

    if(!capital.value || !taxa.value || !mes.value){
        alert("Informa todos os valores!")
        return
    }
    else if(!isNaN(capital.value) && !isNaN(mes.value) && !isNaN(taxa.value)){
        let montante = capital.value
        let juros = taxa.value / 100
        let tempo = mes.value

        const JUROSCOMPOSTo = montante * (1 + juros) ** tempo
        span.textContent = `AOA ${JUROSCOMPOSTo.toFixed(2)}`
        return
    }else{
        alert("Todos Devem ser númericos")
        return
    }
})