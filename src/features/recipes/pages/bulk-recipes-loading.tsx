import {} from 'react'

import type {FC} from 'react'

import RecipesSkeleton from "@/features/recipes/components/recipes-skeleton";


type PropsType = {
}

const BulkRecipesLoading: FC<PropsType> = ({}) => {

  return (
    <>
      <RecipesSkeleton />
    </>
  )
}

export default BulkRecipesLoading