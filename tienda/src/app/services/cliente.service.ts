import { Injectable  } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Cliente } from "../models/cliente";
import { Global } from "./global";

@Injectable()
export class ClienteService{
    public url:string;
    constructor(private _http:HttpClient){
        this.url=Global.url;
    }

        //ver informacion de autos
        getClientes():Observable<any>{
            let headers=new HttpHeaders().set('Content-Type','application/json');
            return this._http.get(this.url+'clientes',{headers:headers});
        }

        guardarCliente(cliente:Cliente):Observable<any>{
            let params=JSON.stringify(cliente);
            let headers=new HttpHeaders().set('Content-Type','application/json');
            return this._http.post(this.url+'guardar-cliente',params,{headers:headers});
        }

        getCliente(id:String):Observable<any>{
            let headers=new HttpHeaders().set('Content-Type','application/json');
            return this._http.get(this.url+'cliente/'+id,{headers:headers});
        }
        updateCliente(cliente:Cliente):Observable<any>{
            let params=JSON.stringify(cliente);
            let headers=new HttpHeaders().set('Content-Type','application/json');
            return this._http.put(this.url+'cliente/'+cliente._id,params,{headers:headers});
        }
        deleteCliente(id:String):Observable<any>{
            let headers=new HttpHeaders().set('Content-Type','application/json');
            return this._http.delete(this.url+'cliente/'+id,{headers:headers});
        }
    
}