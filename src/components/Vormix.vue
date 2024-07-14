<template>
    <v-card style="padding: 10px;" :title="model?.name">
        <!-- <keep-alive> -->
        <div class="mt-6 grid grid-cols-2 md:grid-cols-1 gap-2">
            <VormixSK ref="vormixSkRef" v-model="model" v-bind="$attrs" />
        </div>
        <!-- </keep-alive> -->
        <slot name="more"></slot>
        <slot name="actions">
            <div class="grid grid-flow-col gap-2 auto-cols-min justify-end">
                <slot name="beforeActions"></slot>
                <v-btn v-for="button of buttons" :key="index" v-bind="button.attrs" :prepend-icon="button.icon">
                    {{ button.title }}
                </v-btn>
                <slot name="actions">
                    <v-btn prepend-icon="mdi-reload" @click="vormixSkRef.reset()" v-if="resetBtn">
                        Reset
                    </v-btn>
                </slot>
                <slot name="afterActions"></slot>
            </div>
        </slot>
    </v-card>
</template>
<script setup>
import VormixSK from "./VormixSK.vue";
import { ref } from "vue";

const model = defineModel({});
const $ = defineProps({
    resetBtn: {
        type: Boolean,
        default: true,
    },
    buttons: {
        type: Array,
        default: () => [],
    },
});

const vormixSkRef = ref()
</script>
<style>
/* @import "primevue/resources/themes/aura-dark-green/theme.css"; */
@import "@mdi/font/css/materialdesignicons.css";
@import "../assets/tailwind.css";
</style>
