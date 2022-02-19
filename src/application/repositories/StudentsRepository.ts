import { Student } from "../../domain/entities/student";

export interface IStudentRepoditory{
    findById(id:string): Promise<Student | null>;     
    
}