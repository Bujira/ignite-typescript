
interface CreateCourseDTO {
  name: string;
  duration: number;
  educator?: string;
}

class CreateCourseService {
  execute({ name, duration, educator = "Dani" }: CreateCourseDTO) {
    return { name, duration, educator }
  }
}

export default new CreateCourseService