
function MostrarClientes(){
  document.getElementById('admin-section').style.display = 'none'; // Ocultar la sección de administradores
  document.querySelector('.main').style.display = 'none'; // Mostrar la sección principal
  document.getElementById('docente-section').style.display ='none';
  document.getElementById('client-section').style.display = 'block';
  document.getElementById('certificado-section').style.display='none';
  document.getElementById('pago-section').style.display='none';
  document.getElementById('estadisticas').style.display='none';
  document.getElementById('container-recursos').style.display='none';
  document.getElementById('container-becas').style.display='none';



}

// Abrir modal docente 
function mostrarmodalcliente(){
  document.getElementById('modal-cliente').style.display = "block";
}

// Cerrar modal docente
function cerrarmodalcliente(){
  document.getElementById('modal-cliente').style.display = "none";
}

// Función para enviar el formulario cliente
document.getElementById('adminForm-cliente').addEventListener('submit', function(event) {
event.preventDefault();
  alert('Nuevo cliente guardado');
  cerrarmodalcliente();
});

//Variable para llevar el control del ID secuencial
let adminIdCountercliente = 1;
//let editingRow = null; // Variable para saber si estás editando una fila existente

//Función para agregar un nuevo cliente a la tabla
function agregarcliente() {
  const nombre = document.getElementById('nombre-cliente').value;
  const apellido = document.getElementById('apellido-cliente').value;
  const correo = document.getElementById('correo-cliente').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento-cliente').value;
  const dni = document.getElementById('dni-cliente').value;

  if (!nombre || !apellido || !correo || !fechaNacimiento || !dni) {
      alert("Por favor, complete todos los campos.");
      return;
  }

  if (editingRow) {
      // Si hay una fila en edición, actualiza sus datos
      editingRow.cells[1].textContent = nombre;
     editingRow.cells[2].textContent = apellido;
      editingRow.cells[3].textContent = correo;
      editingRow.cells[4].textContent = fechaNacimiento;
      editingRow.cells[5].textContent = dni;
      editingRow = null;
  } else {
      const table = document.getElementById('clientTable').getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();

      const idCell = newRow.insertCell(0);
      const nombreCell = newRow.insertCell(1);
      const apellidoCell = newRow.insertCell(2);
      const correoCell = newRow.insertCell(3);
      const fechaCell = newRow.insertCell(4);
      const dniCell = newRow.insertCell(5);
      const accionesCell = newRow.insertCell(6);

      idCell.textContent = adminIdCountercliente++;
      nombreCell.textContent = nombre;
      apellidoCell.textContent = apellido;
      correoCell.textContent = correo;
      fechaCell.textContent = fechaNacimiento;
      dniCell.textContent = dni;

      accionesCell.innerHTML = `
          <button class="btn-ver-cliente" onclick="vercliente(this)">Ver</button>
          <button class="btn-editar-cliente" onclick="editarcliente(this)">Editar</button>
         <button class="btn-eliminar-cliente" onclick="eliminarcliente(this)">Eliminar</button>
      `;

      document.getElementById('adminForm-cliente').reset();
      cerrarmodalcliente();
  }
}

//Función para ver el detalle del cliente
function vercliente(button) {
  const row = button.parentNode.parentNode;
  const nombre = row.cells[1].textContent;
  const apellido = row.cells[2].textContent;
  const correo = row.cells[3].textContent;
  const fechaNacimiento = row.cells[4].textContent;
  const dni = row.cells[5].textContent;

  alert(`Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nFecha de Nacimiento: ${fechaNacimiento}\nDNI: ${dni}`);
}

 //Función para editar el cliente
function editarcliente(button) {
  editingRow = button.parentNode.parentNode;

  document.getElementById('nombre-cliente').value = editingRow.cells[1].textContent;
  document.getElementById('apellido-cliente').value = editingRow.cells[2].textContent;
  document.getElementById('correo-cliente').value = editingRow.cells[3].textContent;
  document.getElementById('fechaNacimiento-cliente').value = editingRow.cells[4].textContent;
  document.getElementById('dni-cliente').value = editingRow.cells[5].textContent;

  mostrarmodalcliente();
}

// Función para eliminar cliente
function eliminarcliente(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

