import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-seguro-viaje',
  templateUrl: './seguro-viaje.component.html',
  styleUrls: ['./seguro-viaje.component.css']
})
export class SeguroViajeComponent implements OnInit {
  numeros = [];
  meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  anos=["2021","2022","2023"];

  form: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    for(var i=0;i<31;i++){
      this.numeros[i]=i+1;
    }
    this.buildForm();
  }


  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(50),Validators.minLength(3)]],
      apellido1: ['', [Validators.required, Validators.maxLength(50),Validators.minLength(3)]],
      apellido2: ['', [Validators.required, Validators.maxLength(50),Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.maxLength(12),Validators.minLength(3),Validators.pattern("^[0-9]*$")]],
      telefono2: ['', [Validators.required, Validators.maxLength(12),Validators.minLength(3),Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.email, Validators.required, Validators.maxLength(50),Validators.minLength(8)]],
      diaI: ['', [Validators.required]],
      mesI: ['', [Validators.required]],
      anoI: ['', [Validators.required]],
      diaF: ['', [Validators.required]],
      mesF: ['', [Validators.required]],
      anoF: ['', [Validators.required]],
      numPersonas: ['', [Validators.required, Validators.max(10),Validators.min(1),Validators.pattern("^[0-9]*$")]],
      origen: ['', [Validators.required, Validators.maxLength(100),Validators.minLength(4)]],
      destino: ['', [Validators.required, Validators.maxLength(100),Validators.minLength(4)]],
      transporte: ['', [Validators.required]],
      condiciones: ['', [Validators.required]],
    });

    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }


}
