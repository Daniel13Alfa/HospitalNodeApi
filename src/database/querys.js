export const queries = {
	//here  goes all the consultshvhb
	getInsumos: 'select * from insumo',
    insertInsumo: 'insert into insumo (nombre_insumo) values (@nombre_insumo)',
	getHospitales: 'select * from hospital',
	insertHospital: 'insert into hospital (nombre_hospital, num_casos) values (@nombre_hospital, @num_casos)',
	customHospitales: 'select id_hospital,nombre_hospital from hospital',
	insertSolicitud: 'insert into solicitud (id_hospital,fecha_solicitud)values(@id_hospital, @fecha_solicitud)',
	insertDetalleSolicitud: 'insert into detalle_solicitud (id_solicitud,id_insumo,cantidad_solicitada)values(@id_solicitud, @id_insumo, @cantidad_solicitada)',
	topSolicitud:'SELECT MAX(id_solicitud) id_solicitud FROM solicitud',
	getEntregas: 'select S.id_solicitud,S.fecha_solicitud,H.nombre_hospital,I.nombre_insumo,DS.cantidad_solicitada from solicitud as S inner join hospital as H on H.id_hospital=S.id_hospital inner join detalle_solicitud as DS on DS.id_solicitud=S.id_solicitud inner join insumo as I on I.id_insumo=DS.id_insumo ',
}