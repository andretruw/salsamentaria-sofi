/**
 * Panel de Administración de Productos - Salsamentaria Sofi
 * Gestión de autenticación, CRUD de productos, persistencia en localStorage,
 * exportación/importación y control de inventario 100% frontend.
 */

// Credenciales autorizadas
const ADMIN_EMAIL = "andreatrujillosm1302@gmail.com";
const ADMIN_PASS = "andretru1706!";

const AUTH_KEY = "salsamentaria_admin_auth";
const AUTH_PERSIST_KEY = "salsamentaria_admin_persist";

// Estado interno
let currentProducts = [];
let editingProductId = null;
let activeSearchQuery = "";
let activeCategoryFilter = "todos";
let activeSortOption = "id_asc";

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    setupEventListeners();
});

// === GESTIÓN DE AUTENTICACIÓN ===
function checkIsAuthenticated() {
    return sessionStorage.getItem(AUTH_KEY) === 'true' || localStorage.getItem(AUTH_KEY) === 'true';
}

function initAuth() {
    const isAuth = checkIsAuthenticated();
    const loginSection = document.getElementById('admin-login-section');
    const dashboardSection = document.getElementById('admin-dashboard-section');

    if (isAuth) {
        if (loginSection) loginSection.style.display = 'none';
        if (dashboardSection) dashboardSection.style.display = 'block';
        loadProductsData();
        renderDashboard();
    } else {
        if (loginSection) loginSection.style.display = 'block';
        if (dashboardSection) dashboardSection.style.display = 'none';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const emailInput = document.getElementById('adminEmail').value.trim();
    const passInput = document.getElementById('adminPassword').value.trim();
    const rememberMe = document.getElementById('rememberMe').checked;
    const alertBox = document.getElementById('loginAlert');

    if (emailInput.toLowerCase() === ADMIN_EMAIL.toLowerCase() && passInput === ADMIN_PASS) {
        if (alertBox) alertBox.style.display = 'none';
        
        sessionStorage.setItem(AUTH_KEY, 'true');
        if (rememberMe) {
            localStorage.setItem(AUTH_KEY, 'true');
        }

        showToast("¡Bienvenida, Andrea! Acceso concedido.", "success");
        initAuth();
    } else {
        if (alertBox) {
            alertBox.style.display = 'flex';
            alertBox.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Correo o contraseña incorrectos. Verifica tus datos.';
        }
        showToast("Credenciales inválidas", "error");
    }
}

function handleLogout() {
    if (confirm("¿Deseas cerrar la sesión del panel de administración?")) {
        sessionStorage.removeItem(AUTH_KEY);
        localStorage.removeItem(AUTH_KEY);
        showToast("Sesión finalizada", "info");
        initAuth();
    }
}

// === CARGA Y SINCRONIZACIÓN DE PRODUCTOS ===
function loadProductsData() {
    // Intentar usar el helper global definido en script.js
    if (typeof window.getStoredProducts === 'function') {
        currentProducts = window.getStoredProducts();
    } else {
        // Fallback manual si script.js no cargó correctamente
        const stored = localStorage.getItem('salsamentaria_products');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    currentProducts = parsed;
                } else {
                    currentProducts = window.initialProducts ? JSON.parse(JSON.stringify(window.initialProducts)) : [];
                }
            } catch (err) {
                currentProducts = window.initialProducts ? JSON.parse(JSON.stringify(window.initialProducts)) : [];
            }
        } else {
            currentProducts = window.initialProducts ? JSON.parse(JSON.stringify(window.initialProducts)) : [];
        }
    }

    // Si después de todo currentProducts está vacío pero initialProducts tiene datos,
    // usar initialProducts como fallback y guardar en localStorage
    if (currentProducts.length === 0 && window.initialProducts && window.initialProducts.length > 0) {
        currentProducts = JSON.parse(JSON.stringify(window.initialProducts));
        localStorage.setItem('salsamentaria_products', JSON.stringify(currentProducts));
    }
}

function persistProducts() {
    if (typeof window.saveStoredProducts === 'function') {
        window.saveStoredProducts(currentProducts);
    } else {
        localStorage.setItem('salsamentaria_products', JSON.stringify(currentProducts));
    }
}


// === RENDERIZADO DEL DASHBOARD ===
function renderDashboard() {
    updateStats();
    updateCategoryFilterDropdown();
    renderProductsTable();
}

