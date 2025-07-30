// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


//Mostrar la sección de administradores
function mostrarAdministradores() {
    document.querySelector('.main').style.display = 'none'; // Ocultar la sección principal
    document.getElementById('admin-section').style.display = 'block'; // Mostrar la sección de administradores
    document.getElementById('client-section').style.display='none';
    document.getElementById('docente-section').style.display ='none';
    document.getElementById('certificado-section').style.display='none';
    document.getElementById('pago-section').style.display='none';
    document.getElementById('estadisticas').style.display='none';
    document.getElementById('container-recursos').style.display='none';
    document.getElementById('container-becas').style.display='none';

}

// Mostrar el tablero principal
function mostrarTablero() {
    document.getElementById('admin-section').style.display = 'none'; // Ocultar la sección de administradores
    document.querySelector('.main').style.display = 'block'; // Mostrar la sección principal
    document.getElementById('client-section').style.display='none';
    document.getElementById('docente-section').style.display ='none';
    document.getElementById('certificado-section').style.display='none';
    document.getElementById('pago-section').style.display='none';
    document.getElementById('estadisticas').style.display='none';
    document.getElementById('container-recursos').style.display='none';

}


// Abrir modal admnistrador
function mostrarModal() {
  document.getElementById('modal').style.display = 'block';
}

// Cerrar modal
function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

// Función para enviar el formulario
document.getElementById('adminForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Aquí puedes agregar la lógica para guardar el nuevo administrador
  alert('Nuevo administrador guardado');
  cerrarModal();
});
// Abrir modal admnistrador



// Función para agregar un nuevo administrador a la tabla

// Variable para llevar el control del ID secuencial
let adminIdCounter = 1;
let editingRow = null; // Variable para saber si estás editando una fila existente
 
// Función para agregar un nuevo administrador
function agregarAdministrador() {
  // Obtiene los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correo = document.getElementById('correo').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const dni = document.getElementById('dni').value;

  // Valida que los campos no estén vacíos
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
    // Resetea el modo de edición
    editingRow = null;
    } else {

  // Obtiene la tabla y el tbody
  const table = document.getElementById('adminTable').getElementsByTagName('tbody')[0];

  // Crea una nueva fila
  const newRow = table.insertRow();

   // Asigna un atributo para mantener el ID único
   newRow.setAttribute('data-id', adminIdCounter);

  // Inserta celdas con los valores del formulario
  const idCell = newRow.insertCell(0);
  const nombreCell = newRow.insertCell(1);
  const apellidoCell = newRow.insertCell(2);
  const correoCell = newRow.insertCell(3);
  const fechaCell = newRow.insertCell(4);
  const dniCell = newRow.insertCell(5);
  const accionesCell = newRow.insertCell(6);
  
  // Asigna el ID secuencial en lugar de uno aleatorio
  idCell.textContent = adminIdCounter++;

// Asigna los valores del formulario
  nombreCell.textContent = nombre;
  apellidoCell.textContent = apellido;
  correoCell.textContent = correo;
  fechaCell.textContent = fechaNacimiento;
  dniCell.textContent = dni;

  // Botón para eliminar fila
  accionesCell.innerHTML = `
  <button class="btn-ver" onclick="verAdministrador(this)">Ver</button>
  <button class="btn-editar" onclick="editarAdministrador(this)">Editar</button>
  <button class="btn-eliminar" onclick="eliminarAdministrador(this)">Eliminar</button>
`;

  // Limpia el formulario
  document.getElementById('adminForm').reset();

  // Cierra el modal
  cerrarModal();
}
// Función para agregar un nuevo administrador a la tabla
}
function editarAdministrador(button) {
  // Identifica la fila que se está editando
  editingRow = button.parentNode.parentNode;

  // Rellena los campos del formulario con los valores de la fila seleccionada
  document.getElementById('nombre').value = editingRow.cells[1].textContent;
  document.getElementById('apellido').value = editingRow.cells[2].textContent;
  document.getElementById('correo').value = editingRow.cells[3].textContent;
  document.getElementById('fechaNacimiento').value = editingRow.cells[4].textContent;
  document.getElementById('dni').value = editingRow.cells[5].textContent;

  // Abre el modal (asegúrate de tener una función abrirModal si usas modales)
  mostrarModal();
}




// Función para ver el detalle del administrador
function verAdministrador(button) {
  const row = button.parentNode.parentNode;
  const nombre = row.cells[1].textContent;
  const apellido = row.cells[2].textContent;
  const correo = row.cells[3].textContent;
  const fechaNacimiento = row.cells[4].textContent;
  const dni = row.cells[5].textContent;

  alert(`Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nFecha de Nacimiento: ${fechaNacimiento}\nDNI: ${dni}`);
}
// Función para ver el detalle del administrador



















// Función para eliminar un administrador



function eliminarAdministrador(button) {
  const row = button.parentNode.parentNode;
  row.remove();
}
