import {Suspense} from 'react'

import type {FC, PropsWithChildren} from 'react'
import RecipeFilters from "@/features/recipes/components/recipe-filters";


type PropsType = {}

const BulkRecipesLayout: FC<PropsWithChildren<PropsType>> = ({children}) => {

  return (
    <>
      <Suspense>
        <RecipeFilters/>
      </Suspense>
      {children}
    </>
  )
}

export default BulkRecipesLayout