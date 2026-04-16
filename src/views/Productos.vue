<script setup lang="ts">
// Datos quemada de ejemplo para la tabla de productos
const productosDemo = [
    {
        codigo: 'PRD-001',
        nombre: 'Teclado Mecanico K68',
        categoria: 'Perifericos',
        precio: '$85.00',
        stock: 22,
        estado: 'Activo'
    },
    {
        codigo: 'PRD-002',
        nombre: 'Mouse Inalambrico M220',
        categoria: 'Perifericos',
        precio: '$29.90',
        stock: 48,
        estado: 'Activo'
    },
    {
        codigo: 'PRD-003',
        nombre: 'Monitor 24" Full HD',
        categoria: 'Monitores',
        precio: '$179.00',
        stock: 9,
        estado: 'Activo'
    },
    {
        codigo: 'PRD-004',
        nombre: 'Base Enfriadora N120',
        categoria: 'Accesorios',
        precio: '$34.50',
        stock: 0,
        estado: 'Inactivo'
    }
]
</script>

<template>
    <div class="content-area">
        <section class="content-section">
            <div class="section-header-tabs">
                <button type="button" class="tab-btn">Gestion de productos</button>
                <button type="button" class="tab-btn">Inventario</button>
            </div>

            <div class="content-card">
                <div class="card-header-line">
                    <h2>CRUD de productos</h2>
                    <p class="muted-text">Vista visual para crear, consultar, editar y eliminar productos.</p>
                </div>

                <div class="crud-layout">
                    <form class="product-form" autocomplete="off">
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="codigo">Codigo</label>
                                <input id="codigo" type="text" placeholder="Ej: PRD-005">
                            </div>

                            <div class="form-group span-2">
                                <label for="nombre">Nombre del producto</label>
                                <input id="nombre" type="text" placeholder="Ej: Audifonos Bluetooth X5">
                            </div>

                            <div class="form-group">
                                <label for="categoria">Categoria</label>
                                <select id="categoria">
                                    <option selected>Perifericos</option>
                                    <option>Monitores</option>
                                    <option>Accesorios</option>
                                    <option>Almacenamiento</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="precio">Precio</label>
                                <input id="precio" type="text" placeholder="0.00">
                            </div>

                            <div class="form-group">
                                <label for="stock">Stock</label>
                                <input id="stock" type="number" placeholder="0">
                            </div>

                            <div class="form-group">
                                <label for="estado">Estado</label>
                                <select id="estado">
                                    <option selected>Activo</option>
                                    <option>Inactivo</option>
                                </select>
                            </div>

                            <div class="form-group span-2">
                                <label for="descripcion">Descripcion</label>
                                <textarea id="descripcion" rows="3"
                                    placeholder="Breve descripcion del producto"></textarea>
                            </div>
                        </div>

                        <div class="actions">
                            <button type="button">Guardar</button>
                            <button type="button" class="secondary">Actualizar</button>
                            <button type="button" class="ghost">Limpiar</button>
                            <button type="button" class="danger">Eliminar</button>
                        </div>
                    </form>

                    <div class="stats-grid">
                        <div class="mini-report-card">
                            <span>Total productos</span>
                            <strong>124</strong>
                        </div>
                        <div class="mini-report-card">
                            <span>Activos</span>
                            <strong>109</strong>
                        </div>
                        <div class="mini-report-card">
                            <span>Sin stock</span>
                            <strong>15</strong>
                        </div>
                    </div>
                </div>

                <div class="toolbar">
                    <div class="search-box">
                        <input type="text" placeholder="Buscar por nombre o codigo">
                    </div>
                    <select class="filter-select">
                        <option selected>Todas las categorias</option>
                        <option>Perifericos</option>
                        <option>Monitores</option>
                        <option>Accesorios</option>
                    </select>
                    <button type="button" class="outline">Nuevo producto</button>
                </div>

                <div class="table-wrap">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="producto in productosDemo" :key="producto.codigo">
                                <td>{{ producto.codigo }}</td>
                                <td>{{ producto.nombre }}</td>
                                <td>{{ producto.categoria }}</td>
                                <td>{{ producto.precio }}</td>
                                <td>
                                    <span class="stock-pill" :class="{ low: producto.stock <= 10 }">
                                        {{ producto.stock }}
                                    </span>
                                </td>
                                <td>
                                    <span class="status-pill" :class="{ inactive: producto.estado === 'Inactivo' }">
                                        {{ producto.estado }}
                                    </span>
                                </td>
                                <td>
                                    <div class="row-actions">
                                        <button type="button" class="mini-btn">Editar</button>
                                        <button type="button" class="mini-btn secondary">Ver</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.content-area {
    padding: 0;
    overflow: auto;
    height: 100%;
}

