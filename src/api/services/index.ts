import {RecipeServiceApi} from "@/api/services/recipes";
import {axiosConfig} from "@/api/config";


const RecipeService = new RecipeServiceApi(axiosConfig)

export {
  RecipeService
}