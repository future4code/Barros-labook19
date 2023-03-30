import { friend } from "../model/friend"

export interface FriendRepository {
    createFriend(friend: friend):Promise<void> 
 // searchPost(id: string): Promise<any> 
}