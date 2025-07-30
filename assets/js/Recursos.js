function mostrarRecursos(){
    document.getElementById('admin-section').style.display = 'none'; // Ocultar la sección de administradores
    document.querySelector('.main').style.display = 'none'; // Mostrar la sección principal
    document.getElementById('docente-section').style.display ='none';
    document.getElementById('client-section').style.display = 'none';
    document.getElementById('pago-section').style.display='none';
    document.getElementById('certificado-section').style.display='none';
    document.getElementById('estadisticas').style.display='none';
    document.getElementById('container-recursos').style.display='block';
    document.getElementById('container-becas').style.display='none';

  }

  function mostrarmodalrecursos(){
    document.getElementById('modal-recursos').style.display = "block";
  }
  
  function cerrarmodalrecursos(){
    document.getElementById('modal-recursos').style.display = "none";
  }
  
  function agregarrecurso(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
  
    // Obtener los valores de los campos del formulario
    const resourceId = document.getElementById("resource-id").value;
    const courseName = document.getElementById("course-name").value;
    const resourceType = document.getElementById("resource-type").value;
    const resourceDescription = document.getElementById("resource-description").value;
  
    // Crear una nueva fila de tabla
    const newRow = document.createElement("tr");
  
    // Crear celdas para la nueva fila
    const idCell = document.createElement("td");
    const courseCell = document.createElement("td");
    const typeCell = document.createElement("td");
    const descriptionCell = document.createElement("td");
    const actionsCell = document.createElement("td");
  
    // Asignar los valores de cada celda
    idCell.textContent = resourceId;
    courseCell.textContent = courseName;
    typeCell.textContent = resourceType;
    descriptionCell.textContent = resourceDescription;
  
    // Agregar botones de acción (editar, ver detalles, eliminar)
    actionsCell.innerHTML = `
      <button class="btn btn-info" onclick="viewDetails('${resourceId}')">Ver Detalles</button>
      <button class="btn btn-warning" onclick="editResource(this)">Editar</button>
      <button class="btn btn-danger" onclick="deleteResource(this)">Eliminar</button>
    `;
  
    // Añadir las celdas a la nueva fila
    newRow.appendChild(idCell);
    newRow.appendChild(courseCell);
    newRow.appendChild(typeCell);
    newRow.appendChild(descriptionCell);
    newRow.appendChild(actionsCell);
  
    // Agregar la nueva fila al cuerpo de la tabla
    document.getElementById("resource-table-body").appendChild(newRow);
  
    // Limpiar el formulario después de agregar el recurso
    document.getElementById("add-resource-form").reset();
  
    // Cerrar el modal
    cerrarmodalrecursos();
  }
  
  // Función para eliminar un recurso
  function deleteResource(button) {
    const row = button.parentNode.parentNode; // Obtener la fila de la tabla
    row.parentNode.removeChild(row); // Eliminar la fila
  }
  
  // Función para ver detalles de un recurso
  function viewDetails(resourceId) {
    alert('Mostrando detalles del recurso con ID: ' + resourceId);
    // Aquí puedes implementar una funcionalidad para mostrar detalles más específicos en un modal o en otra sección
  }
  
  // Función para editar un recurso
  function editResource(button) {
    const row = button.parentNode.parentNode; // Obtener la fila de la tabla
  
    // Obtener los datos de la fila
    const resourceId = row.cells[0].textContent;
    const courseName = row.cells[1].textContent;
    const resourceType = row.cells[2].textContent;
    const resourceDescription = row.cells[3].textContent;
  
    // Rellenar el formulario con los valores actuales
    document.getElementById("resource-id").value = resourceId;
    document.getElementById("course-name").value = courseName;
    document.getElementById("resource-type").value = resourceType;
    document.getElementById("resource-description").value = resourceDescription;
  
    // Mostrar el modal para editar
    mostrarmodalrecursos();
  
    // Eliminar la fila de la tabla, ya que se editará
    deleteResource(button);
  }