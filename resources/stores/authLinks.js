import {defineStore} from "pinia";

export const useAuthLinksStore = defineStore("authLinks", {
    state: () => ({
        authLinks: [
            {title: 'Inicio', route: 'home', icon: 'mdi-home'},
            {
                title: 'Role',
                route: '/roles',
                icon: 'mdi-account-group',
                options: [
                    {title: 'Lista de roles', route: '/roles/list'},
                    {title: 'Nuevo rol', route: '/roles/new'},
                ],
            },
            {
                route: "dashboard",
                icon: 'mdi-view-dashboard',
                title: "Dashboard"
            },
            {
                title: "Orden",
                icon: 'mdi-clipboard-text-outline',
                route: "order"
            },
            {
                title: "Cliente",
                icon: 'mdi-account-supervisor',
                route: "customer"
            },
            {
                title: "Dispositivos",
                icon: 'mdi-tablet-cellphone',
                route: "device"
            },
            {
                title: "Producto",
                icon: 'mdi-shopping',
                route: "product"
            },
            {
                title: "Caja",
                icon: 'mdi-cash-register',
                route: "cash"
            },
            {
                title: "Agenda",
                icon: 'mdi-calendar-month',
                route: "schedule"
            },
            {
                title: "Proveedor",
                icon: 'mdi-account-tie',
                route: "supplier"
            },
            {
                title: "Reportes",
                icon: 'mdi-chart-bar',
                route: "reports"
            },
        ],
    })
});
