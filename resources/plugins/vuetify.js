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
                    background: '#f4f6f1',
                    surface: '#FFFFFF',
                    primary: '#62bd1d',
                    'primary-darken-1': '#388E3C',
                    secondary: '#424242',
                    'secondary-darken-1': '#018786',
                    'secondary-lighten-1': 'rgba(229,229,229,0.67)',
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                }
            },
            dark: {
                colors: {
                    primary: '#232323',
                    'primary-darken-1': '#2c2c2c',
                    secondary: '#888888',
                    'secondary-darken-1': '#424242',
                    'secondary-lighten-1': 'rgba(229,229,229,0.67)',
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                }
            },

        },
    },
});

export default vuetify;



