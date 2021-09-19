import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AutosComponent } from './components/autos/autos.component';
import { CreateautoComponent } from './components/createauto/createauto.component';
import { DetalleautoComponent } from './components/detalleauto/detalleauto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EditarComponent } from './components/editar/editar.component';
import { BarraMenuComponent } from './components/barra-menu/barra-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    AutosComponent,
    CreateautoComponent,
    DetalleautoComponent,
    ContactoComponent,
    EditarComponent,
    BarraMenuComponent,
    SidebarComponent,
    EliminarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
