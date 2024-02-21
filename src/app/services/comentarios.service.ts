import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) {}

  /* Esto es temporal mientras se tiene la API */

  private comentarios: any[] = [
    {
      autor: 'Juan Pérez',
      contenido: 'Excelente producto, muy recomendable.'
    },
    {
      autor: 'María López',
      contenido: 'Tuve un problema con el envío, pero el servicio al cliente fue muy bueno.'
    }
  ];

  getComentarios(): Observable<any[]> {
    /* Descomenta la siguiente línea cuando tengas una API real disponible */
    // return this.http.get<any[]>('api/comentarios');
    return of(this.comentarios);  // Usando 'of' para simular un Observable con los comentarios actuales
  }

  agregarComentario(comentario: any): Observable<any> {
    /* Descomenta la siguiente línea cuando tengas una API real disponible */
    // return this.http.post<any>('api/comentarios', comentario);
    this.comentarios.push(comentario);
    return of(comentario);  // Devolviendo el comentario añadido como un Observable
  }
}
