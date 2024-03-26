import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  constructor(private AuthService: AuthService, private router: Router) { }



  registerUser() {
    // Obtener los valores de los campos del formulario
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('passwordUsuario') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('passwordUsuario2') as HTMLInputElement).value;

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // Llamar al servicio de autenticación para registrar el usuario
    this.AuthService.createUser(email, password)
      .then(() => {
        // Registro exitoso, puedes redirigir al usuario o mostrar un mensaje de éxito
        console.log("Usuario registrado exitosamente");
        alert("usuario registrado exitosamente")
        this.router.navigate(['/signin']); 

      })
      .catch(error => {
        // Manejar errores, puedes mostrar un mensaje de error al usuario
        console.error("Error al registrar usuario:", error);
        alert("Error al registrar usuario: " + error.message);
      });
  }

  ngOnInit(): void {
    
  }
    
    
    
    
    
    
    
      

}
