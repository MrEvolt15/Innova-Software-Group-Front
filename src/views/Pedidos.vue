<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello from Pedidos')
</script>

<template>
    <section id="pedidos" class="content-section">
        <div class="content-card">
            <div class="card-header-line">
                <h2>Pedidos</h2>
            </div>

            <div class="dashboard-grid-two">
                <div class="order-panel-block">
                    <div class="form-group">
                        <label for="clientName">Nombre</label>
                        <input type="text" id="clientName" placeholder="Ingrese el nombre del cliente">
                    </div>
                    <div class="form-group">
                        <label for="clientPhone">Teléfono</label>
                        <input type="text" id="clientPhone" placeholder="Ingrese el teléfono">
                    </div>
                    <div class="form-group">
                        <label for="clientAddress">Dirección</label>
                        <input type="text" id="clientAddress" placeholder="Ingrese la dirección">
                    </div>
                    <div class="form-group">
                        <label for="clientNotes">Observación</label>
                        <textarea id="clientNotes" rows="3" placeholder="Notas adicionales"></textarea>
                    </div>

                    <div class="search-box">
                        <input type="text" id="search" placeholder="Buscar producto por nombre o código">
                    </div>
                    <div class="product-list" id="productList"></div>
                </div>

                <div class="summary-panel-block">
                    <div class="cart-list" id="cartList"></div>
                    <div class="summary">
                        <p><span>Subtotal</span><span id="subtotal">$0.00</span></p>
                        <p><span>IVA 15%</span><span id="tax">$0.00</span></p>
                        <p class="total"><span>Total</span><span id="total">$0.00</span></p>
                    </div>
                    <div class="actions vertical-actions">
                        <button type="button" onclick="saveOrder()">Guardar pedido</button>
                        <button type="button" class="secondary" onclick="clearOrder()">Limpiar</button>
                    </div>
                </div>
            </div>

            <div class="table-wrap">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Cliente</th>
                            <th>Teléfono</th>
                            <th>Total</th>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody id="ordersTableBody">
                        <tr>
                            <td colspan="5" class="empty-cell">No hay pedidos registrados.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<style scoped>
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
}

.dashboard-grid-two {
    display: grid;
    grid-template-columns: 1.5fr 0.9fr;
    gap: 18px;
}

.order-panel-block,
.summary-panel-block {
    background: #fafbfd;
    border: 1px solid #e9eef3;
    border-radius: 10px;
    padding: 16px;
}

.form-group {
    margin-bottom: 14px;
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
.search-box input {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 8px;
    outline: none;
    padding: 11px 12px;
    font-size: 14px;
    background: #fff;
}

.search-box {
    margin-bottom: 16px;
}

.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 14px;
}

.product {
    background: #fff;
    border: 1px solid #e6edf3;
    border-radius: 10px;
    padding: 14px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
}

.product h3 {
    font-size: 16px;
    margin-bottom: 8px;
    color: var(--text);
}

.product p {
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 6px;
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

.cart-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 120px;
    max-height: 320px;
    overflow-y: auto;
    margin-bottom: 16px;
}

.cart-item {
    background: white;
    border: 1px solid #e6edf3;
    border-radius: 10px;
    padding: 12px;
}

.cart-item-top {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
}

.qty-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.qty-controls button {
    padding: 6px 10px;
    min-width: 36px;
}

.summary {
    background: #f8fbff;
    border: 1px solid #dcecf7;
    border-radius: 10px;
    padding: 14px;
}

.summary p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 14px;
}

.summary .total {
    font-size: 18px;
    font-weight: 700;
    color: var(--sidebar-blue-dark);
}

.actions {
    display: flex;
    gap: 10px;
    margin-top: 14px;
    flex-wrap: wrap;
}

.vertical-actions {
    flex-direction: column;
}

.table-wrap {
    width: 100%;
    overflow-x: auto;
    margin-top: 18px;
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

.empty-cell {
    color: var(--muted);
}

@media (max-width: 1200px) {
    .dashboard-grid-two {
        grid-template-columns: 1fr;
    }
}
</style>