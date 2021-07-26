const mysqlConnection  = require('../BaseDeDatos');
function IAct(req, res){
    console.log('insertar');
    const {idMes} = req.body;
    console.log(idMes);
    mysqlConnection.query('insert into actividadcreadaa(idMes)values(?)', [idMes], (err, rows, fields) => {
        if(!err) {
          res.json({status: 'Administrador Agregado'});
        } else {
          console.log(err);
        }
    });
};
module.exports = {IAct};