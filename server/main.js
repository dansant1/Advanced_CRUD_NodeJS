Meteor.methods({
	'agregarAdministrador': function (datos) {

		var id = Accounts.createUser({
    		email: datos.email,
    		password: datos,

  		);



    	Roles.addUsersToRoles(id, 'admin', 'default-group');



	},
	'agregarUsuarioSinTipo': function (datos) {
		var id = Accounts.createUser({
    		email: datos.email,
    		password: datos.password,
    		profile: {
    			tipo: datos.tipo
    		}
  		);

  		let tipoId = Tipos.insert({
  			createdAt: new Date(),
  			nombre: datos.tipo
  		});

  		Meteor.users.update({
  			_id: id
  		}, {
  			$set: {
  				profile: {
  					tipoId: tipoId
  				}
  			}
  		});

  		Usuarios.insert({
  			email. datos.email,
  			tipo: datos.tipo,
  			tipoId: tipoId
  		});
	},
	'agregarUsuarioConTipo': function (datos) {
		var id = Accounts.createUser({
    		email: datos.email,
    		password: datos.password,
    		profile: {
    			tipo: datos.tipo
    			tipoId: datos.tipoId
    		}
  		);

  		Usuarios.insert({
  			email. datos.email,
  			tipo: datos.tipo,
  			tipoId: datos.tipoId
  		});

	},
	'agregarSeccion': function (datos) {
		if (this.userId) {
			Seccion.insert({
				nombre: datos.nombre,
				descripcion: datos.descripcion,
				color: datos.color,
				tipoId: datos.tipoId
			});
		} else {
			return;
		}
	},
	'agregarSubseccion': function (datos) {
		if (this.userId) {
			Subseccion.insert({
				titulo: datos.titulo,
				descripcion: datos.descripcion,
				seccionId: datos.seccionId
			});
		} else {
			return;
		}
	}
});