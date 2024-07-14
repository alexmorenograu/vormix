<template>
    <v-menu v-model="show" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-text-field v-model="parsedModel" :label :variant :clearable :rules @click="() => show = !show"
                v-bind="props" class="mb-2" @click:clear="model = null" />
        </template>
        <v-list class="flexCenter">
            <v-list-item class="flexCenter">
                <PVCalendar v-model="model" inline :show-time />
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

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
    },
    clearable: {
        type: Boolean,
        default: true
    },
    rules: {
        type: Array,
    },
    showTime: {
        type: Boolean,
        default: true
    },
})
</script>
<style>
.p-datepicker {
    background: inherit;
    border: 2px solid rgb(255, 255, 255, 0.3);
    padding: 5px;
}

.flexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>