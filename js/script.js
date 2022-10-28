
const btnPorcent = document.querySelectorAll(".btn-porcent")

const allInput = document.querySelectorAll(".ipt");



btnPorcent.forEach(btn => {
    

    btn.addEventListener("click", () =>{

        let valoresIpt = [];
        valoresIpt.push(parseFloat(allInput[0].value))
        valoresIpt.push(parseInt(allInput[1].value))

        getValoresIpt(valoresIpt)

    })
});


function getValoresIpt(valor){


    if(valor.includes(NaN)){
        alert("Complete los Campos Faltantes")
    }
}