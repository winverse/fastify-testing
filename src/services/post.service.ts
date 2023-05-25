export const postService = {
  async create({ title, text }: CreatePostParams) {},
  async read(postId: string) {},
  async list({ cursor, limit }: ListPostParams) {},
  async update({ postId, title, text }: UpdatePostParams) {},
  async delete(postId: string) {},
}

type CreatePostParams = {
  title: string
  text: string
}

type UpdatePostParams = {
  title: string
  text: string
  postId: string
}

type ListPostParams = {
  cursor: string
  limit: number
}
