import { POST_TYPES } from "./post_types"

export interface PostInputDTO {
  id: string,
  photo: string,
  description: string,
  type: POST_TYPES,
  createdAt: Date,
  authorId: string
}

export type InputDTO = {

}

