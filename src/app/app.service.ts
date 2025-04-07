import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = 'https://muruvvet-website-api.vercel.app/send-email'; // Vercel URL
  //private apiUrl = 'http://localhost:3000/send-email'; // Vercel URL

  constructor(private http: HttpClient) {}

  sendEmail(
    sender: string,
    subject: string,
    textContent: string
  ): Observable<any> {
    const emailData = { sender, subject, textContent };
    return this.http.post(this.apiUrl, emailData);
  }
}
