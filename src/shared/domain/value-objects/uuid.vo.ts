import { ValueObject } from "../value-object"

/**
 * Quebra parcial da arquitetura (Clean arc - uncle bob)
 * 
 * Estamos instalando libs para nos ajudar a realizar a geração e validação de uuids
 * Isto vai contra nosso conceito de arquitetura purista, que visa utilizar o minimo de libs externas possivel.
 * Entretanto, Uncle bob fala sobre a quebra parcial da arquitetura e explica que podemos realizar esta operação
 * devida a possibilidade se, e seomente se, no futuro precisarmos utilizar outra lib ou implementar nosso proprio methodo
 * seja feito de forma facil, sem que tenhamos que alterar outras áreas do código.
 * Neste caso, se quisermos implementar ou instalar outra lib, podemos mudar somente a lib e os metodos de geração e validação
 * e isso não afetaria em nada nosso código.... pois, continuar a funcionar corretamente.
 */
import { v4 as uuidV4, validate as uuidValidate } from 'uuid'
export class Uuid extends ValueObject {
  public readonly id: string
  constructor (id?: string) {
    super()
    this.id = id || uuidV4()
    this.validate()
  }

  private validate (): boolean {
    const isValid = uuidValidate(this.id)
    if (!isValid) throw new InvalidUUID()
    return true
  }
}

export class InvalidUUID extends Error {
  constructor (message?: string) {
    super(message || 'ID must be a valid UUID')
    this.name = 'InvalidUuidError'
  }
}