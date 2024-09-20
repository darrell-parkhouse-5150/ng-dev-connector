import { createAction, props } from '@ngrx/store';
import { Alert } from '../alert/alert.component.ts';

/** 
 * create action for all of the alerts:
 * 	success,
 * 	danger (error),
 * 	warning,
 *  info,
 *
 */
export const LoadAlertSuccess = createAction(
	'[Alert] Load Alerts Success',
	props<{alerts: Alert[]}>()
)

export const AddAlert = createAction(
	'[Alert] Add Alert',
	props<{alert: Alert}>()
)

export const RemoveAlert = createAction(
	'[Alert] Add Alert',
	props<{id: string}>()
)
