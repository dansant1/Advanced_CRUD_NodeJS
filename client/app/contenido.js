Template.contenido.events({
	'click .atras': function (event, template) {
		
		FlowRouter.go('/secciones');

	}
});

Template.contenido.onCreated(function () {
	var self = this;

	self.autorun(function () {
		let seccionId = FlowRouter.getParam('id');
		self.subscribe('secciones');
		self.subscribe('subsecciones', seccionId);
		self.subscribe('archivos');
	});
});

Template.contenido.helpers({
	titulo: function () {
		let seccionId = FlowRouter.getParam('id');
		return Secciones.findOne({_id: seccionId}).nombre
	},
	subsecciones: function () {
		let seccionId = FlowRouter.getParam('id');
		return Subseccion.find({seccionId: seccionId});
	},
	archivos: function (subseccionId) {
		return Archivos.find({'metadata.subseccionId': subseccionId})
	}
});