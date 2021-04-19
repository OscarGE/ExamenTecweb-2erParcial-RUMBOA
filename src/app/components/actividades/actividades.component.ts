import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  actividades=[
    {
      "imagen" : "1.jpg",
      "id" : 1,
      "nombre" : "Disneyland Park",
      "localizacion" : "Anaheim, California, Estados Unidos",
      "calificacion" : 9.5,
      "numCalif" : 27346,
      "subCalificacion" : 5,
      "caracteristica" : "Entrada normal",
      "precio" : 2329,
    },
    {
      "imagen" : "2.jpg",
      "id" : 2,
      "nombre" : "Museo del Louvre",
      "localizacion" : "Palais Royal, Musée du Louvre, 75001 Paris",
      "calificacion" : 8.5,
      "numCalif" : 100864,
      "subCalificacion" : 5,
      "caracteristica" : "Museo del Louvre y el museo Eugène-Delacroix, 24 horas",
      "precio" : 357,
    },
    {
      "imagen" : "3.jpg",
      "id" : 3,
      "nombre" : "Parque Acuático Aquaventure",
      "localizacion" : "Atlantis The Palm, Crescent Rd, Dubai, Emiratos Árabes Unidos",
      "calificacion" : 7.6,
      "numCalif" : 16854,
      "subCalificacion" : 5,
      "caracteristica" : "Safari marino",
      "precio" : 1599,
    },
    {
      "imagen" : "4.jpg",
      "id" : 4,
      "nombre" : "Festival Tomorrowland",
      "localizacion" : "Celebrado anualmente en la localidad de Boom, Bélgica",
      "calificacion" : 8.3,
      "numCalif" : 3040,
      "subCalificacion" : 5,
      "caracteristica" : "Pase de 1 día",
      "precio" : 2529,
    },
  ];
  orden:String="";
  aBuscar:String="";

  decremento(i:number){
    if(this.actividades[i].subCalificacion>0){
      this.actividades[i].subCalificacion--;
    }
    else{
      this.actividades[i].subCalificacion=0;
    }
  }
  incremento(i:number){
    if(this.actividades[i].subCalificacion<10){
      this.actividades[i].subCalificacion++;
    }
    else{
      this.actividades[i].subCalificacion=10;
    }
  }
  calificar(i:number){
    this.actividades[i].numCalif++;
    this.actividades[i].calificacion=((this.actividades[i].calificacion*(this.actividades[i].numCalif-1))+this.actividades[i].subCalificacion)/this.actividades[i].numCalif;
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
