import {} from 'react'

import type {FC} from 'react'
import {Card} from "@/components/ui/card";


type PropsType = {}

const RecipeCardFallback: FC<PropsType> = ({}) => {

  return (
    <>
      <Card className={'p-2 space-y-2 rounded-xl h-[540px] pt-3'}>
        <div className={'bg-muted h-[300px] w-full rounded-xl '}></div>
      </Card>
    </>
  )
}

export default RecipeCardFallback