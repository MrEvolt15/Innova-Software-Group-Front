<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Left_Menu from '@/components/Left_Menu.vue'
</script>

<template>
    <div class="app-shell">
        <Header />
        <div class="app-body">
            <Left_Menu />
            <div class="viewport-container">
                <RouterView v-slot="{ Component, route }">
                    <Transition name="panel" mode="out-in">
                        <div class="panel-window" :key="route.fullPath">
                            <component :is="Component" />
                        </div>
                    </Transition>
                </RouterView>
            </div>
        </div>
    </div>
</template>

<style scoped>
:global(body) {
    margin: 0;
    border: 0;
    padding: 0;
    height: 100vh;
    background: #f4f6f8;
}

:global(#app) {
    height: 100vh;
    border: 0;
}

.app-shell {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f4f6f8;
}

.app-body {
    display: flex;
    align-items: stretch;
    flex: 1;
    overflow: hidden;
    gap: 1rem;
}

.viewport-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 1rem;
}

.panel-window {
    background: #ffffff;
    border: 1px solid #dfe5ea;
    border-radius: 14px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    padding: 1.5rem;
    min-height: 100%;
    overflow: auto;
    flex: 1;
}

.panel-enter-active,
.panel-leave-active {
    transition: all 0.22s ease;
}

.panel-enter-from,
.panel-leave-to {
    opacity: 0;
    transform: translateY(8px) scale(0.99);
}

@media (max-width: 900px) {
    .app-body {
        gap: 0.5rem;
    }

    .viewport-container {
        padding: 0.75rem;
    }

    .panel-window {
        padding: 1rem;
    }
}

@media (max-width: 640px) {
    .viewport-container {
        padding: 0.5rem;
    }

    .panel-window {
        padding: 0.75rem;
        border-radius: 10px;
    }
}
</style>
