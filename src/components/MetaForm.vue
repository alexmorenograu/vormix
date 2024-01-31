<template>
    <v-card class="p-3" :title="model.name">
        <!-- <keep-alive> -->
        <div class="mt-6 grid grid-cols-2 md:grid-cols-1 gap-2">
            <div v-for="field in model.fields" :key="field.name">
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
import { VBtn } from 'vuetify/components'
import styler from '../core/styler.js'
import parser from '../core/parser.js'
import { onMounted } from 'vue'

const $ = defineProps({
    model: {
        type: Object,
        required: true
    },
    saveFn: {
        type: Function,
        // default: (v) => console.log(v)
    },
    isNew: {
        type: Boolean,
        default: true
    },
    saveBtn: {
        type: Boolean,
        default: true
    },
    resetBtn: {
        type: Boolean,
        default: true
    },
    defaultBtn: {
        type: Boolean,
        default: true
    }
})

let originalValue;
onMounted(() => {
    $.model = parser($.model, $.isNew)
    $.model.fields = styler($.model)
    originalValue = JSON.parse(JSON.stringify($.model.data))
})

function reset() {
    $.model.data = JSON.parse(JSON.stringify(originalValue))
}
</script>
