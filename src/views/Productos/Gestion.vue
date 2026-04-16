<script setup lang="ts">
import { ref } from 'vue'
import CrearProductoForm from '@/components/productos/CrearProductoForm.vue'

const showCreateModal = ref(false)
// Datos quemada de ejemplo para la tabla de productos
const productosDemo = [
    {
        codigo: 'PRD-001',
        nombre: 'Teclado Mecanico K68',
        categoria: 'Perifericos',
        precio: '$85.00',
        stock: 22,
        estado: 'Activo',
    },
    {
        codigo: 'PRD-002',
        nombre: 'Mouse Inalambrico M220',
        categoria: 'Perifericos',
        precio: '$29.90',
        stock: 48,
        estado: 'Activo',
    },
    {
        codigo: 'PRD-003',
        nombre: 'Monitor 24" Full HD',
        categoria: 'Monitores',
        precio: '$179.00',
        stock: 9,
        estado: 'Activo',
    },
    {
        codigo: 'PRD-004',
        nombre: 'Base Enfriadora N120',
        categoria: 'Accesorios',
        precio: '$34.50',
        stock: 0,
        estado: 'Inactivo',
    },
]
</script>

<template>
    <div class="content-area">
        <section class="content-section">
            <div class="content-card">
                <div class="card-header-line">
                    <h2>Gestion de productos</h2>
                    <p class="muted-text">Administra tu catalogo y usa el formulario crear como modal reutilizable.</p>
                </div>

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
                    <button type="button" class="outline" @click="showCreateModal = true">Nuevo producto</button>
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

            <div v-if="showCreateModal" class="modal-backdrop" @click.self="showCreateModal = false">
                <div class="modal-card">
                    <div class="modal-header">
                        <h3>Nuevo producto</h3>
                        <button type="button" class="close-btn" @click="showCreateModal = false">Cerrar</button>
                    </div>
                    <CrearProductoForm />
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
    position: relative;
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

.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(180px, 1fr));
    gap: 12px;
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

.secondary {
    background: #6b7280;
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

.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.42);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    z-index: 60;
}

.modal-card {
    width: min(980px, 100%);
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: 14px;
    box-shadow: 0 18px 34px rgba(0, 0, 0, 0.22);
    max-height: 90vh;
    overflow: auto;
    padding: 16px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.modal-header h3 {
    margin: 0;
    color: var(--text);
    font-size: 18px;
}

.close-btn {
    background: #6b7280;
}

@media (max-width: 1200px) {
    .stats-grid {
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

    .modal-card {
        padding: 12px;
    }
}
</style>
