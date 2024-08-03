import {useQuery} from "@tanstack/react-query";
import {RecipeService} from "@/api/services";


export function useRecipeTags() {
  return useQuery({
    queryKey: ['getRecipeTags'],
    queryFn: () => (
      RecipeService.getTags()
    ),
    select: data => data.data,
  })
}