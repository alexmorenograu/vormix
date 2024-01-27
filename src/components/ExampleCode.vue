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
            name: 'Name (String)',
            fieldType: 'String',
        },
        {
            name: 'Age (Numeric)',
            fieldType: 'Int',
        },
        {
            name: 'Is human? (Boolean)',
            fieldType: 'Boolean',
        },
        {
            name: 'Birth (Datetime)',
            fieldType: 'DateTime',
        },
        {
            name: 'Country (Relation)',
            fieldType: 'Relation',
            values: [
                { id: 1, name: 'EEUU' },
                { id: 2, name: 'Spain' }
            ]
        }
    ],
    actions: {}, // TODO
    values: {}, // TODO
})
</script>

