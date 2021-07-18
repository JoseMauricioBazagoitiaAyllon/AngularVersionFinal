const mysqlConnection  = require('../BaseDeDatos');
// GET all 

function MAdmi(req, res){
  console.log('Get all departamento');
  mysqlConnection.query('SELECT * FROM administradores', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  }); 
};

// GET only one
function MAAdmi(req, res){
  const { Cod_Admi } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('SELECT * FROM administradores WHERE Cod_Admi = ?', [Cod_Admi], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
};
//Insertar
function IAdmi(req, res){
  console.log('insertar');
  const {User_Name,User_Email,User_password,Cod_Emp,Acceso} = req.body;
  console.log(User_Name,User_Email,User_password,Cod_Emp,Acceso);
  mysqlConnection.query('insert into administradores(User_Name,User_Email,User_password,Cod_Emp,Acceso)values(?,?,?,?,?)', [User_Name,User_Email,User_password,Cod_Emp,Acceso], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Administrador Agregado'});
      } else {
        console.log(err);
      }
  });
};
//Actualizar
function AAdmi(req, res){
  const { User_Name,User_Email,User_password,Cod_Emp,Acceso } = req.body;
  const { Cod_Admi } = req.params;
  console.log(User_Name,User_Email,User_password,Cod_Emp,Acceso)
  console.log('update empleado');
  mysqlConnection.query('update administradores set User_Name = "?", User_Email = "?", User_password = "?", Cod_Emp = ?,Acceso = "?" where Cod_Admi = ?', [User_Name,User_Email,User_password,Cod_Emp,Acceso,Cod_Admi], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'factura Actualizada'});
    } else {
      console.log(err);
    }
  });/*
  mysqlConnection.query('update administradores set User_Name = "?", User_Email = "?", User_password = "?", Cod_Emp = ?,Acceso = "?" where Cod_Admi = ?', [User_Name,User_Email,User_password,Cod_Emp,Acceso,Cod_Admi], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'administrador Actualizado'});
    } else {
      console.log("asassa");
      console.log(err);
    }
  });*/
};
//Eliminar
function EAdmi(req, res){
  const { Cod_Admi } = req.params;
  console.log('delete admi');
  mysqlConnection.query('DELETE FROM administradores WHERE Cod_Admi = ?', [Cod_Admi], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'administrador Eliminado'});
    } else {
      console.log(err);
    }
  });
};
module.exports = {MAdmi,MAAdmi,IAdmi,AAdmi,EAdmi};