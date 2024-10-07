export type CategoryConstructorProps = {
  category_id?: string
  name: string
  description?: string | null
  is_active?: boolean
  created_at?: Date
}
export type CategoryCreateCommand = {
  name: string
  description?: string | null
  is_active?: boolean
}
export class Category {
  public category_id: string
  public name: string
  public description: string | null
  public is_active: boolean
  public created_at: Date

  constructor (props: CategoryConstructorProps) {
    const { category_id, name, description, is_active, created_at } = props
    this.category_id = category_id
    this.name = name
    this.description = description ?? null
    this.is_active = is_active ?? true
    this.created_at = created_at ?? new Date()
  }

  static create (props: CategoryCreateCommand): Category {
    return new Category(props)
  }

  public changeName (name: string): void {
    this.name = name
  }

  public changeDescription (description: string): void {
    this.description = description
  }

  public activate (): void {
    this.is_active = true
  }

  public deactivate (): void {
    this.is_active = false
  }

  public toJSON (): Object {
    return {
      category_id: this.category_id,
      name: this.name,
      description: this.description,
      is_active: this.is_active,
      created_at: this.created_at
    }
  }
}