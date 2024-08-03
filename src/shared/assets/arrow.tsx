import {HTMLAttributes, SVGAttributes} from 'react'

import type {FC} from 'react'


type PropsType = {} & SVGAttributes<SVGElement>

const ArrowIcon: FC<PropsType> = (props) => {

  return (
    <>
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
      </svg>
    </>
  )
}

export default ArrowIcon