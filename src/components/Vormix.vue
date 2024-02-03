<template>
    <v-card style="padding: 10px;" :title="model?.name">
        <!-- <keep-alive> -->
        <div class="mt-6 grid grid-cols-2 md:grid-cols-1 gap-2">
            <div v-for="field in model?.fields" :key="field.name">
                <component :is="field.component" v-bind="field" v-model="model.data[field.name]" />
            </div>
        </div>
        <!-- </keep-alive> -->
        <slot name="more"></slot>
        <slot name="actions">
            <div class="grid grid-flow-col gap-2 auto-cols-min justify-end">
                <v-btn prepend-icon="mdi-reload" class="p-2" @click="reset()" v-if="saveBtn && defaultBtn">
                    Reset
                </v-btn>
                <v-btn prepend-icon="mdi-content-save" class="p-2" @click="saveFn && saveFn(model.data)"
                    v-if="resetBtn && defaultBtn">
                    Save
                </v-btn>
                <slot name="moreActions"></slot>
            </div>
        </slot>
    </v-card>
</template>

<script setup>
import styler from "../core/styler.js";
import parser from "../core/parser.js";
import { watch } from "vue";

const model = defineModel({});
let originalModel;

const $ = defineProps({
    saveFn: {
        type: Function,
        // default: (v) => console.log(v)
    },
    isNew: {
        type: Boolean,
        default: true,
    },
    saveBtn: {
        type: Boolean,
        default: true,
    },
    resetBtn: {
        type: Boolean,
        default: true,
    },
    defaultBtn: {
        type: Boolean,
        default: true,
    },
});

watch(
    () => model,
    (newVal) => { if (newVal.value && !newVal.value.parsed) builder(newVal.value); },
    { immediate: true, deep: true }
);

function builder(modelValue) {
    let builtModel = parser(modelValue, $.isNew)
    builtModel.fields = styler(builtModel)

    originalModel = JSON.parse(JSON.stringify(builtModel.data))
    return model.value = builtModel
}

function reset() {
    $.model.data = JSON.parse(JSON.stringify(originalModel));
}
</script>
<style>
@import "primevue/resources/themes/aura-dark-green/theme.css";
@import "@mdi/font/css/materialdesignicons.css";
@import "../assets/tailwind.css";
</style>
