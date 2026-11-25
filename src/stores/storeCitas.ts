import { defineStore } from "pinia";
import type { diseñoCitas, diseñoCompras } from "@/types/type";
import { computed, ref } from "vue";
import { useDebounce } from "@/composable/useDebounce";
import { usePaginacion } from "@/composable/usePaginacion";
export const storeCitas = defineStore('citas',()=>{
    const creoCitas = ref<diseñoCitas[]>([
        {id:1,nombre:'wilson',consulta:'Normal',estado:'Pendiente',fecha:'17/03/2025'},
         {id:2,nombre:'Ana',consulta:'Normal',estado:'Aprobada',fecha:'07/01/2026'},
          {id:3,nombre:'Juan',consulta:'Ecografia',estado:'Cancelada',fecha:'17/05/2025'},
           {id:4,nombre:'Anyi',consulta:'Normal',estado:'Aprobada',fecha:'01/07/2025'},
            {id:5,nombre:'Andres',consulta:'Normal',estado:'Aprobada',fecha:'23/02/2026'},
             {id:6,nombre:'Maria',consulta:'Radiografia',estado:'Pendiente',fecha:'27/03/2026'}
    ])
    const creoCompras = ref<diseñoCompras[]>([
        {id:1,nombre:'reloj',descripcion:'pues reloj',precio:12222},
         {id:2,nombre:'celular',descripcion:'Normal',precio:34343},
          {id:3,nombre:'laptop',descripcion:'Ecografia',precio:434222},
           {id:4,nombre:'pantalla',descripcion:'Normal',precio:76000},
            {id:5,nombre:'Audifono',descripcion:'Normal',precio:657000},
             {id:6,nombre:'cascos',descripcion:'Radiografia',precio:45000}
    ])
    
    
    const busqueda = ref('')
    const busquedaDebounced = useDebounce(busqueda,300)

    const filtradas = computed(()=>{
        const texto = busquedaDebounced.value.trim().toLowerCase()
        return creoCitas.value.filter(cita=>cita.nombre.toLocaleLowerCase().includes(texto)
        )
    })
    const paginacion = usePaginacion(filtradas,2)
    return {
        creoCitas,
        creoCompras,
        busqueda,
        filtradas,
        ...paginacion,

    }
   
})