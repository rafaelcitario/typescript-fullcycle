import { Category } from "../category.entity";
describe("Category Entity Unit Tests", () => {
  // suite test 1
  describe("it should test constructor", () => {
    it("should create a category with default values", () => {
      // Arrange
      const arrange: Object = {};

      // Act
      let category = new Category({
        name: "Movie",
      });

      // Assert
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    it("should create another category with different values", () => {
      const created_at = new Date();
      const category = new Category({
        category_id: "1",
        name: "Drama Movie",
        description: "Drama Movie Description",
        is_active: false,
        created_at,
      });

      expect(category.category_id).not.toBeUndefined();
      expect(category.name).toBe("Drama Movie");
      expect(category.description).toBe("Drama Movie Description");
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toEqual(created_at);
    });
  });
});
