import { user } from "../model/user"

export interface UserRepository {
    insertUser(user: user):Promise<void> 
    getUsers(): Promise<user[]> 
}