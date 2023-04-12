import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: String;
  password!: String;
  router: any;

  constructor(router: Router) {
    this.router = router;
  }

  onSubmit() {
    // validar usuario y contraseña aquí
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Inicio de sesión exitoso');
      // redireccionar a la página de búsqueda de países
      this.router.navigate(['/busqueda']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}

