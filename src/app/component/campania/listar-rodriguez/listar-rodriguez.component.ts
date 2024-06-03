import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Campania } from '../../../model/campania';
import { CampaniaService } from '../../../service/campania.service';

@Component({
  selector: 'app-listar-rodriguez',
  templateUrl: './listar-rodriguez.component.html',
  styleUrl: './listar-rodriguez.component.scss'
})
export class ListarRodriguezComponent {
  lista: Campania[] = [];
  displayedColumns = ['idCampania', 'nombre', 'objetivo', 'fechaInicio', 'fechaFin' ,'presupuesto','medioComunicacion'];
  dataSource = new MatTableDataSource<Campania>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private campaniaService: CampaniaService) {
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.campaniaService.list().subscribe({
      next:(data) =>{
        this.dataSource.data = data;
      }
    });
    this.campaniaService.getList().subscribe(data => {
      this.dataSource.data=data;
    });
    //this.authorService.list().subscribe(data=> this.dataSource = new MatTableDataSource(data));
  }
}
