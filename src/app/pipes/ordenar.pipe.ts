import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Array<any>, orden: String): Array<any> {
    if(!value) return [];
    if(orden=="az"){
      return value.sort ((a, b) => a.nombre.localeCompare (b.nombre));
    }
    else if(orden=="za"){
      return value.sort ((a, b) => b.nombre.localeCompare (a.nombre));
    }
    else if(orden=="califMaMe"){
      return value.sort ((a, b) => b.calificacion - a.calificacion);
    }
    else if(orden=="califMeMa"){
      return value.sort ((a, b) => a.calificacion - b.calificacion);
    }
    else if(orden=="preciMaMe"){
      return value.sort ((a, b) => b.precio - a.precio);
    }
    else if(orden=="preciMeMa"){
      return value.sort ((a, b) => a.precio - b.precio);
    }
    else if(orden==""){
       return value;
    }
  }

}
