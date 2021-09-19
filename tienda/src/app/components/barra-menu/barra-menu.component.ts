import { Component, OnInit } from '@angular/core';
import {AutoService} from "../../services/auto.service";
import {Auto} from "../../models/auto";
import {ActivatedRoute, Router} from "@angular/router";
import {Global} from "../../services/global";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css'],
  providers:[AutoService]
})
export class BarraMenuComponent implements OnInit {
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

  }





  // getAutoNombre(id:string){
  //   this._autoService.getAutoNombre(id).subscribe(
  //     response=>{
  //       this.auto=response.auto;
  //     },
  //     error=>{
  //       console.log(<any>error);
  //     }
  //   );
  // }

}
