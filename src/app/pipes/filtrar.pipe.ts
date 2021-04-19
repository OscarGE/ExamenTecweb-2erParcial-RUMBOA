import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultado=[];
    for(const obj of value){
      if(obj.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultado.push(obj);
      };
    };
    return resultado;

  }

}
