import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { BuscadorComponent } from "../buscador/buscador.component";
import { HeaderCategoriasComponent } from "../header-categorias/header-categorias.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ProductListComponent, BuscadorComponent, HeaderCategoriasComponent, FooterComponent]
})
export class HomeComponent{ 

}
