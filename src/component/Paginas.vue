<script setup>
    import { storeCitas } from '@/stores/storeCitas';
    import { storeToRefs } from 'pinia';
    import ListaCitas from './ListaCitas.vue';
    import SeleccionMultiple from './SeleccionMultiple.vue';
    import { computed ,ref} from 'vue';
    import FiltroCitas from './FiltroCitas.vue';

    const citasStore = storeCitas()
    const {busqueda,filtradas,creoCitas} = storeToRefs(citasStore)
    
    const ids = computed(()=>{
        return creoCitas.value.map(c=>c.id)
    })
    
    
    const botones = ref(true)
    
    </script>
<template>
    
    <!--CHECKBOX
    <SeleccionMultiple v-slot="{seleccionados,alternar,selecc}">
        <h2>Total marcados {{ seleccionados.length }}</h2>
        <label v-for="x in citasStore.itemsPagina" :key="x.id">
            <input type="checkbox" :checked="selecc(x.id)" @change="alternar(x.id)">
        {{ x.nombre }}
        
        </label>
    </SeleccionMultiple>-->
    <div class="columnas">
        <div>
            <FiltroCitas
                v-model:prioridad="busqueda"/>
            <ListaCitas
            
            :items-citas="citasStore.itemsPagina"
            :filtradas="filtradas"
            :pagina="citasStore.pagina"
            :total-pagina="citasStore.totalPaginas"
            @anterior="citasStore.anterior()"
            @siguiente="citasStore.siguiente()"
            /></div>
        <div>
            <SeleccionMultiple :ids="ids" v-slot="{alternar,limpiar,selecc,seTodas}">
              <div class="columnas">
                <div  v-for="x in creoCitas" :key="x.id" @click="alternar(x.id)" :class="{activar:selecc(x.id)}" class="tarjetas">
                   
                    <strong>Nombre: {{x.nombre  }} </strong><br>
                    <strong>Consulta: {{ x.consulta }}</strong><br>
                    <strong>Estado: {{ x.estado }}</strong><br>
                    <strong>Fecha: {{ x.fecha }}</strong><br>
                
                
                </div>
              </div>
                
                <button @click="seTodas(),botones=!botones" :disabled="!botones" >seleccionar todas</button>
                <button @click="limpiar(),botones=!botones" :disabled="botones">limpiar selecciones</button>
            </SeleccionMultiple>
            </div>
        
        
</div>
    
</template>
<style scoped>
    .columnas{
        display: grid;
        grid-template-columns: 2fr auto;
    }
    .columnas button{
        margin-top: 2rem;
        margin-right: .6rem;
        background-color: rgb(218, 218, 215);
        border: 2px solid tomato;
        padding: .3rem;
        font-family: sans-serif;
        border-radius: 6px;
    }
    .columnas button:hover{
        background-color: tomato;
    }
    .columnas button:disabled{
        border: white;
        color:rgb(158, 154, 154);
        
    }
   
    
    .tarjetas{
        display: grid;
        grid-template-columns: 2,1fr;
        border-left: .3rem solid black;
        font-family:sans-serif;
        padding: .5rem;
        margin-right: 70px;   
        margin-top: 55px; 
        border-radius: 10px;
        background-color: rgb(248, 249, 249);
        width:200px;
    }
    .activar{
        background-color: aquamarine;
    }
    
    
    </style>