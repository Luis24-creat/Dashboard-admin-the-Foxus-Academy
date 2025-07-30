function mostrarBecas(){
    document.getElementById('admin-section').style.display = 'none'; // Ocultar la sección de administradores
    document.querySelector('.main').style.display = 'none'; // Mostrar la sección principal
    document.getElementById('docente-section').style.display ='none';
    document.getElementById('client-section').style.display = 'none';
    document.getElementById('pago-section').style.display='none';
    document.getElementById('certificado-section').style.display='none';
    document.getElementById('estadisticas').style.display='none';
    document.getElementById('container-recursos').style.display='none';
    document.getElementById('container-becas').style.display='block';
  }

  function mostrarmodalbecas(){
    document.getElementById('modal-beca').style.display = "block";
  }
  
  // Cerrar modal docente
  function cerrarmodalbecas(){
    document.getElementById('modal-beca').style.display = "none";
  }

