import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaniaComponent } from './component/campania/campania.component';
import { CreateRodriguezComponent } from './component/campania/create-rodriguez/create-rodriguez.component';
import { ListarRodriguezComponent } from './component/campania/listar-rodriguez/listar-rodriguez.component';

const routes: Routes = [
  {
    path: 'Vega', component: CampaniaComponent, children: [
      {
      path:'nuevo', component: CreateRodriguezComponent
      },
      {
        path:'listado', component: ListarRodriguezComponent
      },
      
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
