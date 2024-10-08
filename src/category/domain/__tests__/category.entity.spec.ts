import { Uuid } from "../../../shared/domain/value-objects/uuid.vo"
import { Category } from "../category.entity"

describe("Category Entity Unit Tests", () => {
  // suite test 1
  describe("Create a new category using constructor", () => {
    it("should create a category with default values", () => {
      // Arrange
      const arrange: Object = {}

      // Act
      let category = new Category({
        name: "Movie",
      })

      // Assert
      expect(category.category_id).toBeDefined()
      expect(category.name).toBe("Movie")
      expect(category.description).toBeNull()
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
    })

    it("should create another category with different values", () => {
      const created_at = new Date()
      const category = new Category({
        category_id: new Uuid(),
        name: "Drama Movie",
        description: "Drama Movie Description",
        is_active: false,
        created_at,
      })

      expect(category.category_id).toBeDefined()
      expect(category.name).toBe("Drama Movie")
      expect(category.description).toBe("Drama Movie Description")
      expect(category.is_active).toBeFalsy()
      expect(category.created_at).toEqual(created_at)
    })
  })
  // suite test 2
  describe("Create a new category with create command", () => {
    it("should create a new category with name only", () => {
      const category = Category.create({
        name: "Terror Movie",
      })

      expect(category.category_id).toBeDefined()
      expect(category.name).toStrictEqual("Terror Movie")
      expect(category.description).toBeNull()
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
    })
  })
  // suite test 3
  describe("Create a new category and change values", () => {
    const category = Category.create({
      name: "Comedy Movie",
      description: "This is a funny movie",
    })

    it("should change name of the category", () => {
      category.changeName("Comedy Cats Movie")
      expect(category.name).toBe("Comedy Cats Movie")
      expect(category.description).toStrictEqual("This is a funny movie")
    })

    it("should change description of the category", () => {
      category.changeDescription("The cats is so funny")
      expect(category.name).toBe("Comedy Cats Movie")
      expect(category.description).toStrictEqual("The cats is so funny")
    })
  })

  // suite test 4
  describe("Create a new category and return a JSON", () => {
    it("should return a JSON from category values", () => {
      const created_at = new Date()
      const category = new Category({
        name: "Dogs vs Cats",
        description: 'This movies is "Animalic"',
        created_at,
      })
      const categoryJsonValue = category.toJSON()
      expect(categoryJsonValue).toMatchObject({
        name: "Dogs vs Cats",
        description: 'This movies is "Animalic"',
        is_active: true,
        created_at,
      })
      expect(categoryJsonValue)
    })
  })

  describe("category_id field", () => {
    const arrange = [
      { category_id: null },
      { category_id: undefined },
      { category_id: new Uuid() },
    ]

    it.each(arrange)("id %j", ({ category_id }) => {
      const category = new Category({
        name: 'category_id field tests',
        category_id: category_id as any
      })

      expect(category.category_id).toBeInstanceOf(Uuid)
    })
  })
})
