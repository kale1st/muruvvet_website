import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
})
export class ContactComponent {
  submitted: boolean = false;
  showSuccessMessage: boolean = false;
  showSpinner: boolean = false;
  constructor(private appService: AppService, private fb: FormBuilder) {}

  data: any = {
    location: 'Göttingen/Germany',
    email: 'muruvvet.goettingen@gmail.com',
    phone: '‪+49 15560 008629',
  };

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  onSubmit() {
    this.submitted = true;
    this.showSpinner = true;

    if (this.contactForm.invalid) {
      return;
    } else if (this.contactForm.valid) {
      this.appService
        .sendEmail(
          this.contactForm.controls?.email?.value!,
          this.contactForm?.controls?.subject?.value!,
          this.contactForm?.controls?.message?.value!
        )
        .subscribe({
          next: (data) => {
            this.showSpinner = false;
            this.contactForm.reset();
            this.contactForm.markAsPristine();
            this.contactForm.markAsUntouched();
            this.submitted = false;
            this.showSuccessMessage = true;
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 5000);
          },
        });
    }
  }
}