function updateStats() {
    const totalEl = document.getElementById('statTotalProducts');
    const categoriesEl = document.getElementById('statTotalCategories');
    const avgPriceEl = document.getElementById('statAvgPrice');
    const promosEl = document.getElementById('statTotalPromos');

    const total = currentProducts.length;
    const categories = new Set(currentProducts.map(p => p.category)).size;
    const totalSum = currentProducts.reduce((acc, p) => acc + (Number(p.price) || 0), 0);
    const avgPrice = total > 0 ? Math.round(totalSum / total) : 0;
    const promoCount = currentProducts.filter(p => p.category === 'promociones').length;

    if (totalEl) totalEl.textContent = total;
    if (categoriesEl) categoriesEl.textContent = categories;
    if (avgPriceEl) {
        avgPriceEl.textContent = new Intl.NumberFormat('es-CO', { 
            style: 'currency', 
            currency: 'COP', 
            maximumFractionDigits: 0 
        }).format(avgPrice);
    }
    if (promosEl) promosEl.textContent = promoCount;
}

function updateCategoryFilterDropdown() {
    const filterSelect = document.getElementById('categoryFilterSelect');
    if (!filterSelect) return;

    const currentVal = filterSelect.value;
    const categories = [...new Set(currentProducts.map(p => p.category))].sort();

    filterSelect.innerHTML = '<option value="todos">Todas las categorías</option>';
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        if (cat === currentVal) opt.selected = true;
        filterSelect.appendChild(opt);
    });
}

function getFilteredAndSortedProducts() {
    let result = [...currentProducts];

    // Filtrar por búsqueda
    if (activeSearchQuery.trim() !== "") {
        const q = activeSearchQuery.toLowerCase().trim();
        result = result.filter(p => 
            p.name.toLowerCase().includes(q) || 
            String(p.id).includes(q) ||
            p.category.toLowerCase().includes(q)
        );
    }

    // Filtrar por categoría
    if (activeCategoryFilter !== "todos") {
        result = result.filter(p => p.category.toLowerCase() === activeCategoryFilter.toLowerCase());
    }

    // Ordenamiento
    switch (activeSortOption) {
        case "id_asc":
            result.sort((a, b) => a.id - b.id);
            break;
        case "id_desc":
            result.sort((a, b) => b.id - a.id);
            break;
        case "name_asc":
            result.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name_desc":
            result.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "price_asc":
            result.sort((a, b) => a.price - b.price);
            break;
        case "price_desc":
            result.sort((a, b) => b.price - a.price);
            break;
    }

    return result;
}

function renderProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    const tableCounter = document.getElementById('tableProductsCounter');
    if (!tbody) return;

    const productsToRender = getFilteredAndSortedProducts();

    if (tableCounter) {
        tableCounter.textContent = `Mostrando ${productsToRender.length} de ${currentProducts.length} productos`;
    }

    tbody.innerHTML = '';

    if (productsToRender.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 3rem 1rem; color: var(--text-light);">
                    <i class="fas fa-search" style="font-size: 2.2rem; margin-bottom: 0.8rem; display: block; opacity: 0.4;"></i>
                    No se encontraron productos que coincidan con la búsqueda o filtro aplicado.
                </td>
            </tr>
        `;
        return;
    }

    productsToRender.forEach(prod => {
        const formattedPrice = new Intl.NumberFormat('es-CO', { 
            style: 'currency', 
            currency: 'COP', 
            minimumFractionDigits: 0 
        }).format(prod.price);

        const badgeClass = `badge-${prod.category.toLowerCase()}`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <img src="${prod.image}" alt="${prod.name}" class="product-thumb" onerror="this.src='../Logo/Favicon.jpeg'">
            </td>
            <td><strong>#${prod.id}</strong></td>
            <td>
                <span style="font-weight: 600; color: #1e293b;">${prod.name}</span>
            </td>
            <td>
                <span class="badge-category ${badgeClass}">${prod.category}</span>
            </td>
            <td>${prod.unit || 'Unidad'}</td>
            <td><strong style="color: var(--primary-color); font-size: 1.05rem;">${formattedPrice}</strong></td>
            <td>
                <div class="table-actions">
                    <button class="btn-action-icon btn-edit" title="Editar producto" onclick="openProductModal(${prod.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-action-icon btn-delete" title="Eliminar producto" onclick="deleteProduct(${prod.id})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// === GESTIÓN DE PRODUCTOS (MODAL CRUD) ===
window.openProductModal = function(productId = null) {
    editingProductId = productId;
    const modalOverlay = document.getElementById('productModalOverlay');
    const modalTitle = document.getElementById('productModalTitle');
    const form = document.getElementById('productForm');

    // Resetear formulario
    form.reset();
    document.getElementById('productImagePreview').src = '';
    document.getElementById('productImagePreview').style.display = 'none';
    document.getElementById('productImagePlaceholder').style.display = 'block';

    if (productId !== null) {
        // Modo Editar
        const product = currentProducts.find(p => p.id === productId);
        if (!product) return;

        modalTitle.textContent = `Editar Producto #${product.id}`;
        document.getElementById('productIdInput').value = product.id;
        document.getElementById('productIdInput').readOnly = true;
        document.getElementById('productNameInput').value = product.name;
        
        // Manejar categoría (si no está en el select, usar custom)
        const categorySelect = document.getElementById('productCategorySelect');
        const customCatGroup = document.getElementById('customCategoryGroup');
        const standardCats = ['embutidos', 'lacteos', 'salsas', 'desechables', 'panaderia', 'promociones'];
        
        if (standardCats.includes(product.category.toLowerCase())) {
            categorySelect.value = product.category.toLowerCase();
            customCatGroup.style.display = 'none';
        } else {
            categorySelect.value = 'otra';
            customCatGroup.style.display = 'block';
            document.getElementById('customCategoryInput').value = product.category;
        }

        document.getElementById('productUnitInput').value = product.unit;
        document.getElementById('productPriceInput').value = product.price;
        document.getElementById('productImageUrlInput').value = product.image;

        if (product.image) {
            const preview = document.getElementById('productImagePreview');
            preview.src = product.image;
            preview.style.display = 'block';
            document.getElementById('productImagePlaceholder').style.display = 'none';
        }
    } else {
        // Modo Nuevo
        modalTitle.textContent = "Crear Nuevo Producto";
        // Calcular nuevo ID disponible
        const maxId = currentProducts.length > 0 ? Math.max(...currentProducts.map(p => Number(p.id) || 0)) : 100;
        document.getElementById('productIdInput').value = maxId + 1;
        document.getElementById('productIdInput').readOnly = false;
        document.getElementById('customCategoryGroup').style.display = 'none';
    }

    if (modalOverlay) modalOverlay.classList.add('active');
};

function closeProductModal() {
    const modalOverlay = document.getElementById('productModalOverlay');
    if (modalOverlay) modalOverlay.classList.remove('active');
    editingProductId = null;
}

function handleProductFormSubmit(e) {
    e.preventDefault();

    const id = Number(document.getElementById('productIdInput').value);
    const name = document.getElementById('productNameInput').value.trim();
    const categorySelect = document.getElementById('productCategorySelect').value;
    const customCategory = document.getElementById('customCategoryInput').value.trim();
    const unit = document.getElementById('productUnitInput').value.trim();
    const price = Number(document.getElementById('productPriceInput').value);
    const imageUrl = document.getElementById('productImageUrlInput').value.trim() || "../Logo/Favicon.jpeg";

    if (!name || isNaN(price) || price < 0) {
        showToast("Por favor ingresa un nombre y precio válidos.", "error");
        return;
    }

    const finalCategory = (categorySelect === 'otra') 
        ? (customCategory || 'otros').toLowerCase() 
        : categorySelect.toLowerCase();

    if (editingProductId !== null) {
        // Actualizar existente
        const index = currentProducts.findIndex(p => p.id === editingProductId);
        if (index !== -1) {
            currentProducts[index] = {
                id: editingProductId,
                name,
                category: finalCategory,
                unit: unit || "Unidad",
                price,
                image: imageUrl
            };
            showToast(`Producto "${name}" modificado con éxito.`, "success");
        }
    } else {
        // Comprobar ID duplicado
        if (currentProducts.some(p => p.id === id)) {
            showToast(`Ya existe un producto con el ID #${id}. Elige otro ID.`, "error");
            return;
        }

        // Agregar nuevo
        currentProducts.unshift({
            id,
            name,
            category: finalCategory,
            unit: unit || "Unidad",
            price,
            image: imageUrl
        });
        showToast(`Producto "${name}" creado exitosamente.`, "success");
    }

    persistProducts();
    closeProductModal();
    renderDashboard();
}

