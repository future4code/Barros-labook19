import { CustomError, InvalidEmail, InvalidPassword } from "../error/CustomError";
import { UserInputDTO } from "../model/user";
import { user } from "../model/user";
import { generateId } from "../services/idGenerator";
import { UserRepository } from "./UserRepository";


export class UserBusiness {
   constructor(private userDatabase: UserRepository){}

  public createUser = async (input: UserInputDTO) => {
     try {

        const { name, email, password } = input
        if (
           !name ||
           !email ||
           !password
           ) {
              throw new CustomError(400,'Preencha os campos "name", "email" e "password"')
           }

        if(!email.includes("@")) {
            throw new InvalidEmail()
        }

        if(password.length <=6) {
           throw new InvalidPassword()
       }
           
           const id: string = generateId()
           
           const user:user = {
              id,
              name,
              email,
              password
           }

           await this.userDatabase.insertUser(user)
           
        } catch (error: any) {
           throw new CustomError(error.statusCode, error.message)
        }
  }
  public getUsers = async () => {

     try {
        
        
        return await this.userDatabase.getUsers();
        
     } catch (error: any) {
        throw new CustomError(error.statusCode, error.message)

     }
  }
}

