import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html'
})
export class Contact {

  name = '';
  email = '';
  message = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    const data = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post('http://localhost:8080/api/contact', data)
      .subscribe(() => {
        alert('Message sent!');
        this.name = '';
        this.email = '';
        this.message = '';
      });
  }
}