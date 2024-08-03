import {} from 'react'

import type {FC} from 'react'
import {Card} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import RecipeTypeLabel from "@/components/recipe-card/recipe-type-label";
import ArrowIcon from "@/shared/assets/arrow";


type PropsType = {
  isMostPopular: Boolean
  imageUrl: string,
  tags: string[]
  title: string
  description: string
  difficulty: string
  cuisine: string
  id: number
}

const RecipeCard: FC<PropsType> = (
  {
    cuisine,
    id,
    description, difficulty,
    tags,
    title,
    imageUrl, isMostPopular,
  }) => {

  return (
    <>
      <Card className={'p-2 space-y-2 rounded-xl'}>
        <div className={'absolute w-0 h-0'}>
          {isMostPopular && (
            <Badge
              variant={'destructive'}
              className={'relative -top-5 w-fit text-nowrap whitespace-nowrap z-50'}
            >Most popular</Badge>
          )}
        </div>
        <div className={'!m-0 overflow-hidden w-full max-h-[300px] rounded-xl duration-200 transition-all'}>
          <Image
            src={imageUrl}
            alt={title}
            width={1000}
            height={1200}
            className={'hover:scale-110 duration-200'}
            objectFit={'contain'}
            loading={'lazy'}
            blurDataURL={imageUrl}
            placeholder={'blur'}
            sizes=""
          />
        </div>
        <div className={'overflow-x-auto space-x-2 whitespace-nowrap'}>
          {
            tags.map(tag => (
              <Badge
                key={tag}
              >
                {tag}
              </Badge>
            ))
          }
        </div>
        <div>
          <h3 className={'font-normal text-xl'}>{title}</h3>
          <p className={'text-muted-foreground line-clamp-2'}>{description}</p>
        </div>
        <div className={'text-muted-foreground'}>
          <div>Difficulty: <span
            className={'text-accent-foreground'}
          >
            <RecipeTypeLabel recipeType={difficulty}/>
          </span></div>
          <div>Cuisine: <span
            className={'text-accent-foreground'}
          >{cuisine}
        </span>
          </div>
        </div>
        <Link
          className={''}
          href={`/recipe/${id}/`}
        >
          <div className="hover:bg-muted p-2 border w-full rounded-xl flex justify-between">
            <div className={'size-6'}></div>
            <span className={'justify-self-center'}>View recipe</span>
            <ArrowIcon className={'justify-self-end'}/>
          </div>
        </Link>
      </Card>
    </>
  )
}

export default RecipeCard