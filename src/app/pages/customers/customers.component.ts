import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  titleDescription = '';
  showClient:boolean = false;
  newFormClient:boolean = false;
  typeClient:boolean = true;
  valueTypeClient:string= "NATURALES";

  constructor() { }

  ngOnInit() {
  }  

  client = {
    id:'',
    inicial: '',
    nombres:'', 
    apellidoPaterno:'', 
    apellidoMaterno:'',
    dni:'',
    direccion:'',
    distrito:'',
    provincia:'',
    departamento:'',
    correo: '',
    fechaNac: '',
    telefono1: '',
    telefono2: ''
  }

  clientJ = {
    id:'',
    inicial: '',
    razonSocial:'', 
    ruc:'',
    direccion:'',
    distrito:'',
    provincia:'',
    departamento:'',
    typeOfClient:'',
    web:'',
    segmento: '',
    sector: ''
  }

customersN = [
{
  id:1,
  inicial: "C",
  nombres:"Cesar Gustavo", 
  apellidoPaterno:"Almeida",
  apellidoMaterno:"Garcia",
  dni:"44069902",
  direccion:"JR. PROGRESO 458 - EL TAMBO - HYO",
  distrito:"HUANCAYO",
  provincia:"HUANCAYO",
  departamento:"JUNIN",
  correo: "customer@mail.com",
  fechaNac: "06/03/2000",
  telefono1: "123456",
  telefono2: "654321"

},
{
  id:2,
  inicial: "O",
  nombres:"OMAR ELISEO", 
  apellidoPaterno:"HUAMAN", 
  apellidoMaterno:"ROJAS",
  dni:"44069902",
  direccion:"JR. ROBLES 332 - COVICA - HYO",
  distrito:"HUANCAYO",
  provincia:"HUANCAYO",
  departamento:"JUNIN",
  correo: "customer@mail.com",
  fechaNac: "06/03/2000",
  telefono1: "123456",
  telefono2: "654321"

},
{
  id:3,
  inicial: "J",
  nombres:"JUAN DIEGO", 
  apellidoPaterno:"GONZALES", 
  apellidoMaterno:"ARIAS",
  dni:"12345698",
  direccion:"JR. PUNO 255 - HYO",
  distrito:"HUANCAYO",
  provincia:"HUANCAYO",
  departamento:"JUNIN",
  correo: "diego@mail.com",
  fechaNac: "06/03/2000",
  telefono1: "123456",
  telefono2: "654321"

},
{
  id:4,
  inicial: "J",
  nombres:"JESUS ALBERTO", 
  apellidoPaterno:"BARCO", 
  apellidoMaterno:"MENDEZ",
  dni:"8526341",
  direccion:"AV. PROGRESO 154 - EL TAMBO",
  distrito:"HUANCAYO",
  provincia:"HUANCAYO",
  departamento:"JUNIN",
  correo: "jesus@mail.com",
  fechaNac: "06/03/2000",
  telefono1: "123456",
  telefono2: "654321"

},
{
  id:5,
  inicial: "R",
  nombres:"ROY TOMMY", 
  apellidoPaterno:"RIOS", 
  apellidoMaterno:"TOVAR",
  dni:"87965489",
  direccion:"AV. ESPERANZA 4587 - CIUDAD UNIVERSITARIA",
  distrito:"HUANCAYO",
  provincia:"HUANCAYO",
  departamento:"JUNIN",
  correo: "customer@mail.com",
  fechaNac: "06/03/2000",
  telefono1: "123456",
  telefono2: "654321"

},
{
  id:6,
  inicial: "J",
  nombres:"JHONATAN EMANUEL", 
  apellidoPaterno:"PAGAN", 
  apellidoMaterno:"GALVEZ",
  dni:"32165478",
  direccion:"AV. LIMA 458 - HYO",
  distrito:"HUANCAYO",
  provincia:"HUANCAYO",
  departamento:"JUNIN",
  correo: "customer@mail.com",
  fechaNac: "2000/06/03",
  telefono1: "123456",
  telefono2: "654321"

},
{
  id:7,
  inicial: "G",
  nombres:"GERMAN FELIX", 
  apellidoPaterno:"CHAMORRO", 
  apellidoMaterno:"MANDUJANO",
  dni:"45789636",
  direccion:"JR. CHAVEZ 154 - EL TAMBO",
  distrito:"HUANCAYO",
  provincia:"HUANCAYO",
  departamento:"JUNIN",
  correo: "customer@mail.com",
  fechaNac: "06/03/2000",
  telefono1: "123456",
  telefono2: "654321"

}
];

