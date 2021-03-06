const mysqlConnection  = require('../BaseDeDatos');
// GET all 

function MVC(req, res){
  console.log('Get all departamento');
  mysqlConnection.query('SELECT * FROM Vista_BD_Completa', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

// GET only one
function MAVC(req, res){
  const { Cod_Emp } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('SELECT * FROM Vista_BD_Completa WHERE Cod_Emp = ?', [Cod_Emp], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
};
function MAE(req, res){
  console.log('Get all Actividad_De_Empleado');
  mysqlConnection.query('SELECT * FROM Actividad_De_Empleado', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

// GET only one
function MAAE(req, res){
  const { Cod_Emp } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('SELECT * FROM Actividad_De_Empleado WHERE Nro_Empleado = ?', [Cod_Emp], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

function MDP(req, res){
  console.log('Get all departamento');
  mysqlConnection.query('SELECT * FROM Descuentos_Que_Pagan', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

// GET only one
function MADP(req, res){
  const { Cod_Emp } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('SELECT * FROM Descuentos_Que_Pagan WHERE Nro_Empleado = ?', [Cod_Emp], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

function MIP(req, res){
  console.log('Get all departamento');
  mysqlConnection.query('SELECT * FROM Impuestos_Que_Pagan', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

// GET only one
function MAIP(req, res){
  const { Cod_Emp } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('SELECT * FROM Impuestos_Que_Pagan WHERE Nro_Empleado =  ?', [Cod_Emp], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

function MTSD(req, res){
  console.log('Get all departamento');
  mysqlConnection.query('SELECT * FROM Total_Sueldo_Dias', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

// GET only one
function MATSD(req, res){
  const { Cod_Emp } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('SELECT * FROM Total_Sueldo_Dias WHERE Cod_Emp = ?', [Cod_Emp], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
};

function MTSDI(req, res){
  console.log('Get all departamento');
  mysqlConnection.query('SELECT * FROM Total_Sueldo_Dias_Informe', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

// GET only one
function MATSDI(req, res){
  const { Cod_Emp } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('SELECT * FROM Total_Sueldo_Dias_Informe WHERE Cod_Emp = ?', [Cod_Emp], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
};
function MTSI(req, res){
  console.log('Get all departamento');
  mysqlConnection.query('SELECT * FROM Total_Sueldo_informe', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

// GET only one
function MATSI(req, res){
  const { Cod_Emp } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('SELECT * FROM Total_Sueldo_informe WHERE nro_Empleado = ?', [Cod_Emp], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

function MBI(req, res){
  console.log('Get all departamento');
  mysqlConnection.query('SELECT * FROM beneficios_Informe', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

// GET only one
function MABI(req, res){
  const { Cod_Emp } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('SELECT * FROM beneficios_Informe WHERE Nro_Empleado = ?', [Cod_Emp], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
}; 

function MA(req, res){
  console.log('Get all admin');
  mysqlConnection.query('select * from AdminView', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};
function MAA(req, res){
  const { Codigo } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('select * from AdminView where Codigo =  ?', [Codigo], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; 

function MF(req, res){
  console.log('Get all admin');
  mysqlConnection.query('select * from viewfacturas', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};
function MAFE(req, res){
  const { Empresa_Factura } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('select * from Facturas where Empresa_Factura = "?"', [Empresa_Factura], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; 
function MAFEmp(req, res){
  const { nro_Empleado } = req.params; 
  console.log('select * from Facturas where nro_Empleado =',nro_Empleado);
  mysqlConnection.query('select * from Facturas where nro_Empleado = ?', [nro_Empleado], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
}; 
function MAFM(req, res){
  const { Mes_Descargo } = req.params; 
  console.log('Get a empleado');
  mysqlConnection.query('select * from Facturas where Mes_Descargo = "?"', [Mes_Descargo], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
}; 









module.exports = {MVC,MAVC,MAE,MAAE,MDP,MADP,MIP,MAIP,MTSD,MATSD,MTSDI,MATSDI,MTSI,MATSI,MBI,MABI,MA,MAA,MF,MAFE,MAFEmp,MAFM};