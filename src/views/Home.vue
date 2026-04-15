<script setup lang="ts">
import { ref } from 'vue'
import { FileText, Package, UserPlus, PieChart, Tag, Users, Receipt, TrendingUp } from '@lucide/vue'

const activeTab = ref('shortcuts')
</script>
<template>
    <div class="content-area">
        <section class="content-section active-section">
            <div class="section-header-tabs">
                <button type="button" class="tab-btn" :class="{ active: activeTab === 'shortcuts' }"
                    @click="activeTab = 'shortcuts'">
                    Accesos directos
                </button>
                <button type="button" class="tab-btn" :class="{ active: activeTab === 'indicators' }"
                    @click="activeTab = 'indicators'">
                    Indicadores
                </button>
            </div>

            <!-- TAB: Accesos Directos -->
            <div v-if="activeTab === 'shortcuts'" class="content-card home-card">
                <div class="card-header-line">
                    <h2>¿Qué deseas hacer?</h2>
                </div>

                <div class="shortcut-grid">
                    <button type="button" class="shortcut-card">
                        <div class="shortcut-icon">
                            <FileText :size="28" />
                        </div>
                        <span>Crear un pedido</span>
                    </button>

                    <button type="button" class="shortcut-card">
                        <div class="shortcut-icon">
                            <Package :size="28" />
                        </div>
                        <span>Consultar productos</span>
                    </button>

                    <button type="button" class="shortcut-card">
                        <div class="shortcut-icon">
                            <UserPlus :size="28" />
                        </div>
                        <span>Registrar un cliente</span>
                    </button>

                    <button type="button" class="shortcut-card">
                        <div class="shortcut-icon">
                            <PieChart :size="28" />
                        </div>
                        <span>Ver reportes</span>
                    </button>

                    <button type="button" class="shortcut-card">
                        <div class="shortcut-icon">
                            <Tag :size="28" />
                        </div>
                        <span>Administrar productos</span>
                    </button>

                    <button type="button" class="shortcut-card">
                        <div class="shortcut-icon">
                            <Users :size="28" />
                        </div>
                        <span>Consultar clientes</span>
                    </button>

                    <button type="button" class="shortcut-card">
                        <div class="shortcut-icon">
                            <Receipt :size="28" />
                        </div>
                        <span>Historial de pedidos</span>
                    </button>

                    <button type="button" class="shortcut-card">
                        <div class="shortcut-icon">
                            <TrendingUp :size="28" />
                        </div>
                        <span>Estado general</span>
                    </button>
                </div>
            </div>

            <!-- TAB: Indicadores -->
            <div v-if="activeTab === 'indicators'" class="content-card home-card">
                <div class="card-header-line">
                    <h2>Indicadores</h2>
                </div>

                <div class="report-cards">
                    <div class="mini-report-card">
                        <span>Total pedidos</span>
                        <strong>0</strong>
                    </div>
                    <div class="mini-report-card">
                        <span>Total clientes</span>
                        <strong>0</strong>
                    </div>
                    <div class="mini-report-card">
                        <span>Total ventas</span>
                        <strong>$0.00</strong>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
.content-area {
    padding: 1.5rem;
    overflow: auto;
}

.content-section {
    display: block;
}

.section-header-tabs {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    margin-bottom: 0;
    border-bottom: 2px solid #15b9c9;
}

.tab-btn {
    background: transparent;
    border: 1px solid transparent;
    border-bottom: none;
    padding: 14px 18px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: #1f2937;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
}

.tab-btn:hover {
    background-color: #f3f4f6;
}

.tab-btn.active {
    background: white;
    border-color: #15b9c9;
    color: #086fb6;
}

.content-card {
    background: white;
    border: 1px solid #dfe5ea;
    border-top: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    padding: 18px;
}

.home-card {
    margin-top: 0;
}

.card-header-line {
    padding-bottom: 14px;
    margin-bottom: 18px;
    border-bottom: 1px solid #eef2f7;
}

.card-header-line h2 {
    font-size: 18px;
    color: #1f2937;
    margin: 0;
}

.shortcut-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(180px, 1fr));
    gap: 20px 18px;
}

.shortcut-card {
    background: white;
    border: 1px solid transparent;
    border-radius: 12px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    text-align: center;
    padding: 18px 12px;
    cursor: pointer;
    transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    font-size: 15px;
    font-weight: 600;
    color: #374151;
}

.shortcut-card:hover {
    border-color: #d9edf2;
    box-shadow: 0 10px 22px rgba(12, 134, 216, 0.08);
    transform: translateY(-2px);
}

.shortcut-icon {
    width: 74px;
    height: 74px;
    border-radius: 999px;
    border: 1px solid #e3e8ee;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0c86d8;
    background: white;
}

.report-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(180px, 1fr));
    gap: 16px;
}

.mini-report-card {
    background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
    border: 1px solid #e4edf4;
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.mini-report-card span {
    display: block;
    color: #6b7280;
    margin-bottom: 10px;
    font-size: 14px;
}

.mini-report-card strong {
    font-size: 24px;
    color: #086fb6;
}

@media (max-width: 1200px) {
    .shortcut-grid {
        grid-template-columns: repeat(3, minmax(180px, 1fr));
    }
}

@media (max-width: 900px) {
    .shortcut-grid {
        grid-template-columns: repeat(2, minmax(150px, 1fr));
    }

    .report-cards {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 640px) {
    .section-header-tabs {
        flex-wrap: wrap;
    }

    .tab-btn {
        padding: 10px 14px;
        font-size: 14px;
    }

    .shortcut-grid {
        grid-template-columns: 1fr;
    }

    .content-card {
        padding: 12px;
    }
}
</style>