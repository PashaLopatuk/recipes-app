import {Suspense} from 'react'

import type {FC} from 'react'
import {limit, RecipesManager} from "@/features/recipes/api/manager";
import {RecipeQueryParams} from "@/api/entities/params";
import RecipeList from "@/features/recipes/components/recipe-list";
import RecipesSkeleton from "@/features/recipes/components/recipes-skeleton";
import Pagination from "@/components/pagination";


type PropsType = {
  params: unknown,
  searchParams: {
    tag?: string,
    page?: string,
  }
}

const BulkRecipesPage: FC<PropsType> = async({searchParams}) => {
  const recipes = await RecipesManager.getRecipes({
    page: Number(searchParams.page),
    tag: searchParams.tag,
  })
  const key = JSON.stringify(searchParams)
  console.log('recipes.data: ', recipes.data)

  return (
    <Suspense key={key} fallback={<RecipesSkeleton />}>
      <RecipeList
        recipes={recipes.data.recipes}
      />
      <div className={'py-5'}>
        <Pagination pageCount={recipes.data.total / limit + 1} />
      </div>
    </Suspense>
  )
}

export default BulkRecipesPage