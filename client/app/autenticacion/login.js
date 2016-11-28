Template.login.events({
	'submit form': function (event, template) {
		event.preventDefault();

		FlowRouter.go('/secciones');
	}
});