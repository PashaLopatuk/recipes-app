import {} from 'react'

import type {FC} from 'react'
import Loader from "@/components/spinner";


type PropsType = {}

const SingleRecipeLoading: FC<PropsType> = ({}) => {

  return (
    <>
      <Loader/>
    </>
  )
}

export default SingleRecipeLoading