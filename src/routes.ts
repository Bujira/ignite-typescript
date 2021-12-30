import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  const result = CreateCourseService.execute(
    {
      name: "Ignite - NodeJS",
      duration: 10,
      //educator: "Dani Leão"
    }
  )

  return response.json(result)
}