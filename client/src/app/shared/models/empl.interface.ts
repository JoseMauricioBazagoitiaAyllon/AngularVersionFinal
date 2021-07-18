export interface Act{
    Nro_Empleado?: number,
    Nombre?: string,
    Celular?: number,
    Direccion?: string,
    Horas_Extras?: number,
    Dias_Puntual?: number,
    Dias_Atrasado?: number,
    Dias_que_Falto?: number,
    Dias_Totales?: number,
    Anhos_De_Antiguedad?: number,
    Mes_de_informacion?: string,
    Rol?: string,
    Departamento?: string
}
export interface Fact{
    Cod_Factura?: number,
    Mes_Emision?: string,
    Mes_Descargo?: string, 
    Cod_Empleados?: number
}
export interface Acti{
    cod_Registros_Emp?: number,
    Cod_Emp?: number,
    Horas_Extras?: number, 
    Dias_P?: number,
    Dias_A?: number,
    Dias_F?: number,
    Dias_Totales?: number,
    Mes_vigente?: string,
    Anhos_Antiguedad?: number
}
