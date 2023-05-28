export default class PostService {
  constructor(opt: any) {
    console.log(opt)
  }
  public async create({ title, text }: CreatePostParams) {}
  public async read(postId: string) {}
  public async list({ cursor, limit }: ListPostParams) {}
  public async update({ postId, title, text }: UpdatePostParams) {}
  public async delete(postId: string) {}
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
