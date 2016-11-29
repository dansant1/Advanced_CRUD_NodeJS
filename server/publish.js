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

Meteor.publish('seccionesxtipo', function () {
	if (this.userId) {
		let tipoId = Meteor.users.findOne({_id: this.userId}).profile.tipoId;
		return Secciones.find({tipoId: tipoId});
	} else {
		this.stop();
		return;
	}
});

Meteor.publish('subsecciones', function (seccionId) {
	if (this.userId) {
		return Subseccion.find({seccionId: seccionId});
	} else {
		this.stop();
		return;
	}
});

Meteor.publish('archivos', function () {
	if (this.userId) {
		return Archivos.find();
	} else {
		this.stop();
		return;
	}
});