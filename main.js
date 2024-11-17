// Función para formatear el valor del presupuesto en formato de pesos
function formatCurrency(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value);
}

// Evento para manejar la salida del campo de presupuesto (formato en pesos al salir)
document.getElementById("presupuesto").addEventListener("blur", function (e) {
  const input = e.target;
  if (input.value) {
    const numericValue = parseInt(input.value.replace(/\D/g, ""), 10);
    input.value = formatCurrency(numericValue);
  }
});

// Evento para permitir solo números y quitar el formato al editar
document.getElementById("presupuesto").addEventListener("input", function (e) {
  const input = e.target;
  input.value = input.value.replace(/\D/g, "");
});

// Función para iniciar la compra
document
  .getElementById("iniciar-compra")
  .addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value.trim();
    const presupuesto = document
      .getElementById("presupuesto")
      .value.replace(/\D/g, "");
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const direccion = document.getElementById("direccion").value.trim();
    const tipoEntrega = document.querySelector('input[name="entrega"]:checked');
    const errorMessage = document.getElementById("error-message");

    // Validación de los campos
    if (!nombre || nombre.length > 20) {
      errorMessage.textContent = "Nombre debe tener máximo 20 caracteres.";
      errorMessage.style.display = "block";
      return;
    }
    if (!presupuesto || isNaN(presupuesto) || parseInt(presupuesto) <= 0) {
      errorMessage.textContent =
        "Presupuesto debe ser un número en formato de pesos.";
      errorMessage.style.display = "block";
      return;
    }
    if (!cantidad || cantidad <= 0 || cantidad > 20) {
      errorMessage.textContent =
        "Cantidad de productos debe ser un número entre 1 y 20.";
      errorMessage.style.display = "block";
      return;
    }
    if (!direccion) {
      errorMessage.textContent = "Dirección es obligatoria.";
      errorMessage.style.display = "block";
      return;
    }
    if (!tipoEntrega) {
      errorMessage.textContent = "Debe seleccionar un tipo de entrega.";
      errorMessage.style.display = "block";
      return;
    }

    // Si todo es válido, ocultar el mensaje de error y guardar en localStorage
    errorMessage.style.display = "none";
    localStorage.setItem(
      "requerimientos",
      JSON.stringify({
        nombre,
        presupuesto: parseInt(presupuesto),
        cantidad,
        direccion,
        tipoEntrega: tipoEntrega.value,
      })
    );

    // Redireccionar a la página de productos
    window.location.href = "productos.html";
  });

// Función para limpiar todos los campos del formulario
document
  .getElementById("limpiar-campos")
  .addEventListener("click", function () {
    document.getElementById("nombre").value = "";
    document.getElementById("presupuesto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("direccion").value = "";
    const selectedDelivery = document.querySelector(
      'input[name="entrega"]:checked'
    );
    if (selectedDelivery) selectedDelivery.checked = false;
    document.getElementById("error-message").style.display = "none";
  });
