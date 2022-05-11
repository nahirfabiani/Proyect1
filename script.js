function calcular() {
    var cantidad = document.getElementById("cantidad").value;
    var select = document.getElementById('categoria');

    var valorselect = select.options[select.selectedIndex].value;    
    var valor=0;

    switch(valorselect) {
		
        case "1": 
            valor = 200*0.20;
            break;
        case "2": 
            valor = 200*0.50;
            break;
        case "3":
            valor = 200*0.85;
            break;

        default:
            valor = 0;
            break;
    }
    var total = cantidad*valor;

    document.getElementById("total").value = "Total a Pagar: $"+total;

}

function limpiar() {
    document.getElementById("total").value = "Total a Pagar: $"
}