window.deleteProduct = function(productId) {
    const prod = currentProducts.find(p => p.id === productId);
    if (!prod) return;

    if (confirm(`¿Estás segura de eliminar el producto "${prod.name}" (ID #${prod.id})?`)) {
        currentProducts = currentProducts.filter(p => p.id !== productId);
        persistProducts();
        showToast(`Producto "${prod.name}" eliminado correctamente.`, "info");
        renderDashboard();
    }
};

window.resetToDefaultProducts = function() {
    const initialList = window.initialProducts || [];
    if (initialList.length === 0) {
        showToast("No se encontraron productos iniciales de respaldo.", "error");
        return;
    }

    if (confirm("⚠️ ¿Deseas restablecer todo el catálogo a los valores por defecto del sistema? Todos los cambios personalizados se reiniciarán.")) {
        currentProducts = JSON.parse(JSON.stringify(initialList));
        persistProducts();
        showToast("Catálogo restablecido a valores originales.", "success");
        renderDashboard();
    }
};

// === MANEJO DE IMÁGENES (SUBIDA LOCAL + URL) ===
function handleImageFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showToast("El archivo seleccionado debe ser una imagen válida.", "error");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(evt) {
        const base64Data = evt.target.result;
        document.getElementById('productImageUrlInput').value = base64Data;
        const preview = document.getElementById('productImagePreview');
        preview.src = base64Data;
        preview.style.display = 'block';
        document.getElementById('productImagePlaceholder').style.display = 'none';
        showToast("Imagen cargada y procesada", "info");
    };
    reader.readAsDataURL(file);
}

function handleImageUrlChange() {
    const url = document.getElementById('productImageUrlInput').value.trim();
    const preview = document.getElementById('productImagePreview');
    const placeholder = document.getElementById('productImagePlaceholder');

    if (url) {
        preview.src = url;
        preview.style.display = 'block';
        placeholder.style.display = 'none';
    } else {
        preview.src = '';
        preview.style.display = 'none';
        placeholder.style.display = 'block';
    }
}

// === EXPORTACIÓN / COPIA DEL CATÁLOGO PARA GITHUB ===
window.openExportModal = function() {
    const modalOverlay = document.getElementById('exportModalOverlay');
    const jsonTextarea = document.getElementById('exportJsonTextarea');

    if (jsonTextarea) {
        // Formatear código JavaScript listo para copiar y pegar en js/script.js si se desea commit
        const formattedCode = `// Catálogo de Productos exportado desde el panel de administración\nconst initialProducts = ${JSON.stringify(currentProducts, null, 4)};`;
        jsonTextarea.value = formattedCode;
    }

    if (modalOverlay) modalOverlay.classList.add('active');
};

function closeExportModal() {
    const modalOverlay = document.getElementById('exportModalOverlay');
    if (modalOverlay) modalOverlay.classList.remove('active');
}

window.copyExportCode = function() {
    const textarea = document.getElementById('exportJsonTextarea');
    if (!textarea) return;

    textarea.select();
    navigator.clipboard.writeText(textarea.value).then(() => {
        showToast("¡Código copiado al portapapeles!", "success");
    }).catch(() => {
        document.execCommand('copy');
        showToast("¡Código copiado al portapapeles!", "success");
    });
};

