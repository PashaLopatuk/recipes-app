import {RecipeService} from "@/api/services";

export const limit = 10

export class RecipesManager {
  static getRecipes(params?: {
    tag?: string,
    page?: number
  }) {
    const skip = params?.page ? (limit * (params?.page-1)) : (0)
    if (params?.tag) {
      return (
        RecipeService.getRecipesByTag({
          tag: params.tag,
          skip: skip,
          limit: limit
        })
      )
    }
    return (
      RecipeService.getRecipes({
        skip: skip,
        limit: limit
      })
    )
  }

  static getRecipe(params: {
    recipeId: string
  }) {
    return RecipeService.getRecipeById({
      id: params.recipeId
    })
  }
}