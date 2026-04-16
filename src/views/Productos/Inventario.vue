<script setup lang="ts">
// Datos quemada de ejemplo para la tabla de productos
const inventarioDemo = [
    { codigo: 'PRD-001', nombre: 'Teclado Mecanico K68', stock: 22, minimo: 10, ubicacion: 'Bodega A' },
    { codigo: 'PRD-002', nombre: 'Mouse Inalambrico M220', stock: 48, minimo: 20, ubicacion: 'Bodega A' },
    { codigo: 'PRD-003', nombre: 'Monitor 24" Full HD', stock: 9, minimo: 8, ubicacion: 'Bodega B' },
    { codigo: 'PRD-004', nombre: 'Base Enfriadora N120', stock: 0, minimo: 5, ubicacion: 'Bodega B' },
]
</script>

<template>
    <div class="content-area">
        <section class="content-section">
            <div class="content-card">
                <div class="card-header-line">
                    <h2>Inventario de productos</h2>
                    <p class="muted-text">Vista visual de existencias, minima y ubicacion de almacen.</p>
                </div>

                <div class="inventory-summary">
                    <div class="mini-report-card">
                        <span>Productos en stock</span>
                        <strong>109</strong>
                    </div>
                    <div class="mini-report-card">
                        <span>Stock bajo</span>
                        <strong>15</strong>
                    </div>
                    <div class="mini-report-card">
                        <span>Agotados</span>
                        <strong>4</strong>
                    </div>
                </div>

                <div class="toolbar">
                    <div class="search-box">
                        <input type="text" placeholder="Buscar en inventario">
                    </div>
                    <select class="filter-select">
                        <option selected>Filtrar por ubicacion</option>
                        <option>Bodega A</option>
                        <option>Bodega B</option>
                    </select>
                    <button type="button" class="outline">Exportar</button>
                </div>

                <div class="table-wrap">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Producto</th>
                                <th>Stock actual</th>
                                <th>Stock minimo</th>
                                <th>Ubicacion</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in inventarioDemo" :key="item.codigo">
                                <td>{{ item.codigo }}</td>
                                <td>{{ item.nombre }}</td>
                                <td>{{ item.stock }}</td>
                                <td>{{ item.minimo }}</td>
                                <td>{{ item.ubicacion }}</td>
                                <td>
                                    <span class="status-pill" :class="{ inactive: item.stock === 0 }">
                                        {{ item.stock === 0 ? 'Sin stock' : item.stock <= item.minimo ? 'Bajo' : 'OK' }}
                                            </span>
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
    overflow: visible;
    height: auto;
}

.content-section {
    display: block;
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

.inventory-summary {
    display: grid;
    grid-template-columns: repeat(3, minmax(160px, 1fr));
    gap: 16px;
    margin-bottom: 18px;
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

.outline {
    background: white;
    color: var(--sidebar-blue-dark);
    border: 1px solid #bfd8ef;
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

.status-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 72px;
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

@media (max-width: 1200px) {
    .inventory-summary {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 900px) {
    .toolbar {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 640px) {
    .content-card {
        padding: 12px;
    }
}
</style>
