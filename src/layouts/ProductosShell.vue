<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

const isGestionActive = computed(() => route.path.toLowerCase().startsWith('/app/productos/gestion'))
const isInventarioActive = computed(() => route.path.toLowerCase().startsWith('/app/productos/inventario'))
</script>

<template>
    <div class="productos-shell">
        <div class="section-header-tabs">
            <RouterLink to="/app/productos/gestion" class="tab-btn" :class="{ active: isGestionActive }">
                Gestion de productos
            </RouterLink>
            <RouterLink to="/app/productos/inventario" class="tab-btn" :class="{ active: isInventarioActive }">
                Inventario
            </RouterLink>
        </div>

        <div class="productos-shell__body">
            <RouterView v-slot="{ Component, route: childRoute }">
                <Transition name="panel" mode="out-in">
                    <div class="productos-shell__panel" :key="childRoute.fullPath">
                        <component :is="Component" />
                    </div>
                </Transition>
            </RouterView>
        </div>
    </div>
</template>

<style scoped>
.productos-shell {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow: hidden;
}

.section-header-tabs {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    margin-bottom: 0;
    position: sticky;
    top: 0;
    z-index: 20;
    background: var(--page-bg, #f4f6f8);
    padding-top: 2px;
    border-bottom: 2px solid var(--accent, #15b9c9);
}

.tab-btn {
    display: inline-flex;
    align-items: center;
    background: transparent;
    border: 1px solid transparent;
    border-bottom: none;
    padding: 14px 18px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: var(--text, #1f2937);
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
}

.tab-btn.active {
    background: white;
    border-color: var(--accent, #15b9c9);
    color: var(--sidebar-blue-dark, #086fb6);
}

.productos-shell__body {
    min-height: 0;
    flex: 1;
    overflow: auto;
}

.productos-shell__panel {
    min-height: 100%;
}

@media (max-width: 640px) {
    .section-header-tabs {
        flex-wrap: wrap;
    }

    .tab-btn {
        padding: 10px 14px;
        font-size: 14px;
    }
}
</style>
