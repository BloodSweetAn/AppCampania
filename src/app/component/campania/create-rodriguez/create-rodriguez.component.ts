import { Component, ViewChild } from '@angular/core';
import { Campania } from '../../../model/campania';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CampaniaService } from '../../../service/campania.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-rodriguez',
  templateUrl: './create-rodriguez.component.html',
  styleUrl: './create-rodriguez.component.scss'
})
export class CreateRodriguezComponent {
  
  form: FormGroup = new FormGroup({});
  campania: Campania = new Campania();
  mensaje: string = "";
  Todate = new Date();
  constructor(private campaniaService: CampaniaService, private router: Router, private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        nombre: new FormControl('', [Validators.required , Validators.minLength(3)]),
        objetivo: new FormControl('', [Validators.required]),
        fechaInicio: new FormControl(),
        fechaFin: new FormControl(),
        presupuesto: new FormControl('', [Validators.required, Validators.min(500),Validators.max(7500)]),
        medioComunicacion: new FormControl('', [Validators.required]),
        
      }
    );
  }

  aceptar(){
    this.campania.nombre = this.form.value['nombre'];
    this.campania.objetivo = this.form.value['objetivo'];
    this.campania.fechaInicio = this.form.value['fechaInicio'];
    this.campania.fechaFin = this.form.value['fechaFin'];
    this.campania.presupuesto = this.form.value['presupuesto'];
    this.campania.medioComunicacion = this.form.value['medioComunicacion'];

    //date
    const maxDate = new Date;
    maxDate.setDate(this.Todate.getDate());
    maxDate.setHours(0,0,0,0);

    const invalidDate = this.form.get('fechaInicio')?.value < maxDate;


    if(this.form.valid || invalidDate){

      if(invalidDate){
        this.form.get('fechaInicio')?.setErrors({invalidDate:true});
      }else {
        this.campaniaService.create(this.campania).subscribe((data)=>{
          this.campaniaService.list().subscribe(data => {
            this.campaniaService.setList(data);//enviando la lista al suscriptor
          })
        });
        this.router.navigate(['Vega/listado']);
      }
    }else{
       this.mensaje = "Agregue todos los campos omitidos"
    }
  
  }
}
