// import { Chart } from 'chart.js';
// import { jsPDF } from 'jspdf';
// import htmx from 'htmx.org/dist/htmx.min.js';

// const ConsumoMensual = () => {
//   const [totalConsumo, setTotalConsumo] = useState(0);

//   const editarFila = (event) => {
//     const fila = event.target.closest('tr');
//     const celdas = fila.querySelectorAll('td:not(:last-child):not(:first-child):not(:nth-child(4))');

//     celdas.forEach(celda => {
//       celda.contentEditable = "true";
//       celda.style.backgroundColor = '#dfdfdf';
//     });
//   };

//   const guardarEdicion = (event) => {
//     const fila = event.target.closest('tr');
//     const consumoCelda = fila.querySelector('td:nth-child(2)');
//     const consumo = parseFloat(consumoCelda.textContent) || 0;

//     const dispositivosCelda = fila.querySelector('td:nth-child(3)');
//     const dispositivos = dispositivosCelda.textContent.trim();

//     setTotalConsumo(prevTotal => prevTotal + consumo);

//     const celdas = fila.querySelectorAll('td');
//     celdas.forEach(celda => {
//       celda.contentEditable = "false";
//       celda.style.backgroundColor = '#fff';
//     });

//     const celdaFecha = fila.querySelector('td:nth-child(4)');
//     const fecha = celdaFecha.innerHTML;

//     const url = `/ingresarFila?cantidad=${consumo}&dispositivos=${dispositivos}&fecha=${fecha}`;
//     fetch(url)
//       .then(response => {
//         if (response.ok) {
//           console.log('Todo ok! xd');
//         } else {
//           console.error('Error al ingresar la fila:', response.statusText);
//         }
//       })
//       .catch(error => {
//         console.error('Error en la solicitud:', error);
//       });
//   };

//   const actualizarTotalConsumo = () => {
//     const filas = document.querySelectorAll('#table tbody tr');
//     let total = 0;

//     filas.forEach(fila => {
//       const consumoCelda = fila.querySelector('td:nth-child(2)');
//       const consumo = parseFloat(consumoCelda.textContent) || 0;
//       total += consumo;
//     });

//     setTotalConsumo(total);
//   };

//   const generarPDF = () => {
//     const doc = new jsPDF();

//     doc.text('Gráficos de consumo mensual', 10, 10);

//     const canvasLineas = document.createElement('canvas');
//     canvasLineas.width = 400;
//     canvasLineas.height = 200;
//     const ctxLineas = canvasLineas.getContext('2d');

//     const datosLineas = {
//       labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
//       datasets: [{
//         label: 'Consumo mensual (kWh)',
//         data: [50, 60, 70, 65, 80, 75],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1
//       }]
//     };

//     new Chart(ctxLineas, {
//       type: 'line',
//       data: datosLineas,
//       options: {}
//     });

//     const imgDataLineas = canvasLineas.toDataURL('image/png');
//     doc.addImage(imgDataLineas, 'PNG', 10, 20, 200, 100);

//     const canvasBarras = document.createElement('canvas');
//     canvasBarras.width = 400;
//     canvasBarras.height = 200;
//     const ctxBarras = canvasBarras.getContext('2d');

//     const datosBarras = {
//       labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
//       datasets: [{
//         label: 'Consumo mensual (kWh)',
//         data: [50, 60, 70, 65, 80, 75],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1
//       }]
//     };

//     new Chart(ctxBarras, {
//       type: 'bar',
//       data: datosBarras,
//       options: {}
//     });

//     const imgDataBarras = canvasBarras.toDataURL('image/png');
//     doc.addImage(imgDataBarras, 'PNG', 10, 130, 200, 100);

//     doc.text(`Consumo total: ${totalConsumo.toFixed(2)} kWh`, 10, 250);

//     doc.save('consumo_mensual.pdf');
//   };

//   const limpiarTabla = () => {
//     const filas = document.querySelectorAll('#table tbody tr');

//     filas.forEach(fila => {
//       const celdas = fila.querySelectorAll('td:not(:first-child):not(:last-child)');
//       celdas.forEach((celda) => {
//         celda.textContent = '';
//       });
//     });
//     setTotalConsumo(0);
//   };

//   useEffect(() => {
//     setTimeout(actualizarTotalConsumo, 500);
//   }, []);
import './../css/global.css'
import './../css/Table.css'

const list = ["Dia", "Consumo", "Dispositivos", "Fecha", "Acciones"];
const fila = []

for (let index = 1; index < 31; index++) {
  fila.push(index)
}

let date = new Date();
let month = (date.getMonth().toString().length < 2) ? `0${date.getMonth()+1}` : date.getMonth()+1;


export function Table() {
  return (
    <div id='container'>
      {/* <div data-hx-get="/nav" data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-target="this"></div> */}
      <main>
        <header>
          <h1>Consumo mensual</h1>
        </header>
        <section>
          <table id="table">
            <thead>
              <tr>
                {list.map(item => (
                  <th> {item} </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fila.map(dia => (
                <tr>
                  <td>{dia}</td>
                  <td></td>
                  <td></td>
                  <td>
                    {
                    ((dia.toString().length < 2) ? `0${dia}` : dia) + '/' + month + '/' + date.getFullYear()
                    }
                  </td>
                  <td>
                    <button>Editar</button>
                    <button>Guardar</button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tbody data-hx-get="/datosTabla" data-hx-trigger="load">

            </tbody> */}
          </table>
        </section>
        {/* <section>
          <h2 id="totalConsumo">Total: {totalConsumo.toFixed(2)} kWh</h2>
          <button onClick={limpiarTabla}>Limpiar</button>
          { <button onClick={generarPDF}>PDF</button>
          <button onClick={enviarTabla}>Enviar</button> }
        </section> */}
      </main>
    </div>
  );
}
// };

// export default ConsumoMensual;
