import {AxiosInstance} from "axios";
import {Tag} from "@/api/entities/tag";
import {RecipesBulkResponseApiModel} from "@/api/entities/response";
import {RecipeApiModel} from "@/api/entities/recipe";
import {RecipeQueryParams} from "@/api/entities/params";

export class RecipeServiceApi {
  private config: AxiosInstance

  constructor(config: AxiosInstance) {
    this.config = config
  }

  getRecipes(params?: RecipeQueryParams) {
    return this.config.get<RecipesBulkResponseApiModel<RecipeApiModel>>('recipes/', {
      params: params
    })
  }

  getTags() {
    return this.config.get<Tag[]>('recipes/tags/')
  }

  getRecipesByTag(params: RecipeQueryParams & {
    tag: string
  }) {
    return this.config.get<RecipesBulkResponseApiModel<RecipeApiModel>>(`recipes/tag/${params.tag}/`, {
      params: params
    })
  }

  getRecipeById(params: {
    id: string
  }) {
    return this.config.get<RecipeApiModel>(`recipes/${params.id}/`)
  }
}

