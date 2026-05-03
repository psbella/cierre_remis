/* ============================================= */
/* LOGICA PRINCIPAL                              */
/* ============================================= */

function actualizarPantalla() {
    const r = calcularTodo();
    const elementos = obtenerElementosDOM();
    const detalle = obtenerElementosDetalle();
    
    // Actualizar resultados principales
    elementos.totalTitular.textContent = formatearPesos(r.totalTitular);
    elementos.totalChofer.textContent = formatearPesos(r.totalChofer);
    elementos.promedioViaje.textContent = formatearPesos(r.promedioViaje);
    elementos.promedioKm.textContent = formatearPesos(r.promedioKm);
    
    // Actualizar detalle TITULAR
    detalle.detTotal.textContent = formatearPesos(r.recaudacion);
    detalle.detCombustible.textContent = formatearPesos(r.combustible);
    detalle.detSubtotal1.textContent = formatearPesos(r.despuesCombustible);
    detalle.det50.textContent = formatearPesos(r.base50);
    detalle.detFrecuencia.textContent = formatearPesos(r.frecuencia);
    detalle.detSubtotal2.textContent = formatearPesos(r.base50 + r.frecuencia);
    detalle.detTarjeta.textContent = formatearPesos(r.tarjetaQr);
    detalle.detVoucher.textContent = formatearPesos(r.voucher);
    detalle.detToken.textContent = formatearPesos(r.token);
    detalle.detCtaCte.textContent = formatearPesos(r.cuentaCorriente);
    detalle.detGastos.textContent = formatearPesos(r.gastos);
    detalle.detTotalTitular.textContent = formatearPesos(r.totalTitular);
    
    // Actualizar detalle CHOFER
    detalle.detChoferBase.textContent = formatearPesos(r.base50);
    detalle.detChoferFrecuencia.textContent = formatearPesos(r.frecuencia);
    detalle.detTotal
