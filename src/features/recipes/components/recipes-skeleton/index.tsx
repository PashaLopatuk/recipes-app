import {} from 'react'

import type {FC} from 'react'
import RecipeCardFallback from "@/components/recipe-card/fallback";
import ItemsGroup from "@/components/items-group";


type PropsType = {}

const RecipesSkeleton: FC<PropsType> = ({}) => {

  return (
    <>
      <ItemsGroup
        className={'p-2 space-y-4 gap-5'}
      >
        {[...new Array(20)].map((_, idx) => (
          <li key={idx} className={'!m-0'}>
            <RecipeCardFallback />
          </li>
        ))}
      </ItemsGroup>
    </>
  )
}

export default RecipesSkeleton