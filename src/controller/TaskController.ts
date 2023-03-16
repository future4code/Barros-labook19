import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness";
import { TaskInputDTO, TaskPostInputDTO } from "../model/post";

export class TaskController {
  constructor(private TaskBusiness: TaskBusiness ) {}

  public createTask = async (req: Request, res: Response):Promise<void> => {
    try {
      const { photo, description, type,  created_at, authorId } = req.body;

      const postId: string = Date.now().toString()

      const input: TaskInputDTO = {
        id:postId,
        photo,
        description,
        type,
        created_at,
        authorId,
      };

      await this.TaskBusiness.createTask(input);

      res.status(201).send({ message: "Postagem criada com sucesso!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public searchPost = async (req: Request, res: Response):Promise<void> => {
    try {

      let message = "Sucesso!"
      const input: TaskPostInputDTO = {
        id: req.params.id
      }
     
      const tasks = await this.TaskBusiness.searchPost(input)

      res.status(201).send({ tasks });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }
}