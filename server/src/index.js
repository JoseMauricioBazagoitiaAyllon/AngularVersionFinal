const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const api = express.Router();
const a = require("./Autenticacion/AuthFun");
const P1 = require("./rutas/P1");
const Dep = require("./rutas/Departamentos");
const Des = require("./rutas/Descuentos");
const Emp = require("./rutas/Empleados");
const I = require("./rutas/Impuestos");
const R = require("./rutas/Roles");
const SPD = require("./rutas/sueldo_paga_descuento");
const SPI = require("./rutas/sueldo_paga_impuesto");
const S = require("./rutas/Sueldos");
const V = require("./rutas/Vistas");
const auth = require("./Autenticacion/Autenticacion")
const admi = require("./rutas/admi")
const RE = require("./rutas/registro_Emp")
const F = require("./rutas/factura")
const FP = require("./rutas/facturas_presentadas")

//P1.MostrarEmp();

//setting
app.set('port', process.env.PORT || 3000);
//middleware
app.use(express.json());
//doutes
//P1
//Empleados
app.get('/api/Empleados',a.verifyToken,Emp.MEmp);//,a.verifyToken
app.get('/api/Empleados/:Cod_Emp',a.verifyToken,Emp.MAEmp);//a.verifyToken,
app.post('/api/Empleados',a.verifyToken,Emp.IEmp);//a.verifyToken,
app.put('/api/Empleados/:Cod_Emp',a.verifyToken,Emp.AEmp);//a.verifyToken,
app.delete('/api/Empleados/:Cod_Emp',a.verifyToken,Emp.EEmp);//a.verifyToken,
//Sueldos
app.get('/api/Sueldos',a.verifyToken,S.MS);
app.get('/api/Sueldos/:Cod_Sueldo',a.verifyToken,S.MAS);
app.post('/api/Sueldos',a.verifyToken,S.IS);
app.put('/api/Sueldos/:Cod_Sueldo',a.verifyToken,S.AS);
app.delete('/api/Sueldos/:Cod_Sueldo',a.verifyToken,S.ES);
//DEpartamentos
app.get('/api/Departamento',a.verifyToken,Dep.MDep);
app.get('/api/Departamento/:Cod_Dep',a.verifyToken,Dep.MADep);
app.post('/api/Departamento',a.verifyToken,Dep.IDep);
app.put('/api/Departamento/:Cod_Dep',a.verifyToken,Dep.ADep);
app.delete('/api/Departamento/:id',a.verifyToken,Dep.EDep);
//Descuentos
app.get('/api/Descuentos',a.verifyToken,Des.MDes);
app.get('/api/Descuentos/:Cod_Descuento',a.verifyToken,Des.MADes);
app.post('/api/Descuentos',a.verifyToken,Des.IDes);
app.put('/api/Descuentos/:Cod_Descuento',a.verifyToken,Des.ADes);
app.delete('/api/Descuentos/:Cod_Descuento',a.verifyToken,Des.EDes);
//Impuestos
app.get('/api/Impuestos',a.verifyToken,I.MI);
app.get('/api/Impuestos/:Cod_Imp',a.verifyToken,I.MAI);
app.post('/api/Impuestos',a.verifyToken,I.II);
app.put('/api/Impuestos/:Cod_Imp',a.verifyToken,I.AI);
app.delete('/api/Impuestos/:Cod_Imp',a.verifyToken,I.EI);
//Roles
app.get('/api/Roles',a.verifyToken,R.MR);
app.get('/api/Roles/:Cod_Rol',a.verifyToken,R.MAR);
app.post('/api/Roles',a.verifyToken,R.IR);
app.put('/api/Roles/:Cod_Rol',a.verifyToken,R.AR);
app.delete('/api/Roles/:Cod_Rol',a.verifyToken,R.ER);
//Admin
app.get('/api/Admi',a.verifyToken,admi.MAdmi);
app.get('/api/Admi/:Cod_Admi',a.verifyToken,admi.MAAdmi);
app.post('/api/Admi',a.verifyToken,admi.IAdmi);
app.put('/api/Admi/:Cod_Admi',a.verifyToken,admi.AAdmi);
app.delete('/api/Admi/:Cod_Admi',a.verifyToken,admi.EAdmi);

//Facturas

