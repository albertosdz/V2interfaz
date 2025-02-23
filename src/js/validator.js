document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const inputs = form.querySelectorAll(".form__input");
    const submitButton = form.querySelector(".form__button");
  
    // Función para mostrar un mensaje de error debajo del campo correspondiente
    function showError(input, message) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains("error-message")) {
            error = document.createElement("div");
            error.classList.add("error-message");
            input.parentNode.appendChild(error);
        }
        error.textContent = message;
    }
  
    // Función para limpiar el mensaje de error si el campo es válido
    function clearError(input) {
        const error = input.nextElementSibling;
        if (error && error.classList.contains("error-message")) {
            error.textContent = "";
        }
    }
  
    // Función para validar cada campo individualmente
    function validateInput(input) {
        const value = input.value.trim();
        let isValid = true;
  
        // Validación del nombre y apellidos (mínimo 3 caracteres)
        if (input.id === "fullname" || input.id === "apellidos") {
            if (value.length < 3) {
                showError(input, "Debe tener al menos 3 caracteres.");
                isValid = false;
            } else {
                clearError(input);
            }
        }
        
        // Validación del email con una expresión regular
        if (input.id === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                showError(input, "Ingrese un email válido.");
                isValid = false;
            } else {
                clearError(input);
            }
        }
        
        // Validación del nombre de usuario (mínimo 5 caracteres)
        if (input.id === "username") {
            if (value.length < 5) {
                showError(input, "El nombre de usuario debe tener al menos 5 caracteres.");
                isValid = false;
            } else {
                clearError(input);
            }
        }
        
  
        return isValid;
    }
  
    // Agrega eventos de entrada para validar en tiempo real mientras el usuario escribe
    inputs.forEach(input => {
        input.addEventListener("input", () => validateInput(input));
    });
  
    // Evento para validar todos los campos al enviar el formulario
    form.addEventListener("submit", function (event) {
        let isFormValid = true;
        
        // Verifica cada campo del formulario
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isFormValid = false;
            }
        });
  
        // Previene el envío del formulario si hay errores
        if (!isFormValid) {
            event.preventDefault();
        }
    });
  });
  
  