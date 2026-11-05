document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-ingreso');
    const formContainer = document.getElementById('form-container');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombreInput = document.getElementById('nombre').value.trim();
        const nombre = nombreInput !== '' ? nombreInput : 'Visitante';

        formContainer.innerHTML = `
            <div style="text-align: center; padding: 1.5rem 0;">
                <div style="font-size: 3.5rem; margin-bottom: 0.8rem;">🎉</div>
                <h2 style="color: #1e293b; font-size: 1.8rem; margin-bottom: 0.8rem;">¡Muchas gracias por rellenar el formulario, ${nombre}!</h2>
                <p style="color: #64748b; font-size: 1rem; margin-bottom: 1.5rem;">
                    Tus datos fueron registrados exitosamente en el libro de visitas del Equipo 2.
                </p>
                <div style="background-color: #fef3c7; border: 1px solid #fde68a; border-radius: 8px; padding: 1rem; color: #b45309; font-size: 0.95rem; margin-bottom: 1.8rem; text-align: left;">
                    <strong>✨ Certificado Escolapio Express:</strong><br>
                    San José de Calasanz aprueba tu respuesta con un 10 rotundo. Te ganaste +100 puntos de fe y el pase directo al recreo. 🔔
                </div>
                <a href="../index.html" class="btn-primary" style="text-decoration: none; display: inline-block; width: 100%;">Volver al Sitio Principal</a>
            </div>
        `;
    });
});