Template.login.events({
	'click .ingresar': function (event, template) {
		event.preventDefault();

		console.log('hola');

		let email = template.find("[name='email']").value;
		let password = template.find("[name='password']").value;
		Meteor.loginWithPassword(email, password);

		FlowRouter.go('/secciones');
	}
});