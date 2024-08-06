import BulkRecipesPage from '@/features/recipes/pages/bulk-recipes-page'
import {Suspense} from "react";
import RecipesSkeleton from "@/features/recipes/components/recipes-skeleton";

export default function page(props: any) {
  return (
    <Suspense
      key={JSON.stringify(props.searchParams)}
      fallback={<RecipesSkeleton />}>
      <BulkRecipesPage {...props}/>
    </Suspense>
  )
}