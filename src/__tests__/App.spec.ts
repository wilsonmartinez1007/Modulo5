import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('suma', () => {
    const a = 1000
    const b = 4
    const resultados = a*b
    expect(resultados).toBe(4000)
  })
})
