import {} from 'react'

import type {FC} from 'react'
import Link from "next/link";


type PropsType = {}

const Header: FC<PropsType> = ({}) => {

  return (
    <header className={'p-2 sticky'}>
      <Link
        className={''}
        href={'/recipes'}
      >
        <h1 className={'font-semibold text-2xl text-center'}>
          Recipes
        </h1>
      </Link>
    </header>
  )
}

export default Header