customersJ = [
  {
    id:'j1',
    inicial: 'R',
    razonSocial:'REPUESTOS DARIO', 
    ruc:'12345678912',
    direccion:'Jr. Manzanos 588',
    distrito:"EL TAMBO",
    provincia:"HUANCAYO",
    departamento:"JUNIN",
    typeOfClient:'PRIVADO',
    web:'nn',
    segmento: 'PRIVADO',
    sector: 'PRIVADO'
  },
  {
    id:'j2',
    inicial: 'M',
    razonSocial:'MECANICA EL SOL', 
    ruc:'98765432145',
    direccion:'Av. Mariategui 588',
    distrito:"EL TAMBO",
    provincia:"HUANCAYO",
    departamento:"JUNIN",
    typeOfClient:'PRIVADO',
    web:'nn',
    segmento: 'PRIVADO',
    sector: 'PRIVADO'
  },
  {
    id:'j3',
    inicial: 'R',
    razonSocial:'RESTAURANTE MECHITA', 
    ruc:'85296385296',
    direccion:'Av. Tahuantinsuyo 887',
    distrito:"EL TAMBO",
    provincia:"HUANCAYO",
    departamento:"JUNIN",
    typeOfClient:'PRIVADO',
    web:'nn',
    segmento: 'PRIVADO',
    sector: 'PRIVADO'
  },
  {
    id:'j4',
    inicial: 'T',
    razonSocial:'TIENDAS KOKY', 
    ruc:'20104578456',
    direccion:'Calle Real 1255',
    distrito:"HUANCAYO",
    provincia:"HUANCAYO",
    departamento:"JUNIN",
    typeOfClient:'PRIVADO',
    web:'nn',
    segmento: 'PRIVADO',
    sector: 'PRIVADO'  
  }];

cliente(customer){

  if(this.typeClient){

    console.log("CLIENTE NATURAL");
    this.client.id = customer.id;
    this.client.inicial = customer.inicial;
    this.client.nombres = customer.nombres;
    this.client.apellidoPaterno = customer.apellidoPaterno;
    this.client.apellidoMaterno = customer.apellidoMaterno;
    this.client.dni = customer.dni;
    this.client.direccion = customer.direccion;
    this.client.distrito = customer.distrito;
    this.client.provincia = customer.provincia;
    this.client.departamento = customer.departamento;
    this.client.correo = customer.correo;
    this.client.fechaNac = customer.fechaNac;
    this.client.telefono1 = customer.telefono1;
    this.client.telefono2 = customer.telefono2;
    console.log("CLIENTE NATURAL", this.client);
  }else{
    this.clientJ.id = customer.id;
    this.clientJ.inicial = customer.inicial;
    this.clientJ.razonSocial = customer.razonSocial;
    this.clientJ.ruc = customer.ruc;
    this.clientJ.direccion = customer.direccion;
    this.clientJ.distrito = customer.distrito;
    this.clientJ.provincia = customer.provincia;
    this.clientJ.departamento = customer.departamento;
    this.clientJ.typeOfClient = customer.typeOfClient;
    this.clientJ.web = customer.web;
    this.clientJ.segmento =  customer.segmento;
    this.clientJ.sector =  customer.sector;

    console.log("CLIENTE JURIDICO", this.clientJ);
  }

  // this.showClient = true;

  // this.titleDescription = 'DESCRIPCION DE CLIENTE';  

}

newClient(){
  this.titleDescription = 'NUEVO CLIENTE NATURAL';
  this.client.id = '';
  this.client.inicial = '';
  this.client.nombres = '';
  this.client.apellidoPaterno = '';
  this.client.apellidoMaterno = '';
  this.client.dni = '';
  this.client.direccion = '';
  this.client.distrito = '';
  this.client.provincia = '';
  this.client.departamento = '';
  this.client.correo = '';
  this.client.fechaNac = '';
  this.client.telefono1 = '';
  this.client.telefono2 = '';

  this.showClient = true;
}

clientPerspective(){
  this.typeClient = !this.typeClient;

  if(this.typeClient){
    this.valueTypeClient= "NATURALES";
  }else{
    this.valueTypeClient= "JURIDICOS";
  }

  console.log(this.typeClient,this.valueTypeClient);
}

}
