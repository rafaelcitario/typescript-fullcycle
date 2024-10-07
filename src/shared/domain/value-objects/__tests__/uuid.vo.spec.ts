import { Uuid } from "../uuid.vo"

const validateSpy = jest.spyOn(Uuid.prototype as any, "validate")

describe('UUID Unit Tests', () => {
  describe('Test if uuid is valid', () => {
    it('should be a valid uuid', () => {
      const uuid = new Uuid()
      expect(uuid.id).toBeTruthy()
      expect(uuid.id).toBeDefined()
      expect(validateSpy).toHaveBeenCalled()
    })

    it('should be a valid uuid passed up contructor', () => {
      const uuid = new Uuid('611cbf37-2226-4ae8-931b-625f62922b57')
      expect(uuid.id).toEqual('611cbf37-2226-4ae8-931b-625f62922b57')
      expect(uuid.id).toBeTruthy()
      expect(validateSpy).toHaveBeenCalled()
    })
  })

  describe('Test throw errors', () => {
    it('should throw a error message', () => {
      expect(() => {
        new Uuid('invalid-uuid')
      }).toThrow('ID must be a valid UUID')
      expect(validateSpy).toHaveBeenCalled()
    })
  })
})