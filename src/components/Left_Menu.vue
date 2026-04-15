<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { ChevronRight, Handbag, House, UserPen, PackageSearch, ChartLine, Cog } from '@lucide/vue';

const expandedMenus = ref<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
})

const toggleMenu = (menuIndex: number) => {
    expandedMenus.value[menuIndex] = !expandedMenus.value[menuIndex]

}

const isSidebarExpanded = ref(false)

const toggleSidebar = () => {
    isSidebarExpanded.value = !isSidebarExpanded.value

    if (!isSidebarExpanded.value) {
        for (const key in expandedMenus.value) {
            expandedMenus.value[key] = false
        }
    }
}
</script>

<template>
    <nav class="navbar" :class="{ collapsed: !isSidebarExpanded }">
        <div class="navbar-content">
            <div class="navbar-menu">
                <div class="option_menu">
                    <div class="representative_ico" @click="toggleSidebar" title="Inicio">
                        <House color="#ffffff" />
                    </div>
                    <Transition name="menu-fade">
                        <RouterLink v-show="isSidebarExpanded" to="/inicio" class="nav-link" name="Inicio">Inicio
                        </RouterLink>
                    </Transition>
                </div>
                <div class="option_menu">
                    <div class="representative_ico" @click="toggleSidebar" title="Pedidos">
                        <Handbag color="#ffffff" />
                    </div>
                    <Transition name="menu-fade">
                        <RouterLink v-show="isSidebarExpanded" to="/pedidos" class="nav-link">Pedidos</RouterLink>
                    </Transition>
                    <Transition name="menu-fade">
                        <div v-show="isSidebarExpanded" class="arrow" :class="{ rotated: expandedMenus[1] }"
                            @click="toggleMenu(1)">

                            <ChevronRight />
                        </div>
                    </Transition>
                    <Transition name="submenu">
                        <ul class="bread_option" v-show="expandedMenus[1]">
                            <li>
                                <RouterLink to="/pedidos" class="nav-link">Sub Opción 1</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/pedidos/Tea" class="nav-link">Sub Opción 2</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/pedidos/Milk" class="nav-link">Sub Opción 3</RouterLink>
                            </li>
                        </ul>
                    </Transition>
                </div>
                <div class="option_menu">
                    <div class="representative_ico" @click="toggleSidebar" title="Clientes">
                        <UserPen color="#ffffff" />
                    </div>
                    <Transition name="menu-fade">
                        <RouterLink v-show="isSidebarExpanded" to="/clientes" class="nav-link">Clientes</RouterLink>
                    </Transition>
                    <Transition name="menu-fade">
                        <div v-show="isSidebarExpanded" class="arrow" :class="{ rotated: expandedMenus[2] }"
                            @click="toggleMenu(2)">
                            <ChevronRight />
                        </div>
                    </Transition>
                    <Transition name="submenu">
                        <ul class="bread_option" v-show="expandedMenus[2]">
                            <li>
                                <RouterLink to="/clientes/Coffee" class="nav-link">Sub Opción 1</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/clientes/Tea" class="nav-link">Sub Opción 2</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/clientes/Milk" class="nav-link">Sub Opción 3</RouterLink>
                            </li>
                        </ul>
                    </Transition>
                </div>
                <div class="option_menu">
                    <div class="representative_ico" @click="toggleSidebar" title="Productos">
                        <PackageSearch color="#ffffff" />
                    </div>
                    <Transition name="menu-fade">
                        <RouterLink v-show="isSidebarExpanded" to="/productos" class="nav-link">Productos</RouterLink>
                    </Transition>
                    <Transition name="menu-fade">
                        <div v-show="isSidebarExpanded" class="arrow" :class="{ rotated: expandedMenus[3] }"
                            @click="toggleMenu(3)">
                            <ChevronRight />
                        </div>
                    </Transition>
                    <Transition name="submenu">
                        <ul class="bread_option" v-show="expandedMenus[3]">
                            <li>
                                <RouterLink to="/productos/Coffee" class="nav-link">Sub Opción 1</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/productos/Tea" class="nav-link">Sub Opción 2</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/productos/Milk" class="nav-link">Sub Opción 3</RouterLink>
                            </li>
                        </ul>
                    </Transition>
                </div>
                <div class="option_menu">
                    <div class="representative_ico" @click="toggleSidebar" title="Reportes">
                        <ChartLine color="#ffffff" />
                    </div>
                    <Transition name="menu-fade">
                        <RouterLink v-show="isSidebarExpanded" to="/reportes" class="nav-link">Reportes</RouterLink>
                    </Transition>
                    <Transition name="menu-fade">
                        <div v-show="isSidebarExpanded" class="arrow" :class="{ rotated: expandedMenus[4] }"
                            @click="toggleMenu(4)">
                            <ChevronRight />
                        </div>
                    </Transition>
                    <Transition name="submenu">
                        <ul class="bread_option" v-show="expandedMenus[4]">
                            <li>
                                <RouterLink to="/reportes/Coffee" class="nav-link">Sub Opción 1</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/reportes/Tea" class="nav-link">Sub Opción 2</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/reportes/Milk" class="nav-link">Sub Opción 3</RouterLink>
                            </li>
                        </ul>
                    </Transition>
                </div>
                <div class="option_menu">
                    <div class="representative_ico" @click="toggleSidebar" title="Configuración">
                        <Cog color="#ffffff" />
                    </div>
                    <Transition name="menu-fade">
                        <RouterLink v-show="isSidebarExpanded" to="/conf" class="nav-link">Configuración</RouterLink>
                    </Transition>
                    <Transition name="menu-fade">
                        <div v-show="isSidebarExpanded" class="arrow" :class="{ rotated: expandedMenus[5] }"
                            @click="toggleMenu(5)">
                            <ChevronRight />
                        </div>
                    </Transition>
                    <Transition name="submenu">
                        <ul class="bread_option" v-show="expandedMenus[5]">
                            <li>
                                <RouterLink to="/conf/Coffee" class="nav-link">Sub Opción 1</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/conf/Tea" class="nav-link">Sub Opción 2</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/conf/Milk" class="nav-link">Sub Opción 3</RouterLink>
                            </li>
                        </ul>
                    </Transition>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
