<script setup lang="ts">
    import type { diseñoCitas } from '@/types/type';
    import { useTema } from '@/composable/useTema';
    const {esClaro} = useTema()
    defineProps<{
        itemsCitas:diseñoCitas[],
        pagina:number,
        totalPagina:number
        }>()
    defineEmits(['update:prioridad','anterior','siguiente'])

</script>
<template>
    <div v-if="itemsCitas.length===0">
                No hay citas
        </div>
    <section v-else :class="esClaro? 'cards':'cardsOsucro'">
        <p>escla{{ esClaro }}</p>
        <ul v-for="cita in itemsCitas" :key="cita.id">

            <strong>Nombre: {{cita.nombre  }} </strong><br>
            <strong>Consulta: {{ cita.consulta }}</strong><br>
            <strong>Estado: {{ cita.estado }}</strong><br>
            <strong>Fecha: {{ cita.fecha }}</strong>
              
        </ul>
        <div class="botnes">
            <button
            @click="$emit('anterior')" :disabled="pagina<=1">
            Anterior
        </button>
        
        {{pagina}} de {{ totalPagina }}
        
        <button
            @click="$emit('siguiente')" :disabled="pagina>=totalPagina">
            Siguiente
        </button>
        </div>
        
    </section>


</template>
<style scopet>
    .cardsOsucro{
        background-color: rgb(115, 114, 119);
        width: 400px;
        border-radius: 10px;
        border-left: .4rem solid rgb(253, 248, 248); 
        font-family: sans-serif;
        padding: 2rem;
        margin-left: 200px;
        margin-top: 3rem;
    }
    .cards{
        background-color: rgb(116, 200, 201);
        width: 400px;
        border-radius: 10px;
        border-left: .4rem solid rgb(182, 172, 172); 
        font-family: sans-serif;
        padding: 2rem;
        margin-left: 200px;
        margin-top: 3rem;
    }

    .cards li{
        padding: 1rem;
    }
    .cards input{
        border-radius: 5px;
        padding: .3rem;
        width: 190px;
        border:none;
    }
    .botnes{
        margin-top: 20px;
        margin-left: 100px;
        padding: 2rem;
    }
    .botnes button{
        padding: .6rem;
        border: none;
        color: azure;
        background-color: rgb(67, 66, 63);
        border-radius: 10px;
        
    }
    .botnes button:active{
        background-color: rgb(197, 184, 184);
    }
    .botnes button:disabled{
        background-color: transparent;
        color:  transparent;
    }
</style>