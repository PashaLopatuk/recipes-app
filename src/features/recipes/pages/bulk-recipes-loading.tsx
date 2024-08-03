import {} from 'react'

import type {FC} from 'react'

import ItemsGroup from "@/components/items-group";
import RecipeCardFallback from "@/components/recipe-card/fallback";


type PropsType = {
}

const BulkRecipesLoading: FC<PropsType> = ({}) => {

  return (
    <>
      <ItemsGroup
        className={'p-2 space-y-4 gap-5'}
      >
        {[...new Array(20).keys()].map(idx => (
          <li key={idx} className={'!m-0'}>
            <RecipeCardFallback />
          </li>
        ))}
      </ItemsGroup>
    </>
  )
}

export default BulkRecipesLoading