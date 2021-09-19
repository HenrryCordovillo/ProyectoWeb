import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../services/auto.service';
import { Global } from '../../services/global';
import { Auto } from '../../models/auto';
import { CargarService } from '../../services/cargar.service';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-createauto',
  templateUrl: './createauto.component.html',
  styleUrls: ['./createauto.component.css'],
  providers:[AutoService,CargarService]
})

export class CreateautoComponent implements OnInit {
  public titulo:string;
  public auto:Auto;
  public autoGuardar:Auto;
  public url:string;
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any;


  constructor(
    private _autoService:AutoService,
    private _cargarService:CargarService
  ) {
    this.titulo="GUARDAR PRODUCTO";
    this.url=Global.url;
    this.auto=new Auto('','','','',50,"");
    this.autoGuardar=new Auto('','','','',25,"");
    this.archivosParaCargar=[];
   }

  ngOnInit(): void {
  }

  guardarAuto(form:NgForm){
    this._autoService.guardarAuto(this.auto).subscribe(
      response=>{
        if(response.auto){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.auto._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              this.autoGuardar=result.response;
              form.reset();
              this.fileInput.nativeElement.value='';
            });
          }else{
            this.autoGuardar=response.auto;
            form.reset();
        }
      }else{
          console.log("error");
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
}
