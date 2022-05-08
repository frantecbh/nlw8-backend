import Routes from 'express'
import { NodemailerAdapeter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { prisma } from './database';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repositories';
import { SubmitFeedbackUseCase } from './UseCase/SubmitFeedbackUseCase';

export const routes = Routes()

routes.post('/feedbacks', async (req, res) => {

    const { type, comment, screenshot } = req.body

    const prismaFeedabackRepository = new PrismaFeedbacksRepository()
    const nodemailermailAdapter = new NodemailerAdapeter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedabackRepository,
        nodemailermailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })


    return res.status(201).send()
})