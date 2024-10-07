import isEqual from 'lodash/isEqual'

/**
 * @classdesc this class compare value objects and returns boolean value
 * compare if this 'VO' exists ( !null | !undefined )
 * 
 * compare if this 'VO' name class is different of this class name
 * 
 * compare this 'VO' with this class
 */
export abstract class ValueObject {
  public equals (vo: this): boolean {
    if (vo === null || vo === undefined) {
      return false
    }

    if (vo.constructor.name !== this.constructor.name) {
      return false
    }
    return isEqual(vo, this)
  }
}