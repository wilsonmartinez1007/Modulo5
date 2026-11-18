<script setup lang="ts">
    import { ref } from 'vue';
    const seleccionados = ref<number[]>([])

    const props = defineProps<{ids:any}>()
    function alternar(id:number){
        if( seleccionados.value.includes(id)){
            seleccionados.value = seleccionados.value.filter(seleccion=>seleccion!==id)
        }else{seleccionados.value.push(id)

        }
        console.log('cambio')
    }
    function selecc(id:number){
        return seleccionados.value.includes(id)
    }
    function limpiar(){
        return seleccionados.value=[]
    }
    function seleccionarTodo(){
        console.log('aaa'+props.ids)

        return seleccionados.value = [...props.ids]
        //supongo que mandar el arreglo id completo y aquie recibirlo y agregarlo
    }


</script>
<template>
    <slot
    :alternar="alternar"
    :selecc="selecc"
    :limpiar="limpiar"
    :seTodas="seleccionarTodo">
    </slot>
</template>
