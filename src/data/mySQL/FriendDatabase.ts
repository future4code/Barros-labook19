import { BaseDatabase } from "./BaseDatabase";
import { friend } from "../../model/friend";
import { CustomError } from "../../error/CustomError";
import { FriendRepository } from "../../business/FriendRepository";


export class FriendDatabase extends BaseDatabase implements FriendRepository {



   public createFriend = async (friend: friend):Promise<any> => {
      try {
      await FriendDatabase.connection('labook_friends')
         .insert({
            id: friend.id,
            id_user: friend.id_user,
            id_friend: friend.id_friend
         })
         .into('labook_friends');
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
   };

   /*
   public searchPost = async(id: string): Promise<task[]> => {
      try {
         const returnPostId = await TaskDatabase.connection
         .where({id})
         .into('labook_tasks')

         return returnPostId;

      }  catch (error:any) {
         throw new CustomError(error.statusCode, error.message);
      }
   }; */
}   

