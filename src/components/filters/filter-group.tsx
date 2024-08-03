import {
  ToggleGroup,
} from "@/components/ui/toggle-group"
import {FC, PropsWithChildren, useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

type PropsType = {
  value: string | undefined | null,
  onValueChange: ((value: string) => void)
}

const FilterGroup: FC<PropsWithChildren<PropsType>> = ({value, onValueChange, children}) => {
  const [expanded, setExpanded] = useState(false)
  const onClick = () => {
    setExpanded(data => !data)
  }
  return (
    <div className={'flex items-center py-2 justify-center transition duration-200'}>
      <ToggleGroup
        type="single"
        value={value ?? undefined}
        onValueChange={onValueChange}
        className={'overflow-x-auto max-w-[1100px]'}
      >
        <div className={cn(
          'flex max-w-none space-x-2',
          expanded && 'flex-wrap'
        )}>
          {children}
        </div>
      </ToggleGroup>
      <Button
        onClick={onClick}
        className={'self-start'}
      >expand</Button>
    </div>
  )
}


export default FilterGroup