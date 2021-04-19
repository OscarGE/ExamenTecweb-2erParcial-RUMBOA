import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  vuelos=[
    {
      "imagen" : "1.jpg",
      "id" : 1,
      "nombre" : "Londres",
      "localizacion" : "Reino Unido",
      "calificacion" : 17,
      "precio" : 16018,
    },
    {
      "imagen" : "2.jpg",
      "id" : 2,
      "nombre" : "Dongcheng Qu",
      "localizacion" : "China ",
      "calificacion" : 51,
      "precio" : 86978,
    },
    {
      "imagen" : "3.jpg",
      "id" : 3,
      "nombre" : "Guiza",
      "localizacion" : "Egipto",
      "calificacion" : 18,
      "precio" : 27729,
    },
    {
      "imagen" : "4.jpg",
      "id" : 4,
       "nombre" : "Paris",
      "localizacion" : "Francia",
      "calificacion" : 13,
      "precio" : 20983,
    },
  ];
  orden:String="";
  aBuscar:String="";
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
