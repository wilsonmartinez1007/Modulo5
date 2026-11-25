import type { TipoTarifa } from "@/types/tipoTarifa"
import type { diseñoCompras } from "@/types/type"
import { computed , type Ref} from "vue"

export function strategiasTarifa(
    tipoSelecc:Ref<TipoTarifa>, productoSelecc:Ref<diseñoCompras[]>
){
    const estrategias :Record<TipoTarifa, (s:diseñoCompras)=>number>={
       tienda:(s)=>0,
       domicilio:(s)=>{return 15000},
       internacional:(s)=>{return 59000}
    }
    const strategyActual = computed(()=>{
        return estrategias[tipoSelecc.value]
    }) 
    const tarifaEnvio = computed(()=>{
        const calcularporProducto = strategyActual.value
        return productoSelecc.value.reduce((acumulado:any,producto:any)=>{
            return acumulado + calcularporProducto(producto)
        },0)
    })
    const subTotalProduc = computed(()=>{
        return productoSelecc.value.reduce((acumulado:any,producto:any)=>{
            return acumulado+producto.precio
        },0)
    })
    const total = computed(()=>{
        return subTotalProduc.value + tarifaEnvio.value
    })
    return total
}