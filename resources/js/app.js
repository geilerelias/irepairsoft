import './bootstrap';
// import '../css/app.css';
import {createApp, h} from 'vue'
import {createInertiaApp, Head, Link} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';
// pinia
import {createPinia} from 'pinia'


//VueSweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Vuetify
import Vuetify from '../plugins/vuetify'

//PerfectScrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'


//VueGates
import VueGates from 'vue-gates';
import Permissions from './../plugins/Permissions';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';


createInertiaApp({
    title: (title) => `${title} ${title !== '' ? '-' : ''} ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(createPinia())
            .use(Vuetify)
            .use(VueSweetalert2)
            .use(PerfectScrollbar)
            .use(VueGates)
            .use(Permissions)
            .component('InertiaHead', Head)
            .component('InertiaLink', Link)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
