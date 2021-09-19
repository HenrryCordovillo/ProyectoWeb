import { Injectable  } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Auto } from "../models/auto";
import { Global } from "./global";

@Injectable()
export class AutoService{
    public url:string;
    constructor(private _http:HttpClient){
        this.url=Global.url;
    }
    //ver informacion de autos
    getAutos():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'autos',{headers:headers});
        //http://localhost:3600/autos

    }
    //guardar datos de un auto
    //http://localhost:3600/guardar-auto
    guardarAuto(auto:Auto):Observable<any>{
        let params=JSON.stringify(auto);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-auto',params,{headers:headers});
    }
    //obtener datos de un auto
    //http://localhost:3600/auto/:id
    getAuto(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'auto/'+id,{headers:headers});
    }
    //actualizar datos de un auto
    //http://localhost:3600/auto/:id
    updateAuto(auto:Auto):Observable<any>{
        let params=JSON.stringify(auto);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'auto/'+auto._id,params,{headers:headers});
    }
    //eliminar un auto
    //http://localhost:3600/auto/:id
    deleteAuto(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'auto/'+id,{headers:headers});
    }

  getAutoNombres(nombre:String):Observable<any>{
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'autoNombre/'+nombre,{headers:headers});
  }


}
