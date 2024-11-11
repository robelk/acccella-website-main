import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contactForm = {
    name: '',
    company: '',
    email: '',
    subject: '',
    message: ''
  };
  isSubmitted = false;
  errorMessage = '';

  onSubmit() {
    setTimeout(() => {
      this.isSubmitted = true;
      console.log('Form submitted:', this.contactForm);
      this.resetForm();
    }, 1000);
  }

  resetForm() {
    this.contactForm = { name: '', company: '', email: '', subject: '', message: '' };
    setTimeout(() => (this.isSubmitted = false), 10000); 
  }
}
