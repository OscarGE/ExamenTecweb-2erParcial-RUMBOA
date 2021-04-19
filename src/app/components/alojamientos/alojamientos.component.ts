import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.css']
})
export class AlojamientosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  alojamientos=[
    {
      "imagen" : "1.jpg",
      "id" : 1,
      "nombre" : "Best Western International Drive",
      "localizacion" : "Orlando, Estados Unidos. A 12.92 km del centro",
      "calificacion" : 7.9,
      "numCalif" : 100,
      "subCalificacion" : 5,
      "caracteristica" : "Desayuno",
      "precio" : 1009,
    },
    {
      "imagen" : "2.jpg",
      "id" : 2,
      "nombre" : "Rosen Inn Lake Buena Vista",
      "localizacion" : "Orlando, Estados Unidos. A 19.88 km del centro",
      "calificacion" : 8,
      "numCalif" : 345,
      "subCalificacion" : 5,
      "caracteristica" : "Sólo hospedaje",
      "precio" : 1902,
    },
    {
      "imagen" : "3.jpg",
      "id" : 3,
      "nombre" : "Metropolitan Resort Orlando",
      "localizacion" : "Orlando, Estados Unidos. A 13.37 km del centro",
      "calificacion" : 6,
      "numCalif" : 634,
      "subCalificacion" : 5,
      "caracteristica" : "Sólo hospedaje",
      "precio" : 832,
    },
    {
      "imagen" : "4.jpg",
      "id" : 4,
      "nombre" : "Orlando Continental Plaza Hotel",
      "localizacion" : "Orlando, Estados Unidos. A 11.29 km del centro",
      "calificacion" : 9.5,
      "numCalif" : 1709,
      "subCalificacion" : 5,
      "caracteristica" : "Desayuno",
      "precio" : 1509,
    },
  ];

  orden:String="";
  aBuscar:String="";

  decremento(i:number){
    if(this.alojamientos[i].subCalificacion>0){
      this.alojamientos[i].subCalificacion--;
    }
    else{
      this.alojamientos[i].subCalificacion=0;
    }
  }
  incremento(i:number){
    if(this.alojamientos[i].subCalificacion<10){
      this.alojamientos[i].subCalificacion++;
    }
    else{
      this.alojamientos[i].subCalificacion=10;
    }
  }
  calificar(i:number){
    this.alojamientos[i].numCalif++;
    this.alojamientos[i].calificacion=((this.alojamientos[i].calificacion*(this.alojamientos[i].numCalif-1))+this.alojamientos[i].subCalificacion)/this.alojamientos[i].numCalif;
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
