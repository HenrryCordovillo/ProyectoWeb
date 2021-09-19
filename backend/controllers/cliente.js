'use strict'
var Cliente=require('../models/cliente');

var controller={

    getClientes:function (req,res){
        Cliente.find({}).sort().exec((err,clientes)=>{
            if(err) return res.status(500).send({message:'Error en recuperar los datos'});
            if(!clientes) return res.status(404).send({message:'No hay clientes para mostrar'});
            return  res.status(200).send({clientes});
        });
    },

    saveCliente: function (req,res){
        var cliente=new Cliente;
        var params=req.body;
        cliente.nombre=params.nombre;
        cliente.apellido=params.apellido
        cliente.cedula=params.cedula
        cliente.direccion=params.direccion
        cliente.telefono=params.telefono
        cliente.email=params.email
     
        cliente.save((err,clienteStored)=>{
            if(err) return res.status(500).send({message:'Error al guardar'});
            if(!clienteStored) return res.status(404).send({message:'No se ha guardado el cliente'});
            return  res.status(200).send({cliente:clienteStored});
        });
    },
    getCliente:function(req,res){
        var clienteId=req.params.id;
        if(clienteId==null) return res.status(404).send({message:'El cliente no existe'});

        Cliente.findById(clienteId,(err,cliente)=>{
            if(err) return res.status(500).send({message:'Error en recuperar los datos'});
            if(!cliente) return res.status(404).send({message:'El cliente no existe'});
            return res.status(200).send({cliente});
        });
    },
    getClienteNombre:function(req,res){
        var clienteId=req.params.id;
        if(clienteId==null) return res.status(404).send({message:clienteId+' No existe nombre'});

        Auto.findOne({'nombre':clienteId} ,(err,cliente)=>{
            if(err) return res.status(500).send({message:clienteId+ 'Error en recuperar los datos'});
            if(!cliente) return res.status(404).send({message:'El cliente no existe'});
            return res.status(200).send({cliente});
        });
    },

    updateCliente:function(req,res){
        var clienteId=req.params.id;
        var update=req.body;

        Cliente.findByIdAndUpdate(clienteId,update,{new:true},(err,clienteUpdate)=>{
            if(err) return res.status(500).send({message:'Error en actualizar los datos'});
            if(!clienteUpdate) return res.status(404).send({message:'No existe el cliente para actualizar'});
            return res.status(200).send({cliente:clienteUpdate});

        });

    },
    deleteCliente:function(req,res){
        var clienteId=req.params.id;
        Cliente.findByIdAndRemove(clienteId,(err,clienteRemoved)=>{
            if(err) return res.status(500).send({message:'Error al eliminar los datos'});
            if(!clienteRemoved) return res.status(404).send({message:'No se puede eliminar el cliente'});
            return res.status(200).send({cliente:clienteRemoved});
        });
    },


}

module.exports=controller;