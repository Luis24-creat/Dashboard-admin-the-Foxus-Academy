function mostrarEstadisticas(){
    document.getElementById('admin-section').style.display = 'none'; // Ocultar la sección de administradores
    document.querySelector('.main').style.display = 'none'; // Mostrar la sección principal
    document.getElementById('docente-section').style.display ='none';
    document.getElementById('client-section').style.display = 'none';
    document.getElementById('certificado-section').style.display='none';
    document.getElementById('pago-section').style.display='none';
    document.getElementById('estadisticas').style.display='block';
    document.getElementById('container-recursos').style.display='none';
    document.getElementById('container-becas').style.display='none';


  }



document.addEventListener('DOMContentLoaded', function() {   
    // Datos de ejemplo
    const pagosMensuales = [500, 700, 800, 1200, 1500, 1100, 900, 1300, 1400, 1600, 1700, 1800];
    const usuariosRegistrados = [30, 45, 50, 60, 70, 65, 80, 90, 100, 110, 115, 120];
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    // Gráfico de pagos mensuales
    const ctxPagos = document.getElementById('pagosMensualesChart').getContext('2d');
    new Chart(ctxPagos, {
        type: 'line',
        data: {
            labels: meses,
            datasets: [{
                label: 'Pagos Mensuales (S/)',
                data: pagosMensuales,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2
            }]
        },
        options: { responsive: true }
    });

    // Gráfico de usuarios registrados
    const ctxUsuarios = document.getElementById('usuariosRegistradosChart').getContext('2d');
    new Chart(ctxUsuarios, {
        type: 'bar',
        data: {
            labels: meses,
            datasets: [{
                label: 'Usuarios Registrados',
                data: usuariosRegistrados,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: { responsive: true }
    });
});