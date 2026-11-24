<script setup>
    import { storeCitas } from '@/stores/storeCitas';
    import { storeToRefs } from 'pinia';
    import ListaCitas from './ListaCitas.vue';
    import SeleccionMultiple from './SeleccionMultiple.vue';
    import { useSeleccionMultiple } from '@/composable/useSeleccionMultiple.ts';
    import { computed} from 'vue';
    import FiltroCitas from './FiltroCitas.vue';
    import { useTema} from '@/composable/useTema.ts';
    const {cambiarTema, esClaro} = useTema()
    const citasStore = storeCitas()
    const {busqueda,creoCitas} = storeToRefs(citasStore)
    
    const ids = computed(()=>{
        return creoCitas.value.map(c=>c.id)
    })
    
    
    const {seleccionados,alternar,isSelecc,limpiar,selecTodas} = useSeleccionMultiple(ids)
    </script>
<template>
    <header :class="esClaro? 'comprobarClaro':'comprobarOscuro'">
        <button @click="cambiarTema" class="botonTema" >Cambiar tema</button>
    </header>
    
    <!--CHECKBOX
    <SeleccionMultiple v-slot="{seleccionados,alternar,selecc}">
        <h2>Total marcados {{ seleccionados.length }}</h2>
        <label v-for="x in citasStore.itemsPagina" :key="x.id">
            <input type="checkbox" :checked="selecc(x.id)" @change="alternar(x.id)">
        {{ x.nombre }}
        
        </label>
    </SeleccionMultiple>-->
    <div class="columnas" :class="esClaro? 'panelClaro': 'panelOscuro'">
        <div>
            <div class="filtroCit">
                <FiltroCitas
                v-model:prioridad="busqueda"/>
            </div>
            
            
            
            <ListaCitas
            
            :items-citas="citasStore.itemsPagina"
            :pagina="citasStore.pagina"
            :total-pagina="citasStore.totalPaginas"
            @anterior="citasStore.anterior()"
            @siguiente="citasStore.siguiente()"
            /></div>
        <div>
            <!--<SeleccionMultiple :ids="ids.value" v-slot="{alternar,limpiar,selecc,seTodas}">
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
            </SeleccionMultiple>-->
             <button @click="selecTodas()" :disabled="seleccionados.length===ids.length" >seleccionar todas</button>
                <button @click="limpiar()" :disabled="seleccionados.length===0">limpiar selecciones</button>
            
            <div class="columnas">
                <div  v-for="x in creoCitas" :key="x.id" @click="alternar(x.id)" >
                   <div :class="[
                    esClaro? 'tarjetas':'tarjetasOscuro' ,
                    isSelecc(x.id)?'activar':'']"><strong>Nombre: {{x.nombre  }} </strong><br>
                    <strong>Consulta: {{ x.consulta }}</strong><br>
                    <strong>Estado: {{ x.estado }}</strong><br>
                    <strong>Fecha: {{ x.fecha }}</strong><br></div>
                    
                
                
                </div>
                
              </div>
                
               </div>
        
        
</div>
    
</template>
<style scoped>
    .panelOscuro{
        background-color: rgb(156, 153, 153);
        height: 100vh;
        width: 100%;
    }
    .panelClaro{
        background-color: rgb(251, 244, 244);
        height: 100vh;
        width: 100%;
    }
    
    
    .comprobarClaro{
        background-color: tomato;
        height: 158px;
        width: 1508px;}
    .comprobarOscuro{
        background-color: rgb(73, 71, 74);
        height: 158px;
        width: 1508px;}
    .botonTema{
        margin-left: 1335px;
        margin-top: 20px;
        padding: .3rem;
        border-radius: 5px;
        border-color: aqua;

    }
    .botonTema:hover{
        background-color: aqua;
    }
    
    .filtroCit{
        margin-left: 200px;
        color: rgb(59, 55, 54);
        font-size: 1.5rem;
    }
    
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
        border-left: .3rem solid rgb(197, 193, 188);
        font-family:sans-serif;
        padding: .5rem;
        margin-right: 70px;   
        margin-top: 25px; 
        border-radius: 10px;
        background-color: rgb(175, 227, 227);
        width:200px;
    }
    
    .tarjetasOscuro{
        display: grid;
        grid-template-columns: 2,1fr;
        border-left: .3rem solid rgb(255, 252, 252);
        font-family:sans-serif;
        padding: .5rem;
        margin-right: 70px;   
        margin-top: 25px; 
        border-radius: 10px;
        background-color: rgb(98, 97, 101);
        width:200px;
    }
    .activar{
        background-color: aquamarine;
    }
    
    
    </style>