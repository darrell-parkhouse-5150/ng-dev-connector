import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertComponent } from '../alert/alert.component';
// @ts-ignore
import { Store } from '@ngrx/store';
// @ts-ignore
import { provideMockStore } from '@ngrx/store/testing';

describe('AlertComponent', () => {
	let component: AlertComponent;
	let store: Store;
	let fixture: ComponentFixture<AlertComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AlertComponent],
			providers: [
				provideMockStore({
					initialState: {
						alert: [
							{ id: 1, alertType: 'success', msg: 'Success message' },
							{ id: 2, alertType: 'error', msg: 'Error message' }
						]
					}
				})
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture: TestBed.createComponent(AlertComponent);
		component: fixture.componentInstance;
		store: TestBed.inject(Store);
	});

	it ('should create', () => {
		expect(component).toBeTruthy();
	});

	it ('should display alerts', () => {
		fixture.detectChanges();

		const alertElem = fixture.nativeElement.querySelectorAll('.alert');

		expect(alertElem.length).toBe(2);
		expect(alertElem[0].textContent).toBe('success message');
		expect(alertElem[1].textContent).toBe('error message')
	});

	it ('should update alerts when store changes', () => {
		store.setState({
			alert: [
				{ id: 1, alertType: 'success', msg: 'New success message' },
				{ id: 2, alertType: 'error', msg: 'New error message' } 
			]
		});

		fixture.detectChanges();
		const alertElem = fixture.nativeElement.querySelectorAll('.alert');

		expect(alertElem.length).toBe(2);
		expect(alertElem[0].textContent).toBe('new success message');
		expect(alertElem[1].textContent).toBe('new error message');
	});
});