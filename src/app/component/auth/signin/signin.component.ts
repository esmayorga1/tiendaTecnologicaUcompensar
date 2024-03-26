import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterModule,],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private authService: AuthService, private router: Router) { }

  login() {
    // Obtener los valores de los campos del formulario
    const email = (document.getElementById('emailUsuario') as HTMLInputElement).value;
    const password = (document.getElementById('passwordUsuario') as HTMLInputElement).value;

    // Llamar al servicio de autenticación para iniciar sesión
    this.authService.loginWithEmail(email, password)
      .then(() => {
        // Inicio de sesión exitoso, puedes redirigir al usuario o mostrar un mensaje de éxito
        console.log("Inicio de sesión exitoso");
        this.router.navigate(['/admin']); // Redirige al panel de administrador
      })
      .catch(error => {
        // Manejar errores, puedes mostrar un mensaje de error al usuario
        console.error("Error al iniciar sesión:", error);
        alert("Error al iniciar sesión: " + error.message);
      });
  }

}
