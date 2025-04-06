import { Injectable } from '@angular/core';
import {nodemailer} from 'nodemailer';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private nodemailer:NodeMaile) { }

  const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seningmailhesabin@gmail.com',
    pass: 'uygulama-sifren-burada-olacak',
  },
});

const mailOptions = {
  from: 'seningmailhesabin@gmail.com',
  to: 'seningmailhesabin@gmail.com', // ya da başka bir hedef adres
  subject: 'Yeni iletişim formu mesajı',
  text: 'Kullanıcıdan gelen mesaj burada olacak.',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('E-posta gönderildi: ' + info.response);
  }
});

}
