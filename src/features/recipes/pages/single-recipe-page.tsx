import {} from 'react'

import type {FC} from 'react'
import {RecipesManager} from "@/features/recipes/api/manager";
import Image from "next/image";


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
      <div className={'flex flex-col md:flex-row'}>
        <div className={'max-w-full md:max-w-[40%] aspect-video overflow-hidden md:rounded-r-xl'}>
          <Image
            src={recipe.data.image}
            alt={recipe.data.name}
            width={1000}
            height={800}
          />
        </div>
        <div className={'p-5 flex flex-col gap-10'}>

          <h2 className={'text-3xl md:text-6xl text-ellipsis font-bold'}>{recipe.data.name}</h2>
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
      </div>
    </>
  )
}

export default SingleRecipePage