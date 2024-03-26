import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../app/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>((observer) => {
      this.authService.isLoggedIn().subscribe(loggedIn => {
        if (loggedIn) {
          observer.next(true);
          console.log("resgistrado")
        } else {
          console.log("No registarado")
          this.router.navigate(['/signin']); // Redirigir al usuario a la página de inicio de sesión si no está autenticado
          observer.next(false);
        }
      });
    });
  }
}
