import express from 'express'
import nodemailer from 'nodemailer'


import { prisma } from './database'

const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
    host: process.env.HOST_MAIL,
    port: 2525,
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASSWORD_MAIL
    }
});


app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,

        }
    })

    await transport.sendMail({
        from: 'Equipe Feedget <norepaly@feedget.com>',
        to: 'Francisco Menezes <franciscomenezesbh@gmail.com>',
        subject: 'Novo Feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
            `<p>Tipo do Feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')
    })


    return res.status(201).json({ data: feedback })
})

app.listen(3333, () => {
    console.log("server on port 3333")
})