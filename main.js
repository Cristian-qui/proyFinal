const productos = [
  {
    nombre: "Camiseta Básica Blanca",
    cantidadDisponible: 50,
    precio: 83000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/612918/Camiseta-Oversize-Blanco-Icono-Talla-S.jpg?v=638654476816900000",
    talla: "M",
    material: "Algodón",
    categoria: "Camisetas",
  },
  {
    nombre: "Jeans Slim Fit Azul",
    cantidadDisponible: 30,
    precio: 183000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/599867/Jeans-Straight-Fit-Azul-Medio-Cargo-Talla-S.jpg?v=638612175966770000",
    talla: "32",
    material: "Denim",
    categoria: "Jeans",
  },
  {
    nombre: "Chaqueta cafe",
    cantidadDisponible: 15,
    precio: 249000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/610970/Chaqueta-Beige-Texto-Talla-S.jpg?v=638648424592530000",
    talla: "L",
    material: "Algodon",
    categoria: "Chaquetas",
  },
  {
    nombre: "Joggers Beige Cargo",
    cantidadDisponible: 40,
    precio: 149000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/612726/Joggers-Beige-Cargo-Talla-S.jpg?v=638654475823730000",
    talla: "S",
    material: "Algodón",
    categoria: "Joggers",
  },
  {
    nombre: "Vestido Negro",
    cantidadDisponible: 20,
    precio: 135000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/609866/Vestido-Negro-Texto-Talla-S.jpg?v=638642380497330000",
    talla: "M",
    material: "Poliéster",
    categoria: "Vestidos",
  },
  {
    nombre: "Camiseta Oversize Marfil Ilustración",
    cantidadDisponible: 25,
    precio: 89000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/611791/Camiseta-Oversize-Marfil-Ilustracion-Talla-S.jpg?v=638648429482300000",
    talla: "L",
    material: "Algodón",
    categoria: "Camisas",
  },
  {
    nombre: "Pantalón Negro Cargo",
    cantidadDisponible: 18,
    precio: 195000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/609722/Pantalon-Negro-Cargo-Talla-S.jpg?v=638642379760000000",
    talla: "34",
    material: "Poliéster",
    categoria: "Pantalones",
  },
  {
    nombre: "Falda Short Negro Básico",
    cantidadDisponible: 35,
    precio: 129000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/603319/Falda-Short-Negro-Basico-Talla-S.jpg?v=638624319317030000",
    talla: "M",
    material: "Seda",
    categoria: "Faldas",
  },
  {
    nombre: "Falda Short Café Básico",
    cantidadDisponible: 40,
    precio: 129000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/611579/Falda-Short-Cafe-Basico-Talla-S.jpg?v=638648428429330000",
    talla: "M",
    material: "poliester",
    categoria: "Faldas",
  },
  {
    nombre: "Buzo Pullover Con Cierre Negro",
    cantidadDisponible: 10,
    precio: 159000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/612450/Buzo-Pullover-Con-Cierre-Negro-Texto-Talla-S.jpg?v=638654474148930000",
    talla: "L",
    material: "Algodon",
    categoria: "Buzos",
  },
  {
    nombre: "Camiseta Oversize Negro Ilustración",
    cantidadDisponible: 30,
    precio: 99000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/609958/Camiseta-Oversize-Negro-Ilustracion-Talla-S.jpg?v=638642381034900000",
    talla: "S",
    material: "Algodón",
    categoria: "Camisetas",
  },
  {
    nombre: "Shorts Drill Gris Cargo",
    cantidadDisponible: 22,
    precio: 139000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/607953/Shorts-Drill-Gris-Cargo-Talla-Xl.jpg?v=638630516730900000",
    talla: "30",
    material: "Algodón",
    categoria: "Shorts",
  },
  {
    nombre: "Gorra Marfil Ícono",
    cantidadDisponible: 12,
    precio: 79000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/610742/Gorra-Marfil-Icono-Talla-M.jpg?v=638642384938000000",
    talla: "M",
    material: "Algodón",
    categoria: "Gorra",
  },
  {
    nombre: "Tank Negro Números",
    cantidadDisponible: 50,
    precio: 69000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/610222/Tank-Negro-Numeros-Talla-S.jpg?v=638642382356030000",
    talla: "M",
    material: "Poliéster",
    categoria: "Camisetas",
  },
  {
    nombre: "Chaqueta Beige",
    cantidadDisponible: 28,
    precio: 195000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/612154/Chaqueta-Beige-Texto-Talla-S.jpg?v=638654472456400000",
    talla: "M",
    material: "Lana",
    categoria: "Chaquetas",
  },
  {
    nombre: "Body Marfil Básico",
    cantidadDisponible: 18,
    precio: 79000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/611831/Body-Marfil-Basico-Talla-S.jpg?v=638648429596700000",
    talla: "S",
    material: "Algodón",
    categoria: "Body",
  },
  {
    nombre: "Camisa Manga Corta Blanco Básico",
    cantidadDisponible: 45,
    precio: 119000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/611327/Camisa-Manga-Corta-Blanco-Basico-Talla-S.jpg?v=638648426964170000",
    talla: "L",
    material: "Algodón",
    categoria: "Camisas",
  },
  {
    nombre: "Camiseta Crop Marfil",
    cantidadDisponible: 50,
    precio: 117000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/601616/Camiseta-Crop-Marfil-Texto-Talla-S.jpg?v=638618227179000000",
    talla: "M",
    material: "Algodón",
    categoria: "Polos",
  },
  {
    nombre: "Top Manga Larga Marfil",
    cantidadDisponible: 17,
    precio: 89000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/610662/Top-Manga-Larga-Marfil-Ilustracion-Talla-S.jpg?v=638642384354500000",
    talla: "L",
    material: "Algodón",
    categoria: "Buzos",
  },
  {
    nombre: "Jean Recto Tiro Bajo Azul Medio Básico",
    cantidadDisponible: 15,
    precio: 189000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/603051/Jean-Recto-Tiro-Bajo-Azul-Medio-Basico-Talla-S.jpg?v=638624318061070000",
    talla: "M",
    material: "Algodón",
    categoria: "Pantalones",
  },
  {
    nombre: "Shorts Negro Apliques",
    cantidadDisponible: 25,
    precio: 110000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/599983/Shorts-Negro-Apliques-Talla-S.jpg?v=638612176524800000",
    talla: "S",
    material: "Algodón",
    categoria: "Shorts",
  },
  {
    nombre: "Pantalón Azul Básico",
    cantidadDisponible: 35,
    precio: 150000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/609538/Pantalon-Azul-Basico-Talla-S.jpg?v=638642377867630000",
    talla: "L",
    material: "Algodón",
    categoria: "Pantalones",
  },
  {
    nombre: "Riñonera Negro Básico",
    cantidadDisponible: 42,
    precio: 99000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/612099/Ri%C3%B1onera-Negro-Basico-Talla-M.jpg?v=638648430957100000",
    talla: "M",
    material: "Poliéster",
    categoria: "Riñonera",
  },
  {
    nombre: "Buzo Hoodie Café",
    cantidadDisponible: 10,
    precio: 180000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/612343/Buzo-Hoodie-Cafe-Texto-Talla-S.jpg?v=638654473574170000",
    talla: "L",
    material: "Algodon",
    categoria: "Buzos",
  },
  {
    nombre: "Camiseta Oversize Rojo Ilustración",
    cantidadDisponible: 28,
    precio: 92000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/610334/Camiseta-Oversize-Rojo-Ilustracion-Talla-S.jpg?v=638642382864800000",
    talla: "S",
    material: "Algodón",
    categoria: "Camisetas",
  },
  {
    nombre: "Top Beige Miniprint",
    cantidadDisponible: 20,
    precio: 85000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/612382/Top-Beige-Miniprint-Talla-S.jpg?v=638654473831270000",
    talla: "M",
    material: "Algodón",
    categoria: "Blusas",
  },
  {
    nombre: "Enterizo Negro Básico",
    cantidadDisponible: 30,
    precio: 135000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/608609/Enterizo-Negro-Basico-Talla-S.jpg?v=638636368312730000",
    talla: "L",
    material: "Rayon",
    categoria: "Enterizos",
  },
  {
    nombre: "Camiseta Regular Verde Ilustración",
    cantidadDisponible: 40,
    precio: 79000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/608882/Camiseta-Verde-Ilustracion-Talla-S.jpg?v=638636370033470000",
    talla: "M",
    material: "Algodón",
    categoria: "Camisetas",
  },
  {
    nombre: "Shorts Drill Marfil Cargo",
    cantidadDisponible: 35,
    precio: 139000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/613306/Shorts-Drill-Marfil-Cargo-Talla-S.jpg?v=638654478377500000",
    talla: "S",
    material: "Algodon",
    categoria: "Shorts",
  },
  {
    nombre: "Camisa Manga Corta Negro Básico",
    cantidadDisponible: 18,
    precio: 130000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/602635/Camisa-Manga-Corta-Negro-Basico-Talla-S.jpg?v=638624316051400000",
    talla: "L",
    material: "Rayon",
    categoria: "Camisetas",
  },
  {
    nombre: "Camiseta Box Fit Blanco Ilustración",
    cantidadDisponible: 30,
    precio: 80000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/594925/Camiseta-Oversize-Blanco-Ilustracion-Talla-Xl.jpg?v=638588000545170000",
    talla: "M",
    material: "Algodón",
    categoria: "Camisetas",
  },
  {
    nombre: "Shorts Denim Azul Medio Básico",
    cantidadDisponible: 45,
    precio: 129000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/603116/Shorts-Denim-Azul-Medio-Basico-Talla-S.jpg?v=638624318304570000",
    talla: "S",
    material: "Algodón",
    categoria: "Shorts",
  },
  {
    nombre: "Jean Recto Tiro Alto Azul Claro Básico",
    cantidadDisponible: 25,
    precio: 105000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/608670/Jean-Recto-Tiro-Alto-Azul-Claro-Basico-Talla-S.jpg?v=638636368817800000",
    talla: "L",
    material: "Algodón",
    categoria: "Pantalones",
  },
  {
    nombre: "Falda Short Azul Medio Básico",
    cantidadDisponible: 15,
    precio: 129000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/588306/Falda-Short-Azul-Medio-Basico-Talla-M.jpg?v=638563969737100000",
    talla: "M",
    material: "Algodón",
    categoria: "Blusas",
  },
  {
    nombre: "Falda Marfil Básico",
    cantidadDisponible: 12,
    precio: 125000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/593838/Falda-Marfil-Basico-Talla-S.jpg?v=638581969664630000",
    talla: "XL",
    material: "Poliéster",
    categoria: "Faldas",
  },
  {
    nombre: "Croptop Azul Básico",
    cantidadDisponible: 18,
    precio: 53000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/607594/Croptop-Azul-Basico-Talla-S.jpg?v=638630413861100000",
    talla: "M",
    material: "Poliéster",
    categoria: "Croptop",
  },
  {
    nombre: "Vestido Marfil Miniprint",
    cantidadDisponible: 25,
    precio: 99000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/601673/Vestido-Marfil-Miniprint-Talla-S.jpg?v=638618227424700000",
    talla: "L",
    material: "Poliéster",
    categoria: "Vestidos",
  },
  {
    nombre: "Enterizo Beige Básico",
    cantidadDisponible: 15,
    precio: 75000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/602014/Enterizo-Beige-Basico-Talla-S.jpg?v=638624311583530000",
    talla: "M",
    material: "Algodón",
    categoria: "Enterizos",
  },
  {
    nombre: "Vestido Beige Básico",
    cantidadDisponible: 12,
    precio: 109000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/595307/Vestido-Beige-Basico-Talla-S.jpg?v=638588002479730000",
    talla: "S",
    material: "Poliester",
    categoria: "Vestidos",
  },
  {
    nombre: "Camiseta Oversize Blanco Ilustración",
    cantidadDisponible: 18,
    precio: 120000,
    imagen:
      "https://b2cmattelsa.vtexassets.com/arquivos/ids/602446/Camiseta-Oversize-Blanco-Ilustracion-Talla-L.jpg?v=638624315326870000",
    talla: "M",
    material: "Algodón",
    categoria: "Camisetas",
  },
  (document.getElementById("productos-container").innerText =
    "Prueba de carga de JavaScrit"),
];
