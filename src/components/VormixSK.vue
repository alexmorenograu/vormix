<template>
    <div v-for="field in model?.fields" :key="field.name">
        <component :is="field.component" v-bind="field" v-model="model.data[field.name]" clearable />
    </div>
</template>

<script setup>
import styler from "../core/styler.js";
import parser from "../core/parser.js";
import { watch } from "vue";

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
    return model.value = builtModel
}
</script>
<style>
@import "primevue/resources/themes/aura-dark-green/theme.css";
@import "@mdi/font/css/materialdesignicons.css";
</style>
