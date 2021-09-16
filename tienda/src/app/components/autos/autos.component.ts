import { Component, OnInit } from '@angular/core';
import { Auto } from '../../models/auto';
import { AutoService } from '../../services/auto.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
  providers:[AutoService]
})
export class AutosComponent implements OnInit {
  public autos:Auto[];
  public url:string;

  constructor(
    private _autoService:AutoService
    ) {
      this.url=Global.url;
      this.autos=[];
     }

  ngOnInit(): void {
    this.getAutos();
  }

  getAutos(){
    this._autoService.getAutos().subscribe(
      response=>{
        if(response.autos){
          this.autos=response.autos;
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
