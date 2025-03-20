import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  data: any = {
    location: 'Göttingen/Germany',
    email: 'yusuf@elmal.com',
    phone: 'ara beni',
  };
}
