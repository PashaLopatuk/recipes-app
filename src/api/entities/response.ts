export interface RecipesBulkResponseApiModel<DataItem> {
  recipes: DataItem[]
  total: number
  skip: number
  limit: number
}
