import { MailAdapter, SendeMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: process.env.HOST_MAIL,
    port: 2525,
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASSWORD_MAIL,
    }
});


export class NodemailerAdapeter implements MailAdapter {

    async sendMail({ subject, body }: SendeMailData) {

        await transport.sendMail({
            from: 'Equipe Feedget <norepaly@feedget.com>',
            to: 'Francisco Menezes <franciscomenezesbh@gmail.com>',
            subject,
            html: body
        })

    }
}