<div align="center">

# 🚖 Cierre de Turno

![Version](https://img.shields.io/badge/version-1.1.0-blue)
![Estado](https://img.shields.io/badge/estado-activo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![jsPDF](https://img.shields.io/badge/jsPDF-2.5.1-red)
![Dependencias](https://img.shields.io/badge/dependencias-1-blue)
![Tamaño](https://img.shields.io/github/repo-size/psbella/cierre_remis)
[![Licencia](https://img.shields.io/badge/licencia-MIT-green)](https://opensource.org/licenses/MIT)

</div>
Aplicación web para liquidación de cierre de turno de remises/taxis. Calcula automáticamente la división de ganancias entre el titular y el chofer según las reglas del negocio.

## Versiones disponibles

| Versión | Tipo | Enlace |
|---------|------|--------|
| v1.0.0 | Monolítica (un solo archivo) | [https://psbella.github.io/cierre_remis/](https://psbella.github.io/cierre_remis/) |
| v1.1.0 | Modular (archivos separados) | [https://psbella.github.io/cierre_remis/v1.1.0/](https://psbella.github.io/cierre_remis/v1.1.0/) |


## 📱 Características

- **Cálculo automático** mientras completás los datos
- **División 50/50** con reglas específicas para titular y chofer
- **Desglose completo** paso a paso del cálculo
- **Estadísticas** (promedio por viaje y por kilómetro)
- **Exportación a PDF** con formato tabla
- **Compartir por WhatsApp** con mensaje preformateado
- **Enviar por Email** con todos los datos
- **Campo de notas** para observaciones
- **Diseño responsive** (funciona en celular y PC)
- **Navegación con Enter** (en PC)
- **Teclado numérico** en celulares

## 🧮 Fórmulas de cálculo

### Paso a paso

1. **Base 50%** = (Recaudación - Combustible) / 2
2. **TOTAL TITULAR** = Base 50% + Frecuencia - (Tarjeta/QR + Voucher + Token + Cuenta Corriente + Gastos)
3. **TOTAL CHOFER** = Base 50% - Frecuencia

### Promedios

- **Promedio por viaje** = Recaudación / Cantidad de viajes
- **Promedio por kilómetro** = Recaudación / Kilómetros recorridos

## 📋 Datos que se ingresan

| Campo | Descripción |
|-------|-------------|
| Fecha | Fecha del turno |
| Licencia | Número de licencia del chofer |
| Chofer | Nombre del conductor |
| Cantidad de viajes | Total de viajes realizados |
| Kilómetros recorridos | Kilómetros totales del turno |
| Recaudación | Total de dinero recaudado |
| Combustible | Gasto en combustible |
| Frecuencia | Peajes o comisiones por viajes frecuentes |
| Tarjeta / QR | Pagos con débito/crédito/QR |
| Voucher | Pagos con vale o comprobante |
| Token | Pagos con token electrónico |
| Cuenta Corriente | Pagos de clientes a cuenta corriente |
| Gastos | Lavado, taller, multas, etc. |
| Notas | Observaciones adicionales |

## 🚀 Cómo usarlo

### Opción 1: Web (recomendada)

1. Abrir en cualquier navegador: [https://psbella.github.io/cierre_remis/](https://psbella.github.io/cierre_remis/)
2. Completar los datos del turno
3. Los resultados se actualizan automáticamente
4. Exportar a PDF, compartir por WhatsApp o enviar por email

### Opción 2: Local

1. Descargar el archivo `index.html`
2. Abrirlo con cualquier navegador (Chrome, Firefox, Safari, Edge)
3. No requiere internet (excepto para compartir)

### Opción 3: Convertir a app

Se puede convertir a APK usando servicios como:
- [html-to-apk.fast-page.org](https://html-to-apk.fast-page.org)
- [Nitron](https://github.com/nitronjs/nitron)

## 📂 Estructura del proyecto

```cierre_remis/v1.1.0/
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── utils.js
    ├── calculations.js
    ├── pdf.js
    ├── share.js
    └── main.js
```


## 🖥️ Navegación con Enter (PC)

En computadora, podés presionar **Enter** para saltar automáticamente al siguiente campo, agilizando la carga de datos.

## 📱 Versión mobile

- Teclado numérico en campos de números
- Diseño adaptado a pantallas pequeñas
- Botones optimizados para toque

## 📄 Ejemplo de PDF generado

El PDF incluye:

*Ejemplo de mensaje compartido (WhatsApp/Email)*

| CIERRE DE TURNO |
|:---:|
| Liquidacion para chofer y titular |

## DATOS DEL TURNO

| Campo | Valor |
|-------|-------|
| Fecha | 03/05/2026 |
| Licencia | 317 |
| Chofer | 3009 |

## MOVIMIENTOS

| Concepto | Valor |
|----------|-------|
| Cantidad de viajes | 14 |
| Kilometros recorridos | 155 |
| Recaudacion | $ 146.000 |
| Combustible | $ 19.800 |
| Frecuencia | $ 1.300 |
| Tarjeta / QR | $ 21.100 |
| Voucher | $ 3.600 |
| Token | $ 0 |
| Cuenta Corriente | $ 0 |
| Gastos | $ 4.000 |

## RESULTADOS

| Concepto | Valor |
|----------|-------|
| TITULAR | $ 35.700 |
| CHOFER | $ 61.800 |

## PROMEDIOS

| Concepto | Valor |
|----------|-------|
| Promedio por viaje | $ 10.429 |
| Promedio por kilometro | $ 942 |

## DESGLOSE TITULAR

| Concepto | Valor |
|----------|-------|
| Total (Recaudacion) | $ 146.000 |
| Combustible | - $ 19.800 |
| Subtotal | $ 126.200 |
| 50% | $ 63.100 |
| Frecuencia | + $ 1.300 |
| Sub total | $ 64.400 |
| Tarjeta/QR | - $ 21.100 |
| Voucher | - $ 3.600 |
| Token | - $ 0 |
| Cuenta Corriente | - $ 0 |
| Gastos | - $ 4.000 |
| TOTAL TITULAR | $ 35.700 |

## DESGLOSE CHOFER

| Concepto | Valor |
|----------|-------|
| Base 50% | $ 63.100 |
| Frecuencia | - $ 1.300 |
| TOTAL CHOFER | $ 61.800 |

## NOTAS U OBSERVACIONES

| Nota |
|------|
| viaje de cordoba 2600 debe 1300 |

## FORMULA APLICADA

| Formula |
|---------|
| (Recaudacion - Combustible) / 2 = Base 50% |
| Titular = Base + Frecuencia - (Tarjeta/QR + Voucher + Token + Cta Cte + Gastos) |
| Chofer = Base - Frecuencia |

## 👨‍💻 Desarrollador

**Pablo Bella**

- Email: [Pablo.s.bella@gmail.com](mailto:Pablo.s.bella@gmail.com)
- GitHub: [psbella](https://github.com/psbella)

## 📝 Licencia

Este proyecto es de uso libre para la comunidad de remiseros y taxistas.

## 🙏 Agradecimientos

A todos los choferes que compartieron su experiencia y necesidades para hacer esta herramienta más útil.

---

*Última actualización: Mayo 2026*
