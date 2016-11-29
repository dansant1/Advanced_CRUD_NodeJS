FlowRouter.route('/', {
	name: 'Login',
	action() {
		BlazeLayout.render('login');
	}
});

FlowRouter.route('/secciones', {
	name: 'Secciones',
	action() {
		BlazeLayout.render('secciones');
	}
});

FlowRouter.route('/contenido/:id', {
	name: 'Contenido',
	action() {
		BlazeLayout.render('contenido');
	}
});

FlowRouter.route('/gerencia', {
	name: 'Administrador',
	action() {
		BlazeLayout.render('Administrador', { contenido: 'usuarios' });
	}
});

FlowRouter.route('/gerencia/secciones', {
	name: 'Administrador.secciones',
	action() {
		BlazeLayout.render('Administrador', { contenido: 'AdminSecciones' });
	}
});

FlowRouter.route('/r', {
	name: 'Administrador.registro',
	action() {
		BlazeLayout.render('registro');
	}
});