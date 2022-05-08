export interface SendeMailData {
    subject: string;
    body: string;
}
export interface MailAdapter {
    sendMail: (data: SendeMailData) => Promise<void>;
}