:root {
    --sidebar-blue: #0c86d8;
    --sidebar-blue-dark: #086fb6;
    --header-bg: #ffffff;
    --page-bg: #f4f6f8;
    --card-bg: #ffffff;
    --border: #dfe5ea;
    --text: #ffffff;
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

.navbar {
    background-color: #0A7BC7;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 250px;
    min-height: 100vh;
    position: sticky;
    top: 0;
    transition: width 0.25s ease;
}

.navbar.collapsed {
    width: 74px;
}

.navbar-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
}

.navbar-brand h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    color: #ffffff;
}

.navbar-menu {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    justify-content: flex-start;
    width: 100%;
}

.nav-link {
    display: block;
    color: #ffffff;

    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
}

.option_menu:hover {
    color: #e8f9fb;
    background-color: rgba(255, 255, 255, 0.08);
}

.user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border-top: 1px solid #dee2e6;
    padding-top: 1rem;
    margin-top: auto;
    width: 100%;
    padding-left: 1rem;
}

.user-email {
    font-size: 0.875rem;
    color: #64748b;
}

.logout-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #b91c1c;
    padding: 0;
}

.logout-btn:hover {
    color: #dc2626;
}

.arrow {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.arrow.rotated {
    transform: rotate(90deg);
}

.option_menu {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    align-items: center;
    border-radius: 5%;
    column-gap: 0.5rem;
    row-gap: 0.25rem;
    padding: 0.5rem;
    min-height: 44px;
}

.option_menu .representative_ico {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    min-height: 24px;
    cursor: pointer;
    border: 1px solid #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.35), 0 2px 8px rgba(15, 23, 42, 0.12);
    padding: 0.35rem;
}

.option_menu .nav-link {
    grid-column: 2;
    grid-row: 1;
}

.option_menu .arrow {
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
}

.option_menu .bread_option {
    grid-column: 1 / -1;
    grid-row: 2;
}

.option_menu_conf {
    position: static;
}

.bread_option {
    background-color: #187fc4;
    border: 1px solid #dee2e6;
    padding: 0.5rem 0;
    margin: 0;
    border-radius: 0.375rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    list-style: none;
    min-width: 150px;
    width: 100%;
}

.bread_option li {
    padding: 0.5rem 1rem;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s;
}

.bread_option li:hover {
    background-color: rgba(255, 255, 255, 0.08);
    color: #e8f9fb;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
    opacity: 0;
    transform: translateX(-6px);
}

.submenu-enter-active,
.submenu-leave-active {
    transition: max-height 0.25s ease, opacity 0.2s ease, transform 0.2s ease, margin-top 0.25s ease;
    overflow: hidden;
}

.submenu-enter-from,
.submenu-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-6px);
    margin-top: 0;
}

.submenu-enter-to,
.submenu-leave-from {
    max-height: 220px;
    opacity: 1;
    transform: translateY(0);
    margin-top: 0;
}
</style>
