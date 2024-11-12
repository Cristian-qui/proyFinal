let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoTable = document.querySelector("#carrito-table tbody");
const totalCompraSpan = document.getElementById("total-compra");
const domicilioCheckbox = document.getElementById("domicilio-checkbox");
const totalConDomicilio = document.getElementById("total-con-domicilio");
const domicilioMessage = document.getElementById("domicilio-message");
const confirmarCompraBtn = document.getElementById("confirmar-compra");

function mostrarCarrito() {
  carritoTable.innerHTML = "";
  let totalCompra = 0;

  carrito.forEach((producto, index) => {
    const { nombre, cantidad, precio } = producto;
    const totalProducto = precio * cantidad;
    totalCompra += totalProducto;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${nombre}</td>
      <td>${cantidad}</td>
      <td>$${precio.toLocaleString("es-CO")}</td>
      <td>$${totalProducto.toLocaleString("es-CO")}</td>
      <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
    `;
    carritoTable.appendChild(row);
  });

  totalCompraSpan.textContent = `$${totalCompra.toLocaleString("es-CO")}`;
  actualizarTotalConDomicilio(totalCompra);
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function actualizarTotalConDomicilio(totalCompra) {
  const costoDomicilio = domicilioCheckbox.checked ? 15000 : 0;
  const totalConDomicilioCalculado = totalCompra + costoDomicilio;

  totalConDomicilio.textContent = `$${totalConDomicilioCalculado.toLocaleString(
    "es-CO"
  )}`;
  domicilioMessage.style.display = costoDomicilio > 0 ? "block" : "none";
}

domicilioCheckbox.addEventListener("change", () => {
  const totalCompra = parseInt(
    totalCompraSpan.textContent.replace(/[$,.]/g, "")
  );
  actualizarTotalConDomicilio(totalCompra);
});

function cancelarCompra() {
  localStorage.removeItem("carrito");
  window.location.href = "index.html";
}

function seguirComprando() {
  window.location.href = "productos.html";
}

function limpiarCampos() {
  document.getElementById("pago-form").reset();
}

function confirmarCompra() {
  confirmarCompraBtn.disabled = true;
  setTimeout(() => {
    if (validarFormulario()) {
      alert("Pago realizado con éxito. Gracias por tu compra.");
      localStorage.removeItem("carrito");
      window.location.href = "index.html";
    } else {
      alert(
        "Error en la información de pago. Verifique los datos e intente nuevamente."
      );
    }
    confirmarCompraBtn.disabled = false;
  }, Math.random() * (3000 - 2000) + 2000);
}

function validarFormulario() {
  const cardNumber = document.getElementById("card-number").value;
  const expiration = document.getElementById("expiration").value;
  const securityCode = document.getElementById("security-code").value;
  const cardHolder = document.getElementById("card-holder").value;
  const country = document.getElementById("country").value;
  const cardType = document.getElementById("card-type").value;

  return (
    cardNumber.length === 16 &&
    /^\d{2}\/\d{2}$/.test(expiration) &&
    securityCode.length === 3 &&
    cardHolder.trim() !== "" &&
    country !== "" &&
    cardType !== ""
  );
}

function toggleSecurityCodeVisibility() {
  const securityCodeInput = document.getElementById("security-code");
  securityCodeInput.type =
    securityCodeInput.type === "password" ? "text" : "password";
}

// Inicializar la vista del carrito
mostrarCarrito();
