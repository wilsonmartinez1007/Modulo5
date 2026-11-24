<script setup>
    const busqueda = defineModel('prioridad')
</script>

<template>
    
    <h2>Buscador de citas</h2>
        <input type="text" v-model="busqueda" placeholder="Dijita el nombre del cliente">
        
        
</template>