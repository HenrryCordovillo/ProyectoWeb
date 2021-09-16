import { Component, OnInit } from '@angular/core';
import {Auto} from "../../models/auto";
import {ActivatedRoute, Router} from "@angular/router";
import {AutoService} from "../../services/auto.service";
import {CargarService} from "../../services/cargar.service";
import {Global} from "../../services/global";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-editar',
  templateUrl: '../createauto/createauto.component.html',
  styleUrls: ['./editar.component.css'],
  providers:[AutoService,CargarService]
})
export class EditarComponent implements OnInit {
  public titulo:string;
  public auto:Auto;
  public url;
  public autoGuardar:Auto;
  public archivosParaCargar:Array<File>;

  constructor(
    private _autoService:AutoService,
    private _cargarService:CargarService,
    private _router:Router,
    private _route:ActivatedRoute

  ) {
    this.url=Global.url;
    this.titulo="Editar Juego";
    this.auto=new Auto('','','','',52,"");
    this.autoGuardar=new Auto('','','','',41,"");
    this.archivosParaCargar=[];

  }



  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params.id;
      this.getAuto(id);
    });
  }



  getAuto(id:String){
    this._autoService.getAuto(id).subscribe(
      response=>{
        this.auto=response.auto;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
  guardarAuto(form:NgForm){
    this._autoService.updateAuto(this.auto).subscribe(
      response=>{
        if(response.auto){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.auto._id,[],this.archivosParaCargar,'imagen')
              .then((result:any)=>{
                this.autoGuardar=result.response;
                form.reset();
                //this.fileInput.nativeElement.value='';
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
