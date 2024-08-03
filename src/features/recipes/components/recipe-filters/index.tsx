'use client';

import type {FC} from 'react'
import FilterGroup from "@/components/filters/filter-group";
import {useRecipeTags} from "@/features/recipes/hooks/use-recipe-tags";
import FilterItem from "@/components/filters/filter-item";
import {useQueryState} from "nuqs";
import {useRouter} from "next/navigation";
import FilterItemFallback from "@/components/filters/filter-item-fallback";

type PropsType = {}

const RecipeFilters: FC<PropsType> = ({}) => {
  const {refresh} = useRouter()
  const {data: tags, isLoading} = useRecipeTags()

  const [selectedTag, setSelectedTag] = useQueryState('tag', {
    history: 'replace',
    shallow: false,
  })

  const onValueChange = (value: string | undefined) => {
    setSelectedTag(value ?? null).then()
  }

  return (
    <>
      <FilterGroup value={selectedTag} onValueChange={onValueChange}>
        {
          (tags) ? tags.map(tag => (
            <FilterItem
              value={tag}
              label={tag}
              key={tag}
            />
          )) : (
            [...new Array(20)].map((_, idx) => (
              <FilterItemFallback key={idx}/>
            ))
          )
        }
      </FilterGroup>
    </>
  )
}

export default RecipeFilters