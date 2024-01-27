<template>
    <v-card class="p-3">
        <!-- <keep-alive> -->
        <div v-for="field in model.fields" :key="field.name">
            <component :is="field.component" v-bind="field" v-model="field.modelValue" />
        </div>
        <!-- </keep-alive> -->
        <slot name="more"></slot>
        <slot name="actions">
            <div class="flex justify-end">
                <v-btn prepend-icon="mdi-reload" class="p-2">
                    Reset
                </v-btn>
                <v-btn prepend-icon="mdi-content-save" class="p-2">
                    Save
                </v-btn>
                <slot name="moreActions"></slot>
            </div>
        </slot>
    </v-card>
</template>

<script setup>
import { VTextField, VBtn } from 'vuetify/components'
// import VCalendar from './VCalendar.vue';
import styler from '../core/styler.js'
import parser from '../core/parser.js'
import { onMounted, ref } from 'vue'

const $ = defineProps({
    model: {
        type: Object,
        required: true
    }
})

const test = ref();
onMounted(() => {
    console.log($.model)
    $.model.fields = parser($.model)
    $.model.fields = styler($.model)
    console.log($.model)
})
</script>
