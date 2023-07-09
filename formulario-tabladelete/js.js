var row = "";
var id = 1; // Variable para contar el número de filas

function add() {
  const q = document.getElementById("nombre");
  const w = document.getElementById("apellido");
  const add = document.getElementById("add");

  // Generar un ID único utilizando un contador
  var Id = id;
  id++; // Incrementar el contador de ID

  row += `<tr id="row-${Id}">
      <td>${Id}</td>
      <td>${q.value}</td>
      <td>${w.value}</td>
      <td><button class="btn btn-danger m-2" onclick="eliminar(${Id})">Eliminar</button></td>
    </tr>`;

  add.innerHTML = row;

  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
}

function eliminar(uniqueId) {
    const row = document.getElementById(`row-${uniqueId}`);
    if (row) {
      row.remove(); // Eliminar la fila correspondiente
  
      // Obtener todas las filas restantes
      const filas = document.querySelectorAll("#add tr");
  
      // Actualizar los ID de las filas restantes
      filas.forEach((fila, index) => {
        const filaId = fila.getAttribute("id");
        if (filaId) {
          const nuevoId = index + 1;
          fila.setAttribute("id", `row-${nuevoId}`);
          fila.querySelector("td:first-child").textContent = nuevoId;
        }
      });
    }
  }
  