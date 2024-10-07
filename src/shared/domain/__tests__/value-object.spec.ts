import { ValueObject } from "../value-object"

class StringValueObject extends ValueObject {
  constructor (public readonly value: string) {
    super()
  }
}

class ComplexValueObject extends ValueObject {
  constructor (public readonly value: string, public readonly prop: number) {
    super()
  }
}
describe('ValueObject Unit Tests', () => {
  describe('test if the VO is Valid', () => {
    it('should be equals', () => {
      const valueObject1 = new StringValueObject('test')
      const valueObject2 = new StringValueObject('test')
      expect(valueObject1.equals(valueObject2)).toBeTruthy()
    })

    it('should\'ve equality between complex objects', () => {
      const complexObject1 = new ComplexValueObject('test', 1)
      const complexObject2 = new ComplexValueObject('test', 1)
      expect(complexObject2.equals(complexObject1)).toBeTruthy()
    })

    it('should not be equals', () => {
      const complexObject1 = new ComplexValueObject('test', 1)
      const complexObject2 = new ComplexValueObject('test2', 1)
      expect(complexObject1.equals(complexObject2)).toBeFalsy()
    })
  })
})