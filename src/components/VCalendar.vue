<template>
    <v-menu v-model="show" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-text-field v-model="parsedModel" :label="$.label" :variant="$.variant" readonly @click="() => show = !show"
                v-bind="props"></v-text-field>
        </template>
        <v-list>
            <v-list-item class="flex justify-center">
                <Calendar v-model="model" inline class="p-2" showTime />
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import Calendar from 'primevue/calendar';

const model = defineModel()
const parsedModel = computed(() => model.value && new Date(model.value).toLocaleString())
const show = ref(false)

watch(model, (newValue, oldValue) => {
    if (!newValue || !oldValue || newValue.toLocaleDateString() != oldValue.toLocaleDateString())
        show.value = false
})

const $ = defineProps({
    label: {
        type: String,
    },
    variant: {
        type: String,
    }
})
</script>