.content-section {
    display: block;
}

.section-header-tabs {
    display: flex;
    align-items: flex-end;
    height: max-content;
    gap: 4px;
    margin-bottom: 0;
    top: 0;
    z-index: 20;
    background: var(--page-bg, #f4f6f8);
    padding: 2px;
    border-bottom: 2px solid var(--accent);
}

.tab-btn {
    background: transparent;
    border: 1px solid #3e81ec;
    padding: 14px 18px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: var(--text);
    font-weight: 700;
    cursor: pointer;
}

.content-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-top: none;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 18px;
}

.card-header-line {
    padding-bottom: 14px;
    margin-bottom: 18px;
    border-bottom: 1px solid #eef2f7;
}

.card-header-line h2 {
    font-size: 18px;
    color: var(--text);
    margin-bottom: 6px;
}

.muted-text {
    color: var(--muted);
    font-size: 14px;
}

.crud-layout {
    display: grid;
    grid-template-columns: 1.7fr 1fr;
    gap: 18px;
    margin-bottom: 18px;
}

.product-form,
.stats-grid {
    background: #fafbfd;
    border: 1px solid #e9eef3;
    border-radius: 10px;
    padding: 16px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(120px, 1fr));
    gap: 12px;
}

.form-group {
    margin-bottom: 2px;
}

.span-2 {
    grid-column: span 2;
}

.form-group label {
    display: block;
    margin-bottom: 6px;
    color: #374151;
    font-size: 14px;
    font-weight: 700;
}

.form-group input,
.form-group textarea,
.form-group select,
.search-box input,
.filter-select {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 8px;
    outline: none;
    padding: 11px 12px;
    font-size: 14px;
    background: #fff;
    color: var(--text);
}

.actions {
    display: flex;
    gap: 10px;
    margin-top: 14px;
    flex-wrap: wrap;
}

button {
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.15s ease, opacity 0.15s ease;
    background: var(--sidebar-blue);
    color: white;
    padding: 10px 14px;
    font-weight: 700;
}

button:hover {
    transform: translateY(-1px);
    opacity: 0.95;
}

.secondary {
    background: #6b7280;
}

.ghost {
    background: #e5e7eb;
    color: #374151;
}

.danger {
    background: #dc2626;
}

.outline {
    background: white;
    color: var(--sidebar-blue-dark);
    border: 1px solid #bfd8ef;
}

.stats-grid {
    display: grid;
    gap: 12px;
    align-content: start;
}

.mini-report-card {
    background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
    border: 1px solid #e4edf4;
    border-radius: 12px;
    padding: 18px;
    box-shadow: var(--shadow);
}

.mini-report-card span {
    display: block;
    color: var(--muted);
    margin-bottom: 10px;
    font-size: 14px;
}

.mini-report-card strong {
    font-size: 24px;
    color: var(--sidebar-blue-dark);
}

.toolbar {
    display: grid;
    grid-template-columns: 1.5fr 1fr auto;
    gap: 10px;
    margin-bottom: 14px;
}

.table-wrap {
    width: 100%;
    overflow-x: auto;
}

.data-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
}

.data-table th,
.data-table td {
    padding: 12px 10px;
    text-align: left;
    border-bottom: 1px solid #edf2f7;
    font-size: 14px;
}

.data-table th {
    background: #f8fafc;
    color: #374151;
    font-weight: 700;
}

.status-pill,
.stock-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 62px;
    padding: 5px 9px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    background: #dcfce7;
    color: #166534;
}

.status-pill.inactive {
    background: #fee2e2;
    color: #991b1b;
}

.stock-pill.low {
    background: #fff1d6;
    color: #9a6700;
}

.row-actions {
    display: flex;
    gap: 8px;
}

.mini-btn {
    padding: 6px 10px;
    font-size: 12px;
}

@media (max-width: 1200px) {
    .crud-layout {
        grid-template-columns: 1fr;
    }

    .form-grid {
        grid-template-columns: repeat(2, minmax(120px, 1fr));
    }
}

@media (max-width: 900px) {
    .toolbar {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 640px) {
    .form-grid {
        grid-template-columns: 1fr;
    }

    .span-2 {
        grid-column: span 1;
    }

    .section-header-tabs {
        flex-wrap: wrap;
    }

    .tab-btn {
        padding: 10px 14px;
        font-size: 14px;
    }

    .content-card {
        padding: 12px;
    }
}
</style>