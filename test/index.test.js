import scopeTypes from '../src'

const types = [
  'MY_WILD_TYPE',
  'MY_SWELL_TYPE',
  'MY_SLICK_TYPE'
]

describe('scopeTypes', () => {
  it('should be a function', () => {
    expect(typeof scopeTypes).toBe('function')
  })

  it('should return an object', () => {
    expect(typeof scopeTypes()).toBe('object')
  })

  it('should scope with "App" by default', () => {
    const actionTypes = scopeTypes(types)
    const scopedTypeValues = Object.values(actionTypes)
    for (let typeValue of scopedTypeValues) {
      expect(String(typeValue).includes('App')).toEqual(true)
    }
  })

  it('should scope with passed scope', () => {
    const customScope = 'customScope'
    const actionTypes = scopeTypes(types, customScope)
    const scopedTypeValues = Object.values(actionTypes)
    for (let typeValue of scopedTypeValues) {
      expect(String(typeValue).includes(customScope))
    }
  })
})