app.get('/api/FacturasPresentadas',a.verifyToken,FP.MFP);
app.get('/api/ViewFacturas',a.verifyToken,V.MF);
//Empleado
app.get('/api/Actividad_De_Empleado/:Cod_Emp',a.verifyToken,V.MAAE);
app.get('/api/Actividad_De_Empleado',a.verifyToken,V.MAE);
app.get('/api/Descuentos_Que_Pagan/:Cod_Emp',a.verifyToken,V.MADP);
app.get('/api/Descuentos_Que_Pagan',a.verifyToken,V.MDP);
app.get('/api/Impuestos_Que_Pagan',a.verifyToken,V.MIP);
app.get('/api/Impuestos_Que_Pagan/:Cod_Emp',a.verifyToken,V.MAIP);
app.get('/api/beneficios_Informe',a.verifyToken,V.MBI);
app.get('/api/beneficios_Informe/:Cod_Emp',a.verifyToken,V.MABI);
app.get('/api/VistaFacturas',a.verifyToken,V.MF);
//app.get('/api/VistaFacturas/:Empresa_Factura',a.verifyToken,V.MAFE);
app.get('/api/Total_Sueldo_informe',a.verifyToken,V.MTSI);
app.get('/api/Total_Sueldo_informe/:Cod_Emp',a.verifyToken,V.MATSI);
app.get('/api/VistaFacturas/:nro_Empleado',a.verifyToken,V.MAFEmp);
//app.get('/api/VistaFacturas/:Mes_Descargo',a.verifyToken,V.MAFM);
app.get('/api/FacturasPresentadas',a.verifyToken,FP.MFP);
app.post('/api/FacturasPresentadas',a.verifyToken,FP.IFP);
app.get('/api/FacturasPresentadas/:Cod_Factura',a.verifyToken,FP.MAFP);
app.get('/api/RE',a.verifyToken,RE.MREmp);
app.get('/api/RE/:cod_Registros_Emp',a.verifyToken,RE.MAREmp);
app.post('/api/RE',a.verifyToken,RE.IREmp);
app.put('/api/RE/:cod_Registros_Emp',a.verifyToken,RE.AREmp);
app.delete('/api/RE/:cod_Registros_Emp',a.verifyToken,RE.EREmp);
//-----------------------------------------------------------------------------
//Get
app.get('/P1',a.verifyToken,P1.MostrarEmp);

//Muchos A Mucho Tablas
app.get('/SPD',a.verifyToken,SPD.MSPD);
app.get('/SPI',a.verifyToken,SPI.MSPI);
//Vistas 
app.get('/Vista_BD_Completa',a.verifyToken,V.MVC);
app.get('/Actividad_De_Empleado',a.verifyToken,V.MAE);


app.get('/Total_Sueldo_Dias',a.verifyToken,V.MTSD);
app.get('/Total_Sueldo_Dias_Informe',a.verifyToken,V.MTSDI);



//---------------------------------------------------------------------
//Get Individual
app.get('/SPD/:Cod_Sueldo',a.verifyToken,SPD.MASPD);
app.get('/SPI/:Cod_Sueldo',a.verifyToken,SPI.MASPI);

app.get('/Facturas/:Cod_Factura',a.verifyToken,F.MAF);

//Vistas
app.get('/Vista_BD_Completa/:Cod_Emp',a.verifyToken,V.MAVC);

app.get('/Descuentos_Que_Pagan/:Cod_Emp',a.verifyToken,V.MADP);

app.get('/Total_Sueldo_Dias/:Cod_Emp',a.verifyToken,V.MATSD);
app.get('/Total_Sueldo_Dias_Informe/:Cod_Emp',a.verifyToken,V.MATSDI);


app.get('/Admin',a.verifyToken,V.MA);
app.get('/Admin/:Codigo',a.verifyToken,V.MAA);


//---------------------------------------------------------------------
//Post
app.post('/SPD',a.verifyToken,SPD.ISPD);
app.post('/SPI',a.verifyToken,SPI.ISPI);

////Login
app.post('/api/login',auth.login);
//
//---------------------------------------------------------------------
//Put
app.put('/SPD/:Cod_Sueldo',a.verifyToken,SPD.ASPD);
app.put('/SPI/:Cod_Sueldo',a.verifyToken,SPI.ASPI);

//---------------------------------------------------------------------
//delete
app.delete('/SPD/:Cod_Sueldo',a.verifyToken,SPD.ESPD);
app.delete('/SPI/:Cod_Sueldo',a.verifyToken,SPI.ESPI);

//app.use(require('./Autenticacion/Autenticacion'))
//----------------------------------------------------------------------
//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });