import { Injectable } from "@angular/core";
import { Global } from "./global";
@Injectable()
export class CargarService{
    public url:string;
    constructor(){
        this.url=Global.url;
    }
    /*
    metodo para hacer una peticion ajax para adjuntar un archivo
    pasaremos la url, los posibles parametros 
    en este cado un arreglo de archivos y el nombre del archivo
    */
   peticionRequest(url:string,params: Array<string>, files: Array<File>, nombre:string){
       return new Promise(function (resolve,reject){
           var formDatos:any=new FormData();//simulacion de formulario de objeto
           var xhr=new XMLHttpRequest();//xhr es sinonimo de ajax que contiene una peticion de tipo asincrono de js
           //recorrer todos loas archivos que lleguen, adjuntar al formulario con el nombre que tiene
           for(var i=0;i<files.length;i++){
               formDatos.append(nombre,files[i],files[i].name);
           }
           ///verifica cuando se produce un cambio
           xhr.onreadystatechange=function(){
               if(xhr.readyState==4){
                   if(xhr.status==200){
                       resolve(JSON.parse(xhr.response));
                   }else{
                       reject(xhr.response);
                   }
               }
           }
           xhr.open('POST',url,true);//peticion por post y true para realizar la peticion
           xhr.send(formDatos);
       })
   }
}