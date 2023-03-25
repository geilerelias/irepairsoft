<script setup>
import {onMounted, ref} from 'vue';

defineProps({
    modelValue: String,
    type: {
        default: "text",
        type: String
    },
    rules: {type: Object},
    label: {type: String},
    variant: {default: "outlined"},
    errorMessages: {type: String},
    density: {default: "comfortable"}
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({focus: () => input.value.focus()});
</script>

<template>
    <!--    <input
            ref="input"
            class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >-->
    <v-text-field
        ref="input"
        :density="density"
        :error-messages="errorMessages"
        :label="label"
        :type="type"
        :value="modelValue"
        :variant="variant"
        @input="$emit('update:modelValue', $event.target.value)">
    </v-text-field>
</template>

<style>
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    --tw-ring-inset: none;
    --tw-ring-offset-width: none;
    --tw-ring-offset-color: none;
    --tw-ring-offset-shadow: none;
    --tw-ring-shadow: none;
    box-shadow: none;
    border-color: none;
}
</style>
