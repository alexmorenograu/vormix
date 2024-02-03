<template>
    <div class="grid grid-cols-3 gap-2">
        <v-card title="Input">
            <pre class="mt-6 text-sky-600 text-xs">
                {{ JSON.stringify(vanillaModel, null, 2) }}
            </pre>
        </v-card>
        <Vormix v-model="model" />
        <v-card title="Output">
            <pre class="mt-6 text-sky-600 text-xs">
                {{ JSON.stringify(model, null, 2) }}
            </pre>
        </v-card>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const stringField = {
    label: 'Name (String)',
    name: 'name',
    fieldType: 'String',
    isRequired: true
}

const intField = {
    name: 'age',
    fieldType: 'Int',
    default: 23
}

const dateTimeField = {
    name: 'birth',
    fieldType: 'DateTime',
}

const relationField = {
    name: 'country',
    fieldType: 'Relation',
    values: [
        { id: 1, name: 'EEUU' },
        { id: 2, name: 'Spain' }
    ],
}

const booleanField = {
    name: 'isHuman',
    fieldType: 'Boolean',
}

const fields = [
    stringField,
    intField,
    dateTimeField,
    relationField,
    booleanField
];
const vanillaModel = {
    name: 'Book',
    fields,
    data: {
        name: 'This is an default value',
    },
}
const model = ref({ ...vanillaModel })
</script>

