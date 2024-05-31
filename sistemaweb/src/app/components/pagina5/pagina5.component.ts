import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.component.html',
  styleUrls: ['./pagina5.component.css']
})
export class Pagina5Component {
  contactForm = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {

    console.log('Formulario enviado', this.contactForm);
    this.contactForm = {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}