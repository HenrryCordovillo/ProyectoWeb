import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { Auto } from '../../models/auto';
import { AutoService } from '../../services/auto.service';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-detalleauto',
  templateUrl: './detalleauto.component.html',
  styleUrls: ['./detalleauto.component.css'],
  providers:[AutoService]
})
export class DetalleautoComponent implements OnInit {
  public url:string;
  public auto:Auto;

  constructor(
    private _autoService:AutoService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.url=Global.url;
    this.auto=new Auto('','','','',23,"");
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params.id;
      this.getAuto(id);
    })

  }

  getAuto(id:string){
    this._autoService.getAuto(id).subscribe(
      response=>{
        this.auto=response.auto;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  borrarAuto(id:string){
    this._autoService.deleteAuto(id).subscribe(
      response=>{
        if(response.auto){
          this._router.navigate(['/autos']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )

  }



}
