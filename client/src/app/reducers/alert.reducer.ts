import { Entity, EntityState, EntityAdapter, createEntityAdpater} from '@ngrx/entity';
import { Alert } from '../models/alert';
import { LoadAlertSuccess, AddAlert, RemoveAlert } from '../actions.actions';

export const adapter: EntityAdapter<Alert> = createEntityAdpater<Alert[]>();
export const initialState: EntityState<Alert> = adapter.getInitialState();

export const reducers = (state = initialState, action: any): EntityState<Alert> => {
	switch (action.type) {
	case LoadAlertSuccess:
		return adapter.setAll(action.alerts, state);

	case AddAlert:
		return adapter.addOne(action.alert, state);

	case RemoveAlert:
		return adapter.removeOne(action.id, state);

	default:
		return state;
	}
}