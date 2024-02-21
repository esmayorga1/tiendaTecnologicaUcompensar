import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTecnologia',
  standalone: true
})
export class FilterTecnologiaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultado = []

    for (const product of value){
      if(product.name.indexOf(arg) > -1) {
        console.log("Este es")

        resultado.push(product)
       

      };
      
    };

    return resultado;


  }

}
