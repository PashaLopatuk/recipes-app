import {} from 'react'

import type {FC} from 'react'
import {ToggleGroupItem} from "@/components/ui/toggle-group";


type PropsType = {
  value: string,
  label: string
}

const FilterItem: FC<PropsType> = ({value, label}) => {

  return (
    <>
      <ToggleGroupItem
        variant={'outline'}
        value={value}
        className={'line-clamp-1 text-nowrap whitespace-nowrap'}
      >
        {label}
      </ToggleGroupItem>
    </>
  )
}

export default FilterItem