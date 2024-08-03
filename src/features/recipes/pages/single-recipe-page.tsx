import {} from 'react'

import type {FC} from 'react'
import {RecipesManager} from "@/features/recipes/api/manager";


type PropsType = {
  params: {
    recipeId: string
  }
}

const SingleRecipePage: FC<PropsType> = async ({params}) => {
  const recipe = await RecipesManager.getRecipe({recipeId: params.recipeId})

  return (
    <>
      <title>{recipe.data.name}</title>
      <meta
        name="description"
        content={recipe.data.name}
      />
      <div className={'p-5 flex flex-col gap-10'}>
        <h2 className={'text-3xl font-bold'}>{recipe.data.name}</h2>
        <ol className={'list-decimal list-inside marker:text-blue-700'}>
          {
            recipe.data.instructions.map((instruction, idx) => (
              <li
                key={idx}
                className={'marker:text-black'}
              >
                <span className={'bg-clip-text'}>{instruction}</span>
              </li>
            ))
          }
        </ol>
      </div>

    </>
  )
}

export default SingleRecipePage