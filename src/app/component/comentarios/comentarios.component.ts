import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../../services/comentarios.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})

/*export class ComentariosComponent implements OnInit {

  comentarios: any[] = [];
  nuevoComentario = {
    autor: '',
    contenido: '',
  };

  constructor(private comentariosService: ComentariosService) { }

  ngOnInit(): void {
    this.comentariosService.getComentarios().subscribe((comentarios: any[]) => {
      this.comentarios = comentarios;
    });
  }

  agregarComentario() {
    this.comentariosService.agregarComentario(this.nuevoComentario).subscribe((comentario: any) => {
      this.comentarios.push(comentario);
      this.nuevoComentario = {
        autor: '',
        contenido: '',
      };
      // Puedes reiniciar el formulario o la entrada del usuario aquí si es necesario
    });
    
  }*/

  export class ComentariosComponent implements OnInit {

    comentarios: any[] = [];
    nuevoComentario = {
      autor: '',
      contenido: '',
    };
  
    constructor(private comentariosService: ComentariosService) { }
  
    ngOnInit(): void {
      this.comentariosService.getComentarios().subscribe((comentarios: any[]) => {
        this.comentarios = comentarios;
      });
    }
  
    agregarComentario() {
      this.comentariosService.agregarComentario(this.nuevoComentario).subscribe((comentario: any) => {
        /*this.comentarios.push(comentario);*/
        this.nuevoComentario = {
          autor: '',
          contenido: '',
        };
        // Puedes reiniciar el formulario o la entrada del usuario aquí si es necesario
        console.log(this.comentarios)
      });
    }
  
}





















