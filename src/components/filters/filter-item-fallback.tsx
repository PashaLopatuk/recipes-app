import {} from 'react'

import type {FC} from 'react'
import {ToggleGroupItem} from "@/components/ui/toggle-group";


type PropsType = {}

const FilterItemFallback: FC<PropsType> = ({}) => {

  return (
    <>
      <ToggleGroupItem
        variant={'outline'}
        value={''}
        className={'line-clamp-1 text-nowrap w-[50px] bg-muted animate-pulse'}
      >

      </ToggleGroupItem>
    </>
  )
}

export default FilterItemFallback