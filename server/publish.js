Meteor.publish('usuarios', function () {
	if (this.userId) {
		return Usuarios.find();
	} else {
		this.stop();
		return;
	}
});

Meteor.publish('tipos', function () {
	if (this.userId) {
		return Tipos.find();
	} else {
		this.stop();
		return;
	}
});

Meteor.publish('secciones', function () {
	if (this.userId) {
		return Secciones.find();
	} else {
		this.stop();
		return;
	}
});

Meteor.publish('seccionesxtipo', function (tipoId) {
	if (this.userId) {
		return Secciones.find({tipoId: tipoId});
	} else {
		this.stop();
		return;
	}
});

Meteor.publish('subsecciones', function (seccionId) {
	if (this.userId) {
		return Subsecciones.find({seccionId: seccionId});
	} else {
		this.stop();
		return;
	}
});