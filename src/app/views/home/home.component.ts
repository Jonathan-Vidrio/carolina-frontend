import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ViewportScroller} from "@angular/common";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {SweetAlertService} from "../../../services/alerts.service";
import {ContactForm} from "../../../interfaces/contact-form.interface";
import {EmailService} from "../../../services/email.service";
import {HttpBackend, HttpClient, HttpClientModule, HttpXhrBackend} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
  providers: [EmailService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected contactForm;
  private emailService: EmailService;

  constructor(
    private formBuilder: FormBuilder,
    private viewportScroller: ViewportScroller,
    private alertService: SweetAlertService,
  ) {
    const httpBackend: HttpBackend = new HttpXhrBackend({ build: () => new XMLHttpRequest() });
    const httpClient: HttpClient = new HttpClient(httpBackend);
    this.emailService = new EmailService(httpClient);

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  navigateToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  submitContactForm(): void {
    if (this.contactForm.valid) {
      const contactFormValue: ContactForm = this.contactForm.getRawValue();
      console.log('contactFormValue', contactFormValue);

      this.emailService.sendEmail(contactFormValue).subscribe(
        () => {
          this.alertService.success('Success', 'Email sent successfully');
          this.contactForm.reset();
        },
        () => {
          this.alertService.error('Error', 'An error occurred while sending the email');
        },
      );
    }

    if (this.contactForm.invalid) {
      this.alertService.error('Error', 'Please fill out the form correctly');
    }
  }
}
