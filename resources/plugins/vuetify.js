// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//icons
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    background: '#FFFFFF',
                    surface: '#FFFFFF',
                    primary: '#62bd1d',
                    'primary-darken-1': '#388E3C',
                    secondary: '#424242',
                    'secondary-darken-1': '#018786',
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                }
            },
            dark: {
                colors: {
                    primary: '#2b65ae',
                    secondary: '#c45911',
                    accent: '#82B1FF',
                    error: '#f44336',
                    warning: '#ff9800',
                    info: '#00bcd4',
                    success: '#4caf50',
                }
            },

        },
    },
});

export default vuetify;



