<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
    localStorage.clear()
    sessionStorage.clear()
    router.push('/')
}
</script>

<template>
    <header class="app-header">
        <h1 class="header-title">Innova Software Group</h1>
        <img src="/logo.png" alt="Innova Software Group" class="header-logo">
        <div class="header-actions">
            <RouterLink to="/administrador" class="header-button header-button-secondary">
                Administrador
            </RouterLink>
            <button type="button" class="header-button header-button-danger" @click="handleLogout">
                Salir
            </button>
        </div>
    </header>
</template>

<style scoped>
:root {
    --sidebar-blue: #0c86d8;
    --sidebar-blue-dark: #086fb6;
    --header-bg: #ffffff;
    --page-bg: #f4f6f8;
    --card-bg: #ffffff;
    --border: #dfe5ea;
    --text: #1f2937;
    --muted: #6b7280;
    --accent: #15b9c9;
    --accent-soft: #e8f9fb;
    --danger: #dc2626;
    --shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    --radius: 10px;
}

* {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

.app-header {
    min-height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.5rem 1.25rem;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
    border-radius: 0.5rem;
    position: relative;
}

.header-actions {
    position: absolute;
    right: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 0 0 auto;
}

.header-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #0f68ff;
    flex: 0 0 auto;
}

.header-logo {
    height: 65px;
    object-fit: contain;
    max-width: 300px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.header-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: transform 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
}

.header-button:hover {
    transform: translateY(-1px);
}

.header-button-secondary {
    color: #1f2937;
    background: #f8fafc;
    border-color: #dbe2ea;
}

.header-button-secondary:hover {
    background: #eef4ff;
    border-color: #bfd0ff;
}

.header-button-danger {
    color: #ffffff;
    background: #dc2626;
    border-color: #dc2626;
}

.header-button-danger:hover {
    background: #b91c1c;
    border-color: #b91c1c;
}

@media (max-width: 640px) {
    .app-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .header-title {
        font-size: 1.25rem;
    }
}
</style>