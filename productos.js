const productList = document.getElementById("product-list");
const selectedProductInfo = document.getElementById("selected-product-info");
const buyButton = document.getElementById("add-to-cart-button");
const filterCategory = document.getElementById("filter-category");
const filterMaterial = document.getElementById("filter-material");
const cancelButton = document.getElementById("cancel-button");
const completeButton = document.getElementById("complete-button");

let loadedProducts = 0;
const productsPerPage = 15;
let filteredProducts = [...productos];
let selectedProduct = null;
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para llenar las opciones de filtros dinámicamente
function fillFilters() {
  const categories = [
    ...new Set(productos.map((product) => product.categoria)),
  ];
  const materials = [...new Set(productos.map((product) => product.material))];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    filterCategory.appendChild(option);
  });

  materials.forEach((material) => {
    const option = document.createElement("option");
    option.value = material;
    option.textContent = material;
    filterMaterial.appendChild(option);
  });
}

// Función para cargar productos en la lista con scroll infinito
function loadProducts() {
  if (loadedProducts >= filteredProducts.length) {
    console.log("Todos los productos han sido cargados.");
    return;
  }

  const nextProducts = filteredProducts.slice(
    loadedProducts,
    loadedProducts + productsPerPage
  );
  nextProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}">
            <h3>${product.nombre}</h3>
            <p>Precio: $${product.precio}</p>
        `;
    productCard.addEventListener("click", () => showProductDetails(product));
    productList.appendChild(productCard);
  });

  loadedProducts += productsPerPage;
}

// Manejar scroll infinito en el contenedor de productos
productList.addEventListener("scroll", () => {
  if (
    productList.scrollTop + productList.clientHeight >=
    productList.scrollHeight - 5
  ) {
    loadProducts();
  }
});

// Mostrar detalles del producto seleccionado
function showProductDetails(product) {
  selectedProduct = product;
  selectedProductInfo.innerHTML = `
        <img src="${product.imagen}" alt="${product.nombre}" style="width: 80%; max-width: 200px;">
        <h3>${product.nombre}</h3>
        <p>Precio: $${product.precio}</p>
        <p>Material: ${product.material}</p>
        <p>Categoría: ${product.categoria}</p>
        <p>Talla: ${product.talla}</p>
    `;
  document.getElementById("cantidad-container").style.display = "block";
  buyButton.style.display = "block";
}

// Función para agregar el producto seleccionado al carrito
function addToCart() {
  if (selectedProduct) {
    const quantity = parseInt(document.getElementById("cantidad").value, 10);
    if (quantity > 0) {
      const item = {
        ...selectedProduct,
        cantidad: quantity,
      };
      carrito.push(item);
      localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar el carrito en localStorage
      alert(`${selectedProduct.nombre} ha sido agregado al carrito.`);
      document.getElementById("cantidad").value = 1; // Reiniciar cantidad a 1
    } else {
      alert("Por favor ingrese una cantidad válida.");
    }
  } else {
    alert("Seleccione un producto para agregar al carrito.");
  }
}

// Función para aplicar filtros
document.getElementById("filter-button").addEventListener("click", () => {
  const category = filterCategory.value;
  const material = filterMaterial.value;

  filteredProducts = productos.filter((product) => {
    return (
      (!category || product.categoria === category) &&
      (!material || product.material === material)
    );
  });

  productList.innerHTML = "";
  loadedProducts = 0;
  loadProducts();
});

// Función para limpiar los filtros
document.getElementById("clear-filter-button").addEventListener("click", () => {
  filterCategory.value = "";
  filterMaterial.value = "";
  filteredProducts = [...productos];

  productList.innerHTML = "";
  loadedProducts = 0;
  loadProducts();
});

// Funciones para redirigir a la vista de carrito
function goToCart() {
  window.location.href = "carrito.html"; // Redirigir a carrito.html
}

buyButton.addEventListener("click", addToCart);

cancelButton.addEventListener("click", goToCart);
completeButton.addEventListener("click", goToCart);

fillFilters();
loadProducts();
