Template.registro.events({
	'submit form': function (event, template) {
		event.preventDefault();
		let datos = {
			email: template.find("[name='email']").value,
			password: template.find("[name='password']").value
		}

		Meteor.call('agregarAdministrador', datos, function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log('listo');
			}

		});
	}
});

Template.formularioUsuario.events({
	'click #existente': function (event, template) {
		let datos = {
			email: template.find("[name='email']").value,
			password: template.find("[name='password']").value,
			tipo: $( "#tipo option:selected" ).text(),
			tipoId: $( "#tipo" ).val()
		}

		Meteor.call('agregarUsuarioConTipo', datos, function (err) {
			if (err) {
				console.log(err)
			} else {
				console.log('registrado');
			}
		});
	},
	'click #noexistente': function (event, template) {
		let datos = {
			email: template.find("[name='email2']").value,
			password: template.find("[name='password2']").value,
			tipo: template.find("[name='rol']").value,
		}

		Meteor.call('agregarUsuarioSinTipo', datos, function (err) {
			if (err) {
				console.log(err)
			} else {
				console.log('registrado');
			}
		});
	}
});

Template.listaDeUsuarios.onCreated({
	var self = this;

	self.autorun(function () {
		self.subscribe('usuarios');
	});
});

Template.listaDeUsuarios.helpers({
	usuarios: function () {
		return Usuarios.find();
	}
});