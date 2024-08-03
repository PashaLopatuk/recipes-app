import {HTMLAttributes, SVGAttributes} from 'react'

import type {FC} from 'react'
import {cn} from "@/lib/utils";


type PropsType = {} & SVGAttributes<SVGElement>

const ArrowIcon: FC<PropsType> = (props) => {

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
        className={cn("size-6", props.className)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
      </svg>
    </>
  )
}

export default ArrowIcon