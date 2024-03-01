<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import BreadCrumbs from "@/Components/BreadCrumbs.vue";
import { router } from '@inertiajs/vue3'


const props = defineProps({
    users: {
        type: Object,
        default: () => ({}),
    },
    can: {
        type: Object,
        default: () => ({}),
    },
})
const links = [
    {
        title: 'Dashboard',
        disabled: false,
        href: '/dashboard',
    }, {
        title: 'Usuarios',
        disabled: true,
        href: '/dashboard/user',
    }
]

function showUser(user) {
    const userId = user.id;

    // Redirecciona al método show del controlador
    router.visit(route('user.show', {id: userId}));

}
</script>

<template>
    <admin-layout>
        <bread-crumbs :items="links" name="Gestion de Usuarios"></bread-crumbs>
        <v-container>
            <v-col class=" v-col-12">
                <h5 class="text-h5 mt-5 mb-1"> Total de usuarios con roles </h5>
                <p class="text-sm mb-6">
                    Busque todas las cuentas de administrador de su empresa y sus roles asociados.
                </p>
                <section>
                    <div class="v-card v-theme--light v-card--density-default v-card--variant-elevated"><!---->
                        <div class="v-card__loader">
                            <div aria-hidden="true" aria-valuemax="100" aria-valuemin="0"
                                 class="v-progress-linear v-theme--light" role="progressbar"
                                 style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                <!---->
                                <div class="v-progress-linear__background" style="width: 100%;"></div>
                                <div class="v-progress-linear__indeterminate">
                                    <div class="v-progress-linear__indeterminate long"></div>
                                    <div class="v-progress-linear__indeterminate short"></div>
                                </div><!----></div>
                        </div><!----><!---->
                        <div class="v-card-text d-flex flex-wrap gap-4">
                            <button
                                class="v-btn v-theme--light text-disabled v-btn--density-default v-btn--size-default v-btn--variant-outlined"
                                type="button">
                                <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><span
                                class="v-btn__prepend"><svg aria-hidden="true"
                                                            class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                            height="1em" role="img" tag="i"
                                                            viewBox="0 0 24 24"
                                                            width="1em" xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                d="M2 12h2v5h16v-5h2v5c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-5M12 2L6.46 7.46l1.42 1.42L11 5.75V15h2V5.75l3.13 3.13l1.42-1.43L12 2Z"
                                fill="currentColor"></path></svg></span><span
                                class="v-btn__content" data-no-activator=""> Export </span><!----><!----></button>
                            <div class="flex-grow-1"></div>
                            <div class="app-user-search-filter d-flex align-center gap-6">
                                <div class="v-input v-input--horizontal v-input--density-compact v-text-field"
                                     style="width: 8rem;"><!---->
                                    <div class="v-input__control">
                                        <div
                                            class="v-field v-field--no-label v-field--variant-outlined v-theme--light"
                                            role="textbox">
                                            <div class="v-field__overlay"></div>
                                            <div class="v-field__loader">
                                                <div aria-hidden="true" aria-valuemax="100"
                                                     aria-valuemin="0" class="v-progress-linear v-theme--light"
                                                     role="progressbar"
                                                     style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                    <!---->
                                                    <div class="v-progress-linear__background bg-primary"
                                                         style="width: 100%;"></div>
                                                    <div class="v-progress-linear__indeterminate">
                                                        <div
                                                            class="v-progress-linear__indeterminate long bg-primary"></div>
                                                        <div
                                                            class="v-progress-linear__indeterminate short bg-primary"></div>
                                                    </div><!----></div>
                                            </div><!---->
                                            <div class="v-field__field" data-no-activator=""><!----><label
                                                class="v-label v-field-label" for="input-101"><!----><!----></label>
                                                <!----><input id="input-101" aria-describedby="input-101-messages"
                                                              class="v-field__input"
                                                              placeholder="Search User" size="1"
                                                              type="text"><!----></div><!----><!---->
                                            <div class="v-field__outline">
                                                <div class="v-field__outline__start"></div><!---->
                                                <div class="v-field__outline__end"></div><!----></div>
                                        </div>
                                    </div><!----><!----></div>
                                <div
                                    class="v-input v-input--horizontal v-input--density-compact v-input--readonly v-text-field v-select v-select--single"
                                    style="width: 6rem;"><!---->
                                    <div class="v-input__control">
                                        <div
                                            aria-expanded="false"
                                            aria-haspopup="menu" aria-owns="v-menu-105"
                                            class="v-field v-field--appended v-field--variant-outlined v-theme--light"
                                            role="textbox">
                                            <div class="v-field__overlay"></div>
                                            <div class="v-field__loader">
                                                <div aria-hidden="true" aria-valuemax="100"
                                                     aria-valuemin="0" class="v-progress-linear v-theme--light"
                                                     role="progressbar"
                                                     style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                    <!---->
                                                    <div class="v-progress-linear__background bg-primary"
                                                         style="width: 100%;"></div>
                                                    <div class="v-progress-linear__indeterminate">
                                                        <div
                                                            class="v-progress-linear__indeterminate long bg-primary"></div>
                                                        <div
                                                            class="v-progress-linear__indeterminate short bg-primary"></div>
                                                    </div><!----></div>
                                            </div><!---->
                                            <div class="v-field__field" data-no-activator=""><!----><label
                                                class="v-label v-field-label" for="input-103" style=""><!---->Select
                                                Role</label><!---->
                                                <div class="v-field__input" data-no-activator=""><!----><input
                                                    id="input-103" aria-describedby="input-103-messages" readonly=""
                                                    size="1"
                                                    type="text"></div><!----></div>
                                            <div class="v-field__clearable" style="display: none;">
                                                <svg aria-label="Clear Select Role"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable iconify iconify--mdi"
                                                     height="1em"
                                                     role="button"
                                                     tag="i"
                                                     viewBox="0 0 24 24" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div class="v-field__append-inner"><!---->
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path d="m7 10l5 5l5-5H7Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div class="v-field__outline">
                                                <div class="v-field__outline__start"></div>
                                                <div class="v-field__outline__notch"><label
                                                    aria-hidden="true"
                                                    class="v-label v-field-label v-field-label--floating"
                                                    for="input-103" style=""><!---->Select
                                                    Role</label></div>
                                                <div class="v-field__outline__end"></div><!----></div>
                                        </div>
                                    </div><!----><!----></div>
                            </div>
                        </div>
                        <div
                            class="v-table v-table--has-bottom v-theme--light v-table--density-default v-data-table text-no-wrap rounded-0">
                            <!---->
                            <div class="v-table__wrapper">
                                <table><!---->
                                    <thead class="v-data-table__thead" role="rowgroup">
                                    <tr>
                                        <th class="v-data-table__td v-data-table-column--no-padding v-data-table-column--align-start v-data-table__th v-data-table__th"
                                            rowspan="1" style="width: 48px; min-width: 48px;">
                                            <div
                                                class="v-selection-control v-selection-control--inline v-selection-control--density-default v-checkbox-btn">
                                                <div class="v-selection-control__wrapper"><!---->
                                                    <div class="v-selection-control__input">
                                                        <svg aria-hidden="true"
                                                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                             height="1em" role="img" tag="i"
                                                             viewBox="0 0 24 24"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                        <input id="input-106" aria-disabled="false"
                                                               indeterminateicon="$checkboxIndeterminate"
                                                               type="checkbox"
                                                               value="true"><!----></div>
                                                </div><!----></div>
                                        </th>
                                        <th class="v-data-table__td v-data-table-column--align-start v-data-table__th v-data-table__th--sortable v-data-table__th v-data-table__th--sortable">
                                            <div class="v-data-table-header__content"><span>USER</span>
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default v-data-table-header__sort-icon iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"
                                                        fill="currentColor"></path>
                                                </svg><!----></div>
                                        </th>
                                        <th class="v-data-table__td v-data-table-column--align-start v-data-table__th v-data-table__th--sortable v-data-table__th v-data-table__th--sortable">
                                            <div class="v-data-table-header__content"><span>EMAIL</span>
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default v-data-table-header__sort-icon iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"
                                                        fill="currentColor"></path>
                                                </svg><!----></div>
                                        </th>
                                        <th class="v-data-table__td v-data-table-column--align-start v-data-table__th v-data-table__th--sortable v-data-table__th v-data-table__th--sortable">
                                            <div class="v-data-table-header__content"><span>ROLE</span>
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default v-data-table-header__sort-icon iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"
                                                        fill="currentColor"></path>
                                                </svg><!----></div>
                                        </th>
                                        <th class="v-data-table__td v-data-table-column--align-start v-data-table__th v-data-table__th--sortable v-data-table__th v-data-table__th--sortable">
                                            <div class="v-data-table-header__content"><span>PLAN</span>
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default v-data-table-header__sort-icon iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"
                                                        fill="currentColor"></path>
                                                </svg><!----></div>
                                        </th>
                                        <th class="v-data-table__td v-data-table-column--align-start v-data-table__th v-data-table__th--sortable v-data-table__th v-data-table__th--sortable">
                                            <div class="v-data-table-header__content"><span>STATUS</span>
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default v-data-table-header__sort-icon iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"
                                                        fill="currentColor"></path>
                                                </svg><!----></div>
                                        </th>
                                        <th class="v-data-table__td v-data-table-column--align-start v-data-table__th v-data-table__th">
                                            <div class="v-data-table-header__content"><span>ACTION</span><!---->
                                                <!----></div>
                                        </th>
                                    </tr><!----></thead><!---->
                                    <tbody class="v-data-table__tbody" role="rowgroup">
                                    <tr class="v-data-table__tr">
                                        <td class="v-data-table__td v-data-table-column--no-padding v-data-table-column--align-start"
                                            style="width: 48px;">
                                            <div
                                                class="v-selection-control v-selection-control--inline v-selection-control--density-default v-checkbox-btn">
                                                <div class="v-selection-control__wrapper"><!---->
                                                    <div class="v-selection-control__input">
                                                        <svg aria-hidden="true"
                                                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                             height="1em" role="img" tag="i"
                                                             viewBox="0 0 24 24"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                        <input id="input-202" aria-disabled="false"
                                                               indeterminateicon="$checkboxIndeterminate"
                                                               type="checkbox"
                                                               value="true"><!----></div>
                                                </div><!----></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex">
                                                <div
                                                    class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat me-3"
                                                    style="width: 34px; height: 34px;">
                                                    <div class="v-responsive v-img">
                                                        <div class="v-responsive__sizer"
                                                             style="padding-bottom: 100%;"></div>
                                                        <img class="v-img__img v-img__img--contain"
                                                             src="/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-2-0ae005f8.png"
                                                             style=""><!----><!----><!----><!----><!----></div>
                                                    <!----><span class="v-avatar__underlay"></span></div>
                                                <div class="d-flex flex-column"><h6
                                                    class="text-sm font-weight-medium"><a
                                                    class="font-weight-medium user-list-name"
                                                    href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/50">Beverlie
                                                    Krabbe</a>
                                                </h6><span class="text-xs text-medium-emphasis">@bkrabbe1d</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-sm">bkrabbe1d@home.pl</span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex gap-2">
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default text-info iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="m14.06 9l.94.94L5.92 19H5v-.92L14.06 9m3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span class="text-capitalize">editor</span></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-capitalize text-high-emphasis">company</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="v-chip v-theme--light text-success v-chip--density-comfortable elevation-0 v-chip--size-default v-chip--variant-tonal text-capitalize"
                                            draggable="false"><!----><span class="v-chip__underlay"></span><!---->
                                            <!---->active<!----><!----></span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><a
                                            class="v-btn v-btn--icon v-theme--light text-medium-emphasis v-btn--density-default v-btn--size-small v-btn--variant-text"
                                            href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/50"><span
                                            class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                            <!----><span class="v-btn__content" data-no-activator=""><svg
                                                aria-hidden="true"
                                                class="v-icon notranslate v-theme--light iconify iconify--mdi"
                                                height="1em"
                                                role="img" style="font-size: 24px; height: 24px; width: 24px;"
                                                tag="i"
                                                viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                                d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                                                fill="currentColor"></path></svg></span>
                                            <!----><!----></a></td>
                                    </tr><!---->
                                    <tr class="v-data-table__tr">
                                        <td class="v-data-table__td v-data-table-column--no-padding v-data-table-column--align-start"
                                            style="width: 48px;">
                                            <div
                                                class="v-selection-control v-selection-control--inline v-selection-control--density-default v-checkbox-btn">
                                                <div class="v-selection-control__wrapper"><!---->
                                                    <div class="v-selection-control__input">
                                                        <svg aria-hidden="true"
                                                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                             height="1em" role="img" tag="i"
                                                             viewBox="0 0 24 24"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                        <input id="input-205" aria-disabled="false"
                                                               indeterminateicon="$checkboxIndeterminate"
                                                               type="checkbox"
                                                               value="true"><!----></div>
                                                </div><!----></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex">
                                                <div
                                                    class="v-avatar v-theme--light text-primary v-avatar--density-default v-avatar--variant-tonal me-3"
                                                    style="width: 34px; height: 34px;"><span>PD</span><!----><span
                                                    class="v-avatar__underlay"></span></div>
                                                <div class="d-flex flex-column"><h6
                                                    class="text-sm font-weight-medium"><a
                                                    class="font-weight-medium user-list-name"
                                                    href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/49">Paulie
                                                    Durber</a></h6>
                                                    <span class="text-xs text-medium-emphasis">@pdurber1c</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-sm">pdurber1c@gov.uk</span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex gap-2">
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default text-primary iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span class="text-capitalize">subscriber</span></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-capitalize text-high-emphasis">team</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="v-chip v-theme--light text-secondary v-chip--density-comfortable elevation-0 v-chip--size-default v-chip--variant-tonal text-capitalize"
                                            draggable="false"><!----><span class="v-chip__underlay"></span><!---->
                                            <!---->inactive<!----><!----></span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><a
                                            class="v-btn v-btn--icon v-theme--light text-medium-emphasis v-btn--density-default v-btn--size-small v-btn--variant-text"
                                            href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/49"><span
                                            class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                            <!----><span class="v-btn__content" data-no-activator=""><svg
                                                aria-hidden="true"
                                                class="v-icon notranslate v-theme--light iconify iconify--mdi"
                                                height="1em"
                                                role="img" style="font-size: 24px; height: 24px; width: 24px;"
                                                tag="i"
                                                viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                                d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                                                fill="currentColor"></path></svg></span>
                                            <!----><!----></a></td>
                                    </tr><!---->
                                    <tr class="v-data-table__tr">
                                        <td class="v-data-table__td v-data-table-column--no-padding v-data-table-column--align-start"
                                            style="width: 48px;">
                                            <div
                                                class="v-selection-control v-selection-control--inline v-selection-control--density-default v-checkbox-btn">
                                                <div class="v-selection-control__wrapper"><!---->
                                                    <div class="v-selection-control__input">
                                                        <svg aria-hidden="true"
                                                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                             height="1em" role="img" tag="i"
                                                             viewBox="0 0 24 24"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                        <input id="input-208" aria-disabled="false"
                                                               indeterminateicon="$checkboxIndeterminate"
                                                               type="checkbox"
                                                               value="true"><!----></div>
                                                </div><!----></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex">
                                                <div
                                                    class="v-avatar v-theme--light text-error v-avatar--density-default v-avatar--variant-tonal me-3"
                                                    style="width: 34px; height: 34px;"><span>OW</span><!----><span
                                                    class="v-avatar__underlay"></span></div>
                                                <div class="d-flex flex-column"><h6
                                                    class="text-sm font-weight-medium"><a
                                                    class="font-weight-medium user-list-name"
                                                    href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/48">Onfre
                                                    Wind</a></h6>
                                                    <span class="text-xs text-medium-emphasis">@owind1b</span></div>
                                            </div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-sm">owind1b@yandex.ru</span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex gap-2">
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default text-error iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M4 6h16v10H4m16 2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2h-4Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span class="text-capitalize">admin</span></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-capitalize text-high-emphasis">basic</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="v-chip v-theme--light text-warning v-chip--density-comfortable elevation-0 v-chip--size-default v-chip--variant-tonal text-capitalize"
                                            draggable="false"><!----><span class="v-chip__underlay"></span><!---->
                                            <!---->pending<!----><!----></span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><a
                                            class="v-btn v-btn--icon v-theme--light text-medium-emphasis v-btn--density-default v-btn--size-small v-btn--variant-text"
                                            href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/48"><span
                                            class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                            <!----><span class="v-btn__content" data-no-activator=""><svg
                                                aria-hidden="true"
                                                class="v-icon notranslate v-theme--light iconify iconify--mdi"
                                                height="1em"
                                                role="img" style="font-size: 24px; height: 24px; width: 24px;"
                                                tag="i"
                                                viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                                d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                                                fill="currentColor"></path></svg></span>
                                            <!----><!----></a></td>
                                    </tr><!---->
                                    <tr class="v-data-table__tr">
                                        <td class="v-data-table__td v-data-table-column--no-padding v-data-table-column--align-start"
                                            style="width: 48px;">
                                            <div
                                                class="v-selection-control v-selection-control--inline v-selection-control--density-default v-checkbox-btn">
                                                <div class="v-selection-control__wrapper"><!---->
                                                    <div class="v-selection-control__input">
                                                        <svg aria-hidden="true"
                                                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                             height="1em" role="img" tag="i"
                                                             viewBox="0 0 24 24"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                        <input id="input-211" aria-disabled="false"
                                                               indeterminateicon="$checkboxIndeterminate"
                                                               type="checkbox"
                                                               value="true"><!----></div>
                                                </div><!----></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex">
                                                <div
                                                    class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat me-3"
                                                    style="width: 34px; height: 34px;">
                                                    <div class="v-responsive v-img">
                                                        <div class="v-responsive__sizer"
                                                             style="padding-bottom: 100%;"></div>
                                                        <img class="v-img__img v-img__img--contain"
                                                             src="/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-1-aac046b6.png"
                                                             style=""><!----><!----><!----><!----><!----></div>
                                                    <!----><span class="v-avatar__underlay"></span></div>
                                                <div class="d-flex flex-column"><h6
                                                    class="text-sm font-weight-medium"><a
                                                    class="font-weight-medium user-list-name"
                                                    href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/47">Karena
                                                    Courtliff</a>
                                                </h6><span class="text-xs text-medium-emphasis">@kcourtliff1a</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-sm">kcourtliff1a@bbc.co.uk</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex gap-2">
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default text-error iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M4 6h16v10H4m16 2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2h-4Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span class="text-capitalize">admin</span></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-capitalize text-high-emphasis">basic</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="v-chip v-theme--light text-success v-chip--density-comfortable elevation-0 v-chip--size-default v-chip--variant-tonal text-capitalize"
                                            draggable="false"><!----><span class="v-chip__underlay"></span><!---->
                                            <!---->active<!----><!----></span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><a
                                            class="v-btn v-btn--icon v-theme--light text-medium-emphasis v-btn--density-default v-btn--size-small v-btn--variant-text"
                                            href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/47"><span
                                            class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                            <!----><span class="v-btn__content" data-no-activator=""><svg
                                                aria-hidden="true"
                                                class="v-icon notranslate v-theme--light iconify iconify--mdi"
                                                height="1em"
                                                role="img" style="font-size: 24px; height: 24px; width: 24px;"
                                                tag="i"
                                                viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                                d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                                                fill="currentColor"></path></svg></span>
                                            <!----><!----></a></td>
                                    </tr><!---->
                                    <tr class="v-data-table__tr">
                                        <td class="v-data-table__td v-data-table-column--no-padding v-data-table-column--align-start"
                                            style="width: 48px;">
                                            <div
                                                class="v-selection-control v-selection-control--inline v-selection-control--density-default v-checkbox-btn">
                                                <div class="v-selection-control__wrapper"><!---->
                                                    <div class="v-selection-control__input">
                                                        <svg aria-hidden="true"
                                                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                             height="1em" role="img" tag="i"
                                                             viewBox="0 0 24 24"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                        <input id="input-214" aria-disabled="false"
                                                               indeterminateicon="$checkboxIndeterminate"
                                                               type="checkbox"
                                                               value="true"><!----></div>
                                                </div><!----></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex">
                                                <div
                                                    class="v-avatar v-theme--light text-success v-avatar--density-default v-avatar--variant-tonal me-3"
                                                    style="width: 34px; height: 34px;"><span>SO</span><!----><span
                                                    class="v-avatar__underlay"></span></div>
                                                <div class="d-flex flex-column"><h6
                                                    class="text-sm font-weight-medium"><a
                                                    class="font-weight-medium user-list-name"
                                                    href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/46">Saunder
                                                    Offner</a>
                                                </h6><span class="text-xs text-medium-emphasis">@soffner19</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-sm">soffner19@mac.com</span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex gap-2">
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default text-success iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92c0 .9-.18 1.75-.5 2.54l2.62 1.53c.56-1.24.88-2.62.88-4.07c0-5.18-3.95-9.45-9-9.95M12 19a7 7 0 0 1-7-7c0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95a10 10 0 0 0 10 10c3.3 0 6.23-1.61 8.05-4.09l-2.6-1.53A6.89 6.89 0 0 1 12 19Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span class="text-capitalize">maintainer</span></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-capitalize text-high-emphasis">enterprise</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="v-chip v-theme--light text-warning v-chip--density-comfortable elevation-0 v-chip--size-default v-chip--variant-tonal text-capitalize"
                                            draggable="false"><!----><span class="v-chip__underlay"></span><!---->
                                            <!---->pending<!----><!----></span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><a
                                            class="v-btn v-btn--icon v-theme--light text-medium-emphasis v-btn--density-default v-btn--size-small v-btn--variant-text"
                                            href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/46"><span
                                            class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                            <!----><span class="v-btn__content" data-no-activator=""><svg
                                                aria-hidden="true"
                                                class="v-icon notranslate v-theme--light iconify iconify--mdi"
                                                height="1em"
                                                role="img" style="font-size: 24px; height: 24px; width: 24px;"
                                                tag="i"
                                                viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                                d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                                                fill="currentColor"></path></svg></span>
                                            <!----><!----></a></td>
                                    </tr><!---->
                                    <tr class="v-data-table__tr">
                                        <td class="v-data-table__td v-data-table-column--no-padding v-data-table-column--align-start"
                                            style="width: 48px;">
                                            <div
                                                class="v-selection-control v-selection-control--inline v-selection-control--density-default v-checkbox-btn">
                                                <div class="v-selection-control__wrapper"><!---->
                                                    <div class="v-selection-control__input">
                                                        <svg aria-hidden="true"
                                                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                             height="1em" role="img" tag="i"
                                                             viewBox="0 0 24 24"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                        <input id="input-217" aria-disabled="false"
                                                               indeterminateicon="$checkboxIndeterminate"
                                                               type="checkbox"
                                                               value="true"><!----></div>
                                                </div><!----></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex">
                                                <div
                                                    class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat me-3"
                                                    style="width: 34px; height: 34px;">
                                                    <div class="v-responsive v-img">
                                                        <div class="v-responsive__sizer"
                                                             style="padding-bottom: 100%;"></div>
                                                        <img class="v-img__img v-img__img--contain"
                                                             src="/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-3-3ef9169b.png"
                                                             style=""><!----><!----><!----><!----><!----></div>
                                                    <!----><span class="v-avatar__underlay"></span></div>
                                                <div class="d-flex flex-column"><h6
                                                    class="text-sm font-weight-medium"><a
                                                    class="font-weight-medium user-list-name"
                                                    href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/45">Corrie
                                                    Perot</a></h6>
                                                    <span class="text-xs text-medium-emphasis">@cperot18</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-sm">cperot18@goo.ne.jp</span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex gap-2">
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default text-primary iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span class="text-capitalize">subscriber</span></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-capitalize text-high-emphasis">team</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="v-chip v-theme--light text-warning v-chip--density-comfortable elevation-0 v-chip--size-default v-chip--variant-tonal text-capitalize"
                                            draggable="false"><!----><span class="v-chip__underlay"></span><!---->
                                            <!---->pending<!----><!----></span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><a
                                            class="v-btn v-btn--icon v-theme--light text-medium-emphasis v-btn--density-default v-btn--size-small v-btn--variant-text"
                                            href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/45"><span
                                            class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                            <!----><span class="v-btn__content" data-no-activator=""><svg
                                                aria-hidden="true"
                                                class="v-icon notranslate v-theme--light iconify iconify--mdi"
                                                height="1em"
                                                role="img" style="font-size: 24px; height: 24px; width: 24px;"
                                                tag="i"
                                                viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                                d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                                                fill="currentColor"></path></svg></span>
                                            <!----><!----></a></td>
                                    </tr><!---->
                                    <tr class="v-data-table__tr">
                                        <td class="v-data-table__td v-data-table-column--no-padding v-data-table-column--align-start"
                                            style="width: 48px;">
                                            <div
                                                class="v-selection-control v-selection-control--inline v-selection-control--density-default v-checkbox-btn">
                                                <div class="v-selection-control__wrapper"><!---->
                                                    <div class="v-selection-control__input">
                                                        <svg aria-hidden="true"
                                                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                             height="1em" role="img" tag="i"
                                                             viewBox="0 0 24 24"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                        <input id="input-220" aria-disabled="false"
                                                               indeterminateicon="$checkboxIndeterminate"
                                                               type="checkbox"
                                                               value="true"><!----></div>
                                                </div><!----></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex">
                                                <div
                                                    class="v-avatar v-theme--light text-warning v-avatar--density-default v-avatar--variant-tonal me-3"
                                                    style="width: 34px; height: 34px;"><span>VK</span><!----><span
                                                    class="v-avatar__underlay"></span></div>
                                                <div class="d-flex flex-column"><h6
                                                    class="text-sm font-weight-medium"><a
                                                    class="font-weight-medium user-list-name"
                                                    href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/44">Vladamir
                                                    Koschek</a>
                                                </h6><span class="text-xs text-medium-emphasis">@vkoschek17</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-sm">vkoschek17@abc.net.au</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex gap-2">
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default text-warning iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M12 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-2 12c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66L4.5 12l.07-1l-2.11-1.63a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L19.43 11l.07 1l-.07 1l2.11 1.63c.19.15.25.42.12.64l-2 3.46c-.12.22-.39.31-.61.22l-2.49-1c-.52.39-1.06.73-1.69.98l-.37 2.65c-.04.24-.25.42-.5.42h-4m1.25-18l-.37 2.61c-1.2.25-2.26.89-3.03 1.78L5.44 7.35l-.75 1.3L6.8 10.2a5.55 5.55 0 0 0 0 3.6l-2.12 1.56l.75 1.3l2.43-1.04c.77.88 1.82 1.52 3.01 1.76l.37 2.62h1.52l.37-2.61c1.19-.25 2.24-.89 3.01-1.77l2.43 1.04l.75-1.3l-2.12-1.55c.4-1.17.4-2.44 0-3.61l2.11-1.55l-.75-1.3l-2.41 1.04a5.42 5.42 0 0 0-3.03-1.77L12.75 4h-1.5Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span class="text-capitalize">author</span></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-capitalize text-high-emphasis">team</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="v-chip v-theme--light text-success v-chip--density-comfortable elevation-0 v-chip--size-default v-chip--variant-tonal text-capitalize"
                                            draggable="false"><!----><span class="v-chip__underlay"></span><!---->
                                            <!---->active<!----><!----></span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><a
                                            class="v-btn v-btn--icon v-theme--light text-medium-emphasis v-btn--density-default v-btn--size-small v-btn--variant-text"
                                            href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/44"><span
                                            class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                            <!----><span class="v-btn__content" data-no-activator=""><svg
                                                aria-hidden="true"
                                                class="v-icon notranslate v-theme--light iconify iconify--mdi"
                                                height="1em"
                                                role="img" style="font-size: 24px; height: 24px; width: 24px;"
                                                tag="i"
                                                viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                                d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                                                fill="currentColor"></path></svg></span>
                                            <!----><!----></a></td>
                                    </tr><!---->
                                    <tr class="v-data-table__tr">
                                        <td class="v-data-table__td v-data-table-column--no-padding v-data-table-column--align-start"
                                            style="width: 48px;">
                                            <div
                                                class="v-selection-control v-selection-control--inline v-selection-control--density-default v-checkbox-btn">
                                                <div class="v-selection-control__wrapper"><!---->
                                                    <div class="v-selection-control__input">
                                                        <svg aria-hidden="true"
                                                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                             height="1em" role="img" tag="i"
                                                             viewBox="0 0 24 24"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                        <input id="input-223" aria-disabled="false"
                                                               indeterminateicon="$checkboxIndeterminate"
                                                               type="checkbox"
                                                               value="true"><!----></div>
                                                </div><!----></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex">
                                                <div
                                                    class="v-avatar v-theme--light text-error v-avatar--density-default v-avatar--variant-tonal me-3"
                                                    style="width: 34px; height: 34px;"><span>MM</span><!----><span
                                                    class="v-avatar__underlay"></span></div>
                                                <div class="d-flex flex-column"><h6
                                                    class="text-sm font-weight-medium"><a
                                                    class="font-weight-medium user-list-name"
                                                    href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/43">Micaela
                                                    McNirlan</a>
                                                </h6><span class="text-xs text-medium-emphasis">@mmcnirlan16</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-sm">mmcnirlan16@hc360.com</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex gap-2">
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default text-error iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M4 6h16v10H4m16 2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2h-4Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span class="text-capitalize">admin</span></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-capitalize text-high-emphasis">basic</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="v-chip v-theme--light text-secondary v-chip--density-comfortable elevation-0 v-chip--size-default v-chip--variant-tonal text-capitalize"
                                            draggable="false"><!----><span class="v-chip__underlay"></span><!---->
                                            <!---->inactive<!----><!----></span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><a
                                            class="v-btn v-btn--icon v-theme--light text-medium-emphasis v-btn--density-default v-btn--size-small v-btn--variant-text"
                                            href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/43"><span
                                            class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                            <!----><span class="v-btn__content" data-no-activator=""><svg
                                                aria-hidden="true"
                                                class="v-icon notranslate v-theme--light iconify iconify--mdi"
                                                height="1em"
                                                role="img" style="font-size: 24px; height: 24px; width: 24px;"
                                                tag="i"
                                                viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                                d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                                                fill="currentColor"></path></svg></span>
                                            <!----><!----></a></td>
                                    </tr><!---->
                                    <tr class="v-data-table__tr">
                                        <td class="v-data-table__td v-data-table-column--no-padding v-data-table-column--align-start"
                                            style="width: 48px;">
                                            <div
                                                class="v-selection-control v-selection-control--inline v-selection-control--density-default v-checkbox-btn">
                                                <div class="v-selection-control__wrapper"><!---->
                                                    <div class="v-selection-control__input">
                                                        <svg aria-hidden="true"
                                                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                             height="1em" role="img" tag="i"
                                                             viewBox="0 0 24 24"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                        <input id="input-226" aria-disabled="false"
                                                               indeterminateicon="$checkboxIndeterminate"
                                                               type="checkbox"
                                                               value="true"><!----></div>
                                                </div><!----></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex">
                                                <div
                                                    class="v-avatar v-theme--light text-info v-avatar--density-default v-avatar--variant-tonal me-3"
                                                    style="width: 34px; height: 34px;"><span>BR</span><!----><span
                                                    class="v-avatar__underlay"></span></div>
                                                <div class="d-flex flex-column"><h6
                                                    class="text-sm font-weight-medium"><a
                                                    class="font-weight-medium user-list-name"
                                                    href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/42">Benedetto
                                                    Rossiter</a>
                                                </h6><span class="text-xs text-medium-emphasis">@brossiter15</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="text-sm">brossiter15@craigslist.org</span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex gap-2">
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default text-info iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="m14.06 9l.94.94L5.92 19H5v-.92L14.06 9m3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span class="text-capitalize">editor</span></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-capitalize text-high-emphasis">team</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="v-chip v-theme--light text-secondary v-chip--density-comfortable elevation-0 v-chip--size-default v-chip--variant-tonal text-capitalize"
                                            draggable="false"><!----><span class="v-chip__underlay"></span><!---->
                                            <!---->inactive<!----><!----></span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><a
                                            class="v-btn v-btn--icon v-theme--light text-medium-emphasis v-btn--density-default v-btn--size-small v-btn--variant-text"
                                            href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/42"><span
                                            class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                            <!----><span class="v-btn__content" data-no-activator=""><svg
                                                aria-hidden="true"
                                                class="v-icon notranslate v-theme--light iconify iconify--mdi"
                                                height="1em"
                                                role="img" style="font-size: 24px; height: 24px; width: 24px;"
                                                tag="i"
                                                viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                                d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                                                fill="currentColor"></path></svg></span>
                                            <!----><!----></a></td>
                                    </tr><!---->
                                    <tr class="v-data-table__tr">
                                        <td class="v-data-table__td v-data-table-column--no-padding v-data-table-column--align-start"
                                            style="width: 48px;">
                                            <div
                                                class="v-selection-control v-selection-control--inline v-selection-control--density-default v-checkbox-btn">
                                                <div class="v-selection-control__wrapper"><!---->
                                                    <div class="v-selection-control__input">
                                                        <svg aria-hidden="true"
                                                             class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                             height="1em" role="img" tag="i"
                                                             viewBox="0 0 24 24"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                        <input id="input-229" aria-disabled="false"
                                                               indeterminateicon="$checkboxIndeterminate"
                                                               type="checkbox"
                                                               value="true"><!----></div>
                                                </div><!----></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex">
                                                <div
                                                    class="v-avatar v-theme--light text-success v-avatar--density-default v-avatar--variant-tonal me-3"
                                                    style="width: 34px; height: 34px;"><span>EB</span><!----><span
                                                    class="v-avatar__underlay"></span></div>
                                                <div class="d-flex flex-column"><h6
                                                    class="text-sm font-weight-medium"><a
                                                    class="font-weight-medium user-list-name"
                                                    href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/41">Edwina
                                                    Baldetti</a>
                                                </h6><span class="text-xs text-medium-emphasis">@ebaldetti14</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="text-sm">ebaldetti14@theguardian.com</span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;">
                                            <div class="d-flex gap-2">
                                                <svg aria-hidden="true"
                                                     class="v-icon notranslate v-theme--light v-icon--size-default text-success iconify iconify--mdi"
                                                     height="1em"
                                                     role="img" tag="i"
                                                     viewBox="0 0 24 24"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <path
                                                        d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92c0 .9-.18 1.75-.5 2.54l2.62 1.53c.56-1.24.88-2.62.88-4.07c0-5.18-3.95-9.45-9-9.95M12 19a7 7 0 0 1-7-7c0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95a10 10 0 0 0 10 10c3.3 0 6.23-1.61 8.05-4.09l-2.6-1.53A6.89 6.89 0 0 1 12 19Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span class="text-capitalize">maintainer</span></div>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span class="text-capitalize text-high-emphasis">team</span>
                                        </td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><span
                                            class="v-chip v-theme--light text-warning v-chip--density-comfortable elevation-0 v-chip--size-default v-chip--variant-tonal text-capitalize"
                                            draggable="false"><!----><span class="v-chip__underlay"></span><!---->
                                            <!---->pending<!----><!----></span></td>
                                        <td class="v-data-table__td v-data-table-column--align-start"
                                            style="left: 48px;"><a
                                            class="v-btn v-btn--icon v-theme--light text-medium-emphasis v-btn--density-default v-btn--size-small v-btn--variant-text"
                                            href="/materio-vuetify-vuejs-admin-template/demo-1/apps/user/view/41"><span
                                            class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                            <!----><span class="v-btn__content" data-no-activator=""><svg
                                                aria-hidden="true"
                                                class="v-icon notranslate v-theme--light iconify iconify--mdi"
                                                height="1em"
                                                role="img" style="font-size: 24px; height: 24px; width: 24px;"
                                                tag="i"
                                                viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                                d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                                                fill="currentColor"></path></svg></span>
                                            <!----><!----></a></td>
                                    </tr><!----></tbody><!----><!----></table>
                            </div>
                            <hr aria-orientation="horizontal" class="v-divider v-theme--light" role="separator">
                            <div class="d-flex justify-end gap-x-6 pa-2 flex-wrap">
                                <div class="d-flex align-center gap-x-2 text-sm"> Rows Per Page:
                                    <div
                                        class="v-input v-input--horizontal v-input--density-compact v-input--dirty v-input--readonly v-text-field v-text-field--flush-details v-select v-select--single v-select--selected per-page-select text-high-emphasis">
                                        <!---->
                                        <div class="v-input__control">
                                            <div
                                                aria-expanded="false"
                                                aria-haspopup="menu" aria-owns="v-menu-109"
                                                class="v-field v-field--active v-field--appended v-field--dirty v-field--no-label v-field--variant-plain v-theme--light"
                                                role="textbox">
                                                <div class="v-field__overlay"></div>
                                                <div class="v-field__loader">
                                                    <div aria-hidden="true" aria-valuemax="100"
                                                         aria-valuemin="0" class="v-progress-linear v-theme--light"
                                                         role="progressbar"
                                                         style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                        <!---->
                                                        <div class="v-progress-linear__background bg-primary"
                                                             style="width: 100%;"></div>
                                                        <div class="v-progress-linear__indeterminate">
                                                            <div
                                                                class="v-progress-linear__indeterminate long bg-primary"></div>
                                                            <div
                                                                class="v-progress-linear__indeterminate short bg-primary"></div>
                                                        </div><!----></div>
                                                </div><!---->
                                                <div class="v-field__field" data-no-activator=""><!----><label
                                                    class="v-label v-field-label" for="input-107"><!---->
                                                    <!----></label><!---->
                                                    <div class="v-field__input" data-no-activator=""><!---->
                                                        <div class="v-select__selection"><span
                                                            class="v-select__selection-text">10<!----></span></div>
                                                        <input id="input-107" aria-describedby="input-107-messages"
                                                               readonly="" size="1"
                                                               type="text"></div><!---->
                                                </div><!---->
                                                <div class="v-field__append-inner"><!---->
                                                    <svg aria-hidden="true"
                                                         class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                         height="1em" role="img" tag="i"
                                                         viewBox="0 0 24 24"
                                                         width="1em" xmlns="http://www.w3.org/2000/svg"
                                                         xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <path d="m7 10l5 5l5-5H7Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                                <div class="v-field__outline"><!----><!----></div>
                                            </div>
                                        </div><!----><!----></div>
                                </div>
                                <span
                                    class="d-flex align-center text-sm me-2 text-high-emphasis">1 - 10 of 50 </span>
                                <div class="d-flex gap-x-2 align-center me-2">
                                    <button
                                        class="v-btn v-btn--disabled v-btn--icon v-theme--light text-default v-btn--density-comfortable v-btn--size-default v-btn--variant-text flip-in-rtl"
                                        disabled=""
                                        type="button"><span class="v-btn__overlay"></span><span
                                        class="v-btn__underlay"></span><!----><span class="v-btn__content"
                                                                                    data-no-activator=""><svg
                                        aria-hidden="true"
                                        class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                        height="1em" role="img"
                                        tag="i"
                                        viewBox="0 0 24 24"
                                        width="1em" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                        d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"
                                        fill="currentColor"></path></svg></span>
                                        <!----><!----></button>
                                    <button
                                        class="v-btn v-btn--icon v-theme--light text-default v-btn--density-comfortable v-btn--size-default v-btn--variant-text flip-in-rtl"
                                        type="button">
                                        <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                        <!----><span class="v-btn__content" data-no-activator=""><svg
                                        aria-hidden="true"
                                        class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                        height="1em" role="img"
                                        tag="i"
                                        viewBox="0 0 24 24"
                                        width="1em" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                        d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
                                        fill="currentColor"></path></svg></span>
                                        <!----><!----></button>
                                </div>
                            </div>
                        </div><!----><!----><span class="v-card__underlay"></span></div>
                    <nav
                        class="v-navigation-drawer v-navigation-drawer--right v-navigation-drawer--temporary v-theme--light scrollable-content"
                        style="right: 0px; z-index: 1004; transform: translateX(110%); position: fixed; height: calc((100% - 0px) - 0px); top: 0px; bottom: 0px; width: 400px;">
                        <!----><!---->
                        <div class="v-navigation-drawer__content">
                            <div class="px-5 py-3 d-flex align-center bg-var-theme-background"><h3
                                class="font-weight-medium text-xl">Add User</h3>
                                <div class="flex-grow-1"></div>
                                <button
                                    class="v-btn v-btn--icon v-theme--light text-default v-btn--density-default v-btn--size-default v-btn--variant-text"
                                    type="button">
                                    <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                    class="v-btn__content" data-no-activator=""><svg
                                    aria-hidden="true"
                                    class="v-icon notranslate v-theme--light iconify iconify--mdi"
                                    height="1em" role="img" style="font-size: 18px; height: 18px; width: 18px;"
                                    tag="i" viewBox="0 0 24 24"
                                    width="1em" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"><path
                                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                                    fill="currentColor"></path></svg></span>
                                    <!----><!----></button>
                            </div>
                            <div class="ps ps--active-y">
                                <div
                                    class="v-card v-card--flat v-theme--light v-card--density-default v-card--variant-elevated">
                                    <!---->
                                    <div class="v-card__loader">
                                        <div aria-hidden="true" aria-valuemax="100"
                                             aria-valuemin="0" class="v-progress-linear v-theme--light"
                                             role="progressbar"
                                             style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                            <!---->
                                            <div class="v-progress-linear__background" style="width: 100%;"></div>
                                            <div class="v-progress-linear__indeterminate">
                                                <div class="v-progress-linear__indeterminate long"></div>
                                                <div class="v-progress-linear__indeterminate short"></div>
                                            </div><!----></div>
                                    </div><!----><!---->
                                    <div class="v-card-text">
                                        <form class="v-form" novalidate="">
                                            <div class="v-row">
                                                <div class="v-col v-col-12">
                                                    <div
                                                        class="v-input v-input--horizontal v-input--density-default v-text-field">
                                                        <!---->
                                                        <div class="v-input__control">
                                                            <div
                                                                class="v-field v-field--variant-outlined v-theme--light"
                                                                role="textbox">
                                                                <div class="v-field__overlay"></div>
                                                                <div class="v-field__loader">
                                                                    <div aria-hidden="true"
                                                                         aria-valuemax="100" aria-valuemin="0"
                                                                         class="v-progress-linear v-theme--light"
                                                                         role="progressbar"
                                                                         style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                        <!---->
                                                                        <div
                                                                            class="v-progress-linear__background bg-primary"
                                                                            style="width: 100%;"></div>
                                                                        <div
                                                                            class="v-progress-linear__indeterminate">
                                                                            <div
                                                                                class="v-progress-linear__indeterminate long bg-primary"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate short bg-primary"></div>
                                                                        </div><!----></div>
                                                                </div><!---->
                                                                <div class="v-field__field" data-no-activator="">
                                                                    <!----><label class="v-label v-field-label"
                                                                                  for="input-114"><!---->Full
                                                                    Name</label><!----><input id="input-114"
                                                                                              aria-describedby="input-114-messages"
                                                                                              class="v-field__input"
                                                                                              size="1"
                                                                                              type="text">
                                                                    <!----></div><!----><!---->
                                                                <div class="v-field__outline">
                                                                    <div class="v-field__outline__start"></div>
                                                                    <div class="v-field__outline__notch"><label
                                                                        aria-hidden="true"
                                                                        class="v-label v-field-label v-field-label--floating"
                                                                        for="input-114"><!---->
                                                                        Full Name</label></div>
                                                                    <div class="v-field__outline__end"></div><!---->
                                                                </div>
                                                            </div>
                                                        </div><!----><!----></div>
                                                </div>
                                                <div class="v-col v-col-12">
                                                    <div
                                                        class="v-input v-input--horizontal v-input--density-default v-text-field">
                                                        <!---->
                                                        <div class="v-input__control">
                                                            <div
                                                                class="v-field v-field--variant-outlined v-theme--light"
                                                                role="textbox">
                                                                <div class="v-field__overlay"></div>
                                                                <div class="v-field__loader">
                                                                    <div aria-hidden="true"
                                                                         aria-valuemax="100" aria-valuemin="0"
                                                                         class="v-progress-linear v-theme--light"
                                                                         role="progressbar"
                                                                         style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                        <!---->
                                                                        <div
                                                                            class="v-progress-linear__background bg-primary"
                                                                            style="width: 100%;"></div>
                                                                        <div
                                                                            class="v-progress-linear__indeterminate">
                                                                            <div
                                                                                class="v-progress-linear__indeterminate long bg-primary"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate short bg-primary"></div>
                                                                        </div><!----></div>
                                                                </div><!---->
                                                                <div class="v-field__field" data-no-activator="">
                                                                    <!----><label class="v-label v-field-label"
                                                                                  for="input-116"><!---->
                                                                    Username</label><!----><input id="input-116"
                                                                                                  aria-describedby="input-116-messages"
                                                                                                  class="v-field__input"
                                                                                                  size="1"
                                                                                                  type="text">
                                                                    <!----></div><!----><!---->
                                                                <div class="v-field__outline">
                                                                    <div class="v-field__outline__start"></div>
                                                                    <div class="v-field__outline__notch"><label
                                                                        aria-hidden="true"
                                                                        class="v-label v-field-label v-field-label--floating"
                                                                        for="input-116"><!---->
                                                                        Username</label></div>
                                                                    <div class="v-field__outline__end"></div><!---->
                                                                </div>
                                                            </div>
                                                        </div><!----><!----></div>
                                                </div>
                                                <div class="v-col v-col-12">
                                                    <div
                                                        class="v-input v-input--horizontal v-input--density-default v-text-field">
                                                        <!---->
                                                        <div class="v-input__control">
                                                            <div
                                                                class="v-field v-field--variant-outlined v-theme--light"
                                                                role="textbox">
                                                                <div class="v-field__overlay"></div>
                                                                <div class="v-field__loader">
                                                                    <div aria-hidden="true"
                                                                         aria-valuemax="100" aria-valuemin="0"
                                                                         class="v-progress-linear v-theme--light"
                                                                         role="progressbar"
                                                                         style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                        <!---->
                                                                        <div
                                                                            class="v-progress-linear__background bg-primary"
                                                                            style="width: 100%;"></div>
                                                                        <div
                                                                            class="v-progress-linear__indeterminate">
                                                                            <div
                                                                                class="v-progress-linear__indeterminate long bg-primary"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate short bg-primary"></div>
                                                                        </div><!----></div>
                                                                </div><!---->
                                                                <div class="v-field__field" data-no-activator="">
                                                                    <!----><label class="v-label v-field-label"
                                                                                  for="input-118"><!---->
                                                                    Email</label><!----><input id="input-118"
                                                                                               aria-describedby="input-118-messages"
                                                                                               class="v-field__input"
                                                                                               size="1"
                                                                                               type="text">
                                                                    <!----></div><!----><!---->
                                                                <div class="v-field__outline">
                                                                    <div class="v-field__outline__start"></div>
                                                                    <div class="v-field__outline__notch"><label
                                                                        aria-hidden="true"
                                                                        class="v-label v-field-label v-field-label--floating"
                                                                        for="input-118"><!---->
                                                                        Email</label></div>
                                                                    <div class="v-field__outline__end"></div><!---->
                                                                </div>
                                                            </div>
                                                        </div><!----><!----></div>
                                                </div>
                                                <div class="v-col v-col-12">
                                                    <div
                                                        class="v-input v-input--horizontal v-input--density-default v-text-field">
                                                        <!---->
                                                        <div class="v-input__control">
                                                            <div
                                                                class="v-field v-field--variant-outlined v-theme--light"
                                                                role="textbox">
                                                                <div class="v-field__overlay"></div>
                                                                <div class="v-field__loader">
                                                                    <div aria-hidden="true"
                                                                         aria-valuemax="100" aria-valuemin="0"
                                                                         class="v-progress-linear v-theme--light"
                                                                         role="progressbar"
                                                                         style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                        <!---->
                                                                        <div
                                                                            class="v-progress-linear__background bg-primary"
                                                                            style="width: 100%;"></div>
                                                                        <div
                                                                            class="v-progress-linear__indeterminate">
                                                                            <div
                                                                                class="v-progress-linear__indeterminate long bg-primary"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate short bg-primary"></div>
                                                                        </div><!----></div>
                                                                </div><!---->
                                                                <div class="v-field__field" data-no-activator="">
                                                                    <!----><label class="v-label v-field-label"
                                                                                  for="input-120"><!---->
                                                                    Company</label><!----><input id="input-120"
                                                                                                 aria-describedby="input-120-messages"
                                                                                                 class="v-field__input"
                                                                                                 size="1"
                                                                                                 type="text">
                                                                    <!----></div><!----><!---->
                                                                <div class="v-field__outline">
                                                                    <div class="v-field__outline__start"></div>
                                                                    <div class="v-field__outline__notch"><label
                                                                        aria-hidden="true"
                                                                        class="v-label v-field-label v-field-label--floating"
                                                                        for="input-120"><!---->
                                                                        Company</label></div>
                                                                    <div class="v-field__outline__end"></div><!---->
                                                                </div>
                                                            </div>
                                                        </div><!----><!----></div>
                                                </div>
                                                <div class="v-col v-col-12">
                                                    <div
                                                        class="v-input v-input--horizontal v-input--density-default v-text-field">
                                                        <!---->
                                                        <div class="v-input__control">
                                                            <div
                                                                class="v-field v-field--variant-outlined v-theme--light"
                                                                role="textbox">
                                                                <div class="v-field__overlay"></div>
                                                                <div class="v-field__loader">
                                                                    <div aria-hidden="true"
                                                                         aria-valuemax="100" aria-valuemin="0"
                                                                         class="v-progress-linear v-theme--light"
                                                                         role="progressbar"
                                                                         style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                        <!---->
                                                                        <div
                                                                            class="v-progress-linear__background bg-primary"
                                                                            style="width: 100%;"></div>
                                                                        <div
                                                                            class="v-progress-linear__indeterminate">
                                                                            <div
                                                                                class="v-progress-linear__indeterminate long bg-primary"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate short bg-primary"></div>
                                                                        </div><!----></div>
                                                                </div><!---->
                                                                <div class="v-field__field" data-no-activator="">
                                                                    <!----><label class="v-label v-field-label"
                                                                                  for="input-122"><!---->
                                                                    Country</label><!----><input id="input-122"
                                                                                                 aria-describedby="input-122-messages"
                                                                                                 class="v-field__input"
                                                                                                 size="1"
                                                                                                 type="text">
                                                                    <!----></div><!----><!---->
                                                                <div class="v-field__outline">
                                                                    <div class="v-field__outline__start"></div>
                                                                    <div class="v-field__outline__notch"><label
                                                                        aria-hidden="true"
                                                                        class="v-label v-field-label v-field-label--floating"
                                                                        for="input-122"><!---->
                                                                        Country</label></div>
                                                                    <div class="v-field__outline__end"></div><!---->
                                                                </div>
                                                            </div>
                                                        </div><!----><!----></div>
                                                </div>
                                                <div class="v-col v-col-12">
                                                    <div
                                                        class="v-input v-input--horizontal v-input--density-default v-text-field">
                                                        <!---->
                                                        <div class="v-input__control">
                                                            <div
                                                                class="v-field v-field--variant-outlined v-theme--light"
                                                                role="textbox">
                                                                <div class="v-field__overlay"></div>
                                                                <div class="v-field__loader">
                                                                    <div aria-hidden="true"
                                                                         aria-valuemax="100" aria-valuemin="0"
                                                                         class="v-progress-linear v-theme--light"
                                                                         role="progressbar"
                                                                         style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                        <!---->
                                                                        <div
                                                                            class="v-progress-linear__background bg-primary"
                                                                            style="width: 100%;"></div>
                                                                        <div
                                                                            class="v-progress-linear__indeterminate">
                                                                            <div
                                                                                class="v-progress-linear__indeterminate long bg-primary"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate short bg-primary"></div>
                                                                        </div><!----></div>
                                                                </div><!---->
                                                                <div class="v-field__field" data-no-activator="">
                                                                    <!----><label class="v-label v-field-label"
                                                                                  for="input-124"><!---->
                                                                    Contact</label><!----><input id="input-124"
                                                                                                 aria-describedby="input-124-messages"
                                                                                                 class="v-field__input"
                                                                                                 size="1"
                                                                                                 type="number">
                                                                    <!----></div><!----><!---->
                                                                <div class="v-field__outline">
                                                                    <div class="v-field__outline__start"></div>
                                                                    <div class="v-field__outline__notch"><label
                                                                        aria-hidden="true"
                                                                        class="v-label v-field-label v-field-label--floating"
                                                                        for="input-124"><!---->
                                                                        Contact</label></div>
                                                                    <div class="v-field__outline__end"></div><!---->
                                                                </div>
                                                            </div>
                                                        </div><!----><!----></div>
                                                </div>
                                                <div class="v-col v-col-12">
                                                    <div
                                                        class="v-input v-input--horizontal v-input--density-default v-input--readonly v-text-field v-select v-select--single">
                                                        <!---->
                                                        <div class="v-input__control">
                                                            <div
                                                                aria-expanded="false"
                                                                aria-haspopup="menu" aria-owns="v-menu-128"
                                                                class="v-field v-field--appended v-field--variant-outlined v-theme--light"
                                                                role="textbox">
                                                                <div class="v-field__overlay"></div>
                                                                <div class="v-field__loader">
                                                                    <div aria-hidden="true"
                                                                         aria-valuemax="100" aria-valuemin="0"
                                                                         class="v-progress-linear v-theme--light"
                                                                         role="progressbar"
                                                                         style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                        <!---->
                                                                        <div
                                                                            class="v-progress-linear__background bg-primary"
                                                                            style="width: 100%;"></div>
                                                                        <div
                                                                            class="v-progress-linear__indeterminate">
                                                                            <div
                                                                                class="v-progress-linear__indeterminate long bg-primary"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate short bg-primary"></div>
                                                                        </div><!----></div>
                                                                </div><!---->
                                                                <div class="v-field__field" data-no-activator="">
                                                                    <!----><label class="v-label v-field-label"
                                                                                  for="input-126"><!---->Select
                                                                    Role</label><!---->
                                                                    <div class="v-field__input"
                                                                         data-no-activator=""><!----><input
                                                                        id="input-126"
                                                                        aria-describedby="input-126-messages"
                                                                        readonly=""
                                                                        size="1"
                                                                        type="text"></div>
                                                                    <!----></div><!---->
                                                                <div class="v-field__append-inner"><!---->
                                                                    <svg aria-hidden="true"
                                                                         class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                                         height="1em" role="img" tag="i"
                                                                         viewBox="0 0 24 24"
                                                                         width="1em"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                        <path d="m7 10l5 5l5-5H7Z"
                                                                              fill="currentColor"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="v-field__outline">
                                                                    <div class="v-field__outline__start"></div>
                                                                    <div class="v-field__outline__notch"><label
                                                                        aria-hidden="true"
                                                                        class="v-label v-field-label v-field-label--floating"
                                                                        for="input-126"><!---->
                                                                        Select Role</label></div>
                                                                    <div class="v-field__outline__end"></div><!---->
                                                                </div>
                                                            </div>
                                                        </div><!----><!----></div>
                                                </div>
                                                <div class="v-col v-col-12">
                                                    <div
                                                        class="v-input v-input--horizontal v-input--density-default v-input--readonly v-text-field v-select v-select--single">
                                                        <!---->
                                                        <div class="v-input__control">
                                                            <div
                                                                aria-expanded="false"
                                                                aria-haspopup="menu" aria-owns="v-menu-131"
                                                                class="v-field v-field--appended v-field--variant-outlined v-theme--light"
                                                                role="textbox">
                                                                <div class="v-field__overlay"></div>
                                                                <div class="v-field__loader">
                                                                    <div aria-hidden="true"
                                                                         aria-valuemax="100" aria-valuemin="0"
                                                                         class="v-progress-linear v-theme--light"
                                                                         role="progressbar"
                                                                         style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                        <!---->
                                                                        <div
                                                                            class="v-progress-linear__background bg-primary"
                                                                            style="width: 100%;"></div>
                                                                        <div
                                                                            class="v-progress-linear__indeterminate">
                                                                            <div
                                                                                class="v-progress-linear__indeterminate long bg-primary"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate short bg-primary"></div>
                                                                        </div><!----></div>
                                                                </div><!---->
                                                                <div class="v-field__field" data-no-activator="">
                                                                    <!----><label class="v-label v-field-label"
                                                                                  for="input-129"><!---->Select
                                                                    Plan</label><!---->
                                                                    <div class="v-field__input"
                                                                         data-no-activator=""><!----><input
                                                                        id="input-129"
                                                                        aria-describedby="input-129-messages"
                                                                        readonly=""
                                                                        size="1"
                                                                        type="text"></div>
                                                                    <!----></div><!---->
                                                                <div class="v-field__append-inner"><!---->
                                                                    <svg aria-hidden="true"
                                                                         class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                                         height="1em" role="img" tag="i"
                                                                         viewBox="0 0 24 24"
                                                                         width="1em"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                        <path d="m7 10l5 5l5-5H7Z"
                                                                              fill="currentColor"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="v-field__outline">
                                                                    <div class="v-field__outline__start"></div>
                                                                    <div class="v-field__outline__notch"><label
                                                                        aria-hidden="true"
                                                                        class="v-label v-field-label v-field-label--floating"
                                                                        for="input-129"><!---->
                                                                        Select Plan</label></div>
                                                                    <div class="v-field__outline__end"></div><!---->
                                                                </div>
                                                            </div>
                                                        </div><!----><!----></div>
                                                </div>
                                                <div class="v-col v-col-12">
                                                    <div
                                                        class="v-input v-input--horizontal v-input--density-default v-input--readonly v-text-field v-select v-select--single">
                                                        <!---->
                                                        <div class="v-input__control">
                                                            <div
                                                                aria-expanded="false"
                                                                aria-haspopup="menu" aria-owns="v-menu-134"
                                                                class="v-field v-field--appended v-field--variant-outlined v-theme--light"
                                                                role="textbox">
                                                                <div class="v-field__overlay"></div>
                                                                <div class="v-field__loader">
                                                                    <div aria-hidden="true"
                                                                         aria-valuemax="100" aria-valuemin="0"
                                                                         class="v-progress-linear v-theme--light"
                                                                         role="progressbar"
                                                                         style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                                        <!---->
                                                                        <div
                                                                            class="v-progress-linear__background bg-primary"
                                                                            style="width: 100%;"></div>
                                                                        <div
                                                                            class="v-progress-linear__indeterminate">
                                                                            <div
                                                                                class="v-progress-linear__indeterminate long bg-primary"></div>
                                                                            <div
                                                                                class="v-progress-linear__indeterminate short bg-primary"></div>
                                                                        </div><!----></div>
                                                                </div><!---->
                                                                <div class="v-field__field" data-no-activator="">
                                                                    <!----><label class="v-label v-field-label"
                                                                                  for="input-132"><!---->Select
                                                                    Status</label><!---->
                                                                    <div class="v-field__input"
                                                                         data-no-activator=""><!----><input
                                                                        id="input-132"
                                                                        aria-describedby="input-132-messages"
                                                                        readonly=""
                                                                        size="1"
                                                                        type="text"></div>
                                                                    <!----></div><!---->
                                                                <div class="v-field__append-inner"><!---->
                                                                    <svg aria-hidden="true"
                                                                         class="v-icon notranslate v-theme--light v-icon--size-default iconify iconify--mdi"
                                                                         height="1em" role="img" tag="i"
                                                                         viewBox="0 0 24 24"
                                                                         width="1em"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                        <path d="m7 10l5 5l5-5H7Z"
                                                                              fill="currentColor"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="v-field__outline">
                                                                    <div class="v-field__outline__start"></div>
                                                                    <div class="v-field__outline__notch"><label
                                                                        aria-hidden="true"
                                                                        class="v-label v-field-label v-field-label--floating"
                                                                        for="input-132"><!---->
                                                                        Select Status</label></div>
                                                                    <div class="v-field__outline__end"></div><!---->
                                                                </div>
                                                            </div>
                                                        </div><!----><!----></div>
                                                </div>
                                                <div class="v-col v-col-12">
                                                    <button
                                                        class="v-btn v-btn--elevated v-theme--light bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated me-3"
                                                        type="submit">
                                                        <span class="v-btn__overlay"></span><span
                                                        class="v-btn__underlay"></span><!----><span
                                                        class="v-btn__content" data-no-activator=""> Submit </span>
                                                        <!----><!----></button>
                                                    <button
                                                        class="v-btn v-theme--light text-secondary v-btn--density-default v-btn--size-default v-btn--variant-tonal"
                                                        type="reset">
                                                        <span class="v-btn__overlay"></span><span
                                                        class="v-btn__underlay"></span><!----><span
                                                        class="v-btn__content" data-no-activator=""> Cancel </span>
                                                        <!----><!----></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div><!----><!----><span class="v-card__underlay"></span></div>
                                <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                                    <div class="ps__thumb-x" style="left: 0px; width: 0px;" tabindex="0"></div>
                                </div>
                                <div class="ps__rail-y" style="top: 0px; height: 631px; right: 2px;">
                                    <div class="ps__thumb-y" style="top: 0px; height: 498px;" tabindex="0"></div>
                                </div>
                            </div>
                        </div><!----></nav><!----></section>
            </v-col>








            <div class="py-12">
                <v-card class="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-5">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="flex bg-gray justify-between items=center p-5">
                            <div class="flex space-x-2 items-center">
                                ¡Página de configuración de usuarios! ¡Aquí puede enumerar, crear, actualizar o eliminar
                                usuarios!
                            </div>
                            <div v-if="can.create" class="flex space-x-2 items-center">
                                <a class="px-4 py-2 bg-green uppercase text-white rounded focus:outline-none flex items-center"
                                   href="#"><span
                                    class="iconify mr-1" data-icon="gridicons:create" data-inline="false"></span> Create
                                    User</a>
                            </div>
                        </div>
                    </div>
                </v-card>
                <v-card class="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <v-table class="w-full text-sm text-left text-gray dark:text-gray">
                            <thead class="text-xs text-gray uppercase bg-gray dark:bg-gray dark:text-gray">
                            <tr>
                                <th class="py-3 px-6" scope="col">Name</th>
                                <th class="py-3 px-6" scope="col">Email</th>
                                <th v-if="can.edit || can.delete" class="py-3 px-6" scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="user in users.data" :key="user.id"
                                class="bg-white border-b dark:bg-gray dark:border-gray">
                                <td class="py-4 px-6" data-label="Name">
                                    {{ user.name }}
                                </td>
                                <td class="py-4 px-6" data-label="Email">
                                    {{ user.email }}
                                </td>
                                <td
                                    v-if="can.edit || can.delete"
                                    class="py-4 px-6"
                                >
                                    <div no-wrap type="justify-start lg:justify-end">
                                        <v-btn v-if="can.edit"
                                               class="ml-4 bg-success px-2 py-1 text-white cursor-pointer"
                                               icon>
                                            <v-icon icon="mdi-edit-user"></v-icon>
                                        </v-btn>
                                        <v-btn class="ml-4 bg-info  text-white cursor-pointer" icon
                                               @click="showUser(user)">
                                            <v-icon icon="mdi-delete-user"></v-icon>
                                        </v-btn>
                                        <v-btn v-if="can.delete" class="ml-4 bg-error   text-white cursor-pointer"
                                               icon>
                                            <v-icon icon="mdi-information-user"></v-icon>
                                        </v-btn>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </v-table>
                    </div>
                </v-card>
            </div>
        </v-container>
    </admin-layout>
</template>

<style scoped>

</style>
