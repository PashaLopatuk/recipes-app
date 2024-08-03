import type {FC, HTMLAttributes, PropsWithChildren} from 'react'
import {cn} from "@/lib/utils";


type PropsType = {} & HTMLAttributes<HTMLUListElement>

const ItemsGroup: FC<PropsWithChildren<PropsType>> = ({className, ...props}) => {
  return (
    <ul
      {...props}
      className={cn(
        className,
        ` flex flex-col gap-5 max-w-[1200px] mx-auto
      md:grid md:grid-cols-2
      lg:grid-cols-3
    `
      )}
    />
  )
}

export default ItemsGroup