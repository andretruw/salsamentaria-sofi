const products = [
    { id: 101, name: "Mortadela Zenu", category: "embutidos", price: 12000, unit: "500g", image: "../productos/EMBUTIOS/embutido-1.jpeg" },
    { id: 102, name: "Jamón Zenu", category: "embutidos", price: 20500, unit: "500g", image: "../productos/EMBUTIOS/embutido-2.jpeg" },
    { id: 103, name: "Jamón Zenu", category: "embutidos", price: 12000, unit: "250g", image: "../productos/EMBUTIOS/embutido-3.jpeg" },
    { id: 104, name: "Jamón Zenu", category: "embutidos", price: 4500, unit: "111g", image: "../productos/EMBUTIOS/embutido-4.jpeg" },
    { id: 105, name: "Mortadela Zenu", category: "embutidos", price: 7500, unit: "250g", image: "../productos/EMBUTIOS/embutido-5.jpeg" },
    { id: 106, name: "Mortadela", category: "embutidos", price: 7000, unit: "250g", image: "../productos/EMBUTIOS/embutido-6.jpeg" },
    { id: 107, name: "Jamón Pietran", category: "embutidos", price: 15000, unit: "230g", image: "../productos/EMBUTIOS/embutido-7.jpeg" },
    { id: 108, name: "Jamón Rica Chef", category: "embutidos", price: 18000, unit: "500g", image: "../productos/EMBUTIOS/embutido-8.jpeg" },
    { id: 109, name: "Mortadela Rica", category: "embutidos", price: 10500, unit: "450g", image: "../productos/EMBUTIOS/embutido-9.jpeg" },
    { id: 110, name: "Chorizo Ternera Zenu", category: "embutidos", price: 22000, unit: "450g", image: "../productos/EMBUTIOS/embutido-10.jpeg" },
    { id: 111, name: "Salchicha Llanera Rica", category: "embutidos", price: 21000, unit: "500g", image: "../productos/EMBUTIOS/embutido-11.jpeg" },
    { id: 112, name: "Hamburguesa Ranchera", category: "embutidos", price: 7500, unit: "2 unds", image: "../productos/EMBUTIOS/embutido-12.jpeg" },
    { id: 113, name: "Salchicha Americana Zenu", category: "embutidos", price: 52000, unit: "18 unds", image: "../productos/EMBUTIOS/embutido-13.jpeg" },
    { id: 114, name: "Salchicha Long Zenu", category: "embutidos", price: 33500, unit: "20 unds", image: "../productos/EMBUTIOS/embutido-14.jpeg" },
    { id: 115, name: "Chorizo Santarrosano Zenu", category: "embutidos", price: 17000, unit: "250g", image: "../productos/EMBUTIOS/embutido-15.jpeg" },
    { id: 116, name: "Jamón Frigosan", category: "embutidos", price: 8000, unit: "450g", image: "../productos/EMBUTIOS/embutido-16.jpeg" },
    { id: 117, name: "Jamón Ahumado Nutivara", category: "embutidos", price: 10000, unit: "500g", image: "../productos/EMBUTIOS/embutido-17.jpeg" },
    { id: 118, name: "Jamón Ahumado Nutivara", category: "embutidos", price: 5500, unit: "250g", image: "../productos/EMBUTIOS/embutido-18.jpeg" },
    { id: 119, name: "Jamón Frigosan", category: "embutidos", price: 8000, unit: "450g", image: "../productos/EMBUTIOS/embutido-19.jpeg" },
    { id: 120, name: "Tocineta Nojo's", category: "embutidos", price: 17500, unit: "900g", image: "../productos/EMBUTIOS/embutido-20.jpeg" },
    { id: 121, name: "Tocineta El Coleo", category: "embutidos", price: 7500, unit: "250g", image: "../productos/EMBUTIOS/embutido-21.jpeg" },
    { id: 122, name: "Tocineta El Coleo", category: "embutidos", price: 19500, unit: "1000g", image: "../productos/EMBUTIOS/embutido-22.jpeg" },
    { id: 123, name: "Carne Hamburguesa San Miguel", category: "embutidos", price: 12500, unit: "500g 6 unds", image: "../productos/EMBUTIOS/embutido-23.jpeg" },
    { id: 124, name: "Carne Hamburguesa Nutivara", category: "embutidos", price: 7000, unit: "500g 10 unds", image: "../productos/EMBUTIOS/embutido-24.jpeg" },
    { id: 125, name: "Carne Hamburguesa Madrigal", category: "embutidos", price: 0, unit: "500g 8 unds", image: "../productos/EMBUTIOS/embutido-25.jpeg" },
    { id: 126, name: "Salchicha Americana Azul", category: "embutidos", price: 36000, unit: "20 unds", image: "../productos/EMBUTIOS/embutido-26.jpeg" },
    { id: 127, name: "Salchicha Américana El Coleo", category: "embutidos", price: 35000, unit: "Unidad", image: "../productos/EMBUTIOS/embutido-27.jpeg" },
    { id: 128, name: "Salchicha de Cerdo Alemana El Coleo", category: "embutidos", price: 32000, unit: "36 unds", image: "../productos/EMBUTIOS/embutido-28.jpeg" },
    { id: 129, name: "Salchicha Frigosan Maxidog", category: "embutidos", price: 22000, unit: "24 unds", image: "../productos/EMBUTIOS/embutido-29.jpeg" },
    { id: 130, name: "Chorizo Mixto Mini", category: "embutidos", price: 12500, unit: "500g 10 unds", image: "../productos/EMBUTIOS/embutido-30.jpeg" },
    { id: 131, name: "Chorizo Suizo Madrigal", category: "embutidos", price: 11000, unit: "500g 6 unds", image: "../productos/EMBUTIOS/embutido-31.jpeg" },
    { id: 132, name: "Chorizo Suizo Madrigal", category: "embutidos", price: 13000, unit: "720g 6 unds", image: "../productos/EMBUTIOS/embutido-32.jpeg" },
    { id: 133, name: "Chorizo Cóctel Nutivara", category: "embutidos", price: 12500, unit: "500g", image: "../productos/EMBUTIOS/embutido-33.jpeg" },
    { id: 134, name: "Salchichón Cerveroni Zenu", category: "embutidos", price: 13500, unit: "500g", image: "../productos/EMBUTIOS/embutido-34.jpeg" },
    { id: 135, name: "Salchichón Cervecero Rica", category: "embutidos", price: 22000, unit: "950g", image: "../productos/EMBUTIOS/embutido-35.jpeg" },
    { id: 136, name: "Salchichón Cerveroni Zenu", category: "embutidos", price: 27000, unit: "1000g", image: "../productos/EMBUTIOS/embutido-36.jpeg" },
    { id: 137, name: "Salchicha Manguera Frigosan", category: "embutidos", price: 9000, unit: "1000g 8 unds", image: "../productos/EMBUTIOS/embutido-37.jpeg" },
    { id: 138, name: "Chorizo Nutivara", category: "embutidos", price: 17000, unit: "1.200g", image: "../productos/EMBUTIOS/embutido-38.jpeg" },
    { id: 139, name: "Salchichón Nutivara", category: "embutidos", price: 8500, unit: "1000g", image: "../productos/EMBUTIOS/embutido-39.jpeg" },
    { id: 140, name: "Chorizo Santarrosano", category: "embutidos", price: 18000, unit: "1.100g", image: "../productos/EMBUTIOS/embutido-40.jpeg" },
    { id: 141, name: "Zenu Salchichón de Pollo", category: "embutidos", price: 3000, unit: "100g", image: "../productos/EMBUTIOS/embutido-nuevo-1.jpeg" },
    { id: 142, name: "Zenu Chorizo", category: "embutidos", price: 5500, unit: "2 unds", image: "../productos/EMBUTIOS/embutido-nuevo-2.jpeg" },
    { id: 143, name: "Zenu Salchichón", category: "embutidos", price: 3000, unit: "100g", image: "../productos/EMBUTIOS/embutido-nuevo-3.jpeg" },
    { id: 7, name: "Salsa Tártara", category: "salsas", price: 6800, unit: "500G", image: "../productos/salsas/salsa-1.jpeg" },
    { id: 8, name: "Salsa Dulce Maíz", category: "salsas", price: 8400, unit: "500G", image: "../productos/salsas/salsa-2.jpeg" },
    { id: 9, name: "Salsa Tomate", category: "salsas", price: 3300, unit: "500G", image: "../productos/salsas/salsa-3.jpeg" },
    { id: 10, name: "Salsa Mayonesa", category: "salsas", price: 4100, unit: "500G", image: "../productos/salsas/salsa-4.jpeg" },
    { id: 11, name: "Salsa Rosada Libra", category: "salsas", price: 4600, unit: "500G", image: "../productos/salsas/salsa-5.jpeg" },
    { id: 12, name: "Salsa Mostaza", category: "salsas", price: 4100, unit: "500G", image: "../productos/salsas/salsa-6.jpeg" },
    { id: 13, name: "Salsa de Mora", category: "salsas", price: 4800, unit: "500G", image: "../productos/salsas/salsa-7.jpeg" },
    { id: 14, name: "Salsa BBQ", category: "salsas", price: 4400, unit: "500G", image: "../productos/salsas/salsa-8.jpeg" },
    { id: 15, name: "Salsa de Piña", category: "salsas", price: 3700, unit: "500G", image: "../productos/salsas/salsa-9.jpeg" },
    { id: 16, name: "Lechera Condensada", category: "salsas", price: 2000, unit: "130G", image: "../productos/salsas/salsa-10.jpeg" },
    { id: 17, name: "Salsa Rosada", category: "salsas", price: 8500, unit: "1.000G", image: "../productos/salsas/salsa-11.jpeg" },
    { id: 18, name: "Salsa Pasta de Tomate", category: "salsas", price: 14000, unit: "1.000G", image: "../productos/salsas/salsa-12.jpeg" },
    { id: 19, name: "Salsa Mostaza", category: "salsas", price: 6400, unit: "1.000G", image: "../productos/salsas/salsa-13.jpeg" },
    { id: 20, name: "Salsa Mayonesa", category: "salsas", price: 7500, unit: "1.000G", image: "../productos/salsas/salsa-14.jpeg" },
    { id: 21, name: "Leche Condensada", category: "salsas", price: 13000, unit: "970G", image: "../productos/salsas/salsa-15.jpeg" },
    { id: 22, name: "Salsa de Mora", category: "salsas", price: 6800, unit: "1.000G", image: "../productos/salsas/salsa-16.jpeg" },
    { id: 23, name: "Salsa de Piña", category: "salsas", price: 6800, unit: "1.000G", image: "../productos/salsas/salsa-17.jpeg" },
    { id: 24, name: "Salsa Tártara", category: "salsas", price: 9800, unit: "1.000G", image: "../productos/salsas/salsa-18.jpeg" },
    { id: 25, name: "Salsa de Tomate", category: "salsas", price: 6000, unit: "1.000G", image: "../productos/salsas/salsa-19.jpeg" },
    { id: 26, name: "Salsa Humo", category: "salsas", price: 4000, unit: "500ML", image: "../productos/salsas/salsa-20.jpeg" },
    { id: 27, name: "Salsa Soya", category: "salsas", price: 4500, unit: "500ML", image: "../productos/salsas/salsa-21.jpeg" },
    { id: 28, name: "Picante Brava", category: "salsas", price: 3500, unit: "170G", image: "../productos/salsas/salsa-22.jpeg" },
    { id: 29, name: "Salsa Negra", category: "salsas", price: 4500, unit: "500ML", image: "../productos/salsas/salsa-23.jpeg" },
    { id: 30, name: "Salsa Pasta de Tomate", category: "salsas", price: 52500, unit: "4.000G", image: "../productos/salsas/salsa-24.jpeg" },
    { id: 31, name: "Salsa Rosada", category: "salsas", price: 27000, unit: "4.000G", image: "../productos/salsas/salsa-25.jpeg" },
    { id: 32, name: "Salsa de Piña", category: "salsas", price: 21500, unit: "4.000G", image: "../productos/salsas/salsa-26.jpeg" },
    { id: 33, name: "Salsa Dulce Maíz", category: "salsas", price: 58000, unit: "4.000G", image: "../productos/salsas/salsa-27.jpeg" },
    { id: 34, name: "Salsa Tártara", category: "salsas", price: 34800, unit: "4.000G", image: "../productos/salsas/salsa-28.jpeg" },
    { id: 35, name: "Salsa Mayonesa", category: "salsas", price: 24500, unit: "4.000G", image: "../productos/salsas/salsa-29.jpeg" },
    { id: 36, name: "Salsa Mostaza", category: "salsas", price: 19000, unit: "4.000G", image: "../productos/salsas/salsa-30.jpeg" },
    { id: 37, name: "Salsa Dulce (Kiwi, Fresa, Chocolate, Chicle, Mora)", category: "salsas", price: 4500, unit: "320G", image: "../productos/salsas/salsa-31.jpeg" },
    { id: 38, name: "Salsa Dulce (Kiwi, Fresa, Chocolate, Chicle, Mora)", category: "salsas", price: 8000, unit: "810G", image: "../productos/salsas/salsa-32.jpeg" },
    { id: 39, name: "Salsa Tomate", category: "salsas", price: 18000, unit: "4.000G", image: "../productos/salsas/salsa-33.jpeg" },
    { id: 144, name: "Salsa Dulce Maíz Sobres", category: "salsas", price: 15000, unit: "100 unds 8g", image: "../productos/salsas/salsa-nuevo-1.jpeg" },
    { id: 145, name: "Salsa Rosada Sobres", category: "salsas", price: 12500, unit: "100 unds 8g", image: "../productos/salsas/salsa-nuevo-2.jpeg" },
    { id: 146, name: "Salsa Mayonesa Sobres", category: "salsas", price: 13500, unit: "100 unds 8g", image: "../productos/salsas/salsa-nuevo-3.jpeg" },
    { id: 147, name: "Fruco Salsa Mayonesa", category: "salsas", price: 7000, unit: "190g", image: "../productos/salsas/salsa-nuevo-4.jpeg" },
    { id: 148, name: "Fruco Salsa Rosada", category: "salsas", price: 2500, unit: "80g", image: "../productos/salsas/salsa-nuevo-5.jpeg" },
    { id: 149, name: "Fruco Mayonesa", category: "salsas", price: 3500, unit: "120g", image: "../productos/salsas/salsa-nuevo-6.jpeg" },
    { id: 150, name: "Bary Vinagreta", category: "salsas", price: 7000, unit: "200g", image: "../productos/salsas/salsa-nuevo-7.jpeg" },
    { id: 201, name: "Queso Doble Crema Tajado (Bloque 50k, Libra 10k, 1/2 5k, 1/4 2.5k)", category: "lacteos", price: 10000, unit: "Libra", image: "../productos/LACTEOS/lacteo-1.jpeg" },
    { id: 202, name: "Mantequilla San Sebastián", category: "lacteos", price: 4500, unit: "250g", image: "../productos/LACTEOS/lacteo-2.jpeg" },
    { id: 203, name: "Mantequilla San Sebastián", category: "lacteos", price: 2500, unit: "125g", image: "../productos/LACTEOS/lacteo-3.jpeg" },
    { id: 204, name: "Mantequilla San Sebastián", category: "lacteos", price: 8000, unit: "500g", image: "../productos/LACTEOS/lacteo-5.jpeg" },
    { id: 205, name: "Grasa Bojacá", category: "lacteos", price: 13000, unit: "500g", image: "../productos/LACTEOS/lacteo-4.jpeg" },
    { id: 206, name: "Mantequilla La Fina", category: "lacteos", price: 4500, unit: "250g", image: "../productos/LACTEOS/lacteo-6.jpeg" },
    { id: 207, name: "Mantequilla La Fina", category: "lacteos", price: 2500, unit: "125g", image: "../productos/LACTEOS/lacteo-7.jpeg" },
    { id: 208, name: "Queso Parmesano", category: "lacteos", price: 6500, unit: "40g", image: "../productos/LACTEOS/lacteo-8.jpeg" },
    { id: 209, name: "Mantequilla Alpina", category: "lacteos", price: 9700, unit: "125g", image: "../productos/LACTEOS/lacteo-9.jpeg" },
    { id: 210, name: "Mantequilla La Fina", category: "lacteos", price: 8500, unit: "500g", image: "../productos/LACTEOS/lacteo-10.jpeg" },
    { id: 211, name: "Mantequilla Campi", category: "lacteos", price: 4700, unit: "125g", image: "../productos/LACTEOS/lacteo-11.jpeg" },
    { id: 212, name: "Leche Alquería Megalitro Deslactosada", category: "lacteos", price: 6500, unit: "1.100mL", image: "../productos/LACTEOS/lacteo-12.jpeg" },
    { id: 213, name: "Queso Cremosino Alpina", category: "lacteos", price: 6500, unit: "200g", image: "../productos/LACTEOS/lacteo-13.jpeg" },
    { id: 214, name: "Alquería Megalitro original", category: "lacteos", price: 6500, unit: "1.100mL", image: "../productos/LACTEOS/lacteo-14.jpeg" },
    { id: 215, name: "Mantequilla industrial", category: "lacteos", price: 4700, unit: "1000g", image: "../productos/LACTEOS/lacteo-15.jpeg" },
    { id: 216, name: "Mantequilla industrial", category: "lacteos", price: 2400, unit: "500g", image: "../productos/LACTEOS/lacteo-16.jpeg" },
    { id: 217, name: "Monte frío leche entera", category: "lacteos", price: 4500, unit: "900mL", image: "../productos/LACTEOS/lacteo-17.jpeg" },
    { id: 301, name: "Vaso 9 Onzas", category: "desechables", price: 4000, unit: "Unidad", image: "../productos/desechables/desechable-1.jpeg" },
    { id: 302, name: "Vasos 3.5 Onzas", category: "desechables", price: 2600, unit: "Unidad", image: "../productos/desechables/desechable-2.jpeg" },
    { id: 303, name: "Vasos 14 Onzas", category: "desechables", price: 4000, unit: "Unidad", image: "../productos/desechables/desechable-3.jpeg" },
    { id: 304, name: "Vasos 7 Onzas", category: "desechables", price: 2500, unit: "Unidad", image: "../productos/desechables/desechable-4.jpeg" },
    { id: 305, name: "Vasos 16 Onzas", category: "desechables", price: 4000, unit: "Unidad", image: "../productos/desechables/desechable-5.jpeg" },
    { id: 306, name: "Vaso 3.3 Onzas Bicolor", category: "desechables", price: 2200, unit: "Unidad", image: "../productos/desechables/desechable-6.jpeg" },
    { id: 307, name: "Vasos 5 Onzas Bicolor", category: "desechables", price: 2500, unit: "Unidad", image: "../productos/desechables/desechable-7.jpeg" },
    { id: 308, name: "Vasos 10 Onzas", category: "desechables", price: 4000, unit: "Unidad", image: "../productos/desechables/desechable-8.jpeg" },
    { id: 309, name: "Aluminio", category: "desechables", price: 4000, unit: "7 metros", image: "../productos/desechables/desechable-9.jpeg" },
    { id: 310, name: "Aluminio", category: "desechables", price: 7000, unit: "16 metros", image: "../productos/desechables/desechable-10.jpeg" },
    { id: 311, name: "Aluminio", category: "desechables", price: 25000, unit: "x100", image: "../productos/desechables/desechable-11.jpeg" },
    { id: 312, name: "Aluminio", category: "desechables", price: 65000, unit: "300 metros", image: "../productos/desechables/desechable-12.jpeg" },
    { id: 313, name: "Vasos 14 Onzas", category: "desechables", price: 4000, unit: "Unidad", image: "../productos/desechables/desechable-13.jpeg" },
    { id: 314, name: "Vasos 5 Onzas", category: "desechables", price: 2500, unit: "Unidad", image: "../productos/desechables/desechable-14.jpeg" },
    { id: 315, name: "Servilleta Nube 1a1", category: "desechables", price: 2500, unit: "Unidad", image: "../productos/desechables/desechable-15.jpeg" },
    { id: 316, name: "Servilleta", category: "desechables", price: 6700, unit: "x3", image: "../productos/desechables/desechable-16.jpeg" },
    { id: 317, name: "Bolsa Manija", category: "desechables", price: 2700, unit: "1/2", image: "../productos/desechables/desechable-17.jpeg" },
    { id: 318, name: "Bolsa Manija", category: "desechables", price: 2900, unit: "2 kilos", image: "../productos/desechables/desechable-18.jpeg" },
    { id: 319, name: "Bolsa Manija", category: "desechables", price: 3700, unit: "3 kilos", image: "../productos/desechables/desechable-19.jpeg" },
    { id: 320, name: "Servilleta Nube", category: "desechables", price: 4000, unit: "Unidad", image: "../productos/desechables/desechable-20.jpeg" },
    { id: 321, name: "Bolsa Manija", category: "desechables", price: 5700, unit: "10 kilos", image: "../productos/desechables/desechable-21.jpeg" },
    { id: 322, name: "Bolsa Manija", category: "desechables", price: 6900, unit: "15 kilos", image: "../productos/desechables/desechable-22.jpeg" },
    { id: 323, name: "Bolsa Manija", category: "desechables", price: 10000, unit: "25 kilos", image: "../productos/desechables/desechable-23.jpeg" },
    { id: 324, name: "Bolsa Manija", category: "desechables", price: 4700, unit: "5 kilos", image: "../productos/desechables/desechable-24.jpeg" },
    { id: 325, name: "Bolsa de Aluminio L-19", category: "desechables", price: 4000, unit: "Unidad", image: "../productos/desechables/desechable-25.jpeg" },
    { id: 326, name: "Tapas 3.5, 6 y 7 Onzas", category: "desechables", price: 4000, unit: "Unidad", image: "../productos/desechables/desechable-26.jpeg" },
    { id: 327, name: "Tapas 9, 10 y 12 Onzas", category: "desechables", price: 4800, unit: "Unidad", image: "../productos/desechables/desechable-27.jpeg" },
    { id: 328, name: "Tapas 13, 14 y 16 Onzas", category: "desechables", price: 5800, unit: "Unidad", image: "../productos/desechables/desechable-28.jpeg" },
    { id: 329, name: "Bolsa de Aluminio L-17", category: "desechables", price: 3200, unit: "Unidad", image: "../productos/desechables/desechable-29.jpeg" },
    { id: 330, name: "Vaso Icopor 6 Onzas", category: "desechables", price: 3500, unit: "Unidad", image: "../productos/desechables/desechable-30.jpeg" },
    { id: 331, name: "Vaso Icopor 4 Onzas", category: "desechables", price: 4000, unit: "Unidad", image: "../productos/desechables/desechable-31.jpeg" },
    { id: 332, name: "Servilleta Sanitisu", category: "desechables", price: 6500, unit: "Unidad", image: "../productos/desechables/desechable-32.jpeg" },
    { id: 333, name: "Vaso de Icopor 8 Onzas", category: "desechables", price: 4500, unit: "Unidad", image: "../productos/desechables/desechable-33.jpeg" },
    { id: 334, name: "Aluminio P-25", category: "desechables", price: 6000, unit: "Unidad", image: "../productos/desechables/desechable-34.jpeg" },
    { id: 335, name: "Aluminio L-25", category: "desechables", price: 8000, unit: "Unidad", image: "../productos/desechables/desechable-35.jpeg" },
    { id: 336, name: "Aluminio L-23", category: "desechables", price: 5500, unit: "Unidad", image: "../productos/desechables/desechable-36.jpeg" },
    { id: 337, name: "Aluminio L-21", category: "desechables", price: 4000, unit: "Unidad", image: "../productos/desechables/desechable-37.jpeg" },
    { id: 338, name: "Servilleta Cafetería", category: "desechables", price: 3000, unit: "100 unds", image: "../productos/desechables/desechable-38.jpeg" },
    { id: 339, name: "Aluminio L-17", category: "desechables", price: 3000, unit: "Unidad", image: "../productos/desechables/desechable-39.jpeg" },
    { id: 340, name: "Bolsa para Hielo", category: "desechables", price: 3500, unit: "Unidad", image: "../productos/desechables/desechable-40.jpeg" },
    { id: 341, name: "Bolsa", category: "desechables", price: 6300, unit: "6 libras", image: "../productos/desechables/desechable-41.jpeg" },
    { id: 342, name: "Bolsa", category: "desechables", price: 8000, unit: "8 libras", image: "../productos/desechables/desechable-42.jpeg" },
    { id: 343, name: "Aluminio L-19", category: "desechables", price: 3500, unit: "Unidad", image: "../productos/desechables/desechable-43.jpeg" },
    { id: 344, name: "Bolsa", category: "desechables", price: 1500, unit: "1/2", image: "../productos/desechables/desechable-44.jpeg" },
    { id: 345, name: "Cuchara Pequeña", category: "desechables", price: 3200, unit: "100 unds", image: "../productos/desechables/desechable-45.jpeg" },
    { id: 346, name: "Tenedor Pequeño", category: "desechables", price: 3200, unit: "100 unds", image: "../productos/desechables/desechable-46.jpeg" },
    { id: 347, name: "Tenedor Grande", category: "desechables", price: 5000, unit: "100 unds", image: "../productos/desechables/desechable-47.jpeg" },
    { id: 348, name: "Cuchara Grande", category: "desechables", price: 5000, unit: "100 unds", image: "../productos/desechables/desechable-48.jpeg" },
    { id: 349, name: "Bolsa", category: "desechables", price: 4800, unit: "5 libras", image: "../productos/desechables/desechable-49.jpeg" },
    { id: 350, name: "Molde Aluminio 021", category: "desechables", price: 6000, unit: "20 unds", image: "../productos/desechables/desechable-50.jpeg" },
    { id: 351, name: "Molde Aluminio 031", category: "desechables", price: 7000, unit: "20 unds", image: "../productos/desechables/desechable-51.jpeg" },
    { id: 352, name: "Molde Aluminio 041", category: "desechables", price: 8000, unit: "20 unds", image: "../productos/desechables/desechable-52.jpeg" },
    { id: 353, name: "Vasos Fresh 9 Onzas", category: "desechables", price: 0, unit: "20 unds", image: "../productos/desechables/desechable-53.jpeg" },
    { id: 354, name: "Cuchillo", category: "desechables", price: 5000, unit: "100 unds", image: "../productos/desechables/desechable-54.jpeg" },
    { id: 355, name: "Porta Hamburguesa", category: "desechables", price: 3000, unit: "25 unds", image: "../productos/desechables/desechable-55.jpeg" },
    { id: 356, name: "Porta Perro", category: "desechables", price: 3000, unit: "25 unds", image: "../productos/desechables/desechable-56.jpeg" },
    { id: 357, name: "Porta Hamburguesa", category: "desechables", price: 5500, unit: "50 unds", image: "../productos/desechables/desechable-57.jpeg" },
    { id: 358, name: "Porta Perro", category: "desechables", price: 5500, unit: "50 unds", image: "../productos/desechables/desechable-58.jpeg" },
    { id: 359, name: "Porta Perro", category: "desechables", price: 11000, unit: "100 unds", image: "../productos/desechables/desechable-59.jpeg" },
    { id: 360, name: "Vaso Whisky Pequeño", category: "desechables", price: 8000, unit: "20 unds", image: "../productos/desechables/desechable-60.jpeg" },
    { id: 361, name: "Porta Hamburguesa", category: "desechables", price: 11000, unit: "100 unds", image: "../productos/desechables/desechable-61.jpeg" },
    { id: 362, name: "Porta Arepa", category: "desechables", price: 8000, unit: "100 unds", image: "../productos/desechables/desechable-62.jpeg" },
    { id: 363, name: "Palillo para Helado", category: "desechables", price: 14000, unit: "1000 unds", image: "../productos/desechables/desechable-63.jpeg" },
    { id: 364, name: "Guantes Manipulación", category: "desechables", price: 3000, unit: "Unidad", image: "../productos/desechables/desechable-64.jpeg" },
    { id: 365, name: "Porta Pizza", category: "desechables", price: 12000, unit: "100 unds", image: "../productos/desechables/desechable-65.jpeg" },
    { id: 366, name: "Festival Palillos Redondos", category: "desechables", price: 8500, unit: "1000 unds", image: "../productos/desechables/desechable-66.jpeg" },
    { id: 367, name: "Acme León 5 Onzas", category: "desechables", price: 2500, unit: "50 unds", image: "../productos/desechables/desechable-67.jpeg" },
    { id: 368, name: "Vaso Sicodélico 7 Onzas", category: "desechables", price: 2000, unit: "50 unds", image: "../productos/desechables/desechable-68.jpeg" },
    { id: 369, name: "Vasos VBC 12 Onzas", category: "desechables", price: 4500, unit: "Unidad", image: "../productos/desechables/desechable-69.jpeg" },
    { id: 401, name: "Bimbo Vital pan integral con nueces, banano uva y ciruelas pasas", category: "panaderia", price: 10500, unit: "x500g", image: "../productos/PANADERIA/panaderia-1.jpeg" },
    { id: 402, name: "COMAPAN ponque", category: "panaderia", price: 6500, unit: "x6", image: "../productos/PANADERIA/panaderia-2.jpeg" },
    { id: 403, name: "Bimbo miga de pan clásica", category: "panaderia", price: 5300, unit: "Unidad", image: "../productos/PANADERIA/panaderia-3.jpeg" },
    { id: 404, name: "COMAPAN pan perro", category: "panaderia", price: 5200, unit: "x6unds", image: "../productos/PANADERIA/panaderia-4.jpeg" },
    { id: 405, name: "Bimbo tajada de vainilla", category: "panaderia", price: 2100, unit: "x60g", image: "../productos/PANADERIA/panaderia-5.jpeg" },
    { id: 406, name: "COMAPAN", category: "panaderia", price: 7500, unit: "x520g", image: "../productos/PANADERIA/panaderia-6.jpeg" },
    { id: 407, name: "Bimbo casero limón", category: "panaderia", price: 6700, unit: "x6", image: "../productos/PANADERIA/panaderia-7.jpeg" },
    { id: 408, name: "Bimbo rápiditas tamaño L", category: "panaderia", price: 12500, unit: "x10und", image: "../productos/PANADERIA/panaderia-8.jpeg" },
    { id: 409, name: "COMAPAN caladitos", category: "panaderia", price: 8500, unit: "x24unds", image: "../productos/PANADERIA/panaderia-9.jpeg" },
    { id: 410, name: "Guadalupe tostadas integrales", category: "panaderia", price: 8700, unit: "x24unds 280g", image: "../productos/PANADERIA/panaderia-10.jpeg" },
    { id: 411, name: "Marinela pingüinos cookiesycream", category: "panaderia", price: 4100, unit: "x2unds", image: "../productos/PANADERIA/panaderia-11.jpeg" },
    { id: 412, name: "Guadalupe tostadas integrales", category: "panaderia", price: 3900, unit: "x10unds", image: "../productos/PANADERIA/panaderia-12.jpeg" },
    { id: 413, name: "Bimbo tamaño M", category: "panaderia", price: 7800, unit: "x8unds", image: "../productos/PANADERIA/panaderia-13.jpeg" },
    { id: 414, name: "Bimbo ponquecito con gotas de chocolate", category: "panaderia", price: 2200, unit: "x50g", image: "../productos/PANADERIA/panaderia-14.jpeg" },
    { id: 415, name: "Guadalupe tostadas sabor mantequilla", category: "panaderia", price: 3700, unit: "x10unds", image: "../productos/PANADERIA/panaderia-15.jpeg" },
    { id: 416, name: "Tonypan Pan perro", category: "panaderia", price: 8500, unit: "x12unds", image: "../productos/PANADERIA/panaderia-16.jpeg" },
    { id: 417, name: "COMAPAN miga de pan", category: "panaderia", price: 4000, unit: "x250g", image: "../productos/PANADERIA/panaderia-17.jpeg" },
    { id: 418, name: "COMAPAN pan blanco pequeño", category: "panaderia", price: 4000, unit: "x250g", image: "../productos/PANADERIA/panaderia-18.jpeg" },
    { id: 419, name: "Guadalupe Mogolla integral", category: "panaderia", price: 8600, unit: "x12unds 400g", image: "../productos/PANADERIA/panaderia-19.jpeg" },
    { id: 420, name: "Guadalupe miga de pan", category: "panaderia", price: 5000, unit: "x250g", image: "../productos/PANADERIA/panaderia-20.jpeg" },
    { id: 421, name: "Bimbo Pan súper perro", category: "panaderia", price: 7100, unit: "x6unds", image: "../productos/PANADERIA/panaderia-21.jpeg" },
    { id: 422, name: "COMAPAN pan hamburguesa", category: "panaderia", price: 5200, unit: "x6unds", image: "../productos/PANADERIA/panaderia-22.jpeg" },
    { id: 423, name: "Bimbo Casero ponque sabor a vainilla", category: "panaderia", price: 6700, unit: "x200g", image: "../productos/PANADERIA/panaderia-23.jpeg" },
    { id: 424, name: "Bimbo pan artesanal para hamburguesa", category: "panaderia", price: 11500, unit: "x10unds", image: "../productos/PANADERIA/panaderia-24.jpeg" },
    { id: 425, name: "Tía Rosa tortillas de trigo", category: "panaderia", price: 5600, unit: "x10unds", image: "../productos/PANADERIA/panaderia-25.jpeg" },
    { id: 426, name: "Guadalupe pan sabor mantequilla", category: "panaderia", price: 6800, unit: "x550g", image: "../productos/PANADERIA/panaderia-26.jpeg" },
    { id: 427, name: "Bimbo tostaos sabor mantequilla", category: "panaderia", price: 4600, unit: "x10unds", image: "../productos/PANADERIA/panaderia-27.jpeg" },
    { id: 428, name: "Bimbo Pan súper hamburguesa con ajonjolí", category: "panaderia", price: 6900, unit: "x4unds", image: "../productos/PANADERIA/panaderia-28.jpeg" },
    { id: 429, name: "Bimbo chocoso", category: "panaderia", price: 2600, unit: "x65g", image: "../productos/PANADERIA/panaderia-29.jpeg" },
    { id: 430, name: "Marinela sub marino pekitas", category: "panaderia", price: 2000, unit: "Unidad", image: "../productos/PANADERIA/panaderia-30.jpeg" },
    { id: 431, name: "Bimbo Bimboletes ponquecitos sabor a vainilla", category: "panaderia", price: 2200, unit: "x55g", image: "../productos/PANADERIA/panaderia-31.jpeg" },
    { id: 432, name: "Guadalupe Pan integral", category: "panaderia", price: 7800, unit: "x570g", image: "../productos/PANADERIA/panaderia-32.jpeg" },
    { id: 433, name: "Bimbo pan blanco artesano", category: "panaderia", price: 7600, unit: "Unidad", image: "../productos/PANADERIA/panaderia-33.jpeg" },
    { id: 434, name: "Bimbo tostaos integrales", category: "panaderia", price: 5100, unit: "x10unds", image: "../productos/PANADERIA/panaderia-34.jpeg" },
    { id: 435, name: "COMAPAN ponque tajado", category: "panaderia", price: 6200, unit: "x6unds", image: "../productos/PANADERIA/panaderia-35.jpeg" },
    { id: 436, name: "Marinela pingüinos", category: "panaderia", price: 4200, unit: "x2unds", image: "../productos/PANADERIA/panaderia-36.jpeg" },
    { id: 437, name: "Marinela Sub marino", category: "panaderia", price: 1800, unit: "Unidad", image: "../productos/PANADERIA/panaderia-37.jpeg" },
    { id: 438, name: "COMAPAN extra largo sabor mantequilla", category: "panaderia", price: 7500, unit: "Unidad", image: "../productos/PANADERIA/panaderia-38.jpeg" },
    { id: 439, name: "COMAPAN pan blanco extra grande", category: "panaderia", price: 9800, unit: "x750g", image: "../productos/PANADERIA/panaderia-39.jpeg" },
    { id: 440, name: "COMAPAN pan blanco extra largo", category: "panaderia", price: 6400, unit: "x520g", image: "../productos/PANADERIA/panaderia-40.jpeg" },
    { id: 441, name: "Harina para buñuelos", category: "panaderia", price: 3500, unit: "x500g", image: "../productos/PANADERIA/panaderia-41.jpeg" },
    { id: 442, name: "Almidón de yuca (dulce)", category: "panaderia", price: 5500, unit: "x500g", image: "../productos/PANADERIA/panaderia-42.jpeg" },
    { id: 501, name: "Promo: Leche condensada", category: "promociones", price: 15000, unit: "1.300g", image: "../productos/promosiones/promo-1.jpeg" },
    { id: 502, name: "Promo: Combo de tapas con copas", category: "promociones", price: 7000, unit: "Unidad", image: "../productos/promosiones/promo-2.jpeg" }
];

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu mÃ³vil
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--glass-bg)';
            navLinks.style.padding = '1rem 0';
            navLinks.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
        });
    }

    // Función para renderizar los productos en el HTML
    function renderProducts(filter = 'todos') {
        if (!productContainer) return; // Si no estamos en la página principal
        
        productContainer.innerHTML = '';
        
        const categoriesToRender = filter === 'todos' 
            ? [...new Set(products.map(p => p.category))]
            : [filter];

        categoriesToRender.forEach(cat => {
            const catProducts = products.filter(p => p.category === cat);
            if (catProducts.length === 0) return;

            if (filter === 'todos') {
                const title = document.createElement('h3');
                title.style.gridColumn = '1 / -1';
                title.style.marginTop = '2rem';
                title.style.marginBottom = '1rem';
                title.style.textTransform = 'capitalize';
                title.style.fontSize = '2.5rem';
                title.style.color = 'var(--primary-color)';
                title.textContent = cat;
                productContainer.appendChild(title);
            }

            catProducts.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                
                const formattedPrice = new Intl.NumberFormat('es-CO', { 
                    style: 'currency', 
                    currency: 'COP',
                    minimumFractionDigits: 0
                }).format(product.price);

                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="desc">${product.unit}</p>
                    <div class="price">
                        <span class="new-price">${formattedPrice}</span>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Agregar al carrito</button>
                `;
                productContainer.appendChild(card);
            });
        });
    }

    // Renderizado inicial
    renderProducts();

    // LÃ³gica para los botones de filtrado de categorÃ­as
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos
            filterBtns.forEach(b => b.classList.remove('active'));
            // AÃ±adir clase active al botÃ³n clickeado
            btn.classList.add('active');
            
            // Renderizar los productos filtrados
            const filterValue = btn.getAttribute('data-filter');
            renderProducts(filterValue);
        });
    });

    // SimulaciÃ³n de "Tiempo Real" para los precios
    // Cambia aleatoriamente un precio cada 8 segundos para demostrar la interactividad
    setInterval(() => {
        if (!productContainer) return;

        const randomProductIndex = Math.floor(Math.random() * products.length);
        const fluctuation = Math.floor(Math.random() * 1000) - 500; // FluctÃºa entre -500 y +500 pesos
        
        products[randomProductIndex].price += fluctuation;
        
        // Evitar que el precio baje de cierto lÃ­mite
        if(products[randomProductIndex].price < 5000) {
            products[randomProductIndex].price = 5000;
        }

        // Re-renderizar si estamos viendo la categorÃ­a afectada o "todos"
        const activeFilterBtn = document.querySelector('.filter-btn.active');
        if (activeFilterBtn) {
            const activeFilter = activeFilterBtn.getAttribute('data-filter');
            if (activeFilter === 'todos' || activeFilter === products[randomProductIndex].category) {
                renderProducts(activeFilter);
            }
        }
        
    }, 8000);
});


















document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 30;
            const y = (window.innerHeight / 2 - e.pageY) / 30;
            heroSection.style.setProperty('--mouseX', `${x}px`);
            heroSection.style.setProperty('--mouseY', `${y}px`);
        });
        heroSection.addEventListener('mouseleave', () => {
            heroSection.style.setProperty('--mouseX', '0px');
            heroSection.style.setProperty('--mouseY', '0px');
        });
    }
});

// === LÓGICA DEL CARRITO DE COMPRAS ===
let cart = JSON.parse(localStorage.getItem('salsamentaria_cart')) || [];

function saveCart() {
    localStorage.setItem('salsamentaria_cart', JSON.stringify(cart));
}

window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    
    // Opcional: mostrar una notificación o abrir el carrito automáticamente
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartSidebar && cartOverlay && !cartSidebar.classList.contains('open')) {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('show');
    }
};

window.updateCartQuantity = function(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        saveCart();
        updateCartUI();
    }
}

function updateCartUI() {
    const cartBadge = document.getElementById('cart-badge');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    if (!cartBadge || !cartItemsContainer || !cartTotalPrice) return;

    // Actualizar badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';

    // Actualizar lista de items
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--text-light); margin-top: 2rem;">Tu carrito está vacío</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const formattedPrice = new Intl.NumberFormat('es-CO', { 
                style: 'currency', 
                currency: 'COP',
                minimumFractionDigits: 0
            }).format(item.price);

            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${formattedPrice}</div>
                    <div class="cart-item-actions">
                        <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
    }

    // Actualizar precio total
    cartTotalPrice.textContent = new Intl.NumberFormat('es-CO', { 
        style: 'currency', 
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(total);
}

document.addEventListener('DOMContentLoaded', () => {
    // Eventos UI del Carrito
    const cartFloatBtn = document.getElementById('cart-float-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    const whatsappOrderBtn = document.getElementById('whatsapp-order-btn');

    if (cartFloatBtn && cartSidebar && closeCartBtn && cartOverlay) {
        cartFloatBtn.addEventListener('click', () => {
            cartSidebar.classList.add('open');
            cartOverlay.classList.add('show');
        });

        const closeCart = () => {
            cartSidebar.classList.remove('open');
            cartOverlay.classList.remove('show');
        };

        closeCartBtn.addEventListener('click', closeCart);
        cartOverlay.addEventListener('click', closeCart);
    }

    if (whatsappOrderBtn) {
        whatsappOrderBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('El carrito está vacío. Agrega productos antes de generar un pedido.');
                return;
            }

            let message = 'Hola Salsamentaria Sofi, me gustaría realizar el siguiente pedido:\n\n';
            let total = 0;

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const formattedPrice = new Intl.NumberFormat('es-CO', { 
                    style: 'currency', 
                    currency: 'COP',
                    minimumFractionDigits: 0
                }).format(item.price);
                
                const formattedTotal = new Intl.NumberFormat('es-CO', { 
                    style: 'currency', 
                    currency: 'COP',
                    minimumFractionDigits: 0
                }).format(itemTotal);

                message += `- ${item.quantity}x ${item.name} (${item.unit}) a ${formattedPrice} = ${formattedTotal}\n`;
            });

            const formattedFinalTotal = new Intl.NumberFormat('es-CO', { 
                style: 'currency', 
                currency: 'COP',
                minimumFractionDigits: 0
            }).format(total);

            message += `\n*Total a pagar: ${formattedFinalTotal}*`;

            const encodedMessage = encodeURIComponent(message);
            // Reemplaza el número con el número de la tienda real
            const whatsappUrl = `https://api.whatsapp.com/send?phone=573204867044&text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

    // Renderizado inicial del carrito
    updateCartUI();
});
