<template>
    <v-card class="p-3" :title="model.name">
        <!-- <keep-alive> -->
        <div v-for="field in model.fields" :key="field.name" class="mt-4">
            <component :is="field.component" v-bind="field" v-model="model.data[field.name]" class="mb-2" />
        </div>
        <!-- </keep-alive> -->
        <slot name="more"></slot>
        <slot name="actions">
            <div class="flex justify-end">
                <v-btn prepend-icon="mdi-reload" class="p-2" @click="reset()">
                    Reset
                </v-btn>
                <v-btn prepend-icon="mdi-content-save" class="p-2" @click="saveFn && saveFn(model.data)">
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
import { onMounted, ref } from 'vue'

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
