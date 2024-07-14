<template>
    <div v-for="field in model?.fields" :key="field.name">
        <component :is="field.component" v-bind="field" v-model="model.data[field.name]" clearable />
    </div>
</template>

<script setup>
import styler from "../core/styler.js";
import parser from "../core/parser.js";
import { ref, watch } from "vue";

defineExpose({ reset })

const model = defineModel({});
const $ = defineProps({
    isNew: {
        type: Boolean,
        default: true,
    },
    parser: {
        type: Function,
        default: null,
    },
});

const originalModel = ref({});

watch(
    () => model,
    (newVal) => { if (newVal.value && !newVal.value.parsed) builder(newVal.value); },
    { immediate: true, deep: true }
);

function builder(modelValue) {
    let builtModel = $.parser
        ? $.parser(modelValue, $.isNew)
        : parser(modelValue, $.isNew);

    builtModel.fields = styler(builtModel)
    originalModel.value = JSON.parse(JSON.stringify(builtModel.data))
    return model.value = builtModel
}

function reset() {
    model.value.data = { ...originalModel.value };
}
</script>
<style>
/* @import "primevue/resources/themes/aura-dark-green/theme.css"; */
@import "@mdi/font/css/materialdesignicons.css";
</style>
