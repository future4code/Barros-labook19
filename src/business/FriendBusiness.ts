import { generateId } from "../services/idGenerator";
import { friend, FriendInputDTO } from "../model/friend";
import { CustomError } from "../error/CustomError";
import { FriendRepository } from "./FriendRepository";
import { FriendDatabase } from "../data/mySQL/FriendDatabase";

export class FriendBusiness {

  constructor(private friendDatabase: FriendRepository){}
  public createFriend = async (input: FriendInputDTO) => {
    try {
      const { id_user, id_friend } = input;

      if (!id_user) {
        throw new Error(
          '"id_user" e "id_friend" são obrigatórios'
        );
      }

      const id: string = generateId();

      
      const friend: friend = {
        id,
        id_user,
        id_friend
      }


      await this.friendDatabase.createFriend(friend)
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }

/*
  public searchPost = async (id: string) => {

    try {

      const task = new TaskDatabase()
      const result = await task.searchPost(id)

      return result

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    } 
  }
*/
}