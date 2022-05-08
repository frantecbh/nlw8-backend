import { prisma } from "../../database";
import { FeedBackProps, FeedbackRepository } from "../feedbacks-repositories";


export class PrismaFeedbacksRepository implements FeedbackRepository {
    async create({ type, comment, screenshot }: FeedBackProps) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,

            }
        })
    };
}