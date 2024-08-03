import {} from 'react'

import type {FC, PropsWithChildren} from 'react'
import RecipeFilters from "@/features/recipes/components/recipe-filters";


type PropsType = {}

const BulkRecipesLayout: FC<PropsWithChildren<PropsType>> = ({children}) => {

  return (
    <>
      <RecipeFilters/>
      {children}
    </>
  )
}

export default BulkRecipesLayout