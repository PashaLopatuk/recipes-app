import {} from 'react'

import type {FC} from 'react'

const recipeTypes = {
  'Easy': 'green',
  'Medium': 'yellow',
}

function getColor(difficulty: string) {
  try {
    return (recipeTypes as any)[difficulty]
  } catch {
    return undefined
  }
}

type PropsType = {
  recipeType: string,
}

const RecipeTypeLabel: FC<PropsType> = ({recipeType}) => {

  return (
    <span
      style={{
        color: getColor(recipeType) ?? undefined
      }}
    >
      {recipeType}
    </span>
  )
}

export default RecipeTypeLabel