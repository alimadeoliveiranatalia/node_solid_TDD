import { Submission } from "../../domain/entities/submission"
import { IChallengeRepository } from "../repositories/ChallengeRepository";
import { IStudentRepoditory } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}
export class CreateChallengeSubmission {
    constructor(
        private studentsRepository: IStudentRepoditory,
        private challengeRepository: IChallengeRepository         
        
    ){}
    async execute({studentId, challengeId}: CreateChallengeSubmissionRequest){
        const student = await this.studentsRepository.findById(studentId);
        if(!student){
            throw new Error("Student does not exists.");
        }
        
        const challenge = await this.challengeRepository.findById(challengeId);
        if(!challenge){
            throw new Error("Challenge does not exists.");
        }
        const submission = Submission.create({
            studentId,
            challengeId
        });
        return submission;
    }
}