<script setup>
import {Head, useForm} from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import AuthLayout from "../../Layouts/AuthLayout.vue";

defineProps({
    status: String,
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <auth-layout>
        <Head title="Forgot Password"/>

        <AuthenticationCard>
            <template #logo>
                <AuthenticationCardLogo/>
            </template>

            <div class="mb-4 text-sm text-gray-600 text-justify">
                ¿Olvidaste tu contraseña? No hay problema. Simplemente háganos saber su dirección de correo electrónico
                y le enviaremos un enlace de restablecimiento de contraseña que le permitirá elegir una nueva.
            </div>

            <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                {{ status }}
            </div>

            <form @submit.prevent="submit">
                <div>
                    <InputLabel for="email" value="Email"/>
                    <TextInput
                        id="email"
                        v-model="form.email"
                        autocomplete="username"
                        autofocus
                        class="mt-1 block w-full"
                        required
                        type="email"
                    />
                    <InputError :message="form.errors.email" class="mt-2"/>
                </div>

                <div class="flex items-center justify-end mt-4">
                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticationCard>
    </auth-layout>
</template>
