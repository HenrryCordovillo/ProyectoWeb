import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { Auto } from '../../models/auto';
import { AutoService } from '../../services/auto.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  providers: [AutoService],
})
export class BusquedaComponent implements OnInit {
  public url: string;
  public autos: Auto[];
  constructor(
    private _autoService: AutoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.autos = [];
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      let nombre = params.nombre;
      this.getAutoNombre(nombre);
    });
  }

  getAutoNombre(nombre: string) {
    this._autoService.getAutoNombres(nombre).subscribe(
      (response) => {
        this.autos = response.autos;
      },
      (error) => {
        
        console.log(<any>error);
      }
    );
  }
}
