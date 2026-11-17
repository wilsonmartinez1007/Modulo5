<script setup lang="ts">
    import type { diseñoCitas } from '@/types/type';
    defineProps<{
        itemsCitas:diseñoCitas[],
        filtradas:diseñoCitas[],
        pagina:number,
        totalPagina:number
        }>()
    defineEmits(['update:prioridad','anterior','siguiente'])
    const busqueda = defineModel('prioridad')
</script>
<template>
    <section class="cards">
        <h2>Buscador de citas</h2>
        <input type="text" v-model="busqueda" placeholder="Dijita el nombre del cliente">

        <div v-if="filtradas.length===0">
            No hya citas
        </div>
        <li v-for="cita in itemsCitas">
            <strong>Nombre: {{cita.nombre  }} </strong><br>
            <strong>Consulta: {{ cita.consulta }}</strong><br>
            <strong>Estado: {{ cita.estado }}</strong><br>
            <strong>Fecha: {{ cita.fecha }}</strong>
        </li>
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
    .cards{
        background-color: rgb(209, 91, 91);
        width: 400px;
        position: fixed;
        border-radius: 10px;
        border-left: .4rem solid rgb(11, 11, 11); 
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
        background-color: rgb(209, 91, 91);
        color: rgb(209, 91, 91);
    }
</style>