import { MailSendForm } from "../interface/interface";
import HttpClient from "../network/http";

export default class Mailer {
    constructor(private http:HttpClient) {
    }
    
    async getAdminId() {
        return this.http.fetch(`/mail`, {
            method: 'GET'
        });
    }
    
    async sendMail(mailSendForm:MailSendForm) {
        return this.http.fetch(`/mail`, {
            method: 'POST',
            body: JSON.stringify(mailSendForm),
        });
    }
}