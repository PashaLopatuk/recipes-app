import {} from 'react'

import type {FC} from 'react'
import Link from "next/link";


type PropsType = {}

const Header: FC<PropsType> = ({}) => {

  return (
    <header className={'px-2 py-4 sticky'}>
      <Link
        className={''}
        href={'/recipes'}
      >
        <h1 className={'font-semibold text-3xl text-center'}>
          Recipes
        </h1>
      </Link>
    </header>
  )
}

export default Header