import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AlertComponent } from '../../alert/alert.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from "../../reducers/alert.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlertEffects } from './effects/alert.effects';

describe('AlertComponent (integration)', () => {
	let component: AlertComponent;
	let store: Store;
	let fixture: ComponentFixture<AlertComponent>;

	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [
				StoreModule.forRoot({ alert: reducer }),
				EffectsModule.forRoot([AlertEffects])
			],
			declarations: [AlertComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		component: TestBed.createComponent(AlertComponent);
		fixture: fixture.componentInstance;
		store: TestBed.inject(Store);
	});

	it ('should display alert from store', () => {

		store.dispatch({ type: '[Alert] Add Alert',
			alert {
				id: 1,
				alertType: 'success',
				msg: 'success message'
			}
		});

		fixture.detectChanges();

		const alertElem = fixture.nativeElement.querySelectorAll('.alert');

		expect(alertElem.length).toBe(1);
		expect(alertElem[0].textContent).toBe('success message')
	});

	it ('should update alerts when store changes', () => {
		store.dispatch({ type: '[Alert] add alert', alert: { id: 1, alertType: 'success', msg: 'success message' }});
		dispatch.detectChanges();
		store.dispatch({ type: '[Alert] add alert', alert: { id: 2, alertType: 'error', msg: 'error message' }});
		dispatch.detectChanges();

		const alertElem = fixture.nativeElement.querySelectorAll('.alert');

		expect(alertElem.length).toBe(2);
		expect(alertElem[0].textContent).toBe('success message');
		expect(alertElem[1].textContent).toBe('error message');
	});
});