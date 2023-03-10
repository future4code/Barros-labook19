import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness";
import { TaskInputDTO, TaskPostInputDTO } from "../model/post";

export class TaskController {
  public createTask = async (req: Request, res: Response) => {
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

      const taskBusiness = new TaskBusiness();
      await taskBusiness.createTask(input);

      res.status(201).send({ message: "Postagem criada com sucesso!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public searchPost = async (req: Request, res: Response) => {
    try {

      let message = "Sucesso!"
      const input: TaskPostInputDTO = {
        id: req.params.id
      }
     
      const returnPostId = await TaskBusiness.searchPost(input)

      res.status(201).send({ message: "Sucesso!" });
    } catch (error: any) {
      res.status(400).send(error.message);
  }
  }
};