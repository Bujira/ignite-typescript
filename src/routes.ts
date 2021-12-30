import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

interface CreateCourseDTO {
  name: string;
  duration: number;
  educator: string;
}

export function createCourse(request: Request, response: Response) {
  const result = CreateCourseService.execute(
    {
      name: "Ignite - NodeJS",
      duration: 10,
      educator: "Dani Leão"
    } as CreateCourseDTO
  )

  return response.json(result)
}