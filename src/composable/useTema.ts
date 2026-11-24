import { ref, provide, inject, type Ref, type InjectionKey } from "vue";

interface ContextoTema{
    cambiarTema:()=> void,
    esClaro: Ref<boolean>
}

const TemaKey: InjectionKey<ContextoTema> = Symbol('tema')

export function provideTema(){
    const esClaro = ref(true)

    function cambiarTema(){
        esClaro.value = esClaro.value? false: true
        console.log("tema: "+ esClaro.value)
    }

    const contexto: ContextoTema= {
        cambiarTema,
        esClaro
        
    } 
    provide(TemaKey, contexto)
    return contexto
}

export function useTema(): ContextoTema{
    const contexto = inject(TemaKey)

    if(!contexto){
        throw new Error('useTema() debe usarse dentro de un componente que ejecute provideTema()')
    }
    return contexto
}