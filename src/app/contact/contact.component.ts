import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [HttpClientModule],
})
export class ContactComponent {
  constructor(private appService: AppService) {}

  data: any = {
    location: 'Göttingen/Germany',
    email: 'muruvvet.goettingen@gmail.com',
    phone: '‪+49 15560 008629',
  };

  sendEmail() {
    this.appService
      .sendEmail('muruvvet.goettingen@gmail.com', 'test email', 'hello world')
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      });
  }
}
