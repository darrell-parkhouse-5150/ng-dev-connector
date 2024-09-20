describe('AlertComponent', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('displays alerts', () => {
		cy.get('[data-test="alert"]').should('be.visible');
		cy.get('[data-test="alert"]').should('contain', 'Success message');
	});

	it('updates alerts when store changes', () => {
		cy.get('[data-test="alert"]').should('contain', 'Success message');
		cy.window().its('store').invoke('dispatch', {
			type: '[Alert] Add Alert',
			alert: {
				id: 2,
				alertType: 'error',
				msg: 'Error Message'
			}
			
		});

		cy.get('[data-test="alert').should('contain', "Error Message");
	});

	it ('removes alerts when dismissed', () => {
		cy.get('[data-test="alert"]').should('be.visible');
		cy.get('[data-test="alert-dismiss"]').click();
		cy.get('[data-test="alert"]').should('not.be.visible');
	});
});