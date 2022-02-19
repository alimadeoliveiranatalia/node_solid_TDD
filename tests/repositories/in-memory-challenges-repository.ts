import { IChallengeRepository } from "../../src/application/repositories/ChallengeRepository";
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements IChallengeRepository{
    public items: Challenge[] = [];
    
    async findById(id: string): Promise<Challenge | null> {
        const challenges = this.items.find(Challenges => Challenges.id === id);

        if(!challenges){
            return null;
        }

        return challenges;
    }
}