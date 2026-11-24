import {describe, it, expect, expectTypeOf} from 'vitest'
import {mount} from '@vue/test-utils'
import ListaCitas from '@/component/ListaCitas.vue'
import type { diseñoCitas } from '@/types/type'

const citasMock: diseñoCitas[] =[
     { id: 1, nombre: 'Ana Gomez', consulta: 'Odontologia', estado: 'Pendiente', fecha: '2026-11-20' },
     { id: 2, nombre: 'Carlos Ruiz', consulta: 'General', estado: 'Confirmada', fecha: '2026-11-21' }
]

describe('ListaCitas.vue',()=>{
    it('renderiza las citas y el indicador de paginacion correctamente', ()=>{
        const wrapper = mount(ListaCitas, {
            props: {
                itemsCitas: citasMock,
                pagina:1,
                totalPagina:3
            }
        })

        const items = wrapper.findAll('ul')
        expect(items).toHaveLength(2)
        expect(wrapper.text()).toContain('Ana Gomez')
        expect(wrapper.text()).toContain('Odontologia')
        expect(wrapper.text()).toContain('Carlos Ruiz')
        expect(wrapper.text()).toContain('1 de 3')

    })
    it('muestra "no hya citas" cuando filtradas esta vacio',()=>{
    const wrapper = mount(ListaCitas,{
            props:{
                itemsCitas:[],
                pagina:1,
                totalPagina:1
            }
        })
    expect(wrapper.text()).toContain('No hay citas')
    expect(wrapper.find('section.cards').exists()).toBe(false)
    })
    it('deshanilita "Anterior" en la pagina 1 y emite "siguiente" al hacer clic',async ()=>{
      const wrapper = mount(ListaCitas,{
        props:{
            itemsCitas:citasMock,
            pagina:1,
            totalPagina:2
        }
      }) 
      const [btnAnterior, btnSiguiente]= wrapper.findAll('button')
      expect(btnAnterior?.attributes('disabled')).toBeDefined()
      expect(btnSiguiente?.attributes('disabled')).toBeUndefined()
      
      await btnSiguiente?.trigger('click')
      expect(wrapper.emitted('siguiente')).toHaveLength(1)
    } )
    it('deshabilita "siguiente" en la ultima pagina yemite "anterior" al hacer clic',async()=>{
        const wrapper = mount(ListaCitas, {
            props:{
                itemsCitas: citasMock,
                pagina:2,
                totalPagina:2
            }
        })
        const [btnAnterior, btnSiguiente] = wrapper.findAll('button')
        expect(btnSiguiente?.attributes('disabled')).toBeDefined()
        expect(btnAnterior?.attributes('disabled')).toBeUndefined()
        await btnAnterior?.trigger('click')
        expect(wrapper.emitted('anterior')).toHaveLength(1)
    
    }
    )
})