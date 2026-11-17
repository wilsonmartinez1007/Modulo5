<script setup lang="ts">
    import { ref } from 'vue';
    const seleccionados = ref<number[]>([])
    function alternar(id:number){
        if( seleccionados.value.includes(id)){
            seleccionados.value = seleccionados.value.filter(seleccion=>seleccion!==id)
        }else{seleccionados.value.push(id)

        }
    }
    function selecc(id:number){
        return seleccionados.value.includes(id)
    }


</script>
<template>
    <slot
    :seleccionados ="seleccionados"
    :alternar="alternar"
    :selecc="selecc"></slot>
</template>
