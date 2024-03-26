import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css'
})
export class HeaderAdminComponent {

  constructor(private authService: AuthService, private router: Router) { }
  logout() {
    this.authService.logout().then(() => {
      console.log('Sesión cerrada exitosamente');
      this.router.navigate(['/signin']); // Redirigir al usuario a la página de inicio de sesión
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
  }

}
