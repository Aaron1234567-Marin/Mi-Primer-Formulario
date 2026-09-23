const formulario = document.getElementById('formulario-registro');
const mensajeExito = document.getElementById('mensaje-exito');

formulario.addEventListener('submit', function(event) {
    // 1. Detenemos el envío automático para hacer las pruebas de seguridad
    event.preventDefault();

    // 2. Capturamos lo que el usuario escribió
    const nombreUsuario = document.getElementById('nombre').value;
    const contrasena = document.getElementById('contrasena').value;

    // 3. Definimos las reglas de seguridad:
    // Al menos 8 caracteres, 1 mayúscula y 1 número
    const tieneOchoCaracteres = contrasena.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneNumero = /[0-9]/.test(contrasena);

    // 4. Evaluamos si cumple con TODAS las reglas
    if (!tieneOchoCaracteres || !tieneMayuscula || !tieneNumero) {
        // Si falla algo, mostramos un aviso de error en color rojo
        mensajeExito.innerHTML = `⚠️ <strong>Contraseña insegura.</strong> Debe tener al menos 8 caracteres, una letra mayúscula y un número.`;
        mensajeExito.style.backgroundColor = '#f8d7da'; // Fondo rojo claro
        mensajeExito.style.color = '#721c24';           // Letras rojas oscuras
        mensajeExito.style.borderColor = '#f5c6cb';
        mensajeExito.style.display = 'block';
        return; // Detiene el código aquí y no permite el registro
    }

    // 5. Si la contraseña pasa la prueba, mostramos el éxito verde y redirigimos
    mensajeExito.innerHTML = `¡Felicidades <strong>${nombreUsuario}</strong>! Contraseña segura. Redirigiéndote... 🎉`;
    mensajeExito.style.backgroundColor = '#d4edda'; // Fondo verde claro
    mensajeExito.style.color = '#155724';           // Letras verdes oscuras
    mensajeExito.style.borderColor = '#c3e6cb';
    mensajeExito.style.display = 'block';

    formulario.reset();

    // Espera 3 segundos y envía a la página de bienvenida
    setTimeout(function() {
        window.location.href = "bienvenida.html";
    }, 3000); 
});
