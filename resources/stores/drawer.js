import {defineStore} from "pinia";
export const useDrawerStore = defineStore("drawer", {
    state: () => ({
        drawer: false,
    }),
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        change(value) {
            this.drawer=value
        },
    },
})
