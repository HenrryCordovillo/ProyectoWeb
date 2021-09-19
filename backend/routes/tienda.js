'use strict'
var express=require('express');
var ConsecionarioController=require('../controllers/tienda');
var ConsecionarioControllerCliente=require('../controllers/cliente');
var multipart=require('connect-multiparty');
var multiPartMiddleware=multipart({uploadDir:'./uploads'})

var router= express.Router();
//ver informacion de autos
router.get('/autos',ConsecionarioController.getAutos);
//guardar datos de un autos
router.post('/guardar-auto',ConsecionarioController.saveAuto);
//obtener dato de un auto
router.get('/auto/:id',ConsecionarioController.getAuto);
//actualizar
router.put('/auto/:id',ConsecionarioController.updateAuto);
//eliminar
router.delete('/auto/:id',ConsecionarioController.deleteAuto);
//agregar imagenes
router.post('/subir-imagen/:id',multiPartMiddleware,ConsecionarioController.uploadImagen);
//obtener imagen o recuperar
router.get('/get-imagen/:imagen',ConsecionarioController.getImagen);
//buscar por nombre
router.get('/auto-nombre/:id',ConsecionarioController.getAutoNombre);


router.get('/clientes',ConsecionarioControllerCliente.getClientes);
router.post('/guardar-cliente',ConsecionarioControllerCliente.saveCliente);
router.get('/cliente/:id',ConsecionarioControllerCliente.getCliente);
router.put('/cliente/:id',ConsecionarioControllerCliente.updateCliente);
router.delete('/cliente/:id',ConsecionarioControllerCliente.deleteCliente);
module.exports=router;
