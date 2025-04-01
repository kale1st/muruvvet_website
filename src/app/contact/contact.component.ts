import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
})
export class ContactComponent {
  data: any = {
    location: 'Göttingen/Germany',
    email: 'muruvvet.goettingen@gmail.com',
    phone: '‪+49 15560 008629',
  };
}
