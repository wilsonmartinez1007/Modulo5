<script setup>
    const busqueda = defineModel('prioridad')
</script>

<template>
    
    <h2>Buscador de citas</h2>
        <input class="busq" type="text" v-model="busqueda" placeholder="Dijita el nombre del cliente">
        
        
</template>
<style>
    .busq{
        padding: .3rem;
        border-radius: 4px;
        border: none;
        
    }
</style>