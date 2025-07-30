document.getElementById('show-register').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aquí puedes agregar la lógica para registrar al usuario.
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    console.log('Usuario registrado:', { username, email, password });
    
    // Limpiar el formulario
    this.reset();
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aquí puedes agregar la lógica para iniciar sesión.
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    console.log('Usuario que intenta iniciar sesión:', { email, password });

    // Limpiar el formulario
    this.reset();
});
