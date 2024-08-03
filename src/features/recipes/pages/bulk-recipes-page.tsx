import {} from 'react'

import type {FC} from 'react'
import RecipeFilters from "@/features/recipes/components/recipe-filters";
import {RecipesManager} from "@/features/recipes/api/manager";
import {RecipeQueryParams} from "@/api/entities/params";
import RecipeList from "@/features/recipes/components/recipe-list";


type PropsType = {
  params: unknown,
  searchParams: RecipeQueryParams
}

const BulkRecipesPage: FC<PropsType> = async({searchParams}) => {
  const recipes = await RecipesManager.getRecipes(searchParams)

  return (
    <>
      <RecipeList
        recipes={recipes.data.recipes}
      />
    </>
  )
}

export default BulkRecipesPage