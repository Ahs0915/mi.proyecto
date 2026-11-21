const btnPersonalizar = document.getElementById("btnPersonalizar");

btnPersonalizar.addEventListener("click", function () {
    const texto = document.getElementById("inputMensaje").value;
    document.getElementById("resMensaje").textContent = '"' + texto + '"';
});
document.addEventListener("DOMContentLoaded", function() {

    // 1. COTIZADOR INTERACTIVO (Calcula el precio automático)
    const selectProducto = document.getElementById("selectProducto");
    const inputCantidad = document.getElementById("inputCantidad");
    const precioTotal = document.getElementById("precioTotal");

    function calcularTotal() {
        if (!selectProducto || !inputCantidad || !precioTotal) return;
        const precioUnitario = parseInt(selectProducto.value) || 0;
        const cantidad = parseInt(inputCantidad.value) || 1;
        const total = precioUnitario * cantidad;
        precioTotal.textContent = "$" + total.toLocaleString("es-CO");
    }

    if (selectProducto && inputCantidad) {
        selectProducto.addEventListener("change", calcularTotal);
        inputCantidad.addEventListener("input", calcularTotal);
    }

    // 2. BOTÓN DE CONFIRMAR RESERVA (Envía el pedido por WhatsApp)
    const btnConfirmar = document.getElementById("btnConfirmarPedido");

    if (btnConfirmar) {
        btnConfirmar.addEventListener("click", function() {
            if (!selectProducto || !inputCantidad || !precioTotal) return;

            const nombreProducto = selectProducto.options[selectProducto.selectedIndex].text;
            const cantidad = inputCantidad.value;
            const total = precioTotal.textContent;

            // REEMPLAZA ESTE NÚMERO por tu WhatsApp real
            const numeroWhatsApp = "573001234567"; 

            const textoMensaje = `¡Hola! Me gustaría confirmar el siguiente pedido en Maison Sucrée:%0A%0A* Producto: ${nombreProducto}%0A* Cantidad: ${cantidad}%0A* Total a pagar: ${total}%0A%0A¡Quedo atento(a)!`;

            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensaje}`;
            window.open(urlWhatsApp, '_blank');
        });
    }

});