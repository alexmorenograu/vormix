<template>
    <v-card>
        <!-- {{ JSON.stringify(model, null, 4) }} -->
    </v-card>
    <MetaForm :model />
</template>
<script setup>
import MetaForm from './MetaForm.vue'
import { ref } from 'vue'

const model = ref({
    name: 'Book',
    fields: [
        {
            label: 'Name (String)',
            name: 'name',
            fieldType: 'String',
            isRequired: true
        },
        {
            label: 'Age (Numeric)',
            name: 'age',
            fieldType: 'Int',
            isRequired: true
        },
        {
            label: 'Is human? (Boolean)',
            name: 'isHuman',
            fieldType: 'Boolean',
        },
        {
            label: 'Birth (Datetime)',
            name: 'birth',
            fieldType: 'DateTime',
            isRequired: true
        },
        {
            label: 'Country (Relation)',
            name: 'country',
            fieldType: 'Relation',
            values: [
                { id: 1, name: 'EEUU' },
                { id: 2, name: 'Spain' }
            ],
            isRequired: true
        }
    ],
    actions: {}, // TODO
    data: {
        name: 'This is an default value',
    },
})
</script>

