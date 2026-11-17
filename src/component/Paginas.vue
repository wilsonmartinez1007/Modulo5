<script setup>
    import { storeCitas } from '@/stores/storeCitas';
    import { storeToRefs } from 'pinia';
    import ListaCitas from './ListaCitas.vue';


    const citasStore = storeCitas()
    const {busqueda,filtradas} = storeToRefs(citasStore)

    </script>
<template>
    <ListaCitas
        v-model:prioridad="busqueda"
        :items-citas="citasStore.itemsPagina"
        :filtradas="filtradas"
        :pagina="citasStore.pagina"
        :total-pagina="citasStore.totalPaginas"
        @anterior="citasStore.anterior()"
        @siguiente="citasStore.siguiente()"

    />

</template>
<style scoped></style>