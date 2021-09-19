import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosComponent } from './components/autos/autos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreateautoComponent } from './components/createauto/createauto.component';
import { DetalleautoComponent } from './components/detalleauto/detalleauto.component';
import {EditarComponent } from './components/editar/editar.component';
import {BarraMenuComponent} from "./components/barra-menu/barra-menu.component";
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';
const routes: Routes = [
  {path:'autos',component:AutosComponent},
  {path:'guardar-auto',component:CreateautoComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'auto/:id',component:DetalleautoComponent},
  {path:'editar-auto/:id',component:EditarComponent},
  {path:'auto-nombre',component:BarraMenuComponent},
  {path:'eliminar',component:EliminarProductoComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
