import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 paquetes=[
    {
      "imagen1" : "1.jpg",
      "imagen2" : "2.jpg",
      "id" : 1,
      "nombre" : "Provident Doral at the Blue Mia + Toyota Corolla",
      "localizacion" : "Miami, Estados Unidos. A 11.69 km del centro",
      "calificacion" : 7.8,
      "numCalif" : 87,
      "subCalificacion" : 5,
      "caracteristica" : "Desayuno - Automático",
      "precio" : 4483,
    },
    {
      "imagen1" : "3.jpg",
      "imagen2" : "4.jpg",
      "id" : 2,
      "nombre" : "Vuelo a Kissimmee + Paradise Palms Resort by Global Resort Homes",
      "localizacion" : "Kissimmee, Estados Unidos. A 24.12 km del centro",
      "calificacion" : 6.9,
      "numCalif" : 440,
      "subCalificacion" : 5,
      "caracteristica" : "Vuelo ida y vuelta - hospedaje",
      "precio" : 1902,
    },
    {
      "imagen1" : "5.jpg",
      "imagen2" : "6.jpg",
      "id" : 3,
      "nombre" : "The Mutiny Hotel Coconut Grove+ Chevrolet Spark",
      "localizacion" : "Miami, Estados Unidos. A 6.82 km del centro",
      "calificacion" : 8.4,
      "numCalif" : 22,
      "subCalificacion" : 5,
      "caracteristica" : "Sólo hospedaje - Automático",
      "precio" : 5502,
    },
    {
      "imagen1" : "7.jpg",
      "imagen2" : "8.jpg",
      "id" : 4,
      "nombre" : "Vuelo a Miami + Hampton Inn Coconut Grove",
      "localizacion" : "Miami, Estados Unidos. A 5.54 km del centro",
      "calificacion" : 9.1,
      "numCalif" : 221,
      "subCalificacion" : 5,
      "caracteristica" : "Vuelo ida y vuelta - hospedaje",
      "precio" : 6110,
    },
  ];

  orden:String="";
  aBuscar:String="";

  decremento(i:number){
    if(this.paquetes[i].subCalificacion>0){
      this.paquetes[i].subCalificacion--;
    }
    else{
      this.paquetes[i].subCalificacion=0;
    }
  }
  incremento(i:number){
    if(this.paquetes[i].subCalificacion<10){
      this.paquetes[i].subCalificacion++;
    }
    else{
      this.paquetes[i].subCalificacion=10;
    }
  }
  calificar(i:number){
    this.paquetes[i].numCalif++;
    this.paquetes[i].calificacion=((this.paquetes[i].calificacion*(this.paquetes[i].numCalif-1))+this.paquetes[i].subCalificacion)/this.paquetes[i].numCalif;
  }
  ordenacion(x:number){
    switch (x) {
      case 1: this.orden="az"; console.log(this.orden);break;
      case 2: this.orden="za";console.log(this.orden);break;
      case 3: this.orden="califMaMe";console.log(this.orden); break;
      case 4: this.orden="califMeMa";console.log(this.orden); break;
      case 5: this.orden="preciMaMe";console.log(this.orden); break;
      case 6: this.orden="preciMeMa";console.log(this.orden); break;
    }

  }

}
