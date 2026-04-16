<script setup lang="ts">
import CrearProductoForm from '@/components/productos/CrearProductoForm.vue'
</script>

<template>
    <div class="content-area">
        <section class="content-section">
            <div class="content-card">
                <div class="card-header-line">
                    <h2>Crear producto</h2>
                    <p class="muted-text">Formulario simple para agregar un nuevo producto.</p>
                </div>

                <CrearProductoForm />
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

@media (max-width: 640px) {
    .content-card {
        padding: 12px;
    }
}
</style>
