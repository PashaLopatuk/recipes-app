import {} from 'react'

import type {FC} from 'react'
import {RecipeApiModel} from "@/api/entities/recipe";
import RecipeCard from "@/components/recipe-card";
import ItemsGroup from "@/components/items-group";


type PropsType = {
  recipes: RecipeApiModel[]
}

const RecipeList: FC<PropsType> = ({recipes}) => {
  const recipesSorted = recipes.toSorted((a, b) => a.rating - b.rating)
  return (
    <ItemsGroup
      className={'p-2 space-y-4 gap-5'}
    >
      {
        recipesSorted.map((recipe, idx) => (
          <li key={recipe.id} className={'!m-0'}>
            <RecipeCard
              id={recipe.id}
              title={recipe.name}
              cuisine={recipe.cuisine}
              description={recipe.ingredients.join(',')}
              difficulty={recipe.difficulty}
              imageUrl={recipe.image}
              isMostPopular={idx === 0}
              tags={recipe.tags}
            />
          </li>
        ))
      }
    </ItemsGroup>
  )
}

export default RecipeList