window.downloadJsonFile = function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentProducts, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `productos_salsamentaria_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Archivo JSON descargado", "success");
};

// === IMPORTACIÓN DE CATÁLOGO ===
window.openImportModal = function() {
    const modalOverlay = document.getElementById('importModalOverlay');
    const textarea = document.getElementById('importJsonTextarea');
    if (textarea) textarea.value = '';
    if (modalOverlay) modalOverlay.classList.add('active');
};

function closeImportModal() {
    const modalOverlay = document.getElementById('importModalOverlay');
    if (modalOverlay) modalOverlay.classList.remove('active');
}

window.handleImportSubmit = function(e) {
    e.preventDefault();
    const textarea = document.getElementById('importJsonTextarea');
    const content = textarea.value.trim();

    if (!content) {
        showToast("Por favor pega o carga el contenido JSON.", "error");
        return;
    }

    try {
        let parsed = JSON.parse(content);
        // Si pegaron el array o el objeto
        if (!Array.isArray(parsed) && parsed.products && Array.isArray(parsed.products)) {
            parsed = parsed.products;
        }

        if (!Array.isArray(parsed) || parsed.length === 0) {
            showToast("El formato debe ser un array de productos válido.", "error");
            return;
        }

        if (confirm(`¿Estás segura de importar estos ${parsed.length} productos? Reemplazarán el catálogo actual.`)) {
            currentProducts = parsed;
            persistProducts();
            showToast(`¡Se importaron ${parsed.length} productos exitosamente!`, "success");
            closeImportModal();
            renderDashboard();
        }
    } catch (err) {
        showToast("Error de sintaxis: el JSON proporcionado no es válido.", "error");
    }
};

window.handleImportFileUpload = function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        const text = evt.target.result;
        document.getElementById('importJsonTextarea').value = text;
        showToast("Archivo cargado en el campo de texto", "info");
    };
    reader.readAsText(file);
};

// === TOAST NOTIFICATIONS ===
function showToast(message, type = "info") {
    let container = document.getElementById('adminToastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'adminToastContainer';
        container.className = 'admin-toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `admin-toast ${type}`;
    
    let iconClass = 'fa-info-circle';
    if (type === 'success') iconClass = 'fa-check-circle';
    if (type === 'error') iconClass = 'fa-times-circle';

    toast.innerHTML = `<i class="fas ${iconClass}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// === EVENT LISTENERS ===
function setupEventListeners() {
    // Login
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    const logoutBtn = document.getElementById('adminLogoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

    // Toggle Password Visibility
    const togglePassBtn = document.getElementById('togglePasswordBtn');
    if (togglePassBtn) {
        togglePassBtn.addEventListener('click', () => {
            const passInput = document.getElementById('adminPassword');
            const icon = togglePassBtn.querySelector('i');
            if (passInput.type === 'password') {
                passInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }

    // Buscador
    const searchInput = document.getElementById('searchProductInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            activeSearchQuery = e.target.value;
            renderProductsTable();
        });
    }

    // Filtro Categoría
    const catSelect = document.getElementById('categoryFilterSelect');
    if (catSelect) {
        catSelect.addEventListener('change', (e) => {
            activeCategoryFilter = e.target.value;
            renderProductsTable();
        });
    }

    // Ordenamiento
    const sortSelect = document.getElementById('sortProductsSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            activeSortOption = e.target.value;
            renderProductsTable();
        });
    }

    // Modal Producto
    const productForm = document.getElementById('productForm');
    if (productForm) productForm.addEventListener('submit', handleProductFormSubmit);

    const closeProductModalBtn = document.getElementById('closeProductModal');
    if (closeProductModalBtn) closeProductModalBtn.addEventListener('click', closeProductModal);

    const cancelProductModalBtn = document.getElementById('cancelProductModal');
    if (cancelProductModalBtn) cancelProductModalBtn.addEventListener('click', closeProductModal);

    // Cambio de categoría en modal (mostrar/ocultar custom)
    const productCategorySelect = document.getElementById('productCategorySelect');
    if (productCategorySelect) {
        productCategorySelect.addEventListener('change', (e) => {
            const customGroup = document.getElementById('customCategoryGroup');
            if (customGroup) {
                customGroup.style.display = e.target.value === 'otra' ? 'block' : 'none';
            }
        });
    }

    // Subida de imagen
    const imageFileInput = document.getElementById('productImageFileInput');
    if (imageFileInput) imageFileInput.addEventListener('change', handleImageFileUpload);

    const imageUrlInput = document.getElementById('productImageUrlInput');
    if (imageUrlInput) imageUrlInput.addEventListener('input', handleImageUrlChange);

    // Modal Exportar
    const closeExportBtn = document.getElementById('closeExportModal');
    if (closeExportBtn) closeExportBtn.addEventListener('click', closeExportModal);

    // Modal Importar
    const closeImportBtn = document.getElementById('closeImportModal');
    if (closeImportBtn) closeImportBtn.addEventListener('click', closeImportModal);

    const importForm = document.getElementById('importForm');
    if (importForm) importForm.addEventListener('submit', handleImportSubmit);

    const importFileInput = document.getElementById('importFileInput');
    if (importFileInput) importFileInput.addEventListener('change', handleImportFileUpload);

    // Cerrar modales haciendo click afuera en el overlay
    document.querySelectorAll('.admin-modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });
}
