import {tag} from "postcss-selector-parser";
import {RecipeService} from "@/api/services";

export class RecipesManager {
  static getRecipes(params?: {
    tag?: string,
    limit?: number,
    skip?: number,
    sortBy?: string,
    order?: 'desc' | 'asc',
  }) {
    if (params?.tag) {
      return (
        RecipeService.getRecipesByTag(params as any)
      )
    }
    return (
      RecipeService.getRecipes(params)
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