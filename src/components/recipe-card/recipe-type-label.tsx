import {} from 'react'

import type {FC} from 'react'

const recipeTypes = {
  'Easy': 'green',
  'Medium': 'yellow',
}

type PropsType = {
  recipeType: string,
}

const RecipeTypeLabel: FC<PropsType> = ({recipeType}) => {

  return (
    <span
      style={{
        color: recipeTypes[recipeType] ?? undefined
      }}
    >
      {recipeType}
    </span>
  )
}

export default RecipeTypeLabel