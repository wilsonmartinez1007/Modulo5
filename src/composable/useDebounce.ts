import {ref, toValue ,watch} from "vue";


export function useDebounce(valor:any,ms:number){
    const resultado = ref(toValue(valor))

    watch(()=>toValue(valor),(nuevoValor,_,onCleanup)=>{
        const tempo = setTimeout(()=>{
            resultado.value = nuevoValor
        },ms)

        onCleanup(()=>{
        clearTimeout(tempo)
        })
    })
    return resultado
}