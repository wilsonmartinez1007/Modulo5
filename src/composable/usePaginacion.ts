import { computed, ref, toValue, watch } from "vue"

export function usePaginacion(lista:any,tamaño:number){//lista(0,1,2,3,4,5)
    const pagina = ref(1)
    const itemsPagina = computed(()=>{//return lista(0,1,2)
        const inicio = (pagina.value - 1 )*tamaño
        return toValue(lista).slice(inicio,inicio+tamaño)
    })

    const totalPaginas = computed(()=>{//return 2
        return Math.ceil(toValue(lista).length/tamaño)
    })

    function siguiente(){
        if(pagina.value < totalPaginas.value) pagina.value++
    }
    function anterior(){
        if(pagina.value > 1) pagina.value --
    }   
    watch(
        ()=> toValue(lista).length,
        ()=> {
            pagina.value = Math.min(//return 1
                pagina.value,
                Math.max(1,totalPaginas.value)
            )
        }

    )
    return{
        pagina,
        totalPaginas,
        itemsPagina,
        siguiente,
        anterior
    }
}