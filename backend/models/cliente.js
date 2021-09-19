'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ClienteSchema=Schema({
    nombre: String,
    apellido:String,
    cedula:Number,
    direccion:String,
    telefono:Number,
    email:String,

});

module.exports=mongoose.model('Cliente',ClienteSchema);