
import { ref,toValue, type MaybeRefOrGetter} from 'vue';
export function useSeleccionMultiple(ids:MaybeRefOrGetter<number[]>=[]){
    
    const seleccionados = ref<number[]>([])
    function alternar(id:number){
        if(seleccionados.value.includes(id)){
            seleccionados.value = seleccionados.value.filter(idS=>idS!==id)
        }else{
            seleccionados.value.push(id)
        }
    }
    function isSelecc(id:number){
        return seleccionados.value.includes(id)
    }
    function limpiar(){
        return seleccionados.value = []
    }
    function selecTodas(){
        seleccionados.value = [...toValue(ids)]
    }

    return{
        seleccionados,
        alternar,
        isSelecc,
        limpiar,
        selecTodas
    }
}