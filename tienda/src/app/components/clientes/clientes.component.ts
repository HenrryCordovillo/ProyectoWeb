import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente'; 
import { Global } from '../../services/global';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers:[ClienteService]
})
export class ClientesComponent implements OnInit {
  public clientes:Cliente[];
  public url:String;

  constructor(
    private _clienteService:ClienteService
    ) { 
      this.url=Global.url;
      this.clientes=[];
    }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this._clienteService.getClientes().subscribe(
      response=>{
        if(response.clientes){
          this.clientes=response.clientes;
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
