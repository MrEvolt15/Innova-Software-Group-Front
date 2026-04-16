<script setup lang="ts">
</script>
<template>
    <form class="create-product-form" autocomplete="off">
        <div class="form-grid">
            <div class="form-group">
                <label for="crear-codigo">Codigo</label>
                <input id="crear-codigo" type="text" placeholder="Ej: PRD-005">
            </div>

            <div class="form-group span-2">
                <label for="crear-nombre">Nombre del producto</label>
                <input id="crear-nombre" type="text" placeholder="Ej: Audifonos Bluetooth X5">
            </div>

            <div class="form-group">
                <label for="crear-categoria">Categoria</label>
                <select id="crear-categoria">
                    <option selected>Perifericos</option>
                    <option>Monitores</option>
                    <option>Accesorios</option>
                    <option>Almacenamiento</option>
                </select>
            </div>

            <div class="form-group">
                <label for="crear-precio">Precio</label>
                <input id="crear-precio" type="text" placeholder="0.00">
            </div>

            <div class="form-group">
                <label for="crear-stock">Stock inicial</label>
                <input id="crear-stock" type="number" placeholder="0">
            </div>

            <div class="form-group">
                <label for="crear-estado">Estado</label>
                <select id="crear-estado">
                    <option selected>Activo</option>
                    <option>Inactivo</option>
                </select>
            </div>

            <div class="form-group span-2">
                <label for="crear-descripcion">Descripcion</label>
                <textarea id="crear-descripcion" rows="3" placeholder="Breve descripcion del producto"></textarea>
            </div>
        </div>

        <div class="actions">
            <button type="button">Guardar producto</button>
            <button type="button" class="secondary">Limpiar</button>
        </div>
    </form>
</template>

<style scoped>
.create-product-form {
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
.form-group select {
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

@media (max-width: 900px) {
    .form-grid {
        grid-template-columns: repeat(2, minmax(120px, 1fr));
    }
}

@media (max-width: 640px) {
    .form-grid {
        grid-template-columns: 1fr;
    }

    .span-2 {
        grid-column: span 1;
    }
}
</style>
