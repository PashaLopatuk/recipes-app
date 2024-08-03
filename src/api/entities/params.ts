export interface RecipeQueryParams {
  tag?: string,
  limit?: number,
  skip?: number,
  sortBy?: string,
  order?: 'desc' | 'asc',
}