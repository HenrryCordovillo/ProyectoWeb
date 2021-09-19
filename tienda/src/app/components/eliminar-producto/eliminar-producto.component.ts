import { Component, OnInit } from '@angular/core';
import { Auto } from '../../models/auto';
import { AutoService } from '../../services/auto.service';
import { Global } from '../../services/global';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css'],
  providers:[AutoService]
})
export class EliminarProductoComponent implements OnInit {
  public autos: Auto[];
  public url: string;
  constructor(private _autoService: AutoService, private _router:Router,) {
    this.url = Global.url;
    this.autos = [];
  }

  ngOnInit(): void {
    this.getAutos();
  }

  getAutos() {
    this._autoService.getAutos().subscribe(
      (response) => {
        if (response.autos) {
          this.autos = response.autos;
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  borrarAuto(id:string){
    this._autoService.deleteAuto(id).subscribe(
      response=>{
        if(response.auto){
          this.getAutos();
        }
      },
      error=>{
        console.log(<any>error);
      }
    )

  }
}
