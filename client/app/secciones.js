Template.secciones.events({
	'click .seccion': function () {
		FlowRouter.go('/contenido/' + this._id);
	},
	'click .logout': function () {
		Meteor.logout();
		FlowRouter.go('/');
	}
});

Template.secciones.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('seccionesxtipo');
	});
});

Template.secciones.helpers({
	secciones: function () {
		return Secciones.find();
	}
});

