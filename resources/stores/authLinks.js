import {defineStore} from "pinia";

export const useAuthLinksStore = defineStore("authLinks", {
    state: () => ({
        authLinks: [
            {
                route: "dashboard", icon: 'mdi-view-dashboard', title: "Dashboard"
            }, {
                title: 'Role',
                route: 'role.index',
                icon: 'mdi-shield-account-outline',
                options: [{title: 'Lista de roles', route: '/roles/list'}, {title: 'Nuevo rol', route: '/roles/new'},],
            }, {
                title: "Permisos", icon: 'mdi-badge-account-outline', route: "permission.index"
            }, {
                title: "User", icon: 'mdi-account-group-outline', route: "user.index"
            }, {
                title: "Orden", icon: 'mdi-clipboard-text-outline', route: "order"
            }, {
                title: "Cliente", icon: 'mdi-account-supervisor', route: "customer"
            }, {
                title: "Dispositivos", icon: 'mdi-tablet-cellphone', route: "device"
            }, {
                title: "Producto", icon: 'mdi-shopping', route: "product"
            }, {
                title: "Caja", icon: 'mdi-cash-register', route: "cash"
            }, {
                title: "Agenda", icon: 'mdi-calendar-month', route: "schedule"
            }, {
                title: "Proveedor", icon: 'mdi-account-tie', route: "supplier"
            }, {
                title: "Reportes", icon: 'mdi-chart-bar', route: "reports"
            }, {
                title: "Posts", icon: 'mdi-newspaper', route: "posts.index"
            }
        ],
    })
});
