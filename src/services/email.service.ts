import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ContactForm} from "../interfaces/contact-form.interface";
import {Observable} from "rxjs";

const path = 'http://localhost:3000/api/v1/';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private readonly http: HttpClient) {}

  sendEmail(contactForm: ContactForm): Observable<any> {
    return this.http.post(`${path}email/send/`, contactForm);
  }
}
